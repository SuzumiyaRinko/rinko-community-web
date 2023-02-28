<template>
  <div class="me">
    <div class="info" @click="userInfoUploadShowFunc()">
      <div class="leftInfo" @click="avatarUploadShowFunc()">
        <img
          class="avatar item"
          :src="`${$store.state.SystemConst.resourcesPrefix}${info.avatarUrl}`"
          alt="个人头像"
        />
        <svg
          v-if="info.gender == 1"
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
          v-if="info.gender == 2"
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
          v-if="info.isFamous == 1"
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
      <div class="item">
        <div class="name">
          <span>{{ info.nickname }}</span>
        </div>
        <div>
          <div v-if="info.isFamous == 1" class="famousDiv">知名用户</div>
          <span class="following">关注: {{ info.followingsCount }}</span>
          <span class="follower">粉丝: {{ info.followersCount }}</span>
        </div>
      </div>
      <div class="item">
        <van-icon class="icon" name="arrow" size="0.7rem" />
      </div>
    </div>

    <!-- 帖子 -->
    <h2 class="myPost" :style="postStyle" @click="clickPostFunc()">POST</h2>
    <h2
      class="myCollection"
      :style="collectionStyle"
      @click="clickCollectionFunc()"
    >
      COLLECTION
    </h2>
    <div class="post" id="scrollingPost">
      <!-- 无post时的提示 -->
      <div style="text-align: center">
        <img
          v-if="postsPage.data.length == 0"
          class="noAnyPost"
          :src="`${$store.state.SystemConst.resourcesPrefix}${noAnyPost}`"
          alt="noAnyPost"
        />
        <span
          v-if="postsPage.data.length == 0 && postStyle != ''"
          class="noAnyPostWarning"
          >您暂时还没有发表过POST</span
        >
        <span
          v-if="postsPage.data.length == 0 && collectionStyle != ''"
          class="noAnyPostWarning"
          >您暂时还没有收藏过POST</span
        >
      </div>

      <!-- post遍历 -->
      <van-list
        v-model:loading="postLoading"
        :finished="postFinished"
        finished-text="没有更多了"
        @load="onPostLoad"
        :immediate-check="false"
      >
        <div
          class="onePost"
          v-for="(post, idx) in postsPage.data"
          key="idx"
          @click="gotoPost(post)"
        >
          <div class="onePostSimpleUser">
            <img
              class="avatar item"
              :src="`${$store.state.SystemConst.resourcesPrefix}${post.postUser.avatar}`"
              alt="头像"
              @click="stopGotoPost()"
            />
            <svg
              v-if="post.postUser.gender == 1"
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
              v-if="post.postUser.gender == 2"
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
              v-if="post.postUser.isFamous == 1"
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
            <div class="nickname">
              <span>{{ post.postUser.nickname }}</span>
            </div>
          </div>
          <span class="postTitle">{{ post.title }}</span>
          <!-- <span class="postTitle">{{ post.id }}</span><br /> -->
          <span class="postContent">{{ post.content }}</span
          ><br />
          <span class="postCreateTime">{{ post.createTime }}</span
          ><br />
          <span class="postStatus">点赞：{{ post.likeCount }}</span>
          <span class="postStatus">评论：{{ post.commentCount }}</span>
          <span class="postStatus">收藏：{{ post.collectionCount }}</span>
          <div
            class="postLastView"
            v-if="postStyle != '' && mePostHistory.postLastView == post.id"
          >
            **上次浏览**
          </div>
          <div
            class="postLastView"
            v-if="
              collectionStyle != '' &&
              meCollectionHistory.postLastView == post.id
            "
          >
            **上次浏览**
          </div>
          <hr style="margin-left: 0.3rem" />
        </div>
      </van-list>
    </div>

    <!-- 退出登录 -->
    <div class="logout">
      <van-button color="#d2221e" @click="logoutShow = true"
        >退出登录</van-button
      >
    </div>

    <!-- BottomNav -->
    <div class="bottomNav">
      <div class="item" @click="router.push('/home')">
        <van-icon name="wap-home-o" size="0.8rem" />
        <span>主页</span>
      </div>
      <div class="item" @click="router.push('/message')">
        <van-icon name="chat-o" size="0.8rem" />
        <span>消息</span>
      </div>
      <div class="item currItem" @click="router.push('/me')">
        <van-icon name="user-o" size="0.8rem" />
        <span>个人</span>
      </div>
    </div>

    <!-- 更换头像 -->
    <van-popup
      v-model:show="avatarUploadShow"
      round
      closeable
      position="bottom"
      :style="{ height: '30%' }"
    >
      <h2>更换头像</h2>
      <van-uploader :after-read="updateAvatar" v-model="avatarList" />
    </van-popup>

    <!-- 修改用户信息 -->
    <van-dialog
      v-model:show="userInfoUploadShow"
      title="修改用户信息"
      show-cancel-button
      confirm-button-text="提交"
      :before-close="onBeforeUpdateClose"
    >
      <van-form>
        <van-cell-group inset>
          <!-- 名称 -->
          <van-field
            v-model.trim="userInfoToUpdate.nickname"
            clearable
            maxlength="19"
            show-word-limit
            label="名称"
            left-icon="user-o"
            placeholder="请输入修改后的名称"
          />
          <!-- 性别 -->
          <van-field
            v-model="userInfoToUpdate.gender"
            is-link
            readonly
            label="性别"
            placeholder="选择性别"
            @click="showGenderPicker = true"
          />
        </van-cell-group>
      </van-form>
    </van-dialog>

    <!-- 修改性别 -->
    <van-popup v-model:show="showGenderPicker" round position="bottom">
      <van-picker
        :columns="genderColumns"
        @cancel="showGenderPicker = false"
        @confirm="onGenderConfirm"
      />
    </van-popup>

    <!-- 退出登录 -->
    <van-dialog
      v-model:show="logoutShow"
      title="是否退出登录？"
      show-cancel-button
      confirm-button-text="确认"
      :before-close="onBeforeLogoutClose"
    >
    </van-dialog>
  </div>
