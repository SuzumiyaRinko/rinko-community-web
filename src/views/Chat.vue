<template>
  <div class="chat">
    <!-- Top -->
    <div class="top">
      <van-icon name="arrow-left" color="#1776d2" size="0.6rem" />
      <span class="back" @click="router.go(-1)">返回</span>
      <span class="title">{{ targetUserInfo.nickname }}</span>
    </div>

    <!-- Content -->
    <div id="scrollingContent" class="content">
      <!-- 无消息时的提示 -->
      <div style="text-align: center">
        <img
          v-if="messagesPage.data.length == 0"
          class="noAnyMessage"
          :src="`${$store.state.SystemConst.resourcesPrefix}${noAnyMessage}`"
          alt="noAnyMessage"
        />
        <span v-if="messagesPage.data.length == 0" class="noAnyMessageWarning"
          >暂时没有任何消息</span
        >
      </div>

      <!-- 遍历Message -->
      <div
        class="message"
        v-for="(message, idx) in messagesPage.data"
        key="idx"
      >
        <!-- 对方的消息 -->
        <div v-if="message.fromUserId == wsChatTargetId" class="oneMessage">
          <div class="oneMessageSimpleUser_left">
            <img
              class="avatar item"
              :src="`${$store.state.SystemConst.resourcesPrefix}${targetUserInfo.avatarUrl}`"
              alt="用户头像"
              @click="gotoUser(targetUserInfo.id)"
            />
            <svg
              v-if="targetUserInfo.gender == 1"
              t="1677032158928"
              class="gender"
              viewBox="0 0 1024 1024"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              p-id="2491"
              width="200"
              height="200"
            >
              <path
                d="M511.843434 512m-446.708971 0a446.708971 446.708971 0 1 0 893.417942 0 446.708971 446.708971 0 1 0-893.417942 0Z"
                fill="#FFFFFF"
                p-id="2492"
              ></path>
              <path
                d="M424.111301 818.825061c-59.328223 0-115.140367-23.107277-157.101038-65.081251-86.620823-86.620823-86.620823-227.581252 0-314.215378 41.960671-41.973974 97.771791-65.081251 157.101038-65.081251 59.355853 0 115.140367 23.12058 157.101037 65.081251 41.960671 41.973974 65.081251 97.771791 65.081251 157.11434s-23.12058 115.140367-65.081251 157.101038-97.745185 65.081251-157.101037 65.081251z m0-360.620268c-36.97103 0-71.733765 14.409175-97.881285 40.543392-53.957913 53.984518-53.957913 141.804656 0 195.775872 26.14752 26.14752 60.910255 40.543392 97.881285 40.543391s71.733765-14.395872 97.881284-40.543391c26.14752-26.14752 40.543392-60.910255 40.543392-97.881285s-14.395872-71.733765-40.543392-97.894587c-26.146497-26.14752-60.909232-40.543392-97.881284-40.543392z"
                fill="#75B9EB"
                p-id="2493"
              ></path>
              <path
                d="M551.602973 511.016603c-10.715039 0-21.430078-4.090155-29.609365-12.269442-16.358573-16.358573-16.358573-42.874483 0-59.219753L672.577209 288.943808h-42.833551c-23.12058 0-41.878806-18.744923-41.878806-41.878806s18.758226-41.878806 41.878806-41.878806h143.958716c16.931624 0 32.200376 10.210549 38.689161 25.847691 6.488785 15.650445 2.889817 33.67189-9.078773 45.641503L581.212338 498.747161c-8.179286 8.179286-18.894326 12.269441-29.609365 12.269442z"
                fill="#75B9EB"
                p-id="2494"
              ></path>
              <path
                d="M773.703397 288.943808h-143.958716c-23.12058 0-41.878806-18.744923-41.878806-41.878806s18.758226-41.878806 41.878806-41.878806h143.958716c23.12058 0 41.878806 18.744923 41.878806 41.878806s-18.758226 41.878806-41.878806 41.878806z"
                fill="#75B9EB"
                p-id="2495"
              ></path>
              <path
                d="M779.864724 439.050548c-23.12058 0-41.878806-18.744923-41.878806-41.878806V253.226329c0-23.133883 18.758226-41.878806 41.878806-41.878807s41.878806 18.744923 41.878806 41.878807v143.945413c0 23.133883-18.758226 41.878806-41.878806 41.878806z"
                fill="#75B9EB"
                p-id="2496"
              ></path>
              <path
                d="M779.864724 439.050548c-23.12058 0-41.878806-18.744923-41.878806-41.878806V253.226329c0-23.133883 18.758226-41.878806 41.878806-41.878807s41.878806 18.744923 41.878806 41.878807v143.945413c0 23.133883-18.758226 41.878806-41.878806 41.878806z"
                fill="#75B9EB"
                p-id="2497"
              ></path>
            </svg>
            <svg
              v-if="targetUserInfo.gender == 2"
              t="1677032186969"
              class="gender"
              viewBox="0 0 1024 1024"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              p-id="2651"
              width="200"
              height="200"
            >
              <path
                d="M510.887666 512m-446.708971 0a446.708971 446.708971 0 1 0 893.417942 0 446.708971 446.708971 0 1 0-893.417942 0Z"
                fill="#FFFFFF"
                p-id="2652"
              ></path>
              <path
                d="M510.87948 578.902736c-123.673717 0-224.282113-100.607372-224.282113-224.282113s100.607372-224.282113 224.282113-224.282113 224.282113 100.607372 224.282112 224.282113-100.608396 224.282113-224.282112 224.282113z m0-364.80559c-77.486792 0-140.523477 63.036685-140.523477 140.523477s63.036685 140.523477 140.523477 140.523477 140.523477-63.036685 140.523477-140.523477-63.036685-140.523477-140.523477-140.523477z"
                fill="#FF3EC9"
                p-id="2653"
              ></path>
              <path
                d="M510.87948 896.635217c-23.12058 0-41.878806-18.744923-41.878806-41.878806V537.02393c0-23.133883 18.758226-41.878806 41.878806-41.878806s41.878806 18.744923 41.878806 41.878806v317.732481c0 23.133883-18.758226 41.878806-41.878806 41.878806z"
                fill="#FF3EC9"
                p-id="2654"
              ></path>
              <path
                d="M669.752884 737.762837H352.033705c-23.12058 0-41.878806-18.744923-41.878806-41.878806s18.758226-41.878806 41.878806-41.878807h317.719179c23.12058 0 41.878806 18.744923 41.878806 41.878807s-18.758226 41.878806-41.878806 41.878806z"
                fill="#FF3EC9"
                p-id="2655"
              ></path>
            </svg>
            <svg
              v-if="targetUserInfo.roles.indexOf(1) != -1"
              t="1677033137631"
              class="famous"
              viewBox="0 0 1024 1024"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              p-id="2890"
              width="200"
              height="200"
            >
              <path
                d="M738.460185 854.903447c22.705905-14.191191 19.867667-59.603001 39.735334-76.63243 19.867667-17.029429 65.279478-5.676476 82.308907-25.544143 17.029429-19.867667 0-62.44124 11.352953-85.147145 11.352953-22.705905 59.603001-28.382382 68.117716-53.926525 8.514714-22.705905-22.705905-59.603001-17.029429-85.147145 5.676476-25.544143 45.411811-48.250049 45.411811-73.794192 0-25.544143-39.735334-48.250049-45.411811-73.794192-5.676476-25.544143 25.544143-59.603001 17.029429-85.147145-8.514714-25.544143-53.926525-31.22062-68.117716-53.926525-11.352953-22.705905 5.676476-65.279478-11.352953-85.147145-17.029429-19.867667-62.44124-11.352953-82.308907-25.544143-19.867667-17.029429-17.029429-62.44124-39.735334-76.63243-22.705905-14.191191-62.44124 11.352953-85.147145 2.838238-22.705905-8.514714-36.897096-53.926525-62.44124-56.764763-25.544143-5.676476-53.926525 31.22062-79.470669 31.22062S457.474607-2.244479 431.930463 0.593759c-25.544143 5.676476-39.735334 48.250049-62.44124 56.764763-22.705905 8.514714-62.44124-17.029429-85.147145-2.838238C261.636173 68.711475 264.474412 116.961524 244.606744 131.152715 224.739077 148.182144 179.327267 139.667429 162.297838 159.535097c-17.029429 19.867667 0 62.44124-11.352953 85.147145-11.352953 22.705905-59.603001 28.382382-68.117716 53.926525-8.514714 22.705905 22.705905 59.603001 17.029429 85.147145C97.01836 406.461817 57.283026 429.167722 57.283026 454.711866c0 25.544143 39.735334 48.250049 45.411811 73.794192 5.676476 25.544143-25.544143 59.603001-17.029429 85.147145 8.514714 25.544143 53.926525 31.22062 68.117716 53.926525 11.352953 22.705905-5.676476 65.279478 11.352953 85.147145 17.029429 19.867667 62.44124 11.352953 82.308907 25.544143 19.867667 17.029429 17.029429 62.44124 39.735334 76.63243 22.705905 14.191191 62.44124-11.352953 85.147145-2.838238 22.705905 8.514714 36.897096 53.926525 62.44124 56.764763 25.544143 5.676476 53.926525-31.22062 79.470669-31.22062s53.926525 36.897096 79.470669 31.22062c25.544143-5.676476 39.735334-48.250049 62.44124-56.764763C676.018945 840.712256 715.75428 866.256399 738.460185 854.903447zM511.401132 823.682827C307.047984 823.682827 142.43017 659.065013 142.43017 454.711866S307.047984 85.740904 511.401132 85.740904s368.970961 164.617813 368.970961 368.970961S715.75428 823.682827 511.401132 823.682827z"
                fill="#333333"
                p-id="2891"
              ></path>
              <path
                d="M255.959697 903.153495c-25.544143-14.191191-22.705905-68.117716-45.411811-85.147145-22.705905-19.867667-73.794192-8.514714-90.823621-31.22062 0 0-2.838238-2.838238-2.838238-2.838238l-48.250049 48.250049c-22.705905 22.705905-14.191191 45.411811 14.191191 53.926525l31.22062 8.514714c31.22062 8.514714 62.44124 39.735334 68.117716 68.117716L193.518457 993.977117c8.514714 31.22062 31.22062 36.897096 53.926525 14.191191l107.85305-107.85305c0 0-2.838238 0-2.838238-2.838238C324.077413 888.962305 281.50384 917.344686 255.959697 903.153495z"
                fill="#333333"
                p-id="2892"
              ></path>
              <path
                d="M905.916236 783.947493c0 0-2.838238 2.838238-2.838238 2.838238-17.029429 22.705905-68.117716 11.352953-90.823621 31.22062-22.705905 19.867667-19.867667 70.955954-45.411811 85.147145-25.544143 14.191191-68.117716-14.191191-96.500098-2.838238 0 0-2.838238 0-2.838238 2.838238l107.85305 107.85305c22.705905 22.705905 45.411811 14.191191 53.926525-14.191191l8.514714-31.22062c8.514714-31.22062 39.735334-62.44124 68.117716-68.117716l31.22062-8.514714c31.22062-8.514714 36.897096-31.22062 14.191191-53.926525L905.916236 783.947493z"
                fill="#333333"
                p-id="2893"
              ></path>
              <path
                d="M727.107232 258.873432c-11.352953 0-28.382382 0-42.573572 0-31.22062 0-62.44124 0-90.823621-2.838238 0 2.838238-2.838238 5.676476-2.838238 8.514714 0 2.838238 0 5.676476 0 5.676476 0 8.514714 5.676476 14.191191 14.191191 14.191191 17.029429 2.838238 28.382382 5.676476 34.058858 11.352953 5.676476 5.676476 5.676476 11.352953 5.676476 17.029429 0 11.352953-8.514714 39.735334-25.544143 82.308907s-42.573572 107.85305-76.63243 190.161957L454.636368 383.755912c-8.514714-22.705905-17.029429-39.735334-19.867667-51.088287-5.676476-14.191191-5.676476-22.705905-5.676476-25.544143 0-5.676476 2.838238-8.514714 8.514714-14.191191 5.676476-2.838238 17.029429-5.676476 34.058858-8.514714 8.514714 0 14.191191-5.676476 14.191191-14.191191 0-5.676476 0-8.514714-2.838238-14.191191-19.867667 0-36.897096 2.838238-53.926525 2.838238s-36.897096 0-62.44124 0c-19.867667 0-39.735334 0-53.926525 0C292.856793 258.873432 275.827364 256.035194 258.797935 256.035194 255.959697 261.71167 255.959697 267.388147 255.959697 270.226385 255.959697 278.741099 261.636173 284.417576 270.150888 284.417576c11.352953 0 17.029429 2.838238 25.544143 5.676476s11.352953 5.676476 17.029429 8.514714c5.676476 2.838238 8.514714 8.514714 11.352953 14.191191 2.838238 5.676476 8.514714 14.191191 11.352953 25.544143L483.01875 667.579728c8.514714 17.029429 11.352953 28.382382 17.029429 34.058858 2.838238 5.676476 8.514714 8.514714 17.029429 8.514714 5.676476 0 11.352953 0 17.029429-2.838238l156.103099-371.809199c5.676476-14.191191 14.191191-22.705905 28.382382-31.22062 11.352953-5.676476 25.544143-14.191191 36.897096-19.867667 5.676476-2.838238 8.514714-5.676476 11.352953-5.676476S766.842566 273.064623 766.842566 270.226385c0-2.838238 0-8.514714-2.838238-14.191191C752.651376 256.035194 741.298423 258.873432 727.107232 258.873432z"
                fill="#333333"
                p-id="2894"
              ></path>
            </svg>
          </div>
          <div class="oneMessageCreateTime_left">{{ message.createTime }}</div>
          <div
            class="oneMessageContent_left bgc_grey"
            v-html="message.content"
          />
        </div>
        <!-- 自己的消息 -->
        <div
          v-if="message.fromUserId == myUserId"
          class="oneMessage"
          style="text-align: right"
        >
          <div class="oneMessageSimpleUser_right">
            <img
              class="avatar item"
              :src="`${$store.state.SystemConst.resourcesPrefix}${myUserInfo.avatarUrl}`"
              alt="用户头像"
              @click="gotoUser(myUserInfo.id)"
            />
            <svg
              v-if="myUserInfo.gender == 1"
              t="1677032158928"
              class="gender"
              viewBox="0 0 1024 1024"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              p-id="2491"
              width="200"
              height="200"
            >
              <path
                d="M511.843434 512m-446.708971 0a446.708971 446.708971 0 1 0 893.417942 0 446.708971 446.708971 0 1 0-893.417942 0Z"
                fill="#FFFFFF"
                p-id="2492"
              ></path>
              <path
                d="M424.111301 818.825061c-59.328223 0-115.140367-23.107277-157.101038-65.081251-86.620823-86.620823-86.620823-227.581252 0-314.215378 41.960671-41.973974 97.771791-65.081251 157.101038-65.081251 59.355853 0 115.140367 23.12058 157.101037 65.081251 41.960671 41.973974 65.081251 97.771791 65.081251 157.11434s-23.12058 115.140367-65.081251 157.101038-97.745185 65.081251-157.101037 65.081251z m0-360.620268c-36.97103 0-71.733765 14.409175-97.881285 40.543392-53.957913 53.984518-53.957913 141.804656 0 195.775872 26.14752 26.14752 60.910255 40.543392 97.881285 40.543391s71.733765-14.395872 97.881284-40.543391c26.14752-26.14752 40.543392-60.910255 40.543392-97.881285s-14.395872-71.733765-40.543392-97.894587c-26.146497-26.14752-60.909232-40.543392-97.881284-40.543392z"
                fill="#75B9EB"
                p-id="2493"
              ></path>
              <path
                d="M551.602973 511.016603c-10.715039 0-21.430078-4.090155-29.609365-12.269442-16.358573-16.358573-16.358573-42.874483 0-59.219753L672.577209 288.943808h-42.833551c-23.12058 0-41.878806-18.744923-41.878806-41.878806s18.758226-41.878806 41.878806-41.878806h143.958716c16.931624 0 32.200376 10.210549 38.689161 25.847691 6.488785 15.650445 2.889817 33.67189-9.078773 45.641503L581.212338 498.747161c-8.179286 8.179286-18.894326 12.269441-29.609365 12.269442z"
                fill="#75B9EB"
                p-id="2494"
              ></path>
              <path
                d="M773.703397 288.943808h-143.958716c-23.12058 0-41.878806-18.744923-41.878806-41.878806s18.758226-41.878806 41.878806-41.878806h143.958716c23.12058 0 41.878806 18.744923 41.878806 41.878806s-18.758226 41.878806-41.878806 41.878806z"
                fill="#75B9EB"
                p-id="2495"
              ></path>
              <path
                d="M779.864724 439.050548c-23.12058 0-41.878806-18.744923-41.878806-41.878806V253.226329c0-23.133883 18.758226-41.878806 41.878806-41.878807s41.878806 18.744923 41.878806 41.878807v143.945413c0 23.133883-18.758226 41.878806-41.878806 41.878806z"
                fill="#75B9EB"
                p-id="2496"
              ></path>
              <path
                d="M779.864724 439.050548c-23.12058 0-41.878806-18.744923-41.878806-41.878806V253.226329c0-23.133883 18.758226-41.878806 41.878806-41.878807s41.878806 18.744923 41.878806 41.878807v143.945413c0 23.133883-18.758226 41.878806-41.878806 41.878806z"
                fill="#75B9EB"
                p-id="2497"
              ></path>
            </svg>
            <svg
              v-if="myUserInfo.gender == 2"
              t="1677032186969"
              class="gender"
              viewBox="0 0 1024 1024"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              p-id="2651"
              width="200"
              height="200"
            >
              <path
                d="M510.887666 512m-446.708971 0a446.708971 446.708971 0 1 0 893.417942 0 446.708971 446.708971 0 1 0-893.417942 0Z"
                fill="#FFFFFF"
                p-id="2652"
              ></path>
              <path
                d="M510.87948 578.902736c-123.673717 0-224.282113-100.607372-224.282113-224.282113s100.607372-224.282113 224.282113-224.282113 224.282113 100.607372 224.282112 224.282113-100.608396 224.282113-224.282112 224.282113z m0-364.80559c-77.486792 0-140.523477 63.036685-140.523477 140.523477s63.036685 140.523477 140.523477 140.523477 140.523477-63.036685 140.523477-140.523477-63.036685-140.523477-140.523477-140.523477z"
                fill="#FF3EC9"
                p-id="2653"
              ></path>
              <path
                d="M510.87948 896.635217c-23.12058 0-41.878806-18.744923-41.878806-41.878806V537.02393c0-23.133883 18.758226-41.878806 41.878806-41.878806s41.878806 18.744923 41.878806 41.878806v317.732481c0 23.133883-18.758226 41.878806-41.878806 41.878806z"
                fill="#FF3EC9"
                p-id="2654"
              ></path>
              <path
                d="M669.752884 737.762837H352.033705c-23.12058 0-41.878806-18.744923-41.878806-41.878806s18.758226-41.878806 41.878806-41.878807h317.719179c23.12058 0 41.878806 18.744923 41.878806 41.878807s-18.758226 41.878806-41.878806 41.878806z"
                fill="#FF3EC9"
                p-id="2655"
              ></path>
            </svg>
            <svg
              v-if="myUserInfo.roles.indexOf(1) != -1"
              t="1677033137631"
              class="famous"
              viewBox="0 0 1024 1024"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              p-id="2890"
              width="200"
              height="200"
            >
              <path
                d="M738.460185 854.903447c22.705905-14.191191 19.867667-59.603001 39.735334-76.63243 19.867667-17.029429 65.279478-5.676476 82.308907-25.544143 17.029429-19.867667 0-62.44124 11.352953-85.147145 11.352953-22.705905 59.603001-28.382382 68.117716-53.926525 8.514714-22.705905-22.705905-59.603001-17.029429-85.147145 5.676476-25.544143 45.411811-48.250049 45.411811-73.794192 0-25.544143-39.735334-48.250049-45.411811-73.794192-5.676476-25.544143 25.544143-59.603001 17.029429-85.147145-8.514714-25.544143-53.926525-31.22062-68.117716-53.926525-11.352953-22.705905 5.676476-65.279478-11.352953-85.147145-17.029429-19.867667-62.44124-11.352953-82.308907-25.544143-19.867667-17.029429-17.029429-62.44124-39.735334-76.63243-22.705905-14.191191-62.44124 11.352953-85.147145 2.838238-22.705905-8.514714-36.897096-53.926525-62.44124-56.764763-25.544143-5.676476-53.926525 31.22062-79.470669 31.22062S457.474607-2.244479 431.930463 0.593759c-25.544143 5.676476-39.735334 48.250049-62.44124 56.764763-22.705905 8.514714-62.44124-17.029429-85.147145-2.838238C261.636173 68.711475 264.474412 116.961524 244.606744 131.152715 224.739077 148.182144 179.327267 139.667429 162.297838 159.535097c-17.029429 19.867667 0 62.44124-11.352953 85.147145-11.352953 22.705905-59.603001 28.382382-68.117716 53.926525-8.514714 22.705905 22.705905 59.603001 17.029429 85.147145C97.01836 406.461817 57.283026 429.167722 57.283026 454.711866c0 25.544143 39.735334 48.250049 45.411811 73.794192 5.676476 25.544143-25.544143 59.603001-17.029429 85.147145 8.514714 25.544143 53.926525 31.22062 68.117716 53.926525 11.352953 22.705905-5.676476 65.279478 11.352953 85.147145 17.029429 19.867667 62.44124 11.352953 82.308907 25.544143 19.867667 17.029429 17.029429 62.44124 39.735334 76.63243 22.705905 14.191191 62.44124-11.352953 85.147145-2.838238 22.705905 8.514714 36.897096 53.926525 62.44124 56.764763 25.544143 5.676476 53.926525-31.22062 79.470669-31.22062s53.926525 36.897096 79.470669 31.22062c25.544143-5.676476 39.735334-48.250049 62.44124-56.764763C676.018945 840.712256 715.75428 866.256399 738.460185 854.903447zM511.401132 823.682827C307.047984 823.682827 142.43017 659.065013 142.43017 454.711866S307.047984 85.740904 511.401132 85.740904s368.970961 164.617813 368.970961 368.970961S715.75428 823.682827 511.401132 823.682827z"
                fill="#333333"
                p-id="2891"
              ></path>
              <path
                d="M255.959697 903.153495c-25.544143-14.191191-22.705905-68.117716-45.411811-85.147145-22.705905-19.867667-73.794192-8.514714-90.823621-31.22062 0 0-2.838238-2.838238-2.838238-2.838238l-48.250049 48.250049c-22.705905 22.705905-14.191191 45.411811 14.191191 53.926525l31.22062 8.514714c31.22062 8.514714 62.44124 39.735334 68.117716 68.117716L193.518457 993.977117c8.514714 31.22062 31.22062 36.897096 53.926525 14.191191l107.85305-107.85305c0 0-2.838238 0-2.838238-2.838238C324.077413 888.962305 281.50384 917.344686 255.959697 903.153495z"
                fill="#333333"
                p-id="2892"
              ></path>
              <path
                d="M905.916236 783.947493c0 0-2.838238 2.838238-2.838238 2.838238-17.029429 22.705905-68.117716 11.352953-90.823621 31.22062-22.705905 19.867667-19.867667 70.955954-45.411811 85.147145-25.544143 14.191191-68.117716-14.191191-96.500098-2.838238 0 0-2.838238 0-2.838238 2.838238l107.85305 107.85305c22.705905 22.705905 45.411811 14.191191 53.926525-14.191191l8.514714-31.22062c8.514714-31.22062 39.735334-62.44124 68.117716-68.117716l31.22062-8.514714c31.22062-8.514714 36.897096-31.22062 14.191191-53.926525L905.916236 783.947493z"
                fill="#333333"
                p-id="2893"
              ></path>
              <path
                d="M727.107232 258.873432c-11.352953 0-28.382382 0-42.573572 0-31.22062 0-62.44124 0-90.823621-2.838238 0 2.838238-2.838238 5.676476-2.838238 8.514714 0 2.838238 0 5.676476 0 5.676476 0 8.514714 5.676476 14.191191 14.191191 14.191191 17.029429 2.838238 28.382382 5.676476 34.058858 11.352953 5.676476 5.676476 5.676476 11.352953 5.676476 17.029429 0 11.352953-8.514714 39.735334-25.544143 82.308907s-42.573572 107.85305-76.63243 190.161957L454.636368 383.755912c-8.514714-22.705905-17.029429-39.735334-19.867667-51.088287-5.676476-14.191191-5.676476-22.705905-5.676476-25.544143 0-5.676476 2.838238-8.514714 8.514714-14.191191 5.676476-2.838238 17.029429-5.676476 34.058858-8.514714 8.514714 0 14.191191-5.676476 14.191191-14.191191 0-5.676476 0-8.514714-2.838238-14.191191-19.867667 0-36.897096 2.838238-53.926525 2.838238s-36.897096 0-62.44124 0c-19.867667 0-39.735334 0-53.926525 0C292.856793 258.873432 275.827364 256.035194 258.797935 256.035194 255.959697 261.71167 255.959697 267.388147 255.959697 270.226385 255.959697 278.741099 261.636173 284.417576 270.150888 284.417576c11.352953 0 17.029429 2.838238 25.544143 5.676476s11.352953 5.676476 17.029429 8.514714c5.676476 2.838238 8.514714 8.514714 11.352953 14.191191 2.838238 5.676476 8.514714 14.191191 11.352953 25.544143L483.01875 667.579728c8.514714 17.029429 11.352953 28.382382 17.029429 34.058858 2.838238 5.676476 8.514714 8.514714 17.029429 8.514714 5.676476 0 11.352953 0 17.029429-2.838238l156.103099-371.809199c5.676476-14.191191 14.191191-22.705905 28.382382-31.22062 11.352953-5.676476 25.544143-14.191191 36.897096-19.867667 5.676476-2.838238 8.514714-5.676476 11.352953-5.676476S766.842566 273.064623 766.842566 270.226385c0-2.838238 0-8.514714-2.838238-14.191191C752.651376 256.035194 741.298423 258.873432 727.107232 258.873432z"
                fill="#333333"
                p-id="2894"
              ></path>
            </svg>
          </div>
          <div class="oneMessageCreateTime_right">{{ message.createTime }}</div>
          <div
            class="oneMessageContent_right bgc_green"
            v-html="message.content"
          />
        </div>
      </div>
    </div>

    <!-- Input -->
    <div class="input">
      <!-- textarea -->
      <van-field
        class="textarea"
        v-model.trim="messageInsertDTO.content"
        rows="2"
        type="textarea"
        maxlength="1000"
        placeholder="请输入消息内容"
      />
      <!-- submit -->
      <van-button class="submit" type="primary" @click="sendText()"
        >发送</van-button
      >
      <!-- picIcon -->
      <div class="picIcon" @click="sendPicturesShow = true">
        <svg
          t="1678101194001"
          class="icon"
          viewBox="0 0 1024 1024"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          p-id="2480"
          width="200"
          height="200"
        >
          <path
            d="M938.666667 553.92V768c0 64.8-52.533333 117.333333-117.333334 117.333333H202.666667c-64.8 0-117.333333-52.533333-117.333334-117.333333V256c0-64.8 52.533333-117.333333 117.333334-117.333333h618.666666c64.8 0 117.333333 52.533333 117.333334 117.333333v297.92z m-64-74.624V256a53.333333 53.333333 0 0 0-53.333334-53.333333H202.666667a53.333333 53.333333 0 0 0-53.333334 53.333333v344.48A290.090667 290.090667 0 0 1 192 597.333333a286.88 286.88 0 0 1 183.296 65.845334C427.029333 528.384 556.906667 437.333333 704 437.333333c65.706667 0 126.997333 16.778667 170.666667 41.962667z m0 82.24c-5.333333-8.32-21.130667-21.653333-43.648-32.917333C796.768 511.488 753.045333 501.333333 704 501.333333c-121.770667 0-229.130667 76.266667-270.432 188.693334-2.730667 7.445333-7.402667 20.32-13.994667 38.581333-7.68 21.301333-34.453333 28.106667-51.370666 13.056-16.437333-14.634667-28.554667-25.066667-36.138667-31.146667A222.890667 222.890667 0 0 0 192 661.333333c-14.464 0-28.725333 1.365333-42.666667 4.053334V768a53.333333 53.333333 0 0 0 53.333334 53.333333h618.666666a53.333333 53.333333 0 0 0 53.333334-53.333333V561.525333zM320 480a96 96 0 1 1 0-192 96 96 0 0 1 0 192z m0-64a32 32 0 1 0 0-64 32 32 0 0 0 0 64z"
            fill="#000000"
            p-id="2481"
          ></path>
        </svg>
      </div>
    </div>

    <!-- 发送图片Dialog -->
    <van-dialog
      v-model:show="sendPicturesShow"
      title="发送图片"
      show-cancel-button
      confirm-button-text="发送"
      :before-close="onBeforeSendPictureClose"
    >
    </van-dialog>
  </div>
