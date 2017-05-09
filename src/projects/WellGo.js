import React, { Component } from 'react';
import PageLayout from '../elements/PageLayout';
import ListCards from '../elements/ListCards';
import {Link} from 'react-router-dom';
import {NavLink} from 'react-router-dom';
import TitleIntro from '../elements/ArticleLayouts';
import Progress from '../elements/Progress';
import SimpleCards from '../elements/SimpleCards';
import PicCards from '../elements/PicCards';
import WhiteBlock from '../elements/WhiteBlock';

import FindUser from '../../public/Image/Article_img/wellgo/find_user.jpg';
import Waad1 from '../../public/Image/Article_img/wellgo/waad1.jpg';
import Waad2 from '../../public/Image/Article_img/wellgo/waad2.jpg';
import Persona from '../../public/Image/Article_img/wellgo/persona.png';
import Scene1 from '../../public/Image/Article_img/wellgo/s1.png';
import Scene2 from '../../public/Image/Article_img/wellgo/s2.png';
import Scene3 from '../../public/Image/Article_img/wellgo/s3.png';
import Scene4 from '../../public/Image/Article_img/wellgo/s4.png';
import Scene5 from '../../public/Image/Article_img/wellgo/s5.png';
import Scene6 from '../../public/Image/Article_img/wellgo/s6.png';
import Scene7 from '../../public/Image/Article_img/wellgo/s7.png';
import Scene8 from '../../public/Image/Article_img/wellgo/s8.png';
import SketchFunction from '../../public/Image/Article_img/wellgo/sketch_function.png';
import Structure from '../../public/Image/Article_img/wellgo/structure.png';
import Workflow from '../../public/Image/Article_img/wellgo/workflow.png';
import Lofi from '../../public/Image/Article_img/wellgo/lo-fi.png';
import SketchRevise from '../../public/Image/Article_img/wellgo/sketch_revise.jpeg';
import Hifi from '../../public/Image/Article_img/wellgo/hi-fi.png';
import HifiGif from '../../public/Image/Article_img/wellgo/hifi.gif';
import Fb1 from '../../public/Image/Article_img/wellgo/fb1.gif';
import Fb2 from '../../public/Image/Article_img/wellgo/fb2.gif';
import Fb3 from '../../public/Image/Article_img/wellgo/fb3.gif';
import Fb4 from '../../public/Image/Article_img/wellgo/fb4.gif';
import Fb5 from '../../public/Image/Article_img/wellgo/fb5.gif';

import Build1 from '../../public/Image/Article_img/wellgo/build1.png';
import Build2 from '../../public/Image/Article_img/wellgo/build2.png';
import Build3 from '../../public/Image/Article_img/wellgo/build3.png';
import Build4 from '../../public/Image/Article_img/wellgo/build4.gif';
import Friend1 from '../../public/Image/Article_img/wellgo/friend1.png';
import Friend2 from '../../public/Image/Article_img/wellgo/friend2.png';
import Friend3 from '../../public/Image/Article_img/wellgo/friend3.png';
import Friend4 from '../../public/Image/Article_img/wellgo/friend4.png';
import Check1 from '../../public/Image/Article_img/wellgo/check1.gif';
import Check2 from '../../public/Image/Article_img/wellgo/check2.png';
import Check3 from '../../public/Image/Article_img/wellgo/check3.gif';
import Fin1 from '../../public/Image/Article_img/wellgo/fin1.gif';
import Fin2 from '../../public/Image/Article_img/wellgo/fin2.png';




