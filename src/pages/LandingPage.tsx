import { FunctionComponent, useEffect } from "react";
import styles from "./LandingPage.module.css";

const LandingPage: FunctionComponent = () => {
  useEffect(() => {
    const scrollAnimElements = document.querySelectorAll(
      "[data-animate-on-scroll]"
    );
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting || entry.intersectionRatio > 0) {
            const targetElement = entry.target;
            targetElement.classList.add(styles.animate);
            observer.unobserve(targetElement);
          }
        }
      },
      {
        threshold: 0.15,
      }
    );

    for (let i = 0; i < scrollAnimElements.length; i++) {
      observer.observe(scrollAnimElements[i]);
    }

    return () => {
      for (let i = 0; i < scrollAnimElements.length; i++) {
        observer.unobserve(scrollAnimElements[i]);
      }
    };
  }, []);

  return (
    <div className={styles.landingPageDiv}>
      <div className={styles.frameDiv}>
        <div className={styles.frameDiv1}>
          <div className={styles.groupDiv}>
            <img
              className={styles.rectangleIcon}
              alt=""
              src="../rectangle-11@2x.png"
            />
            <div className={styles.scrollDownToContinue}>
              Scroll Down to Continue
            </div>
            <img className={styles.groupIcon} alt="" src="../group-97.svg" />
            <b className={styles.tHECOUNTER70Countries1036}>
              <span>{`THE COUNTER: `}</span>
              <span className={styles.span}>70</span>
              <span>{` Countries    `}</span>
              <span className={styles.span}>1036</span>
              <span>{` Cities `}</span>
            </b>
            <div className={styles.leaveYourMarkOnAllOverTh}>
              <p
                className={styles.leaveYourMark}
              >{`Leave your mark on all `}</p>
              <p className={styles.overTheWorld}>{`over the world  `}</p>
            </div>
            <div className={styles.frameDiv2}>
              <div className={styles.navigationBarDiv}>
                <div className={styles.groupDiv1}>
                  <button className={styles.rectangleButton} />
                  <div className={styles.frameDiv3}>
                    <div className={styles.homeDiv}>Home</div>
                  </div>
                  <a className={styles.frameA}>
                    <div className={styles.homeDiv}>Destination</div>
                  </a>
                  <a className={styles.frameA1}>
                    <div className={styles.homeDiv}>About us</div>
                  </a>
                  <a className={styles.tipsA}>Tips</a>
                  <div className={styles.contactDiv}>Contact</div>
                </div>
                <img className={styles.logoIcon} alt="" src="../logo.svg" />
              </div>
            </div>
            <button
              className={styles.buttonPrimaryDefault}
              data-animate-on-scroll
            >
              <div className={styles.rectangleDiv} />
              <div className={styles.primaryDiv}>Read More</div>
            </button>
          </div>
        </div>
      </div>
      <img
        className={styles.basicLocation}
        alt=""
        src="../basic--location.svg"
      />
      <div className={styles.aboutMe}>
        <div className={styles.rectangleDiv1} />
        <h5 className={styles.aboutMeH5}>About Me</h5>
        <img
          className={styles.rectangleIcon1}
          alt=""
          src="../rectangle-33@2x.png"
        />
        <p className={styles.loremIpsumDolorSitAmetCo}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cum in vel
          massa donec sit. Mi ut risus sem malesuada ornare. Ac eu erat eget et
          lorem est arcu. Gravida hendrerit sit blandit semper lacus. Nulla amet
          suscipit sit lectus tortor. Dolor non eget suspendisse leo scelerisque
          sed d.
        </p>
      </div>
      <div className={styles.aTravelerGuide}>
        <div className={styles.malaysiaDiv}>
          <div className={styles.rectangleDiv2} />
          <h4 className={styles.aTravelersGuideToPenang}>
            <p className={styles.leaveYourMark}>
              A traveler’s guide to Penang, Malaysia - Where to
            </p>
            <p
              className={styles.overTheWorld}
            >{`Eat, Drink, Sleep and Explore `}</p>
          </h4>
          <img
            className={styles.rectangleIcon2}
            alt=""
            src="../rectangle-180@2x.png"
          />
          <div className={styles.rectangleDiv3} />
          <p className={styles.loremIpsumDolorSitAmetCo1}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra
            pharetra ac erat commodo non leo eget gravida viverra. Pharetra
            pharetra.
          </p>
          <p className={styles.penangMalaysia}>{`Penang, Malaysia `}</p>
          <p
            className={styles.july152021TipsAndTric}
          >{`July, 15, 2021 - Tips and Tricks `}</p>
          <img className={styles.vectorIcon} alt="" src="../vector.svg" />
          <div className={styles.lineDiv} />
        </div>
        <div className={styles.comment52Div}>Comment (52)</div>
        <img className={styles.vectorIcon1} alt="" src="../vector1.svg" />
      </div>
      <button className={styles.buttonPrimaryDefault1}>
        <div className={styles.rectangleDiv} />
        <div className={styles.primaryDiv1}>Read More</div>
      </button>
      <div className={styles.groupDiv2}>
        <div className={styles.aboutMe1}>
          <div className={styles.rectangleDiv1} />
          <b className={styles.categoriesB}>Categories</b>
        </div>
        <div className={styles.groupDiv3}>
          <div className={styles.otherDiv}>Other</div>
          <div className={styles.div}>(11)</div>
        </div>
        <div className={styles.groupDiv4}>
          <div className={styles.guidesForTraveler}>Guides for traveler</div>
          <div className={styles.div1}>(11)</div>
        </div>
        <div className={styles.groupDiv5}>
          <div className={styles.cuisineDiv}>Cuisine</div>
          <div className={styles.div1}>(11)</div>
        </div>
        <div className={styles.groupDiv6}>
          <div className={styles.beautyOfSeas}>Beauty of Seas</div>
          <div className={styles.div1}>(11)</div>
        </div>
        <div className={styles.groupDiv7}>
          <div className={styles.beautyOfSeas}>Traveling Video</div>
          <div className={styles.div1}>(11)</div>
        </div>
        <div className={styles.groupDiv8}>
          <div className={styles.mountainsDiv}>Mountains</div>
          <div className={styles.div5}>(11)</div>
        </div>
        <div className={styles.frameDiv4}>
          <div className={styles.groupDiv9}>
            <div className={styles.cuisineDiv}>Europe</div>
            <p className={styles.p}>(11)</p>
          </div>
        </div>
        <div className={styles.lineDiv1} />
      </div>
      <div className={styles.travellingCardDiv}>
        <div className={styles.rectangleDiv6} />
        <b className={styles.haveYouReadTheBeachByAle}>
          Have you read The Beach by Alex?
        </b>
        <div className={styles.rectangleDiv7} />
        <div className={styles.georgiaDiv}>
          <p className={styles.leaveYourMark}>Georgia</p>
        </div>
        <p
          className={styles.september172021TipsTr}
        >{`September 17, 2021 - Tips & Tricks`}</p>
        <div className={styles.lineDiv2} />
        <div className={styles.rectangleDiv8} />
        <b className={styles.theWriterActuallyLiveInPh}>
          The writer actually live in Philippines
        </b>
        <div className={styles.rectangleDiv9} />
        <div className={styles.georgiaDiv1}>
          <p className={styles.leaveYourMark}>Georgia</p>
        </div>
        <div
          className={styles.september172021TipsTr1}
        >{`September 17, 2021 - Tips & Tricks`}</div>
        <div className={styles.lineDiv3} />
        <img className={styles.image4Icon} alt="" src="../image-4@2x.png" />
        <img className={styles.vectorIcon2} alt="" src="../vector2.svg" />
        <img className={styles.vectorIcon3} alt="" src="../vector2.svg" />
        <div className={styles.comment52Div1}>Comment (52)</div>
        <p className={styles.comment52P}>Comment (52)</p>
        <img className={styles.vectorIcon4} alt="" src="../vector4.svg" />
        <img className={styles.vectorIcon5} alt="" src="../vector4.svg" />
        <img className={styles.image5Icon} alt="" src="../image-5@2x.png" />
      </div>
      <div className={styles.groupDiv10}>
        <img className={styles.vectorIcon6} alt="" src="../vector6.svg" />
        <div className={styles.rectangleDiv10} />
        <b className={styles.popularPostB}>Popular Post</b>
        <img className={styles.image6Icon} alt="" src="../image-6@2x.png" />
        <img
          className={styles.rectangleIcon3}
          alt=""
          src="../rectangle-390.svg"
        />
        <div className={styles.icbaselineGreaterThanDiv} />
        <b
          className={styles.findingLoveHomeInTbilisi}
        >{`Finding Love & home in Tbilisi, Georgia`}</b>
        <b
          className={styles.findingLoveHomeInTbilisi}
        >{`Finding Love & home in Tbilisi, Georgia`}</b>
        <div className={styles.september172018TipsTr}>
          <p
            className={styles.leaveYourMark}
          >{`September 17, 2018 - Tips & Tricks`}</p>
        </div>
        <div className={styles.rectangleDiv11} />
        <div className={styles.rectangleDiv12} />
        <img className={styles.vectorIcon7} alt="" src="../vector7.svg" />
        <img className={styles.vectorIcon8} alt="" src="../vector8.svg" />
      </div>
      <div className={styles.groupDiv11}>
        <div className={styles.malaysiaDiv1}>
          <div className={styles.rectangleDiv1} />
          <div
            className={styles.findingLoveHomeInTbilisi2}
          >{`Finding Love & home in Tbilisi, Georgia`}</div>
          <div className={styles.rectangleDiv14} />
          <p className={styles.loremIpsumDolorSitAmetCo2}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra
            pharetra ac erat commodo non leo eget gravida viverra. Pharetra
            pharetra.
          </p>
          <div className={styles.penangMalaysiaDiv}>{`Penang, Malaysia `}</div>
          <img className={styles.vectorIcon9} alt="" src="../vector9.svg" />
          <div className={styles.lineDiv4} />
        </div>
        <p
          className={styles.september172021TipsTr2}
        >{`September 17, 2021 - Tips & Tricks`}</p>
        <div className={styles.comment52Div2}>Comment (52)</div>
        <img className={styles.vectorIcon10} alt="" src="../vector10.svg" />
        <img className={styles.image17Icon} alt="" src="../image-17@2x.png" />
      </div>
      <div className={styles.groupDiv12}>
        <div className={styles.rectangleDiv15} />
        <b className={styles.recentPostB}>Recent Post</b>
        <div
          className={styles.findingLoveHomeInTbilisi3}
        >{`Finding Love & home in Tbilisi, Georgia`}</div>
        <div
          className={styles.findingLoveHomeInTbilisi4}
        >{`Finding Love & home in Tbilisi, Georgia`}</div>
        <div
          className={styles.findingLoveHomeInTbilisi5}
        >{`Finding Love & home in Tbilisi, Georgia`}</div>
        <div className={styles.september172018TipsTr1}>
          <p
            className={styles.leaveYourMark}
          >{`September 17, 2018 - Tips & Tricks`}</p>
        </div>
        <div className={styles.september172018TipsTr2}>
          <p
            className={styles.leaveYourMark}
          >{`September 17, 2018 - Tips & Tricks`}</p>
        </div>
        <div className={styles.september172018TipsTr3}>
          <p
            className={styles.leaveYourMark}
          >{`September 17, 2018 - Tips & Tricks`}</p>
        </div>
        <img className={styles.image8Icon} alt="" src="../image-8@2x.png" />
        <img className={styles.image7Icon} alt="" src="../image-7@2x.png" />
        <img className={styles.image9Icon} alt="" src="../image-7@2x.png" />
        <div className={styles.lineDiv5} />
        <div className={styles.lineDiv6} />
      </div>
      <div className={styles.groupDiv13}>
        <div className={styles.aboutMe2}>
          <div className={styles.rectangleDiv1} />
          <b className={styles.gearIUse}>Gear I Use</b>
          <b className={styles.whatsInMyBag}>What’s in My Bag??</b>
        </div>
        <div className={styles.lineDiv7} />
        <div className={styles.unfortunatelyThereIsNoOn}>
          Unfortunately, there is no “one-size-fits-all” when it comes to travel
          packing lists.
        </div>
        <div className={styles.buttonPrimaryDefaultDiv}>
          <div className={styles.rectangleDiv} />
          <div className={styles.primaryDiv2}>View Details</div>
        </div>
      </div>
      <div className={styles.groupDiv14}>
        <img className={styles.rectangleIcon} alt="" src="../image-18@2x.png" />
        <b className={styles.wantMeToPurchaseSomething}>
          <span className={styles.wantSpan}>{`Want `}</span>
          <span>
            {` `}
            <span className={styles.meToPurchase}>Me to Purchase</span>
          </span>
          <span className={styles.wantSpan}>
            {" "}
            Something For You That isn’t available in your Country?
          </span>
        </b>
        <div className={styles.buttonPrimaryDefaultDiv1}>
          <div className={styles.rectangleDiv} />
          <div className={styles.primaryDiv3}>Place Order</div>
        </div>
      </div>
      <div className={styles.groupDiv15}>
        <div className={styles.rectangleDiv19} />
        <b className={styles.productThatIHave}>Product That I Have</b>
        <div
          className={styles.appleMacBookAirMJV2ELLA13}
        >{`Apple MacBook Air  MJV2ELL/A 13-inch Laptop `}</div>
        <div className={styles.div6}>$514</div>
        <div className={styles.div7}>$267</div>
        <div className={styles.div8}>$378</div>
        <div className={styles.iphoneXsCaseIphoneXCase}>
          Iphone Xs case, Iphone X case, SUPCASE
        </div>
        <div className={styles.masterSportBandForAppleWr}>
          Master Sport band for Apple wrist watch
        </div>
        <img className={styles.image13Icon} alt="" src="../image-13@2x.png" />
        <img className={styles.image14Icon} alt="" src="../image-14@2x.png" />
        <img className={styles.image15Icon} alt="" src="../image-15@2x.png" />
        <div className={styles.lineDiv8} />
        <div className={styles.lineDiv9} />
      </div>
      <img className={styles.vectorIcon11} alt="" src="../vector11.svg" />
      <img className={styles.vectorIcon11} alt="" src="../vector11.svg" />
      <div className={styles.groupDiv16}>
        <div className={styles.rectangleDiv20} />
        <div className={styles.rectangleDiv20} />
        <b className={styles.getAwayFromTheMaddeningCr}>
          Get away from the maddening Crowds
        </b>
        <b className={styles.getAwayFromTheMaddeningCr}>
          Get away from the maddening Crowds
        </b>
        <div className={styles.georgiaDiv2}>
          <p className={styles.leaveYourMark}>Georgia</p>
        </div>
        <div className={styles.georgiaDiv2}>
          <p className={styles.leaveYourMark}>Georgia</p>
        </div>
        <div
          className={styles.september172021TipsTr3}
        >{`September 17, 2021 - Tips & Tricks`}</div>
        <div
          className={styles.september172021TipsTr3}
        >{`September 17, 2021 - Tips & Tricks`}</div>
        <div className={styles.lineDiv10} />
        <div className={styles.lineDiv10} />
        <div className={styles.rectangleDiv22} />
        <div className={styles.rectangleDiv22} />
        <b className={styles.matsumotoCastleIsConsidered}>
          Matsumoto Castle is considered one of
        </b>
        <b className={styles.matsumotoCastleIsConsidered}>
          Matsumoto Castle is considered one of
        </b>
        <div className={styles.rectangleDiv24} />
        <div className={styles.rectangleDiv24} />
        <div className={styles.rectangleDiv26} />
        <div className={styles.georgiaDiv4}>
          <p className={styles.leaveYourMark}>Georgia</p>
        </div>
        <div className={styles.georgiaDiv4}>
          <p className={styles.leaveYourMark}>Georgia</p>
        </div>
        <div
          className={styles.september172021TipsTr5}
        >{`September 17, 2021 - Tips & Tricks`}</div>
        <div
          className={styles.september172021TipsTr5}
        >{`September 17, 2021 - Tips & Tricks`}</div>
        <div className={styles.lineDiv12} />
        <div className={styles.lineDiv12} />
        <img className={styles.vectorIcon13} alt="" src="../vector13.svg" />
        <img className={styles.vectorIcon13} alt="" src="../vector13.svg" />
        <img className={styles.vectorIcon15} alt="" src="../vector13.svg" />
        <div className={styles.comment42Div}>Comment (42)</div>
        <div className={styles.comment42Div}>Comment (42)</div>
        <div className={styles.comment32Div}>Comment (32)</div>
        <div className={styles.comment32Div}>Comment (32)</div>
        <img className={styles.vectorIcon16} alt="" src="../vector16.svg" />
        <img className={styles.vectorIcon16} alt="" src="../vector16.svg" />
        <img className={styles.vectorIcon18} alt="" src="../vector16.svg" />
        <img className={styles.vectorIcon18} alt="" src="../vector16.svg" />
        <img className={styles.image19Icon} alt="" src="../image-19@2x.png" />
        <img className={styles.image20Icon} alt="" src="../image-20@2x.png" />
      </div>
      <div className={styles.groupDiv17}>
        <div className={styles.rectangleDiv27} />
        <h2 className={styles.getInTouch}>Get In Touch</h2>
        <div className={styles.buttonPrimaryDefaultDiv2}>
          <div className={styles.rectangleDiv28} />
          <div className={styles.primaryDiv4} />
        </div>
        <div className={styles.buttonPrimaryDefaultDiv3}>
          <div className={styles.rectangleDiv29} />
          <div className={styles.primaryDiv5}>Subscribers</div>
        </div>
        <div className={styles.buttonPrimaryDefaultDiv4}>
          <div className={styles.rectangleDiv30} />
          <div className={styles.primaryDiv6}>
            <p className={styles.leaveYourMark}>
              <span className={styles.kSpan}>105 k</span>
            </p>
            <p className={styles.overTheWorld}>
              <span className={styles.followersSpan}>Followers</span>
            </p>
          </div>
        </div>
        <div className={styles.kFollowersDiv}>
          <p className={styles.leaveYourMark}>
            <b>105 k</b>
          </p>
          <p className={styles.overTheWorld}>
            <span className={styles.followersSpan}>Followers</span>
          </p>
        </div>
        <div className={styles.mSubscribersDiv}>
          <p className={styles.leaveYourMark}>
            <b>1.5 M</b>
          </p>
          <p className={styles.overTheWorld}>
            <span className={styles.kSpan}>Subscribers</span>
          </p>
        </div>
        <div className={styles.kLikesDiv}>
          <p className={styles.leaveYourMark}>
            <b>65.5K</b>
          </p>
          <p className={styles.overTheWorld}>
            <span className={styles.followersSpan}>Likes</span>
          </p>
        </div>
        <div className={styles.buttonPrimaryDefaultDiv5}>
          <div className={styles.rectangleDiv31} />
          <div className={styles.primaryDiv7}>Followers</div>
        </div>
        <img className={styles.vectorIcon20} alt="" src="../vector20.svg" />
        <img
          className={styles.akarIconstwitterFill}
          alt=""
          src="../akariconstwitterfill.svg"
        />
        <img
          className={styles.eiscYoutubeIcon}
          alt=""
          src="../eiscyoutube.svg"
        />
        <img
          className={styles.akarIconsinstagramFill}
          alt=""
          src="../akariconsinstagramfill.svg"
        />
        <div className={styles.kFollowersDiv1}>
          <p className={styles.leaveYourMark}>
            <b>85 k</b>
          </p>
          <p className={styles.overTheWorld}>
            <span className={styles.followersSpan}>Followers</span>
          </p>
        </div>
      </div>
      <div className={styles.groupDiv18}>
        <div className={styles.groupDiv19}>
          <div className={styles.rectangleDiv32} />
          <div className={styles.rectangleDiv32} />
          <b className={styles.manyBuildingsEspeciallyInJ}>
            Many buildings especially in Japan
          </b>
          <div className={styles.georgiaDiv6}>
            <p className={styles.leaveYourMark}>Georgia</p>
          </div>
          <div className={styles.georgiaDiv6}>
            <p className={styles.leaveYourMark}>Georgia</p>
          </div>
          <div
            className={styles.september172021TipsTr7}
          >{`September 17, 2021 - Tips & Tricks`}</div>
          <div
            className={styles.september172021TipsTr7}
          >{`September 17, 2021 - Tips & Tricks`}</div>
          <div className={styles.lineDiv14} />
          <div className={styles.lineDiv14} />
          <div className={styles.rectangleDiv34} />
          <div className={styles.rectangleDiv34} />
          <p className={styles.thereAreRoughly1200Semiwil}>
            There are roughly 1200 semiwild dear
          </p>
          <div className={styles.rectangleDiv36} />
          <div className={styles.rectangleDiv36} />
          <div className={styles.rectangleDiv38} />
          <p className={styles.georgiaP8}>
            <p className={styles.leaveYourMark}>Georgia</p>
          </p>
          <div className={styles.georgiaDiv8}>
            <p className={styles.leaveYourMark}>Georgia</p>
          </div>
          <div
            className={styles.september172021TipsTr9}
          >{`September 17, 2021 - Tips & Tricks`}</div>
          <p
            className={styles.september172021TipsTr10}
          >{`September 17, 2021 - Tips & Tricks`}</p>
          <div className={styles.lineDiv16} />
          <div className={styles.lineDiv16} />
          <img className={styles.vectorIcon21} alt="" src="../vector21.svg" />
          <img className={styles.vectorIcon21} alt="" src="../vector21.svg" />
          <img className={styles.vectorIcon23} alt="" src="../vector21.svg" />
          <div className={styles.comment42Div2}>Comment (42)</div>
          <div className={styles.comment42Div2}>Comment (42)</div>
          <div className={styles.comment32Div2}>Comment (32)</div>
          <div className={styles.comment32Div2}>Comment (32)</div>
          <img className={styles.vectorIcon24} alt="" src="../vector24.svg" />
          <img className={styles.vectorIcon24} alt="" src="../vector24.svg" />
          <img className={styles.vectorIcon26} alt="" src="../vector24.svg" />
          <img className={styles.vectorIcon26} alt="" src="../vector24.svg" />
        </div>
        <img className={styles.image21Icon} alt="" src="../image-21@2x.png" />
        <img className={styles.image22Icon} alt="" src="../image-22@2x.png" />
      </div>
      <div className={styles.eiscFacebookDiv} />
      <div className={styles.groupDiv11}>
        <div className={styles.malaysiaDiv1}>
          <div className={styles.rectangleDiv1} />
          <h3
            className={styles.findingLoveHomeInTbilisi6}
          >{`Finding Love & home in Tbilisi, Georgia`}</h3>
          <div className={styles.rectangleDiv14} />
          <p className={styles.loremIpsumDolorSitAmetCo2}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra
            pharetra ac erat commodo non leo eget gravida viverra. Pharetra
            pharetra.
          </p>
          <div className={styles.penangMalaysiaDiv}>{`Penang, Malaysia `}</div>
          <img className={styles.vectorIcon9} alt="" src="../vector28.svg" />
          <div className={styles.lineDiv4} />
        </div>
        <div
          className={styles.september172021TipsTr11}
        >{`September 17, 2021 - Tips & Tricks`}</div>
        <div className={styles.comment52Div2}>Comment (52)</div>
        <img className={styles.vectorIcon10} alt="" src="../vector24.svg" />
        <img className={styles.image17Icon1} alt="" src="../image-171@2x.png" />
      </div>
      <div className={styles.travellingCardDiv}>
        <div className={styles.rectangleDiv6} />
        <b className={styles.haveYouReadTheBeachByAle}>
          Have you read The Beach by Alex?
        </b>
        <div className={styles.rectangleDiv7} />
        <div className={styles.georgiaDiv}>
          <p className={styles.leaveYourMark}>Georgia</p>
        </div>
        <div
          className={styles.september172021TipsTr12}
        >{`September 17, 2021 - Tips & Tricks`}</div>
        <div className={styles.lineDiv2} />
        <div className={styles.rectangleDiv8} />
        <b className={styles.theWriterActuallyLiveInPh}>
          The writer actually live in Philippines
        </b>
        <div className={styles.rectangleDiv9} />
        <div className={styles.georgiaDiv1}>
          <p className={styles.leaveYourMark}>Georgia</p>
        </div>
        <div
          className={styles.september172021TipsTr1}
        >{`September 17, 2021 - Tips & Tricks`}</div>
        <div className={styles.lineDiv3} />
        <img className={styles.image4Icon} alt="" src="../image-41@2x.png" />
        <img className={styles.vectorIcon2} alt="" src="../vector30.svg" />
        <img className={styles.vectorIcon3} alt="" src="../vector30.svg" />
        <div className={styles.comment52Div1}>Comment (52)</div>
        <div className={styles.comment52Div5}>Comment (52)</div>
        <img className={styles.vectorIcon4} alt="" src="../vector32.svg" />
        <img className={styles.vectorIcon5} alt="" src="../vector32.svg" />
        <img className={styles.image5Icon} alt="" src="../image-51@2x.png" />
      </div>
      <button className={styles.frameButton}>
        <div className={styles.followInstagram}>Follow @ instagram</div>
      </button>
      <div className={styles.groupDiv22}>
        <p className={styles.join98641MonthlyReadersS}>
          <span>{`Join `}</span>
          <span className={styles.span2}>98,641</span>
          <span> Monthly Readers. Subscribe Today!</span>
        </p>
        <input
          className={styles.groupInput}
          type="text"
          placeholder="Email Address"
        />
        <button className={styles.groupButton}>
          <button className={styles.rectangleButton1} />
          <div className={styles.subscribeDiv}>Subscribe</div>
        </button>
      </div>
      <div className={styles.groupDiv23}>
        <div className={styles.lineDiv21} />
        <div className={styles.bottomBarDiv}>
          <div className={styles.rectangleDiv45} />
          <div className={styles.lineDiv22} />
          <div className={styles.groupDiv24}>
            <div className={styles.bodyDiv}>
              <b className={styles.body}>Body</b>
            </div>
            <b className={styles.travelB}>Travel</b>
            <b className={styles.accountB}>Account</b>
            <img
              className={styles.group121}
              alt=""
              src="../group-12-1@2x.png"
            />
            <div className={styles.weAreLocationIndependentBl}>
              <p className={styles.leaveYourMark}>
                We are location independent bloggers, digital influencers, small
                group tour organizers and world travelers with a serious passion
                for the sun, the sea and adventure.
              </p>
              <p className={styles.leaveYourMark}></p>
              <p className={styles.overTheWorld}>
                Eight years and 60-something countries later and we are still on
                the road.
              </p>
            </div>
            <div className={styles.groupDiv25}>
              <div className={styles.myListDiv}>My List</div>
              <div className={styles.myRequestsDiv}>My Requests</div>
              <div className={styles.myCreditsDiv}>My Credits</div>
              <div className={styles.myInfoDiv}>My Info</div>
              <div className={styles.travelingFAQsDiv}>Contact</div>
            </div>
            <div className={styles.groupDiv26}>
              <div className={styles.myListDiv}>Travel</div>
              <div className={styles.myRequestsDiv}>Why Travel</div>
              <div className={styles.myCreditsDiv}>Become a Traveler</div>
              <div className={styles.myInfoDiv}>How Its Works</div>
              <div className={styles.travelingFAQsDiv}>Traveling FAQs</div>
            </div>
            <div className={styles.groupDiv27}>
              <div className={styles.add221BJohnHopeStreetLe}>
                <p className={styles.leaveYourMark}>{`Add: 221B John hope `}</p>
                <p className={styles.leaveYourMark}>Street, Lekki, Lagos,</p>
                <p className={styles.overTheWorld}>Nigeria.</p>
              </div>
              <div className={styles.t2347065078544}>T: +234 706 507 8544</div>
              <div className={styles.eInforedexplorerscomDiv}>
                E: info@redexplorers.com
              </div>
              <div className={styles.wWwwRedexplorerscom}>
                W: www. redexplorers.com
              </div>
            </div>
            <div className={styles.groupDiv28}>
              <div className={styles.redExplorersAllRightsReser}>
                © 2021 RedExplorers. All rights reserved | Terms | Privacy |
                Site Map
              </div>
              <img className={styles.groupIcon1} alt="" src="../group-39.svg" />
              <img
                className={styles.image2Icon}
                alt=""
                src="../image-2@2x.png"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
