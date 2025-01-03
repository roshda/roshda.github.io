3:I[5287,[],""]
4:I[913,[],""]
5:I[6397,["200","static/chunks/200-f56fe7243f127919.js","786","static/chunks/786-1b548aaa6f203fa3.js","185","static/chunks/app/layout-6d5156c3845bc099.js"],"default",1]
0:["J004lDHJFxfWkz_aSqQaV",[[["",{"children":["blog",{"children":["__PAGE__",{}]}]},"$undefined","$undefined",true],["",{"children":["blog",{"children":["__PAGE__",{},[["$L1","$L2",null],null],null]},[null,["$","$L3",null,{"parallelRouterKey":"children","segmentPath":["children","blog","children"],"error":"$undefined","errorStyles":"$undefined","errorScripts":"$undefined","template":["$","$L4",null,{}],"templateStyles":"$undefined","templateScripts":"$undefined","notFound":"$undefined","notFoundStyles":"$undefined"}]],null]},[[[["$","link","0",{"rel":"stylesheet","href":"/_next/static/css/262d7f994a7ba568.css","precedence":"next","crossOrigin":"$undefined"}]],["$","$L5",null,{"children":["$","$L3",null,{"parallelRouterKey":"children","segmentPath":["children"],"error":"$undefined","errorStyles":"$undefined","errorScripts":"$undefined","template":["$","$L4",null,{}],"templateStyles":"$undefined","templateScripts":"$undefined","notFound":["$","section",null,{"children":[["$","h1",null,{"className":"mb-8 text-2xl font-semibold tracking-tighter","children":"404 - Page Not Found"}],["$","p",null,{"className":"mb-4","children":"The page you are looking for does not exist!"}]]}],"notFoundStyles":[]}],"params":{}}]],null],null],["$L6",null]]]]
7:I[9734,["404","static/chunks/app/blog/page-8cb6ef55e8ffac1e.js"],"default"]
8:Tda8,This is my writeup for the "Pineapple" (forensics - network analysis) challenge at USC CTF 2024.


In this challenge, we were given a .pcapng file which is basically a type of packet capture file that shows intercepted network traffic. Our task was to examine this traffic to uncover any data that might reveal a flag.


Open the File in Wireshark

Load pineapple.pcapng in Wireshark, a tool to analyze network traffic/packets. This shows all the packets in the capture, with info like source and destination IPs, protocols, and a summary for each packet. I filtered by HTTP traffic because it usually includes readable data, which could contain usernames, file uploads, or other useful information. 



Form Data and POST Requests

I first followed the HTTP stream for this application form url encoded packet and I saw this form data with some info:

- username: jbarker
- filename: hoolicon
- filepw: conjoined_TRIANGLES




This means that it probably had something to do with a file submission involving a filename (hoolicon) and an encryption key (conjoined_TRIANGLES) we could use to view the file.

Then I looked at another POST request (type of HTTP request used to send data to a server) TCP stream to find this data for this hoolicon file. (A TCP stream is a way to view the flow of data, packets, between two devices over the TCP (Transmission Control Protocol) as a stream/conversation)

It showed that the data was in 7z format which is like a compressed format that supports encryption as well.  



I also saw this metadata at the bottom showing that the flag image is probably in the archive …

"f.l.a.g.i.m.g....p.n.g"

Then I exported this. I saved the raw data as multipart_data.bin so I could use binwalk to extract the embedded 7z archive. The decimal part is saying that the first 175 bytes of the bin file are not in the 7zip archive format. (This is from any HTTP headers included when we downloaded the stream.)

rd@rd-Latitude-E7270:~$ binwalk –extract multipart_data.bin

DECIMAL       HEXADECIMAL     DESCRIPTION
--------------------------------------------------------------------------
175           0xAF            7-zip archive data, version 0.4


I ran this command to cut out the 175 bytes of multipart_data.bin.

