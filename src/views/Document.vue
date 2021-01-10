<template>
  <div class="document-wrapper">
    <div v-for="singleData in documentData" :key="singleData.title" class="content-area">
      <h2 class="dataTitle">{{ singleData.title }}</h2>
      <p class="dataContent">
        {{ singleData.content }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      documentData: [
        {
          title: '概述',
          content:
            '对多张图片进行基于SIFT的特征检测算法，如果符合最小拼接要求大的关键点matchKeypoints数量，使用OpenCV-Python自带的stitching方法进行全景拼接，但是对于拼接后的黑边裁剪效果不好，可以修改优化。',
        },
        {
          title: '核心算法',
          content: '本项目核心算法为SIFT特征检测算法，尺度不变特征转换(Scale-invariant feature transform或SIFT)是一种电脑视觉的算法用来侦测与描述影像中的局部性特征，它在空间尺度中寻找极值点，并提取出其位置、尺度、旋转不变量，此算法由 David Lowe在1999年所发表，2004年完善总结。其应用范围包含物体辨识、机器人地图感知与导航、影像缝合、3D模型建立、手势辨识、影像追踪和动作比对。此算法有其专利，专利拥有者为英属哥伦比亚大学。局部影像特征的描述与侦测可以帮助辨识物体，SIFT 特征是基于物体上的一些局部外观的兴趣点而与影像的大小和旋转无关。对于光线、噪声、些微视角改变的容忍度也相当高。基于这些特性，它们是高度显著而且相对容易撷取，在母数庞大的特征数据库中，很容易辨识物体而且鲜有误认。使用 SIFT特征描述对于部分物体遮蔽的侦测率也相当高，甚至只需要3个以上的SIFT物体特征就足以计算出位置与方位。在现今的电脑硬件速度下和小型的特征数据库条件下，辨识速度可接近即时运算。SIFT特征的信息量大，适合在海量数据库中快速准确匹配。SIFT算法的特点有：1. SIFT特征是图像的局部特征，其对旋转、尺度缩放、亮度变化保持不变性，对视角变化、仿射变换、噪声也保持一定程度的稳定性；2. 独特性（Distinctiveness）好，信息量丰富，适用于在海量特征数据库中进行快速、准确的匹配；3. 多量性，即使少数的几个物体也可以产生大量的SIFT特征向量；4. 高速性，经优化的SIFT匹配算法甚至可以达到实时的要求；5. 可扩展性，可以很方便的与其他形式的特征向量进行联合。SIFT算法可以解决的问题：目标的自身状态、场景所处的环境和成像器材的成像特性等因素影响图像配准/目标识别跟踪的性能。而SIFT算法在一定程度上可解决：1. 目标的旋转、缩放、平移（RST）2. 图像仿射/投影变换（视点viewpoint）3. 光照影响（illumination）4. 目标遮挡（occlusion）5. 杂物场景（clutter）6. 噪声',
        },
        {
          title: '依赖类库',
          content: 'opencv-python',
        },
      ],
    };
  },
};
</script>

<style lang="less">
.document-wrapper {
  height: 80vh;
  overflow: scroll;
  .content-area {
    text-indent: 2em;
    width: 1000px;
    margin-bottom: 50px;
    .dataTitle {
      margin-bottom: 20px;
    }
    .dataContent {
      margin-left: 2em;
    }
  }
}
.document-wrapper::-webkit-scrollbar{
  width: none;
  display: none;
}
</style>
