---
layout: about
title: About
permalink: /
subtitle: <a href='https://www.jp.honda-ri.com/en/members/muhammad-shakeel/'>Honda Research Institute Japan Co., Ltd.</a>

profile:
  align: right
  image: profile_pic.jpeg
  image_circular: true # crops the image to make it circular
  more_info: >
    <p>Scientist</p>
    <p>Honda Research Institute Japan Co., Ltd. </p>

news: true
selected_papers: true # includes a list of papers marked as "selected={true}"
social: true # includes social icons at the bottom of the page

honors_announcements:
  enabled: true # includes a list of news items
  scrollable: true # adds a vertical scroll bar if there are more than 3 news items
  limit: # leave blank to include all the news in the `_news` folder

announcements:
  enabled: true # includes a list of news items
  scrollable: true # adds a vertical scroll bar if there are more than 3 news items
  limit: # leave blank to include all the news in the `_news` folder

latest_posts:
  enabled: false
  scrollable: true # adds a vertical scroll bar if there are more than 3 new posts items
  limit: 3 # leave blank to include all the blog posts
---

As a Scientist at [Honda Research Institute Japan Co., Ltd.](https://www.jp.honda-ri.com/en/members/muhammad-shakeel/), my research is centered on developing the next generation of automatic speech recognition (ASR) technologies. While my published work has focused on foundational models and contextual ASR, my current passion and research efforts are increasingly directed toward the complex challenges of [multi-speaker ASR and speaker diarization](https://www.arxiv.org/pdf/2508.20474), aiming to create systems that can robustly process real-world conversational audio.

This has involved contributing to large-scale, open speech foundation models, most notably through a collaboration with [Language Technologies Institute](https://www.lti.cs.cmu.edu) at [Carnegie Mellon University](https://www.cmu.edu) on the [Open Whisper-style Speech Model (OWSM)](https://www.wavlab.org/activities/2024/owsm/) project. Within this initiative to create transparent alternatives to proprietary models, the focus has been on architectural innovation. This included enhancing the model with [E-Branchformer](https://www.isca-archive.org/interspeech_2024/peng24b_interspeech.html) for better performance and developing non-autoregressive systems like [OWSM-CTC](https://aclanthology.org/2024.acl-long.549/) to achieve significant gains in speed and robustness against model hallucination.

This work on foundational models naturally highlights the critical need for both practical applicability and computational efficiency. To address this, my research has explored several interconnected areas. To improve real-world utility, investigations into contextual ASR have yielded novel methods for recognizing rare and user-specific terminology through techniques like [dynamic vocabularies](https://arxiv.org/pdf/2405.13344), [intermediate biasing losses](https://www.isca-archive.org/interspeech_2024/shakeel24_interspeech.html), and a [bias phrase boosted (BPB) beam search](https://arxiv.org/pdf/2401.10449). Simultaneously, to enhance architectural robustness and flexibility, contributions were made to unified systems like the [4D ASR model](https://arxiv.org/pdf/2406.02950v2), which integrates multiple decoder paradigms (CTC, Attention, RNN-T, and Mask-CTC) into a single, jointly trained framework. This theme of unification also extends to addressing deployment constraints, as seen in work on [jointly optimizing streaming and non-streaming ASR](https://arxiv.org/pdf/2405.13514). Recognizing that the utility of large models is ultimately gated by their deployability, another facet of this research has been model efficiency, demonstrated through contributions to compression techniques like joint distillation and pruning in the [DPHuBERT](https://www.isca-archive.org/interspeech_2023/peng23c_interspeech.html) work.

The pursuit of scientific advancement is a cumulative effort, built upon the foundational work of those who came before. As Sir Isaac Newton famously wrote, "If I have seen further, it is by standing on the shoulders of Giants." This idea has been a guiding principle throughout my research career, which has been profoundly shaped by the mentorship and collaboration of distinguished researchers. In my current role at Honda Research Institute Japan, I am honored to be collaborating with [Prof. Shinji Watanabe](https://scholar.google.com/citations?user=U5xRA6QAAAAJ&hl=en), whose pioneering work continues to shape the field of end-to-end speech recognition. This opportunity builds upon the excellent guidance I received during my academic journey: my doctoral studies were supervised by [Prof. Kazuhiro Nakadai](https://researchmap.jp/nakadai) at the [Tokyo Institute of Technology](https://www.isct.ac.jp/en) (now Institute of Science Tokyo); my master's thesis was a collaborative effort guided by [Prof. Satoshi Tadokoro](https://scholar.google.co.jp/citations?user=909K-EUAAAAJ&hl=en) of [Tohoku University](https://www.is.tohoku.ac.jp/en/) and [Prof. Daniele Nardi](https://scholar.google.com/citations?user=xZwripcAAAAJ&hl=en) of [Sapienza University of Rome](https://www.uniroma1.it/en); and my foundational research experience, contributing to the [ALICE](https://greybook.cern.ch/experiment/detail?id=ALICE) experiment at [CERN](https://greybook.cern.ch/institute/detail?id=076486), was conducted under the supervision of [Prof. Arshad Saleem Bhatti](https://www.researchgate.net/profile/Arshad-Bhatti-2).

<script type="text/javascript">
    (function(c,l,a,r,i,t,y){
        c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
        t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
        y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
    })(window, document, "clarity", "script", "ryebztli6b");
</script>
