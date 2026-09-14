<template name="skeleton">
  <view class="sk-container">
    <view class="viewport viewport">
      <view class="search search">
        <view class="input input">
          <text
            class="icon-search sk-transparent sk-text-14-2857-968 sk-text sk-pseudo sk-pseudo-circle"
            >女靴</text
          >
        </view>
      </view>
      <view class="categories categories">
        <scroll-view
          :scroll-y="true"
          class="primary primary"
        >
          <view class="item active sk-pseudo sk-pseudo-circle">
            <text class="name sk-transparent sk-text-14-2857-940 sk-text"
              >居家</text
            >
          </view>
          <view class="item sk-pseudo sk-pseudo-circle">
            <text class="name sk-transparent sk-text-14-2857-916 sk-text"
              >美食</text
            >
          </view>
          <view class="item sk-pseudo sk-pseudo-circle">
            <text class="name sk-transparent sk-text-14-2857-529 sk-text"
              >服饰</text
            >
          </view>
          <view class="item sk-pseudo sk-pseudo-circle">
            <text class="name sk-transparent sk-text-14-2857-161 sk-text"
              >母婴</text
            >
          </view>
          <view class="item sk-pseudo sk-pseudo-circle">
            <text class="name sk-transparent sk-text-14-2857-691 sk-text"
              >个护</text
            >
          </view>
          <view class="item sk-pseudo sk-pseudo-circle">
            <text class="name sk-transparent sk-text-14-2857-205 sk-text"
              >严选</text
            >
          </view>
          <view class="item sk-pseudo sk-pseudo-circle">
            <text class="name sk-transparent sk-text-14-2857-427 sk-text"
              >数码</text
            >
          </view>
          <view class="item sk-pseudo sk-pseudo-circle">
            <text class="name sk-transparent sk-text-14-2857-498 sk-text"
              >运动</text
            >
          </view>
          <view class="item sk-pseudo sk-pseudo-circle">
            <text class="name sk-transparent sk-text-14-2857-669 sk-text"
              >杂项</text
            >
          </view>
        </scroll-view>
        <scroll-view
          :scroll-y="true"
          class="secondary secondary"
        >
          <view
            is="components/XtxSwiper"
            class="banner banner"
          >
            <view class="carousel XtxSwiper--carousel">
              <swiper
                :circular="true"
                :interval="3000"
                :current="0"
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
                    class="navigator XtxSwiper--navigator"
                    hover-class="none"
                  >
                    <image
                      class="image XtxSwiper--image sk-image"
                      mode="aspectFill"
                    ></image>
                  </navigator>
                </swiper-item>
                <swiper-item
                  style="
                    position: absolute;
                    width: 100%;
                    height: 100%;
                    transform: translate(100%, 0px) translateZ(0px);
                  "
                >
                  <navigator
                    class="navigator XtxSwiper--navigator"
                    hover-class="none"
                  >
                    <image
                      class="image XtxSwiper--image sk-image"
                      mode="aspectFill"
                    ></image>
                  </navigator>
                </swiper-item>
              </swiper>
              <view class="indicator XtxSwiper--indicator">
                <text
                  class="dot XtxSwiper--dot active XtxSwiper--active"
                ></text>
                <text class="dot XtxSwiper--dot"></text>
                <text class="dot XtxSwiper--dot"></text>
                <text class="dot XtxSwiper--dot"></text>
                <text class="dot XtxSwiper--dot"></text>
              </view>
            </view>
          </view>
          <view class="panel panel">
            <view class="title title">
              <text class="name sk-transparent sk-text-28-0000-37 sk-text"
                >居家生活用品</text
              >
              <navigator
                class="more sk-transparent sk-text-30-0000-61 sk-text sk-pseudo sk-pseudo-circle"
                hover-class="none"
                >全部</navigator
              >
            </view>
            <view class="section section">
              <navigator
                class="goods goods"
                hover-class="none"
              >
                <image class="image sk-image"></image>
                <view
                  class="name ellipsis sk-transparent sk-text-14-2857-746 sk-text"
                  >钻石陶瓷涂层多用锅18cm 小奶锅</view
                >
                <view class="price price">
                  <text class="symbol sk-transparent sk-opacity">¥</text>
                  <text
                    class="number sk-transparent sk-text-14-2857-893 sk-text"
                    >149.00</text
                  >
                </view>
              </navigator>
              <navigator
                class="goods goods"
                hover-class="none"
              >
                <image class="image sk-image"></image>
                <view
                  class="name ellipsis sk-transparent sk-text-14-2857-463 sk-text"
                  >极光限定 珠光蓝珐琅锅</view
                >
                <view class="price price">
                  <text class="symbol sk-transparent sk-opacity">¥</text>
                  <text
                    class="number sk-transparent sk-text-14-2857-782 sk-text"
                    >199.00</text
                  >
                </view>
              </navigator>
            </view>
          </view>
          <view class="panel panel">
            <view class="title title">
              <text class="name sk-transparent sk-text-28-0000-551 sk-text"
                >收纳</text
              >
              <navigator
                class="more sk-transparent sk-text-30-0000-880 sk-text sk-pseudo sk-pseudo-circle"
                hover-class="none"
                >全部</navigator
              >
            </view>
            <view class="section section">
              <navigator
                class="goods goods"
                hover-class="none"
              >
                <image class="image sk-image"></image>
                <view
                  class="name ellipsis sk-transparent sk-text-14-2857-268 sk-text"
                  >给衣柜减减肥，真空防潮压缩袋</view
                >
                <view class="price price">
                  <text class="symbol sk-transparent sk-opacity">¥</text>
                  <text
                    class="number sk-transparent sk-text-14-2857-708 sk-text"
                    >79.00</text
                  >
                </view>
              </navigator>
              <navigator
                class="goods goods"
                hover-class="none"
              >
                <image class="image sk-image"></image>
                <view
                  class="name ellipsis sk-transparent sk-text-14-2857-137 sk-text"
                  >爆款明星好物，抽屉式透明储物柜</view
                >
                <view class="price price">
                  <text class="symbol sk-transparent sk-opacity">¥</text>
                  <text
                    class="number sk-transparent sk-text-14-2857-357 sk-text"
                    >129.00</text
                  >
                </view>
              </navigator>
              <navigator
                class="goods goods"
                hover-class="none"
              >
                <image class="image sk-image"></image>
                <view
                  class="name ellipsis sk-transparent sk-text-14-2857-354 sk-text"
                  >衣柜省空间神器，棉麻涤·收纳挂袋</view
                >
                <view class="price price">
                  <text class="symbol sk-transparent sk-opacity">¥</text>
                  <text
                    class="number sk-transparent sk-text-14-2857-552 sk-text"
                    >55.00</text
                  >
                </view>
              </navigator>
              <navigator
                class="goods goods"
                hover-class="none"
              >
                <image class="image sk-image"></image>
              </navigator>
              <navigator
                class="goods goods"
                hover-class="none"
              >
                <image class="image sk-image"></image>
              </navigator>
              <navigator
                class="goods goods"
                hover-class="none"
              >
                <image class="image sk-image"></image>
              </navigator>
            </view>
          </view>
        </scroll-view>
      </view>
    </view>
  </view>
