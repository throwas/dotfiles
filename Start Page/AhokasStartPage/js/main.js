var config =
{
    "sites":
    [
        { "url": "https://login.yahoo.com/config/login_verify2?&.src=ym",          "text": "Y.Mail"   },
        { "url": "http://sn117w.snt117.mail.live.com/default.aspx",                "text": "H.Mail"   },
        { "url": "https://mail.google.com/mail/u/0/?shva=1#inbox",                 "text": "G.Mail"   },
	{ "url": "http://danbooru.donmai.us/",                             	   "text": "Dan"   },
        { "url": "http://www.pixiv.com/",                                     	   "text": "Pixiv"   },
        { "url": "http://konachan.com/",                                    	   "text": "Kona"   },
        { "url": "http://iqdb.org/",                                    	   "text": "iqdb"   },
        { "url": "http://translate.google.com/",                                   "text": "Lang"   },
        { "url": "http://boards.4chan.org/a/",                                     "text": "/a/"   },
	{ "url": "http://boards.4chan.org/w/",                                     "text": "/w/"   },
        { "url": "http://pastebin.com/",                                           "text": "Bin"   },
        { "url": "http://youtube.com",                                             "text": "Y.Tube"   }
    ],
    "search":
    {
        "url"  : "http://google.com/search",
        "name" : "",
        "query": "q"
    }
}, d = document;

d.addEventListener("DOMContentLoaded", function()
{
    d.removeEventListener("DOMContentLoaded", arguments.callee, false);

    for (var i = 0, MAX = config.sites.length; i < MAX; ++i)
    {
        var p = i / 12,
            site = d.createElement("a");
        site.href = config.sites[i].url;
        site.textContent = config.sites[i].text;

        if (i % 12 === 0)
        {
            var page = d.createElement("div");
            page.id = "page" + p;

            d.querySelector("#sites").appendChild(page);
            d.querySelector("#navigation ul").appendChild((d.createElement("li")));

            if (p === 0)
            {
                d.querySelector("#navigation ul li").classList.add("selected");
                d.querySelector("#sites > div").classList.add("selected");
            }
        }

        d.querySelector("#page" + Math.floor(p)).appendChild(site);
    }

    var form = d.querySelector("#search form"),
        text = form.querySelector("input");
    form.action      = config.search.url;
    text.name        = config.search.query;
    text.placeholder = config.search.name;
});