**rd@rd-Latitude-E7270**:~$ dd if=multipart_data.bin of=hoolicon.7z bs=1 skip=175
452819+0 records in
452819+0 records out
452819 bytes (453 kB, 442 KiB) copied, 2.089 s, 217 kB/s


This command extracted the .7z file from the binary data, saving it as hoolicon.7z

Decrypt and Extract hoolicon.7z

Since the old form data included filepw=conjoined_TRIANGLES, we used this as the password to decrypt the archive:

rd@rd-Latitude-E7270:~$ 7z x hoolicon.7z -pconjoined_TRIANGLES

7-Zip [64] 16.02 : Copyright (c) 1999-2016 Igor Pavlov : 2016-05-21
p7zip Version 16.02 (locale=en_US.UTF-8,Utf16=on,HugeFiles=on,64 bits,4 CPUs Intel(R) Core(TM) i7-6600U CPU @ 2.60GHz (406E3),ASM,AES-NI)

Scanning the drive for archives:
1 file, 452819 bytes (443 KiB)

Extracting archive: hoolicon.7z

WARNINGS:
There are data after the end of archive

--
Path = hoolicon.7z
Type = 7z
WARNINGS:
There are data after the end of archive
Physical Size = 452754
Tail Size = 65
Headers Size = 162
Method = LZMA2:19 7zAES
Solid = -
Blocks = 1

Everything is Ok

Archives with Warnings: 1

Warnings: 1
Size:       452550
Compressed: 452819



This produced the flagimg.png

rd@rd-Latitude-E7270:~$ xdg-open flagimg.png



which showed the flag: CYBORG\{pe4cefaRe_4x09\}9:T5fb,## Context

I got into UC Berkeley's AI hackathon (biggest in the world!), and attended it this weekend. 

Admittedly, I knew very little about working with AI. My team and I built a simple chatbot using resources from the sponsors, OpenAI and Hume AI. 

Being in community college, I hadn't been exposed to the "college computer science" culture, and it was amazing to be around so many other students interested in building things and working in tech. I made a lot of new friends. 

## Takeaways

This was also my first large hackathon. My main takeaway is that the marketing and idea of what you're building, at a hackathon, is often far more important than your actual code. This event almost seemed like an idea competition -- with all the money and hype around AI, investors need products to invest in, and the hackathon was basically a think tank. I talked to judges who were already thinking of investing into startups or products born at the hackathon. 


Another revelation is that winning teams plan out their projects weeks, if not months, in advance to fit into specific tracks for prizes. During the hackathon, they quickly code using their wireframes, and spend the rest of their time networking and finalizing their pitches. 

I didn't think about this at first, but it makes a lot of sense considering the scale of the event and the limited number of large ($50k investment!!) prizes. 

Overall -- I'm super hyped to attend the third rendition of this hackathon next year! (preferably with a better plan this time)a:Tdf5,Updating this as I read new titles. A non exhaustive list, along with my thoughts on them.


## Beggar's Bedlam by Nabarun Bhattacharya, translated by Rijula Das
**Date:** 1/2025  
**Thoughts:** Really interesting read. I love magigal realism and this novel delivered. Interesting take on the politcal landscape and culture of West Bengal/Kolkata.


## Daughter of the Moon Goddess by Sue Lynn Tan
**Date:** 10/2024  
**Thoughts:** Pretty enjoyable and creative historical romance / fantasy novel. I felt that the characters and writing were a little boring and static. Great worldbuilding though


## Going Infinite by Michael Lewis
**Date:** 05/2024  
**Thoughts:** Interesting deep dive into the world of high finance.

## Victory City by Salman Rushdie
**Date:** 04/2024  
**Thoughts:** Rushdie’s latest work is  historical epic, AND it's magical realism, one of my favorite genres! His prose is, as usual, lush and imaginative, but this novel can feel kind of meandering and aimless.

## Dune by Frank Herbert
**Date:** 03/2024  
**Thoughts:** Great. Re-reading before I watch the second movie year.

