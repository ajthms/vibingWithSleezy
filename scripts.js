window.onSpotifyIframeApiReady = (IFrameAPI) => {
  let element = document.getElementById('embed-iframe');
  let options = {
      width: '100%',
      height: '200',
      uri: 'spotify:episode:10tt2L4Yh59dsbBL3qOooO?si=4fbe1a98b94040c6'
    };
  let callback = (EmbedController) => {
    document.querySelectorAll('ul#episodes > li > button').forEach(
      episode => {
        episode.addEventListener('click', () => {
          EmbedController.loadUri(episode.dataset.spotifyId);
          document.querySelector(".glass").style.display = "block";
          document.querySelector('#episode-description').innerHTML = episode.dataset.description;
        });
      });
  };
  IFrameAPI.createController(element, options, callback);
};

const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
});

document.querySelectorAll(".nav-link").forEach(n =>
  n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
    const target = document.querySelector(n.getAttribute("href"));
    target.scrollIntoView({
      behavior: "smooth"
    });
  })
);

window.addEventListener("scroll", () => {
  hamburger.classList.remove("active");
  navMenu.classList.remove("active");
});

const episodes = [
  { name: "Sleezy Vibes With Sean Patrick O'Brien", id: "spotify:episode:698meYf0NBDzQQuweD4Euc", description: "Pro Wrestling Referee/Good Friend Sean Patrick O'Brien makes his first appearance on Vibing With Sleezy. We discuss pro wrestling, Louisville, music, and just life in general. This is the premiere episode, so this one is special!"  },
  { name: "Sleezy Vibes With Christeen Hernandez", id: "spotify:episode:2UGrlKxwb7wbD1MWiypXso", description: "Expert/Best Friend Christeen Hernandez makes her first appearance on Vibing With Sleezy. We discuss horses, mental health, Florida, and some of Christeen's favorite things. This is such a great episode!"  },
  { name: "Sleezy Vibes With Sara Otoum", id: "spotify:episode:4kVNt9xWelNS0sVPLb8xfp", description: "Sara Otoum makes her first appearance on Vibing With Sleezy. We discuss ghosts and paranormal stories. We talk about our experiences and things we've seen or heard. This could of gone on for hours. It's an amazing episode and prepared to be scared! :)"  },
  { name: "Sleezy Vibes With Evie Phelps", id: "spotify:episode:0syTEh0axYKYb63G436uw4", description: "Evie Phelps makes her first appearance on Vibing With Sleezy: The Podcast via Zoom. Evie Phelps is from Indiana and she is an expert on plants and crafts. This is episode 4 and we discuss plants, crafts, creativity goals, and life in general. This is such a fun episode and Evie brings such great energy to this episode."  },
  { name: "Sleezy Vibes With Eddie Rice", id: "spotify:episode:4tHq6qsZjXdBhX06qJxUhI", description: "Eddie Rice makes his first appearance on Vibing With Sleezy. Eddie and I discuss diabetes, NFL Football, Jacksonville Jaguars, Fantasy Football, Favorite Mascots, and some of Eddie's favorite things/insights. This episode was a lot of fun, and is a must listen!"  },
  { name: "Sleezy Vibes With Virginia Boone", id: "spotify:episode:0i7y1xgJQCd85AUkxtP99e", description: "Virginia Boone makes her first appearance on Vibing With Sleezy. We play the game 'Bowl-ing With Sleezy E and Lady V' grabbing random topics out of a bowl and we discuss them. This is the longest episode to date and its a total blast. Virginia and I discuss so many different topics and I guarantee you will take something away from this episode!"  },
  { name: "Sleezy Vibes With Josh Wright, Aaron Brown, and Tyler Flint", id: "spotify:episode:11ygv7DSRzGlyV4aU2AeZK", description: "The Metronaut Gaming Crew @metronaut90 joins Vibing With Sleezy for the first time. We discuss video game streaming, their twitch stream, collector pins, old stories, and Aaron eats the famous Paqui One Chip Challenge. You don't want to miss this hilarious episode!"  },
  { name: "Sleezy Vibes With Bessie Downs", id: "spotify:episode:7oBlwyCOh7Fj0APUk2Xy3D", description: "Bessie makes her first appearance on Vibing With Sleezy. We had an amazing time discussing Health, Fitness, Super Foods, Being Yourself, and Life in general. This episode will hopefully motivate someone to do what they love."  },
  { name: "Sleezy Vibes Wth Frankie Blice", id: "spotify:episode:0nNvaQLe9HjFbe3AgjrkgJ", description: "Frankie Blice makes his first appearance on Vibing With Sleezy. We discuss being a Barber, the NBA, Coaching, Wrestling, Sports, and Life in general. This episode is awesome and full of amazing content. If you're a sports fan, you will love it. Frankie is a Barber at The Vintage Barber Lounge in Louisville, Kentucky."  },
  { name: "Sleezy Vibes With Jim Dalton", id: "spotify:episode:7gfRQ2OG3G3u33aNUEXmel", description: "This episode is actually Live From Hendersonville, Tennessee! Jim makes his first appearance on Vibing With Sleezy. This is episode 10 and the longest one to date. Jim and I discuss technology, Apple, Amazon, and many other interesting topics in the technology world. If you want to learn something or even learn about a new product, check out this episode. This one was a lot of fun! Photos/Video by Christeen Hernandez on this episode."  },
  { name: "Sleezy Vibes With Paul Cody Travelstead", id: "spotify:episode:0BkdAKkaMnH18RghcIq4Ih", description: "Paul Cody Travelstead makes his first appearance on Vibing With Sleezy: The Podcast. This is the biggest guest to date and we have such a great time. We discuss his brand WeirdFam, his DJing which he goes by GITSUM, he also is a musician that goes by LMNADE, we talk about some of our favorite things, and share some great stories. Enjoy! :)"  },
  { name: "Sleezy Vibes With Sean Fogle", id: "spotify:episode:18bn9PaC4NkC14i6fTxotb", description: "Sean Fogle makes his first appearance on Vibing With Sleezy: The Podcast. We discuss his brand Fourza, the MLB, Legacies, Life Goals, and much more. This is a great episode and go give it a listen today!"  },
  { name: "Sleezy Vibes With Contrary Cherry", id: "spotify:episode:1oWdEcLNxrFnJXawHzkKi8", description: "Paige makes her first appearance on Vibing With Sleezy. We discuss her being a psychic medium, modeling, her art, she does a couple readings on me, and we just share stories. Paige and I have just met each other for the first time but the vibes were great. Check out the episode, its a lot of fun and interesting!"  },
  { name: "Sleezy Vibes With Harold Wainwright", id: "spotify:episode:2gstLnMRXUhKkboILsl0nw", description: "Harold Wainwright makes his first appearance on Vibing With Sleezy: The Podcast. He is a photographer and financial advisor. We discuss his trip to Japan, Europe, photography in Japan/Internationally, Life Transformations, Cameras, and life in general. This is a great episode and is very interesting."  },
  { name: "Sleezy Vibes With Casey Jones", id: "spotify:episode:5deynJPyWqSZW7pAO07GcF", description: "Casey Jones makes his first appearance on Vibing With Sleezy. We discuss selling/flipping, thrift shopping, Ebay, Facebook Marketplace, tips on selling online, and his weight loss journey. This episode was a blast because we both are very passionate about flipping things. After listening to this episode, you may be able to go make some money!"  },
  { name: "Sleezy Vibes With Brandon Cason And Tremain Wilson", id: "spotify:episode:1ijJCvYRZtdAVK6byjyivU", description: "Brandon and Tremain make their first appearance on Vibing With Sleezy. They have the Built To Last Podcast. We discuss growing up together, basketball, the NBA, life, and coaching. This episode was so much fun and brought me down memory lane. Go listen to this episode today, its a lot of fun!"  },
  { name: "Sleezy Vibes With Mary Jarrett And Cody Taylor", id: "spotify:episode:0BqAZzBp4uT0Z72RGk65Xa", description: "Mary and Cody make their first appearance on Vibing With Sleezy. We discuss them living in Korea, how we all met, food, share stories, and how to find North Korea on a Snapchat Map. This podcast was a lot of fun!"  },
  { name: "Sleezy Vibes With M3rkuryy", id: "spotify:episode:5266GCJPwxSdv1aeGDy4xI", description: "M3rkuryy makes his first appearance on Vibing With Sleezy. We discuss his music, music influencers, rap/hip hop, dancing, the local scene, his story, and just share some fun relatable stories. M3rkuryy and I just met before the show so it was a lot of fun getting to know M3rkuryy's plus his music."  },
  { name: "Sleezy Vibes With Dee Dee Taylor", id: "spotify:episode:5KV6S5WwOyIrHfsZEf2Tgb", description: "Dee Dee Taylor who is the owner of 502 Wellness Center makes her first appearance on Vibing With Sleezy. We discuss her background in the Hemp industry, CBD, cannabis, Delta 8, and most importantly we discuss the battle thats going on in KY against sellers of Delta 8. Dee Dee really educates not only Kentuckians but others about the industry. We also share our opinions on things and try to get some important messages out. Enjoy!"  },
  { name: "Sleezy Vibes With Eric Karaglanis And Kyle Johnson", id: "spotify:episode:1zvUiX60kRpYX3fqsQYnsU", description: "Eric Karaglanis and Kyle Johnson make their first appearance on Vibing With Sleezy. We do something similar that I did in an earlier episode and picked topics out of a bowl. It was a lot of fun talking about topics ranging from favorite things, to sharing stories, and different opinions. This episode was great because the topics are so wide range!"  },
  { name: "Sleezy Vibes With Bobby Clark And Jamal Debow", id: "spotify:episode:45CWoNKY6GjKnb3amfS8Qf", description: "Bobby Clark and Jamal Debow make their first appearance on Vibing With Sleezy. We discuss prison, jail, recovery, barber school, and about positivity surrounding life. This is the final episode of season 1 too. This episode was very informative and fun!"  },
  { name: "Sleezy Vibes With The Memory Of Aaron Brown", id: "spotify:episode:2VBWUxJ8YakuN1r8NxmKV7", description: "Vibing With Sleezy: The Podcast is back for Season 2! We have a very special episode for the first episode of season 2 which is in dedication to the late Aaron Brown we lost this past summer. Today we had Frankie Blice, Josh Wright, Lindsey Khale, Alex Feldbusch, and Grace Brown on to discuss memories and stories about Aaron. We also got to shoot this at J-Town High School where we all met. Shout out to J-Town for allowing us to use the school. Enjoy!"  },
  { name: "Sleezy Vibes With John Nicholson", id: "spotify:episode:1utRLBcvul6hNQdaoKdrMp", description: "This episode's special guest is John Nicholson. John is an artist, musician, and clothing designer out of Birmingham, Alabama. This episode was a lot of fun and we even discuss dinosaurs. Go download/listen today!!!!!"  },
  { name: "Sleezy Vibes With Josh Wright", id: "spotify:episode:6wPY6OVqy05gXG0WlGD4tP", description: "Josh Wright makes his third appearance on Vibing With Sleezy. We discuss restaurant stories, video games, and a wide range of different stuff. Give it a listen/download today!"  },
  { name: "Sleezy Vibes With Contrary Cherry II", id: "spotify:episode:67MY0Xmf6bfc5IFaS65JcJ", description: "Paige makes her return to Vibing With Sleezy: The Podcast. One of my favorite guests and people ever has returned for an amazing episode. We always have a good time and we always have stories with similar coincidences/moments. We talk about a wide range of subjects and the energy in this episode is incredible, so enjoy!"  },
  { name: "Sleezy Vibes With Gemini Coven", id: "spotify:episode:3NRnyhOJZ80PEgRvoRlFRu", description: "Sleezy goes potato farming in this episode. Jk! But this episode was shot via Zoom from Boise, Idaho. My special guest was Gemini Coven. We have an incredible episode and really dive deep into a wide range of things. I also guest starred on her podcast later that day called 'Coven Of Rejects.' Go listen to her's and mine on all platforms!"  },
  { name: "Sleezy Vibes With Leah Knowland", id: "spotify:episode:40bvi0O3BR4TdaEWjZdeBd", description: "Leah makes her first appearance on the podcast. We discuss the Jack Harlow concert, her dog, burgers, and more. Enjoy!"  },
  { name: "Sleezy Vibes With Shelby Leigh", id: "spotify:episode:6s261eILGl7pZ6kOQAHKGe", description: "Shelby Leigh makes her first appearance on Vibing With Sleezy. We discuss a wide range of topics from TikTok, 2022, Mysteries, and other topics. This episode really flowed even with a couple pauses. Listen and enjoy!"  },
  { name: "Sleezy Vibes With Kaitlyn O'Connor", id: "spotify:episode:5x3hDmn7OrfM6PMuBSzcPA", description: "Kaitlyn O'Connor makes her first appearance on the podcast. This episode was a lot of fun and a trip down memory lane. We talked about her life, Nashville, college stories, and old stories from the past, This episode really flowed. Enjoy!"  },
  { name: "Sleezy Vibes With Jeremy Parrott", id: "spotify:episode:19r2Ur0wcdYfXca6ubC3ri", description: "Jeremy Parrott makes his first appearance on Vibing With Sleezy, Live from Sunny San Diego, California. We discuss Hawaii, beers, living in California, things he misses in Louisville, and sports. Its always good catching up with my brother out West. Enjoy!"  },
  { name: "Sleezy Vibes With Aaron Vincent", id: "spotify:episode:4p2jZfyRvJyzP9cdiSVGXG", description: "Aaron Vincent makes his first appearance on Vibing With Sleezy: The Podcast. A Louisville Skateboard Legend, Aaron and I discuss skateboarding, skateparks, skateboarders, and Ebay. This episode was a blast catching up with a friend from middle school. Go download/listen today!"  },
  { name: "Sleezy Vibes With Keanu Asing", id: "spotify:episode:08bUeEecPY4FSz8r5lAhut", description: "Professional Surfer Keanu Asing makes his first appearance on Vibing With Sleezy. This episode was recorded via Zoom live from beautiful California. We talk about how we met, fantasy football, surfing, growing up in Hawaii, being a professional surfer, California living, and many other things. This is my biggest guest I have ever had so it was a true honor. Enjoy!"  },
  { name: "Sleezy Vibes With Danielle Marie", id: "spotify:episode:5yupWTiEMm7aBQdAJmeoWZ", description: "Danielle Marie makes her first appearance on Vibing With Sleezy. We discuss working in Storage, OnlyFans, Reddit, and are there dead bodies buried everywhere? This episode flowed like Niagara Falls and was a lot of fun. Enjoy!"  },
  { name: "Sleezy Vibes With Christeen Hernandez II", id: "spotify:episode:6qevIBRmqS9xMpxfrFodDN", description: "Christeen Hernandez aka 'The Horse Girl' makes her second appearance on Vibing With Sleezy. We discuss Horses, Beaches, Nashville, Hendersonville, Working At A Vet Clinic, Food, and much more. Its always fun linking up with one of my best friends. Go enjoy!"  },
  { name: "Sleezy Vibes With AJ Thomas", id: "spotify:episode:0fCdIjXWSm50OGW3xa8QxC", description: "AJ Thomas makes his first appearance on Vibing With Sleezy. We discuss his YouTube Channel, Crypto Currency, NFTs, Stories From The Past, and Door Dashing. This is one of my good friends and we had a blast doing this episode. Enjoy!"  },
  { name: "Sleezy Vibes With Austin Rich", id: "spotify:episode:2nKZwFrZNt8NLIptUW5iDC", description: "Austin Rich makes his first appearance on Vibing With Sleezy. We have a great time discussing his comedian career, living in different areas, social media, living life, learning, and being better. This show was such a great time and I think everyone can learn from it. Enjoy!"  },
  { name: "Sleezy Vibes With Katie Deulina", id: "spotify:episode:4auiOoxEQopHHSQTScLxdo", description: "Katie Deulina makes her first appearance on Vibing With Sleezy. We discuss her husband's suicide, suicide, loss, death, and how to overcome/live life to the fullest. This is a very emotional episode and a very important one for people to hear. Enjoy!"  },
  { name: "Sleezy Vibes With Charlie Loveall", id: "spotify:episode:4J9I7R0k8klxvLJ8h0eoAn", description: "Charlie Loveall makes his first appearance on Vibing With Sleezy. We discuss baseball, his baseball career, bodybuilding, fitness, NFL, and many other things. Enjoy!"  },
  { name: "Sleezy Vibes With Ashley DiPaola", id: "spotify:episode:49YC44f3FqtVTWOhA4bGke", description: "Ashley DiPaola makes her first appearance on Vibing With Sleezy. She is a cancer survivor. She shares her story, her battle, and positive messages for everyone, and how she finally feels at peace where she is at with her life. For everything she has been through, she is the true definition of a warrior, enjoy!"  },
  { name: "Sleezy Vibes With Annette Guerrero", id: "spotify:episode:4lK2bkxQj32zxc6O4XtSRq", description: "Annette Guerrero makes her first appearance on Vibing With Sleezy. She is coming live from San Diego, California. We met on Chatroulette back in college and have remained friends ever since. We discuss California, Religion, Her Health, Mandela Effects, Conspiracy Theories, and much more. This episode was a blast, enjoy!"  },
  { name: "Sleezy Vibes With Sleezy", id: "spotify:episode:0orRrWJF1cYGHXuTtTBcm7", description: "Sleezy Vibes With Sleezy is the Season 2 Finale. This is an episode a lot of fans, guests, and others have recommend me doing by introducing who I am, how I got my nickname, why I do the podcast, my story, and other random things. It was fun doing an episode solo for the first time. I hope people learn from this episode and it's an honor to have another season in the books! :)"  },
  { name: "Sleezy Vibes With Sleezy II", id: "spotify:episode:6JiXfwRQ10Q9kyqefbItNm", description: "Vibing With Sleezy: The Podcast is back with Season 3! This episode is another solo episode that was requested for Season 3. So I thought I make it the opening episode of the season. This episode is an update on Sleezy's life, positive things, and the future. Vibing With Sleezy has a lot of great guests coming for season 3 and I thank you for being on this journey!"  },
  { name: "Sleezy Vibes With Contrary Cherry III Part 1", id: "spotify:episode:2jK9mtrJGIfdL2lvq3sbC4", description: "Contrary Cherry, who always brings greatness to every episode with me, makes her third appearance on Vibing With Sleezy: The Podcast. We do a 2 part episode. This is Part 1 and we have a great chat about her podcast, life, her brand, and a wide range of topics. Enjoy!"  },
  { name: "Sleezy Vibes With Contrary Cherry III Part 2", id: "spotify:episode:6AHXof4t7gXu5HxGhLLMRB", description: "This is Part 2 of the podcast with Paige aka Contrary Cherry. Pt 2 was awesome because Paige answered questions, did a reading, and we did a tribute for her friend. If you haven't listened to Pt 1 go listen to it and I hope you enjoy this episode :)"  },
  { name: "Sleezy Vibes With Eric Bush - VWS Fantasy Football Episode", id: "spotify:episode:3wGcRr8jZ8wJCCL7z0cdkM", description: "This is the official Vibing With Sleezy Fantasy Football Episode with my special guest Eric Bush. We discuss fantasy football, the upcoming 2022 NFL Season, we go over every team, every division, and at the end give you our Super Bowl pick. This episode was a blast and this episode is needed to be listened to by any football fan excited for the upcoming season!"  },
  { name: "Sleezy Vibes With Hannah Hall", id: "spotify:episode:2v7M3NA7DKj6BSMcGbj1Da", description: "Vibing With Sleezy: The Podcast comes live from Nashville, TN for this episode. My special guest is Hannah Hall. We discuss electronic music, concerts, Nashville, and much more. This episode was also filmed outside so the vibes were real nice. Enjoy!"  },
  { name: "Sleezy Vibes With Christeen Hernandez III Part 1", id: "spotify:episode:5TMxuXcpiH8S3p867jqrxU", description: "This is Part 1 of Vibing With Sleezy: The Podcast featuring my special guest Christeen Hernandez from Hendersonville, TN. She has been a reoccurring guest on the podcast for past 2 seasons so we had to have her back. We discuss horses, dogs, and stories on Pt 1. Stay tuned for Pt 2 later this week. Enjoy!"  },
  { name: "Sleezy Vibes With Christeen Hernandez III Part 2", id: "spotify:episode:6P5vqEdi62uxzTzhYpj3VF", description: "Christeen Hernandez is back for Part 2. We discussed a lot in part 1. In Part 2 we discuss marijuana, health, and we also do a Law & Order SVU Trivia game. Enjoy!"  },
  { name: "Sleezy Vibes With Frankie Blice II", id: "spotify:episode:69LitDuKleizlNbcuHyhtH", description: "Frankie Blice makes his third appearance on Vibing With Sleezy: The Podcast. This episode is most likely the longest and most hilarious one I've ever done. We couldn't stop laughing, lol Frankie is a big supporter of the show and always a very demanded guest. We always discuss wrestling, sports, and good times. Enjoy!"  },
  { name: "Sleezy Vibes With Gemini Coven II", id: "spotify:episode:0sAvPJlJtss0WzL0OLMjqT", description: "Gemini Coven is back on VWS. We talk about recent experiences, her podcasts, Idaho, Food Trucks, Willy Wonka, movies, and even try to sell our friend Paige at the end. This episode was a blast, check it out!"  },
  { name: "Sleezy Vibes With Sean Patrick O'Brien II Part 1", id: "spotify:episode:50ebl3BrJpOHprajlbxBJA", description: "Sean P aka Referee Man Bun is back on Vibing With Sleezy! Sean P was my very first guest on the podcast and its awesome to have him back. We talk about wrestling, music, and life. This is a 2 parter so this is only Pt 1, download, and enjoy!"  },
  { name: "Sleezy Vibes With Sean Patrick O'Brien II Part 2", id: "spotify:episode:5CvqKItTx0GVJXQLbvKdk3", description: "Sean Patrick O'Brien is back for Pt 2 on Vibing With Sleezy. We discuss the local Louisville music scene, his music career, wrestling, friends, and we do a fun wrestling survey at the end. Download and enjoy!"  },
  { name: "Sleezy Vibes With Tom Payne Part 1", id: "spotify:episode:45L5pDFqp7cDx8QdCn5jBM", description: "Tom Payne a fellow podcaster and friend of the show finally makes his appearance on Vibing With Sleezy. We talk about surviving a drive by shooting together, working in the restaurant business, and life advice. Pt. 2 will be coming up this week and it's hilarious. Enjoy!"  },
  { name: "Sleezy Vibes With Tom Payne Part 2", id: "spotify:episode:0qVxA6VLxr4Bpd1SRn3uPH", description: "Tom Payne is back for Pt. 2 on Vibing With Sleezy. We discuss his podcast, kangaroos are aliens, and I will just say this is one of the funniest podcast I have ever done. I was cracking up, and I think you will to, enjoy!"  },
  { name: "Sleezy Vibes With Remi Melbraten (Live From Norway) Part 1", id: "spotify:episode:0oQJPExLrJJI7q5jmybvjz", description: "Remi makes his first appearance on Vibing With Sleezy: The Podcast. We come live from Bergen, Norway with this episode. Remi and I discuss how we met, his life, Norway, and stories. There also is a Pt. 2. It's always awesome when the show goes International!"  },
  { name: "Sleezy Vibes With Remi Melbraten (Live From Norway) Part 2", id: "spotify:episode:38ysLXWjFOJUbpBN1EoZ6K", description: "Remi is back for Pt 2 on Vibing With Sleezy: The Podcast. He comes live from Bergen, Norway. We discuss Norway more, he ask questions to me about America, we discuss politics which we never do on this show but I did it for Remi, and just have an overall good discussion. Another International episode in the books!"  },
  { name: "Sleezy Vibes With Dee Dee Taylor II Part 1", id: "spotify:episode:5M2FxvwX1XJHsKp5EHrS0a", description: "Dee Dee Taylor aka Kentucky's Queen of Hemp is back for an episode of Vibing With Sleezy: The Podcast. This is a 2 part episode so this is Part 1. We discuss her brand 502 Hemp, her new items, how we met, building a brand, and many more things. This episode discusses cannabis, hemp, weed and you will learn something for sure. Also stay tuned for Pt. 2 which is an awesome episode with great info. Enjoy!"  },
  { name: "Sleezy Vibes With Dee Dee Taylor II Part 2", id: "spotify:episode:18sICCbU17LpJ8sj0fGYXA", description: "Dee Dee Taylor is back for Pt 2 of her episode on Vibing With Sleezy: The Podcast. Part 2 was a lot of fun. We continue our conversation from Pt 1 talking 502 Hemp, Cannabis, support/jealousy, revenge pranks, awards, life, and so much more. Enjoy!"  },
  { name: "The Official Vibing With Sleezy: The Podcast World Cup Episode Part 1", id: "spotify:episode:1R4OhUyoQ2TSblKGj86jDk", description: "This is the Official Vibing With Sleezy: The Podcast World Cup Episode Pt. 1. I talk about the host country Qatar, the Countries playing, the Stadiums, the History, Fun Facts, Referees, Players, and More. This is Pt. 1 of the best World Cup Podcast in the world for the 2022 Qatar World Cup!"  },
  { name: "The Official Vibing With Sleezy: The Podcast World Cup Episode Part 2", id: "spotify:episode:5kbp7YMluwCoC1wz64chCy", description: "This is the Official Vibing With Sleezy: The Podcast World Cup Episode Pt. 2. I go over all the games from the Group Stages to the Championship. I tell you the times of the games, stadiums, the countries playing, my picks, my goal predictions, and I give you my overall winner prediction for the overall World Cup. This is one of the best podcast in the world for the 2022 Qatar World Cup!"  },
  { name: "Sleezy Vibes With Antonio Pantoja Part 1", id: "spotify:episode:10tt2L4Yh59dsbBL3qOooO", description: "Antonio Pantoja makes his first appearance on Vibing With Sleezy: The Podcast. This is a 2 part episode and the finale of season 3, so this is Part 1. He is a photographer, director, writer, videographer, and a local legend here in Louisville. We discuss how we met, his career, his motivation, Louisville, who he's worked with, and much more. Enjoy!"  },
  { name: "Sleezy Vibes With Antonio Pantoja Part 2", id: "spotify:episode:3EIFJtF5RU9gjo1XztOKZK", description: "The Finale Of Season 3 Is Here!!!! Antonio Pantoja is back for his Pt 2 of his podcast episode of Vibing With Sleezy: The Podcast. We discuss his heart attack, heart health, his future, and more. We had a technical difficulty but we made it work. This was an awesome finale and I thank everyone for listening to Season 3!!!!"  },
];

const ul = document.createElement("ul");
ul.setAttribute("id", "episodes");

const renderEpisodes = (episodes) => {
  ul.innerHTML = "";
  episodes.forEach(episode => {
    const li = document.createElement("li");
    const button = document.createElement("button");
    button.innerHTML = episode.name;
    button.dataset.spotifyId = episode.id;
    button.dataset.description = episode.description;
  
    button.addEventListener("click", () => {
      EmbedController.loadUri(button.dataset.spotifyId);
      document.querySelector(".glass").style.display = "block";
    });
  
    li.appendChild(button);
    ul.appendChild(li);
  });
  
  document.querySelector("#some-container").appendChild(ul);
};

renderEpisodes(episodes);

const searchBar = document.createElement("input");
searchBar.setAttribute("type", "text");
searchBar.setAttribute("placeholder", "Search Episodes...");
searchBar.addEventListener("input", (event) => {
  const filteredEpisodes = episodes.filter(episode => episode.name.toLowerCase().includes(event.target.value.toLowerCase()));
  renderEpisodes(filteredEpisodes);
});

document.querySelector("#some-container").prepend(searchBar);
