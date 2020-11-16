import React, { Component } from "react";
import "./JavaComponent.css";
import data from "../../data/java.json";

class JavaComponent extends Component {
  render() {
    return (
      <>
        <div className="java">
          <div id="menu">
            <a target="_blank" href="#home" className="training">
              Java Training
            </a>
            <div className="leftmenu2">
              <h2 className="spanh2">
                <span className="spanh2">Java Tutorial</span>
              </h2>
            </div>

            {data.map((data, id) => {
              let url=`/javacravings/java/${data.name}`;
              return (
                <div className="leftmenu" key={id}>
                  <a href={url}>{data.name}</a>
                </div>
              );
            })}
            <div className="leftmenu2">
              <h2 className="spanh2">
                <span className="spanh2">Control Statements</span>
              </h2>
            </div>
          </div>
          <div className="onlycontent">
            The history of Java is very interesting. Java was originally
            designed for interactive television, but it was too advanced
            technology for the digital cable television industry at the time.
            The history of Java starts with the Green Team. Java team members
            (also known as Green Team), initiated this project to develop a
            language for digital devices such as set-top boxes, televisions,
            etc. However, it was suited for internet programming. Later, Java
            technology was incorporated by Netscape. The principles for creating
            Java programming were "Simple, Robust, Portable,
            Platform-independent, Secured, High Performance, Multithreaded,
            Architecture Neutral, Object-Oriented, Interpreted, and Dynamic".
            Java was developed by James Gosling, who is known as the father of
            Java, in 1995. James Gosling and his team members started the
            project in the early '90s. James Gosling - founder of java
            Currently, Java is used in internet programming, mobile devices,
            games, e-business solutions, etc. There are given significant points
            that describe the history of Java. 7) Why had they chosen java name
            for Java language? The team gathered to choose a new name. The
            suggested words were "dynamic", "revolutionary", "Silk", "jolt",
            "DNA", etc. They wanted something that reflected the essence of the
            technology: revolutionary, dynamic, lively, cool, unique, and easy
            to spell and fun to say. According to James Gosling, "Java was one
            of the top choices along with Silk". Since Java was so unique, most
            of the team members preferred Java than other names. 8) Java is an
            island of Indonesia where the first coffee was produced (called java
            coffee). It is a kind of espresso bean. Java name was chosen by
            James Gosling while having coffee near his office. 9) Notice that
            Java is just a name, not an acronym. 10) Initially developed by
            James Gosling at Sun Microsystems (which is now a subsidiary of
            Oracle Corporation) and released in 1995. 11) In 1995, Time magazine
            called Java one of the Ten Best Products of 1995. 12) JDK 1.0
            released in(January 23, 1996). After the first release of Java,
            there have been many additional features added to the language. Now
            Java is being used in Windows applications, Web applications,
            enterprise applications, mobile applications, cards, etc. Each new
            version adds the new features in Java. 7) Why had they chosen java
            name for Java language? The team gathered to choose a new name. The
            suggested words were "dynamic", "revolutionary", "Silk", "jolt",
            "DNA", etc. They wanted something that reflected the essence of the
            technology: revolutionary, dynamic, lively, cool, unique, and easy
            to spell and fun to say. According to James Gosling, "Java was one
            of the top choices along with Silk". Since Java was so unique, most
            of the team members preferred Java than other names. 8) Java is an
            island of Indonesia where the first coffee was produced (called java
            coffee). It is a kind of espresso bean. Java name was chosen by
            James Gosling while having coffee near his office. 9) Notice that
            Java is just a name, not an acronym. 10) Initially developed by
            James Gosling at Sun Microsystems (which is now a subsidiary of
            Oracle Corporation) and released in 1995. 11) In 1995, Time magazine
            called Java one of the Ten Best Products of 1995. 12) JDK 1.0
            released in(January 23, 1996). After the first release of Java,
            there have been many additional features added to the language. Now
            Java is being used in Windows applications, Web applications,
            enterprise applications, mobile applications, cards, etc. Each new
            version adds the new features in Java.
          </div>
        </div>
      </>
    );
  }
}

export default JavaComponent;