class WellGo extends Component {
  render() {
    return (

        <PageLayout>

          <WhiteBlock>
                <TitleIntro
                  title = "WellGO APP"
                  date = "2016/9/23"
                  type = "APP"
                />
          </WhiteBlock>

          <WhiteBlock>
                <div className="passage">
                  <blockquote className="ts quote">
                    <p>In commerce, a level playing field is a concept about fairness, not that each player has an equal chance to succeed, but that they all play by the same set of rules. Some government regulations are intended to provide such fairness, since all participants must abide by the same rules. However, they can have the opposite effect. Handicapping might be thought of as the opposite concept, of unequal rules designed to make the outcome of play more equal.</p>
                    <cite>Wikipedia</cite>
                  </blockquote>
                </div>
          </WhiteBlock>

          <WhiteBlock>
                <div className="passage passage_content">
                  <h2>Concepts & Method</h2>
                  <p>The unfriendly environment and the scattered information of accessibility are the major pain points for the wheelchair users while going outdoors. It is a pity that the society is lack of an effective platform that can integrate these information, since the wheelchair users are willing to help each other and share infor- mation through community applications. WellGO is a map-based information sharing platform, which benefits the wheelchair users in searching and sharing accessibility information.</p>
                </div>
          </WhiteBlock>
          <WhiteBlock>
                <div className="passage passage_content">
                  <table className="ts stackable table">
                    <tbody>
                        <tr>
                            <td>Topic</td>
                            <td>WellGO App</td>
                        </tr>
                        <tr>
                            <td>Name</td>
                            <td>Jessica Tseng</td>
                        </tr>
                        <tr>
                            <td>Time</td>
                            <td>Sep, 2016 ~ Jan, 2017</td>
                        </tr>
                        <tr>
                            <td>Type</td>
                            <td>Course project with a group of five</td>
                        </tr>
                        <tr>
                            <td>Form</td>
                            <td>Application</td>
                        </tr>
                        <tr>
                            <td>Goal</td>
                            <td>Solving problems for a specific group, making their world a better place.</td>
                        </tr>
                    </tbody>
                </table>
                </div>
          </WhiteBlock>
          <WhiteBlock>
                <div className="passage passage_content">
                  <h2>Process</h2>
                  <Progress />
                  <h4 className="small_topic">1. Define the Target Group</h4>
                  <p>First of all, we discuss the aspects of the topic and what our target group will be. What might be the problems they encounter?</p>
                  <p>Some potential groups were listed including the elders, taxi drivers, the disables, and people living in the rural areas etc. Finally, the wheel chair users were chosen as our target group.</p>
                </div>
          </WhiteBlock>
          <WhiteBlock>
                <div className="passage passage_content">
                  <img className="writing_pic" src={FindUser} />
                </div>
          </WhiteBlock>
          <WhiteBlock>
                <div className="passage passage_content_sm">
                  <h4 className="small_topic">2. Interview & Observation</h4>
                  <p>The next step is to design the questionnaires. Each of the members should do at least one interview. We opened up a Google document and design the questionaries together. Part of the questionaries are listed below:</p>
                </div>
                <div className="passage passage_content_sm">
                  <div className="ts segment">
                      <strong>Public Transportation</strong>
                      <p>Which of the public transportation do you think is the most friendly?<br />
                      Have you ever encounter difficulties while taking public transportation?<br />
                      Some questions for buses and taxies.</p>
                  </div>
                </div>
                <div className="passage passage_content_sm">
                  <div className="ts segment">
                      <strong>The Preperation</strong>
                      <p>Have you ever encounter difficulties while taking public transportation?<br />
                      Will you go out early according to different destinations and scenarios?</p>
                  </div>
                </div>
          </WhiteBlock>
          <WhiteBlock>
                <div className="passage passage_content">
                  <p>Part of our interviews are listed below:</p>
                </div>
                <div className="passage passage_content_sm">
                  <div className="ts segment">
                      <strong>The Unfriendly Design of the Road Surface</strong>
                      <p>Slopes: Slopes are hard to find beforing entering a building, they are often set at the corner of the building which I should take a devious route to access.<br />
                      Elevators: We should often conquer many stairs before reaching the elevator.</p>
                  </div>
                </div>
                <div className="passage passage_content_sm">
                  <div className="ts segment">
                      <strong>The Preparations Before Going Outdoors</strong>
                      <p>Stations: Often troubled with the insufficient information of the floor layouts. The facts are often different from our imagination.</p>
                  </div>
                </div>
          </WhiteBlock>
          <WhiteBlock>
                <div className="passage passage_content">
                  <Progress />
                  <h4 className="small_topic">1. Interview & WAAD</h4>
                  <p>Integrate the data into work activity notes. After discussion, collect and organize them into work activity affinity diagram. We wrote down the needs and wants as well as the problems they encounter, classified them into certain character. So that we can have a clearer goal on which aspect will be more possible for us to improve.</p>
                  <p>Also, we shared some stories of the interviewees with each other, which enables us to arouse more unexpected discoveries and insights.</p>
                </div>
          </WhiteBlock>
          <WhiteBlock>
                <div className="passage passage_content">
                  <div className="ts two cards">
                    <div className="image"><img width="350px"src={Waad1} /></div>
                    &nbsp;&nbsp;&nbsp;
                    <div className="image"><img width="350px"src={Waad2} /></div>
                  </div>

                </div>
          </WhiteBlock>
          <WhiteBlock>
                <div className="passage passage_content">
                  <h4 className="small_topic">2. Developing Personas</h4>
                  <p>We developed three personas by constructing their personality, experience, challenge, expectation and real quotes, allowing us to consider their goals, desires, and limitations.</p>
                  <br />
                  <img className="writing_pic" src={Persona} />
                </div>
          </WhiteBlock>
          <WhiteBlock>
                <div className="passage passage_content">
                  <h4 className="small_topic">3. Defining “HMW (How Might We)” questions</h4>
                  <p><strong>Difficult points: </strong>Taking a devious route due to the limitation of the wheel chair / routes with dynamic obstacles / routes with ambiguous signs / routes with bumping surface</p>
                  <p><strong>Amp up the good: </strong>HMW indicate the proper route?</p>
                  <p><strong>Explore the opposite: </strong>HMW turn the process of traveling on an unfamiliar route into an entertainment?</p>
                  <p><strong>Question an assumption: </strong>HMW search help from people who are familiar with the route?</p>
                </div>
          </WhiteBlock>
          <WhiteBlock>
                <div className="passage passage_content">
                  <Progress />
                  <h4 className="small_topic">1. Brainstorming the Solutions</h4>
                  <p>We brainstormed many ideas for the app, including features with:</p>
                  <div className="ts stackable five cards">
                    <SimpleCards cardDescription = "Traveling with friends" />
                    <SimpleCards cardDescription = "Reporting obstacles" />
                    <SimpleCards cardDescription = "Q&A community" />
                    <SimpleCards cardDescription = "Pick-up and Drop-off service" />
                    <SimpleCards cardDescription = "AR coordinate" />
                  </div>
                </div>
          </WhiteBlock>
          <WhiteBlock>
                <div className="passage passage_content">
                  <h4 className="small_topic">2. Select Promising Ideas</h4>
                  <p>We cluster the ideas, list constraints, and vote for favorite ideas. Our favourite ideas include:</p>
                  <div className="ts stackable five cards">
                    <SimpleCards cardDescription = "Co-editing" />
                    <SimpleCards cardDescription = "Combining games" />
                    <SimpleCards cardDescription = "Integrated map" />
                    <SimpleCards cardDescription = "Community app" />
                    <SimpleCards cardDescription = "Ingress" />
                  </div>
                </div>
          </WhiteBlock>
          <WhiteBlock>
                <div className="passage passage_content">
                  <h4 className="small_topic">3. Redefine HMW</h4>
                  <p>After brainstorming, we found out too much uncertainty of our storyboard based on the original HMW. Thus, we decided to travel by wheel chairs on the streets ourselves, observing possibilities of the daily lives of the wheel chair users.</p>

                  <p>The new thoughts we came up was: <br /> <strong>We expected our services being immersed naturally into the living perimeters of the wheel chair users, rather than passively search- ing for the scattered information. </strong></p>

                  <p>We redefined our HMW as: <br /> <strong>HMW create accessibility for the wheel-based living perimeters?</strong></p>

                  <p>Our target groups includes: <br /> <strong>a. Wheel chair users <br /> b. Family members of the wheel chair users <br /> c. Mom and Dad who use baby strollers </strong></p>
                </div>
          </WhiteBlock>
          <WhiteBlock>
                <div className="passage passage_content">
                  <Progress /> <br />
                  <PicCards
                  cardNum = "1"
                  cardImg = {Scene1}
                  cardDescription = "Hua and Ming decide to go outdoors. Yet, they are troubled with where to go, due to the inconvenience of Hua, who is a wheelchair user." />
                  <PicCards
                  cardNum = "2"
                  cardImg = {Scene2}
                  cardDescription = "Hua discovers an app for the wheel-based living perimeters, which recommends attractions and delicacies around the metro station. She puts her favorite spots into collection, preparing to plan a small trip on weekend." />
                  <PicCards
                  cardNum = "3"
                  cardImg = {Scene3}
                  cardDescription = "On weekend afternoon, they start their trip at the metro station." />
                  <PicCards
                  cardNum = "4"
                  cardImg = {Scene4}
                  cardDescription = "By taking the map as their reference, they decide to head to the popular attraction, the history museum, recommended by the app. It is said that the space planning is friendly and accessible to the wheel chair users." />
                  <PicCards
                  cardNum = "5"
                  cardImg = {Scene5}
                  cardDescription = "By the time they arrive at the museum, the location of the ramp pops up from the app." />
                  <PicCards
                  cardNum = "6"
                  cardImg = {Scene6}
                  cardDescription = "After visiting the museum, they enjoy afternoon tea at a friendly restaurant, recommanded by other users from the app." />
                  <PicCards
                  cardNum = "7"
                  cardImg = {Scene7}
                  cardDescription = "They write down their reviews of today’s trip as they enjoy their meal." />
                  <PicCards
                  cardNum = "8"
                  cardImg = {Scene8}
                  cardDescription = "In the end of their journey, they decide to share their trip with other users." />
                </div>
          </WhiteBlock>
          <WhiteBlock>
                <div className="passage passage_content">
                  <Progress />
                    <img className="writing_pic" src={SketchFunction} />
                  <br /><br /><br />
                  <h4 className="small_topic">1. Sketch - Brainstorming the Functionality</h4>
                  <strong>a. Focus on the “point”</strong><br />
                  <p className="indent"> How to make the distribution of the surrounding attractions easier to see, and where accessi- ble facilities located.</p>

                  <strong>b. Using map as our main presentation</strong><br />
                  <p className="indent">Map will be the main presentation of other functions, including theme and heat of certain attraction, as well as the metro stations.</p>

                  <strong>c. Information constructed from the crowd source</strong><br />
                  <p className="indent">The process of adding new attractions, posting comments and other information should be easy and convenient.</p>

                  <strong>d. Classified by the theme</strong><br />
                  <p className="indent">Most people arrange their trip by searching for certain theme, which might arouse their inerest traveling to the place.</p>

                  <strong>e. Increasing intention to write a post</strong><br />
                  <p className="indent">Design a system to encourage users build up new attarctions, friendly information and comments.</p>
                </div>
          </WhiteBlock>
          <WhiteBlock>
                <div className="passage passage_content">
                  <h4 className="small_topic">2. IA Structure</h4>
                  <img className="writing_pic_sm" src={Structure} />
                <br /><br /><br />
                </div>
          </WhiteBlock>
          <WhiteBlock>
                <div className="passage passage_content">
                  <h4 className="small_topic">3. Lo-fi Paper Prototype</h4>
                  <img className="writing_pic" src={Lofi} />
                <br /><br /><br />
                </div>
          </WhiteBlock>
          <WhiteBlock>
                <div className="passage passage_content">
                  <h4 className="small_topic">4. Workflow + Wireframe (ver 1.)</h4>
                  <img className="writing_pic" src={Workflow} />
                <br /><br /><br />
                </div>
          </WhiteBlock>
          <WhiteBlock>
                <div className="passage passage_content">
                  <Progress  />
                  <h4 className="small_topic">1. Testing ( I )</h4>
                  <p>We built up the prototype with POP (Prototyping on Paper), imported them into cell phone, and did the user testing on street.</p>
                  <p>We invited two wheel chair users to do the testing. We discovered that the way users search for specific point was different from what we have thought. Both of their life circles were extended based on “restaurants and metro”. Restaurants become the priority, which is a must-do while going outdoors, or maybe it has something to do with the app of friendly restaurants.</p>
                  <p>We considered switching the main focus from travel and entertainment to their daily livings, such as pointing out whether the bank provide accessible slope or not, or marking up the location of friendly ATM.</p>
                </div>
          </WhiteBlock>
          <WhiteBlock>
                <div className="passage passage_content">
                  <h4 className="small_topic">2. Progress Revise</h4>
                  <img className="writing_pic" src={SketchRevise} />
                  <p>After another discussion, we found out a few shortcomings of our app, thus, we made some changes and add a few function for the app.</p>
                  <strong>a. Card</strong><br />
                  <p className="indent">While the app detect that user has been to certain place in a period of time, the card will toggle up from the left, asking whether the user like this place or not, and how they think about the accessibility, adding more information about that place.</p>
                  <strong>b. Adding friendly information</strong><br />
                  <p className="indent">One of the main features of the app is to have users build up information together. Many places are lacked of revelent information. Uses can offer information they know just within a few steps. The more information users offer, the more complete information will be on the app.</p>
                  <strong>c. Reporting unfriendly facilities</strong><br />
                  <p className="indent">If the users encounter unfriendly circumstances, they will be encouraged to report the unfriendly information through our app in an easy way. It starts from selecting facilities, adding loca- tions, write down problems, and taking photos. Then the case will be directly sent to the 1999, which is a line sevice contributed in solving problems for the public, offered by the government.</p>
                </div>
          </WhiteBlock>
          <WhiteBlock>
                <div className="passage passage_content">
                  <Progress  />
                  <h4 className="small_topic">1. Hi-fi Prototype ( I )</h4>
                  <p>We made a more precise UI design on the hi-fi prototype. The part I was responsible for is the “Adding friendly information” and "Reporting unfriendly facilities".</p>
                  <img className="writing_pic" src={Hifi} />
                  <p>On the reporting page, two options will be displayed on the page.</p>
                  <strong>1. Adding friendly information</strong><br />
                  <p className="indent">After entering the “Adding friendly information” page, users can first select the facility they want to add information to. Then, they will be lead to the edit page, adding photos and descriptions on location and content.</p>
                  <strong>2. Reporting unfriendly facilities</strong><br />
                  <p className="indent">If the users choose to "Report unfriendly facilities", they will as well asked to select the facility, add locations, write down problems, and take photos. Then the case will be directly sent to the 1999.</p>
                  <img className="writing_pic_sm" src={HifiGif} />
                </div>
          </WhiteBlock>
          <WhiteBlock>
                <div className="passage passage_content">
                  <h4 className="small_topic">2. Discussion and Revision</h4>
                  <p>After the process of prototyping and testing, we found out several deficiencies from our app. Thus, we went over a series of discussion and revision, making chang- es on three of our main functions.</p>
                  <strong>1. Information Pages</strong><br />
                  <p className="indent">The information page presents not only friendly information but also unfriendly information. They will be seperated by the color green and red.</p>
                  <p className="indent">After tapping on a specific photo, several cards pop up, displaying information of the specific facility. It can be photos from different perpective, also of different descriptions.</p>
                  <strong>2. Reporting Unfriendly Facilities</strong><br />
                  <p className="indent">Attractions and Buildings - The form of reporting unfriendly facilities of attractions and buildings is just like the way users add friendly information to our app. Whether to report unfriendly information to 1999 can be decided by the user, while some users may consider the unfriendly information is not so serious to be reported to 1999.</p>
                  <strong>3. Workflow of the Attraction Feedback Card</strong><br />
                  <p className="indent">After user testing, we found out that the feedback card might sometimes be seen after the user get back home rather than being at the spot. If the user has left the place, they are only able to rate the accessibility and like of the place without offering the related information. Thus, we discussed that the card should disappear if the user has left the place.</p>
                </div>
          </WhiteBlock>
          <WhiteBlock>
                <div className="passage passage_content">
                  <Progress  />
                  <h4 className="small_topic">1. Hi-fi Prototype ( II ) + User Testing</h4>
                  <strong>Function1:  Displaying Road Circumstances / Instant Report</strong><br /><br />
                  <img className="writing_pic" src={Fb1} />
                  <div className="ts segment">
                      <strong>Scenario Description</strong>
                      <p>Hua sees the photo of his wheelchair friends taking a short trip at Sandiaojiao’s lighthouse, considering that he can also start a trip to Sandiaojiao. After arriving at the place, however, he finds out that the slope is quite steep, which is only available for the heavy type wheelchairs. He thinks that, the slope isn’t suitable for friends using the light type wheelchairs.</p>
                  </div>
                  <div className="ts segment">
                      <strong>User’s Review</strong>
                      <p>Wheelchairs should be separated into different types. The reporting process might be a little bit complicated. If the road conditions have improved, the unfriendly sign should be removed.</p>
                  </div>

                </div>
          </WhiteBlock>
          <WhiteBlock>
                <div className="passage passage_content">
                  <strong>Function2:  Friendly Filter on the Map</strong><br /><br />
                  <img className="writing_pic" src={Fb2} />
                  <div className="ts segment">
                      <strong>Scenario Description</strong>
                      <p>During his travel, Hua feels a little bit thirsty, yet not know- ing whether there are accessibility toilet in the lighthouse, he decides not to drink too much.</p>
                  </div>
                  <div className="ts segment">
                      <strong>User’s Review</strong>
                      <p>The fonts of the attraction are too small. It would be better to display the friendly and unfriendly attraction directly at the starting point. The background of every icon should be separated into red and green, with a clear display of the name of attraction.</p>
                  </div>
                </div>
          </WhiteBlock>
          <WhiteBlock>
                <div className="passage passage_content">
                  <strong>Function3:  Reporting Unfriendly Information</strong><br /><br />
                  <img className="writing_pic" src={Fb3} />
                  <div className="ts segment">
                      <strong>Scenario Description</strong>
                      <p>Hua considers the space of the accessible toilet acceptable upon looking at the photo on the information page. Yet, he found out that the design of the door isn’t suitable for the electric wheelchair users while arriving at the place. He adds a photo of the toilet door on WellGO, intending to inform other users about the condition. In addition, he can decide whether to report the incident to 1999. If so, the reporting code will be returned to Hua, in order to follow the improvement process.</p>
                  </div>
                  <div className="ts segment">
                      <strong>User’s Review</strong>
                      <p>Photos are important information for wheelchair users. It is essential to be sure that the photos are of high quality. The location of certain facility should be displayed with the maps and other related information.</p>
                  </div>
                </div>
          </WhiteBlock>
          <WhiteBlock>
                <div className="passage passage_content">
                  <strong>Function4:  Attraction Feedback Card</strong><br /><br />
                  <img className="writing_pic" src={Fb4} />
                  <div className="ts segment">
                      <strong>Scenario Description</strong>
                      <p>When the GPS is fixed on a point for a period of time, the attraction feedback card will pop up, hinting Hua to leave some feedbacks about the trip. If Hua is still at the spot, the app will go a step further, asking him to add some informa- tion that haven’t been build up. If Hua has left, the card will disappear after he rate the accessibility and friendly section.</p>
                  </div>
                </div>
          </WhiteBlock>
          <WhiteBlock>
                <div className="passage passage_content">
                  <strong>Integration</strong><br /><br />
                  <img className="writing_pic" src={Fb5} />
                  <div className="ts segment">
                      <p>During the interview, we discovered that wheelchair users travel together through facebook or line group.They will announce the time, place and number of people. People who want to join the team can add “+1” at the comment. The registration ends once the number of people is full. <br />
                      Members will share their travel experiences, take photos of the friendly and unfriendly facilities, also report the condition to the related department. <br />
                      We expect to shift this community behavior onto WellGO, simplify and systematize the collection and display of information.</p>
                  </div>
                </div>
          </WhiteBlock>
          <WhiteBlock>
                <div className="passage passage_content">
                  <strong>Points to Improve</strong><br /><br />
                  <strong>A clearer view in adding information</strong>
                  <p>a. Turn the common problems into tags, which will be more convenient for users just to select the options and take photos, reducing the complicated steps of typing. <br /><br />
                  b. Be sure the the photo is of good quality. The location of certain facility should be displayed with the maps and other related information. <br /><br />
                  c. Wheelchairs should be separated into the light and heavy type wheelchair.</p><br />

                  <strong>Functions of building up information on road obstacles and and attractions are often confused</strong>
                  <p>a. It is indirect to build information on road obstacles while entering the full screen mode. In addition, users may be confused about which options they should select: Which section should they choose, if they want to build information on the slope at the side door of the Daan Park? <br /><br />
                  b. Back into ver.1, we should add a “Building information” function into the tab bar at the bottom of the app. After entering the “Building information” page, the users can choose whether it is an unfriendly facility in a building or a road obstacle. <br /><br />
                  c. If the road condition has improved, the unfriendly sign should be removed.</p>
                </div>
          </WhiteBlock>
          <WhiteBlock>
                <div className="passage passage_content">
                  <h2>Final Version</h2><br /><br />
                      <p>In our nation, one in every hundred of people are disabled. Among disables, seventy percent of them rely on wheelchairs. In Taiwan, government built up several accessible facilities, yet, not all of them are “accessible”. Wheelchair users desire to go outdoors just like normal people do, but there are still lots of preparation to do beforehand.<br /> Due the scattered information that is difficult to search, and the discovery of the facilities which are far beyond their expectations after reaching the place, wheelchair users find great inconve- nience and anxiety while heading to unfamiliar places. <br />Thus, we expect to build up a platform which allows users to construct an accessible map through their perspectives. Every wheelchair users has their own familiar accessible map. If we put those maps together, a complete accessible map can be constructed, which will benefit every one of them.</p>
                </div>
          </WhiteBlock>
          <WhiteBlock>
                <div className="passage passage_content">
                    <strong>Three Main Functions of WellGO include:</strong><br /><br />
                    <strong>1. Build Information (take photos -- select descriptions -- complete)</strong>
                    <p className="indent">a. After several testing, photos were considered the information that users most rely on.<br /><br />
                    b. After the facilities were selected, users can tap on the description directly, reducing the inconvenience of typing.<br /><br />
                    c. Most users use cell phones with single hand, thus buttons were arranged at the bottom part of the screen.<br /><br />
                    d. Testers point out that there were too many icons. We consider to separate icons into different types, such as space or obstacles.</p><br /><br />
                    <div className="ts four cards">
                      <div className="image"><img width="170px" src={Build1} /></div> &nbsp;&nbsp;&nbsp;&nbsp;
                      <div className="image"><img width="170px" src={Build2} /></div> &nbsp;&nbsp;&nbsp;&nbsp;
                      <div className="image"><img width="170px" src={Build3} /></div> &nbsp;&nbsp;&nbsp;&nbsp;
                      <div className="image"><img width="170px" src={Build4} /></div>
                    </div>
                  </div>
          </WhiteBlock>
          <WhiteBlock>
                <div className="passage passage_content">
                  <strong>2. Check Information (Filters -- Look up information)</strong>
                  <p className="indent">a. Using filters in search for specific facility.<br /><br />
                  b. Functions include add / update information、reporting error<br /><br />
                  c. Still, testers point out that there were too many icons. It might be better to replace them with words.</p><br /><br />
                  <div className="ts four cards">
                    <div className="image"><img width="170px" src={Check1} /></div>&nbsp;&nbsp;&nbsp;&nbsp;
                    <div className="image"><img width="170px" src={Check2} /></div>&nbsp;&nbsp;&nbsp;&nbsp;
                    <div className="image"><img width="170px" src={Check3} /></div>
                  </div>
                </div>
          </WhiteBlock>
          <WhiteBlock>
                <div className="passage passage_content">
                  <strong>3. Friendly Area (Rate Landmarks -- Recommended Friendly Area)</strong>
                  <p className="indent">a. Users can rate for specific location.<br /><br />
                  b. The location icons appear in either red or green according to its rate.<br /><br />
                  c. The friendly area is a concept of complementary. For instance, if a restaurant does not meet the standard of a friendly restaurant only due to the lack of accessible toilet, yet, there are acces- sible toilet at nearby places, we can consider the restaurant part of the friendly area.<br /><br />
                  d. The purpose of WellGO is to transparentize every hidden possibilities. As long as there are accessible toilet nearby, this restaurant can be classified as a recommended restaurant.</p><br /><br />
                    <div className="ts four cards">
                      <div className="image"><img width="170px" src={Friend1} /></div>&nbsp;&nbsp;&nbsp;&nbsp;
                      <div className="image"><img width="170px" src={Friend2} /></div>&nbsp;&nbsp;&nbsp;&nbsp;
                      <div className="image"><img width="170px" src={Friend3} /></div>&nbsp;&nbsp;&nbsp;&nbsp;
                      <div className="image"><img width="170px" src={Friend4} /></div>
                    </div>
                  </div>
          </WhiteBlock>
          <WhiteBlock>
                <div className="passage passage_content">
                  <img className="writing_pic" src={Fin1} />
                  <img className="writing_pic" src={Fin2} />
                  <br /><br />
                </div>
          </WhiteBlock>

        </PageLayout>

    );
  }
}

export default WellGo;
