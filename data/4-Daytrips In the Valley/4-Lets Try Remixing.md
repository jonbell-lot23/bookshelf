## 4-Let\’s Try Remixing 🎆

It’s hard to keep track of all the giant leaps forward we’ve seen in AI this week, let alone this month or year. But one of the most significant moments I’ve seen in this whole is Midjourney’s ability to “remix” an image. For example, look at this:

-img--img--img--img--img--img-

It would have been nearly impossible to do this a few months ago, because each image would need to be build from scratch. Which means it’d be extremely difficult to keep the general art style or vibe as consistent as this. But now that Midjourney can base images on previous images, you can do things like “take this image but age the person five years” or “make him bald” or whatever. So I’m going to see what I can come up with.

I found this pencil sketch online:

![][image-1]

And tried the prompt *https://s.mj.run/4MmsvMboPWQ with shading --v 4*

-img-
  
Whoops. Let’s try again with *https://s.mj.run/4MmsvMboPWQ cityscape, no faces, in pencil sketch style --v 4*

-img-

Better! But I’d like it to be wider.  * https://s.mj.run/4MmsvMboPWQ cityscape, no faces, in pencil sketch style --ar 16:9*

-img-

Hm, we lost the New York skyline. Let’s try to put that back while keeping the aspect ratio. * https://s.mj.run/4MmsvMboPWQ new york cityscape, Statue of Liberty on the left --ar 16:9*

-img-

Hm. I think the issue is that a 16:9 aspect ratio means I have to use version 3 of Midjourney, but version 4 is where all the magic is happening. So let’s remove the aspect ratio, go back to version 4, and see what we can do. Let’s go back and try * \<https://s.mj.run/4MmsvMboPWQ\> New York city skyline, no faces, in pencil sketch style*

-img-

Ugh. We’ve lost the Statue of Liberty and it looks lower quality than we’re hoping for. Let’s see what happens if all we do is add detail with * https://s.mj.run/4MmsvMboPWQ detailed --v 4*

-img-

This is a little better. But I’m pretty sure I’m going to need some big time prompt help. These vague queries aren’t really getting us where we need to go. I looked up a cool drawing and the prompt was still pretty sparse:

-img-

But fine, let’s try overlaying that on top of my image, maybe with a few more helpful keywords. * \<https://s.mj.run/4MmsvMboPWQ\> sketch, pencil, super detailed, trending on artstation, impressive, city --v 4*

-img-

Sure, I can appreciate that. Let’s take that item on the bottom left and see what we can do with it. This is the same prompt as before. * https://s.mj.run/4MmsvMboPWQ sketch, pencil, super detailed, trending on artstation, impressive, city --v 4*

-img-

I can work with this. Let’s see if we can get back to a New York City vibe by removing some keywords. * https://s.mj.run/4MmsvMboPWQ New York City --v 4*

-img-

Fair enough. Let’s get some color in there. * \<https://s.mj.run/4MmsvMboPWQ\> New York City in style of watercolor --v 4*

-img-

I’d like to see how well I can sharpen this up. * \<https://s.mj.run/4MmsvMboPWQ\> 3d model of New York City, made in blender, cute, miniature  --v 4*

-img-

Interesting step forward, although I’m annoyed by the blurred out bands of color along the bottom. I wonder how I can deal with those? Maybe I’ll try doing a standard upscale and touch-up?

-img--img-

We’re still dealing with a silly band along the bottom, and Lady Liberty keeps blinking in and out, but ok. This could be considered progress. Let’s try with the colors again. * \<https://s.mj.run/4MmsvMboPWQ\> 3d model of New York City, made in blender, cute, miniature, plastic, vibrant bright colors, kid friendly --v 4*

-img-

Oh dear. But look! The fourth option doesn’t have the band of color anymore, so that’s nice. Let’s see if we can make the sky change color now. * \<https://s.mj.run/4MmsvMboPWQ\> blue sky --v 4*

-img-

Lol. No. Ok, let’s just try taking the previous image and turning it into Pixar. That should work, right? * \<https://s.mj.run/4MmsvMboPWQ\> in the style of Pixar and Studio Ghibli --v 4*

-img-

Oh dear. Um. Let’s try again, iterating off the image on the top right. * \<https://s.mj.run/4MmsvMboPWQ\> New York City skyline in the style of Pixar --v 4*

-img-

Let’s try again a few times. * \<https://s.mj.run/4MmsvMboPWQ\> New York City skyline in the style of Pixar --v 4*

-img-
-img-
-img-

Now I’d really like to make the visuals more bold, so let’s start with some * \<https://s.mj.run/4MmsvMboPWQ\> In the style of Wes Anderson --v 4*

-img-

That’s completely wrong, but ok. Maybe we can dial it up to something more modern and photorealistic? * \<https://s.mj.run/4MmsvMboPWQ\> Photorealistic urban photography ultra detailed 8k --v 4*

-img-

Maybe Ansel Adams can help? * \<https://s.mj.run/4MmsvMboPWQ\> Photorealistic urban photography ultra detailed 8k in the style of Ansel Adams --v 4*

-img-

Intriguing! What about making it into a New Yorker Cover? * Photorealistic urban photography ultra detailed 8k in the style of Ansel Adams New Yorker Magazine cover no text --v 4 *

-img-

I should have seen this coming. When you ask for a New Yorker cover, you’re probably going to get text on the page. Drat. * https://s.mj.run/4MmsvMboPWQ no text in the style of photography ultra detailed --v 4*

-img-

I’d really like to snap the art style out of this. I want it to feel more vibrant and bright but I’m really struggling to make it stick. I’ll spam keywords and maybe that will help * \<https://s.mj.run/4MmsvMboPWQ\> in the style of an animated cartoon slick plastic bright Pixar 3d blender --v 4*

-img-

Damn it. How about * https://s.mj.run/4MmsvMboPWQ in the style of a beastie boys album cover Banksy street art cool --v 4 *

-img-

Ok. Let’s stop there, with one last prompt to see where it lands us. * \<https://s.mj.run/4MmsvMboPWQ\> in the style of a painting --v 4*

-img-

Ok, I lied. This inspires me to try one last thing. Propaganda posters.  * https://s.mj.run/4MmsvMboPWQ in the style of a Russian propaganda poster bold colors red blue --v 4*

-img-

Well I can’t say I landed on something beautiful. But I had fun.













[image-1]:	https://paintingvalley.com/drawings/new-york-skyline-pencil-drawing-27.jpg