<template>
  <div class="comment">
    <!-- Top -->
    <div class="top">
      <van-icon name="arrow-left" color="#1776d2" size="0.6rem" />
      <span class="back" @click="backToPost()">返回</span>
      <span class="title">COMMENT</span>
      <van-button
        v-if="currComment.commentUser.id == myUserId"
        class="deleteButton"
        type="danger"
        @click="deleteCommentShow = true"
        >删除</van-button
      >
    </div>

    <!-- Content -->
    <div class="content" id="scrollingComment">
      <!-- User, CommentTitle -->
      <div
        style="
          border-top: solid 3px black;
          border-bottom: solid 3px black;
          box-shadow: 0 0 15px 1px #000000;
          min-height: 2.3rem;
        "
      >
        <div class="oneCommentSimpleUser">
          <img
            class="avatar item"
            :src="`${$store.state.SystemConst.resourcesPrefix}${currComment.commentUser.avatar}`"
            alt="头像"
            @click="gotoUser(currComment.commentUser.id)"
          />
          <svg
            v-if="currComment.commentUser.gender == 1"
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
            v-if="currComment.commentUser.gender == 2"
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
            v-if="currComment.commentUser.roles.indexOf(1) != -1"
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
            <span>{{ currComment.commentUser.nickname }}</span>
          </div>
        </div>
        <span class="commentCreateTime">{{ currComment.createTime }}</span>
        <span class="commentTitle">{{ currComment.title }}</span>
      </div>
      <!-- CommentContent -->
      <div class="commentContent">{{ currComment.content }}</div>
      <!-- CommentPictures -->
      <div class="commentPictures">
        <span
          v-if="
            currComment.picturesSplit != null &&
            currComment.picturesSplit.length > 0
          "
          v-for="(pic, idx) in currComment.picturesSplit"
        >
          <img
            v-if="currComment.picturesSplit.length == 1"
            style="max-width: 9rem; margin-left: 0.1rem;"
            :src="`${$store.state.SystemConst.resourcesPrefix}${pic}`"
            alt="图片"
            @click="viewPicture(currComment.picturesSplit, idx)"
          />
          <img
            v-if="currComment.picturesSplit.length == 2"
            style="max-width: 4.3rem; margin-left: 0.15rem;"
            :src="`${$store.state.SystemConst.resourcesPrefix}${pic}`"
            alt="图片"
            @click="viewPicture(currComment.picturesSplit, idx)"
          />
          <img
            v-if="currComment.picturesSplit.length >= 3"
            style="height: 2.9rem; width: 2.9rem; margin-left: 0.06rem"
            :src="`${$store.state.SystemConst.resourcesPrefix}${pic}`"
            alt="图片"
            @click="viewPicture(currComment.picturesSplit, idx)"
          />
        </span>
      </div>

      <!-- Recomment -->
      <div class="recommentTitle">RECOMMENT</div>
      <!-- 无Recomment时的提示 -->
      <div style="text-align: center">
        <img
          v-if="recommentPage.data.length == 0"
          class="noAnyRecomment"
          :src="`${$store.state.SystemConst.resourcesPrefix}${noAnyRecomment}`"
          alt="noAnyRecomment"
        />
        <span
          v-if="recommentPage.data.length == 0"
          class="noAnyRecommentWarning"
          >暂时没有任何RECOMMENT</span
        >
      </div>
      <!-- 遍历Recomment -->
      <van-list
        v-model:loading="recommentLoading"
        :finished="recommentFinished"
        finished-text="没有更多了"
        @load="onRecommentLoad"
        :immediate-check="false"
      >
        <div
          class="oneRecomment"
          v-for="(recomment, idx) in recommentPage.data"
          key="idx"
        >
          <div class="oneRecommentSimpleUser">
            <img
              class="avatar item"
              :src="`${$store.state.SystemConst.resourcesPrefix}${recomment.commentUser.avatar}`"
              alt="头像"
              @click="gotoUser(recomment.userId)"
            />
            <svg
              v-if="recomment.commentUser.gender == 1"
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
              v-if="recomment.commentUser.gender == 2"
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
              v-if="recomment.commentUser.roles.indexOf(1) != -1"
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
              <span>{{ recomment.commentUser.nickname }}</span>
            </div>
          </div>
          <span class="recommentCreateTime">{{ recomment.createTime }}</span>
          <span class="recommentContent">{{ recomment.content }}</span>
          <!-- RecommentPictures -->
          <div
            v-if="
              recomment.picturesSplit != null &&
              recomment.picturesSplit.length > 0
            "
            class="commentPictures"
          >
            <span v-for="(pic, idx) in recomment.picturesSplit">
              <img
                v-if="recomment.picturesSplit.length == 1"
                style="max-width: 9rem; margin-left: 0.1rem;"
                :src="`${$store.state.SystemConst.resourcesPrefix}${pic}`"
                alt="图片"
                @click="viewPicture(recomment.picturesSplit, idx)"
              />
              <img
                v-if="recomment.picturesSplit.length == 2"
                style="max-width: 4.3rem; margin-left: 0.15rem;"
                :src="`${$store.state.SystemConst.resourcesPrefix}${pic}`"
                alt="图片"
                @click="viewPicture(recomment.picturesSplit, idx)"
              />
              <img
                v-if="recomment.picturesSplit.length >= 3"
                style="height: 2.9rem; width: 2.9rem; margin-left: 0.06rem"
                :src="`${$store.state.SystemConst.resourcesPrefix}${pic}`"
                alt="图片"
                @click="viewPicture(recomment.picturesSplit, idx)"
              />
            </span>
          </div>
        </div>
      </van-list>
    </div>

    <!-- BottomNav -->
    <div class="bottomNav">
      <div class="item" @click="like()">
        <van-icon name="like-o" size="0.8rem" :color="likeColor" />
        <span>点赞（{{ currComment.likeCount }}）</span>
      </div>
      <div class="item" @click="recommentShow = true">
        <van-icon name="comment-o" size="0.8rem" />
        <span>评论（{{ currComment.commentCount }}）</span>
      </div>
    </div>

    <!-- 删除COMMENT -->
    <van-dialog
      v-model:show="deleteCommentShow"
      title="是否删除该COMMENT"
      show-cancel-button
      confirm-button-text="确认"
      :before-close="onBeforeDeleteClose"
    >
    </van-dialog>

    <!-- RecommentDialog -->
    <van-dialog
      class="recommentDialog"
      v-model:show="recommentShow"
      title="评论该COMMENT"
      show-cancel-button
      confirm-button-text="发送评论"
      :before-close="onBeforeRecommentClose"
    >
      <!-- CommentContent -->
      <van-field
        v-model.trim="commentInsertDTO.content"
        rows="2"
        autosize
        type="textarea"
        maxlength="1000"
        show-word-limit
        placeholder="请输入评论内容"
      />
      <!-- CommentPictures -->
      <van-uploader
        class="commentPictures"
        :after-read="uploadPicture"
        :before-delete="deletePicture"
        preview-size="2.6rem"
        v-model="commentPictures"
        multiple
        :max-count="9"
      />
    </van-dialog>
  </div>
