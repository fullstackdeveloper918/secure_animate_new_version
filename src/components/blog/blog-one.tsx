import React from "react";
import { blog_home_five } from "@/data/blog-data";
import BlogItemTwo from "./blog-item/blog-item-2";
import { useEffect, useState } from "react";
import Link from "next/link";
interface NewsProps {
  id: number;
  title: string;
  date: string;
  content: string;
  external_link: string;
  featured_image: string;
  link:string;
}
export default function BlogOne() {
  const [newsData, setNewsData] = useState<NewsProps[]>([]);
  const [newsLink, setNewsLink] = useState<any>("");
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchBlogData = async () => {
      try {
        const response = await fetch(
          "https://sellmac.cybersify.tech/secure365/wp-json/secure-plugin/v1/news"
        );
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        console.log("fetchBlogData", data);
        setNewsData(data.news);
        setNewsLink(data.link) // Ensure API response structure is correct
      } catch (error) {
        console.error("Error fetching blog data:", error);
      } finally {
        setLoading(false); // Stop loading when fetch is complete
      }
    };
    fetchBlogData();
  }, []);
  console.log("fetchBlogDatasss", newsData);
  const blog_items = [...blog_home_five];
  return (
    <>
        <div id="canvas-container-new"></div>
        <section className="blog-main-new">
        <div className="blog-container">
            <div className="blog-header blog-head-box">
                <h1 className="blog-home-head">Our Blog</h1>
                <p className="blog-home-para">Check the best marketing resources and the latest blogs about our company.</p>
            </div>

            <div className="blog-grid">
                <article className="blog-card">
                    <div className="blog-image">
                        <img src="/images/Chat-live-Apple-Support.jpg" alt="App Support"/>
                        <div className="blog-date">24 Feb 2025</div>
                    </div>
                    <div className="blog-content">
                        <h2>Apple's Software Support for iPhones – How Long?</h2>
                        <p>Apple is renowned for its exceptional software support for older iPhones, setting it apart
                            from competitors in the smartphone market...</p>
                        <a href="https://news.techable.com/apples-software-support-for-iphones-how-long" className="read-more">Read More <i className="fas fa-arrow-right"></i></a>
                    </div>
                </article>

                <article className="blog-card">
                    <div className="blog-image">
                        <img src="/images/wwdc.jpg" alt="WWDC 2024"/>
                        <div className="blog-date">24 Feb 2025</div>
                    </div>
                    <div className="blog-content">
                        <h2>WWDC 2024: The Most Exciting Announcements from Apple</h2>
                        <p>Apple's annual Worldwide Developers Conference (WWDC) on June 10, 2024, was an absolute treat
                            for tech enthusiasts like myself...</p>
                        <a href="https://news.techable.com/wwdc-2024-the-most-exciting-announcements-from-apple" className="read-more">Read More <i className="fas fa-arrow-right"></i></a>
                    </div>
                </article>

                <article className="blog-card">
                    <div className="blog-image">
                        <img src="/images/ios-18-concept.webp" alt="iOS 18"/>
                        <div className="blog-date">24 Feb 2025</div>
                    </div>
                    <div className="blog-content">
                        <h2>Which iPhones Will Get iOS 18? Here's What I Found Out!</h2>
                        <p>With the excitement building around Apple's upcoming iOS 18, many of us are wondering if our
                            trusty iPhones will cut this next big update...</p>
                        <a href="https://news.techable.com/which-iphones-will-get-ios-18-heres-what-i-found-out" className="read-more">Read More <i className="fas fa-arrow-right"></i></a>
                    </div>
                </article>

                <article className="blog-card">
                    <div className="blog-image">
                        <img src="/images/macOS-Sequoia-iPhone-Mirroring.webp" alt="macOS Sequoia"/>
                        <div className="blog-date">24 Feb 2025</div>
                    </div>
                    <div className="blog-content">
                        <h2>Breaking Ground: What's in Store with macOS Sequoia</h2>
                        <p>Hey there, Apple aficionados! Get ready to dive into the lush forest of innovation because
                            Apple has just unveiled its newest gem: macOS...</p>
                        <a href="https://news.techable.com/breaking-ground-whats-in-store-with-macos-sequoia" className="read-more">Read More <i className="fas fa-arrow-right"></i></a>
                    </div>
                </article>
            </div>

            <div className="load-more">
                <button className="connect-btn"><a href="https://news.techable.com/">Read All Articles <i className="fas fa-arrow-right"></i></a></button>
            </div>
        </div>
    </section>

    </>
  );
}