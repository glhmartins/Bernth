import style from './css/PrivacyPolicy.module.css'
import {Link} from 'react-router-dom'

function PrivacyPolicy(){
    return(
        <div className={style.privacyPolicy}>
            <h1>Privacy policy</h1>

            <section>
                <p><br/>Bernth.at is serious about protecting your online privacy. This Privacy Statement explains our views and practices concerning privacy, and how they may pertain to you as a user of our website.</p>
                <br/>
                <p>You or Your means you as a participant in or as a user of the Bernth.at website. We or Our or Us means Bernth.at. Our site means Bernth.at.</p>
                <br/>
            </section>

            {/* Section 1 */}
            <section>
                <h2>Section 1 - What we do with your information</h2>
                <br/>
                <p>When you purchase something from our site, as part of the buying and selling process, we collect the personal information you give us such as your name, address and email address. This enables us to both fulfill and support the products you purchase.</p>
                <br/>
                <h3>Who is responsible for the data collection on this website?</h3>
                <br/>
                <p>The data collected on this website are processed by the website operator:<br/>
                    <br/>
                    Online Music Lessons Vienna GnbR<br/>
                    Goldeggasse 19/1/19<br/>
                    1040 Vienna<br/>
                    Austria<br/>
                    <br/>
                    E-Mail: <Link className={style.link} to="mailto:contact@bernth.at">contact@bernth.at</Link>
                </p>
                <br/>
                <h3>How do we collect your data?</h3>
                <br/>
                <p>
                    Some data are collected when you provide it to us. This could, for example, be data you enter on a contact form.
                    <br/><br/>
                    Other data are collected automatically by our IT systems when you visit the website. These data are primarily technical data such as the browser and operating system you are using or when you accessed the page. These data are collected automatically as soon as you enter our website.
                </p>
                <br/>
                <h3>What do we use your data for?</h3>
                <br/>
                <p>Part of the data is collected to ensure the proper functioning of the website. Other data can be used to analyze how visitors use the site.</p>
                <br/>
                <h3>What rights do you have regarding your data?</h3>
                <br/>
                <p>
                    You always have the right to request information about your stored data, its origin, its recipients, and the purpose of its collection at no charge. You also have the right to request that it be corrected, blocked, or deleted. You can contact us at any time using the address given in the legal notice if you have further questions about the issue of privacy and data protection. You may also, of course, file a complaint with the competent regulatory authorities.
                    <br/><br/>
                    <Link className={style.link} to="mailto:contact@bernth.at">contact@bernth.at</Link>
                </p>
                <br/>
                <h3>Email marketing</h3>
                <br/>
                <p>With your permission, we may send you emails about new products, free and premium content (i.e. blog posts, YouTube videos, reports/whitepapers, etc.), and special events.</p>
                <br/>
            </section>

            {/* Section 2 */}
            <section>
                <h2>Section 2 - Consent</h2>
                <br/>
                <p>When you provide us with personal information to complete a transaction, verify your credit card, place an order, arrange for a delivery or return a purchase, we imply that you consent to our collecting it and using it for that specific reason only.</p>
                <br/>
                <p>If we ask for your personal information for a secondary reason (i.e. newsletter subscription and marketing messages), we will ask you directly for your expressed consent and provide you with an opportunity to withdraw your consent.</p>
                <br/>
                <p>You may withdraw your consent at any time by clicking on an “unsubscribe” link which is offered at the bottom of every email we send.</p>
                <br/>
                <p>You may also withdraw your consent anytime, by contacting us at contact@bernth.at.</p>
                <br/>
            </section>

            {/* Section 3 */}
            <section>
                <h2>Section 3 - Disclosure</h2>
                <br/>
                <p>We may disclose your personal information if we are required by law to do so or if you violate our Terms of Service. Also, if our site is acquired or merged with another company, your information may be transferred to the new owners so that they may continue to sell and support our products and services.</p>
                <br/>
                <p>IMPORTANT: We do not sell, rent or otherwise disclose your personal information to any third parties, including but not limited to advertisers, strategic partners or vendors. Again, we take your privacy very seriously.</p>
                <br/>
            </section>

            {/* Section 4 */}
            <section>
                <h2>Section 4 - Data Storage & Shop</h2>
                <br/>
                <p>Our shopping cart solution is hosted and managed by Digistore24. They provide us with the online e-commerce platform that allows us to sell our products and services to you.</p>
                <br/>
                <p>Your data is stored through Digistore24's data storage, databases and the general Digistore24 application. They store your data on a secure server behind a firewall.</p>
                <br/>
                <p>Payment: If you choose a direct payment gateway to complete your purchase, then Digistore24 stores your credit card data. Your purchase transaction data is stored only as long as is necessary to complete your purchase transaction. After that is complete, your purchase transaction information is deleted.</p>
                <br/>
                <p>All direct payment gateways adhere to the standards set by PCI-DSS as managed by the PCI Security Standards Council, which is a joint effort of brands like Visa, MasterCard, American Express and Discover.</p>
                <br/>
                <p>PCI-DSS requirements help ensure the secure handling of credit card information by our store and its service providers.</p>
                <br/>
                <p>NOTE: At no point during the transaction does Bernd Brodträger e.U. (or bernth.at) take custody or store your credit card information. This is process is monitored and managed by Digistore24.</p>
                <br/>
                <p>For more information read the privacy policy from Digistore24:  
                    <Link className={style.link} to="https://www.digistore24.com/page/privacy?language=en"> https://www.digistore24.com/page/privacy?language=en</Link></p>
                <br/>
            </section>

            {/* Section 5 */}
            <section>
                <h2>Section 5 - Third Party Services</h2>
                <br/>
                <p>In general, the third-party providers used by us will only collect, use and disclose your information to the extent necessary to allow them to perform the services they provide to us.<br/>
                    However, certain third-party service providers, such as payment gateways and other payment transaction processors, have their own privacy policies in respect to the information we are required to provide to them for your purchase-related transactions.</p>
                <br/>
                <p>For these providers, we recommend that you read their privacy policies so you can understand the manner in which your personal information will be handled by these providers.<br/>
                    In particular, remember that certain providers may be located in or have facilities that are located a different jurisdiction than either you or us. So if you elect to proceed with a transaction that involves the services of a third-party service provider, then your information may become subject to the laws of the jurisdiction(s) in which that service provider or its facilities are located.</p>
                <br/>
                <p>Links: When you click on links on our store, they may direct you away from our site. We are not responsible for the privacy practices of other sites and encourage you to read their privacy statements.</p>
                <br/>
            </section>

            {/* Section 6 */}
            <section>
                <h2>Section 6 - Security</h2>
                <br/>
                <p>To protect your personal information, we take reasonable precautions and follow industry best practices to make sure it is not inappropriately lost, misused, accessed, disclosed, altered or destroyed.</p>
                <br/>
                <h3>Revocation of your consent to the processing of your data</h3>
                <br/>
                <p>Many data processing operations are only possible with your express consent. You may revoke your consent at any time with future effect. An informal email making this request is sufficient. The data processed before we receive your request may still be legally processed.</p>
                <br/>
                <h3>SSL or TLS encryption</h3>
                <br/>
                <p>
                    This site uses SSL or TLS encryption for security reasons and for the protection of the transmission of confidential content, such as the inquiries you send to us as the site operator. You can recognize an encrypted connection in your browser's address line when it changes from “http://” to “https://” and the lock icon is displayed in your browser's address bar.
                    <br/><br/>
                    If SSL or TLS encryption is activated, the data you transfer to us cannot be read by third parties.
                </p>
                <br/>
                <h3>Information, blocking, deletion</h3>
                <br/>
                <p>As permitted by law, you have the right to be provided at any time with information free of charge about any of your personal data that is stored as well as its origin, the recipient and the purpose for which it has been processed. You also have the right to have this data corrected, blocked or deleted. You can contact us at any time using the address given in our legal notice if you have further questions on the topic of personal data.</p>
                <br/>
            </section>

            {/* Section 7 */}
            <section>
                <h2>Section 7 - Cookies</h2>
                <br/>
                <p>Some of our web pages use cookies. Cookies do not harm your computer and do not contain any viruses. Cookies help make our website more user-friendly, efficient, and secure. Cookies are small text files that are stored on your computer and saved by your browser.</p>
                <br/>
                <p>Most of the cookies we use are so-called “session cookies.” They are automatically deleted after your visit. Other cookies remain in your device's memory until you delete them. These cookies make it possible to recognize your browser when you next visit the site.</p>
                <br/>
                <p>You can configure your browser to inform you about the use of cookies so that you can decide on a case-by-case basis whether to accept or reject a cookie. Alternatively, your browser can be configured to automatically accept cookies under certain conditions or to always reject them, or to automatically delete cookies when closing your browser. Disabling cookies may limit the functionality of this website.</p>
                <br/>
                <p>Cookies which are necessary to allow electronic communications or to provide certain functions you wish to use (such as the shopping cart) are stored pursuant to Art. 6 paragraph 1, letter f of DSGVO. The website operator has a legitimate interest in the storage of cookies to ensure an optimized service provided free of technical errors. If other cookies (such as those used to analyze your surfing behavior) are also stored, they will be treated separately in this privacy policy.</p>
                <br/>
                <p>For more information about cookies read our 
                    <Link className={style.link} to="http://www.bernth.at/cookie-policy/"> Cookie Policy</Link></p>
                <br/>
            </section>

            {/* Section 8 */}
            <section>
                <h2>Section 8 - Age of consent</h2>
                <br/>
                <p>By using this site, you represent that you are at least the age of majority in your state or province of residence, or that you are the age of majority in your state or province of residence and you have given us your consent to allow any of your minor dependents to use this site.</p>
                <br/>
            </section>

            {/* Section 9 */}
            <section>
                <h2>Section 9 - Vimeo</h2>
                <br/>
                <p>Our website uses features provided by the Vimeo video portal. This service is provided by Vimeo Inc., 555 West 18th Street, New York, New York 10011, USA.</p>
                <br/>
                <p>If you visit one of our pages featuring a Vimeo plugin, a connection to the Vimeo servers is established. Here the Vimeo server is informed about which of our pages you have visited. In addition, Vimeo will receive your IP address. This also applies if you are not logged in to Vimeo when you visit our website or do not have a Vimeo account. The information is transmitted to a Vimeo server in the US, where it is stored.</p>
                <br/>
                <p>If you are logged in to your Vimeo account, Vimeo allows you to associate your browsing behavior directly with your personal profile. You can prevent this by logging out of your Vimeo account.</p>
                <br/>
                <p>For more information on how to handle user data, please refer to the Vimeo Privacy Policy at https://vimeo.com/privacy.</p>
                <br/>
            </section>

            {/* Section 10 */}
            <section>
                <h2>Section 10 - Youtube</h2>
                <br/>
                <p>Our website uses plugins from YouTube, which is operated by Google. The operator of the pages is YouTube LLC, 901 Cherry Ave., San Bruno, CA 94066, USA.</p>
                <br/>
                <p>If you visit one of our pages featuring a YouTube plugin, a connection to the YouTube servers is established. Here the YouTube server is informed about which of our pages you have visited.</p>
                <br/>
                <p>If you're logged in to your YouTube account, YouTube allows you to associate your browsing behavior directly with your personal profile. You can prevent this by logging out of your YouTube account.</p>
                <br/>
                <p>YouTube is used to help make our website appealing. This constitutes a justified interest pursuant to Art. 6 (1) (f) DSGVO.</p>
                <br/>
                <p>Further information about handling user data, can be found in the data protection declaration of YouTube under https://www.google.de/intl/de/policies/privacy.</p>
                <br/>
            </section>

            {/* Section 11 */}
            <section>
                <h2>Section 11 - Facebook Pixel</h2>
                <br/>
                <p>Our website measures conversions using visitor action pixels from Facebook, Facebook Inc., 1601 S. California Ave, Palo Alto, CA 94304, USA (“Facebook”).</p>
                <br/>
                <p>These allow the behavior of site visitors to be tracked after they click on a Facebook ad to reach the provider's website. This allows an analysis of the effectiveness of Facebook advertisements for statistical and market research purposes and their future optimization.</p>
                <br/>
                <p>The data collected is anonymous to us as operators of this website and we cannot use it to draw any conclusions about our users' identities. However, the data are stored and processed by Facebook, which may make a connection to your Facebook profile and which may use the data for its own advertising purposes, as stipulated in the Facebook privacy policy. This will allow Facebook to display ads both on Facebook and on third-party sites. We have no control over how this data is used.</p>
                <br/>
                <p>Check out Facebook's privacy policy to learn more about protecting your privacy: https://www.facebook.com/about/privacy/.</p>
                <br/>
                <p>You can also deactivate the custom audiences remarketing feature in the Ads Settings section at https://www.facebook.com/ads/preferences/?entry_product=ad_settings_screen. You will first need to log into Facebook.</p>
                <br/>
                <p>If you do not have a Facebook account, you can opt out of usage-based advertising from Facebook on the website of the European Interactive Digital Advertising Alliance: http://www.youronlinechoices.com/de/praferenzmanagement/.</p>
                <br/>
            </section>

            {/* Section 12 */}
            <section>
                <h2>Section 12 - Google AdWords and Google Conversion Tracking</h2>
                <br/>
                <p>This website uses Google AdWords. AdWords is an online advertising program from Google Inc., 1600 Amphitheater Parkway, Mountain View, CA 94043, United States (“Google”).</p>
                <br/>
                <p>As part of Google AdWords, we use so-called conversion tracking. When you click on an ad served by Google, a conversion tracking cookie is set. Cookies are small text files that your internet browser stores on your computer. These cookies expire after 30 days and are not used for personal identification of the user. Should the user visit certain pages of the website and the cookie has not yet expired, Google and the website can tell that the user clicked on the ad and proceeded to that page.</p>
                <br/>
                <p>Each Google AdWords advertiser has a different cookie. Thus, cookies cannot be tracked using the website of an AdWords advertiser. The information obtained using the conversion cookie is used to create conversion statistics for the AdWords advertisers who have opted for conversion tracking. Customers are told the total number of users who clicked on their ad and were redirected to a conversion tracking tag page. However, advertisers do not obtain any information that can be used to personally identify users. If you do not want to participate in tracking, you can opt-out of this by easily disabling the Google Conversion Tracking cookie by changing your browser settings. In doing so, you will not be included in the conversion tracking statistics.</p>
                <br/>
                <p>Conversion cookies are stored based on Art. 6 (1) (f) DSGVO. The website operator has a legitimate interest in analyzing user behavior to optimize both its website and its advertising.</p>
                <br/>
                <p>For more information about Google AdWords and Google Conversion Tracking, see the Google Privacy Policy: https://www.google.de/policies/privacy/.</p>
                <br/>
                <p>You can configure your browser to inform you about the use of cookies so that you can decide on a case-by-case basis whether to accept or reject a cookie. Alternatively, your browser can be configured to automatically accept cookies under certain conditions or to always reject them, or to automatically delete cookies when closing your browser. Disabling cookies may limit the functionality of this website.</p>
                <br/>
            </section>

            {/* Section 13 */}
            <section>
                <h2>Section 13 - Google Analytics</h2>
                <br/>
                <p>
                    This website uses Google Analytics, a web analytics service. It is operated by Google Inc., 1600 Amphitheatre Parkway, Mountain View, CA 94043, USA.
                    <br/><br/>
                    Google Analytics uses so-called “cookies”. These are text files that are stored on your computer and that allow an analysis of the use of the website by you. The information generated by the cookie about your use of this website is usually transmitted to a Google server in the USA and stored there.
                    <br/><br/>
                    Google Analytics cookies are stored based on Art. 6 (1) (f) DSGVO. The website operator has a legitimate interest in analyzing user behavior to optimize both its website and its advertising.
                </p>
                <br/>
                <h3>IP anonymization</h3>
                <br/>
                <p>We have activated the IP anonymization feature on this website. Your IP address will be shortened by Google within the European Union or other parties to the Agreement on the European Economic Area prior to transmission to the United States. Only in exceptional cases is the full IP address sent to a Google server in the US and shortened there. Google will use this information on behalf of the operator of this website to evaluate your use of the website, to compile reports on website activity, and to provide other services regarding website activity and Internet usage for the website operator. The IP address transmitted by your browser as part of Google Analytics will not be merged with any other data held by Google.</p>
                <br/>
                <h3>Browser plugin</h3>
                <br/>
                <p>You can prevent these cookies being stored by selecting the appropriate settings in your browser. However, we wish to point out that doing so may mean you will not be able to enjoy the full functionality of this website. You can also prevent the data generated by cookies about your use of the website (incl. your IP address) from being passed to Google, and the processing of these data by Google, by downloading and installing the browser plugin available at the following link: https://tools.google.com/dlpage/gaoptout?hl=en.</p>
                <br/>
                <h3>Objecting to the collection of data</h3>
                <br/>
                <p>
                    You can prevent the collection of your data by Google Analytics by clicking on the following link. An opt-out cookie will be set to prevent your data from being collected on future visits to this site:
                    <br/><br/>
                    <Link className={style.link}> Click here to opt-out</Link>
                    <br/><br/>
                    For more information about how Google Analytics handles user data, see Google's privacy policy: https://support.google.com/analytics/answer/6004245?hl=en.
                </p>
                <br/>
                <h3>Outsourced data processing</h3>
                <br/>
                <p>We have entered into an agreement with Google for the outsourcing of our data processing and fully implement the strict requirements of the Austrian data protection authorities when using Google Analytics.</p>
                <br/>
                <h3>Demographic data collection by Google Analytics</h3>
                <br/>
                <p>This website uses Google Analytics' demographic features. This allows reports to be generated containing statements about the age, gender, and interests of site visitors. This data comes from interest-based advertising from Google and third-party visitor data. This collected data cannot be attributed to any specific individual person. You can disable this feature at any time by adjusting the ads settings in your Google account or you can forbid the collection of your data by Google Analytics as described in the section “Refusal of data collection”.</p>
                <br/>
            </section>

            {/* Section 14 */}
            <section>
                <h2>Section 14 - Google Tag Manager</h2>
                <br/>
                <p>This website uses Google Tag Manager, a web analytics service. It is operated by Google Inc., 1600 Amphitheatre Parkway, Mountain View, CA 94043, USA.<br/>
                    For more information about how Google Analytics handles user data, see Google's privacy policy: https://www.google.com/analytics/tag-manager/use-policy/.</p>
                <br/>
                <p><Link className={style.link}> Click here to opt-out.</Link></p>
                <br/>
            </section>

            {/* Section 15 */}
            <section>
                <h2>Section 15 - Server log files</h2>
                <br/>
                <p>The website provider automatically collects and stores information that your browser automatically transmits to us in “server log files”. These are:</p>
                <br/>
                <ul>
                    <li>Browser type and browser version</li>
                    <li>Operating system used</li>
                    <li>Referrer URL</li>
                    <li>Host name of the accessing computer</li>
                    <li>Time of the server request</li>
                    <li>IP address</li>
                </ul>
                <br/>
                <p>These data will not be combined with data from other sources.</p>
                <br/>
                <p>The basis for data processing is Art. 6 (1) (b) DSGVO, which allows the processing of data to fulfill a contract or for measures preliminary to a contract.</p>
                <br/>
            </section>

            {/* Section 16 */}
            <section>
                <h2>Section 16 - Newsletter (Klick-Tipp)</h2>
                <br/>
                <p>This website uses the services of Klick-Tipp to send newsletters. This service is provided by Klick-Tipp Limited, 15 Cambridge Court, 210 Shepherd's Bush Road, London W6 7NJ, Great Britain</p>
                <br/>
                <p>Klick-Tipp is a service which organizes and analyzes the distribution of newsletters. If you provide data (e.g. your email address) to subscribe to our newsletter, it will be stored on Klick-Tipp servers in the United Kingdom.</p>
                <br/>
                <p>We use Klick-Tipp to analyze our newsletter campaigns. When you open an email sent by Klick-Tipp, a file included in the email (called a web beacon) connects to Klick-Tipp servers in the United Kingdom. This allows us to determine if a newsletter message has been opened and which links you click on. In addition, technical information is collected (e.g. time of retrieval, IP address, browser type, and operating system). This information cannot be assigned to a specific recipient. It is used exclusively for the statistical analysis of our newsletter campaigns. The results of these analyses can be used to better tailor future newsletters to your interests.</p>
                <br/>
                <p>If you do not want your usage of the newsletter to be analyzed by Klick-Tipp, you will have to unsubscribe from the newsletter. For this purpose, we provide a link in every newsletter we send. You can also unsubscribe from the newsletter directly on the website.</p>
                <br/>
                <p>Data processing is based on Art. 6 (1) (a) DSGVO. You may revoke your consent at any time by unsubscribing to the newsletter. The data processed before we receive your request may still be legally processed.</p>
                <br/>
                <p>The data provided when registering for the newsletter will be used to distribute the newsletter until you cancel your subscription when said data will be deleted from our servers and those of Klick-Tipp. Data we have stored for other purposes (e.g. email addresses for the members area) remains unaffected.</p>
                <br/>
                <p>For details, see the Klick-Tipp privacy policy at 
                    <Link className={style.link} to="https://www.klick-tipp.com/datenschutzerkl%C3%A4rung"> https://www.klick-tipp.com/datenschutzerkl%C3%A4rung</Link></p>
                <br/>
            </section>

            {/* Section 17 */}
            <section>
                <h2>Section 17 - Zapier</h2>
                <br/>
                <p>243 Buena Vista Avenue<br/>
                    Suite 508<br/>
                    Sunnyvale, CA 94086<br/>
                    United States<br/>
                </p>
                <br/>
                <p>Zapier allows you to integrate and create commands for various online third-party services (“Third-Party Services”). In order to take advantage of this feature, you may need to authenticate, register for or log into Third-Party Services through the Service or on the websites of their respective providers.</p>
                <br/>
                <p>For Zapier's privacy policy, just click here: 
                    <Link className={style.link} to="https://zapier.com/privacy/"> https://zapier.com/privacy/</Link>
                </p>
                <br/>
            </section>

            {/* Section 18 */}
            <section>
                <h2>Section 18 - Wufoo</h2>
                <br/>
                <p>SurveyMonkey Europe UC<br/>
                    2nd Floor, 2 Shelbourne Buildings,<br/>
                    Shelbourne Road, Dublin, Ireland<br/>
                </p>
                <br/>
                <p>Wufoo is a service which analyzes data provided by every user who fills out a Wufoo online-form. If you provide data (e.g. your email address), it will be stored on SurveyMonkey Europe servers in Ireland.</p>
                <br/>
                <p>
                    For more information on how to handle user data, please refer to the Wufoo / SurveyMonkey Privacy Policy at 
                    <Link className={style.link} to="https://de.surveymonkey.com/mp/legal/privacy-policy/"> https://de.surveymonkey.com/mp/legal/privacy-policy/</Link>
                </p>
                <br/>
            </section>

            {/* Section 19 */}
            <section>
                <h2>Section 19 - EZ-Player</h2>
                <br/>
                <p>Next Generation Marketing FZE</p>
                <br/>
                <p>
                    Business Center, Al Shmookh Building<br/>
                    UAQ Free Trade Zone, Floor 1<br/>
                    Umm Al Quwain, U.A.E.<br/>
                    P.O. Box 7073<br/>
                </p>
                <br/>
                <p>If you visit one of our pages featuring a EZ-Player plugin, a connection to the EZ-Player servers is established. Here the EZ-Player server is informed about which of our pages you have visited. In addition, EZ-Player will receive your IP address.</p>
                <br/>
                <p>
                    For more information on how to handle user data, please refer to the Next Generation Marketing FZE Privacy Policy at 
                    <Link className={style.link} to="https://shiripour-marketing.com/datenschutz"> https://shiripour-marketing.com/datenschutz</Link>
                </p>
                <br/>
            </section>

            {/* Section 20 */}
            <section>
                <h2>Section 20 - ClickFunnels</h2>
                <br/>
                <p>Etison LLC<br/>
                    3443 W. Bavaria St.<br/>
                    Eagle, Idaho 83646<br/>
                </p>
                <br/>
                <p>ClickFunnels is a page builder tool used for sales funnels and opt-in pages. The information you provide will be used solely to contact you based on the subject of your submission.</p>
                <br/>
                <p>For more information on how to handle user data, please refer to the Next Generation Marketing FZE Privacy Policy at 
                    <Link className={style.link} to="https://signup.clickfunnels.com/privacy-policy"> https://signup.clickfunnels.com/privacy-policy</Link>
                </p>
                <br/>
            </section>

            {/* Section 21 */}
            <section>
                <h2>Section 21 - Digimember</h2>
                <br/>
                <p>
                    Digital Solutions GmbH<br/>
                    Nevinghoff 16<br/>
                    48147 Münster<br/>
                </p>
                <br/>
                <p>Digimember is a membership-tool which stores personal Data and transfers it to the Digistore24-Server.</p>
                <br/>
                <p>
                    For more information on how to handle user data, please refer to the Digital Solution GmbH Privacy Policy at 
                    <Link className={style.link} to="https://digimember.de/datenschutz"> https://digimember.de/datenschutz</Link>
                </p>
                <br/>
            </section>

            {/* Section 22 */}
            <section>
                <h2>Section 22 - Webinaris</h2>
                <br/>
                <p>
                    Webinaris GmbH<br/>
                    Bussardstr. 5<br/>
                    82166 Gräfelfing<br/>
                    info@webinaris.com<br/>
                </p>
                <br/>
                <p>Our Webinars are hosted by Webinaris.</p>
                <br/>
                <p>
                    For more information on how to handle user data, please refer to the Webinaris GmbH Privacy Policy at 
                    <Link className={style.link} to="https://webinaris.com/datenschutzbestimmungen.html"> https://webinaris.com/datenschutzbestimmungen.html</Link>
                </p>
                <br/>
            </section>

            {/* Section 23 */}
            <section>
                <h2>Section 23 - Changes to this privacy policy</h2>
                <br/>
                <p>We reserve the right to modify this privacy policy at any time, so please review it frequently. Changes and clarifications will take effect immediately upon their posting on the website. If we make material changes to this policy, we will notify you here that it has been updated, so that you are aware of what information we collect, how we use it, and under what circumstances, if any, we use and/or disclose it.</p>
                <br/>
                <h3>Questions & Contact Information</h3>
                <br/>
                <p>
                    If you would like to: access, correct, amend or delete any personal information we have about you, register a complaint, or simply want more information contact us directly via email:
                    <br/><br/>
                    <Link className={style.link} to="mailto:contact@bernth.at">contact@bernth.at</Link>
                </p>
                <br/>
            </section>

        </div>
    )
}

export default PrivacyPolicy;