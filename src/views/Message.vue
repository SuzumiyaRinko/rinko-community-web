<template>
  <div class="message">
    <!-- TopNav -->
    <div class="topNav">
      <span class="notice" :style="systemStyle" @click="gotoSystem()"
        >NOTICE</span
      >
      <span class="message" :style="chatStyle" @click="gotoChat()"
        >MESSAGE</span
      >
    </div>

    <!-- Notice&Message -->
    <div class="messageDiv">
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
      <!-- 遍历Notice -->
      <van-pull-refresh
        v-if="systemStyle != ''"
        v-model="pullRefreshLoading"
        success-text="刷新成功"
        @refresh="onPullRefresh"
      >
        <van-list
          v-model:loading="messageLoading"
          :finished="messageFinished"
          finished-text="没有更多了"
          @load="onMessageLoad"
          :immediate-check="false"
        >
          <div
            class="oneNotice"
            v-for="(message, idx) in messagesPage.data"
            key="idx"
          >
            <div class="oneNoticeSimpleUser">
              <img
                class="avatar item"
                :src="`${$store.state.SystemConst.resourcesPrefix}${message.eventUser.avatar}`"
                alt="用户头像"
                @click="gotoUser(message.eventUser.id)"
              />
              <svg
                v-if="message.eventUser.gender == 1"
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
                v-if="message.eventUser.gender == 2"
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
                v-if="message.eventUser.roles.indexOf(1) != -1"
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
            <span v-if="!message.isRead" class="newMessage"
              >**newMessage!!**</span
            >
            <span class="oneNoticeContent" v-html="message.content" />
            <svg
              class="gotoTarget"
              t="1677825944096"
              viewBox="0 0 1024 1024"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              p-id="2693"
              width="200"
              height="200"
              @click="
                gotoTarget(message.targetId, message.systemMsgType, message.id)
              "
            >
              <path
                d="M425.344 879.36a43.690667 43.690667 0 0 1 6.698667-61.354667l381.482666-306.901333L433.92 206.08a43.690667 43.690667 0 0 1 54.698667-68.096l422.016 339.114667a43.733333 43.733333 0 0 1 0 68.096l-423.808 340.906666a43.818667 43.818667 0 0 1-61.482667-6.698666z m-330.026667 0a43.690667 43.690667 0 0 1 6.698667-61.354667l381.525333-306.901333L103.936 206.08a43.690667 43.690667 0 0 1 54.698667-68.096l421.973333 339.114667a43.733333 43.733333 0 0 1 0 68.096l-423.765333 340.906666a43.818667 43.818667 0 0 1-61.482667-6.698666z"
                fill="#000000"
                opacity=".65"
                p-id="2694"
              ></path>
            </svg>
            <hr style="margin-left: 0.3rem" />
          </div>
        </van-list>
      </van-pull-refresh>
      <!-- 遍历Message -->
      <div v-if="chatStyle != ''">
        <div
          class="oneMessage"
          v-for="(message, idx) in messagesPage.data"
          key="idx"
        >
          <div class="oneMessageSimpleUser">
            <img
              class="avatar item"
              :src="`${$store.state.SystemConst.resourcesPrefix}${message.eventUser.avatar}`"
              alt="用户头像"
              @click="gotoUser(message.eventUser.id)"
            />
            <svg
              v-if="message.eventUser.gender == 1"
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
              v-if="message.eventUser.gender == 2"
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
              v-if="message.eventUser.roles.indexOf(1) != -1"
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
            <span class="nickname">{{ message.eventUser.nickname }}</span>
          </div>
          <div v-if="message.unreadCount > 0" class="oneMessageUnreadCount">
            {{ unreadCountStr(message.unreadCount) }}
          </div>
          <span v-if="message.unreadCount > 0" class="newMessage"
            >**newMessage!!**</span
          >
          <span class="oneMessageCreatetime" v-html="message.createTime" />
          <span class="oneMessagePreContent">消息：</span
          ><span class="oneMessageContent" v-html="message.content" />
          <svg
            class="gotoTarget"
            t="1677825944096"
            viewBox="0 0 1024 1024"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            p-id="2693"
            width="200"
            height="200"
            @click="gotoWSChat(message)"
          >
            <path
              d="M425.344 879.36a43.690667 43.690667 0 0 1 6.698667-61.354667l381.482666-306.901333L433.92 206.08a43.690667 43.690667 0 0 1 54.698667-68.096l422.016 339.114667a43.733333 43.733333 0 0 1 0 68.096l-423.808 340.906666a43.818667 43.818667 0 0 1-61.482667-6.698666z m-330.026667 0a43.690667 43.690667 0 0 1 6.698667-61.354667l381.525333-306.901333L103.936 206.08a43.690667 43.690667 0 0 1 54.698667-68.096l421.973333 339.114667a43.733333 43.733333 0 0 1 0 68.096l-423.765333 340.906666a43.818667 43.818667 0 0 1-61.482667-6.698666z"
              fill="#000000"
              opacity=".65"
              p-id="2694"
            ></path>
          </svg>
          <hr style="margin-left: 0.3rem" />
        </div>
      </div>
    </div>

    <!-- setIsRead -->
    <van-icon
      class="setIsRead"
      name="success"
      size="0.8rem"
      @click="setIsReadShow = true"
    />

    <!-- deleteMessage -->
    <van-icon
      class="deleteMessage"
      name="delete-o"
      size="0.8rem"
      @click="deleteMessageShow = true"
    />

    <!-- setIsRead Dialog -->
    <van-dialog
      v-model:show="setIsReadShow"
      title="是否设置所有系统消息为已读"
      show-cancel-button
      confirm-button-text="确认"
      :before-close="onBeforeSetIsReadClose"
    >
    </van-dialog>

    <!-- deleteMessage Dialog -->
    <van-dialog
      v-model:show="deleteMessageShow"
      title="是否删除所有系统消息"
      show-cancel-button
      confirm-button-text="确认"
      :before-close="onBeforeDeleteMessageClose"
    >
    </van-dialog>
  </div>
