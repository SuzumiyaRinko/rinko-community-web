import { showToast } from "vant";
import { useRouter } from "vue-router";

const router = useRouter();

// 判断是否有权限
export function checkAuthority(baseResponse) {
    if (baseResponse.code == 401) {
        showToast({
            message: "身份过期\n请重新登录",
            icon: "cross",
        });
        return false;
    }
    return true
}

// 判断是否有资源
export function checkResource(baseResponse) {
    if (baseResponse.code != 200) {
        showToast({
            message: "资源不存在",
            icon: "cross",
        });
        return false;
    }
    return true;
}

// 睡眠
export function sleep(time) {
    return new Promise((resolve) => setTimeout(resolve, time));
}

// 存储回车符（前端展现）
export function saveEnter2Br4Web(str) {
    return str.replace(/\n|\r\n/g, "<br>")
}

// 存储回车符（后台保存）
export function saveEnter2Br4Save(str) {
    return str.replace(/\n|\r\n/g, "%%br%%")
}

// 显示未读消息数
export function unreadCountStr(num) {
    if (num == 0) {
        return "";
    } else if (num > 0 && num <= 99) {
        return num;
    } else if (num > 0) {
        return "99+"
    }
}

// 表情转码
export function emojiToStr(str) {
    const patt = /[\ud800-\udbff][\udc00-\udfff]/g; // 检测utf16字符正则
    str = str.replace(patt, (char) => {
        let H;
        let L;
        let code;
        let s;

        if (char.length === 2) {
            H = char.charCodeAt(0); // 取出高位
            L = char.charCodeAt(1); // 取出低位
            code = (H - 0xd800) * 0x400 + 0x10000 + L - 0xdc00; // 转换算法
            s = `&#${code};`;
        } else {
            s = char;
        }

        return s;
    });

    return str;
};
// 表情解码
export function strToEmoji(strObj) {
    const patt = /&#\d+;/g;
    const arr = strObj.match(patt) || [];

    let H;
    let L;
    let code;

    for (let i = 0; i < arr.length; i += 1) {
        code = arr[i];
        code = code.replace("&#", "").replace(";", "");
        // 高位
        H = Math.floor((code - 0x10000) / 0x400) + 0xd800;
        // 低位
        L = ((code - 0x10000) % 0x400) + 0xdc00;
        code = `&#${code};`;
        const s = String.fromCharCode(H, L);
        strObj = strObj.replace(code, s);
    }
    return strObj;
};

// 判断设备型号
var u = navigator.userAgent; 
var isAndroid = u.indexOf('Android') > -1 || u.indexOf('Adr') > -1; //android终端 
var isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端 