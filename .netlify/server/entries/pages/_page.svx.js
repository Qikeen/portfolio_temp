import { c as create_ssr_component, d as add_attribute, v as validate_component } from "../../chunks/ssr.js";
const css$2 = {
  code: ".flex.svelte-jebijf{display:flex;justify-content:space-around;flex-wrap:wrap}.hidden.svelte-jebijf{display:none}",
  map: null
};
const Deck = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { hidden = false } = $$props;
  if ($$props.hidden === void 0 && $$bindings.hidden && hidden !== void 0)
    $$bindings.hidden(hidden);
  $$result.css.add(css$2);
  return `<div class="${["flex svelte-jebijf", hidden ? "hidden" : ""].join(" ").trim()}">${slots.default ? slots.default({}) : ``}</div>`;
});
const css$1 = {
  code: ".flex.svelte-dmlrhx{display:flex;flex-direction:column;flex:1 200px;transition:all 1s 4.5s ease;border-radius:10px;margin:1vw;max-height:350px;max-width:350px;overflow:hidden;background-color:var(--bg-color, floralwhite);color:var(--text-color, black)}.flex.svelte-dmlrhx:hover{transition:all 1s ease;flex-grow:5;height:auto;max-height:100%}.flex.svelte-dmlrhx>picture>img{border-radius:10px 10px 0 0;object-fit:cover;max-width:100%;max-height:350px;transition:all 1.5s 5s ease;filter:blur(5px);scale:1.1}.flex.svelte-dmlrhx:hover>picture>img,.flex.svelte-dmlrhx:active>picture>img{transition:all 1.5s ease;max-height:200px;filter:blur(0)}.flex.svelte-dmlrhx>p{padding:10px}",
  map: null
};
const Card = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$1);
  return `<div class="flex svelte-dmlrhx" ontouchstart="">${slots.default ? slots.default({}) : ``}</div>`;
});
const css = {
  code: "input.svelte-dt278q.svelte-dt278q{margin:15px}label.svelte-dt278q.svelte-dt278q{margin-left:-15px}h2.svelte-dt278q.svelte-dt278q{margin-bottom:-10px}.align-center.svelte-dt278q.svelte-dt278q{text-align:center}.row.svelte-dt278q.svelte-dt278q{margin:-20px 0}.col.svelte-dt278q.svelte-dt278q{padding:0 20px;float:left;box-sizing:border-box;&.x-50 {\n        width: 50%;\n    };&.x-100 {\n        width: 100%;\n    }}.title.svelte-dt278q.svelte-dt278q{text-align:center;font-family:Raleway, sans-serif;text-transform:uppercase;letter-spacing:3px;font-size:36px;padding-bottom:48px}.form-field.svelte-dt278q.svelte-dt278q{position:relative;margin-top:5px}.input-text.svelte-dt278q.svelte-dt278q{width:100%;height:36px;border-width:0 0 2px 0;border-color:#000;font-size:18px}.input-text.svelte-dt278q:focus+label.svelte-dt278q,.svelte-dt278q:user-valid+label.svelte-dt278q,.svelte-dt278q:user-invalid+label.svelte-dt278q{transform:translateY(-24px)}input.svelte-dt278q:placeholder-shown+label.svelte-dt278q,textarea.svelte-dt278q:placeholder-shown+label.svelte-dt278q{transform:translateY(0)}.label.svelte-dt278q.svelte-dt278q{position:absolute;left:55px;bottom:18px;color:#888;cursor:text;transition:transform .2s ease-in-out}.submit-btn.svelte-dt278q.svelte-dt278q{display:inline-block;background-color:#000;color:#fff;font-family:Raleway, sans-serif;text-transform:uppercase;letter-spacing:2px;font-size:16px;line-height:24px;padding:8px 16px;border:none;cursor:pointer}textarea.svelte-dt278q.svelte-dt278q{resize:vertical ;margin:15px;padding:16px;min-height:100px;max-height:300px}textarea.svelte-dt278q+label.svelte-dt278q{top:15px}",
  map: null
};
const metadata = {
  "count": 25,
  "color": "cadetblue",
  "list": [1, 2, 3, 4, "boo"]
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const prerender = true;
  let activee = "web";
  let web = true;
  let ani = false;
  let gfx = false;
  function activeDeck(sel) {
    if (sel == "web") {
      web = true;
      ani = false;
      gfx = false;
    } else if (sel == "ani") {
      web = false;
      ani = true;
      gfx = false;
    } else if (sel == "gfx") {
      web = false;
      ani = false;
      gfx = true;
    } else {
      print("error: nothing selected");
    }
  }
  if ($$props.prerender === void 0 && $$bindings.prerender && prerender !== void 0)
    $$bindings.prerender(prerender);
  $$result.css.add(css);
  {
    activeDeck(activee);
  }
  return `<head data-svelte-h="svelte-959afa"><title>Rainn.ee</title></head> <h1 data-svelte-h="svelte-1sctm5g">Hi I’m Raine <sub><sub><sub><sup><em>also known as Ray</em></sup></sub></sub></sub></h1> <h2 class="svelte-dt278q" data-svelte-h="svelte-13rzba2">Welcome to my website</h2> <sup data-svelte-h="svelte-poruhq"><sup>~i&#39;m working on making a better one, but this&#39;ll do for now~</sup></sup> <h2 class="svelte-dt278q" data-svelte-h="svelte-8sy9jv">A little bit about me</h2> <h3 data-svelte-h="svelte-ct4ql3">I’m a web developer, animator and graphic designer.</h3> <p data-svelte-h="svelte-11t6qkh">I’m always trying to learn new things and improve on my current skillset. Because of that, I have experience in a variety of different fields. Over the past several years I’ve worked on everything from low voltage electronics and live sound mixing to woodworking and 3d printing. It is my belief that by drawing knowledge from multiple different sources I will be able to easily adapt to any situation and quickly gain insight on how things work, and throughout my experience I’ve found that to be true.
I’ve always been very interested in the cross-sections between creativity and technology, which is what draws me to web development, animation and graphic design. Each one explores a different aspect of this cross-section and requires a deep understanding of how it works.</p> <h3 data-svelte-h="svelte-3gbqde">I like applying traditional techniques to modern technology.</h3> <p data-svelte-h="svelte-1ty7kbd">Traditional techniques relied on simplifying processes to the point that there is little room for error when working. This allowed the craftsmen to focus on being creative, rather than focusing on fixing each and every mistake that they made. By spending more time simplifying processes in the initial phases, I am able to focus more on the unique and creative aspects of each project, and ultimately deliver a quality product at a faster pace. <sub><sup>rather than spending all my time just fixing bugs</sup></sub></p> <h3 data-svelte-h="svelte-12bv3ex">I turn ideas into powerful digital experiences.</h3> <p data-svelte-h="svelte-5rlkgu">I believe in creating things that stand out. Things that are different and unexpected. I tend to take the road less travelled and forge my own path, but I’ll still occasionally take a look at the main road to make sure I’m going in the right direction <sup><sub>lol</sub></sup>. I’ll admit, sometimes it’s good to follow trends, but other times i’m good just watching and taking inspiration for my own ideas.</p> <h2 class="svelte-dt278q" data-svelte-h="svelte-1onv5az">My Work</h2> <p data-svelte-h="svelte-nphrff">==<em>hover for more details</em>==</p> <div style="text-align: center;"><input type="radio" name="active" id="web" value="web" class="svelte-dt278q"${add_attribute("checked", true, 1)}> <label for="web" class="svelte-dt278q" data-svelte-h="svelte-1y9hijp">Web Development</label> <input type="radio" name="active" id="ani" value="ani" class="svelte-dt278q"${""}> <label for="ani" class="svelte-dt278q" data-svelte-h="svelte-kj3aue">Animation</label> <input type="radio" name="active" id="gfx" value="gfx" class="svelte-dt278q"${""}> <label for="gfx" class="svelte-dt278q" data-svelte-h="svelte-1tevqvh">Graphic Design</label></div> ${validate_component(Deck, "Deck").$$render($$result, { hidden: !web }, {}, {
    default: () => {
      return `<div style="display: contents; --bg-color:#D9CB9A;">${validate_component(Card, "Card").$$render($$result, {}, {}, {
        default: () => {
          return `<picture data-svelte-h="svelte-hs8zq"><source${add_attribute("srcset", "/_app/immutable/assets/Alchemythology.Cux5_vPr.avif 480w, /_app/immutable/assets/Alchemythology.DGKQFUzM.avif 960w", 0)} type="image/avif"><source${add_attribute("srcset", "/_app/immutable/assets/Alchemythology.iZe8ZVov.webp 480w, /_app/immutable/assets/Alchemythology.BcENaji_.webp 960w", 0)} type="image/webp"><source${add_attribute("srcset", "/_app/immutable/assets/Alchemythology.CQJ4lmiL.jpeg 480w, /_app/immutable/assets/Alchemythology.DQ5W9Nfj.jpeg 960w", 0)} type="image/jpeg"><img src="/_app/immutable/assets/Alchemythology.DQ5W9Nfj.jpeg" width="960" height="540"></picture> <p data-svelte-h="svelte-jsq4oy">Alchemythology (al-chem-myth-ology)is a combination of the words alchemy and mythology, and refers to the fusion of mythical creatures with the purpose of creating something new, unique and oftentimes ridiculous.</p> <p data-svelte-h="svelte-vqarcz">I created this project in 2020 for my internet studio II final at UTD.</p> <a href="https://docs.google.com/presentation/d/1Pxy1dMqoJvHdZHQtplT4h8H4ubXnvueHJLo9VfeQjS0/edit?usp=sharing" data-svelte-h="svelte-q24qr6">Pitch Deck</a>`;
        }
      })}</div> <div style="display: contents; --bg-color:#000000; --text-color:white;">${validate_component(Card, "Card").$$render($$result, {}, {}, {
        default: () => {
          return `<picture data-svelte-h="svelte-1ipd4dt"><source${add_attribute("srcset", "/_app/immutable/assets/Skoolist.TwbCZ2rP.avif 480w, /_app/immutable/assets/Skoolist.CXlaIVfM.avif 960w", 0)} type="image/avif"><source${add_attribute("srcset", "/_app/immutable/assets/Skoolist.USTSDVzx.webp 480w, /_app/immutable/assets/Skoolist.BTTL6gS-.webp 960w", 0)} type="image/webp"><source${add_attribute("srcset", "/_app/immutable/assets/Skoolist.BWjGXJ70.jpeg 480w, /_app/immutable/assets/Skoolist.DDHrnQSx.jpeg 960w", 0)} type="image/jpeg"><img src="/_app/immutable/assets/Skoolist.DDHrnQSx.jpeg" width="960" height="540"></picture> <p data-svelte-h="svelte-r3ovfo">Students have a hard enough time keeping up with assignments without a massive pandemic going on.</p> <p data-svelte-h="svelte-5yygs9">Skoolist aims to help students of all ages keep track of their assignments and classes, while also giving them a place to communicate with their peers.</p> <p data-svelte-h="svelte-13183i">I created this app concept during Fall 2021 semester for a visual application design course at UTD</p> <a href="https://docs.google.com/presentation/d/1Yw1ZzjpwNSNBOpth5kVCpxmwBiorqyBFZIc8yB-ph9w/edit?usp=sharing" data-svelte-h="svelte-hak1w9">Pitch Deck</a> <a href="https://projects.invisionapp.com/share/7NZCYL3AGHE#/screens/437104834" data-svelte-h="svelte-1l138z4">Prototype</a>`;
        }
      })}</div>`;
    }
  })} ${validate_component(Deck, "Deck").$$render($$result, { hidden: !ani }, {}, {
    default: () => {
      return `<div style="display: contents; --bg-color:#F4EFE9;">${validate_component(Card, "Card").$$render($$result, {}, {}, {
        default: () => {
          return `<picture data-svelte-h="svelte-117vflm"><source${add_attribute("srcset", "/_app/immutable/assets/DemoReel2023.Ctzd_jfg.avif 960w, /_app/immutable/assets/DemoReel2023.CYmuM3lB.avif 1920w", 0)} type="image/avif"><source${add_attribute("srcset", "/_app/immutable/assets/DemoReel2023.BRK1lOLM.webp 960w, /_app/immutable/assets/DemoReel2023.ZyR46vfl.webp 1920w", 0)} type="image/webp"><source${add_attribute("srcset", "/_app/immutable/assets/DemoReel2023.DrT5R_vH.jpeg 960w, /_app/immutable/assets/DemoReel2023.CCG9cp42.jpeg 1920w", 0)} type="image/jpeg"><img src="/_app/immutable/assets/DemoReel2023.CCG9cp42.jpeg" width="1920" height="1080"></picture> <p data-svelte-h="svelte-64g40g">This is my demo reel that I created during my final semester for the Level II Animation Certification from Dallas College.</p> <a href="https://www.youtube.com/watch?v=qVN9xc6O4po" data-svelte-h="svelte-yi7e5s">YouTube</a> <p data-svelte-h="svelte-105qq7c">Music Used: &#39;Afterparty&#39; by Don Toliver. I do not own the rights to the music used.</p>`;
        }
      })}</div> <div style="display: contents; --bg-color:#E0E0E0;">${validate_component(Card, "Card").$$render($$result, {}, {}, {
        default: () => {
          return `<picture data-svelte-h="svelte-a53wmp"><source${add_attribute("srcset", "/_app/immutable/assets/PaperMusicAnim.D9iYv2LV.avif 960w, /_app/immutable/assets/PaperMusicAnim.DRqoS1R4.avif 1920w", 0)} type="image/avif"><source${add_attribute("srcset", "/_app/immutable/assets/PaperMusicAnim.CgQJ0tCm.webp 960w, /_app/immutable/assets/PaperMusicAnim.B763CB03.webp 1920w", 0)} type="image/webp"><source${add_attribute("srcset", "/_app/immutable/assets/PaperMusicAnim.B430YBxe.jpeg 960w, /_app/immutable/assets/PaperMusicAnim.C1ccXfJQ.jpeg 1920w", 0)} type="image/jpeg"><img src="/_app/immutable/assets/PaperMusicAnim.C1ccXfJQ.jpeg" width="1920" height="1080"></picture> <p data-svelte-h="svelte-179iucn">This animation was created using construction paper that I cut into various shapes and placed on a green screen. I then edited the video and music using DaVinci Resolve.</p> <p data-svelte-h="svelte-19jdm3d">I made this animation for a creative video editing course at UTD.</p> <a href="https://drive.google.com/file/d/1gatJv0pPe8m2XnUy2Zd-eNLpnFVVKaML/view?usp=sharing" data-svelte-h="svelte-1uz8gtf">Google Drive</a> <p data-svelte-h="svelte-1bhy5kw">Music Used: &#39;Lalala&#39; by bbno$, Bassthoven by &#39;Kyle Exum&#39;. I do not own the rights to the music used.</p>`;
        }
      })}</div> <div style="display: contents; --bg-color:#706E70; --text-color:white;">${validate_component(Card, "Card").$$render($$result, {}, {}, {
        default: () => {
          return `<picture data-svelte-h="svelte-12rrdr2"><source${add_attribute("srcset", "/_app/immutable/assets/Afterparty.BGzYmSoS.avif 960w, /_app/immutable/assets/Afterparty.DsXonqrj.avif 1920w", 0)} type="image/avif"><source${add_attribute("srcset", "/_app/immutable/assets/Afterparty.BhU1W7Xi.webp 960w, /_app/immutable/assets/Afterparty.C1f4FS2X.webp 1920w", 0)} type="image/webp"><source${add_attribute("srcset", "/_app/immutable/assets/Afterparty.Dqx7rHDQ.jpeg 960w, /_app/immutable/assets/Afterparty.BP1o9YUR.jpeg 1920w", 0)} type="image/jpeg"><img src="/_app/immutable/assets/Afterparty.BP1o9YUR.jpeg" width="1920" height="1080"></picture> <p data-svelte-h="svelte-177krit">Capybaras doing stuff with the song &quot;Afterparty&quot; behind it was a semi popular meme for a while in 2022, that&#39;s what inspired me to create this lyric video.</p> <p data-svelte-h="svelte-qdt9za">I made this animation for an assignment in a video editing course at Dallas College.</p> <a href="https://drive.google.com/file/d/1qX_mA4KADkE13dtDCmmrwQCHZVhjjL_v/view?usp=sharing" data-svelte-h="svelte-1cvxujd">Google Drive</a> <p data-svelte-h="svelte-qq9dog">Music Used: &#39;Afterparty&#39; by Don Toliver. I do not own the rights to the music used.</p>`;
        }
      })}</div>`;
    }
  })} ${validate_component(Deck, "Deck").$$render($$result, { hidden: !gfx }, {}, {
    default: () => {
      return `<div style="display: contents; --bg-color:#009FD4; --text-color:white;">${validate_component(Card, "Card").$$render($$result, {}, {}, {
        default: () => {
          return `<picture data-svelte-h="svelte-12nzpxl"><source${add_attribute("srcset", "/_app/immutable/assets/LemurLemon.u-FRcbLP.avif 480w, /_app/immutable/assets/LemurLemon.45MpM0bA.avif 960w", 0)} type="image/avif"><source${add_attribute("srcset", "/_app/immutable/assets/LemurLemon.FId5j5di.webp 480w, /_app/immutable/assets/LemurLemon.LT9ZkSIs.webp 960w", 0)} type="image/webp"><source${add_attribute("srcset", "/_app/immutable/assets/LemurLemon.BlbHIzUw.jpeg 480w, /_app/immutable/assets/LemurLemon.mL_EXsaO.jpeg 960w", 0)} type="image/jpeg"><img src="/_app/immutable/assets/LemurLemon.mL_EXsaO.jpeg" width="960" height="540"></picture> <p data-svelte-h="svelte-1lwybe4">Lemur Lemonade was a semester long project to create a concept for a creative food truck business that was outside what you&#39;d normally expect.For this project I created marketing materials, menus, vehicle wraps, and (most importantly) a logo for my fictional mobile lemonade stand.</p> <p data-svelte-h="svelte-2wlo5i">I worked on this project in Fall 2022 for a visual media course at UTD.</p> <a href="https://www.behance.net/gallery/195635229/Lemur-Lemonade" data-svelte-h="svelte-1m2dmtp">Behance</a>`;
        }
      })}</div> <div style="display: contents; --bg-color:#D1C9B4;">${validate_component(Card, "Card").$$render($$result, {}, {}, {
        default: () => {
          return `<picture data-svelte-h="svelte-1knzck"><source${add_attribute("srcset", "/_app/immutable/assets/Vandhalia.CAmmC01p.avif 450w, /_app/immutable/assets/Vandhalia.DtaV4YsP.avif 900w", 0)} type="image/avif"><source${add_attribute("srcset", "/_app/immutable/assets/Vandhalia.D4iMK8Hs.webp 450w, /_app/immutable/assets/Vandhalia.ySszjmb0.webp 900w", 0)} type="image/webp"><source${add_attribute("srcset", "/_app/immutable/assets/Vandhalia.3NaHBhz1.jpeg 450w, /_app/immutable/assets/Vandhalia.DuxqsLgw.jpeg 900w", 0)} type="image/jpeg"><img src="/_app/immutable/assets/Vandhalia.DuxqsLgw.jpeg" width="900" height="540"></picture> <p data-svelte-h="svelte-9aw5wi">I based this project on the D&amp;D campaign that I was playing in. In that campaign, the player characters were all students at an adventuring college. This is a catalog that a prospective student would get in the mail that gives some basic information about the college. All of the dates, currencies, and prices are as accurate as possible relative to the official content posted by Wizards of the Coast at the time.  <a href="https://raywofforddesign.wordpress.com/project-3-catalog/">Project Page</a> <a href="https://raywofforddesign.wordpress.com/">Course Portfolio</a></p>`;
        }
      })}</div> <div style="display: contents; --bg-color:#000000; --text-color:white;">${validate_component(Card, "Card").$$render($$result, {}, {}, {
        default: () => {
          return `<picture data-svelte-h="svelte-1ysbn8p"><source${add_attribute("srcset", "/_app/immutable/assets/2point5Gum.oWeIezye.avif 450w, /_app/immutable/assets/2point5Gum.FYxG2l2y.avif 900w", 0)} type="image/avif"><source${add_attribute("srcset", "/_app/immutable/assets/2point5Gum.z_iJwZrv.webp 450w, /_app/immutable/assets/2point5Gum.CUS_mZ9Y.webp 900w", 0)} type="image/webp"><source${add_attribute("srcset", "/_app/immutable/assets/2point5Gum.BKpLy1pc.jpeg 450w, /_app/immutable/assets/2point5Gum.DwfBYJva.jpeg 900w", 0)} type="image/jpeg"><img src="/_app/immutable/assets/2point5Gum.DwfBYJva.jpeg" width="900" height="540"></picture> <p data-svelte-h="svelte-1ckshs3">For this project I created a package design for a pack of gum. I was inspired by the packaging for 5 gum and decided to create a spinoff called 2.5 gum. My favorite flavor of 5 gum is wintermint, which is called “ascent”, so I decided to create the opposite pf that for 2.5 gum. I chose to make a cinnamon flavor called “descent”.</p> <p data-svelte-h="svelte-lna1yu">I made this design in Fall 2021 for Project 2 in a graphic design course at UTD</p> <a href="https://raywofforddesign.wordpress.com/project-2-poster/" data-svelte-h="svelte-1pryxoo">Project Page</a> <a href="https://raywofforddesign.wordpress.com/" data-svelte-h="svelte-qdvc4e">Course Portfolio</a>`;
        }
      })}</div> <div style="display: contents; --bg-color:#E0887F; --text-color:white;">${validate_component(Card, "Card").$$render($$result, {}, {}, {
        default: () => {
          return `<picture data-svelte-h="svelte-nxym7f"><source${add_attribute("srcset", "/_app/immutable/assets/MkeyBusiness.Bre_kUc8.avif 450w, /_app/immutable/assets/MkeyBusiness.C3mtuiNg.avif 900w", 0)} type="image/avif"><source${add_attribute("srcset", "/_app/immutable/assets/MkeyBusiness.vncKthqI.webp 450w, /_app/immutable/assets/MkeyBusiness.N64Q9OZ-.webp 900w", 0)} type="image/webp"><source${add_attribute("srcset", "/_app/immutable/assets/MkeyBusiness.FVcPwc12.jpeg 450w, /_app/immutable/assets/MkeyBusiness.CQqdJ412.jpeg 900w", 0)} type="image/jpeg"><img src="/_app/immutable/assets/MkeyBusiness.CQqdJ412.jpeg" width="900" height="540"></picture> <p data-svelte-h="svelte-3zn9fg">Monkey Business is a fictional music festival where all of the music has something to do with monkeys. In the lyrics, the band name, anything and  everything is monkey related. For the design I wanted to create something unique and interesting, that went against the grain in terms of creating an “appealing” design, while still following the basic rules.</p> <p data-svelte-h="svelte-wcey3e">I made this poster in Fall 2021 for Project 1 in a graphic design course at UTD</p> <a href="https://raywofforddesign.wordpress.com/project-1-poster/" data-svelte-h="svelte-11qp05t">Projec Page</a> <a href="https://raywofforddesign.wordpress.com/" data-svelte-h="svelte-qdvc4e">Course Portfolio</a>`;
        }
      })}</div>`;
    }
  })} <br><br><br><br> <section class="contact-form" data-svelte-h="svelte-hugm6f"><h1 class="title svelte-dt278q">Contact Me</h1> <form class="contact-form row svelte-dt278q" name="contact" method="POST" data-netlify="true"><div class="form-field col x-50 svelte-dt278q"><input id="name" class="input-text svelte-dt278q" type="text" placeholder=" " required> <label class="label svelte-dt278q" for="name">Name</label></div> <div class="form-field col x-50 svelte-dt278q"><input id="email" class="input-text svelte-dt278q" type="email" placeholder=" " required> <label class="label svelte-dt278q" for="email">E-mail</label></div> <div class="form-field col x-100 svelte-dt278q"><input id="subject" class="input-text svelte-dt278q" type="text" placeholder=" " required> <label class="label svelte-dt278q" for="message">Subject</label></div> <div class="form-field col x-100 justify svelte-dt278q"><textarea id="message" class="input-text svelte-dt278q" placeholder=" " required></textarea> <label class="label svelte-dt278q" for="message">Message</label></div> <div class="form-field col x-100 align-center svelte-dt278q"><input class="submit-btn svelte-dt278q" type="submit" value="Submit"></div></form></section>`;
});
export {
  Page as default,
  metadata
};