</template>

<script>
import { onBeforeMount, onMounted, watch, reactive, ref } from "vue";
import { showDialog, showNotify, showToast, showImagePreview } from "vant";
import { onBeforeRouteLeave, useRouter } from "vue-router";
import { useStore } from "vuex";
import { getUserInfo } from "@/api/user.js";
import { uploadFile, deleteFile } from "@/api/file.js";
import { getMessages, setIsRead } from "@/api/message.js";
import {
  checkAuthority,
  checkResource,
  sleep,
  saveEnter2Br4Web,
  saveEnter2Br4Save,
} from "@/util/utils.js";
import moment from "moment";

export default {
  props: ["shareData"],
  setup(props) {
    onBeforeMount(() => {
      // bottomNav
      props.shareData.bottomNavShow = false;

      // myUserId
      myUserId.value = window.sessionStorage.getItem("myUserId");

      // wsChatTargetId
      wsChatTargetId.value = window.sessionStorage.getItem("wsChatTargetId");
    });

    onMounted(async () => {
      // 加载用户信息
      // myUserInfo
      var baseResponse = (await getUserInfo()).data;
      if (checkAuthority(baseResponse) == false) {
        router.push("/");
      }
      var userInfo = baseResponse.data;
      myUserInfo.id = userInfo.id;
      myUserInfo.nickname = userInfo.nickname;
      myUserInfo.gender = userInfo.gender;
      myUserInfo.avatarUrl = userInfo.avatar;
      myUserInfo.roles = userInfo.roles;
      console.log("myUserInfo", myUserInfo);
      // targetUserInfo
      var baseResponse = (await getUserInfo(wsChatTargetId.value)).data;
      if (checkAuthority(baseResponse) == false) {
        router.push("/");
      }
      var userInfo = baseResponse.data;
      targetUserInfo.id = userInfo.id;
      targetUserInfo.nickname = userInfo.nickname;
      targetUserInfo.gender = userInfo.gender;
      targetUserInfo.avatarUrl = userInfo.avatar;
      targetUserInfo.roles = userInfo.roles;
      console.log("targetUserInfo", targetUserInfo);

      onMessageLoad();

      // scrollingContent
      await sleep(50);
      document.getElementById("scrollingContent").scrollTop = 999999999;
    });

    onBeforeRouteLeave(async (to, from, next) => {
      // 设置对方的未读为0
      await setIsRead(2, wsChatTargetId.value);

      if (
        to.path == "/main/home" ||
        to.path == "/main/message" ||
        to.path == "/main/me"
      ) {
        // bottomNav
        props.shareData.bottomNavShow = true;
        // wsChatTargetId
        window.sessionStorage.removeItem("wsChatTargetId");
      }

      next();
    });

    watch(props.shareData.messageQueue4ChangingChat, async (newVal, oldVal) => {
      // 判断是否需要更新当前对话内容
      if (newVal.length > 0) {
        var newMessage = newVal.pop();
        if (newMessage.fromUserId == wsChatTargetId.value) {
          // 尝试移动scroll
          var scrollingFlag = false;
          var scrollingContent = document.getElementById("scrollingContent");
          var scrollTop = scrollingContent.scrollTop;
          var height = scrollingContent.offsetHeight;
          var scrollHeight = scrollingContent.scrollHeight;
          if (scrollTop + height >= scrollHeight) {
            scrollingFlag = true;
          }

          messagesPage.data.push(newMessage);

          if (scrollingFlag) {
            await sleep(30);
            scrollingContent.scrollTop = 99999999;
          }
        }
      }
    });

    // router
    const router = useRouter();

    // store
    const store = useStore();

    // myUserId
    const myUserId = ref("");

    // wsChatTargetId
    const wsChatTargetId = ref("");

    // 用户数据
    const myUserInfo = reactive({
      id: "",
      nickname: "",
      gender: "",
      avatarUrl: "",
      roles: [],
    });
    const targetUserInfo = reactive({
      id: "",
      nickname: "",
      gender: "",
      avatarUrl: "",
      roles: [],
    });

    // gotoUser
    const gotoUser = (userId) => {
      event.stopPropagation(); // 阻止事件冒泡至外层div
      var myUserId = window.sessionStorage.getItem("myUserId");
      if (userId == myUserId) {
        props.shareData.homeStyle = "";
        props.shareData.messageStyle = "";
        props.shareData.meStyle = "color: #1989fa";
        router.push("/main/me");
      } else {
        window.sessionStorage.setItem("gotoUserId", userId);
        router.push("/main/user");
      }
    };

    // noAnyMessage
    const noAnyMessage = ref("/logo.png");

    // messageSelectDTO
    const messageSelectDTO = reactive({
      lastId: null,
      targetId: targetUserInfo.id,
    });

    // messagesPage
    const messagesPage = reactive({
      total: 0,
      data: [],
    });

    // message上划刷新
    const messageLoading = ref(false);
    const messageFinished = ref(false);
    const onMessageLoad = async () => {
      console.log("onLoad");

      // 加载message
      messageSelectDTO.targetId = targetUserInfo.id;
      var baseResponse = (await getMessages(messageSelectDTO)).data;
      if (checkAuthority(baseResponse) == false) {
        router.push("/");
      }

      var messageSelectVO = baseResponse.data;
      messageSelectDTO.lastId = baseResponse.lastId; // 记录lastId

      // 防bug
      console.log("messageSelectVO", messageSelectVO);
      if (
        (messageSelectVO.messages.length > 0 &&
          messagesPage.data.length > 0 &&
          messagesPage.data[0].id != messageSelectVO.messages[0].id) ||
        (messageSelectVO.messages.length > 0 && messagesPage.data.length == 0)
      ) {
        messagesPage.data = messagesPage.data.concat(messageSelectVO.messages);
      }

      messageLoading.value = false;

      // 已经没有更多数据了
      if (messageSelectVO.isFinished) {
        messageFinished.value = true;
      }
    };

    const messageInsertDTO = reactive({
      toUserId: targetUserInfo.id,
      content: "",
      picturesSplit: [],
    });

    // 发送文本
    const sendText = async () => {
      // 判空
      if (messageInsertDTO.content.length == 0) {
        showToast({
          message: "文本不能为空",
          icon: "cross",
        });
        return;
      }

      var newMessage4Show = {
        fromUserId: myUserId,
        toUserId: targetUserInfo.id,
        content: saveEnter2Br4Web(messageInsertDTO.content), // 转换回车键
        createTime: moment().format("YYYY-MM-DD HH:mm:ss"),
      };
      var newMessage4Save = {
        fromUserId: myUserId,
        toUserId: targetUserInfo.id,
        content: saveEnter2Br4Save(messageInsertDTO.content), // 转换回车键
        createTime: moment().format("YYYY-MM-DD HH:mm:ss"),
      };

      // 发送文本
      props.shareData.messageQueue4Send.unshift(newMessage4Save);
      messageInsertDTO.content = "";

      // 立即展现
      messagesPage.data.push(newMessage4Show);
      await sleep(30);
      document.getElementById("scrollingContent").scrollTop = 99999999;
    };

    // 发送图片Dialog
    const sendPicturesShow = ref(false);
    // "发送图片Dialog"关闭前的判断
    const onBeforeSendPictureClose = async (action) => {
      if (action === "confirm") {
        // 判空
        if (messagePictures.value.length == 0) {
          showToast({
            message: "您还没有选择图片",
            icon: "cross",
          });
          return;
        }

        // 发送图片
        var newMessage = {
          toUserId: targetUserInfo.id,
          picturesSplit: messageInsertDTO.picturesSplit,
        };
        props.shareData.messageQueue4ChangingChat.unshift(newMessage);
        messageInsertDTO.picturesSplit = [];
        messagePictures.value = [];

        showToast({
          message: "图片发送成功",
          icon: "success",
        });
      }
      sendPicturesShow.value = false;
    };

    // 上传图片
    const uploadPicture = async (file) => {
      var data = new FormData();
      data.append("file", file.file);
      var baseResponse = (await uploadFile(data)).data;
      if (checkAuthority(baseResponse) == false) {
        router.push("/");
      }
      if (baseResponse.code != 200) {
        showToast({
          message: "图片上传失败",
          icon: "cross",
        });
        return;
      }

      // 记录返回的filePath
      commentInsertDTO.picturesSplit.push(baseResponse.data);
    };
    const messagePictures = ref([]);

    const beforePictureRead = (file) => {
      // 类型
      var validType = [
        "image/gif",
        "image/png",
        "image/jpeg",
        "image/bmp",
        "image/webp",
        "image/x-icon",
        "image/vnd.microsoft.icon",
      ];
      if (validType.indexOf(file.type) == -1) {
        showToast({
          message: "只能上传图片或Gif动图",
          icon: "cross",
        });
        return false;
      }
      // 大小
      if (file.size > 10 * 1024 * 1024) {
        showToast({
          message: "文件大小不能超过10MB",
          icon: "cross",
        });
        return false;
      }

      return true;
    };

    // 取消上传
    const deletePicture = async (file, detail) => {
      messagePictures.value.splice(detail.index, 1);
      var deletePicturePath = messageInsertDTO.picturesSplit[detail.index];
      messageInsertDTO.picturesSplit.splice(detail.index, 1);
      var baseResponse = (await deleteFile(deletePicturePath)).data;
      if (checkAuthority(baseResponse) == false) {
        router.push("/");
      }
    };

    return {
      router,
      store,
      myUserId,
      wsChatTargetId,
      myUserInfo,
      targetUserInfo,
      gotoUser,
      noAnyMessage,
      messageSelectDTO,
      messagesPage,
      messageLoading,
      messageFinished,
      onMessageLoad,
      messageInsertDTO,
      sendText,
      sendPicturesShow,
      onBeforeSendPictureClose,
      uploadPicture,
      messagePictures,
      beforePictureRead,
      deletePicture,
    };
  },
  components: {},
};
</script>

