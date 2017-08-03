---
layout: post
title:  "How to prevent auto links in Gmail!"
date:   2015-01-02 19:09:47
comments: true
categories: blogs
---

We all know that when you compose an email in Gmail, any url that you copy-paste or type gets converted into a hyper-link.

**Eg:** Plain text - *www.google.com* - will become - [www.google.com] [google-link].

[google-link]: http://www.google.com


Have you wondered if we can prevent this from happening?? <br/>
If you are thinking why would you ever need to prevent it, well let me tell you why I needed it.

Imagine you are building a website for your clients and there is a url from Google Alerts which the clients do not understand.

For example, try writing an email explaining how the following url is formed and what is important for the client:<br/>

    http://www.example.com/url?rct=j&sa=t&url=https://www.client-website.com/articles/some-article/&ct=ga&cd=XYZ&usg=ABC

###Here is what I wanted to do in the email:<br/>
<ul>
<li>Write the URL as:<br/>
<span class='highlight'>
<span class="c">
    http://www.example.com/url?rct=j&sa=t&url=</span><span class='no'>https://www.client-website.com/articles/some-article/</span><span class='c'>&ct=ga&cd=XYZ&usg=ABC
</span>
</span>
</li>
<li>
<span class='highlight'>
And explain what's the significance of the url part in <span class='bp'>grey</span> and what's the significance of that in <span class='no'>green</span>.
</span></li>
<li>I did that using the `Formatting options` while composing the email.</li>
</ul>

<p class='text-center highlight'><strong class=''>But when I hit <code>Send...</code></strong></p>

###This is what google email parser did:
* It recognized that i'm trying to put a url in the email. So it changed the url to look like any other link:
  <br/><http://www.example.com/url?rct=j&sa=t&url=https://www.client-website.com/articles/some-article/&ct=ga&cd=XYZ&usg=ABC>
* All that I had explained using color coding was useless.
* Even though I knew about the auto link detection by google, it did not strike my mind while writing the email.

---------------------------------------------------------
<br/>

####I looked at all the settings in Gmail to see if we can turn off auto link. I found a setting to enable `Undo send` for 30 seconds (Useful for next time), **but nothing related to auto links!!**.

####Now I had to figure out a **Hack** to do this ! Which I did ! Here is how I did it ...

* Write the url and use Formatting options to make it look the way you want.<br/><br/>
  ![Gmail Formatting Options](/public/Images/url_hack/gmail-formatting-options.png "Gmail Formatting Options")
  <br/><br/>

* Open <span class='dark-blue'>[Chrome developer tools][chrome-dev-tools]</span> OR <span class='dark-blue'>[Firebug][firebug]</span> for Firefox users (IE Users - Download better browser!).
  Inspect the colorful/formatted url in the email.<br/><br/>
  ![Inspect gmail url](/public/Images/url_hack/inspect-gmail-url.png "Gmail Formatting Options")
  <br/><br/>

* In the Chrome dev tools, make the following modifications by using **Edit as html** option.<br/><br/>
    ![Edit as html option](/public/Images/url_hack/edit-as-html-option.png "Edit as Html Option") <br/><br/><br/>
    - Enclose `http://` into a span tag.Like this `<span>http://</span>` <br/><br/>
    Before
    ![Edit as html before](/public/Images/url_hack/edit-as-html-before.png "Edit as Html - before") <br/><br/><br/>
    After
    ![Edit as html after](/public/Images/url_hack/edit-as-html-after.png "Edit as Html - after")<br/><br/><br/>
    - **Similarly**, Enclose `www.` into a span tag. Like this `<span>www.</span>`<br/><br/>

________________________________________________________________

<br/>

<h3 class='text-center highlight'>You are good to hit Send <code>Send...</code></h3>

<p class='text-center'>And here is my inbox with the colorful/formatted URL as I wanted:</p>
![Email in Inbox](/public/Images/url_hack/url-hack-email-in-inbox.png "Email-in-inbox")<br/><br/>

_____________________________________________________________________________

<br/>

##Thank you..
Happy Hacking ...

<div class="g-plus" data-action="share" data-href="http://vishnun.github.io/blogs/2015/01/02/how-to-prevent-auto-links-in-gmail.html"></div>

<a href="https://twitter.com/share" class="twitter-share-button" data-url="http://vishnun.github.io/blogs/2015/01/02/how-to-prevent-auto-links-in-gmail.html" data-via="vishnu_narang" data-size="large" data-hashtags="hack">Tweet</a>
<script>!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0],p=/^http:/.test(d.location)?'http':'https';if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src=p+'://platform.twitter.com/widgets.js';fjs.parentNode.insertBefore(js,fjs);}}(document, 'script', 'twitter-wjs');</script>

<iframe src="//www.facebook.com/plugins/like.php?href=http%3A%2F%2Fvishnun.github.io%2Fblogs%2F2015%2F01%2F02%2Fhow-to-prevent-auto-links-in-gmail.html&amp;width&amp;layout=standard&amp;action=like&amp;show_faces=true&amp;share=true&amp;height=80&amp;appId=874345859272451" scrolling="no" frameborder="0" style="border:none; overflow:hidden; height:80px;" allowTransparency="true"></iframe>

[firebug]: https://addons.mozilla.org/en-US/firefox/addon/firebug/
[chrome-dev-tools]: https://developer.chrome.com/devtools


{% include comments.html %}