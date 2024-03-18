## 3-Let\’s Make Some Isometric Art 🎆

[I’ve been running a new series that I call “Daytrips Through the Canyon” where I dive into the wide new world of AI art and document what I find, sort of like an explorer discovering the Grand Canyon for the first time. Today’s day trip is going to show what happens when I try to make isometric art.]

![][image-1]

Today I saw someone post this intriguing grid of isometric art [on this reddit post][1]. It’s part of the amazing [Midjourney subreddit][2], which is full of amazing things happening every hour of the day. But for now, I’d like to focus on figuring out how to emulate this. And to kick things off, let’s turn to GPT-3 to help me write the prompt.

[As detailed in this post][3], you can ask GPT-3 to give you the perfect prompt. So as my prompt I typed *“Describe a cute isometric island, cottage in the woods, river with water falling off the edge.”* and got this response:

> The island is a small, idyllic paradise nestled in a sparkling blue river. The river flows gently around the island, creating a natural moat that adds to its charm. The island itself is covered in a thick blanket of verdant trees and shrubs, with a cozy cottage nestled amongst the greenery. The cottage has a thatched roof and a chimney that curls lazily into the air. A small vegetable garden can be seen behind the cottage, and a wooden pier extends out into the river, inviting visitors to take a peaceful boat ride.

> The river itself is a picturesque spectacle, with crystal clear water cascading over a rocky edge and forming a picturesque waterfall. The sound of the rushing water adds to the serene ambiance of the island, and the sunlight filters through the trees, casting a dappled pattern of light and shadow over the landscape. All in all, it's the perfect retreat for anyone seeking a peaceful, idyllic getaway.

That’s a pretty long query, but I’ll try putting it into Midjourney with words like “isometric” and we’ll see what we get:

-img-

Not quite what I was looking for. Maybe I can take the top right one and add a prompt that led to the original image:

> cute isometric island, cottage in the woods, river with water falling off the edge, made with blender --v 4

Our result is a little better! But still not isometric. 

-img-

So what happens when we really focus on the isometric word?

> isometric, made with blender --v 4

-img-

It’s definitely more isometric, but it’s not as pretty as before. Let’s see if we can work on that a bit. 

> cute isometric island, cottage in the woods, river with water falling off the edge, made with blender --v 4

-img-

Better! Let’s keep doing iterations on the same prompt and see what happens.

 -img--img--img--img-

I upscaled one of these images and got this:

-img-

But it’s not done yet. There are a whole bunch of things there that I’m not thrilled about. The edge isn’t right. The trees aren’t either. The wood path turns into a waterfall. None of this is ok. So maybe I can blend this image with the original piece that I was inspired by? Let’s see what that does for us.

-img-

I put the image into Figma, uploaded it into imgur, and grabbed the URL from there. That gives me a simple prompt:

> https://i.imgur.com/zltxwg6.png cute isometric island, cottage in the woods, river with water falling off the edge, made with blender --v 4

-img-

I still don’t love it, so I’m going to start throwing different keywords into my prompt to see how that pans out. Here’s “solid blue background”:

-img-

Oops! That didn’t quite work out. It’s funny how easily you can use the wrong prompt and head off in the wrong direction. It gives me a lot of respect for the people who manage to coax the machine into doing what they envision. Let’s stop there for now. This was a fun daytrip, and I can try again tomorrow.






[1]:	https://www.reddit.com/r/midjourney/comments/yoobjj/super_cool_things_to_try_in_v4_incl_prompts/
[2]:	https://www.reddit.com/r/midjourney/
[3]:	https://www.reddit.com/r/midjourney/comments/ze8qku/i_had_chatgpt_generate_a_prompt_for_a_wheat_field/

[image-1]:	https://preview.redd.it/9qfvizj5oiy91.jpg?width=1400&format=pjpg&auto=webp&s=33f51cdb939e441df9b68b80dbf39369560565fc