</template>

<script>
import { onMounted, reactive, ref } from "vue";
import { showToast, showDialog } from "vant";
import { getUserInfo, uploadAvatar, updateUserInfo, logout } from "@/api/me.js";
import { postSearch, collectionsSearch } from "@/api/post.js";
import { checkAuthority, sleep } from "@/util/utils.js";
import { useRouter, onBeforeRouteLeave } from "vue-router";

export default {
  setup() {
    onMounted(async () => {
      // 加载用户信息
      var baseResponse = (await getUserInfo()).data;
      if (checkAuthority(baseResponse) == false) {
        router.push("/");
      }
      var userInfo = baseResponse.data;
      console.log(userInfo);
      info.id = userInfo.id;
      info.nickname = userInfo.nickname;
      info.gender = userInfo.gender;
      info.isFamous = userInfo.isFamous;
      info.avatarUrl = userInfo.avatar;
      info.followingsCount = userInfo.followingsCount;
      info.followersCount = userInfo.followersCount;

      // mePostHistory
      var tmpMePostHistory = JSON.parse(
        window.sessionStorage.getItem("mePostHistory")
      );
      if (tmpMePostHistory != null) {
        mePostHistory.postLastView = tmpMePostHistory.postLastView;
        mePostHistory.pageNum = tmpMePostHistory.pageNum;
        mePostHistory.scrollTop = tmpMePostHistory.scrollTop;
      }
      window.sessionStorage.setItem(
        "mePostHistory",
        JSON.stringify(mePostHistory)
      );
      // 本次应该到达的页数
      while (postSearchDTO.pageNum <= mePostHistory.pageNum) {
        onPostLoad();
        await sleep(80);
      }
      // 移动scrollingPost的滚动条
      document.getElementById("scrollingPost").scrollTop =
        mePostHistory.scrollTop;
    });

    onBeforeRouteLeave((to, from, next) => {
      if (to.name == "registerOrLogin") {
        window.sessionStorage.clear();
      }

      // oldRouter
      window.sessionStorage.setItem("oldRouter", "me");
      // mePostHistory / meCollectionHistory
      if (postStyle.value != "") {
        var tmpMePostHistory = JSON.parse(
          window.sessionStorage.getItem("mePostHistory")
        );
        tmpMePostHistory.pageNum = postSearchDTO.pageNum - 1;
        tmpMePostHistory.scrollTop =
          document.getElementById("scrollingPost").scrollTop;
        window.sessionStorage.setItem(
          "mePostHistory",
          JSON.stringify(tmpMePostHistory)
        );
      } else {
        var tmpMeCollectionHistory = JSON.parse(
          window.sessionStorage.getItem("meCollectionHistory")
        );
        tmpMeCollectionHistory.pageNum = postSearchDTO.pageNum - 1;
        tmpMeCollectionHistory.scrollTop =
          document.getElementById("scrollingPost").scrollTop;
        window.sessionStorage.setItem(
          "meCollectionHistory",
          JSON.stringify(tmpMeCollectionHistory)
        );
      }

      next();
    });

    // mePostHistory
    const mePostHistory = reactive({
      postLastView: -1,
      pageNum: 1,
      scrollTop: 0,
    });

    // meCollectionHistory
    const meCollectionHistory = reactive({
      postLastView: -1,
      pageNum: 1,
      scrollTop: 0,
    });

    // router
    const router = useRouter();
    // 用户数据
    const info = reactive({
      id: "",
      nickname: "",
      gender: "",
      isFamous: "",
      avatarUrl: "",
      followingsCount: "",
      followersCount: "",
    });

    // 更换头像
    const avatarUploadShow = ref(false);
    // 打开更换头像Dialog
    const avatarUploadShowFunc = () => {
      event.stopPropagation(); // 阻止事件冒泡至外层div
      avatarUploadShow.value = true;
    };
    // 上传头像
    const updateAvatar = async (file) => {
      var data = new FormData();
      data.append("file", file.file);
      var baseResponse = (await uploadAvatar(data)).data;
      if (checkAuthority(baseResponse) == false) {
        router.push("/");
      }
      if (baseResponse.code != 200) {
        showToast({
          message: "头像上传失败",
          icon: "cross",
        });
        avatarList.value = [];
        return;
      }
      showDialog({
        title: "头像更换成功",
        theme: "round-button",
      }).then(() => {
        // 更新sessionStorage上的用户信息
        var myUserInfoJson = window.sessionStorage.getItem("myUserInfo");
        var myUserInfo = JSON.parse(myUserInfoJson);
        myUserInfo.avatar = baseResponse.data;
        window.sessionStorage.setItem("myUserInfo", JSON.stringify(myUserInfo));
        // 刷新页面
        avatarUploadShow.value = false;
        avatarList.value = [];
        window.location.reload();
      });
    };
    const avatarList = ref([]);

    // 修改用户信息
    const userInfoUploadShow = ref(false);
    // 打开修改用户信息Dialog
    const userInfoUploadShowFunc = () => {
      userInfoToUpdate.nickname = info.nickname;
      if (info.gender == 1) {
        userInfoToUpdate.gender = "男";
      } else if (info.gender == 2) {
        userInfoToUpdate.gender = "女";
      } else {
        userInfoToUpdate.gender = "（不显示性别）";
      }
      userInfoUploadShow.value = true;
    };
    // 准备修改的用户信息
    const userInfoToUpdate = reactive({
      nickname: "",
      gender: "",
    });
    // "修改用户信息Dialog"关闭前的判断
    const onBeforeUpdateClose = async (action) => {
      if (action === "confirm") {
        var userUpdateDTO = {
          nickname: "",
          gender: "",
        };
        userUpdateDTO.nickname = userInfoToUpdate.nickname;
        if (userInfoToUpdate.gender === "男") {
          userUpdateDTO.gender = 1;
        } else if (userInfoToUpdate.gender === "女") {
          userUpdateDTO.gender = 2;
        } else {
          userUpdateDTO.gender = 0;
        }
        var baseResponse = (await updateUserInfo(userUpdateDTO)).data;
        if (checkAuthority(baseResponse) == false) {
          router.push("/");
        }
        if (baseResponse.code != 200) {
          var exMessage = baseResponse.message;
          showToast({
            message: exMessage,
            icon: "cross",
          });
          return;
        }
        // 跳转到主页
        showDialog({
          title: "用户信息修改成功",
          message: "确认后将刷新个人页",
          theme: "round-button",
        }).then(() => {
          // 更新sessionStorage上的用户信息
          var myUserInfoJson = window.sessionStorage.getItem("myUserInfo");
          var myUserInfo = JSON.parse(myUserInfoJson);
          myUserInfo.nickname = userUpdateDTO.nickname;
          myUserInfo.gender = userUpdateDTO.gender;
          window.sessionStorage.setItem(
            "myUserInfo",
            JSON.stringify(myUserInfo)
          );
          window.location.reload();
        });
      }
      userInfoUploadShow.value = false;
    };
    // 更改性别Dialog
    const showGenderPicker = ref(false);
    // 性别列表
    const genderColumns = [
      { text: "（不显示性别）", value: 0 },
      { text: "男", value: 1 },
      { text: "女", value: 2 },
    ];
    // 改变性别Picker
    const onGenderConfirm = ({ selectedOptions }) => {
      userInfoToUpdate.gender = selectedOptions[0].text;
      showGenderPicker.value = false;
    };

    // nav额外样式
    const postStyle = ref(
      "box-shadow: 0 0 15px 3px #000000;background-color: #1f83d4;"
    );
    const collectionStyle = ref("");

    // 防止用户频繁点击
    const clickSearchLock = ref(false);
    // nav点击事件
    const clickPostFunc = async () => {
      if (postStyle.value != "") {
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

      // 记录meCollectionHistory
      var tmpMeCollectionHistory = JSON.parse(
        window.sessionStorage.getItem("meCollectionHistory")
      );
      tmpMeCollectionHistory.pageNum = postSearchDTO.pageNum - 1;
      tmpMeCollectionHistory.scrollTop =
        document.getElementById("scrollingPost").scrollTop;
      window.sessionStorage.setItem(
        "meCollectionHistory",
        JSON.stringify(tmpMeCollectionHistory)
      );

      // init
      postStyle.value =
        "box-shadow: 0 0 15px 3px #000000;background-color: #1f83d4;";
      collectionStyle.value = "";
      postsPage.data = [];
      postSearchDTO.pageNum = 1;
      postFinished.value = false;

      // mePostHistory
      var tmpMePostHistory = JSON.parse(
        window.sessionStorage.getItem("mePostHistory")
      );
      if (tmpMePostHistory != null) {
        mePostHistory.postLastView = tmpMePostHistory.postLastView;
        mePostHistory.pageNum = tmpMePostHistory.pageNum;
        mePostHistory.scrollTop = tmpMePostHistory.scrollTop;
      }
      // 本次应该到达的页数
      while (postSearchDTO.pageNum <= mePostHistory.pageNum) {
        onPostLoad();
        await sleep(80);
      }
      // 移动scrollingPost的滚动条
      document.getElementById("scrollingPost").scrollTop =
        mePostHistory.scrollTop;
    };
    const clickCollectionFunc = async () => {
      if (collectionStyle.value != "") {
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

      // 记录mePostHistory
      var tmpMePostHistory = JSON.parse(
        window.sessionStorage.getItem("mePostHistory")
      );
      tmpMePostHistory.pageNum = postSearchDTO.pageNum - 1;
      tmpMePostHistory.scrollTop =
        document.getElementById("scrollingPost").scrollTop;
      window.sessionStorage.setItem(
        "mePostHistory",
        JSON.stringify(tmpMePostHistory)
      );

      // init
      postSearchDTO.pageNum = 1;
      collectionStyle.value =
        "box-shadow: 0 0 15px 3px #000000;background-color: #1f83d4;";
      postStyle.value = "";
      postsPage.data = [];
      postFinished.value = false;

      // meCollectionHistory
      var tmpMeCollectionHistory = JSON.parse(
        window.sessionStorage.getItem("meCollectionHistory")
      );
      if (tmpMeCollectionHistory != null) {
        meCollectionHistory.postLastView = tmpMeCollectionHistory.postLastView;
        meCollectionHistory.pageNum = tmpMeCollectionHistory.pageNum;
        meCollectionHistory.scrollTop = tmpMeCollectionHistory.scrollTop;
      }
      window.sessionStorage.setItem(
        "meCollectionHistory",
        JSON.stringify(meCollectionHistory)
      );
      // 本次应该到达的页数
      while (postSearchDTO.pageNum <= meCollectionHistory.pageNum) {
        onPostLoad();
        await sleep(80);
      }
      // 移动scrollingPost的滚动条
      document.getElementById("scrollingPost").scrollTop =
        meCollectionHistory.scrollTop;
    };

    // 个人post数据
    const postsPage = reactive({
      total: 0,
      data: [],
    });
    // noAnyPost
    const noAnyPost = ref("/logo.png");
    // postSearchDTO
    const postSearchDTO = reactive({
      isSearchMyself: true,
      userId: "",
      sortType: 3,
      pageNum: 1, // 下次查询的pageNum
    });
    // post往下滚动
    const postLoading = ref(false);
    const postFinished = ref(false);
    const onPostLoad = async () => {
      if (postStyle.value != "") {
        // 加载用户post
        postSearchDTO.isSearchMyself = true;
        var baseResponse = (await postSearch(postSearchDTO)).data;
      } else {
        // 加载用户collections
        postSearchDTO.isSearchMyself = false;
        var baseResponse = (await collectionsSearch(postSearchDTO.pageNum))
          .data;
      }
      if (checkAuthority(baseResponse) == false) {
        router.push("/");
      }
      postSearchDTO.pageNum++; // 页数+1
      var page = baseResponse.data;
      postsPage.total = page.total;
      // 防bug
      if (
        postsPage.data.length == 0 ||
        postsPage.data[0].id != page.data[0].id
      ) {
        postsPage.data = postsPage.data.concat(page.data);
      }

      postLoading.value = false;
      // 已经没有更多数据了
      if (postsPage.data.length >= postsPage.total) {
        postFinished.value = true;
      }
    };

    // 退出登录Dialog
    const logoutShow = ref(false);
    // "退出登录Dialog"关闭前的判断
    const onBeforeLogoutClose = async (action) => {
      if (action === "confirm") {
        // 跳转到登录页面
        await logout();
        router.push("/");
      }
      logoutShow.value = false;
    };

    // gotoPost
    const gotoPost = (post) => {
      // currPost
      var postJson = JSON.stringify(post);
      window.sessionStorage.setItem("currPost", postJson);
      // postLastView
      if (postStyle.value != "") {
        var tmpMePostHistory = JSON.parse(
          window.sessionStorage.getItem("mePostHistory")
        );
        tmpMePostHistory.postLastView = post.id;
        tmpMePostHistory.pageNum = postSearchDTO.pageNum - 1;
        tmpMePostHistory.scrollTop =
          document.getElementById("scrollingPost").scrollTop;
        window.sessionStorage.setItem(
          "mePostHistory",
          JSON.stringify(tmpMePostHistory)
        );
      } else {
        var tmpMeCollectionHistory = JSON.parse(
          window.sessionStorage.getItem("meCollectionHistory")
        );
        tmpMeCollectionHistory.postLastView = post.id;
        tmpMeCollectionHistory.pageNum = postSearchDTO.pageNum - 1;
        tmpMeCollectionHistory.scrollTop =
          document.getElementById("scrollingPost").scrollTop;
        window.sessionStorage.setItem(
          "meCollectionHistory",
          JSON.stringify(tmpMeCollectionHistory)
        );
      }

      router.push("/post");
    };
    // stopGotoPost
    const stopGotoPost = () => {
      event.stopPropagation(); // 阻止事件冒泡至外层div
    };

    return {
      mePostHistory,
      meCollectionHistory,
      router,
      info,
      avatarUploadShow,
      avatarUploadShowFunc,
      updateAvatar,
      avatarList,
      userInfoUploadShow,
      userInfoUploadShowFunc,
      userInfoToUpdate,
      onBeforeUpdateClose,
      showGenderPicker,
      genderColumns,
      onGenderConfirm,
      postStyle,
      collectionStyle,
      clickSearchLock,
      clickPostFunc,
      clickCollectionFunc,
      postsPage,
      noAnyPost,
      postSearchDTO,
      postLoading,
      postFinished,
      onPostLoad,
      logoutShow,
      onBeforeLogoutClose,
      gotoPost,
      stopGotoPost,
    };
  },
  components: {},
};
</script>

<style lang="less">
.me {
  width: 100%;
  height: 100%;
  .info {
    display: flex;
    align-items: center;
    margin: 0 0.2rem;
    padding: 0.2rem 0;
    border: solid 3px black;
    box-shadow: 0 0 15px 1px #000000;
    border-radius: 1rem;
    margin-top: 0.5rem;
    .leftInfo {
      position: relative;
      margin-right: 0.6rem;
      .avatar {
        display: inline-block;
        width: 1.6rem;
        height: 1.6rem;
        border: solid 5px black;
        border-radius: 0.8rem;
        margin-left: 0.2rem;
        z-index: 1;
      }
      .gender {
        position: absolute;
        border: solid 2px black;
        border-radius: 0.5rem;
        width: 0.8rem;
        height: 0.8rem;
        left: 1.2rem;
        z-index: 2;
      }
      .famous {
        position: absolute;
        border: solid 2px black;
        border-radius: 0.5rem;
        width: 0.8rem;
        height: 0.8rem;
        left: 1.2rem;
        top: 1rem;
        z-index: 2;
        background-color: white;
      }
    }
    .famousDiv {
      display: inline-block;
      border: solid 3px rgb(41, 137, 192);
      border-radius: 0.5rem;
      background-color: rgb(0, 238, 255);
      width: 1.5rem;
      height: 0.5rem;
      font-size: 0.3rem;
      font-weight: 700;
      text-align: center;
      margin-right: 0.2rem;
      box-shadow: 0 0 15px 2px #bdcee0;
    }
    .item {
      display: inline-block;
      .name {
        display: inline-block;
        font-size: 0.4rem;
        font-weight: 700;
        margin-bottom: 0.2rem;
        max-width: 5.5rem;
      }
      .icon {
        position: absolute;
        top: 1.2rem;
        right: 0.6rem;
      }
      .follower,
      .following {
        font-size: 0.3rem;
        font-weight: 600;
        margin-right: 0.3rem;
      }
    }
  }
  .myPost {
    display: inline-block;
    margin-left: 3%;
    margin-top: 0.2rem;
    width: 47%;
    text-align: center;
    font-size: 0.5rem;
    font-weight: 700;
    border-top-left-radius: 1rem;
    border-top: solid 5px black;
    border-left: solid 5px black;
    border-right: solid 5px black;
  }
  .myCollection {
    display: inline-block;
    width: 47%;
    text-align: center;
    font-size: 0.5rem;
    font-weight: 700;
    border-top-right-radius: 1rem;
    border-top: solid 5px black;
    border-right: solid 5px black;
  }
  .post {
    border: solid 5px black;
    border-bottom-left-radius: 1rem;
    border-bottom-right-radius: 1rem;
    width: 94%;
    height: 100%;
    margin: 0 auto;
    height: 15.5rem;
    box-shadow: 0 0 15px 1px #000000;
    overflow: auto; // 防止文本溢出盒子
    .noAnyPost {
      margin: 0 auto;
      margin-top: 3rem;
      opacity: 0.5;
    }
    .noAnyPostWarning {
      display: block;
      font-size: 0.5rem;
      font-weight: 600;
      opacity: 0.5;
    }
    .onePost {
      margin-top: 0.2rem;
      width: 96%;
      position: relative;
      // min-height: 3rem;
      .onePostSimpleUser {
        position: absolute;
        right: 0rem;
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
        .nickname {
          position: absolute;
          text-align: right;
          width: 5rem;
          right: 0;
          top: 1rem;
          font-size: 0.4rem;
          font-weight: 700;
        }
      }
      .postTitle {
        margin-left: 0.5rem;
        font-size: 0.5rem;
        font-weight: 700;
        width: 60%;
        // 最多显示1行
        overflow: hidden;
        display: -webkit-box;
        text-overflow: ellipsis;
        -webkit-line-clamp: 1;
        -webkit-box-orient: vertical;
      }
      .postContent {
        width: 70%;
        margin-left: 0.5rem;
        font-size: 0.35rem;
        font-weight: 500;
        // 最多显示1行
        overflow: hidden;
        display: -webkit-box;
        text-overflow: ellipsis;
        -webkit-line-clamp: 1;
        -webkit-box-orient: vertical;
      }
      .postCreateTime {
        margin-left: 0.5rem;
        margin-top: 0.5rem;
        font-size: 0.3rem;
        font-weight: 700;
      }
      .postStatus {
        margin-left: 0.5rem;
        font-size: 0.3rem;
        font-weight: 700;
      }
      .postLastView {
        position: absolute;
        top: 0rem;
        right: 1.1rem;
        font-size: 0.4rem;
        font-weight: 700;
        color: rgb(226, 19, 19);
      }
    }
  }
  .logout {
    position: absolute;
    bottom: 1rem;
    .van-button {
      box-shadow: 0 0 12px 1px #201f1f;
      border-radius: 2rem;
      width: 6rem;
      height: 0.9rem;
      left: 2rem;
      bottom: 0.6rem;
    }
  }

  .van-popup h2 {
    text-align: center;
    margin-top: 0.4rem;
    font-size: 0.5rem;
  }
  .BottomNav {
    position: absolute;
    bottom: 0;
  }
  .van-popup {
    text-align: center;
    .van-uploader {
      --van-uploader-size: 3rem;
      --van-uploader-icon-size: 1.5rem;
      margin-top: 1rem;
    }
  }
  .van-picker {
    --van-picker-option-font-size: 0.5rem;
  }
  // BottomNav
  .bottomNav {
    position: absolute;
    bottom: 0;
    border: 3px black solid;
    border-top-left-radius: 0.2rem;
    border-top-right-radius: 0.2rem;
    display: flex;
    justify-content: space-evenly;
    width: 100%;
    font-size: 0.4rem;
    font-weight: 700;
    box-shadow: 0 0 15px 1px #000000;
    .item {
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 0 0.5rem;
    }
    .currItem {
      color: #1989fa;
    }
  }
}
</style>