</template>

<script>
import { onMounted, watch, reactive, ref } from "vue";
import { showDialog, showNotify, showToast } from "vant";
import { useRouter, onBeforeRouteLeave } from "vue-router";
import { useStore } from "vuex";
import { getPostByPostId } from "@/api/post.js";
import { getCommentByCommentId } from "@/api/comment.js";
import { getMessages, setIsRead, deleteMessage } from "@/api/message.js";
import {
  checkAuthority,
  checkResource,
  sleep,
  unreadCountStr,
} from "@/util/utils.js";

export default {
  props: ["shareData"],
  setup(props) {
    onMounted(() => {
      onMessageLoad();
    });

    onBeforeRouteLeave(() => {
      // oldRouter
      window.sessionStorage.setItem("oldRouter", "message");
    });

    watch(props.shareData.messageQueue4ChangingMessage, (newVal, oldVal) => {
      console.log("messageQueue4ChangingMessage", newVal)
      // 更新私聊列表
      if (chatStyle.value != "" && newVal.length > 0) {
        var newMessage = newVal.pop();
        messagesPage.data = messagesPage.data.filter((message) => {
          return message.eventUser.id != newMessage.fromUserId;
        });
        messagesPage.data.unshift(newMessage);
      }
    });

    // router
    const router = useRouter();

    // store
    const store = useStore();

    // topNav的额外样式
    const systemStyle = ref("color: #1688f8;");
    const chatStyle = ref("");

    // 防止用户频繁点击
    const clickSearchLock = ref(false);

    const gotoSystem = async () => {
      if (systemStyle.value != "") {
        return;
      }

      // 加锁
      if (clickSearchLock.value == true) {
        showToast({
          message: "请勿频繁点击",
          icon: "cross",
        });
        return;
      }
      clickSearchLock.value = true;
      setTimeout(() => {
        // 0.6s后释放锁
        clickSearchLock.value = false;
      }, 600);

      // init
      systemStyle.value = "color: #1688f8;";
      chatStyle.value = "";
      messageSelectDTO.isSystem = true;
      messagesPage.data = [];
      messageFinished.value = false;
      messageSelectDTO.lastId = null;

      // 加载消息
      onMessageLoad();
    };

    const gotoChat = async () => {
      if (chatStyle.value != "") {
        return;
      }

      // 加锁
      if (clickSearchLock.value == true) {
        showToast({
          message: "请勿频繁点击",
          icon: "cross",
        });
        return;
      }
      clickSearchLock.value = true;
      setTimeout(() => {
        // 0.6s后释放锁
        clickSearchLock.value = false;
      }, 600);

      // init
      chatStyle.value = "color: #1688f8;";
      systemStyle.value = "";
      messageSelectDTO.isSystem = false;
      messagesPage.data = [];

      // 加载消息
      onMessageLoad();
    };

    // noAnyMessage
    const noAnyMessage = ref("/logo.png");

    // messageSelectDTO
    const messageSelectDTO = reactive({
      isSystem: true,
      lastId: null,
    });

    // message数据
    const messagesPage = reactive({
      total: 0,
      data: [],
    });

    // message往下滚动
    const messageLoading = ref(false);
    const messageFinished = ref(false);
    const onMessageLoad = async () => {
      console.log("onLoad");

      // 加载message
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

    // pull刷新
    const pullRefreshLoading = ref(false);
    const onPullRefresh = async () => {
      await sleep(500);
      messageSelectDTO.lastId = null;
      messagesPage.data = [];
      onMessageLoad();
      pullRefreshLoading.value = false;
    };

    // gotoUser
    const gotoUser = (userId) => {
      event.stopPropagation(); // 阻止事件冒泡至外层div
      window.sessionStorage.setItem("gotoUserId", userId);
      router.push("/main/user");
    };

    // gotoTarget
    const gotoTarget = async (targetId, systemMsgType, messageId) => {
      // 标记为已读
      var baseResponse = (await setIsRead(1, messageId)).data;
      if (checkAuthority(baseResponse) == false) {
        router.push("/");
      }

      if (
        systemMsgType == 1 ||
        systemMsgType == 2 ||
        systemMsgType == 3 ||
        systemMsgType == 4
      ) {
        // backToSomeone
        window.sessionStorage.setItem("backToSomeone", "/main/message");
        // currPost
        var baseResponse = (await getPostByPostId(targetId)).data;
        if (checkAuthority(baseResponse) == false) {
          router.push("/");
          return;
        }
        if (checkResource(baseResponse) == false) {
          deleteMessage(1, messageId);
          router.push("/main/error");
          return;
        }

        var postJson = JSON.stringify(baseResponse.data);
        window.sessionStorage.setItem("currPost", postJson);
      } else if (systemMsgType == 5 || systemMsgType == 6) {
        // backToSomeone(comment被删时可以回message)
        window.sessionStorage.setItem("backToSomeone", "/main/message");
        // currComment
        var baseResponse = (await getCommentByCommentId(targetId)).data;
        if (checkAuthority(baseResponse) == false) {
          router.push("/");
          return;
        }
        if (checkResource(baseResponse) == false) {
          deleteMessage(1, messageId);
          router.push("/main/error");
          return;
        }

        window.sessionStorage.setItem(
          "currComment",
          JSON.stringify(baseResponse.data)
        );
      } else if (systemMsgType == 7) {
        window.sessionStorage.setItem("gotoUserId", targetId);
      }

      // 路由跳转
      if (
        systemMsgType == 1 ||
        systemMsgType == 2 ||
        systemMsgType == 3 ||
        systemMsgType == 4
      ) {
        router.push("/main/post");
      } else if (systemMsgType == 5 || systemMsgType == 6) {
        router.push("/main/comment");
      } else if (systemMsgType == 7) {
        router.push("/main/user");
      }
    };

    // gotoWSChat
    const gotoWSChat = async (message) => {
      // 计算unreadCount
      props.shareData.notReadCount -= message.unreadCount;
      // 获取对方id
      window.sessionStorage.setItem("wsChatTargetId", message.eventUser.id);
      // 设置该message的unreadCount为0
      message.unreadCount = 0;

      router.push("/main/chat");
    };

    // setIsRead
    const setIsReadShow = ref(false);
    // "setIsRead Dialog"关闭前的判断
    const onBeforeSetIsReadClose = async (action) => {
      if (action === "confirm") {
        var baseResponse = (await setIsRead(1, 0)).data;
        if (checkAuthority(baseResponse) == false) {
          router.push("/");
        }

        // 跳转到主页
        showDialog({
          title: "操作成功",
          theme: "round-button",
        }).then(() => {
          window.location.reload();
        });
      }
      setIsReadShow.value = false;
    };

    // deleteMessage
    const deleteMessageShow = ref(false);
    // "deleteMessage Dialog"关闭前的判断
    const onBeforeDeleteMessageClose = async (action) => {
      if (action === "confirm") {
        var baseResponse = (await deleteMessage(1, 0)).data;
        if (checkAuthority(baseResponse) == false) {
          router.push("/");
        }

        // 跳转到主页
        showDialog({
          title: "操作成功",
          theme: "round-button",
        }).then(() => {
          window.location.reload();
        });
      }
      deleteMessageShow.value = false;
    };

    return {
      router,
      store,
      systemStyle,
      chatStyle,
      clickSearchLock,
      gotoSystem,
      gotoChat,
      messagesPage,
      noAnyMessage,
      messageSelectDTO,
      messageLoading,
      messageFinished,
      onMessageLoad,
      pullRefreshLoading,
      onPullRefresh,
      gotoUser,
      gotoTarget,
      gotoWSChat,
      setIsReadShow,
      onBeforeSetIsReadClose,
      deleteMessageShow,
      onBeforeDeleteMessageClose,
      unreadCountStr,
    };
  },
  components: {},
};
</script>

<style lang="less">
.message {
  .topNav {
    margin: 0 0.2rem;
    padding: 0.2rem 0;
    border: solid 3px black;
    box-shadow: 0 0 15px 1px #000000;
    border-radius: 1rem;
    margin-top: 0.5rem;
    .notice {
      display: inline-block;
      margin-left: 1.3rem;
      padding-right: 1.3rem;
      font-size: 0.5rem;
      font-weight: 700;
      border-right: solid 6px black;
    }
    .message {
      display: inline-block;
      margin-left: 1.1rem;
      font-size: 0.5rem;
      font-weight: 700;
    }
  }
  .messageDiv {
    border: solid 5px black;
    border-radius: 1rem;
    width: 94%;
    height: 100%;
    margin: 0.4rem auto;
    height: 18rem;
    box-shadow: 0 0 15px 1px #000000;
    overflow: auto; // 防止文本溢出盒子
    overflow-y: scroll;
    .noAnyMessage {
      margin: 0 auto;
      margin-top: 3rem;
      opacity: 0.5;
    }
    .noAnyMessageWarning {
      display: block;
      font-size: 0.5rem;
      font-weight: 600;
      opacity: 0.5;
    }
    .oneNotice {
      margin-top: 0.2rem;
      width: 96%;
      position: relative;
      .oneNoticeSimpleUser {
        position: absolute;
        top: -0.2rem;
        left: 1.5rem;
        .avatar {
          position: absolute;
          width: 1rem;
          height: 1rem;
          border: solid 5px black;
          border-radius: 0.5rem;
          z-index: 1;
          right: 0.2rem;
        }
        .gender {
          position: absolute;
          border: solid 2px black;
          border-radius: 0.5rem;
          width: 0.5rem;
          height: 0.5rem;
          right: 0;
          z-index: 2;
        }
        .famous {
          position: absolute;
          border: solid 2px black;
          border-radius: 0.5rem;
          width: 0.5rem;
          height: 0.5rem;
          right: 0;
          top: 0.6rem;
          z-index: 2;
          background-color: white;
        }
      }
      .newMessage {
        position: absolute;
        top: -0.4rem;
        left: 0.1rem;
        color: rgb(255, 0, 0);
        margin-left: 1.7rem;
        font-size: 0.4rem;
        font-weight: 700;
      }
      .oneNoticeContent {
        margin-left: 1.7rem;
        margin-top: 0.5rem;
        width: 70%;
        min-height: 1.1rem;
        font-size: 0.4rem;
        font-weight: 700;
        // 最多显示2行
        overflow: hidden;
        display: -webkit-box;
        text-overflow: ellipsis;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
      }
      .gotoTarget {
        position: absolute;
        right: 0.2rem;
        bottom: -0.5rem;
        width: 0.7rem;
      }
    }
    .oneMessage {
      margin-top: 0.3rem;
      width: 96%;
      display: inline-block;
      position: relative;
      .oneMessageSimpleUser {
        position: absolute;
        top: 0.2rem;
        left: 1.5rem;
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
        .nickname {
          margin-left: 0.2rem;
          font-size: 0.4rem;
          font-weight: 700;
          max-width: 6.5rem;
          // 最多显示1行
          overflow: hidden;
          display: -webkit-box;
          text-overflow: ellipsis;
          -webkit-line-clamp: 1;
          -webkit-box-orient: vertical;
        }
      }
      .oneMessageUnreadCount {
        position: absolute;
        top: -0.1rem;
        right: 1.2rem;
        z-index: 5;
        background-color: red;
        border: solid 1px whitesmoke;
        color: white;
        // width: 0.58rem;
        height: 0.4rem;
        border-radius: 0.2rem;
        text-align: center;
        padding: 0 0.1rem;
      }
      .newMessage {
        position: absolute;
        top: -0.2rem;
        left: 0.1rem;
        color: rgb(255, 0, 0);
        margin-left: 1.7rem;
        font-size: 0.4rem;
        font-weight: 700;
      }
      .oneMessageCreatetime {
        display: block;
        margin-left: 1.7rem;
        margin-top: 0.8rem;
        width: 70%;
        font-size: 0.4rem;
        font-weight: 500;
      }
      .oneMessagePreContent {
        display: inline-block;
        margin-left: 1.7rem;
        margin-top: 0.1rem;
        width: 70%;
        font-size: 0.4rem;
        font-weight: 700;
      }
      .oneMessageContent {
        position: absolute;
        left: 2.7rem;
        top: 1.37rem;
        width: 60%;
        font-size: 0.4rem;
        font-weight: 500;
        // 最多显示1行
        overflow: hidden;
        display: -webkit-box;
        text-overflow: ellipsis;
        -webkit-line-clamp: 1;
        -webkit-box-orient: vertical;
      }
      .gotoTarget {
        position: absolute;
        right: 0.2rem;
        bottom: -0.2rem;
        width: 0.7rem;
      }
    }
  }
  .setIsRead {
    position: absolute;
    z-index: 4;
    bottom: 2.8rem;
    padding: 0.2rem;
    right: 0;
    color: white;
    background-color: rgba(21, 212, 117, 0.9);
    border-radius: 0.6rem;
  }
  .deleteMessage {
    position: absolute;
    z-index: 4;
    bottom: 1.5rem;
    padding: 0.2rem;
    right: 0;
    color: white;
    background-color: rgba(214, 22, 22, 0.9);
    border-radius: 0.6rem;
  }
}
</style>