</template>

<style scoped>
.sk-transparent {
  color: transparent !important;
}
.sk-text-14-2857-968 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 36.0938rpx;
  position: relative !important;
}
.sk-text {
  background-origin: content-box !important;
  background-clip: content-box !important;
  background-color: transparent !important;
  color: transparent !important;
  background-repeat: repeat-y !important;
}
.sk-text-14-2857-940 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 36.0938rpx;
  position: relative !important;
}
.sk-text-14-2857-916 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 36.0938rpx;
  position: relative !important;
}
.sk-text-14-2857-529 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 36.0938rpx;
  position: relative !important;
}
.sk-text-14-2857-161 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 36.0938rpx;
  position: relative !important;
}
.sk-text-14-2857-691 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 36.0938rpx;
  position: relative !important;
}
.sk-text-14-2857-205 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 36.0938rpx;
  position: relative !important;
}
.sk-text-14-2857-427 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 36.0938rpx;
  position: relative !important;
}
.sk-text-14-2857-498 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 36.0938rpx;
  position: relative !important;
}
.sk-text-14-2857-669 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 36.0938rpx;
  position: relative !important;
}
.sk-text-28-0000-37 {
  background-image: linear-gradient(
    transparent 28%,
    #eeeeee 0%,
    #eeeeee 72%,
    transparent 0%
  ) !important;
  background-size: 100% 58.5938rpx;
  position: relative !important;
}
.sk-text-30-0000-61 {
  background-image: linear-gradient(
    transparent 30%,
    #eeeeee 0%,
    #eeeeee 70%,
    transparent 0%
  ) !important;
  background-size: 100% 58.5938rpx;
  position: relative !important;
}
.sk-text-14-2857-746 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 29.5313rpx;
  position: relative !important;
}
.sk-opacity {
  opacity: 0 !important;
}
.sk-text-14-2857-893 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 32.8125rpx;
  position: relative !important;
}
.sk-text-14-2857-463 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 29.5313rpx;
  position: relative !important;
}
.sk-text-14-2857-782 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 32.8125rpx;
  position: relative !important;
}
.sk-text-28-0000-551 {
  background-image: linear-gradient(
    transparent 28%,
    #eeeeee 0%,
    #eeeeee 72%,
    transparent 0%
  ) !important;
  background-size: 100% 58.5938rpx;
  position: relative !important;
}
.sk-text-30-0000-880 {
  background-image: linear-gradient(
    transparent 30%,
    #eeeeee 0%,
    #eeeeee 70%,
    transparent 0%
  ) !important;
  background-size: 100% 58.5938rpx;
  position: relative !important;
}
.sk-text-14-2857-268 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 29.5313rpx;
  position: relative !important;
}
.sk-text-14-2857-708 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 32.8125rpx;
  position: relative !important;
}
.sk-text-14-2857-137 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 29.5313rpx;
  position: relative !important;
}
.sk-text-14-2857-357 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 32.8125rpx;
  position: relative !important;
}
.sk-text-14-2857-354 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 29.5313rpx;
  position: relative !important;
}
.sk-text-14-2857-552 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 32.8125rpx;
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
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  background-color: transparent;
}
</style>