## Fourth Wing by Rebecca Yarros
**Date:** 02/2024  
**Thoughts:** I saw this on social media. I read it described on the back cover as "nothing you've read before," but this could not be farther from the truth as it leans heavily on every YA trope you can think of. Mildly entertaining.

## Lady Tan's Circle of Women by Lisa See
**Date:** 01/2024  
**Thoughts:** A beautiful story set in historical China. Can feel a bit melodramatic, but overall it's a great read.

## The Red Rising Trilogy by Pierce Brown
**Date:** 07/2023  
**Thoughts:** I finished this series set in *The Society*, a future caste-divided dystopia where the protagonist rises from the lowest tier. The world-building and politics are decently believable, and the action is great. Another light read with enough unpredictable twists to feel fresh.

## The Witcher Series by Andrzej Sapkowski
**Date:** 08/2023  
**Thoughts:** Finally finished all 8 books. Highly recommend: a well constructed world with magic, cool creatures, and moral ambiguity. I haven't read the short stories yet

## All the Light We Cannot See by Anthony Doerr
**Date:** 04/2023  
**Thoughts:** This was a beautiful read that goes through the lives of a blind French girl and a German soldier during World War II. Incredible prose and narrative.

## The Four Winds by Kristin Hannah
**Date:** 01/2023  
**Thoughts:** Nothing new if you've read historical fiction—it's basically the life of a woman through the Great Depression era.

## Circe by Madeline Miller
**Date:** 12/2022  
**Thoughts:** Another cool reimagined mythology tale from Miller, showing Circe's journey from a witch to a minor goddess. Loved it.

## The Ballad of Songbirds and Snakes by Suzanne Collins
**Date:** 03/2022  
**Thoughts:** An interesting perspective on Snow's life. Definitely worth reading if you like the original trilogy.

## Game of Thrones Series by George R.R. Martin
**Date:** 03/2022  
**Thoughts:** George, we're still waiting for *Winds of Winter*... idk how many years I can take before I build an AI GRRM to finish it.

## Pride and Prejudice by Jane Austen
**Date:** 01/2022  
**Thoughts:** A classic

## Everything I Never Told You by Celeste Ng
**Date:** 01/2022  
**Thoughts:** Great emotional deep dive / mystery into an Asian American family.

