---
layout: post
title: far dev notes
---

far dev notes

localdev
revolution slider is slow? 
	look in to the documentation
	log load time with slider revolution on and 
	log load time with the slider revolution off
Google analytics code
	old
    
```
<script>
  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

  ga('create', 'UA-79561164-1', 'auto');
  ga('send', 'pageview');

</script>
```

```
<!-- Quantcast Tag -->
<script type="text/javascript">
var _qevents = _qevents || [];

(function() {
var elem = document.createElement('script');
elem.src = (document.location.protocol == "https:" ? "https://secure" : "http://edge") + ".quantserve.com/quant.js";
elem.async = true;
elem.type = "text/javascript";
var scpt = document.getElementsByTagName('script')[0];
scpt.parentNode.insertBefore(elem, scpt);
})();

_qevents.push({
qacct:"p-Tsgavb8Zn0uHq"
});
</script>

<noscript>
<div style="display:none;">
<img src="//pixel.quantserve.com/pixel/p-Tsgavb8Zn0uHq.gif" border="0" height="1" width="1" alt="Quantcast"/>
</div>
</noscript>
<!-- End Quantcast tag -->

```