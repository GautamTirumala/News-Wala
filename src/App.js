import React, { Component } from 'react';
import './App.css';
import Footer from './Components/Footer';
import Header from './Components/Header';
import NewsItem from './Components/NewsItem';
//import Data from './Components/Data';

class App extends Component {
  articles = [
    {
      source: {
        id: null,
        name: 'New York Times'
      },
      author: 'Marc Santora, Ivan Nechepurenko, Anton Troianovski',
      title: 'Live Updates: Biden and Russia-Ukraine War News - The New York Times',
      description:
        'As more Ukrainian fighters surrendered in Mariupol, Moscow appeared to be laying the groundwork for annexing lands it has seized. President Biden met with the leaders of Finland and Sweden at the White House.',
      url: 'https://www.nytimes.com/live/2022/05/19/world/russia-ukraine-war',
      urlToImage:
        'https://static01.nyt.com/images/2022/05/19/world/19ukraine-blog-header-625am-est/19ukraine-blog-header-625am-est-facebookJumbo.jpg',
      publishedAt: '2022-05-19T14:35:00Z',
      content:
        'LONDON After sanctions hobbled production at its assembly plant in Kaliningrad, the Russian automaker Avtotor announced a lottery for free 10-acre plots of land and the chance to buy seed potatoes so… [+9048 chars]'
    },
    {
      source: {
        id: 'the-washington-post',
        name: 'The Washington Post'
      },
      author: 'Min Joo Kim',
      title: 'N. Korea readying ICBM or nuclear test for Biden visit, officials say - The Washington Post',
      description:
        'The provocation would also come as North Korea struggles with an escalating coronavirus outbreak among its vulnerable, largely unvaccinated population.',
      url: 'https://www.washingtonpost.com/world/2022/05/19/north-korea-nuclear-missile-test-biden/',
      urlToImage:
        'https://www.washingtonpost.com/wp-apps/imrs.php?src=https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/FNXNAHGTGUI6ZCDL353BQPJDH4.jpg&w=1440',
      publishedAt: '2022-05-19T14:07:00Z',
      content:
        'Placeholder while article actions load\r\nSEOUL North Korea is preparing to conduct a nuclear test or a long-range ballistic missile test around the time of President Bidens trip to the region this wee… [+3331 chars]'
    }, {
      "source": {
        "id": null,
        "name": "CBS Sports"
      },
      "author": "",
      "title": "2022 PGA Championship picks, odds: Expert predictions, favorites to win in betting field at Southern Hills - CBS Sports",
      "description": "Who will win the 104th PGA Championship? Our experts dive into all the twists and turns of the year's second major",
      "url": "https://www.cbssports.com/golf/news/2022-pga-championship-picks-odds-expert-predictions-favorites-to-win-in-betting-field-at-southern-hills/",
      "urlToImage": "https://sportshub.cbsistatic.com/i/r/2022/05/17/5e53c8d5-31b0-4485-bef7-e71ca38f77f2/thumbnail/1200x675/c7486b901e5ab45ec1b96f3ab95ff9cf/graphic-rahmpga.png",
      "publishedAt": "2022-05-19T10:55:00Z",
      "content": "With the 104th PGA Championship fast approaching, the key question everyone's asking is the same across the golf world: Who are you picking to win at Southern Hills? With a tremendous field featuring… [+14170 chars]"
    }, {
      "source": {
        "id": "the-wall-street-journal",
        "name": "The Wall Street Journal"
      },
      "author": "Chun Han Wong",
      "title": "China Insists Party Elites Shed Overseas Assets, Eyeing Western Sanctions on Russia - The Wall Street Journal",
      "description": "China’s Communist Party will block promotions for senior cadres whose spouses or children hold significant assets abroad, as Beijing seeks to insulate its top officials from the types of sanctions that are being directed at Russia.",
      "url": "https://www.wsj.com/articles/china-insists-party-elites-shed-overseas-assets-eyeing-western-sanctions-on-russia-11652956787",
      "urlToImage": "https://images.wsj.net/im-546231/social",
      "publishedAt": "2022-05-19T10:39:00Z",
      "content": "HONG KONGChinas Communist Party will block promotions for senior cadres whose spouses or children hold significant assets abroad, people familiar with the matter said, as Beijing seeks to insulate it… [+321 chars]"
    }, {
      "source": {
        "id": null,
        "name": "YouTube"
      },
      "author": null,
      "title": "U.S. braces for North Korean weapons test - Reuters",
      "description": "U.S intelligence shows there could be a North Korean nuclear test, or a long-range missile test, or both, before, during or after President Joe Biden's trip ...",
      "url": "https://www.youtube.com/watch?v=M9YfNuxPI3g",
      "urlToImage": "https://i.ytimg.com/vi/M9YfNuxPI3g/maxresdefault.jpg",
      "publishedAt": "2022-05-19T10:22:27Z",
      "content": null
    }, {
      "source": {
        "id": "reuters",
        "name": "Reuters"
      },
      "author": null,
      "title": "Massachusetts identifies first 2022 U.S. case of monkeypox infection - Reuters",
      "description": "The Massachusetts Department of Public Health on Wednesday said it had confirmed a single case of monkeypox virus infection in a man who had recently traveled to Canada.",
      "url": "https://www.reuters.com/world/us/massachusetts-identifies-first-2022-us-case-monkeypox-infection-2022-05-18/",
      "urlToImage": "https://www.reuters.com/resizer/TyNF-OY9TGtnim9D0u6eOJxGSqc=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/2B5Z7DNUAZLIDCDLSM3H4R5S3U.jpg",
      "publishedAt": "2022-05-19T10:08:00Z",
      "content": "May 18 (Reuters) - The Massachusetts Department of Public Health on Wednesday said it had confirmed a single case of monkeypox virus infection in a man who had recently traveled to Canada.\r\nThe U.S. … [+2410 chars]"
    }, {
      "source": {
        "id": "bloomberg",
        "name": "Bloomberg"
      },
      "author": null,
      "title": "China in Talks With Russia to Buy Oil for Strategic Reserves - Bloomberg",
      "description": null,
      "url": "https://www.bloomberg.com/tosv2.html?vid=&uuid=4fa6d169-d773-11ec-a01d-4b5466475964&url=L25ld3MvYXJ0aWNsZXMvMjAyMi0wNS0xOS9jaGluYS1pbi10YWxrcy13aXRoLXJ1c3NpYS10by1idXktb2lsLWZvci1zdHJhdGVnaWMtcmVzZXJ2ZXM=",
      "urlToImage": null,
      "publishedAt": "2022-05-19T10:03:46Z",
      "content": "To continue, please click the box below to let us know you're not a robot."
    }, {
      "source": {
        "id": null,
        "name": "ESPN"
      },
      "author": "Kevin Arnovitz",
      "title": "The revolutionary Golden State Warriors defeated Luka Doncic and the Dallas Mavericks by embracing old-school ball - ESPN",
      "description": "The Warriors' dynasty changed the NBA forever, revolutionizing the game on both ends. But in Game 1, against Luka Doncic and Dallas, they reasserted their dominance -- by going old school.",
      "url": "https://www.espn.com/nba/story/_/id/33942189/the-revolutionary-golden-state-warriors-defeated-luka-doncic-dallas-mavericks-embracing-old-school-ball",
      "urlToImage": "https://a3.espncdn.com/combiner/i?img=%2Fphoto%2F2022%2F0519%2Fr1014650_1296x729_16%2D9.jpg",
      "publishedAt": "2022-05-19T09:54:00Z",
      "content": "SAN FRANCISCO -- Something has dawned on Stephen Curry as the Golden State Warriors stage their first legitimate title quest in nearly three years: He's now the old guy.\r\n\"When I look at some of thos… [+5195 chars]"
    }, {
      "source": {
        "id": null,
        "name": "WABC-TV"
      },
      "author": "Sonia Rincon, Eyewitness News",
      "title": "Richmond University Medical Center EMT shot in ambulance by allegedly drunk patient they were helping on Staten Island - WABC-TV",
      "description": "An on-duty EMT was shot in his shoulder while inside an ambulance by an allegedly drunk and disorderly patient, according to police.",
      "url": "https://abc7ny.com/emt-shot-in-shoulder-drunk-patient-shooting/11867609/",
      "urlToImage": "https://cdn.abcotvs.com/dip/images/11867638_051922-wabc-emt-shot-gun-thurs-img.jpg?w=1600",
      "publishedAt": "2022-05-19T09:33:45Z",
      "content": "WEST BRIGHTON, Staten Island (WABC) -- An on-duty EMT was shot in his shoulder while treating an allegedly drunk and disorderly patient on Staten Island.First responders picked up the apparently into… [+1457 chars]"
    }, {
      "source": {
        "id": "the-verge",
        "name": "The Verge"
      },
      "author": "James Vincent",
      "title": "Microsoft tests Windows 11 desktop widgets with web search bar - The Verge",
      "description": "Microsoft is testing a new web search bar for the desktop in the latest Preview Build of Windows 11. It’s a change from widgets in Windows 11’s main builds, which have been corralled into a separate panel.",
      "url": "https://www.theverge.com/2022/5/19/23128319/microsoft-windows-11-widget-preview-build-test-desktop-web-search",
      "urlToImage": "https://cdn.vox-cdn.com/thumbor/CMMVHnqA7TDjR1pW_tw_3wTAMvc=/0x38:1920x1043/fit-in/1200x630/cdn.vox-cdn.com/uploads/chorus_asset/file/23560393/searchbox_desktop_NEW.png",
      "publishedAt": "2022-05-19T09:07:08Z",
      "content": "An experimental feature in the latest Preview Build of Windows 11\r\nA screenshot of the web search box in the latest Windows 11 Preview Build. \r\nImage: Microsoft\r\nMicrosoft is adding an optional web s… [+1430 chars]"
    }, {
      "source": {
        "id": "abc-news",
        "name": "ABC News"
      },
      "author": "The Associated Press",
      "title": "1 dead in shooting after Tennessee high school graduation - ABC News",
      "description": "",
      "url": "https://abcnews.go.com/US/wireStory/dead-high-school-graduation-tennessee-university-84826552",
      "urlToImage": "https://s.abcnews.com/images/US/220518_vod_onlocation_hpMain_16x9_992.jpg",
      "publishedAt": "2022-05-19T07:31:28Z",
      "content": "MURFREESBORO, Tenn. -- One person was killed and another injured in a shooting Wednesday night after a high school graduation at Middle Tennessee State University, according to police.\r\nWTVF-TV repor… [+1068 chars]"
    }, {
      "source": {
        "id": null,
        "name": "BuzzFeed News"
      },
      "author": "Leyla Mohammed",
      "title": "Tristan Thompson Told Khloé Kardashian She Was “Never Leaving” Him And That They’re “Family For Life” Just Months Before His Paternity Scandal Was Exposed - BuzzFeed News",
      "description": "While he’d secretly been engaging in a months-long sexual affair, Tristan was telling his then-girlfriend Khloé that she could “never” leave him as they were tied “for life.”",
      "url": "https://www.buzzfeednews.com/article/leylamohammed/tristan-thompson-khloe-kardashian-never-leaving-paternity",
      "urlToImage": "https://img.buzzfeed.com/buzzfeed-static/static/2022-05/18/13/enhanced/6377a2f63ecb/original-1611-1652881130-6.jpg?crop=1581:830;0,0%26downsize=1250:*",
      "publishedAt": "2022-05-19T06:31:02Z",
      "content": null
    }, {
      "source": {
        "id": null,
        "name": "Fox Business"
      },
      "author": "Suzanne O'Halloran",
      "title": "Target, Walmart’s inflation warning bad omen for stocks, economy - Fox Business",
      "description": "Walmart and Target, solid barometers of consumer spending, didn't mince words on sky-high inflation.",
      "url": "https://www.foxbusiness.com/markets/target-walmart-inflation-dow-stocks-recession",
      "urlToImage": "https://a57.foxnews.com/static.foxbusiness.com/foxbusiness.com/content/uploads/2022/05/0/0/wmttgt.png?ve=1&tl=1",
      "publishedAt": "2022-05-19T06:07:55Z",
      "content": "Walmart and Target, two of the nation’s largest retailers, confirmed this week that inflation headwinds are intensifying. \r\n\"The strength of the consumer will be tested as both Walmart and Target sig… [+2824 chars]"
    }, {
      "source": {
        "id": null,
        "name": "Yahoo Entertainment"
      },
      "author": "Jason Owens",
      "title": "Nick Saban: Texas A&M 'bought every player on their team,' Jackson State 'paid a guy $1M' - Yahoo Sports",
      "description": "The NIL gloves are off. Deion Sanders is punching back.",
      "url": "https://sports.yahoo.com/nick-saban-says-texas-am-bought-every-player-on-their-team-jackson-state-paid-a-guy-1-m-050808940.html",
      "urlToImage": "https://s.yimg.com/ny/api/res/1.2/bo9cg0TNywtkowmnT8TQOg--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD04MDA-/https://s.yimg.com/os/creatr-uploaded-images/2022-05/98c85d40-d731-11ec-ba9d-45da04eaffaa",
      "publishedAt": "2022-05-19T05:08:00Z",
      "content": "Nick Saban wasn't asked about Texas A&amp;M football recruiting on Wednesday. But he sure was happy to talk about it.\r\nIn what can be aptly described as a shot fired across the bow of his SEC rival, … [+4286 chars]"
    }, {
      "source": {
        "id": null,
        "name": "Hindustan Times"
      },
      "author": "HT Entertainment Desk",
      "title": "Tom Cruise breaks into tears at surprise Cannes award, gets a standing ovation - Hindustan Times",
      "description": "Tom Cruise arrived for screening of Top Gun: Maverick at the Cannes Film Festival with fighter jets flying over the venue and left with tears in his eyes as he received a standing ovation for the film.",
      "url": "https://www.hindustantimes.com/entertainment/hollywood/tom-cruise-breaks-into-tears-at-surprise-cannes-film-festival-award-gets-a-standing-ovation-for-top-gun-maverick-101652928386409.html",
      "urlToImage": "https://images.hindustantimes.com/img/2022/05/19/1600x900/tom-cruise-cannes_1652931231569_1652931244144.jpg",
      "publishedAt": "2022-05-19T03:44:44Z",
      "content": "Tom Cruise was the star of the Cannes Film Festival on Wednesday as he not just made a grand entry with fighter jets zooming over the venue but also won a long standing ovation from the audience at t… [+2170 chars]"
    }, {
      "source": {
        "id": null,
        "name": "Spaceflight Now"
      },
      "author": null,
      "title": "Starliner astronauts eager to see results from crew capsule test flight – Spaceflight Now - Spaceflight Now",
      "description": null,
      "url": "https://spaceflightnow.com/2022/05/18/starliner-astronauts-eager-to-see-results-of-crew-capsule-test-flight/",
      "urlToImage": null,
      "publishedAt": "2022-05-19T03:41:38Z",
      "content": "NASA astronaut Butch Wilmore speaks with reporters Wednesday at the Kennedy Space Center. Credit: NASA/Joel Kowsky\r\nThe NASA astronauts training for the first crew missions on Boeing’s Starliner spac… [+11181 chars]"
    }, {
      "source": {
        "id": "cnn",
        "name": "CNN"
      },
      "author": "Laura He, CNN Business",
      "title": "Asian markets tumble after a tough day on Wall Street - CNN",
      "description": "Asian markets mostly closed lower and European indexes slid in early trade on Thursday, continuing Wall Street's downward spiral hours earlier.",
      "url": "https://www.cnn.com/2022/05/18/investing/global-markets-intl-hnk/index.html",
      "urlToImage": "https://cdn.cnn.com/cnnnext/dam/assets/220518230511-03-global-markets-intl-hnk-super-tease.jpg",
      "publishedAt": "2022-05-19T03:15:00Z",
      "content": null
    }, {
      "source": {
        "id": null,
        "name": "New York Times"
      },
      "author": "Ed Shanahan",
      "title": "911 Dispatcher May Be Fired Over Handling of Buffalo Shooting Call - The New York Times",
      "description": "Erie County began an investigation after a supermarket worker said the dispatcher hung up on her when she called during the attack.",
      "url": "https://www.nytimes.com/2022/05/18/nyregion/buffalo-shooting-911-dispatcher.html",
      "urlToImage": "https://static01.nyt.com/images/2022/06/14/world/18buffalo-dispatch2/merlin_206877762_554fdf7d-d257-41e6-a289-b60f54708738-facebookJumbo.jpg",
      "publishedAt": "2022-05-19T03:01:43Z",
      "content": "On Saturday, the authorities say, he opened fire outside the supermarket, then went inside and continued to shoot shoppers and workers before surrendering to the police. He has pleaded not guilty to … [+1068 chars]"
    }
  ];
  constructor() {
    super();
    this.state = {
      articles: this.articles
    };
  }



  render() {
    let { title, description, imageUrl, contentUrl } = this.props;

    
          
   
    return (
      
      <div>
        <Header />
        <div className="flex">
          {this.state.articles.map((articles, index) => {
            title = articles.title;
            description = articles.description;
            imageUrl = articles.urlToImage?articles.urlToImage:"https://i.redd.it/v1fvin01ynv51.jpg";
            contentUrl = articles.url;
            return (

              <NewsItem
                key={index}
                title={title}
                description={description}
                img={imageUrl}
                url={contentUrl}
              />

            );
          })}
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
