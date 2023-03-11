<template>
  <div class="post">
    <!-- Top -->
    <div class="top">
      <van-icon name="arrow-left" color="#1776d2" size="0.6rem" />
      <span class="back" @click="router.go(-1)">返回</span>
      <span class="title">POST</span>
      <van-button
        v-if="currPost.userId == myUserId"
        class="deleteButton"
        type="danger"
        @click="deletePostShow = true"
        >删除</van-button
      >
    </div>

    <!-- Content -->
    <div class="content" id="scrollingPost">
      <!-- User, Title -->
      <div
        style="
          border-top: solid 3px black;
          border-bottom: solid 3px black;
          box-shadow: 0 0 15px 1px #000000;
          min-height: 2.8rem;
        "
      >
        <!-- 置顶 -->
        <van-icon
          v-if="currPost.isTop"
          class="isTop"
          color="red"
          size="0.8rem"
          name="back-top"
        />
        <span v-if="currPost.isTop" class="isTopText">置顶</span>
        <!-- 加精 -->
        <van-icon
          v-if="currPost.isWonderful"
          class="isWonderful"
          color="red"
          size="0.8rem"
          name="fire-o"
        />
        <span v-if="currPost.isWonderful" class="isWonderfulText">热门</span>
        <div class="onePostSimpleUser">
          <img
            class="avatar item"
            :src="`${$store.state.SystemConst.resourcesPrefix}${currPost.postUser.avatar}`"
            alt="头像"
            @click="gotoUser(currPost.postUser.id)"
          />
          <svg
            v-if="currPost.postUser.gender == 1"
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
            v-if="currPost.postUser.gender == 2"
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
            v-if="currPost.postUser.roles.indexOf(1) != -1"
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
            <span>{{ currPost.postUser.nickname }}</span>
          </div>
        </div>
        <span class="postCreateTime">{{ currPost.createTime }}</span>
        <span class="postTitle" v-html="currPost.title" />
      </div>

      <!-- PostContent -->
      <div class="postContent" v-html="currPost.content" />
      <!-- PostPictures -->
      <div class="postPictures">
        <!-- 一张图片 -->
        <span
          v-if="
            currPost.picturesSplit != null && currPost.picturesSplit.length == 1
          "
        >
          <img
            class="onePostPicture"
            style="max-width: 9rem; margin-left: 0.1rem"
            :src="`${$store.state.SystemConst.resourcesPrefix}${currPost.picturesSplit[0]}`"
            alt="图片"
            @click="viewPicture(currPost.picturesSplit, idx)"
          />
        </span>
        <!-- 多张图片 -->
        <span
          v-if="currPost.picturesSplit.length > 1"
          v-for="(pic, idx) in currPost.picturesSplit"
          key="idx"
        >
          <van-image
            style="margin-left: 0.06rem"
            width="2.9rem"
            height="2.9rem"
            fit="cover"
            :src="`${$store.state.SystemConst.resourcesPrefix}${pic}`"
            @click="viewPicture(currPost.picturesSplit, idx)"
          />
        </span>
      </div>
      <!-- Comment -->
      <div class="commentTitle">COMMENT</div>
      <!-- 无Comment时的提示 -->
      <div style="text-align: center">
        <img
          v-if="commentPage.data.length == 0"
          class="noAnyComment"
          :src="`${$store.state.SystemConst.resourcesPrefix}${noAnyComment}`"
          alt="noAnyComment"
        />
        <span v-if="commentPage.data.length == 0" class="noAnyCommentWarning"
          >该POST暂时没有任何COMMENT</span
        >
      </div>
      <!-- 遍历Comment -->
      <van-list
        v-model:loading="commentLoading"
        :finished="commentFinished"
        finished-text="没有更多了"
        @load="onCommentLoad"
        :immediate-check="false"
      >
        <div
          class="oneComment"
          v-for="(comment, idx) in commentPage.data"
          key="idx"
          @click="gotoComment(comment, idx)"
        >
          <div class="oneCommentSimpleUser">
            <img
              class="avatar item"
              :src="`${$store.state.SystemConst.resourcesPrefix}${comment.commentUser.avatar}`"
              alt="头像"
              @click="gotoUser(comment.userId)"
            />
            <svg
              v-if="comment.commentUser.gender == 1"
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
              v-if="comment.commentUser.gender == 2"
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
              v-if="comment.commentUser.roles.indexOf(1) != -1"
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
              <span>{{ comment.commentUser.nickname }}</span>
            </div>
          </div>
          <div
            class="oneCommentStatus"
            style="display: flex; flex-direction: row"
          >
            <div class="item">
              <van-icon name="like-o" size="0.6rem" />
              <span>{{ statsStr(comment.likeCount) }}</span>
            </div>
            <div class="item">
              <van-icon name="comment-o" size="0.6rem" />
              <span>{{ statsStr(comment.commentCount) }}</span>
            </div>
          </div>
          <span class="commentCreateTime">{{ comment.createTime }}</span>
          <span class="commentContent" v-html="comment.content" />
          <!-- CommentPictures -->
          <div class="commentPictures">
            <!-- 一张图片 -->
            <span
              v-if="
                comment.picturesSplit != null &&
                comment.picturesSplit.length == 1
              "
              v-for="(pic, idx) in comment.picturesSplit"
              key="idx"
            >
              <van-image
                style="margin-left: 0.06rem"
                fit="cover"
                :src="`${$store.state.SystemConst.resourcesPrefix}${pic}`"
                @click="viewPicture(comment.picturesSplit, idx)"
                ><template v-slot:loading>
                  <van-loading type="spinner" size="80" /> </template
              ></van-image>
            </span>
            <!-- 多张图片 -->
            <span
              v-if="
                comment.picturesSplit != null &&
                comment.picturesSplit.length > 1
              "
              v-for="(pic, idx) in comment.picturesSplit"
              key="idx"
            >
              <van-image
                style="margin-left: 0.06rem"
                width="2.9rem"
                height="2.9rem"
                fit="cover"
                :src="`${$store.state.SystemConst.resourcesPrefix}${pic}`"
                @click="viewPicture(comment.picturesSplit, idx)"
                ><template v-slot:loading>
                  <van-loading type="spinner" size="80" /> </template
              ></van-image>
            </span>
          </div>
          <div class="recomment" v-if="comment.first3Comments.length > 0">
            <div v-for="(recomment, idx) in comment.first3Comments">
              <span v-if="recomment == null || recomment.length == 0"
                >回复：[图片]</span
              >
              <span v-if="recomment.length > 0" class="oneRecomment"
                >回复：{{ recomment }}</span
              >
            </div>
            <div class="seeMoreRecomment">（点击查看更多）</div>
          </div>
          <div class="commentLastView" v-if="commentLastView == comment.id">
            **上次浏览**
          </div>
        </div>
      </van-list>
    </div>

    <!-- BottomNav -->
    <div class="bottomNav">
      <div class="item" @click="like()">
        <van-icon name="like-o" size="0.8rem" :color="likeColor" />
        <span>点赞（{{ statsStr(currPost.likeCount) }}）</span>
      </div>
      <div class="item" @click="commentShow = true">
        <van-icon name="comment-o" size="0.8rem" />
        <span>评论（{{ statsStr(currPost.commentCount) }}）</span>
      </div>
      <div class="item" @click="collect()">
        <van-icon name="star-o" size="0.8rem" :color="collectionColor" />
        <span>收藏（{{ statsStr(currPost.collectionCount) }}）</span>
      </div>
    </div>

    <!-- 删除POST Dialog -->
    <van-dialog
      v-model:show="deletePostShow"
      title="是否删除该POST"
      show-cancel-button
      confirm-button-text="确认"
      :before-close="onBeforeDeleteClose"
    >
    </van-dialog>

    <!-- CommentDialog -->
    <van-dialog
      class="commentDialog"
      v-model:show="commentShow"
      title="评论该POST"
      show-cancel-button
      confirm-button-text="发送评论"
      :before-close="onBeforeCommentClose"
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
        :before-read="beforeRead"
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
import { showDialog, showNotify, showToast, showImagePreview } from "vant";
import { onBeforeRouteLeave, useRouter } from "vue-router";
import { useStore } from "vuex";
import {
  deletePostAPI,
  likeAPI,
  collectAPI,
  hasLikeAPI,
  hasCollectAPI,
} from "@/api/post.js";
import { commentSelect, commentAPI } from "@/api/comment.js";
import { saveHistory, getHistory } from "@/api/history.js";
import { uploadFile, deleteFile } from "@/api/file.js";
import {
  checkAuthority,
  checkResource,
  sleep,
  statsStr,
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

      // currPost
      var currPostJson = window.sessionStorage.getItem("currPost");
      var currPostParse = JSON.parse(currPostJson);
      currPost.postUser = currPostParse.postUser;
      currPost.id = currPostParse.id;
      currPost.userId = currPostParse.userId;
      currPost.title = currPostParse.title;
      currPost.content = currPostParse.content;
      currPost.createTime = currPostParse.createTime;
      currPost.likeCount = currPostParse.likeCount;
      currPost.commentCount = currPostParse.commentCount;
      currPost.collectionCount = currPostParse.collectionCount;
      currPost.picturesSplit = currPostParse.picturesSplit;
      currPost.isTop = currPostParse.isTop;
      currPost.isWonderful = currPostParse.isWonderful;
    });

    onMounted(async () => {
      var totalHeight = document.documentElement.clientHeight;
      document.querySelector(".top").style.height = `${
        (totalHeight * 6) / 100
      }px`;
      var noAnyComment = document.querySelector(".noAnyComment");
      if (noAnyComment != null) {
        noAnyComment.style.height = `${(totalHeight * 30) / 100}px`;
      }
      document.querySelector(".content").style.height = `${
        (totalHeight * 80) / 100
      }px`;
      document.querySelector(".bottomNav").style.height = `${
        (totalHeight * 8) / 100
      }px`;

      // 判断当前用户是否已点赞、收藏
      var baseResponse = (await hasLikeAPI(currPost.id)).data;
      if (checkAuthority(baseResponse) == false) {
                window.location.reload();

      }
      hasLike.value = baseResponse.data;
      if (hasLike.value) {
        likeColor.value = "red";
      } else {
        likeColor.value = "black";
      }

      var baseResponse = (await hasCollectAPI(currPost.id)).data;
      if (checkAuthority(baseResponse) == false) {
                window.location.reload();

        return;
      }
      hasCollect.value = baseResponse.data;
      if (hasCollect.value) {
        collectionColor.value = "#ffea00";
      } else {
        collectionColor.value = "black";
      }

      // 获取当前用户该post的历史
      var historySearchDTO = {
        targetType: 2,
        targetId: currPost.id,
      };
      var baseResponse = (await getHistory(historySearchDTO)).data;
      if (checkAuthority(baseResponse) == false) {
                window.location.reload();

      }
      var history = baseResponse.data;
      console.log("history", history);
      if (history.pageNum <= 0) {
        history.pageNum = 1;
      }
      commentLastView.value = history.lastView;

      while (commentSelectDTO.pageNum <= history.pageNum) {
        onCommentLoad();
        await sleep(80);
      }

      // 移动scrollingPost的滚动条
      document.getElementById("scrollingPost").scrollTop = history.scrollTop;
    });

    onBeforeRouteLeave(async (to, from, next) => {
      window.sessionStorage.setItem("oldRouter", "/main/post");

      // 判断是否退回"/"
      // var token = window.sessionStorage.getItem("token");
      // if (token == null || token.length == 0) {
      //   console.log("onBeforeRouteLeave push");
      //   if (to.fullPath == "/") {
      //     next();
      //   } else {
      //     next("/");
      //   }
      // }

      // 存储历史
      var token = window.sessionStorage.getItem("token");
      if (token) {
        var targetType = 2;
        var targetId = currPost.id;
        var pageNum = commentSelectDTO.pageNum - 1;
        var scrollTop = document.getElementById("scrollingPost").scrollTop;
        var history = {
          targetType,
          targetId,
          pageNum,
          scrollTop,
          lastView: commentLastView.value,
        };
        var baseResponse = (await saveHistory(history)).data;
        if (checkAuthority(baseResponse) == false) {
        window.location.reload();
        }
      }

      // bottomNav
      if (
        to.path == "/main/home" ||
        to.path == "/main/message" ||
        to.path == "/main/me"
      ) {
        props.shareData.bottomNavShow = true;
      }

      next();
    });

    const commentLastView = ref(-1);

    // router
    const router = useRouter();

    // store
    const store = useStore();

    // myUserId
    const myUserId = ref("");

    // backToSomeone
    const backToSomeone = () => {
      router.push(window.sessionStorage.getItem("backToSomeone"));
    };

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
        window.sessionStorage.setItem("backToSomeone", "/main/post");

        router.push("/main/user");
      }
    };

    // gotoComment
    const gotoComment = (comment, idx) => {
      // currComment
      var commemtJson = JSON.stringify(comment);
      window.sessionStorage.setItem("currComment", commemtJson);
      window.sessionStorage.setItem("currCommentIdx", idx);

      // commentLastView
      commentLastView.value = comment.id;

      router.push("/main/comment");
    };

    // noAnyComment
    const noAnyComment = ref("/logo.png");

    // 当前post
    const currPost = reactive({
      id: "",
      userId: "",
      title: "",
      content: "",
      createTime: "",
      likeCount: "",
      commentCount: "",
      collectionCount: "",
      postUser: {},
      picturesSplit: [],
    });

    // commentPage
    const commentPage = reactive({
      total: 0,
      data: [],
    });

    // commentSelectDTO
    const commentSelectDTO = reactive({
      targetType: 1,
      targetId: currPost.id,
      sortType: 1,
      pageNum: 1, // 下次查询的pageNum
    });

    // comment下拉刷新
    const commentLoading = ref(false);
    const commentFinished = ref(false);
    const onCommentLoad = async () => {
      console.log("onLoad");

      // 加载comment
      commentSelectDTO.targetId = currPost.id;
      var baseResponse = (await commentSelect(commentSelectDTO)).data;
      if (checkAuthority(baseResponse) == false) {
                window.location.reload();

      }
      commentSelectDTO.pageNum++; // 页数+1
      var pageInfo = baseResponse.data;
      commentPage.total = pageInfo.total;

      // 防bug
      if (
        (pageInfo.list.length > 0 &&
          commentPage.data.length > 0 &&
          commentPage.data[0].id != pageInfo.list[0].id) ||
        (pageInfo.list.length > 0 && commentPage.data.length == 0)
      ) {
        commentPage.data = commentPage.data.concat(pageInfo.list);
      }

      commentLoading.value = false;

      // 已经没有更多数据了
      if (
        commentPage.data.length >= commentPage.total ||
        pageInfo.list.length == 0
      ) {
        commentFinished.value = true;
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

    // 删除post
    const deletePostShow = ref(false);
    // "删除post Dialog"关闭前的判断
    const onBeforeDeleteClose = async (action) => {
      if (action === "confirm") {
        var baseResponse = (await deletePostAPI(currPost.id)).data;
        if (checkAuthority(baseResponse) == false) {
                  window.location.reload();

        }
        if (baseResponse.code != 200) {
          var exMessage = baseResponse.message;
          showToast({
            message: exMessage,
            icon: "cross",
          });
          deletePostShow.value = false;
        }

        // 跳转到主页
        showDialog({
          title: "POST删除成功",
          theme: "round-button",
        }).then(() => {
          props.shareData.homeStyle = "";
          props.shareData.messageStyle = "";
          props.shareData.meStyle = "color: #1989fa";
          router.push("/main/me");
        });
      }
      deletePostShow.value = false;
    };

    // 点赞
    const hasLike = ref(false);
    const likeColor = ref("black");
    const like = async () => {
      var baseResponse = (await likeAPI(currPost.id)).data;
      if (checkAuthority(baseResponse) == false) {
                window.location.reload();

      }
      hasLike.value = !hasLike.value;
      if (hasLike.value) {
        likeColor.value = "red";
        currPost.likeCount++;
      } else {
        likeColor.value = "black";
        currPost.likeCount--;
      }
    };

    // 评论
    const commentShow = ref(false);
    const commentInsertDTO = reactive({
      type: 1,
      targetId: currPost.id,
      content: "",
      picturesSplit: [],
    });
    // CommentDialog关闭前的判断
    const onBeforeCommentClose = async (action) => {
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

        // 评论
        var myUserInfo = JSON.parse(
          window.sessionStorage.getItem("myUserInfo")
        );
        // 立刻显示
        var now = moment().format("YYYY-MM-DD HH:mm:ss");
        var newComment4Show = {
          id: 0,
          commentUser: myUserInfo,
          createTime: now,
          content: saveEnter2Br4Web(commentInsertDTO.content),
          likeCount: 0,
          commentCount: 0,
          first3Comments: [],
          picturesSplit: commentInsertDTO.picturesSplit,
        };
        // 发送ajax
        commentInsertDTO.targetId = currPost.id;
        commentInsertDTO.content = saveEnter2Br4Save(commentInsertDTO.content);
        var baseResponse = (await commentAPI(commentInsertDTO)).data;
        if (checkAuthority(baseResponse) == false) {
                  window.location.reload();

        }
        newComment4Show.id = baseResponse.data;
        commentPage.total++;
        commentPage.data.push(newComment4Show); // 立即展示
        currPost.commentCount++;
        commentInsertDTO.content = "";
        commentInsertDTO.picturesSplit = [];
        commentPictures.value = [];
        // 成功提示
        showToast({
          message: "发送评论成功",
          icon: "success",
        });
      }
      commentShow.value = false;
    };

    // 上传图片
    const uploadPicture = async (file) => {
      var data = new FormData();
      data.append("file", file.file);
      var baseResponse = (await uploadFile(data)).data;
      if (checkAuthority(baseResponse) == false) {
               window.location.reload();

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

    const beforeRead = (file) => {
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
      commentPictures.value.splice(detail.index, 1);
      var deletePicturePath = commentInsertDTO.picturesSplit[detail.index];
      commentInsertDTO.picturesSplit.splice(detail.index, 1);
      var baseResponse = (await deleteFile(deletePicturePath)).data;
      if (checkAuthority(baseResponse) == false) {
                window.location.reload();

      }
    };

    // 收藏
    const hasCollect = ref(false);
    const collectionColor = ref("black");
    const collect = async () => {
      var baseResponse = (await collectAPI(currPost.id)).data;
      if (checkAuthority(baseResponse) == false) {
                window.location.reload();

      }
      hasCollect.value = !hasCollect.value;
      if (hasCollect.value) {
        collectionColor.value = "#ffea00";
        currPost.collectionCount++;
      } else {
        collectionColor.value = "black";
        currPost.collectionCount--;
      }
    };

    return {
      commentLastView,
      router,
      store,
      myUserId,
      backToSomeone,
      gotoUser,
      gotoComment,
      noAnyComment,
      currPost,
      commentPage,
      commentSelectDTO,
      commentLoading,
      commentFinished,
      onCommentLoad,
      viewPicture,
      deletePostShow,
      onBeforeDeleteClose,
      hasLike,
      likeColor,
      like,
      commentShow,
      commentInsertDTO,
      onBeforeCommentClose,
      uploadPicture,
      commentPictures,
      beforeRead,
      deletePicture,
      hasCollect,
      collectionColor,
      collect,
      statsStr,
    };
  },
  components: {},
};
</script>

<style lang="less">
.post {
  .top {
    margin: 0 0.2rem;
    padding: 0.2rem 0;
    border: solid 3px black;
    box-shadow: 0 0 15px 1px #000000;
    border-radius: 1rem;
    margin-top: 0.3rem;
    vertical-align: top;
    .van-icon {
      margin-left: 0.3rem;
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
      margin-left: 2.1rem;
      font-size: 0.5rem;
      font-weight: 700;
    }
    .deleteButton {
      position: absolute;
      top: 0.6rem;
      right: 0.8rem;
      font-size: 0.5rem;
      font-weight: 700;
      height: 0.6rem;
    }
  }
  .content {
    position: relative;
    width: 96%;
    height: 18rem;
    border: solid 3px black;
    box-shadow: 0 0 15px 1px #000000;
    margin: 0.35rem auto;
    border-radius: 1rem;
    overflow: auto; // 防止文本溢出盒子
    .isTop {
      position: absolute;
      width: 0.9rem;
      top: 0.3rem;
      right: 1.4rem;
      z-index: 5;
      opacity: 0.8;
    }
    .isTopText {
      position: absolute;
      font-size: 0.5rem;
      font-weight: 700;
      top: 0.3rem;
      right: 0.4rem;
      z-index: 5;
      color: red;
      opacity: 0.8;
    }
    .isWonderful {
      position: absolute;
      width: 0.7rem;
      top: 1rem;
      right: 1.6rem;
      z-index: 5;
      opacity: 0.8;
    }
    .isWonderfulText {
      position: absolute;
      font-size: 0.5rem;
      font-weight: 700;
      top: 1.1rem;
      right: 0.4rem;
      z-index: 5;
      color: red;
      opacity: 0.8;
    }
    .onePostSimpleUser {
      position: relative;
      top: 0.3rem;
      // right: 0.2rem;
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
    .postCreateTime {
      display: block;
      margin-top: 0.5rem;
      margin-left: 2.5rem;
      font-size: 0.4rem;
      font-weight: 700;
    }
    .postTitle {
      display: block;
      margin-top: 0.1rem;
      margin-left: 2.5rem;
      font-size: 0.5rem;
      font-weight: 700;
      word-wrap: break-word // 换行
;
    }
    .postContent {
      max-width: 100%;
      margin-top: 0.2rem;
      padding: 0.1rem;
      text-align: left;
      font-size: 0.5rem;
      font-weight: 500;
      word-wrap: break-word // 换行
;
    }
    .postPictures {
      margin-top: 0.1rem;
      margin-left: 0.1rem;
      border-bottom: solid 3px black;
    }
    .commentTitle {
      text-align: center;
      font-weight: 700;
      font-size: 0.5rem;
      margin-top: 0.1rem;
    }
    .noAnyComment {
      margin: 0 auto;
      margin-top: 0.2rem;
      opacity: 0.5;
    }
    .noAnyCommentWarning {
      display: block;
      font-size: 0.5rem;
      font-weight: 600;
      opacity: 0.5;
    }
    .oneComment {
      margin-top: 0.2rem;
      width: 96%;
      position: relative;
      min-height: 1.8rem;
      border-bottom: solid 2px black;
      .oneCommentSimpleUser {
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
      .oneCommentStatus {
        position: absolute;
        top: -0.2rem;
        right: 0;
        font-size: 0.5rem;
        font-weight: 700;
        .item {
          padding-left: 0.2rem;
        }
      }
      .commentContent {
        display: inline-block;
        margin-top: 1rem;
        margin-bottom: 0.5rem;
        margin-left: 1.8rem;
        font-size: 0.4rem;
        font-weight: 500;
        word-wrap: break-word; // 换行
        max-width: 80%;
      }
      .commentCreateTime {
        position: absolute;
        left: 0.2rem;
        top: 0;
        font-size: 0.3rem;
        font-weight: 800;
      }
      .commentPictures {
        margin-left: 0.1rem;
      }
      .recomment {
        font-size: 0.4rem;
        font-weight: 600;
        margin-top: 0.2rem;
        margin-left: 20%;
        padding-left: 0.3rem;
        width: 80%;
        background-color: rgb(212, 212, 212);
        border: solid 1px black;
        box-shadow: 0 0 15px 1px #000000;
        .oneRecomment {
          // 最多显示1行
          overflow: hidden;
          display: -webkit-box;
          text-overflow: ellipsis;
          -webkit-line-clamp: 1;
          -webkit-box-orient: vertical;
        }
        .seeMoreRecomment {
          text-align: right;
          color: rgb(49, 50, 51);
        }
      }
      .commentLastView {
        position: absolute;
        top: 0.5rem;
        right: 0rem;
        font-size: 0.4rem;
        font-weight: 700;
        color: rgb(226, 19, 19);
      }
    }
    .postStatus {
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
    max-height: 8.5rem; // 让textarea能上下滚动
  }
}
</style>