<style lang="less">
.chat {
  .top {
    position: relative;
    margin: 0 0.2rem;
    padding: 0.2rem 0;
    height: 1rem;
    border: solid 3px black;
    box-shadow: 0 0 15px 1px #000000;
    border-radius: 1rem;
    margin-top: 0.4rem;
    vertical-align: top;
    text-align: center;
    .van-icon {
      position: absolute;
      top: 0.15rem;
      left: 0.3rem;
    }
    .back {
      position: absolute;
      top: 0.12rem;
      left: 0.9rem;
      font-size: 0.5rem;
      font-weight: 700;
      color: #1776d2;
    }
    .title {
      position: absolute;
      left: 1rem;
      top: 0.2rem;
      max-width: 40%;
      margin-left: 2.1rem;
      font-size: 0.5rem;
      font-weight: 700;
      // 最多显示1行
      overflow: hidden;
      display: -webkit-box;
      text-overflow: ellipsis;
      -webkit-line-clamp: 1;
      -webkit-box-orient: vertical;
    }
    .deleteButton {
      position: absolute;
      top: 0.8rem;
      right: 0.8rem;
      font-size: 0.5rem;
      font-weight: 700;
      height: 0.6rem;
    }
  }
  .content {
    width: 96%;
    height: 17.5rem;
    border: solid 3px black;
    box-shadow: 0 0 15px 1px #000000;
    border-radius: 1rem;
    margin: 0.4rem auto;
    overflow-x: hidden; // 防止横向滑动
    overflow-y: auto; // 为了能修改该dom的scrollTop
    .message .oneMessage {
      position: relative;
      .oneMessageSimpleUser_left {
        position: relative;
        top: 0.2rem;
        left: 1.4rem;
        .avatar {
          position: absolute;
          width: 1rem;
          height: 1rem;
          border: solid 5px black;
          border-radius: 0.5rem;
          z-index: 1;
          left: -1.1rem;
        }
        .gender {
          position: absolute;
          border: solid 2px black;
          border-radius: 0.5rem;
          width: 0.5rem;
          height: 0.5rem;
          left: -0.4rem;
          z-index: 2;
        }
        .famous {
          position: absolute;
          border: solid 2px black;
          border-radius: 0.5rem;
          width: 0.5rem;
          height: 0.5rem;
          left: -0.4rem;
          top: 0.6rem;
          z-index: 2;
          background-color: white;
        }
      }
      .oneMessageCreateTime_left {
        position: absolute;
        top: 0.2rem;
        left: 1.7rem;
        font-size: 0.4rem;
        font-weight: 700;
      }
      .oneMessageContent_left {
        // -- 文字自动换行 --
        max-width: 70%;
        word-break: break-all;
        // -- 文字自动换行 --

        // width: auto;
        display: inline-block;
        margin-left: 1.6rem;
        margin-top: 0.7rem;
        border-radius: 0.2rem;
        padding: 0.2rem;
        vertical-align: top; // 垂直方向上向上对齐
        font-size: 0.4rem;
      }
      .oneMessageSimpleUser_right {
        position: relative;
        top: 0.2rem;
        right: -9.3rem;
        .avatar {
          position: absolute;
          width: 1rem;
          height: 1rem;
          border: solid 5px black;
          border-radius: 0.5rem;
          z-index: 1;
          left: -1.1rem;
        }
        .gender {
          position: absolute;
          border: solid 2px black;
          border-radius: 0.5rem;
          width: 0.5rem;
          height: 0.5rem;
          left: -0.4rem;
          z-index: 2;
        }
        .famous {
          position: absolute;
          border: solid 2px black;
          border-radius: 0.5rem;
          width: 0.5rem;
          height: 0.5rem;
          left: -0.4rem;
          top: 0.6rem;
          z-index: 2;
          background-color: white;
        }
      }
      .oneMessageCreateTime_right {
        position: absolute;
        top: 0.2rem;
        right: 1.5rem;
        font-size: 0.4rem;
        font-weight: 700;
      }
      .oneMessageContent_right {
        // -- 文字自动换行 --
        max-width: 70%;
        word-break: break-all;
        // -- 文字自动换行 --

        // width: auto;
        text-align: left;
        display: inline-block;
        margin-right: 1.5rem;
        margin-top: 0.7rem;
        border-radius: 0.2rem;
        padding: 0.2rem;
        vertical-align: top; // 垂直方向上向上对齐
        font-size: 0.4rem;
      }
      .bgc_grey {
        background-color: #e4e4e4;
      }
      .bgc_green {
        background-color: #9ae979;
      }
    }
  }
  .input {
    position: relative;
    width: 96%;
    height: 1.5rem;
    border: solid 3px black;
    box-shadow: 0 0 15px 1px #000000;
    border-radius: 1rem;
    margin: 0.4rem auto;
    .textarea {
      width: 7rem;
      height: 100%;
      border-top-left-radius: 1rem;
      border-bottom-left-radius: 1rem;
      // border: solid 1px black;
    }
    .submit {
      position: absolute;
      right: 1.3rem;
      bottom: 0.1rem;
      width: 1.2rem;
      height: 1.2rem;
    }
    .picIcon {
      position: absolute;
      right: 0;
      bottom: 0;
      height: 100%;
      width: 1.2rem;
      border-top-right-radius: 1rem;
      border-bottom-right-radius: 1rem;
      border-left: solid 0.1rem black;
      .icon {
        width: 0.8rem;
        height: 0.8rem;
        margin-top: 0.3rem;
        margin-left: 0.1rem;
      }
    }
  }
}
</style>
