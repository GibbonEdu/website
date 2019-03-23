---
title: RaspberryPi Alarm
author: admin
type: post
date: 2017-05-18T13:16:24+00:00
categories:
  - Community
  - Development

---
One of the most joyful and empowering aspects of open source development is the mindset and ability to take someone else&#8217;s system, and then adjust it to fit some edge case you encounter. This approach to solving problems has been exemplified by Jack Dickson, who used a [Raspberry Pi][1], some [Python code][2] and a [Gibbon forum post][3] to stitch together an alarm actuator. The code, running on the Pi, repeatedly polls the Gibbon database, and when it detects an alarm has been issued, it uses speakers and lights to make the alarm obvious to users not logged into the system.

In this approach we see a vital kind of creative collaboration: Jack had the original idea, and he reached out to find out more. The Gibbon team were able to provide some insights, which allowed Jack to then write up the code. This distributed, friendly and open collaboration leads to a level of creativity that is so much less likely when we lock things down, and deal with customers instead of a community.

The video below shows the system in action:

<p style="text-align: center;">
  <iframe src="https://www.youtube.com/embed/PW5wAwldmW0?rel=0" width="560" height="315" frameborder="0" allowfullscreen="allowfullscreen"></iframe>
</p>

Jack has kindly made the source code freely available, and [it can be downloaded here][4].

A huge thanks to Jack for adding another piece to the Gibbon puzzle.

On a side note, I really hate the fact that our world needs the Alarm function, which was designed for school lockdown scenarios. The day I coded it up was not a happy one, and I hope to never see it used in practice.

 [1]: https://www.raspberrypi.org/
 [2]: https://www.python.org/
 [3]: https://ask.gibbonedu.org/wp/discussion/comment/2954#Comment_2954
 [4]: https://gibbonedu.org/wp/wp-content/uploads/2017/05/GibbonRaspPi-Alarm.py_.zip
