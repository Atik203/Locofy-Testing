import { FunctionComponent } from "react";
import RectangleComponent1 from "../components/RectangleComponent1";
import Rectangle from "../components/Rectangle";
import RectangleComponent from "../components/RectangleComponent";
import styles from "./NotLoggedInDesktop.module.css";

const NotLoggedInDesktop: FunctionComponent = () => {
  return (
    <div className={styles.notLoggedInDesktop}>
      <section className={styles.notLoggedInDesktopChild} />
      <RectangleComponent1 />
      <header className={styles.rectangleParent}>
        <Rectangle />
        <img className={styles.wholeIcon} alt="" src="/whole.svg" />
        <div className={styles.rectangleGroup}>
          <div className={styles.rectangle} />
          <img className={styles.groupChild} alt="" src="/group-28.svg" />
          <div className={styles.searchForYour}>
            Search for your favorite groups in ATG
          </div>
        </div>
        <div className={styles.createAccountItsContainer}>
          <span className={styles.createAccount}>{`Create account. `}</span>
          <b className={styles.itsFree}>It’s free!</b>
        </div>
        <img
          className={styles.baselineArrowDropDown24pxIcon}
          alt=""
          src="/baselinearrow-drop-down24px.svg"
        />
      </header>
      <h1 className={styles.computerEngineering}>Computer Engineering</h1>
      <div className={styles.computerEngineersFollow}>
        142,765 Computer Engineers follow this
      </div>
      <div className={styles.line} />
      <div className={styles.line1} />
      <div className={styles.notLoggedInDesktopItem} />
      <div className={styles.allPosts32Parent}>
        <div className={styles.allPosts32}>All Posts(32)</div>
        <div className={styles.article}>Article</div>
        <div className={styles.event}>Event</div>
        <div className={styles.education}>Education</div>
        <div className={styles.job}>Job</div>
      </div>
      <div className={styles.rectangleContainer}>
        <div className={styles.groupItem} />
        <div className={styles.writeAPost}>Write a Post</div>
        <img
          className={styles.baselineArrowDropDown24pxIcon1}
          alt=""
          src="/baselinearrow-drop-down24px1.svg"
        />
      </div>
      <img
        className={styles.outlineLocationOn24px2Icon}
        alt=""
        src="/outlinelocation-on24px-2.svg"
      />
      <div className={styles.notLoggedInDesktopInner} />
      <div className={styles.noidaIndia}>Noida, India</div>
      <img
        className={styles.baselineEdit24pxIcon}
        alt=""
        src="/baselineedit24px.svg"
      />
      <div className={styles.yourLocationWillHelpUsSerParent}>
        <div className={styles.yourLocationWill}>
          Your location will help us serve better and extend a personalised
          experience.
        </div>
        <img
          className={styles.baselineErrorOutline24pxIcon}
          alt=""
          src="/baselineerror-outline24px.svg"
        />
      </div>
      <div className={styles.groupDiv}>
        <div className={styles.groupInner} />
        <div className={styles.joinGroup}>Join Group</div>
        <img
          className={styles.baselineGroupAdd24pxIcon}
          alt=""
          src="/baselinegroup-add24px.svg"
        />
      </div>
      <div className={styles.rectangleParent1}>
        <div className={styles.rectangleDiv} />
        <img
          className={styles.baselineMoreVert24pxIcon}
          alt=""
          src="/baselinemore-vert24px.svg"
        />
        <div className={styles.education1}>🔬️ Education</div>
        <h3 className={styles.taxBenefitsFor}>
          Tax Benefits for Investment under National Pension Scheme launched by
          Government
        </h3>
        <img
          className={styles.rectangleIcon}
          alt=""
          src="/rectangle-5@2x.png"
        />
        <h3 className={styles.iveWorkedIn}>
          I’ve worked in UX for the better part of a decade. From now on, I plan
          to rei…
        </h3>
        <img className={styles.groupChild1} alt="" src="/rectangle-3@2x.png" />
        <div className={styles.sarahWest}>Sarah West</div>
        <div className={styles.group}>
          <img
            className={styles.iconactionvisibility24px}
            alt=""
            src="/iconactionvisibility-24px.svg"
          />
          <div className={styles.kViews}>1.4k views</div>
        </div>
        <textarea className={styles.rectangleTextarea} />
        <div className={styles.rectangleParent2}>
          <div className={styles.groupChild2} />
          <div className={styles.visitWebsite}>Visit Website</div>
        </div>
        <div className={styles.outlineLocationOn24pxParent}>
          <img
            className={styles.outlineLocationOn24pxIcon}
            alt=""
            src="/outlinelocation-on24px.svg"
          />
          <div className={styles.ahmedabadIndia}>Ahmedabad, India</div>
          <div className={styles.fri12Oct}>Fri, 12 Oct, 2018</div>
          <img
            className={styles.baselineToday24pxIcon}
            alt=""
            src="/baselinetoday24px.svg"
          />
        </div>
        <img className={styles.vectorIcon} alt="" src="/vector.svg" />
        <img
          className={styles.baselineMoreVert24pxIcon1}
          alt=""
          src="/baselinemore-vert24px.svg"
        />
        <div className={styles.meetup}>🗓️ Meetup</div>
        <h3
          className={styles.financeInvestment}
        >{`Finance & Investment Elite Social Mixer @Lujiazui`}</h3>
        <img className={styles.groupChild3} alt="" src="/rectangle-51@2x.png" />
        <div className={styles.rectangleParent3}>
          <img
            className={styles.groupChild4}
            alt=""
            src="/rectangle-31@2x.png"
          />
          <div className={styles.ronalJones}>Ronal Jones</div>
        </div>
        <div className={styles.group1}>
          <img
            className={styles.iconactionvisibility24px1}
            alt=""
            src="/iconactionvisibility-24px@2x.png"
          />
          <div className={styles.kViews}>1.4k views</div>
        </div>
        <textarea className={styles.groupChild5} />
        <div className={styles.group2}>
          <img
            className={styles.iconactionvisibility24px1}
            alt=""
            src="/iconactionvisibility-24px@2x.png"
          />
          <div className={styles.kViews}>1.4k views</div>
        </div>
        <img
          className={styles.baselineMoreVert24pxIcon2}
          alt=""
          src="/baselinemore-vert24px@2x.png"
        />
        <div className={styles.job1}>💼️ Job</div>
        <h3 className={styles.softwareDeveloper}>Software Developer</h3>
        <img className={styles.groupChild6} alt="" src="/rectangle-3@2x.png" />
        <div className={styles.josephGray}>Joseph Gray</div>
        <div className={styles.outlineLocationOn24pxGroup}>
          <img
            className={styles.outlineLocationOn24pxIcon1}
            alt=""
            src="/outlinelocation-on24px.svg"
          />
          <div className={styles.noidaIndia1}>Noida, India</div>
          <div className={styles.innovaccerAnalyticsPrivate}>
            Innovaccer Analytics Private Ltd.
          </div>
          <img
            className={styles.baselineToday24pxIcon}
            alt=""
            src="/outlinework-outline24px.svg"
          />
        </div>
        <div className={styles.rectangleParent4}>
          <div className={styles.groupChild7} />
          <div className={styles.applyOnTimesjobs}>Apply on Timesjobs</div>
        </div>
        <RectangleComponent />
        <img className={styles.groupIcon} alt="" src="/group-3.svg" />
        <div className={styles.article1}>✍️ Article</div>
        <h3 className={styles.whatIfFamous}>
          What if famous brands had regular fonts? Meet RegulaBrands!
        </h3>
        <img className={styles.groupChild8} alt="" src="/rectangle-5@2x.png" />
        <h3 className={styles.iveWorkedIn1}>
          I’ve worked in UX for the better part of a decade. From now on, I plan
          to rei…
        </h3>
        <div className={styles.group3}>
          <img
            className={styles.iconactionvisibility24px1}
            alt=""
            src="/iconactionvisibility-24px@2x.png"
          />
          <div className={styles.kViews}>1.4k views</div>
        </div>
        <img className={styles.groupChild9} alt="" src="/rectangle-3@2x.png" />
        <div className={styles.sarthakKamra}>Sarthak Kamra</div>
        <img className={styles.groupChild10} alt="" src="/group-2.svg" />
        <img className={styles.groupChild11} alt="" src="/group-2.svg" />
        <img className={styles.groupChild12} alt="" src="/group-2.svg" />
        <img className={styles.groupChild13} alt="" src="/group-2.svg" />
        <div className={styles.rectangleParent5}>
          <div className={styles.groupChild14} />
          <div className={styles.rectangleParent6}>
            <div className={styles.groupChild15} />
            <div className={styles.edit}>Edit</div>
          </div>
          <div className={styles.rectangleParent7}>
            <div className={styles.groupChild15} />
            <div className={styles.edit}>Report</div>
          </div>
          <div className={styles.rectangleParent8}>
            <div className={styles.groupChild15} />
            <div className={styles.edit}>Option 3</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotLoggedInDesktop;