</template>

<script>
import { onBeforeMount, onMounted, reactive, ref } from "vue";
import { useStore } from "vuex";
import { showDialog, showToast, showImagePreview } from "vant";
import { useRouter, onBeforeRouteLeave } from "vue-router";
import {
  commentSelect,
  deleteCommentAPI,
  likeAPI,
  commentAPI,
  hasLikeAPI,
  getPostByCommentId,
} from "@/api/comment.js";
import { saveHistory, getHistory } from "@/api/history.js";
import { uploadFile, deleteFile } from "@/api/file.js";
import { checkAuthority, sleep } from "@/util/utils.js";
import moment from "moment";

export default {
  setup() {
    onBeforeMount(() => {
      // myUserId
      myUserId.value = window.sessionStorage.getItem("myUserId");

      // currComment
      var currCommentParse = JSON.parse(
        window.sessionStorage.getItem("currComment")
      );
      currComment.id = currCommentParse.id;
      currComment.userId = currCommentParse.userId;
      currComment.title = currCommentParse.title;
      currComment.content = currCommentParse.content;
      currComment.createTime = currCommentParse.createTime;
      currComment.likeCount = currCommentParse.likeCount;
      currComment.commentCount = currCommentParse.commentCount;
      currComment.commentUser = currCommentParse.commentUser;
      currComment.picturesSplit = currCommentParse.picturesSplit;
    })
    
    onMounted(async () => {
      // 判断当前用户是否已点赞
      var baseResponse = (await hasLikeAPI(currComment.id)).data;
      if (checkAuthority(baseResponse) == false) {
        router.push("/");
      }
      hasLike.value = baseResponse.data;
      if (hasLike.value) {
        likeColor.value = "red";
      } else {
        likeColor.value = "black";
      }

      // 获取当前用户该comment的历史
      var historySearchDTO = {
        targetType: 3,
        targetId: currComment.id,
      };
      var baseResponse = (await getHistory(historySearchDTO)).data;
      if (checkAuthority(baseResponse) == false) {
        router.push("/");
      }
      var history = baseResponse.data;
      var commentPage = history.pageNum;
      var commentScroll = history.scrollTop;
      while (commentSelectDTO.pageNum <= commentPage) {
        onRecommentLoad();
        await sleep(80);
      }

      // 移动scrollingPost的滚动条
      document.getElementById("scrollingComment").scrollTop = commentScroll;
    });

    onBeforeRouteLeave(async (to, from, next) => {
      // oldRouter
      window.sessionStorage.setItem("oldRouter", "comment");
      // 存储历史
      var targetType = 3;
      var targetId = currComment.id;
      var pageNum = commentSelectDTO.pageNum - 1;
      var scrollTop = document.getElementById("scrollingComment").scrollTop;
      var history = {
        targetType,
        targetId,
        pageNum,
        scrollTop,
      };
      var baseResponse = (await saveHistory(history)).data;
      if (checkAuthority(baseResponse) == false) {
        router.push("/");
      }

      next();
    });

    // router
    const router = useRouter();

    // store
    const store = useStore();

    const backToPost = async () => {
      var baseResponse = (await getPostByCommentId(currComment.id)).data;
      if (!checkAuthority(baseResponse)) {
        router.push("/");
      }

      // currPost
      var postJson = JSON.stringify(baseResponse.data);
      window.sessionStorage.setItem("currPost", postJson);

      router.push("/post");
    };

    // myUserId
    const myUserId = ref("");

    // gotoUser
    const gotoUser = (userId) => {
      event.stopPropagation(); // 阻止事件冒泡至外层div
      var myUserId = window.sessionStorage.getItem("myUserId");
      if (userId == myUserId) {
        router.push("/me");
      } else {
        window.sessionStorage.setItem("gotoUserId", userId);
        router.push("/user");
      }
    };

    // noAnyRecomment
    const noAnyRecomment = ref("/logo.png");

    // currComment
    const currComment = reactive({
      id: "",
      userId: "",
      title: "",
      content: "",
      createTime: "",
      likeCount: "",
      commentCount: "",
      commentUser: {},
      picturesSplit: [],
    });

    // recommentPage
    const recommentPage = reactive({
      total: 0,
      data: [],
    });

    // commentSelectDTO
    const commentSelectDTO = reactive({
      targetType: 2,
      targetId: currComment.id,
      sortType: 1,
      pageNum: 1, // 下次查询的pageNum
    });

    // recomment下拉刷新
    const recommentLoading = ref(false);
    const recommentFinished = ref(false);
    const onRecommentLoad = async () => {
      // 加载recomment
      commentSelectDTO.targetId = currComment.id;
      console.log("commentSelectDTO.targetId", commentSelectDTO.targetId);
      var baseResponse = (await commentSelect(commentSelectDTO)).data;
      if (checkAuthority(baseResponse) == false) {
        router.push("/");
      }
      commentSelectDTO.pageNum++; // 页数+1
      var pageInfo = baseResponse.data;
      console.log("pageInfo", pageInfo);
      recommentPage.total = pageInfo.total;

      // 防bug
      if (
        recommentPage.data.length == 0 ||
        recommentPage.data[0].id != recommentPage.data[0].id
      ) {
        recommentPage.data = recommentPage.data.concat(pageInfo.list);
      }

      recommentLoading.value = false;

      // 已经没有更多数据了
      if (
        recommentPage.data.length >= recommentPage.total ||
        pageInfo.list.length == 0
      ) {
        recommentFinished.value = true;
      }
    };

    // 查看图片
    const viewPicture = (picturesSplit, idx) => {
      // 阻止事件冒泡至外层div
      event.stopPropagation();

      var images = [];
      for (var i = 0; i <= picturesSplit.length - 1; i++) {
        images.push(
          `${store.state.SystemConst.resourcesPrefix}${picturesSplit[i]}`
        );
      }
      showImagePreview({
        images,
        closeable: true,
        startPosition: idx,
      });
    };

    // 删除comment
    const deleteCommentShow = ref(false);
    // "删除comment Dialog"关闭前的判断
    const onBeforeDeleteClose = async (action) => {
      if (action === "confirm") {
        var baseResponse = (await deleteCommentAPI(currComment.id)).data;
        if (checkAuthority(baseResponse) == false) {
          router.push("/");
        }
        if (baseResponse.code != 200) {
          var exMessage = baseResponse.message;
          showToast({
            message: exMessage,
            icon: "cross",
          });
          deleteCommentShow.value = false;
        }

        // 跳转到主页
        showDialog({
          title: "COMMENT删除成功",
          theme: "round-button",
        }).then(() => {
          router.go(-1);
        });
      }
      deleteCommentShow.value = false;
    };

    // 点赞
    const hasLike = ref(false);
    const likeColor = ref("black");
    const like = async () => {
      var baseResponse = (await likeAPI(currComment.id)).data;
      if (checkAuthority(baseResponse) == false) {
        router.push("/");
      }
      hasLike.value = !hasLike.value;
      if (hasLike.value) {
        likeColor.value = "red";
        currComment.likeCount++;
      } else {
        likeColor.value = "black";
        currComment.likeCount--;
      }
    };

    // 评论
    const recommentShow = ref(false);
    const commentInsertDTO = reactive({
      type: 2,
      targetId: currComment.id,
      content: "",
      picturesSplit: [],
    });
    // recommentDialog关闭前的判断
    const onBeforeRecommentClose = async (action) => {
      if (action === "confirm") {
        // 判空
        if (
          commentInsertDTO.content.length == 0 &&
          commentInsertDTO.picturesSplit.length == 0
        ) {
          showToast({
            message: "内容不能为空",
            icon: "cross",
          });
          return;
        }

        var myUserInfo = JSON.parse(
          window.sessionStorage.getItem("myUserInfo")
        );
        // 发送ajax
        commentInsertDTO.targetId = currComment.id;
        var baseResponse = (await commentAPI(commentInsertDTO)).data;
        if (checkAuthority(baseResponse) == false) {
          router.push("/");
        }
        // 立刻显示
        var now = moment().format("YYYY-MM-DD HH:mm:ss");
        var newComment = {
          id: 0,
          createTime: now,
          content: commentInsertDTO.content,
          commentUser: myUserInfo,
          picturesSplit: commentInsertDTO.picturesSplit,
        };
        newComment.id = baseResponse.data;
        recommentPage.total++;
        recommentPage.data.push(newComment);
        currComment.commentCount++;
        commentInsertDTO.content = "";
        commentInsertDTO.picturesSplit = [];
        commentPictures.value = [];

        // 成功提示
        showToast({
          message: "发送评论成功",
          icon: "success",
        });
      }
      recommentShow.value = false;
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
    const commentPictures = ref([]);

    // 取消上传
    const deletePicture = async (file, detail) => {
      commentPictures.value.splice(detail.index, 1);
      var deletePicturePath = commentInsertDTO.picturesSplit[detail.index];
      commentInsertDTO.picturesSplit.splice(detail.index, 1);
      var baseResponse = (await deleteFile(deletePicturePath)).data;
      if (checkAuthority(baseResponse) == false) {
        router.push("/");
      }
    };

    return {
      router,
      store,
      backToPost,
      myUserId,
      gotoUser,
      noAnyRecomment,
      currComment,
      recommentPage,
      commentSelectDTO,
      recommentLoading,
      recommentFinished,
      onRecommentLoad,
      viewPicture,
      deleteCommentShow,
      onBeforeDeleteClose,
      likeColor,
      like,
      recommentShow,
      commentInsertDTO,
      onBeforeRecommentClose,
      uploadPicture,
      commentPictures,
      deletePicture,
    };
  },
  components: {},
};
</script>

<style lang="less">
.comment {
  .top {
    margin: 0 0.2rem;
    padding: 0.2rem 0;
    border: solid 3px black;
    box-shadow: 0 0 15px 1px #000000;
    border-radius: 1rem;
    margin-top: 0.5rem;
    vertical-align: top;
    .van-icon {
      margin-left: 0.2rem;
    }
    .back {
      display: inline-block;
      margin-left: 0.2rem;
      font-size: 0.5rem;
      font-weight: 700;
      color: #1776d2;
    }
    .title {
      display: inline-block;
      margin-left: 1.4rem;
      font-size: 0.5rem;
      font-weight: 700;
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
    height: 18rem;
    border: solid 3px black;
    box-shadow: 0 0 15px 1px #000000;
    margin: 0.25rem auto;
    overflow: auto; // 防止文本溢出盒子
    .oneCommentSimpleUser {
      position: relative;
      top: 0.3rem;
      .avatar {
        position: absolute;
        left: 0.2rem;
        width: 1.6rem;
        height: 1.6rem;
        border: solid 5px black;
        border-radius: 0.8rem;
        z-index: 1;
      }
      .gender {
        position: absolute;
        left: 1.3rem;
        border: solid 2px black;
        border-radius: 0.4rem;
        width: 0.8rem;
        height: 0.8rem;
        z-index: 2;
      }
      .famous {
        position: absolute;
        left: 1.3rem;
        border: solid 2px black;
        border-radius: 0.4rem;
        width: 0.8rem;
        height: 0.8rem;
        top: 1rem;
        z-index: 2;
        background-color: white;
      }
      .nickname {
        margin-left: 2.5rem;
        font-size: 0.4rem;
        font-weight: 800;
      }
    }
    .commentCreateTime {
      display: block;
      margin-top: 0.5rem;
      margin-left: 2.5rem;
      font-size: 0.4rem;
      font-weight: 700;
    }
    .commentTitle {
      display: block;
      max-width: 78%;
      margin-top: 0.1rem;
      margin-left: 2.5rem;
      font-size: 0.5rem;
      font-weight: 700;
    }
    .commentContent {
      max-width: 100%;
      margin-top: 0.2rem;
      padding: 0.1rem;
      text-align: left;
      font-size: 0.5rem;
      font-weight: 500;
    }
    .commentPictures {
      margin-top: 0.1rem;
      margin-left: 0.1rem;
      border-bottom: solid 3px black;
    }
    .recommentTitle {
      text-align: center;
      font-weight: 700;
      font-size: 0.5rem;
      margin-top: 0.1rem;
    }
    .noAnyRecomment {
      margin: 0 auto;
      margin-top: 0.2rem;
      opacity: 0.5;
    }
    .noAnyRecommentWarning {
      display: block;
      font-size: 0.5rem;
      font-weight: 600;
      opacity: 0.5;
    }
    .oneRecomment {
      margin-top: 0.2rem;
      width: 96%;
      position: relative;
      min-height: 1.8rem;
      border-bottom: solid 2px black;
      .oneRecommentSimpleUser {
        position: absolute;
        left: 1.5rem;
        .avatar {
          position: absolute;
          top: 0.5rem;
          width: 1rem;
          height: 1rem;
          border: solid 5px black;
          border-radius: 0.5rem;
          z-index: 1;
          right: 0.2rem;
        }
        .gender {
          position: absolute;
          top: 0.5rem;
          right: 0;
          border: solid 2px black;
          border-radius: 0.5rem;
          width: 0.5rem;
          height: 0.5rem;
          z-index: 2;
        }
        .famous {
          position: absolute;
          top: 1.1rem;
          right: 0;
          border: solid 2px black;
          border-radius: 0.5rem;
          width: 0.5rem;
          height: 0.5rem;
          z-index: 2;
          background-color: white;
        }
        .nickname {
          position: absolute;
          min-width: 7.6rem;
          left: 0.3rem;
          top: 0.4rem;
          font-size: 0.4rem;
          font-weight: 800;
        }
      }
      .recommentContent {
        display: inline-block;
        margin-top: 1rem;
        margin-bottom: 0.5rem;
        margin-left: 1.8rem;
        font-size: 0.4rem;
        font-weight: 500;
      }
      .recommentCreateTime {
        position: absolute;
        left: 0.2rem;
        top: 0;
        font-size: 0.3rem;
        font-weight: 800;
      }
      .recommentPictures {
        margin-left: 0.1rem;
      }
    }
    .commentStatus {
      margin-left: 0.5rem;
      font-size: 0.3rem;
      font-weight: 700;
    }
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
  }
  // commentDialog
  .commentDialog .van-field__control {
    border: solid 1px black;
    max-height: 16rem;
  }
}
</style>