## Klara and the Sun by Kazuo Ishiguro
**Date:** 10/2021  
**Thoughts:** Very melancholic and reflective read about a sick child and her AI(?) companion. Beautiful writing.b:T12d4,At the end of this week I'll have taken the final exam for CS10B, the second semester of C++ at my college. I found this class significantly harder than the first, but the projects were challenging and taught me a lot about algorithms and the language. Here's some of my learnings + a walkthrough of [my favorite project](https://github.com/roshda/cnwy-game-of-life/). 

### Some C++ Basics
C++ is a statically typed and compiled language, meaning code is converted to machine code by a compiler. Faster execution than interpreted languages.

- C++ supports OOP concepts like classes, objects, inheritance, polymorphism, and encapsulation.

- **Basic Syntax**:
  - some data types include `int`, `float`, `double`, `char`, and `bool`
  - C++ uses the standard control flow structures like `if`, `else`, `switch`, `for`, `while`, and `do-while`
  - Functions are usually declared before the `main()` function or in separate files

- Low-level memory manipulation through pointers, and manual memory management (`new` and `delete`). Super controlled and efficient if you know how to use it

- **Templates**, use them for "generic" programming and reuse by allowing functions and classes to operate with any data type

- **Error Handling** with exceptions (`try`, `catch`, `throw`)

- **Multi-Paradigm Support** (procedural, functional, and object-oriented programming paradigms)


### Fav project: [Conway's Game of Life](https://github.com/roshda/cnwy-game-of-life/)

Conway's Game of Life is a classic simulation that shows how simple rules can lead to complex outcomes. It's a grid-based game where each cell is either "alive" or "dead," and the state of the grid evolves over time. The rules are pretty straightforward: cells live, die, or come to life depending on how crowded or empty their surroundings are. What's cool is how these simple interactions can create all sorts of unexpected patterns.

1. **boolMatrix.h**: The header file defining the `boolMatrix` class, which represents a grid of boolean values.
2. **boolMatrix.cpp**: The implementation file containing the methods for manipulating and accessing the boolean matrix.
3. **client.cpp**: The main driver file that initializes the matrix, runs the Game of Life simulation, and displays statistics.

### How I made it

#### **Designing the `boolMatrix` Class**

The `boolMatrix` class is the backbone of the project. It represents the game board as a 2D array where each cell is either "alive" (`true`) or "dead" (`false`). Some of the key parts of this class are:

- **Constructor (`boolMatrix()`)**: This initializes the entire grid to `false`, so every cell starts out dead. It sets up a blank slate for the simulation to begin.
- **Getters and Setters (`get`, `set`)**: These functions let you access and modify specific cells in the matrix safely. They also have checks to make sure you're not trying to access a cell that's out of bounds.
- **Counting Functions (`rowCount`, `colCount`, `totalCount`)**: These help count the number of "alive" cells in a specific row, column, or the whole grid. This is useful for getting a snapshot of how the game is progressing.
- **`neighborCount` Method**: This function counts how many live neighbors a particular cell has. This is a big deal because the Game of Life rules depend entirely on how many neighbors each cell has.
- **`print` Method**: This provides a visual of the matrix, showing live cells as `*` and dead ones as spaces. It makes it easy to see how patterns evolve over time.

#### **Game Logic**

The `client.cpp` file handles the main game logic and user interaction:

- **`initialize` Function**: Reads the initial setup from a file (`lifedata.txt`) and sets specific cells to "alive." This way, you can start with any pattern and see how it plays out, making it more flexible to test different scenarios.
  
- **`playGameOfLife` Function**: This runs the simulation for a certain number of generations. It uses a temporary matrix to calculate the next state without affecting the current one. The rules are simple:
  - A live cell stays alive if it has two or three live neighbors; otherwise, it dies.
  - A dead cell becomes alive only if it has exactly three live neighbors.
  
  By using a temporary matrix, you avoid messing up the calculations by changing the board while you're still working on it.

- **`displayStatistics` Function**: This gives you a summary after the simulation is done—like how many cells are alive or dead in certain rows or columns. It helps to quickly understand what happened after a few generations.

### How to Run it

Create a file named `lifedata.txt` in the same directory. List the initial "alive" cells as row and column pairs, like this:

   ```
   1 2
   3 4
   5 6
   ```

Then run. It'll ask for the number of generations you want to simulate.c:T1325,Check out the few projects I made inspired by this course [here](https://github.com/roshda/misc-cyber/)

---

I just finished taking CS 82.58 Introduction to Information Systems Security at my local college -- definitely one of my favorite classes!

This class was designed to prepare us for the COMPTIA+ certification, which I unfortunately did not take. 

Here are some of my favorite weekly projects. I completed these on virtual machines on my own Ubuntu desktop.

1. **Digital Certificates & SSL/TLS Security**

   One of the first labs was about digital certificates and the SSL/TLS protocols that secure web traffic. We started by opening the browser's developer tools, navigating to the "Security" tab, and inspecting the digital certificates of various websites. We checked the certificate's issuer, validity period, and subject to make sure it was signed by a trusted Certificate Authority (CA). 

   Next, we moved to the command line and used `OpenSSL` command `openssl s_client -connect [domain]:443` to establish a connection to a web server over SSL/TLS and view the server's certificate chain. I learned how SSL/TLS works to establish encrypted connections between clients and servers. By analyzing a valid certificate chain versus an invalid one, we learned how browsers verify certificates against trusted CAs and why expired or self-signed certificates can be dangerous.

   We also created our own self-signed certificate using `openssl req -x509 -newkey rsa:2048 -keyout key.pem -out cert.pem -days 365 -nodes` to understand the generation process. Definitely shows the importance of key management and the role of encryption in securing data in transit.

2. **Packet Sniffing with Wireshark**

   One of the more in-depth labs involved using Wireshark to capture and analyze network traffic. We began by launching Wireshark on our virtual machines, selecting the network interface connected to our lab environment, and starting a capture session. The goal was to observe the unencrypted traffic between clients and servers and identify potential vulnerabilities.

   The lab required us to filter specific traffic types using display filters, `http`, `dns`, or `ftp` to narrow down our search. For example when filtering for `http` traffic, we looked for `GET` and `POST` requests, which could reveal sensitive information (eg usernames or passwords) sent in plain text. We analyzed packet details to see headers, protocols used, and even the data being transferred.

   One specific task involved setting up an `ftp` server on one virtual machine and connecting to it from another. We then captured the login credentials sent in plain text over the network. It's incredible how easily an attacker could capture credentials on an unsecured network. We then discussed how protocols like `HTTPS` and `FTPS` protect against such attacks by encrypting the data in transit.

3. **Creating and Analyzing a Honeypot with Cowrie**

   This week, we set up a honeypot using Cowrie, a popular SSH and Telnet honeypot. I installed Cowrie on an Ubuntu virtual machine and followed the setup instructions to configure it as a fake SSH server that mimicked a vulnerable system. We intentionally left common ports (eg 22 (SSH)) open to attract unauthorized login attempts.

   After setting up Cowrie, we monitored the cowrie.log file to track the actions of any attackers who interacted with the honeypot. (There were all probably just bots) The log entries showed the commands executed by attackers. For example, some attackers attempted common passwords or tried to download malicious scripts from remote servers. It was a great way to show exactly how attackers probe systems for weaknesses and also show the importance of monitoring and logging.


4. **Implementing and Testing Firewall Rules with `iptables`**

   This week's lab focused on setting up and fine-tuning firewall rules using `iptables` on a Linux system. We started with a default "allow all" policy, which we then modified to a "deny all" policy. From there, we incrementally added rules to allow specific types of traffic. For example, we allowed incoming SSH connections on port 22 only from a trusted IP address using the command `sudo iptables -A INPUT -p tcp -s [trusted_ip] --dport 22 -j ACCEPT`.

   We then tested these rules by trying to SSH into the machine from different IP addresses, and as expected, attempts from unauthorized IP addresses were blocked, showing the effectiveness of the firewall rules. We also implemented rules to allow HTTP traffic on port 80 while blocking all other incoming traffic. Using `nmap` from an external machine we verified that only the allowed services were reachable. I was a great example of "least privilege" in action. 

   This lab was great to understand how firewalls work at a packet-filtering level and how they serve as a line of defense against unauthorized access.d:T411,I participated in [Deadface CTF (capture the flag)](https://ctf.deadface.io/) this weekend with Psi Beta Rho, UCLA's competitive cybersecurity team. This was my first big CTF and I learned a lot about the different categories of challenges. 

While I'm relatively new to CTFs, I've used linux my whole life and I found that helped a lot this weekend, especially in scripting and automation as well as general command line tools.

I found at least one flag in most of the categories, but I really enjoyed the programming and steganography categories. 

After the CTF ended, I presented my solution to the ["Price Check"](https://ctf.deadface.io/challenges#Price%20Check-20) problem. A quick overview: I noticed that the data in the provided csv was just 0s or 255s, and I realized that was probably a qr code. The problem also mentioned that users might "scan" something. So I wrote a python script to generate a qr code from the image. The flag was revealed when you scan the qr code. 

Can't wait for the next competition in a couple weeks!e:T5d4,I've debated whether I should buy a new, mainstream laptop for the past year in preparation for university. It’s now 2 weeks until move in, and I decided (for now) to stick with the trusty 2015 Dell laptop running various Linux distros over the past six years (of course, I've been back with Ubuntu for the past few years). Here's some reasons why


- coding experience  

I enjoy coding, and on Ubuntu it's straightforward and powerful, better than my experiences on Windows or Mac. Everything works out of the box, and you can also get more speed for advanced tasks like training ML models. 

- open source

Ubuntu is open source, and that means freedom: no locked-down ecosystems, forced updates, or mandatory payment. I can tweak and customize my setup exactly how I want (ricing coming soon!). 

- cross platform support 

I've never had an issue with required programs. Basically any windows program can be run with WINE. And the LibreOffice Suite is great, but you can always dual boot as well.

- why ubuntu

Ubuntu is stable, easy to use, and doesn’t require constant configuration. I dual booted Kali for cybersecurity stuff, but for everything else, Ubuntu wins.

- freedom 

With Ubuntu, I can do whatever I need. Change desktop environments, run custom scripts, or mess with system settings—it’s all possible.

I've spent considerable time on non-linux systems throughout the years in jobs, libraries, and volunteering. Nothing compares to the ease and freedom of ubuntu.f:Tb72,*Update 09/2024 -- Contact me for access to the notebooks [here](https://github.com/roshda/ames-dashboards/tree/main)!*

I completed my NASA Ames internship this week with a presentation to Ames leadership alongside my team.

For the past few months, I worked with a team of researchers looking into sustainable aviation fuel. I developed 3 Jupyter Notebooks to explore and visualize their data:

### 1. Sustainable Aviation Fuel (SAF) Emissions Dashboard

Provides analysis of emissions from different SAFs, focusing on chemical compositions, combustion properties, and resultant emissions like CO2, NOx, and particulate matter. Enables comparison of different fuels' environmental impacts, supporting further SAF research.

- **Data Sources:** Emission data from NASA Ames and partner facilities; chemical analysis data for SAF types (FT-SPK, HEFA-SPK).
- **Tools:** **Pandas, NumPy, SciPy** for preprocessing, statistical analysis, and basic correlation analysis between fuel composition and emission levels. **Matplotlib** and **Seaborn** were used within Jupyter to create interactive visualizations, such as heatmaps and plots that update dynamically with user inputs.
- **Insights:** Highlighted a 20% reduction in NOx emissions when using HEFA-SPK compared to conventional jet fuel, helping direct future research.

### 2. Contrail Formation and Climate Impact Modeling Dashboard

Explores contrail formation and climate impact by visualizing atmospheric data and comparing fuel types to evaluate their effects on contrail persistence and climate impact.

- **Data Sources:** Atmospheric data from NASA’s DC-8 and remote sensing, including temperature, pressure, humidity, and ice particle size distribution.
- **Tools:** **xarray, Dask** for managing large, multidimensional atmospheric data; **PyProj** for geospatial transformations. Created interactive maps using **Plotly** and **IPywidgets** within Jupyter Notebooks, allowing users to explore various atmospheric conditions and their impacts on contrail formation.
- **Insights:** The dashboard showed that under certain atmospheric conditions, specific SAFs reduced persistent contrail formation by 10%, helping inform climate-related aviation strategies.

### 3. Fuel Efficiency and Performance Exploration Dashboard

Explores fuel efficiency and performance of different aircraft models, including advanced designs like the Transonic Truss-Braced Wing (TTBW) and the X-57 Maxwell electric aircraft.

- **Data Sources:** Wind tunnel data, CFD simulations, flight test results, and material performance data.
- **Tools:** **OpenFOAM** for CFD simulations; Python integration in Jupyter for processing output data. **Plotly**.
- **Insights:** Visualized key patterns in fuel efficiency across different wing designs and biofuel types to direct research.

**Note:**  
The code for these dashboards is available on my GitHub on request, but the data is proprietary.10:Tdd0,I received acceptances to most UCs after one year in community college. While one year isn't necessarily an ideal timeline, I'm proud of my planning and would like to share some of my tips for successfully transferring.

[Fun fact](https://www.ppic.org/publication/policy-brief-strengthening-californias-transfer-pathway/#:~:text=Despite%20recent%20progress%2C%20transfer%20rates,do%20so%20within%20two%20years.): *only 10% of California community college students transfer within two years; 19% in four :(*


## 1. Plan (as early as possible)

When I settled on community college (CC), I immediately started planning my classes using [assist.org](https://assist.org/)*(where to get the classes from your CC you need to take that will transfer to your major) and UC TAP (transfer admission planner). **You NEED both these resources to stay on track.**

If you're sure about your major and schools, list them out on UC TAP, and then get all the articulation agreements from assist. If you're unsure about a major, focus on completing IGETC, which has you covered for all college general eds.  

## 1.5 Engineering

If you're an engineering or heavy STEM major, I'd advise against completing IGETC, as you already have lots more major prep requirements than everyone else. It is also not a requirement for many majors. I didn't do IGETC and instead completed the 7 course pattern, the minimum to transfer (AP test scores and CC dual enrollment classes covered all of this for me). 

## 2. Classes

Make sure there are no holds preventing you from registering in classes. As with any public institution, enrollment is often strict, and definitely not guaranteed. You don't want classes to get filled up as you wait for your AP scores or fees to be processed. 

Another tip I have is to take classes from other community colleges. I took a few online humanities classes from the Peralta Colleges so I could optimize my in person schedule for two days a week. 

And of course: college classes are harder than high school classes. You have to put in more of your own time to understand the material and go to office hours. 


## 3. Enjoy


My time at CC was more enjoyable than I thought it'd be, and I greatly undervalued at first the convenience and happiness that came from staying at home. I was able to grow and focus on myself, and I wouldn't have been able to if I'd been thrust into college, into a major I wasn't even fully sure about last year. 


## 4. Money

I saved my parents from paying $80,000 to the UCs, and in fact I made around $4k in scholarships. Plus, CC is free for two years after high school graduation, so I was basically being paid to attend CC. You can make even more from scholarships if you actually qualify for financial aid!

## 5. The cons

Nothing in life is all sunshine and rainbows. While my CC experience was mostly positive:
- it's hard to make friends, and you'll probably go to different schools after a couple years anyway
- the vibes can be kind of depressing especially if you take night classes
- my CC (SRJC) has good professors and rigor, but some community colleges don't take rigor as seriously as universities
- **networking**: my biggest con. I feel like 2 years at university isn't enough to make as many connections  as I'd like. And you can't really get cool internships. (there are some internship programs for CC students though! I didn't look into it as much as I wish but you should.)



**assist.org is starting to roll out an API... excited to build a tool with this in the future*2:["$","section",null,{"children":["$","$L7",null,{"blogPosts":[{"metadata":{"title":"USC CTF","summary":"my writeup","publishedAt":"2024-11-30"},"slug":"USC","content":"$8"},{"metadata":{"title":"UC Berkeley AI Hackathon","publishedAt":"2024-06-23"},"slug":"berkeleyAI","content":"$9"},{"metadata":{"title":"Bookshelf","publishedAt":"2022-10-03"},"slug":"book-reviews","content":"$a"},{"metadata":{"title":"Two semesters of C++","summary":"Let's bet boldly, knowing that we're playing in a field that's been tilted in our favor by technology, culture, and the spirit of our times.","publishedAt":"2024-05-11"},"slug":"cpp","content":"$b"},{"metadata":{"title":"Intro to cybersecurity class","publishedAt":"2022-05-20"},"slug":"cybersecclass","content":"$c"},{"metadata":{"title":"Deadface CTF","publishedAt":"2024-10-22"},"slug":"deadfacectf","content":"$d"},{"metadata":{"title":"Working part time at a local company","publishedAt":"2024-07-31"},"slug":"first-job","content":"Just finished working part time at Access Ingenuity, a local company for which I was writing software to automate their file and project management. \n\nIt was interesting to be the only person writing code and building internal tools for this company. I learned a lot about writing proper code, as I took it upon myself to make sure I followed good software engineering practices like writing clean/readable code with comments, writing documentation, being responsible about Git and version control, and continuously communicating with the team to make sure the processes were up to date.\n\nI'm grateful for the (very important) experience of teaching myself new skills and practices. \n\nNext stop: joining a company where I can learn from experienced mentors, work with an established codebase, and be closer to tech overall."},{"metadata":{"title":"LinkedIn Games","publishedAt":"2024-12-20"},"slug":"linkedin","content":"If you know me, you know about my LinkedIn games addiction."},{"metadata":{"title":"I love ubuntu","publishedAt":"2024-09-10"},"slug":"linux","content":"$e"},{"metadata":{"title":"Building a lymphoma tracker","publishedAt":"2024-02-01"},"slug":"lymphoma","content":"I don't write about this much, but I've been undergoing treatment for a form of lymphoma for the past couple years. I stand in front of a panel of UVB light for a few minutes, and when the bulbs turn off, I record the remaining lesions into a spreadsheet (a tool I propsed creating myself, which has already helped in identifying better treatment plans).\n\nA while ago I had the idea to get more comprehensive insights, and also automate the tedious counting process using computer vision. Since it's summer now and I have time, here's how I built [the Lymphoma Lens](https://github.com/roshda/lymphoma-lens).  \n\n\n** coming soon I still need to write this"},{"metadata":{"title":"NASA internship recap","publishedAt":"2023-04-02"},"slug":"nasa","content":"$f"},{"metadata":{"title":"Origami tips","publishedAt":"2023-10-12"},"slug":"origamitips","content":"- Practice folding what you like\n- start small and simple\n    - if you don't, you'll fail trying to fold the hard models fast and become discouraged\n        - I think this is good general life advice actually\n- follow inspiring artists on instagram\n    - there's also a big global community on twitter\n- paper type only matters for super complex origami\n\n\nAs with most things, the only way to get better is to actually do it."},{"metadata":{"title":"OrigamiUSA Convention","summary":"","publishedAt":"2023-07-20"},"slug":"origamiusa","content":"The OrigamUSA convention hosted in NYC this weekend was awesome! \n\nI met some of the coolest minds in origami and took 10 classes over 3 days. \n\nSome highlights were:\n\n- meeting my favorite artists: Boice Wong, John Montroll, Brian Chan Meenakshi Mukherji, and Robert Lang \n- learning origami from the special guets, Miyuki Kawamura and Bodo Haag\n- witnessing the Guinness World Record \"largest origami swan\" being folded\n- meeting other awesome folders from across the country\n- seeing an exhibit of some of the best orrigami in the world, and displaying some of my own works at the exhibit\n- grabbing lots of new paper from the shop, courtesy of the scholarship\n\nThis convention has definitely fueled my love for origami even more and I can't wait to fold more :)"},{"metadata":{"title":"Outfit Tracking & Visualization","publishedAt":"2024-06-23"},"slug":"outfits","content":"I started tracking all of my clothes so I could visualize my wear habits [here](https://roshni.streamlit.app). \nFor ease of logging, I use iOS shortcuts to automatically create entries in a google sheet, which is then parsed by the streamlit app to provide live, low maintenance daily updates."},{"metadata":{"title":"Transferring to a UC","summary":"A guide to transferring to a University of California","publishedAt":"2024-09-02"},"slug":"uc-transfer","content":"$10"}]}]}]
6:[["$","meta","0",{"name":"viewport","content":"width=device-width, initial-scale=1"}],["$","meta","1",{"charSet":"utf-8"}],["$","meta","2",{"name":"next-size-adjust"}]]
1:null
