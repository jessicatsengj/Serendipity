import React, { Component } from 'react';
import PageLayout from '../elements/PageLayout';
import ListCards from '../elements/ListCards';
import {Link} from 'react-router-dom';
import {NavLink} from 'react-router-dom';
import TitleIntro from '../elements/ArticleLayouts';
import Progress from '../elements/Progress';
import SimpleCards from '../elements/SimpleCards';
import PicCards from '../elements/PicCards';

class WellGo extends Component {
  render() {
    return (

        <PageLayout>

          <div className="row">
              <div className="two wide column" />
              <div className="twelve wide column writing_bg">
                <TitleIntro
                  title = "WellGO APP"
                  date = "2016/9/23"
                  type = "APP"
                />
              </div>
              <div className="two wide column" />
          </div>

          <div className="row">
              <div className="two wide column" />
              <div className="twelve wide column writing_bg">
                <div className="passage">
                  <blockquote className="ts quote">
                    <p>In commerce, a level playing field is a concept about fairness, not that each player has an equal chance to succeed, but that they all play by the same set of rules. Some government regulations are intended to provide such fairness, since all participants must abide by the same rules. However, they can have the opposite effect. Handicapping might be thought of as the opposite concept, of unequal rules designed to make the outcome of play more equal.</p>
                    <cite>Wikipedia</cite>
                  </blockquote>
                </div>
              </div>
              <div className="two wide column" />
          </div>

          <div className="row">
              <div className="two wide column" />
              <div className="twelve wide column writing_bg">
                <div className="passage passage_content">
                  <h2>Concepts & Method</h2>
                  <p>The unfriendly environment and the scattered information of accessibility are the major pain points for the wheelchair users while going outdoors. It is a pity that the society is lack of an effective platform that can integrate these information, since the wheelchair users are willing to help each other and share infor- mation through community applications. WellGO is a map-based information sharing platform, which benefits the wheelchair users in searching and sharing accessibility information.</p>
                </div>
              </div>
              <div className="two wide column" />
          </div>
          <div className="row">
              <div className="two wide column" />
              <div className="twelve wide column writing_bg">
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
              </div>
              <div className="two wide column" />
          </div>
          <div className="row">
              <div className="two wide column" />
              <div className="twelve wide column writing_bg">
                <div className="passage passage_content">
                  <h2>Process</h2>
                  <Progress />
                  <h4 className="small_topic">1. Define the Target Group</h4>
                  <p>First of all, we discuss the aspects of the topic and what our target group will be. What might be the problems they encounter?</p>
                  <p>Some potential groups were listed including the elders, taxi drivers, the disables, and people living in the rural areas etc. Finally, the wheel chair users were chosen as our target group.</p>
                </div>
              </div>
              <div className="two wide column" />
          </div>
          <div className="row">
              <div className="two wide column" />
              <div className="twelve wide column writing_bg">
                <div className="passage passage_content">
                  <img className="writing_pic" src="/Image/Article_img/find_user.jpg" />
                </div>
              </div>
              <div className="two wide column" />
          </div>
          <div className="row">
              <div className="two wide column" />
              <div className="twelve wide column writing_bg">
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
              </div>
              <div className="two wide column" />
          </div>
          <div className="row">
              <div className="two wide column" />
              <div className="twelve wide column writing_bg">
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
              </div>
              <div className="two wide column" />
          </div>
          <div className="row">
              <div className="two wide column" />
              <div className="twelve wide column writing_bg">
                <div className="passage passage_content">
                  <Progress />
                  <h4 className="small_topic">1. Interview & WAAD</h4>
                  <p>Integrate the data into work activity notes. After discussion, collect and organize them into work activity affinity diagram. We wrote down the needs and wants as well as the problems they encounter, classified them into certain character. So that we can have a clearer goal on which aspect will be more possible for us to improve.</p>
                  <p>Also, we shared some stories of the interviewees with each other, which enables us to arouse more unexpected discoveries and insights.</p>
                </div>
              </div>
              <div className="two wide column" />
          </div>
          <div className="row">
              <div className="two wide column" />
              <div className="twelve wide column writing_bg">
                <div className="passage passage_content">
                  <img className="writing_pic_sm" src="/Image/Article_img/waad1.jpg" />
                  <img className="writing_pic_sm" src="/Image/Article_img/waad2.jpg" />
                </div>
              </div>
              <div className="two wide column" />
          </div>
          <div className="row">
              <div className="two wide column" />
              <div className="twelve wide column writing_bg">
                <div className="passage passage_content">
                  <h4 className="small_topic">2. Developing Personas</h4>
                  <p>We developed three personas by constructing their personality, experience, challenge, expectation and real quotes, allowing us to consider their goals, desires, and limitations.</p>
                  <br />
                  <img className="writing_pic" src="/Image/Article_img/persona.png" />
                </div>
              </div>
              <div className="two wide column" />
          </div>
          <div className="row">
              <div className="two wide column" />
              <div className="twelve wide column writing_bg">
                <div className="passage passage_content">
                  <h4 className="small_topic">3. Defining “HMW (How Might We)” questions</h4>
                  <p><strong>Difficult points: </strong>Taking a devious route due to the limitation of the wheel chair / routes with dynamic obstacles / routes with ambiguous signs / routes with bumping surface</p>
                  <p><strong>Amp up the good: </strong>HMW indicate the proper route?</p>
                  <p><strong>Explore the opposite: </strong>HMW turn the process of traveling on an unfamiliar route into an entertainment?</p>
                  <p><strong>Question an assumption: </strong>HMW search help from people who are familiar with the route?</p>
                </div>
              </div>
              <div className="two wide column" />
          </div>
          <div className="row">
              <div className="two wide column" />
              <div className="twelve wide column writing_bg">
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
              </div>
              <div className="two wide column" />
          </div>
          <div className="row">
              <div className="two wide column" />
              <div className="twelve wide column writing_bg">
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
              </div>
              <div className="two wide column" />
          </div>
          <div className="row">
              <div className="two wide column" />
              <div className="twelve wide column writing_bg">
                <div className="passage passage_content">
                  <h4 className="small_topic">3. Redefine HMW</h4>
                  <p>After brainstorming, we found out too much uncertainty of our storyboard based on the original HMW. Thus, we decided to travel by wheel chairs on the streets ourselves, observing possibilities of the daily lives of the wheel chair users.</p>

                  <p>The new thoughts we came up was: <br /> <strong>We expected our services being immersed naturally into the living perimeters of the wheel chair users, rather than passively search- ing for the scattered information. </strong></p>

                  <p>We redefined our HMW as: <br /> <strong>HMW create accessibility for the wheel-based living perimeters?</strong></p>

                  <p>Our target groups includes: <br /> <strong>a. Wheel chair users <br /> b. Family members of the wheel chair users <br /> c. Mom and Dad who use baby strollers </strong></p>
                </div>
              </div>
              <div className="two wide column" />
          </div>
          <div className="row">
              <div className="two wide column" />
              <div className="twelve wide column writing_bg">
                <div className="passage passage_content">
                  <Progress /> <br />
                  <PicCards
                  cardNum = "1"
                  cardImg = "/Image/Article_img/s1.png"
                  cardDescription = "Hua and Ming decide to go outdoors. Yet, they are troubled with where to go, due to the inconvenience of Hua, who is a wheelchair user." />
                  <PicCards
                  cardNum = "2"
                  cardImg = "/Image/Article_img/s2.png"
                  cardDescription = "Hua discovers an app for the wheel-based living perimeters, which recommends attractions and delicacies around the metro station. She puts her favorite spots into collection, preparing to plan a small trip on weekend." />
                  <PicCards
                  cardNum = "3"
                  cardImg = "/Image/Article_img/s3.png"
                  cardDescription = "On weekend afternoon, they start their trip at the metro station." />
                  <PicCards
                  cardNum = "4"
                  cardImg = "/Image/Article_img/s4.png"
                  cardDescription = "By taking the map as their reference, they decide to head to the popular attraction, the history museum, recommended by the app. It is said that the space planning is friendly and accessible to the wheel chair users." />
                  <PicCards
                  cardNum = "5"
                  cardImg = "/Image/Article_img/s5.png"
                  cardDescription = "By the time they arrive at the museum, the location of the ramp pops up from the app." />
                  <PicCards
                  cardNum = "6"
                  cardImg = "/Image/Article_img/s6.png"
                  cardDescription = "After visiting the museum, they enjoy afternoon tea at a friendly restaurant, recommanded by other users from the app." />
                  <PicCards
                  cardNum = "7"
                  cardImg = "/Image/Article_img/s7.png"
                  cardDescription = "They write down their reviews of today’s trip as they enjoy their meal." />
                  <PicCards
                  cardNum = "8"
                  cardImg = "/Image/Article_img/s8.png"
                  cardDescription = "In the end of their journey, they decide to share their trip with other users." />
                </div>
              </div>
              <div className="two wide column" />
          </div>
          <div className="row">
              <div className="two wide column" />
              <div className="twelve wide column writing_bg">
                <div className="passage passage_content">
                  <Progress />
                    <img className="writing_pic" src="/Image/Article_img/sketch_function.png" />
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
              </div>
              <div className="two wide column" />
          </div>
          <div className="row">
              <div className="two wide column" />
              <div className="twelve wide column writing_bg">
                <div className="passage passage_content">
                  <h4 className="small_topic">2. IA Structure</h4>
                  <img className="writing_pic_sm" src="/Image/Article_img/structure.png" />
                <br /><br /><br />
                </div>
              </div>
              <div className="two wide column" />
          </div>
          <div className="row">
              <div className="two wide column" />
              <div className="twelve wide column writing_bg">
                <div className="passage passage_content">
                  <h4 className="small_topic">3. Lo-fi Paper Prototype</h4>
                  <img className="writing_pic" src="/Image/Article_img/lo-fi.png" />
                <br /><br /><br />
                </div>
              </div>
              <div className="two wide column" />
          </div>
          <div className="row">
              <div className="two wide column" />
              <div className="twelve wide column writing_bg">
                <div className="passage passage_content">
                  <h4 className="small_topic">4. Workflow + Wireframe (ver 1.)</h4>
                  <img className="writing_pic" src="/Image/Article_img/workflow.png" />
                <br /><br /><br />
                </div>
              </div>
              <div className="two wide column" />
          </div>
        </PageLayout>

    );
  }
}

export default WellGo;
