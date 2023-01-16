"use strict";(self.webpackChunkquestdb_io=self.webpackChunkquestdb_io||[]).push([[7902],{3905:function(e,t,a){a.d(t,{Zo:function(){return d},kt:function(){return c}});var n=a(67294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var s=n.createContext({}),h=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},d=function(e){var t=h(e.components);return n.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=h(a),c=i,m=u["".concat(s,".").concat(c)]||u[c]||p[c]||r;return a?n.createElement(m,o(o({ref:t},d),{},{components:a})):n.createElement(m,o({ref:t},d))}));function c(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=a.length,o=new Array(r);o[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var h=2;h<r;h++)o[h]=a[h];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},82503:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return h},metadata:function(){return d},toc:function(){return p},default:function(){return c}});var n=a(83117),i=a(80102),r=(a(67294),a(3905)),o=a(46092),l=a(72525),s=["components"],h={title:"NYC taxi meter and options pricing",author:"Tancrede Collard",author_title:"QuestDB Team",author_url:"https://github.com/TheTanc",author_image_url:"https://avatars.githubusercontent.com/TheTanc",description:"An experiment analyzing the NYC taxi dataset through the eyes of an options trader.",image:"/img/blog/2020-10-16/banner.jpg",tags:["demo","story","analytics"]},d={permalink:"/blog/2020/10/16/taxi-drivers-are-options-traders",source:"@site/blog/2020-10-16-taxi-drivers-are-options-traders.md",title:"NYC taxi meter and options pricing",description:"An experiment analyzing the NYC taxi dataset through the eyes of an options trader.",date:"2020-10-16T00:00:00.000Z",formattedDate:"October 16, 2020",tags:[{label:"demo",permalink:"/blog/tags/demo"},{label:"story",permalink:"/blog/tags/story"},{label:"analytics",permalink:"/blog/tags/analytics"}],readingTime:13.415,truncated:!0,prevItem:{title:"Build a monitoring dashboard with QuestDB and Grafana",permalink:"/blog/2020/10/19/grafana-tutorial"},nextItem:{title:"Why performance matters in time-series data",permalink:"/blog/2020/09/24/why-performance-matters"}},p=[{value:"The economics of the taxi meter",id:"the-economics-of-the-taxi-meter",children:[]},{value:"Modelling variable earnings for taxi drivers",id:"modelling-variable-earnings-for-taxi-drivers",children:[]},{value:"A simple approach to options pricing",id:"a-simple-approach-to-options-pricing",children:[]},{value:"Modelling cabs speed and option value",id:"modelling-cabs-speed-and-option-value",children:[]},{value:"Traffic increase has cost a great amount to taxi drivers",id:"traffic-increase-has-cost-a-great-amount-to-taxi-drivers",children:[]},{value:"Customers are losing too",id:"customers-are-losing-too",children:[]},{value:"Your turn to explore the data",id:"your-turn-to-explore-the-data",children:[]}],u={toc:p};function c(e){var t=e.components,a=(0,i.Z)(e,s);return(0,r.kt)("wrapper",(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)(o.Z,{alt:"Taxis in New York City stuck in traffic",height:600,src:"/img/blog/2020-10-16/banner.jpg",width:400,mdxType:"Banner"},"Photo by ",(0,r.kt)("a",{href:"https://unsplash.com/photos/K9cc-19hBKY"},"Kevin Lee")," on"," ",(0,r.kt)("a",{href:"https://unsplash.com"},"Unsplash")),(0,r.kt)("p",null,"Every cab I have ever ridden has been complaining about how hard it is to make\nends meet as a driver. Using a dataset of over 1.6 billion taxi rides, 700\nmillion FHV rides (Uber, Lyft, etc.), and 10 years of weather and gas prices\ndata, I examine whether the antiquated meter system impacts NYC cabbies'\nlivelihood, rather than competition from the likes of Uber."),(0,r.kt)("p",null,"A few of months ago, I was putting together data for QuestDB's demo that we\nshared on ",(0,r.kt)("a",{parentName:"p",href:"https://news.ycombinator.com/item?id=23616878"},"ShowHN"),". It has been a\nwhile since I left derivatives trading, and was not expecting to end up writing\nabout options pricing. Much to my surprise, the economics of a taxi meter are\nvery similar to options. This provides an interesting perspective into the fate\nof taxi drivers."),(0,r.kt)("h2",{id:"the-economics-of-the-taxi-meter"},"The economics of the taxi meter"),(0,r.kt)("p",null,"Most rides are priced using the\n",(0,r.kt)("a",{parentName:"p",href:"https://www1.nyc.gov/site/tlc/passengers/taxi-fare.page"},"standard meter system"),".\nThe meter is a machine, which calculates the price of a ride based on inputs\nsuch as time, speed, and distance. Additionally, it adds taxes, tolls and\nsurcharges depending on a variety of factors such as the route taken or the time\nof the day."),(0,r.kt)("p",null,"Most of the driver's earnings come from the ",(0,r.kt)("inlineCode",{parentName:"p"},"fare"),", which consists of a\n",(0,r.kt)("inlineCode",{parentName:"p"},"flat fare")," ","$","2.50 for entering the cab, and a ",(0,r.kt)("inlineCode",{parentName:"p"},"variable fare"),". The variable\nfare is a function of speed, time and distance. It is calculated as follows:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"When the cab drives above 12mph, ","$","2.50 per mile"),(0,r.kt)("li",{parentName:"ul"},"Otherwise, ","$","0.50 per minute")),(0,r.kt)("p",null,"This post focuses on the variable fare, i.e the output of the meter excluding\nthe ","$","2.50 start fee and extras. To be able to compare rides with one another,\nwe normalize it as an ",(0,r.kt)("inlineCode",{parentName:"p"},"hourly rate")," of driving a customer around."),(0,r.kt)("h2",{id:"modelling-variable-earnings-for-taxi-drivers"},"Modelling variable earnings for taxi drivers"),(0,r.kt)("p",null,"Let's assume a cab is driving a customer at a constant speed during one hour. At\nthe end of the hour, the driver can expect to pocket ",(0,r.kt)("inlineCode",{parentName:"p"},"variable earnings")," of:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"$30 if they drove below 12mph ($0.50 a minute)"),(0,r.kt)("li",{parentName:"ul"},"$","2.50 x their average speed if they drove above 12mph")),(0,r.kt)("p",null,"Let's plot the hourly earnings in function of speed. This instantly reminds me\nof an old friend: call options!"),(0,r.kt)(l.Z,{alt:"A chart of call option payoff showing how cab drivers earnings increase with their average realized driving speed",src:"/img/blog/2020-10-16/cab-hourly-earnings-by-speed.png",mdxType:"Screenshot"}),(0,r.kt)("p",null,"Rewriting the fare formula as follows, we recognize the call option formula\n",(0,r.kt)("inlineCode",{parentName:"p"},"Max(0, S-K)"),"."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Hourly Fare = 30 + max(0, Speed - 12)")),(0,r.kt)("p",null,"Interestingly, the above notation breaks down the hourly variable fare into two\ncomponents."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"A ",(0,r.kt)("inlineCode",{parentName:"li"},"guaranteed")," component ",(0,r.kt)("inlineCode",{parentName:"li"},"30"),": whenever driving a customer, a cab will make at\nleast ","$","30 an hour."),(0,r.kt)("li",{parentName:"ul"},"An ",(0,r.kt)("inlineCode",{parentName:"li"},"optional")," component ",(0,r.kt)("inlineCode",{parentName:"li"},"max(0, Speed - 12)"),": driving customers faster earns\nthe driver more.")),(0,r.kt)("p",null,"Graphically, the breakdown between ",(0,r.kt)("inlineCode",{parentName:"p"},"guaranteed")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"optional")," fare components\nlook like the below:"),(0,r.kt)(l.Z,{alt:"A chart of call option payoff showing how cab drivers earnings increase with their average realized driving speed broken down between fixed and variable",src:"/img/blog/2020-10-16/cab-hourly-earnings-by-speed-breakdown.png",mdxType:"Screenshot"}),(0,r.kt)("p",null,"There is a reason for this system. It is designed to align the interests of\ndrivers and riders:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The ",(0,r.kt)("inlineCode",{parentName:"li"},"guaranteed")," part makes discourages riders from making the driver wait and\nensures they are paid for their time."),(0,r.kt)("li",{parentName:"ul"},"The ",(0,r.kt)("inlineCode",{parentName:"li"},"optional")," part discourages drivers from purposefully taking customers\nthrough traffic.")),(0,r.kt)("p",null,"Let's try to quantify the value of the optional part by using options pricing\nmethods in order to study the incentive for drivers."),(0,r.kt)("h2",{id:"a-simple-approach-to-options-pricing"},"A simple approach to options pricing"),(0,r.kt)("p",null,"This post isn\u2019t meant as an essay in financial mathematics (far from it).\nHowever, before we continue, it is useful to understand what makes options\nvaluable. Buying an option is like paying to play a game with a monetary payout\ncontingent on some ",(0,r.kt)("inlineCode",{parentName:"p"},"variable"),"."),(0,r.kt)("p",null,"As an example, think of a dice game. If the die value (our variable) is below 2,\nyou receive 0. Otherwise, you receive the difference between that value and 2.\nIn financial markets, the threshold of 2 is known as the ",(0,r.kt)("inlineCode",{parentName:"p"},"strike price")," and is\ndenoted K."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"You have to pay a fee to play this game. How much are you ready to pay?")),(0,r.kt)("p",null,"To find out, we need to calculate the expected value of a game. This is easy\nsince we know all ",(0,r.kt)("inlineCode",{parentName:"p"},"possible outcomes")," and their\n",(0,r.kt)("inlineCode",{parentName:"p"},"respective probabilities of occurrence"),". We can write these in the table below:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Dice value"),(0,r.kt)("th",{parentName:"tr",align:null},"Probability"),(0,r.kt)("th",{parentName:"tr",align:null},"Payout"),(0,r.kt)("th",{parentName:"tr",align:null},"Weighed payout"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"1"),(0,r.kt)("td",{parentName:"tr",align:null},"16.66%"),(0,r.kt)("td",{parentName:"tr",align:null},"0"),(0,r.kt)("td",{parentName:"tr",align:null},"0")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"2"),(0,r.kt)("td",{parentName:"tr",align:null},"16.66%"),(0,r.kt)("td",{parentName:"tr",align:null},"0"),(0,r.kt)("td",{parentName:"tr",align:null},"0")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"3"),(0,r.kt)("td",{parentName:"tr",align:null},"16.66%"),(0,r.kt)("td",{parentName:"tr",align:null},"1"),(0,r.kt)("td",{parentName:"tr",align:null},"0.1666")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"4"),(0,r.kt)("td",{parentName:"tr",align:null},"16.66%"),(0,r.kt)("td",{parentName:"tr",align:null},"2"),(0,r.kt)("td",{parentName:"tr",align:null},"0.3332")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"5"),(0,r.kt)("td",{parentName:"tr",align:null},"16.66%"),(0,r.kt)("td",{parentName:"tr",align:null},"3"),(0,r.kt)("td",{parentName:"tr",align:null},"0.4998")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"6"),(0,r.kt)("td",{parentName:"tr",align:null},"16.66%"),(0,r.kt)("td",{parentName:"tr",align:null},"4"),(0,r.kt)("td",{parentName:"tr",align:null},"0.6664")))),(0,r.kt)("p",null,"By summing all the potential payouts weighed by their probability, we compute\nthe expected value of playing this game: ","$","1.666."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"If we pay less to play the game, we will make money over time."),(0,r.kt)("li",{parentName:"ul"},"If we pay more, we lose in the long run.")),(0,r.kt)("p",null,"This example shows that in its simplest form, the value of an option is equal to\nthe product of the payout profile and the associated probability distribution\nwhen the option expires. Let\u2019s visualize this by plotting the values for our\ngame in the following chart:"),(0,r.kt)(l.Z,{alt:"A chart showing the outcome profile of the dice game and the corresponding probabilities and probability-weighed expected payout values",src:"/img/blog/2020-10-16/die-game-payout-profile.png",mdxType:"Screenshot"}),(0,r.kt)("p",null,"where:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The white dashed line represents the possible (discrete) payouts for the game."),(0,r.kt)("li",{parentName:"ul"},"The cyan dotted line is the probability for each outcome (dice value) to\noccur. It is a straight line at 16.66% since each of the 6 values is\nequiprobable."),(0,r.kt)("li",{parentName:"ul"},"The coloured area is the product of the first two lines. Its total surface is\nthe value of our option.")),(0,r.kt)("p",null,"Of course, this is very simplified. I omit time value, which is the idea that\nyou (almost) always wish you could hold the option for longer. The reason time\nvalue exists has to do with the asymmetric payoff profile: there is more to win\nthan to lose by waiting a little longer. Also, in real life, outcomes are rarely\nequiprobable. For example, stock prices are represented as a log-normal\ndistribution. Nevertheless, this example gives a good introduction to calculate\nthe value of an option."),(0,r.kt)("p",null,"Now, since we saw that speed is the main driver behind the variable fare, we\nshould attempt to build a representation of speed distribution in order to\nestimate the option value."),(0,r.kt)("h2",{id:"modelling-cabs-speed-and-option-value"},"Modelling cabs speed and option value"),(0,r.kt)("p",null,"This can be done using a log-normal distribution, which is analogous to the\nnormal distribution, but cannot be negative. This fits our situation well since\ncabs can only drive above 0mph."),(0,r.kt)("p",null,"The log-normal distribution requires two parameters:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"the ",(0,r.kt)("inlineCode",{parentName:"li"},"mean"),", i.e a driver's expected average speed for a given hour."),(0,r.kt)("li",{parentName:"ul"},"the ",(0,r.kt)("inlineCode",{parentName:"li"},"standard deviation"),", a measure of how much the achieved speed is likely\nto deviate from the mean.")),(0,r.kt)("p",null,"If we overlay the log-normal distribution to the option payoff, we can see the\noption value below as the product of the two surface areas. As you can see, the\nlog-normal distribution is skewed to the left and the mode (the highest point on\nthe distribution, at around 10 mph) is lower than the mean (13 mph in the\nabove)."),(0,r.kt)(l.Z,{alt:"A chart of call option payoff with the corresponding probability and weighed value area as overlay",src:"/img/blog/2020-10-16/option-payoff-probability-value.png",mdxType:"Screenshot"}),(0,r.kt)("p",null,"We can play with our two parameters to get a grasp on the pricing dynamics. Here\nis how the average speed changes the distribution and expected option value:"),(0,r.kt)(l.Z,{alt:"A chart showing how distribution of outcomes and value change with the expected mean",src:"/img/blog/2020-10-16/payout-change-with-avg.png",mdxType:"Screenshot"}),(0,r.kt)("p",null,"And here is the effect of standard deviation:"),(0,r.kt)(l.Z,{alt:"A chart showing how distribution of outcomes and value change with the standard deviation",src:"/img/blog/2020-10-16/payout-change-with-stdev.png",mdxType:"Screenshot"}),(0,r.kt)("p",null,"We can see that a higher mean and a higher standard deviation result in higher\noption value. In short, this means that it is in the drivers' best interests to"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"drive faster;"),(0,r.kt)("li",{parentName:"ul"},"deviate for the mean, for example by taking risks.")),(0,r.kt)("p",null,'Now, to be clear, I don\'t mean that they should drive recklessly, but rather\nthat they should attempt "risky" routes, which could either save a lot of time,\nor otherwise be a disaster.'),(0,r.kt)("p",null,"In traditional finance, the sensitivities to input parameters, which we have\nintroduced above are called the \u201cGreeks\u201d. These are measures of risk named\n(mostly) after Greek letters. They are used to evaluate and manage the risk of\noptions portfolios. Here are the two greeks respective to the mean and standard\ndeviation:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The ",(0,r.kt)("inlineCode",{parentName:"li"},"delta"),", change of option value relative to change of the mean"),(0,r.kt)("li",{parentName:"ul"},"The ",(0,r.kt)("inlineCode",{parentName:"li"},"vega"),", change of value relative to the change of standard deviation (aka\nvolatility).")),(0,r.kt)("p",null,'These are "first order" greeks, which means they directly affect the option\nvalue. There are more greeks, of higher order, which affect the option value\nindirectly. As example, the ',(0,r.kt)("inlineCode",{parentName:"p"},"vanna")," is a second-order greek which measures how\nmuch the delta (first order greek) of an option changes when volatility changes."),(0,r.kt)("h2",{id:"traffic-increase-has-cost-a-great-amount-to-taxi-drivers"},"Traffic increase has cost a great amount to taxi drivers"),(0,r.kt)("p",null,"Let\u2019s first look at the average speed over time."),(0,r.kt)("p",null,"The NYC taxi dataset gives us the distance calculated by the meter, the pickup\ntimestamp, and the drop-off timestamp. Using QuestDB, we can derive the duration\nof each ride as the difference between the two timestamps and divide the\ndistance by the duration, to calculate the average speed."),(0,r.kt)("p",null,"With ",(0,r.kt)("inlineCode",{parentName:"p"},"SAMPLE BY"),", I compute the average results for monthly intervals and plot\nit below. Over 10 years, the average speed dropped significantly from 13.3 to\n9.7mph (almost 30%!)."),(0,r.kt)(l.Z,{alt:"A chart showing the evolution of the average cab driver speed over time and how it consistently dropped below the threshold",src:"/img/blog/2020-10-16/average-speed-over-time.png",mdxType:"Screenshot"}),(0,r.kt)("p",null,"This number is a simplification since it assumes constant speed and no idle\ntime. However, it is useful to calculate a lower-bound for earnings as follows."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Min Hourly Variable Fare = Max($30, Avg(speed) * $2.5)")),(0,r.kt)("p",null,"Similarly, we can estimate the upper bound of a driver\u2019s hourly earnings in a\ntheoretical world where drivers are either idle or accelerate instantly from 0\nto the speed limit of 25mph. This is how the maximum potential fare could be\ncalculated:"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Max potential hourly variable fare = Distance component + Idle component")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Distance component = Average ride distance * $2.50 / Average ride duration (hours)")),(0,r.kt)("p",null,"and"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Idle component = (25 - Average ride distance)/25mph * 60min * $0.50")),(0,r.kt)("p",null,"Lastly, we can calculate the actual average variable fare over time as follows."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Actual Hourly Variable Fare =avg(fare_amount - $2.50) / avg(duration_hours) ")),(0,r.kt)("p",null,"Here is what the three metrics look like over time (note we started the plot in\nSeptember 2012 since cab prices were increased in August 2012. Interestingly,\nthe average minimum variable fare has dropped over time and is now hitting a\nfloor."),(0,r.kt)(l.Z,{alt:"A chart showing the evolution of the average cab driver potential fare range against the actual average fare",src:"/img/blog/2020-10-16/potential-average-fare-range.png",mdxType:"Screenshot"}),(0,r.kt)("p",null,"Now that we have the average speed, we can use the standard deviation to model\nthe speed distribution. By feeding the historical mean and standard deviations\ninto a log-normal distribution model, we can compute the following percentiles.\nFor the vast majority of rides, drivers can expect to average below 12mph."),(0,r.kt)(l.Z,{alt:"A chart showing the evolution of the distribution of NYC cab drivers' average speed over time",src:"/img/blog/2020-10-16/distribution-speed-over-time.png",mdxType:"Screenshot"}),(0,r.kt)("p",null,"To sum up, the following chart shows how the economics have changed over time.\nWe can see how this damaged the option value for drivers, mostly as a result of\nthe lower trending mean."),(0,r.kt)(l.Z,{alt:"A chart showing how the distribution of outcomes changes due to a lower mean, and the resulting change in option",src:"/img/blog/2020-10-16/distribution-shift-with-lower-mean.png",mdxType:"Screenshot"}),(0,r.kt)("p",null,"We can now use our data to extract the actual option value from the fare as\nfollows."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Option value = Hourly variable fare - Guaranteed component")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Option value Actual = Actual Hourly Variable Fare - $30")),(0,r.kt)("p",null,"Slowly but surely, it stopped being a significant part in the driver\u2019s earnings."),(0,r.kt)(l.Z,{alt:"A chart of the hourly fare earned by taxi drivers over the years broken down by whether it is fixed or variable",src:"/img/blog/2020-10-16/variable-hourly-fare-over-time.png",mdxType:"Screenshot"}),(0,r.kt)("p",null,"I don\u2019t have the data to tell why the average speed is lower, but I would\nintuitively attribute this to more vehicles on the road as a result of Uber,\nLyft, and other FHV, along with urban planning, for example cycle lanes making\nfor less space on the road and more congestion."),(0,r.kt)("p",null,"Whatever the underlying reasons, the impact is visible, and it is significant.\nOver the past 10 years, slower traffic has cost up to\n$10/hour per taxi. To put\nthis in context, this means $29,000/driver each year (8\nhours a day, no holidays), or\n$300 million a year for the entire NYC cab industry! And these are\nlower bound numbers. In reality, drivers share cabs. If we assume all of the\n13,500 cabs are constantly on the road, this adds up to $1.2\nbillion a year lost for the industry!"),(0,r.kt)("h2",{id:"customers-are-losing-too"},"Customers are losing too"),(0,r.kt)("p",null,"The pricing system was designed to motivate drivers and riders to play fair.\nThese incentives are almost gone today, which makes the meter system\ncounter-productive."),(0,r.kt)("p",null,"When the average driver could expect to drive at 13mph 10 years ago, their\nexpected speed is now around 9mph, way below the 12mph threshold. The loss of\nincentive becomes apparent if we look at it over time as follows:"),(0,r.kt)(l.Z,{alt:"A chart showing how the value of the incentive of driving customers faster has disappeared for NYC cab drivers",src:"/img/blog/2020-10-16/incentive-value-evolution-over-time.png",mdxType:"Screenshot"}),(0,r.kt)("p",null,"So, are there any reasons left for cabs to drive customers around faster?"),(0,r.kt)("p",null,"The start fee of ","$","2.50 provides another incentive. But it's efficacy depends on\nthe waiting time between two rides. If the expected wait between customers is 5\nminutes or less, then drivers remain incentivized. Otherwise, it is economically\nmore efficient to drive slowly and make the most of the current customer. A\nslow-earning loaded cab makes more money than an empty one."),(0,r.kt)("p",null,"I don\u2019t have data to estimate the waiting time for drivers between two rides.\nBut in a world with increased supply and competition (Uber, Lyft etc.), I think\nit is safe to assume that the wait time for drivers has increased. So while I\ncannot tell for sure if the start fee has lost all of its incentive, it seems\nfair to say that it lost a good part of it."),(0,r.kt)("p",null,"If drivers are uncertain about their likelihood of finding the next ride, and if\nthe optional fare component has become an insignificant fraction of their\nearnings, then it makes more sense to drive slow, and to hold on to the current\ncustomer for as long as possible. In the end, ","$","30 per hour is better than 0."),(0,r.kt)("h2",{id:"your-turn-to-explore-the-data"},"Your turn to explore the data"),(0,r.kt)("p",null,"We made this dataset and the database available online and you can query it\ndirectly from your browser via ",(0,r.kt)("a",{parentName:"p",href:"https://"},"QuestDB demo"),"."),(0,r.kt)("p",null,"Feel free to explore it, come up with more analysis, and let me know your\nfindings."),(0,r.kt)("p",null,"I am particularly interested in expanding these results based on weather data. I\nlet readers give it a try using the hourly data available on the QuestDB demo\nserver. In his\n",(0,r.kt)("a",{parentName:"p",href:"https://toddwschneider.com/posts/analyzing-1-1-billion-nyc-taxi-and-uber-trips-with-a-vengeance/#taxi-weather"},"analysis"),",\nTodd W Schneider concluded that the rain had no significant impact on the number\nof rides. But what about the fare value? Doesn't it feel like when it's raining,\ntraffic gets slower? It would be interesting to study how the weather affects a\ndriver's speed, and in turn earnings. This is only one of the so many\nfascinating questions left to explore with this dataset."),(0,r.kt)("p",null,"Anyway, I hope you found this interesting. If you like this post, please\nconsider leaving a star on our ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/questdb/questdb"},"GitHub"),".\nAnd, if you find anything interesting while playing with the data, email me and\nwe'll write about it!"))}c.isMDXComponent=!0},86010:function(e,t,a){function n(e){var t,a,i="";if("string"==typeof e||"number"==typeof e)i+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(a=n(e[t]))&&(i&&(i+=" "),i+=a);else for(t in e)e[t]&&(i&&(i+=" "),i+=t);return i}function i(){for(var e,t,a=0,i="";a<arguments.length;)(e=arguments[a++])&&(t=n(e))&&(i&&(i+=" "),i+=t);return i}a.d(t,{Z:function(){return i}})}}]);