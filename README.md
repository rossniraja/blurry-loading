
# 🌫️ Blurry Loading Animation

This is a simple front-end project where I built a smooth loading animation using HTML, CSS, and JavaScript.

The idea is pretty straightforward but looks really cool in action. When the page loads, the background image starts completely blurred, and as the loading percentage increases from 0% to 100%, the blur slowly disappears. By the time it hits 100%, the image becomes crystal clear.

It feels like the screen is "waking up" gradually.

---

## 🛠️ Tech Used

I used:
- HTML for structure  
- CSS for styling and the blur effect  
- JavaScript for the animation logic  

---

## ⚙️ How It Works

There’s a variable called `load` that starts at 0 and increases using `setInterval`. Every time it increases:
- The percentage text updates on screen  
- The blur value reduces step by step  

The key part of this project is converting one range into another.

Basically:
- Loading goes from `0 → 100`
- Blur goes from `40px → 0px`

To do this, I used a small function:

```js
const scale = (num, in_min, in_max, out_min, out_max) => {
  return ((num - in_min) / (in_max - in_min)) * (out_max - out_min) + out_min
}
