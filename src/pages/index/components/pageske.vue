<template name="skeleton">
  <view class="sk-container">
    <view is="pages/index/components/pageske">
      <view class="sk-container pageske--sk-container">
        <view>
          <view
            class="carousel pageske--carousel XtxSwiper--carousel pageske--XtxSwiper--carousel"
          >
            <swiper
              :circular="true"
              :current="0"
              :interval="3000"
              :autoplay="false"
            >
              <swiper-item
                style="
                  position: absolute;
                  width: 100%;
                  height: 100%;
                  transform: translate(0%, 0px) translateZ(0px);
                "
              >
                <navigator
                  class="navigator pageske--navigator XtxSwiper--navigator pageske--XtxSwiper--navigator"
                  hover-class="none"
                >
                  <image
                    class="image pageske--image XtxSwiper--image pageske--XtxSwiper--image sk-image pageske--sk-image"
                    mode="aspectFill"
                  ></image>
                </navigator>
              </swiper-item>
            </swiper>
            <view
              class="indicator pageske--indicator XtxSwiper--indicator pageske--XtxSwiper--indicator"
            >
              <text
                class="dot pageske--dot XtxSwiper--dot pageske--XtxSwiper--dot"
              ></text>
              <text
                class="dot pageske--dot XtxSwiper--dot pageske--XtxSwiper--dot"
              ></text>
              <text
                class="dot pageske--dot XtxSwiper--dot pageske--XtxSwiper--dot"
              ></text>
              <text
                class="dot pageske--dot XtxSwiper--dot pageske--XtxSwiper--dot active pageske--active XtxSwiper--active pageske--XtxSwiper--active"
              ></text>
              <text
                class="dot pageske--dot XtxSwiper--dot pageske--XtxSwiper--dot"
              ></text>
            </view>
          </view>
        </view>
        <view>
          <view
            class="category pageske--category CategoryPanel--category pageske--CategoryPanel--category"
          >
            <navigator
              class="category-item pageske--category-item CategoryPanel--category-item pageske--CategoryPanel--category-item"
              hover-class="none"
            >
              <image
                class="icon pageske--icon CategoryPanel--icon pageske--CategoryPanel--icon sk-image pageske--sk-image"
              ></image>
              <text
                class="text pageske--text CategoryPanel--text pageske--CategoryPanel--text sk-transparent pageske--sk-transparent sk-text-14-2857-992 pageske--sk-text-14-2857-992 sk-text pageske--sk-text sk-image"
                >居家</text
              >
            </navigator>
            <navigator
              class="category-item pageske--category-item CategoryPanel--category-item pageske--CategoryPanel--category-item"
              hover-class="none"
            >
              <image
                class="icon pageske--icon CategoryPanel--icon pageske--CategoryPanel--icon sk-image pageske--sk-image"
              ></image>
              <text
                class="text pageske--text CategoryPanel--text pageske--CategoryPanel--text sk-transparent pageske--sk-transparent sk-text-14-2857-891 pageske--sk-text-14-2857-891 sk-text pageske--sk-text sk-image"
                >锦鲤</text
              >
            </navigator>
            <navigator
              class="category-item pageske--category-item CategoryPanel--category-item pageske--CategoryPanel--category-item"
              hover-class="none"
            >
              <image
                class="icon pageske--icon CategoryPanel--icon pageske--CategoryPanel--icon sk-image pageske--sk-image"
              ></image>
              <text
                class="text pageske--text CategoryPanel--text pageske--CategoryPanel--text sk-transparent pageske--sk-transparent sk-text-14-2857-164 pageske--sk-text-14-2857-164 sk-text pageske--sk-text sk-image"
                >服饰</text
              >
            </navigator>
            <navigator
              class="category-item pageske--category-item CategoryPanel--category-item pageske--CategoryPanel--category-item"
              hover-class="none"
            >
              <image
                class="icon pageske--icon CategoryPanel--icon pageske--CategoryPanel--icon sk-image pageske--sk-image"
              ></image>
              <text
                class="text pageske--text CategoryPanel--text pageske--CategoryPanel--text sk-transparent pageske--sk-transparent sk-text-14-2857-573 pageske--sk-text-14-2857-573 sk-text pageske--sk-text sk-image"
                >母婴</text
              >
            </navigator>
            <navigator
              class="category-item pageske--category-item CategoryPanel--category-item pageske--CategoryPanel--category-item"
              hover-class="none"
            >
              <image
                class="icon pageske--icon CategoryPanel--icon pageske--CategoryPanel--icon sk-image pageske--sk-image"
              ></image>
              <text
                class="text pageske--text CategoryPanel--text pageske--CategoryPanel--text sk-transparent pageske--sk-transparent sk-text-14-2857-656 pageske--sk-text-14-2857-656 sk-text pageske--sk-text sk-image"
                >个护</text
              >
            </navigator>
            <navigator
              class="category-item pageske--category-item CategoryPanel--category-item pageske--CategoryPanel--category-item"
              hover-class="none"
            >
              <image
                class="icon pageske--icon CategoryPanel--icon pageske--CategoryPanel--icon sk-image pageske--sk-image"
              ></image>
              <text
                class="text pageske--text CategoryPanel--text pageske--CategoryPanel--text sk-transparent pageske--sk-transparent sk-text-14-2857-302 pageske--sk-text-14-2857-302 sk-text pageske--sk-text sk-image"
                >严选</text
              >
            </navigator>
            <navigator
              class="category-item pageske--category-item CategoryPanel--category-item pageske--CategoryPanel--category-item"
              hover-class="none"
            >
              <image
                class="icon pageske--icon CategoryPanel--icon pageske--CategoryPanel--icon sk-image pageske--sk-image"
              ></image>
              <text
                class="text pageske--text CategoryPanel--text pageske--CategoryPanel--text sk-transparent pageske--sk-transparent sk-text-14-2857-677 pageske--sk-text-14-2857-677 sk-text pageske--sk-text sk-image"
                >数码</text
              >
            </navigator>
            <navigator
              class="category-item pageske--category-item CategoryPanel--category-item pageske--CategoryPanel--category-item"
              hover-class="none"
            >
              <image
                class="icon pageske--icon CategoryPanel--icon pageske--CategoryPanel--icon sk-image pageske--sk-image"
              ></image>
              <text
                class="text pageske--text CategoryPanel--text pageske--CategoryPanel--text sk-transparent pageske--sk-transparent sk-text-14-2857-453 pageske--sk-text-14-2857-453 sk-text pageske--sk-text sk-image"
                >运动</text
              >
            </navigator>
            <navigator
              class="category-item pageske--category-item CategoryPanel--category-item pageske--CategoryPanel--category-item"
              hover-class="none"
            >
              <image
                class="icon pageske--icon CategoryPanel--icon pageske--CategoryPanel--icon sk-image pageske--sk-image"
              ></image>
              <text
                class="text pageske--text CategoryPanel--text pageske--CategoryPanel--text sk-transparent pageske--sk-transparent sk-text-14-2857-454 pageske--sk-text-14-2857-454 sk-text pageske--sk-text sk-image"
                >杂项</text
              >
            </navigator>
            <navigator
              class="category-item pageske--category-item CategoryPanel--category-item pageske--CategoryPanel--category-item"
              hover-class="none"
            >
              <image
                class="icon pageske--icon CategoryPanel--icon pageske--CategoryPanel--icon sk-image pageske--sk-image"
              ></image>
              <text
                class="text pageske--text CategoryPanel--text pageske--CategoryPanel--text sk-transparent pageske--sk-transparent sk-text-14-2857-850 pageske--sk-text-14-2857-850 sk-text pageske--sk-text sk-image"
                >品牌</text
              >
            </navigator>
          </view>
        </view>
        <view>
          <view
            class="panel pageske--panel HotPanel--panel pageske--HotPanel--panel hot pageske--hot HotPanel--hot pageske--HotPanel--hot"
          >
            <view
              class="item pageske--item HotPanel--item pageske--HotPanel--item"
            >
              <view
                class="title pageske--title HotPanel--title pageske--HotPanel--title"
              >
                <text
                  class="title-text pageske--title-text HotPanel--title-text pageske--HotPanel--title-text sk-transparent pageske--sk-transparent sk-text-14-2857-602 pageske--sk-text-14-2857-602 sk-text pageske--sk-text sk-image"
                  >特惠推荐</text
                >
                <text
                  class="title-desc pageske--title-desc HotPanel--title-desc pageske--HotPanel--title-desc sk-transparent pageske--sk-transparent sk-text-14-2857-385 pageske--sk-text-14-2857-385 sk-text pageske--sk-text sk-image"
                  >精选全攻略</text
                >
              </view>
            </view>
          </view>
        </view>
      </view>
    </view>
  </view>
</template>

<style>
.sk-transparent {
  color: transparent !important;
}
.sk-text-0-0000-802 {
  background-image: linear-gradient(
    transparent 0%,
    #eeeeee 0%,
    #eeeeee 100%,
    transparent 0%
  ) !important;
  background-size: 100% 25.7813rpx;
  position: relative !important;
}
.sk-text {
  background-origin: content-box !important;
  background-clip: content-box !important;
  background-color: transparent !important;
  color: transparent !important;
  background-repeat: repeat-y !important;
}
.sk-text-14-2857-1 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 36.0938rpx;
  position: relative !important;
}
.sk-image {
  background: #efefef !important;
}
.sk-pseudo::before,
.sk-pseudo::after {
  background: #efefef !important;
  background-image: none !important;
  color: transparent !important;
  border-color: transparent !important;
}
.sk-pseudo-rect::before,
.sk-pseudo-rect::after {
  border-radius: 0 !important;
}
.sk-pseudo-circle::before,
.sk-pseudo-circle::after {
  border-radius: 50% !important;
}
.sk-container {
  position: relative !important;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  background-color: transparent;
}
</style>
