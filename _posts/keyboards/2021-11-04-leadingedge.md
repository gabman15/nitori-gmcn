---
layout: gabedefault
title: "Leading Edge DC-2014"
image: "images/leadingedge.jpg"
categories: keyboards
---
<span style="font-size:35px">{{ page.title }}</span>

Manufacturer: Leading Edge and Alps Electric

Switches: Blue Alps

Date: 1985-1989

Origin: The keyboard shipped with the [<span style="color:#7b9cc9;">Leading Edge Model D</span>](https://en.wikipedia.org/wiki/Leading_Edge_Model_D) IBM clone computer.

![Leading Edge DC-2014](/images/leadingedge.jpg)

<span style="font-size:35px">Restoration Information</span>

Just flashed a pro micro with the soarer's converter firmware from
[<span style="color:#7b9cc9;">here</span>](https://deskthority.net/viewtopic.php?f=7&t=8448&start=30).
The important thing here is that this keyboard requires an extra pin to be connected (reset)
and the default soarer's converter doesn't do that, so we need a slightly
changed hex file.

Solder the pro micro to a breakout midi connector and plugged it in and it just works!

<video width="320" height="240" controls muted>
  <source src="/images/leadingedgeconvert.mp4" type="video/mp4">
  Your browser does not support the video tag. :(
</video>

However I think my soldering job is a little janky and I need to create a better
XT converter box with a teensy instead to have a better experience (ie. there
are some disconnections from the keyboard).