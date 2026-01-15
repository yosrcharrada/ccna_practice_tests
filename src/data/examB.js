// Exam B Questions - CCNA 200-301
// Add your questions here following the template

export const examBQuestions = [{
    id: 500,
    category: "Network Access",
    questionType: "Single-select",
    question: `<p>You issue the <strong>show ap config general MyLAP</strong> command on a Cisco AP</p>. 
    <p>Which of the following is the command output least likely to contain? (Select the best answer.) </p>`,
    options: [
      "the AP's Syslog server settings", // Index 0
      "the AP's default gateway address", // Index 1
      "the AP's IP address", // Index 2
      "the AP's DNS server address" // Index 3
    ],
    correctAnswer: 0,
    explanation: `<p>Of the available choices, the output of the <strong>show ap config general MyLAP</strong> command on the Cisco access point (AP) in this scenario is least likely to contain the AP's Syslog server settings. </p>
    <p>However, you can obtain the Syslog server settings for all APs that join a Cisco wireless LAN controller (WLC) by issuing the <strong>show ap config global</strong> command at the WLC command prompt. </p>
    <p>Similar to a Cisco wired router or switch, you can administer a Cisco AP or WLC by using a
    command-line interface (CLI). However, the CLI interface does not support the same Cisco
    IOS command set as a Cisco router or switch. You can configure a Cisco WLC or a Cisco AP
    either by using the built-in graphical user interface (GUI) in a browser or by using the CLI.</p>

    <p>Issuing the <strong> show ap config general </strong> cisco-ap command, where cisco-ap is the host name of
    the Cisco AP that is configured with the information you want to display, produces general AP
    configuration output. This output includes information such as the AP's Internet Protocol (IP)
    address, the default gateway IP address, and the Domain Name System (DNS) server address.
    In addition, the output includes the subnet mask that is configured on the AP. The following is
    sample output from a Cisco AP:</p>
    <img src="/images/code_B500.png" alt="code" style="max-width: 100%; height: auto;" />`,
    reference: [
      {
        title: "Cisco: Cisco Wireless Controller Command Reference",
        description: "show ap config general "
      }
    ]
  },
  {
    id: 677,
    category: "Network Access",
    questionType: "Multi-select",
    question: `You connect a new, unconfigured switch to an existing switch's <strong>FastEthernet 0/1</strong> interface. 
    That interface was previously connected to an end user's workstation. 
    You notice that the FastEthernet 0/1 interface on the existing switch enters the error-disabled state. 
    Which of the following are the most likely causes of the problem? (Select 2 choices.) `,
    options: [
      "BPDU guard is enabled on the FastEthernet 0/1 interface.", // Index 0
      "Loop guard is enabled on the FastEthernet 0/1 interface.", // Index 1
      "PortFast is enabled on the FastEthernet 0/1 interface.", // Index 2
      "The interface on the new switch is a statically configured trunk port.", // Index 3
      "Root guard is enabled on the FastEthernet 0/1 interface." // Index 4
    ],
    correctAnswer: [2,0],
    explanation: `<p>Of the available choices, the most likely cause of the problem is that the existing switch's FastEthernet 0/1 interface has PortFast and BPDU guard enabled. BPDU guard is used to disable ports that erroneously receive bridge protocol data units (BPDUs). BPDU guard is typically applied to edge ports that have PortFast enabled. Because PortFast automatically places ports into a forwarding state, a switch that has been connected to a PortFast-enabled port could cause switching loops. However, when BPDU guard is applied, the receipt of a BPDU on a port will result in the port being placed into the error-disabled state, which prevents loops from occurring. When such a port receives a BPDU, BPDU guard immediately puts that port into the error-disabled state and shuts down the port. The port must then be manually re-enabled, or it can be recovered automatically by configuring the <strong> errdisable recovery cause bpduguard </strong> command and the <strong> errdisable recovery interval </strong> interval command. </p>
    <p>BPDU guard should be enabled on ports that have been enabled with PortFast so that BPDU guard can prevent a rogue switch from modifying the Spanning Tree Protocol (STP) topology. PortFast is a feature that provides immediate accessibility to the network for edge ports, such as access ports that are connected to end-user workstations. PortFast transitions the port into the STP forwarding state without going through the STP listening and learning states. </p>
    <p>It is not likely that the interface on the new switch is a statically configured trunk port. Depending on the Cisco hardware model, it is possible that Dynamic Trunking Protocol (DTP) is by default configured in dynamic desirable mode, which means that the new device would automatically send out DTP frames in an attempt to negotiate trunking mode. If the FastEthernet 0/1 interface on the existing switch is not statically configured as an access port with the <strong> switchport mode access </strong> command, the ports could negotiate a trunk link. </p>
    <p>It is not likely that loop guard is enabled on the FastEthernet 0/1 interface. The loop guard feature prevents nondesignated ports from inadvertently forming bridging loops if the steady flow of BPDUs is interrupted. When the port stops receiving BPDUs, loop guard puts the port into the loop-inconsistent state, which keeps the port in a blocking state. After the port starts receiving BPDUs again, loop guard automatically re-enables the port so that it transitions through the normal STP states. You can enable loop guard for the entire switch by issuing the <strong> spanning-tree loopguard default </strong> command in global configuration mode, or you can enable loop guard for specific ports by issuing the <strong>spanning-tree guard loop </strong> command in interface configuration mode.</p>
    <p>It is not likely that root guard is enabled on the FastEthernet 0/1 interface. Root guard is used to prevent newly introduced switches from being elected as the new root switch. This allows administrators to maintain control over which switch is the root. When STP is used, the device with the lowest switch priority is elected the root. If a new device is added to the network with a lower priority than the current root, it will become the new root. However, this could cause the network to reconfigure in unintended ways. To prevent this, root guard can be applied. Root guard is applied on a per-port basis by issuing the <strong> spanning-tree guard root </strong> command. If root guard is enabled on a loop guard-enabled port, loop guard will be automatically disabled.</p>`,
    reference: [
      {
        title: "Boson CCNA Curriculum 200-301",
        description: "Module 5: Switching and Network Access, Cisco Enhancements to STP "
      },
      {
        title: "CCNA 200-301 Official Cert Guide",
        description: "Volume 1, Chapter 9: Spanning Tree Protocol Concepts, Optional STP Features "
      }
    ]
  },
  {
    id: 4,
    category: "IP Connectivity",
    questionType: "Single-select",
    question: `RouterA receives several routes to the <strong>192.168.1.0/26</strong> network. 
    Each of the routes is received from a different routing protocol. 
    Which of the following routes is installed in the routing table? (Select the best answer.) `,
    options: [
      "the route with the lowest AD", // Index 0
      "the route with the highest metric", // Index 1
      "the route with the shortest prefix length", // Index 2
      "the route with the highest AD", // Index 3
      "the route with the longest prefix length", // Index 4
      "the route with the lowest metric" // Index 5
    ],
    correctAnswer: 0,
    explanation: `<p>The route with the lowest administrative distance (AD) is installed in the routing table. The following list contains the most commonly used ADs: </p>
    <img src="/images/table_B4.png" alt="table" style="max-width: 100%; height: auto;" />

    <p>When multiple routes to a network exist and each route uses a different routing protocol, a router prefers the routing protocol with the lowest AD. Therefore, if a router receives local routes to 192.168.1.0/26 from Enhanced Interior Gateway Routing Protocol (EIGRP), Open Shortest Path First (OSPF), and Routing Information Protocol (RIP), the EIGRP routes will be installed in the routing table and used to route packets; the OSPF and RIP routes will be maintained in the OSPF and RIP databases, respectively, until they are needed. </p>
    <p>ADs for a routing protocol can be manually configured by issuing the distance command in router configuration mode. For example, to change the AD of OSPF process ID 1 from 110 to 80, you could issue the following commands: </p>
    <pre>RouterA(config) #router ospf 1
        RouterA(config-router) #distance 80</pre>
    <p>When multiple routes to a network exist and each route uses a different routing protocol,
metrics cannot be used to determine the routes that are installed in the routing table. The
metrics used by each routing protocol are dissimilar and cannot be compared. Metrics can only
be used to compare routes from the same routing protocol. When a routing protocol contains
multiple routes to the same destination network, a router prefers the route with the lowest
metric.</p>
    <p>Because all of the routes in this scenario are to the 192.168.1.0/26 network, all of the routes
have the same prefix length. Prefix lengths are used to determine which route a packet will
take when multiple routes to overlapping networks exist. When multiple routes to overlapping
networks exist, a router will prefer the most specific route, which is the route with the longest
prefix match.</p>`,
    reference: [
      {
        title: "Boson CCNA Curriculum 200-301",
        description: "Module 6: IP Routing, Understanding AD "
      }
    ]
  },
  {
    id: 694,
    category: "Network Fundamentals",
    questionType: "Single-select",
    question: `Which of the following is considered best practice when expanding an existing 802.11 wireless network? (Select the best answer.) `,
    options: [
      "configuring each AP with a unique SSID and a unique, nonoverlapping channel",
      "configuring each AP with the same SSID and a unique, overlapping channel",
      "configuring each AP with a unique SSID and the same channel",
      "configuring each AP with the same SSID and a unique, nonoverlapping channel"
    ],
    correctAnswer: 3,
    explanation: `<p>Of the choices provided, configuring each wireless access point (AP) with the same Service Set
Identifier (SSID) and a unique, nonoverlapping channel is considered best practice when
expanding an existing Institute of Electrical and Electronics Engineers (IEEE) 802.11 wireless
network. APs are devices that are used to establish communication between wireless devices
and a wired network through the use of radio waves. APs are often placed in a centralized
location within a network environment and are typically connected to a network through a
wired connection. An SSID is a unique name used to identify a wireless network. When
multiple APs are used to establish network connections to the same network, each AP must be
configured with the same SSID. </p>
    <p>APs transmit data by using a single channel at a time. A channel is a small portion of the
spread-spectrum used for transmission. APs operating on the same channel and within close
physical proximity to other APs may experience some interference. To avoid potential
interference while continuing to offer the same physical range of coverage, technicians can set
the channel used by the individual APs to a channel further away on the spread-spectrum than
the channel being used by the other AP in the same service radius. For example, if you have
two APs within physical range of each other, you could set one to operate on channel 1 and
the other to operate on channel 11. By default, APs typically use the nonoverlapping channels
1, 6, or 11 to decrease the potential for interference issues by keeping the channels in use
evenly spread apart. </p>`,
    reference: [
      {
        title: "Boson CCNA Curriculum 200-301",
        description: "Module 3: Wireless Networking Fundamentals, Wireless Bands and Channels "
      }
    ]
  },
  {
    id: 415,
    category: "Security Fundamentals",
    questionType: "Single-select",
    question: `Which of the following technologies can you use to tunnel any Layer 3 protocol through an IP transport network? (Select the best answer.) `,
    options: [
      "PPPoE",
      "PPPoA",
      "GRE",
      "IPsec"
    ],
    correctAnswer: 2,
    explanation: `<p>You can use Generic Routing Encapsulation (GRE) to tunnel any Layer 3 protocol through an
Internet Protocol (IP) transport network. Because the focus of GRE is to transport many
different protocols, it has very limited security features. By contrast, IP Security (IPSec) has
strong data confidentiality and data integrity features but it can transport only IP traffic. GRE
over IPSec combines the best features of both protocols to securely transport any protocol
over an IP network. </p>
    <p>You cannot use IPSec to tunnel any Layer 3 protocol through an IP transport network.
However, you can use IPSec to establish a secure virtual private network (VPN) tunnel
between two sites that are separated by an untrusted network. IPSec is a security framework
that can guarantee the confidentiality and integrity of data as it passes through an untrusted
network. An IPSec VPN connection is established through a series of negotiations and
authentications. Initially, the VPN peers negotiate an Internet Key Exchange (IKE) security
association (SA) and establish a tunnel for key management and authentication. The key
management tunnel protects the subsequent negotiation of IPSec SAs. The IPSec SAs enable
the VPN peers to establish a tunnel for data transmission and to specify the methods that are
used to ensure the confidentiality and integrity of the data sent through that tunnel. Typically,
Authentication Header (AH) protocol or Encapsulating Security Protocol (ESP) is used to ensure
the integrity of a packet and to authenticate the origin of a packet. AH is embedded within a
packet to provide authentication, whereas ESP encapsulates the data in order to provide data
privacy. </p>
      <p>You cannot use Point-to-Point Protocol over ATM (PPPoA) to tunnel any Layer 3 protocol
through an IP transport network. PPPoA is used to initiate a session with a Digital Subscriber
Line (DSL) service provider. With PPPoA, a Point-to-Point Protocol (PPP) session is initiated
between an Asymmetric DSL (ADSL)-enabled router and an access concentrator. After the PPP
session is established, traffic that passes between the router and the access concentrator is
encapsulated in PPP frames. The PPP frames are then encapsulated directly into Asynchronous
Transfer Mode (ATM) cells and transmitted across the ADSL circuit. In addition, because
neither PPP frames nor ATM cells are encrypted, PPPoA cannot provide a secure connection
between the remote location and the company headquarters.</p>
      <p>You cannot use PPP over Ethernet (PPPoE) to tunnel any Layer 3 protocol through an IP
transport network. PPPoE is typically used to initiate a session with a DSL service provider.
With PPPoE, PPP frames are encapsulated into Ethernet frames for transmission to the service
provider. Because PPP frames are not encrypted, PPPoE cannot provide a secure connection
between the remote location and the company headquarters.</p>`,
    reference: [
      {
        title: "Boson CCNA Curriculum 200-301",
        description: "Module 8: Security Fundamentals, GRE Tunnels "
      }
    ]
  },
  {
    id: 53,
    category: "IP Connectivity",
    questionType: "Single-select",
    question: `You configure OSPF on a router and advertise all available interfaces. 
    The Gigabit Ethernet interfaces are using the default OSPF network type and timer values. 
    Which of the following statements is correct regarding how OSPF operates on the Gigabit Ethernet interfaces? (Select the best answer.) `,
    options: [
      "DR and BDR elections are performed.",
      "The Hello timer is set to 30 seconds, and the dead timer is set to 120 seconds.",
      "Unicast updates are sent.",
      "The neighbor command is required to establish adjacencies."
    ],
    correctAnswer: 0,
    explanation: `<p>Designated router (DR) and backup designated router (BDR) elections are performed. The
Gigabit Ethernet interfaces use the Open Shortest Path First (OSPF) broadcast network type by
default. There are five OSPF network types:</p>
    <p>Broadcast<br>
    Nonbroadcast<br>
    Point-to-point<br>
    Point-to-multipoint broadcast<br>
    Point-to-multipoint nonbroadcast<br></p>
    <p>On broadcast networks, multicast updates are sent, so manual configuration of <strong>  </strong>
routers with the <strong> neighbor </strong> command is not required. By default, the Hello timer is set to 10
seconds and the dead timer is set to 40 seconds. To configure an OSPF broadcast network,
you should issue the ip ospf network broadcast command. The OSPF broadcast network
type is enabled by default on Fiber Distributed Data Interface (FDDI) and Ethernet interfaces,
including Fast Ethernet and Gigabit Ethernet interfaces.</p>
<p>On nonbroadcast networks, DR and BDR elections are performed. Nonbroadcast networks do
not allow multicasts; therefore, manual configuration of <strong> neighbor </strong> routers with the <strong> neighbor </strong>
command is required so that OSPF sends unicast updates. By default, the Hello timer is set to
30 seconds and the dead timer is set to 120 seconds. To configure an OSPF nonbroadcast
network, which is also called a nonbroadcast multiaccess (NBMA) network, you should issue
the <strong> ip ospf network non-broadcast </strong> command. The OSPF nonbroadcast network type is
enabled by default on Frame Relay and X.25 interfaces.</p>
<p>On point-to-point networks, DR and BDR elections are not performed. Multicast updates are
sent, so manual configuration of <strong> neighbor </strong> routers with the <strong> neighbor </strong> command is not
required. By default, the Hello timer is set to 10 seconds and the dead timer is set to 40
seconds. To configure an OSPF point-to-point network, you should issue the <strong>ip ospf network
point-to-point command.</strong> The OSPF point-to-point network type is enabled by default on
High-Level Data Link Control (HDLC) and Point-to-Point Protocol (PPP) serial interfaces.</p>
<p>OSPF point-to-multipoint broadcast networks operate just like OSPF point-to-point networks
except the Hello timer is set to 30 seconds and the dead timer is set to 120 seconds by
default. To configure an OSPF point-to-multipoint broadcast network, you should issue the ip
ospf network point-to-multipoint command.</p>
<p>OSPF point-to-multipoint nonbroadcast networks operate just like OSPF point-to-multipoint
broadcast networks except that multicasts cannot be sent; therefore, manual configuration of
<strong> neighbor </strong> routers with the <strong> neighbor </strong> command is required so that OSPF sends unicast
updates. To configure an OSPF point-to-multipoint nonbroadcast network, you should issue
the ip ospf network point-to-multipoint non-broadcast command.</p>`,
    reference: [
      {
        title: "Boson CCNA Curriculum 200-301",
        description: "Module 6: IP Routing, Understanding DR and BDR Elections "
      }
    ]
  },
  {
    id: 30,
    category: "IP Connectivity",
    questionType: "Single-select",
    question: `Which of the following FHRPs would use the virtual MAC address <strong>0000.5E00.0101</strong>? (Select the best answer.) `,
    options: [
      "only GLBP",
      "GLBP and HSRP",
      "only HSRP",
      "only VRRP"
    ],
    correctAnswer: 3,
    explanation: `<p>Only Virtual Router Redundancy Protocol (VRRP) would use the virtual Media Access Control
(MAC) address 0000.5E00.0101. VRRP is an Internet Engineering Task Force (IETF)-standard
First-Hop Redundancy Protocol (FHRP) that is supported by both Cisco and non-Cisco
devices. Routers are assigned to a VRRP group, and the group functions as a single gateway
for clients. A VRRP group has one master router, which is the router with the highest priority
value. All other routers in the VRRP group are backup routers. The virtual MAC address for
VRRP groups is in the form of 0000.5E00.01xx, where xx is a hexadecimal value identifying the
VRRP group number. For example, VRRP Group 1 would be identified by the virtual MAC
address 0000.5E00.0101. </p>
    <p>Gateway Load Balancing Protocol (GLBP) would not use the virtual MAC address
0000.5E00.0101. GLBP is an FHRP that also provides load balancing. GLBP enables you to
configure multiple routers as a GLBP group; the routers in the group receive traffic sent to a
virtual IP address that is configured for the group. Each GLBP group contains an active virtual
gateway (AVG) that is elected based on which router is configured with the highest priority
value, or with the highest IP address if multiple routers are configured with the highest priority
value. The other routers in the GLBP group are configured as primary or secondary active
virtual forwarders (AVFs). Up to four primary AVFs can be configured in a GLBP group, and the
primary AVFs can participate in forwarding traffic. Consequently, multiple routers can be used
simultaneously to provide load balancing for the GLBP group. </p>
    <p>Hot Standby Router Protocol (HSRP) would not use the virtual MAC address 0000.5E00.0101.
HSRP is an FHRP that is defined in Request for Comments (RFC) 2281. Similar to GLBP, HSRP
can be used to provide backup router coverage if the primary gateway becomes unavailable.
Multiple routers are assigned to an HSRP group, and the routers function as a single gateway.
An HSRP group contains one active router and one standby router. The active router is the
router with the highest priority value, and the standby router is the router with the second-
highest priority value. Other routers in the HSRP group are in the listen state. If the active
router fails, the standby router assumes the active router role and a new standby router is
elected. </p>`,
    reference: [
      {
        title: "Boson CCNA Curriculum 200-301",
        description: "Module 6: IP Routing, Understanding Virtual MAC Addresses "
      }
    ]
  },

  {
    id: 441,
    category: "Security Fundamentals",
    questionType: "Multi-select",
    question: `Which of the following are most likely to be considered forms of authorization? (Select 2 choices.) `,
    options: [
      "verifying a user's fingerprint pattern",
      "logging a verified user's file access",
      "assigning a role to a verified user",
      "verifying a user's password",
      "allowing a user to access a specific file"
    ],
    correctAnswer: [2, 3],
    explanation: `<p>Assigning a role to a verified user and allowing a user to access a specific file are forms of
authorization. Authentication, Authorization, and Accounting (AAA) systems manage user
activity. AAA systems are typically more sophisticated than simple password authentication
systems, such as a local password database. Allowing access to a specific file can involve
assigning specific user or group permissions directly to the file, matching a rule, such as an
access control list (ACL) that associates a specific user with a file, or assigning a user to a
specific role that has permission to access the file. </p>
    <p>Two common AAA systems are Remote Authentication Dial-In User Server (RADIUS) and
Terminal Access Controller Access-Control System Plus (TACACS+). RADIUS is a standard AAA
protocol created by the Internet Engineering Task Force (IETF). Compared to TACACS+,
RADIUS has several limitations. For example, RADIUS encrypts only the password in Access-
Request packets; it does not encrypt the entire contents of the packet like TACACS+ does. </p>
    <p>TACACS+ is a Cisco-proprietary protocol used during AAA operations. TACACS+ provides more
granular and flexible control over user access privileges. For example, the AAA operations are
separated by TACACS+, whereas RADIUS combines the authentication and authorization
services into a single function. Because TACACS+ separates these functions, administrators
have more control over access to configuration commands. In addition, TACACS+ encrypts the
entire contents of packets, thus providing additional security. </p>
<p>The following list defines the three phases of the AAA process:</p>
<p>. Authentication - the process of verifying a user's identity<br>
 Authorization - the process of verifying the level of access configured for a user<br>
Accounting - the process of recording the use of resources <br> </p>
<p>Verifying a user's fingerprint pattern and verifying a user's password are both likely to be
considered authentication, not authorization. Authentication is the process of verifying a user's
identity. Authentication by itself does not grant access to a given resource.</p>
<p>Logging a verified user's file access is a form of accounting, not authorization. Accounting is a feature of AAA systems that enables administrators to track resource usage across a network.
If a security incident occurs, accounting can aid the effort to track the incident back to its source.</p>`,
    reference: [
      {
        title: "Boson CCNA Curriculum 200-301",
        description: "Module 8: Security Fundamentals, AAA "
      }
    ]
  },
  {
    id: 89,
    category: "IP Services",
    questionType: "Single-select",
    question: `<p>You receive the following output on the console of RouterA:</p> 
    <pre>00:00:47: %LINK-3-UPDOWN: Interface GigabitEthernet0/2, changed state to up.</pre> 
    <p>What is the severity level of this Syslog message? (Select the best answer.) </p>`,
    options: [
      "alerts",
      "notifications",
      "informational",
      "warnings",
      "errors"
    ],
    correctAnswer: 4,
    explanation: `<p>The <pre> 00:00:47: %LINK-3-UPDOWN: Interface GigabitEthernet0/2, changed
state to up </pre> message is at the errors severity level. Cisco debug messages and log
messages are divided into the following severity levels:</p>

<p> 0 - emergencies <br>
1 - alerts<br>
2 - critical<br>
3 -errors<br>
4 - warnings<br>
5 - notifications<br>
6 - informational<br>
7 - debugging<br> </p>

<p>You can filter log messages on the console by severity level by issuing the logging console
severity-leve/ command, or you can filter log messages to a Syslog server by issuing the
logging trap severity-/eve/ command. When the logging console or logging trap
command is issued with a severity-leve/ parameter, messages with the specified severity level
and all lower-numbered severity levels will be displayed or sent, respectively.</p>

<p>Messages are formatted in the Berkeley Software Distribution (BSD) Syslog format, which is a
percent sign (%) followed by a facility code, a severity code, and a mnemonic code. The three
codes are separated by dashes. In the output displayed in this scenario, the facility code is
LINK, the severity code is 3, which is equivalent to errors, and the mnemonic code is UPDOWN.
The dash-separated code is followed by a colon and the human-readable text of the log
message.</p>

<p>Emergencies and alerts indicate a severe hardware or software problem with the device. These
messages need to be addressed immediately. </p>
    <p>Critical, error, and warning messages indicate something that might impact the device. For
example, interface up/down state changes are displayed as errors at level 3.</p>

<p>Notifications and informational messages are routine messages but still might indicate a
problem. Route flaps, neighbor adjacencies, and interface protocol up/down transitions are
displayed as notifications at level 5.</p>

<p>Debugging messages appear only as the result of issuing the debug command. After
debugging, always remember to issue the no debug all command to stop collecting data. </p>`,
    reference: [
      {
        title: "Cisco: System Message Logging",
        description: "Table 3 Message Logging Level Keywords "
      }
    ]
  },

   {
    id: 401,
    category: "Security Fundamentals",
    questionType: "Matching",
    question: `<p>Match each security program element on the left with its correct description on the right.</p>`,
    matchingPairs: {
      terms: [
        { id: "physical", text: "physical access control" },
        { id: "awareness", text: "user awareness" },
        { id: "training", text: "user training" }
      ],
      definitions: [
        { id: "def1", text: "protects infrastructure locations such as network closets", correctMatch: "physical" },
        { id: "def2", text: "provides employees with information about protecting confidential data", correctMatch: "awareness" },
        { id: "def3", text: "familiarizes users with corporate security policies in a formal and mandatory fashion", correctMatch: "training" }
      ]
    },
    correctAnswer: {
      physical: "def1",
      awareness: "def2",
      training: "def3"
    },
    explanation: `<p>User awareness is the security program element that provides employees with information
about protecting confidential data. User training is the security program element that
familiarizes users with corporate security policies in a formal and mandatory fashion. Physical
access control is the security program element that protects infrastructure locations such as
network closets.</p>

<p>Educating users about enterprise security is an important step in ensuring the confidentiality
and integrity of data. Through education, users without a technological background can learn
to identify and thus avoid falling prey to common attacks. For example, users who have been
educated on the dangers of phishing emails, pharming, and social engineering attacks will be
less likely to click malicious links in emails than those who have not been educated on such
tactics. Phishing is an attempt to compromise user information by disguising a malicious email
as a legitimate email. Pharming is the use of a legitimate service to redirect users to a
malicious or compromised site. Social engineering is the simple exploitation of human trust
and instinctive behavior. The goal of both user awareness and user training is to minimize the
likelihood of users becoming victims of their own instincts.</p>

<p>User awareness is different from user training in that user training is a more formal and
mandatory process. Making users aware of potential threats might involve little more than
sending emails or making announcements that describe the threat. User training, on the other
hand, is formally instructing users by using a published company security policy that outlines
how to identify a given threat and how to respond to it. An example of user training might be
guiding users through a company's password complexity policy. In this case, users would be
taught how to create secure passwords in order to mitigate common password attacks, such
as a brute-force attack. A brute-force attack occurs when an attacker uses every possible
combination of characters in an attempt to guess a password.</p>
<p>Although not specific to users, physical access control allows administrators to protect
sensitive equipment and data from accidental or malicious compromise by users. For example,
locking the door to a network closet prevents users, visitors, or malicious actors from
accessing, corrupting, or stealing the hardware that keeps the local area network (LAN) running. Physical access controls can be as simple as a padlock or as elaborate as a mantrap,
which is a system that is intended to prevent unauthorized people from following an
authorized person into a secured location. A mantrap consists of a set of two locked doors that
operate in a manner that prevents both doors from being opened at the same time. People
who enter the mantrap must be identified before they are allowed to exit the mantrap into the
secure area. Security guards can use facial recognition to verify the identity of proximity badge
holders.</p>`,
    reference: [
      {
        title: "Boson CCNA Curriculum 200-301",
        description: "Module 8: Security Fundamentals, Access Controls"
      }
    ]
  },
  {
    id: 67,
    category: "IP Connectivity",
    questionType: "Multi-select",
    question: `<p>You administer the OSPF network above.</p>
    <img src="/images/ospf-topology-067.png" alt="OSPF Network Topology" style="max-width: 100%; height: auto; margin: 20px 0;" />
    <p>You issue the <strong>default-information originate</strong> command on RouterA.</p>
    <p>Which of the following statements are true? (Select 2 choices.)</p>`,
    options: [
      "RouterA will become the OSPF ASBR.",
      "RouterA will become the OSPF ABR.",
      "OSPF will summarize all of RouterA's directly connected routes.",
      "OSPF will redistribute all of RouterA's directly connected routes.",
      "OSPF will advertise RouterA's gateway of last resort."
    ],
    correctAnswer: [0,4],
    explanation: `<p>Open Shortest Path First (OSPF) will advertise RouterA's gateway of last resort and RouterA
will become an autonomous system boundary router (ASBR) if you issue the default-
information originate command on RouterA. The <strong> default-information originate</strong>
command configures OSPF to inject a router's default external route into OSPF. Additionally, if
you issue either the <strong> default-information originate</strong> command or a <strong>redistribute</strong> network
command in OSPF router configuration mode, Cisco IOS automatically considers the router an
ASBR. An ASBR redistributes routes from other routing protocols into the OSPF domain.</p>

<p>If RouterA in this scenario were configured with the ip route 0.0.0.0 0.0.0.0
FastEthernet0/1 command, any traffic destined for a network that is not in RouterA's
routing table would be forwarded through the FastEthernet 0/1 interface on RouterA.
However, if OSPF does not redistribute or advertise the default route on RouterA, neither
RouterB nor RouterC will be capable of forwarding traffic to a destination address that does
not have an associated path in their routing tables.</p>

<p>If you issue the <strong>default-information originate</strong> command on RouterA in this scenario,
RouterA will become RouterB's gateway of last resort. Similarly, RouterB will become RouterC's
gateway of last resort because the path to RouterA from RouterC is through RouterB.</p>

<p>OSPF will not redistribute all of RouterA's directly connected routers.<strong>The default-
information originate</strong> command causes OSPF to advertise the gateway of last resort, which
might be a directly connected route. However, it does not cause OSPF to advertise all directly
connected routes. If you wanted to configure OSPF on RouterA to redistribute all of RouterA's
connected routes, you would issue the <strong>redistribute connected</strong> command in OSPF router
configuration mode.</p>
<p>OSPF will not summarize all of RouterA's directly connected routes. The <strong>summary-
address</strong> address mask command summarizes routes that have been redistributed into OSPF.
This command should be issued on an ASBR, not an area border router (ABR). To summarize
routes on an ABR, you should issue the <strong>area</strong> area-id <strong>range</strong> address mask command.</p>

<p>RouterA will not become an ABR. When the <strong>default-information originate </strong>command is
issued on an OSPF router, the router automatically becomes an ASBR.</p>`,
    reference: [
      {
        title: "Boson CCNA Curriculum 200-301",
        description: "Module 6: IP Routing, Configuring Multiarea OSPFv2"
      }
    ]
  },
  {
    id: 451,
    category: "Security Fundamentals",
    questionType: "Single-select",
    question: `<p>You are configuring Layer 2 security on a WLAN by using the WLC GUI. You select <strong>WPA+WPA2</strong> from the <strong>Layer 2 Security</strong> drop-down list box. You want to minimize the amount of time it takes an 802.1X client to roam between access points.</p>
    <p>Which of the following WPA2 key management methods should you select from the <strong>Auth Key Mgmt</strong> drop-down list box? (Select the best answer.)</p>`,
    options: [
      "802.1X+CCKM",
      "CCKM",
      "802.1X",
      "PSK"
    ],
    correctAnswer: 0,
    explanation: `<p>You should select <strong>the 802.1X+CCKM</strong> Wi-Fi Protected Access 2 (WPA2) key management
method from the<strong> Auth Key Mgmt </strong>drop-down list box in order to minimize the amount of time
it takes an Institute of Electrical and Electronics Engineers (IEEE) 802.1X wireless client to
roam between access points. <strong>the 802.1X+CCKM</strong> option enables 802.1X clients to use the
Cisco Centralized Key Management (CCKM) key management method to roam between access
points without performing the complete 802.1X authentication process again. Normally, 802.1X
clients mutually authenticate to a new access point. This process likewise involves
reauthenticating with the Remote Authentication Dial-In User Service (RADIUS) server. The
802.1X+CCKM key management method eliminates the need to reauthenticate with the
RADIUS server, thus reducing the amount of time it takes for an 802.1X client to roam
between access points.</p>

<p>You should not select the <strong>CCKM</strong> key management method in this scenario. This option
enables the CCKM key management method but does not minimize delay specifically for
802.1X clients. CCKM is a Cisco-proprietary fast-rekeying method that enables a wireless client
to roam from one access point to another without requiring intervention from the Cisco
Wireless LAN Controller (WLC). CCKM is typically used to reduce delay when wireless clients
transition between access points so that delay-sensitive services, such as Voice over Internet
Protocol (VoIP), operate smoothly.</p>

<p>You should not select the <strong>802.1X</strong> key management method in this scenario. The IEEE 802.1X
standard defines a method of port-based network access control. On Cisco wireless local area
networks (WLANs), the 802.1X key management method is the default method for both WPA
and WPA2. It typically requires a RADIUS server and uses various Extensible Authentication
Protocol (EAP) implementations to authenticate users. Combining WPA or WPA2 with an
802.1X key management method is often known as WPA-8021X mode, or WPA Enterprise.</p>

<p>You should not select the<strong> PSK</strong> key management method in this scenario. The <strong>PSK </strong>method
configures WPA or WPA2 to use the Pre-Shared Key (PSK) key management method. This
method requires an administrator to configure each wireless client that will connect to the network with the key that is configured on the WLC. The <strong>PSK </strong>option supports key entry as
either an ASCII passphrase from 8 through 63 characters in length or a key of 64 hexadecimal
values. Combining WPA or WPA2 with a PSK key management method is often known as WPA-
PSK, or WPA Personal.</p>`,
    reference: [
      {
        title: "Boson CCNA Curriculum 200-301",
        description: "Module 8: Security Fundamentals, Configuring Cisco WLAN Layer 2 Security"
      }
    ]
  },

  {
    id: 604,
    category: "Network Fundamentals",
    questionType: "Single-select",
    question: `<p>Which of the following statements is not true regarding the IaaS service model? (Select the best answer.)</p>`,
    options: [
      "The consumer has control over the physical infrastructure in the cloud.",
      "The consumer has control over the allocation of processing, memory, storage, and network resources within the cloud.",
      "The consumer has control over development tools or APIs in the cloud running on the physical infrastructure in the cloud.",
      "The consumer has control over the configuration of the OS running on the physical infrastructure in the cloud."
    ],
    correctAnswer: 0,
    explanation: `<p>In the Infrastructure as a Service (IaaS) service model, the consumer does not have control
over the physical infrastructure in the cloud. The National Institute of Standards and
Technology (NIST) defines three service models in its definition of doud computing: IaaS,
Software as a Service (SaaS), and Platform as a Service (PaaS).</p>

<p>The IaaS service model provides the greatest degree of freedom by enabling its consumer to
provision processing, memory, storage, and network resources within the doud infrastructure.
The IaaS service model also enables Its consumer to install applications, indluding operating
systems (OSs) and custom applications. However, with IaaS, the doud infrastructure remains
In control of the service provider. A company that hires a service provider to dellver cloud-
based processing and storage that will house mltiple physical or virtual hosts configured in a
variety of ways is using IaaS. For example, a company that wanted to establish a web server
farm by configuring multiple Linux Apache MySQL PHP (LAMP) servers could save hardware
costs by virtualizing the farm and using a provider's cloud service to deliver the physical
infrastructure and bandwidth for the virtual farm. Control over the OS, software, and server
configuration would remain the responsibility of the organization, whereas the physical
infrastructure and bandwidth would be the responsibility of the service provider. Using a third
party's infrastructure to host corporate Domain IName System (DNS) and Dynamic Host
Configuration Protocol (DHOP) servers is another example of IaaS.</p>

<p>The SaaS service model enables its consumer to access applications running in the doud
infrastructure but does not enable the consumer to manage the cloud infrastructure or the
configuration of the provided applications. Of the three service models, SaaS exposes the least
amount of the consumer's network to the doud and is the least likely to require changes to the
consumer's network design. A company that licenses a service provider's office suite and email
service that is delivered to end users through a web browser is using SaaS, SaaS providers use
an Intemet-enabled licensing function, a streaming service, or a web application to provide
end users with software that they might otherwise install and activate locally. Web-based
email clients, such as Gmail and Outlook.com, a re examples of SaaS.</p>

<p>The PaaS service model provides its consumer with slightly more freedom than the Saas model by enabling the consumer to install and possibly configure provider-supported
applications in the cloud infrastructure. A company that uses a service provider's
infrastructure, programming tools, and programming languages to develop and serve doud-
based applications is using PaaS. PaaS enables a consumer to use the service provider's
development tools or Application Programming Interface (API) to develop and deploy specific
doud-based applications or services. Another example of PaaS might be using a third party's
MySQL database and Apache services to build a cloud-based customer relationship
management (CRM) platform.</p>`,
    reference: [
      {
        title: "Boson CCNA Curriculum 200-301",
        description: "Module 1: Network Fundamentals, IaaS"
      },
      {
        title: "CCNA 200-301 Official Cert Guide",
        description: "Volume 2, Chapter 15: Cloud Architecture, Cloud and 'As a Service' Model"
      }
    ]
  },
  {
    id: 628,
    category: "Network Fundamentals",
    questionType: "Single-select",
    question: `<p>Which of the following IPv6 prefixes is used for multicast addresses? (Select the best answer.)</p>`,
    options: [
      "FD00::/8",
      "FF00::/8",
      "FE80::/10",
      "2000::/3",
      "FC00::/8"
    ],
    correctAnswer: 1,
    explanation: `<p>The Internet Protocol version 6 (IPv6) prefix FFOO :: /8 is used for multicast addresses, which
are used for one-to-many communication. IPv6 addresses in the FF00 :: /8 range begin with the
characters FF00 through FFFF. However, certain address ranges are used to indicate the scope
of the multicast address. The following IPv6 multicast scopes are defined:</p>

<p>. FF01 :: /16 - node-local <br>
. FF02 :: /16 - link-local<br>
. FF05 :: /16 - site-local<br>
. FF08 :: /16 - organization-local<br>
. FFOE :: /16 - global<br></p>

<p>IPv6 hosts use the multicasting capabilities of the Neighbor Discovery (ND) protocol to
discover the link layer addresses of neighbor hosts. The Hop Limit field is typically set to 255 in
ND packets that are sent to neighbors. Routers decrement the Hop Limit value as a packet is
forwarded from hop to hop. Therefore, a router that receives an ND packet with a Hop Limit
value of 255 considers the source of the ND packet to be a neighbor. If a router receives an
ND packet with a Hop Limit that is less than 255, the packet is ignored, thereby protecting the
router from threats that could result from the ND protocol's lack of neighbor authentication.</p>

<p>The IPv6 prefix 2000 :: /3 is used for global aggregatable unicast addresses. IPv6 addresses in
the 2000 :: /3 range begin with the characters 2000 through 3FFF. Global aggregatable unicast
address prefixes are distributed by the Internet Assigned Numbers Authority (IANA) and are
globally routable over the Internet.</p>

<p>The IPv6 prefix FE80 :: /10 is used for unicast link-local addresses. IPv6 addresses in the
FE80 :: /10 range begin with the characters FE80 through FEBF. Unicast packets are used for
one-to-one communication. Link-local addresses are unique only on the local segment.
Therefore, link-local addresses are not routable. An IPv6-capable host typically creates a
unicast link-local address automatically at startup. Unicast link-local addresses are used for
neighbor discovery and for environments in which no router is present to provide a routable
IPv6 prefix.</p>

<p>The IPv6 prefixes FC00 :: /8 and FD00 :: /8 fall in the FC00 :: /7 range. Addresses in this range
are unicast site-local addresses; these addresses are also called unique-local addresses. The IPv6 prefix FC00 :: /7 refers to addresses that begin with the characters FC00 through FDFF.
Site-local addresses are not globally routable, but they are routable within an organization.</p>`,
    reference: [
      {
        title: "Boson CCNA Curriculum 200-301",
        description: "Module 2: Network Addressing and Transport, Review Question 3"
      },
      {
        title: "CCNA 200-301 Official Cert Guide",
        description: "Volume 1, Chapter 24: Implementing IPv6 Addressing on Routers, IPv6 Multicast Addresses"
      }
    ]
  },
  {
  id: 433,
  category: "Security Fundamentals",
  questionType:  "Multi-select",
  question: `You are implementing common Layer 2 security measures on a Cisco switch. You create a new VLAN with an ID of 4.  No devices operate on VLAN 4. You issue the following commands on a switch interface:

<pre>
switchport access vlan 4
switchport mode access
</pre>

Which of the following Layer 2 security measures are you implementing?  (Select 2 choices.)`,
  options: [
    "enabling port security on an access port",
    "disabling DTP on a port",
    "disabling an unused port",
    "configuring the port mode manually",
    "moving the port to an unused VLAN"
  ],
  correctAnswer: [3, 4],  // Multiple correct answers (indices 3 and 4)
  explanation: `<p>You are moving the port to an unused virtual local area network (VLAN) by issuing the <strong>switchport access vlan 4</strong> command in this scenario.   In addition, you are configuring the port mode manually by issuing the <strong>switchport mode access</strong> command.  By default, every network interface on a Cisco switch is an active port.  Before you deploy a switch on a network, you should take steps to ensure that every trunk port and access port on the switch is secured and that every unused port on the switch is disabled. </p>

<p>Moving an unused port to an unused VLAN creates a logical barrier that prevents rogue devices from communicating on the network should the port be connected to the network. To move an access port to an unused VLAN, you should issue the <strong>switchport access vlan</strong> <em>vlan-id</em> command on the port, where <em>vlan-id</em> is the ID of the unused VLAN.  When you move an unused port to an unused VLAN, you should also manually configure the port as an access port by issuing the <strong>switchport mode access</strong> command and shut down the port by issuing the <strong>shutdown</strong> command.</p>

<p>To manually configure an access port, you should issue the <strong>switchport mode access</strong> command in interface configuration mode.  To manually configure a trunk port, you should first issue the <strong>switchport trunk encapsulation</strong> <em>protocol</em> command in interface configuration mode, where <em>protocol</em> is the trunk encapsulation protocol you want to use, and then issue the <strong>switchport mode trunk</strong> command in interface configuration mode. </p>

<p>You are not disabling Dynamic Trunking Protocol (DTP) on a port if you issue the commands in this scenario. By default, all interfaces on a Cisco switch will use DTP to automatically negotiate whether an interface should be a trunk port or an access port. The transmission of DTP packets over an interface can be exploited by a malicious user to obtain information about the network or to convert an interface that should be an access port into a trunked port.  You should issue the <strong>switchport nonegotiate</strong> command on a manually configured port to prevent any attempts by the switch to negotiate by using DTP.  Manually configuring interfaces to use either trunk mode or access mode effectively disables DTP and ensures that the traffic on those ports is restricted to the intended purpose.  Even so, you should issue the <strong>switchport nonegotiate</strong> command on a manually configured trunk port to prevent any attempts by the switch to negotiate by using DTP, because a manually configured trunk port will continue to send DTP frames. </p>

<p>You are not disabling an unused port by issuing the commands in this scenario.  Disabling an unused port creates a barrier that prevents rogue devices from communicating on the network should such a device connect to the port. To disable an unused port on a switch, you should issue the <strong>shutdown</strong> command on that port. To verify that a port is in the shutdown state, you should issue the <strong>show interfaces type</strong> <em>number</em> command, where <em>type</em> and <em>number</em> specify the interface you want to show.  A port that has been shut down will be reported as administratively down by the show interfaces command.</p>

<p>You are not enabling port security on an access port by issuing the commands in this scenario. To protect switch interfaces against Media Access Control (MAC) flooding attacks, you should enable port security on all access mode interfaces on the switch.  Issuing the <strong>switchport mode access</strong> command does not enable port security; it only configures the port for access mode settings.  You can modify port security settings before you enable port security by issuing the <strong>switchport port-security</strong> <em>mac-address max-address</em> command, the <strong>switchport port-security maximum</strong> <em>maximum-number-of-mac-addresses</em> command, and the <strong>switchport port-security violation [protect | restrict | shutdown]</strong> command. </p>

<p>When enabled with its default settings, port security will shut down a port on which a violation occurs. In addition, port security will allow only the first MAC address to connect to the port to access the port. </p>`,
  reference: [
    {
      title: "Boson CCNA Curriculum 200-301",
      description: "Module 5: Switching and Network Access, Understanding and Configuring DTP"
    },
    {
      title: "Cisco:   Implementation of Security:  Layer 2 Security Design",
      description: "Best practices for implementing Layer 2 security features",
      link: "https://www.cisco.com/c/en/us/td/docs/solutions/Enterprise/Security/TrustSec_1-99/LAN_Security/LAN_Sec. html"
    }
  ]
},
{
  id: 499,
  category: "Network Access",
  questionType: "Single-select",
  question: `Which of the following wireless QoS levels is the default setting when you configure a WLAN on a WLC?`,
  options: [
    "Platinum",
    "Bronze",
    "Gold",
    "Silver"
  ],
  correctAnswer:  3,
  explanation: `<p>The Silver wireless Quality of Service (QoS) level is the default setting when you configure a wireless local area network (WLAN) on a Cisco wireless LAN controller (WLC). The Silver level is also known as the best-effort level.  Cisco WLCs support four different QoS levels: Platinum, Gold, Silver, and Bronze. QoS prioritizes certain types of traffic over others and can therefore be used to ensure quality for services that are sensitive to network issues such as delay and congestion.  The Silver QoS level is also known as the best-effort level of QoS.  Traffic that is delivered by using best effort is considered lower priority than mission-critical, video, and voice traffic.  This is the level at which most transactional traffic is delivered.</p>

<p>The Platinum wireless QoS level prioritizes Voice over Internet Protocol (VoIP) traffic on a Cisco WLAN. VoIP is susceptible to network delay, which can create jitter and severely affect the quality of a call. To ensure that VoIP traffic is of highest quality, the Platinum level is typically applied to VoIP endpoints and to the control tunnels between lightweight access points (APs) and the WLC.</p>

<p>The Gold wireless QoS level prioritizes video traffic on a Cisco WLAN. The Gold level is typically used to ensure that video and mission-critical real-time interactive traffic streams from source to destination without disruption. </p>

<p>The Bronze QoS level provides the lowest bandwidth and is typically used for guest services on a Cisco WLAN.  Prioritizing guest traffic at a lower level than transactional traffic on a WLAN guarantees that WLAN guests will be prevented from consuming excess bandwidth and thus interfering with normal business operations.</p>`,
  reference: [
    {
      title: "CCNA 200-301 Official Cert Guide",
      description: "Volume 1, Chapter 29: Building a Wireless LAN, Configuring WLAN QoS"
    },
    {
      title: "Cisco:  Quality of Service:  Quality of Service",
      description: "Official documentation on QoS implementation and wireless QoS levels",
      link: "https://www.cisco.com/c/en/us/tech/quality-of-service-qos/index.html"
    }
  ]
},
  {
  id: 446,
  category: "Security Fundamentals",
  questionType: "Multi-select",
  question: `You are configuring security on a new Guest LAN by using the WLC GUI. 

Which of the following security settings are you most likely to configure by using the Layer 3 Security drop-down list box on the Layer 3 tab?   (Select 2 choices.)`,
  options: [
    "CKIP",
    "Web Authentication",
    "Web Passthrough",
    "802.1X",
    "Static WEP"
  ],
  correctAnswer: [1, 2],  // Multiple correct answers (indices 1 and 2)
  explanation: `<p>Of the available choices, you are most likely to configure <strong>Web Authentication</strong> or <strong>Web Passthrough</strong> as the Layer 3 Security setting on the Layer 3 tab of the Security tab in the Cisco Wireless LAN Controller (WLC) graphical user interface (GUI). There are two types of wireless local area networks (WLANs) that you can configure by using the WLC GUI: a WLAN and a Guest LAN. To access the Layer 3 tab of the Security tab, you should first access the security settings by clicking the new WLAN's Security tab.  By default, the Layer 2 tab is selected when you click the Security tab.   However, it is not possible to configure Layer 2 security on a Guest LAN. </p>

<p>When you are configuring a WLAN, you can select one of the following Layer 2 wireless security features from the Layer 2 Security drop-down list box on the Layer 2 tab of the Security tab: </p>

<ul>
<li><strong>None</strong>, which disables Layer 2 security and allows open authentication to the WLAN</li>
<li><strong>WPA+WPA2</strong>, which enables Layer 2 security by using Wi-Fi Protected Access (WPA) or WPA2</li>
<li><strong>802.1X</strong>, which enables Layer 2 security by using Extensible Authentication Protocol (EAP) authentication combined with a dynamic Wired Equivalent Privacy (WEP) key</li>
<li><strong>Static WEP</strong>, which enables Layer 2 security by using a static shared WEP key</li>
<li><strong>Static WEP + 802.1X</strong>, which enables Layer 2 security by using either a static shared WEP key or EAP authentication</li>
<li><strong>CKIP</strong>, which enables Layer 2 security by using the Cisco Key Integrity Protocol (CKIP)</li>
<li><strong>None + EAP Passthrough</strong>, which enables Layer 2 security by using open authentication with EAP authentication</li>
</ul>

<p>There are two different sets of Layer 3 security features that you can configure on a Cisco WLAN: one set that applies to a WLAN and another set that applies to a Guest LAN. If you create and which Layer 2 security options you have selected, you can select one of the following Layer 3 wireless security features from the Layer 3 Security drop-down list box on the Layer 3 tab of the Security tab in the WLC GUI:</p>

<ul>
<li><strong>None</strong>, which disables Layer 3 security no matter which Layer 2 security option is configured and regardless of whether you are configuring a WLAN or a Guest LAN</li>
<li><strong>IPSec</strong>, which enables Layer 3 security for WLANs by using Internet Protocol Security (IPSec)</li>
<li><strong>VPN Pass-Through</strong>, which enables Layer 3 security for WLANs by allowing a client to establish a connection with a specific virtual private network (VPN) server</li>
<li><strong>Web Authentication</strong>, which enables Layer 3 security for Guest LANs by prompting for a user name and password</li>
<li><strong>Web Passthrough</strong>, which enables direct access to the network for Guest LANs without prompting for a user name and password</li>
</ul>

<p>Not every Layer 3 security mechanism is compatible with every Layer 2 security mechanism. It is therefore important to first configure Layer 2 security options before you attempt to configure Layer 3 security options.</p>`,
  reference: [
    {
      title:  "Boson CCNA Curriculum 200-301",
      description: "Module 8: Security Fundamentals, Configuring Cisco WLAN Layer 3 Security"
    },
    {
      title: "CCNA 200-301 Official Cert Guide",
      description: "Volume 1, Chapter 28: Building a Wireless LAN, Configuring WLAN Security"
    },
    {
      title: "Cisco:  Wireless LAN Controller Layer 2 Layer 3 Security Compatibility Matrix:   Wireless LAN Controller Layer 2 – Layer 3 Security Compatibility Matrix",
      description: "Official compatibility matrix for Layer 2 and Layer 3 security features",
      link: "https://www.cisco.com/c/en/us/support/docs/wireless-mobility/wlan-security/220436-wireless-lan-controller-layer-2-layer-3. html"
    },
    {
      title: "Cisco:   WLANs Tab",
      description: "Documentation on configuring WLANs using the WLC GUI",
      link: "https://www.cisco.com/c/en/us/td/docs/wireless/controller/8-5/config-guide/b_cg85/wlans. html"
    }
  ]
},
  {
  id: 603,
  category: "Network Fundamentals",
  questionType: "Matching",
  question: `<p>Match each ACI node type on the left with its correct characteristic on the right.</p>`,
  matchingPairs: {
    terms: [
      { id: "leaf1", text: "Leaf Node" },
      { id: "leaf2", text: "Leaf Node" },
      { id: "leaf3", text: "Leaf Node" },
      { id: "leaf4", text: "Leaf Node" },
      { id: "spine1", text: "Spine Node" },
      { id: "spine2", text: "Spine Node" }
    ],
    definitions: [
      { id: "def1", text: "must connect to every spine node", correctMatch: "leaf1" },
      { id: "def2", text: "can connect to an APIC", correctMatch: "leaf2" },
      { id: "def3", text: "can connect to an EPG", correctMatch: "leaf3" },
      { id: "def4", text: "cannot connect to a spine node", correctMatch: "leaf4" },
      { id: "def5", text: "cannot connect to a leaf node", correctMatch: "spine1" },
      { id: "def6", text: "must connect to every leaf node", correctMatch: "spine2" }
    ]
  },
  correctAnswer: {
    leaf1: "def1",
    leaf2: "def2",
    leaf3: "def3",
    leaf4: "def4",
    spine1: "def5",
    spine2: "def6"
  },
  explanation: `<p>Cisco Application Centric Infrastructure (ACI) is a data center technology that uses switches, categorized as spine and leaf nodes, to dynamically implement network application policies in response to application-level requirements. Network application policies are defined on a Cisco Application Policy Infrastructure Controller (APIC) and are implemented by the spine and leaf nodes. </p>
<p>The spine and leaf nodes create a scalable network fabric that is optimized for east-west data transfer, which in a data center is typically traffic between an application server and its supporting data services, such as database or file servers. Each spine node requires a connection to each leaf node and each leaf node requires a connection to every spine node; however, spine nodes do not interconnect nor do leaf nodes interconnect.  Despite its lack of fully meshed connections between spine nodes or between leaf nodes, this physical topology enables nonlocal traffic to pass from any ingress leaf interface to any egress leaf interface through a single, dynamically selected spine node.  By contrast, local traffic is passed directly from an ingress interface on a leaf node to the appropriate egress interface on the same leaf node.</p>
<p>Because a spine node has a connection to every leaf node, the scalability of the fabric is limited by the number of ports on the spine node, not by the number of ports on the leaf node. For example, if additional access ports are needed, a new leaf node can be added to the infrastructure as long as there is a sufficient number of ports remaining on the existing spine nodes to support the new leaf node.  In addition, redundant connections between a spine and leaf pair are unnecessary because the nature of the topology ensures that each leaf has multiple connections to the network fabric.  Therefore, each spine node requires only a single connection to each leaf node.</p>
<p>Redundancy is also provided by the presence of multiple APICs, which are typically deployed as a cluster of three controllers.  APICs are not directly involved in forwarding traffic and are therefore not required to connect to every spine or leaf node. Instead, the APIC cluster is connected to one or more leaf nodes in much the same manner that other endpoint groups (EPGs), such as application servers, are connected.  Because APICs are not directly involved in forwarding traffic, the failure of an APIC does not affect the ability of the fabric to forward traffic.</p>`,
  reference: [
    {
      title: "Boson CCNA Curriculum 200-301",
      description: "Module 1: Network Fundamentals, Spine-Leaf Topology"
    },
    {
      title: "CCNA 200-301 Official Cert Guide",
      description: "Volume 2, Chapter 16: Introduction to Controller-Based Networking, ACI Physical Design: Spine and Leaf"
    },
    {
      title: "Cisco: Cisco Application Centric Infrastructure: Cisco Application Centric Infrastructure Fabric Overview",
      description: "Official documentation on ACI fabric architecture and design",
      link: "https://www.cisco.com/c/en/us/solutions/data-center-virtualization/application-centric-infrastructure/index.html"
    }
  ]
},
  {
  id: 608,
  category: "Network Fundamentals",
  questionType:  "Single-select",
  question: `You have issued the <strong>power inline police</strong> command from interface configuration mode on a Cisco switch. 

Which of the following best describes what will occur when an attached PD attempts to draw more than its allocated amount of power from the configured interface?  (Select the best answer.)`,
  options: [
    "The port will restart, and a log message will appear on the console.",
    "The port will enter an error-disabled state.",
    "The port will enter an error-disabled state, and a log message will appear on the console.",
    "A log message will appear on the console."
  ],
  correctAnswer:  2,
  explanation: `<p>In this scenario, the port will enter an error-disabled state and a log message will appear on the console when an attached powered device (PD) attempts to draw more than its allocated amount of power from the configured interface.   Because sending an electrical current to a device that does not support Power over Ethernet (PoE) could potentially damage the receiving device, power-sourcing equipment (PSE), such as a PoE-capable switch, will first apply a small voltage to a PoE-enabled port to determine whether a PD is attached to the port. The Institute of Electrical and Electronics Engineers (IEEE) PoE standards require a PD to provide a measurable resistance of approximately 25 kilo Ohms (kohms) when it is probed by a PSE. If the PSE detects a PD, the PSE can then send a signal with a higher voltage to determine the class of the PD. When an IEEE standards-compliant PD receives this higher-voltage signal from a PSE, its response will inform the PSE about the PD's power requirements. The PSE will categorize the PD into an appropriate class, if possible, and will then guarantee a minimum amount of power relative to the class of the PD. If the PSE cannot identify the appropriate class for a PD, the PD will be categorized into the default class and will receive the default amount of power.</p>

<p>Power policing is a Cisco feature that enables a switch to monitor the current draw of connected devices and to take action if the draw exceeds the amount allocated to the PD in accordance with its negotiated power class. The allocated maximum power draw is referred to as the cutoff power value.  You can issue the <strong>power inline police</strong> command from interface configuration mode to enable power policing with the default settings. When power policing is enabled with the default settings for a PoE-capable interface, the interface will enter an error-disabled state, effectively shutting down the port, when an attached PD attempts to draw more than the cutoff power from the configured interface.  A log message describing the event will also be sent to the console. </p>

<p>An interface in an error-disabled state will remain shut down until it is manually reset (by an administrator issuing the <strong>shutdown</strong> and <strong>no shutdown</strong> commands in sequence for the interface) or until the error-disable auto recovery mechanism timer expires and the interface is automatically reset.   Although error-disable detection for inline power is enabled by default on Cisco PoE-capable switches, error-disable auto recovery for inline power is not enabled by default.  Therefore, a port that has been placed into an error-disabled state by an inline-power event will not automatically reset by default. You can issue the <strong>errdisable recovery cause inline-power</strong> command from global configuration mode to enable error-disable auto recovery for inline power. </p>

<p>You can issue the <strong>power inline police action log</strong> command to change the default power policing behavior.  When the <strong>log</strong> action is configured, a PoE-enabled interface will restart and send a log message to the console when an attached PD attempts to draw more than the cutoff power from the configured interface. This will typically cause the PD to reboot and to renegotiate its power requirements. </p>`,
  reference: [
    {
      title: "CCNA 200-301 Official Cert Guide",
      description:  "Volume 2, Chapter 13: LAN Architecture, Power over Ethernet (PoE)"
    },
    {
      title: "Cisco:  Configuring Power over Ethernet:  PoE Policing Modes",
      description: "Official documentation on configuring PoE policing modes and behavior",
      link: "https://www.cisco.com/c/en/us/td/docs/switches/lan/catalyst3750x_3560x/software/release/12-2_55_se/configuration/guide/3750xscg/swpoe.html"
    }
  ]
},
  {
  id: 475,
  category: "Automation and Programmability",
  questionType: "Multi-select",
  question: `A REST API query returns the following output:

<pre>
{
  "id": 12345,
  "fname": "John",
  "lname": "Doe",
  "group": {
    "read-only": {
      "Accounting Folder",
      "Sales Folder"
    }
  }
}
</pre>

Which of the following statements are true?   (Select 2 choices.)`,
  options: [
    "The value of the id key is an array.",
    "The value of the group key is an object.",
    "The value of the lname key is not a text value.",
    "The value of the fname key is a text value.",
    "The value of the role key is an object.",
    "The value of the read-only key is a text value."
  ],
  correctAnswer: [1, 3],  // Multiple correct answers (indices 1 and 3)
  explanation: `<p>Of the available choices, it is true that the value of the <strong>fname</strong> key in the Representational State Transfer (REST) Application Programming Interface (API) output above is a text value. In addition, it is true that the value of the <strong>group</strong> key in the output is an object.  REST is an API used primarily by web servers to retrieve data from the Hypertext Transfer Protocol (HTTP) or HTTP Secure (HTTPS) to the client. Data returned from a REST API query can be formatted in either JSON or XML by the API.  The REST API that is being queried in this scenario has returned output in JavaScript Object Notation (JSON) format. JSON is a data modeling language that is commonly used in configuration management and network automation applications.  JSON output contains key and value pairs. </p>

<p>A single JSON object can contain multiple key and value pairs.  Each key and value pair inside a JSON object is separated from the others by a comma (,).  Furthermore, each pair's key is separated from its value by a colon (:). The element in quotation marks on the left side of the colon in the key and value pair is the key.  Keys are case sensitive, and unlike values, they might not be enclosed in quotation marks. There are several data value types that can be returned in JSON output:  text, numeric, array, object, Boolean, and null. </p>

<p>The value of the <strong>lname</strong> key, the value of the <strong>fname</strong> key, and the value of the <strong>role</strong> key are all text values in the JSON object in this scenario. JSON keys and JSON text values are always enclosed in quotation marks.    Text values typically contain alphanumeric or Unicode characters.  </p>

<p>The value of the <strong>id</strong> key is numeric in the JSON object in this scenario.  Numeric data is defined by digits that are not enclosed in quotation marks. If a string of digits is enclosed in quotation marks, it will be treated as text even if it contains only numeric characters. The numeric value of the <strong>id</strong> key in this scenario is 12345.</p>

<p>The value of the <strong>group</strong> key in this scenario is another JSON object. A JSON object can be identified by the curly brackets that mark the beginning and the end of the object, a left curly bracket ({) indicates the beginning of the object, and a right curly bracket (}) indicates the end of the JSON object. JSON objects can be nested as values inside other JSON objects.   In addition, JSON objects can be specified as values inside other JSON objects. In this scenario, the value of the <strong>group</strong> key is a JSON object that is nested inside the primary JSON object: </p>

<pre>
{
  "role": "Read-ables",
  "group": {
    "Accounting Folder",
    "Sales Folder"
  }
}
</pre>

<p>As previously mentioned, a JSON object is a group of key and value pairs. The JSON object above contains two key and value pairs.  The <strong>role</strong> key contains a text value of <strong>Read-ables</strong>. The <strong>group</strong> key contains an array. </p>

<p>The value of the <strong>read-only</strong> key in this scenario is an array that contains two text values: <strong>Accounting Folder</strong> and <strong>Sales Folder</strong>.  Unlike JSON objects, arrays contain values only.  They do not contain keys. Arrays are typically not placed inside curly brackets. Instead, they use a left square bracket ([) indicates the beginning of the array.  A right square bracket (]) indicates the end of the array.   Each value inside an array is separated from the others by a comma (,). Arrays are typically used to store information for quick reference.  The JSON data type used in an array can contain any of the other JSON data types.  For example, an array can include JSON objects or other arrays as values.  In addition, a given array need not contain only a single data type. </p>

<p>There are no Boolean or null values in the JSON output in this scenario.   A given JSON key can contain a Boolean value, such as <strong>true</strong> or <strong>false</strong>. Unlike the JSON text and key values, text values, they are not typically not placed inside quotation marks.  Null values technically have the value of null.  However, unlike every other key or value type, no JSON key can be assigned a null value by specifying <strong>null</strong> without quotation marks.</p>`,
  reference: [
    {
      title: "Boson CCNA Curriculum 200-301",
      description:  "Module 9: Automation and Programming, JSON"
    },
    {
      title: "CCNA 200-301 Official Cert Guide",
      description:  "Volume 2, Chapter 18: Understanding REST and JSON, Interpreting JSON"
    }
  ]
},
  {
  id: 84,
  category: "IP Connectivity",
  questionType: "Single-select",
  question: `Which of the following is most likely to be configured with a higher AD value than an OSPF path that is learned by the same router?`,
  options: [
    "a fully specified static route",
    "a directly connected route",
    "a default route",
    "a floating static route"
  ],
  correctAnswer:  3,
  explanation: `<p>Of the available choices, a floating static route is more likely than the others to be configured with a higher administrative distance (AD) value than an Open Shortest Path First (OSPF) path that is learned by the same router.  Static routes are paths that are manually configured by an administrator.  A static route defines a specific path for the router to use to send packets that are either destined for a specific network or destined for any network that is not otherwise specifically defined in the routing table.  Floating static routes are typically configured with an AD value that is numerically higher than a dynamic routing protocol, which ensures that the routing protocol path is always selected by the router unless the path becomes unavailable. </p>

<p>A fully specified static route is not likely to be configured with a higher AD value than an OSPF path that is learned by the same router.  A fully specified static route is a single manually configured path to a given network or host through a specific interface or next-hop Internet Protocol (IP) address. By default, a static route is considered less trustworthy than a route to a network that is directly connected to the router and more trustworthy than a route that has been learned dynamically.  Because static routes are manually configured, the CPU is not tasked with calculating paths.  Therefore, CPU overhead is kept low.  One use for a static route might be to keep overhead low on a stub router.  Stub routers are routers for stub networks, which are networks that do not forward path information to other networks and do not receive path information from other networks. </p>

<p>A default route is not likely to be configured with a higher AD value than an OSPF path that is learned by the same router. A default route is used to send packets that are destined for a location that is not listed elsewhere in the routing table. If a router were required to store a specific route to every destination network on the Internet, routing tables would grow exponentially and router performance would deteriorate. Default routes help keep routing tables small.  A default route can be a static route manually configured by an administrator, or it can be a dynamically learned route advertised by another router. </p>

<p>A directly connected route is not likely to be configured with a higher AD value than an OSPF path that is learned by the same router. A directly connected route automatically appears in the routing table for each interface that has an IP address and that is in an active state. If an interface is configured with an IP address in a particular network, a directly connected route to that network will not appear in the routing table until the interface becomes active. For example, an interface that is configured with an IP address but that is also in an administratively down state will not cause a directly connected route to automatically appear in the routing table.  In addition, if the interface was previously in an active state, the existing directly connected route is automatically removed from the routing table when the interface enters an inactive state.  By default, directly connected routes are considered to be the most trustworthy. </p>`,
  reference: [
    {
      title: "Boson CCNA Curriculum 200-301",
      description: "Module 6: IP Routing, Configuring a Floating Static Route"
    },
    {
      title: "Cisco:  Configuring Static Routing:  Information About Static Routing",
      description: "Official Cisco documentation on static routing configuration",
      link: "https://www.cisco.com/c/en/us/td/docs/ios-xml/ios/iproute_static/configuration/xe-16/irs-xe-16-book/irs-static-routes.html"
    }
  ]
},
  {
  id: 51,
  category: "IP Connectivity",
  questionType:  "Multi-select",
  question: `On which interfaces is the OSPF nonbroadcast network type enabled by default?  (Select 2 choices.)`,
  options: [
    "Frame Relay",
    "X.25",
    "FDDI",
    "HDLC",
    "PPP",
    "Ethernet"
  ],
  correctAnswer: [0, 1],  // Multiple correct answers (indices 0 and 1)
  explanation: `<p>The OSPF nonbroadcast network type is enabled by default on Frame Relay and X.25 interfaces.  If the <strong>ip ospf network</strong> command has not been issued for an OSPF interface, the default network type will be used.  The default OSPF network type depends upon the type of network to which the interface is connected. </p>

<p>There are five OSPF network types: </p>

<ul>
<li>Broadcast</li>
<li>Nonbroadcast</li>
<li>Point-to-point</li>
<li>Point-to-multipoint broadcast</li>
<li>Point-to-multipoint nonbroadcast</li>
</ul>

<p>The Open Shortest Path First (OSPF) broadcast network type is enabled by default on Fiber Distributed Data Interface (FDDI) and Ethernet interfaces, including Fast Ethernet and Gigabit Ethernet interfaces. On broadcast networks, designated router (DR) and backup designated router (BDR) elections are performed.  Multicast updates are sent, so manual configuration of neighbor routers with the <strong>neighbor</strong> command is not required. By default, the Hello timer is set to 10 seconds and the dead timer is set to 40 seconds. To configure an OSPF broadcast network, you should issue the <strong>ip ospf network broadcast</strong> command. </p>

<p>On nonbroadcast networks, DR and BDR elections are performed.  Nonbroadcast networks do not allow multicasts; therefore, manual configuration of neighbor routers with the <strong>neighbor</strong> command is required so that OSPF sends unicast updates.  By default, the Hello timer is set to 30 seconds and the dead timer is set to 120 seconds. To configure an OSPF nonbroadcast network, which is also called a nonbroadcast multiaccess (NBMA) network, you should issue the <strong>ip ospf network non-broadcast</strong> command.</p>

<p>The OSPF point-to-point network type is enabled by default on High-Level Data Link Control (HDLC) and Point-to-Point Protocol (PPP) interfaces. On point-to-point networks, DR and BDR elections are not performed. Multicast updates are sent, so manual configuration of neighbor routers with the <strong>neighbor</strong> command is not required. By default, the Hello timer is set to 10 seconds and the dead timer is set to 40 seconds. To configure an OSPF point-to-point network, you should issue the <strong>ip ospf network point-to-point</strong> command. </p>

<p>On OSPF point-to-multipoint networks, DR and BDR elections are not performed. Multicast updates are sent, so manual configuration of neighbor routers is not required. By default, the Hello timer is set to 30 seconds and the dead timer is set to 120 seconds. To configure an OSPF point-to-multipoint network, you should issue the <strong>ip ospf network point-to-multipoint</strong> command. </p>

<p>On OSPF point-to-multipoint nonbroadcast networks, DR and BDR elections are not performed. Nonbroadcast networks do not allow multicasts; therefore, manual configuration of neighbor routers with the <strong>neighbor</strong> command is required so that unicast updates.  By default, the Hello timer is set to 30 seconds and the dead timer is set to 120 seconds. To configure an OSPF point-to-multipoint nonbroadcast network, you should issue the <strong>ip ospf network point-to-multipoint non-broadcast</strong> command. </p>`,
  reference: [
    {
      title: "Boson CCNA Curriculum 200-301",
      description: "Module 6: IP Routing, OSPF Interface Types"
    },
    {
      title: "Cisco:  Initial Configurations for OSPF over a Point-to-Point Link",
      description: "Official Cisco documentation on OSPF network types and configuration",
      link: "https://www.cisco.com/c/en/us/support/docs/ip/open-shortest-path-first-ospf/13682-10. html"
    },
    {
      title: "Cisco: OSPF Design Guide:  Adjacencies on Non-Broadcast Multi-Access (NBMA) Networks",
      description: "Understanding OSPF behavior on NBMA networks",
      link: "https://www.cisco.com/c/en/us/support/docs/ip/open-shortest-path-first-ospf/13685-13. html"
    },
    {
      title: "Cisco: OSPF Command Reference:  ip ospf network",
      description: "Command reference for configuring OSPF network types",
      link: "https://www.cisco.com/c/en/us/td/docs/ios-xml/ios/iproute_ospf/command/iro-cr-book/ospf-i1. html"
    },
    {
      title: "Cisco:  Configuring OSPF",
      description: "Complete guide to OSPF configuration",
      link: "https://www.cisco.com/c/en/us/td/docs/ios-xml/ios/iproute_ospf/configuration/xe-16/iro-xe-16-book/iro-cfg. html"
    }
  ]
},

  {
  id: 656,
  category: "Network Access",
  questionType:  "Single-select",
  question: `<img src="/images/vtp-topology-656.png" alt="VTP Network Topology" style="max-width: 100%; height:  auto; margin: 20px 0;" />

You recently upgraded your company's network to facilitate the addition of the new East Sales office. You want the VLAN topology of the new office to be the same as the existing West Sales office.  The Development department has its own VLAN configuration and should not be affected by the addition of the new switch.

You have installed a new switch, Switch3, at the East Sales office and connected it to Switch2 with an 802.1Q trunk. Switch3 has been configured with a VTP domain name and placed into client mode. Later, you notice that the VLAN database on Switch3 is not being populated with VLAN information from Switch1. 

What changes should you make to allow the VLAN database on Switch3 to be populated? `,
  options: [
    "Change the domain name on Switch2 to cisco.",
    "Manually populate the VLAN database on Switch3.",
    "Change the domain name on Switch3 to static.",
    "Change Switch2 to client mode."
  ],
  correctAnswer:  0,
  explanation: `<p>In this scenario, you should change the domain name on Switch2 to <strong>cisco</strong>. For VLAN Trunking Protocol (VTP) to synchronize virtual local area network (VLAN) configuration information between switches, four requirements must be met:</p>

<ul>
<li>The switches must be connected by an ISL or 802.1Q trunk link.</li>
<li>The case-sensitive VTP domain must match. </li>
<li>The case-sensitive VTP password must match, if one is configured.</li>
<li>VTP version must match.</li>
</ul>

<p>The exhibit indicates that switches in this scenario are connected by 802.1Q trunk links, do not have VTP passwords configured, and are configured to use the same VTP version. However, Switch2 is configured with a different VTP domain than Switch1 and Switch3 and therefore cannot forward VTP advertisements until its VTP domain is changed to match the VTP domain configured on Switch1 and Switch3.</p>

<p>Switches participating in a VTP configuration can be configured in server, client, or transparent mode. Server mode enables you to create, delete, and change VLAN information. Server mode is configured by default. When a switch is operating in VTP client mode, you cannot make changes to the VLAN database on a switch configured for client mode. A switch that is operating in VTP transparent mode does not participate in VTP.  Any VLAN additions, changes, or deletions made to a switch in VTP transparent mode remain on the local switch and are not propagated to other switches.  However, a switch in VTP transparent mode can forward VTP advertisements that are received from other switches in the same VTP domain.  Because Switch2 is operating in transparent mode, which means that it maintains its own VLAN configuration, it can forward VTP advertisement messages, provided that the switch has the same domain name or has its VTP domain name set to <strong>null</strong>.</p>

<p>Changing Switch2 to client mode will not allow messages to flow to Switch3, because Switch2 is configured with the wrong VTP domain name. Therefore, Switch2 would ignore VTP messages from Switch1 and no VTP information would be forwarded to Switch3. Likewise, changing Switch3 to server mode will not allow it to receive the VLAN configuration from Switch1, because the VTP information must still be passed through Switch2. No direct link exists between Switch1 and Switch3. </p>`,
  reference: [
    {
      title: "Boson CCNA Curriculum 200-301",
      description: "Module 5: Switching and Network Access, Understanding and Configuring VTP"
    },
    {
      title: "CCNA 200-301 Official Cert Guide",
      description:  "Volume 1, Chapter 8: Implementing Ethernet Virtual LANs, VLAN Trunking Protocol"
    },
    {
      title: "Cisco:  Understanding VLAN Trunk Protocol (VTP)",
      description: "Comprehensive guide to VTP operation and configuration",
      link: "https://www.cisco.com/c/en/us/support/docs/lan-switching/vtp/10558-21.html"
    },
    {
      title: "Cisco:  Catalyst 3560 Software Configuration Guide:  Configuring VTP",
      description:  "Detailed VTP configuration procedures and best practices",
      link: "https://www.cisco.com/c/en/us/td/docs/switches/lan/catalyst3560/software/release/12-2_55_se/configuration/guide/3560_scg/swvtp.html"
    }
  ]
},
  {
  id: 705,
  category: "Network Access",
  questionType:  "Single-select",
  question: `Which of the following management frames contain the SSID of a wireless network?`,
  options: [
    "deauthentications",
    "association requests",
    "association responses",
    "beacons",
    "probe requests"
  ],
  correctAnswer: 3,
  explanation: `<p>Beacons are management frames that contain the Service Set Identifier (SSID) of a wireless network. Beacon frames contain a variety of information about wireless networks.  An SSID is a label that identifies a wireless network and is broadcast by an access point (AP). The SSID is one of several components of a beacon frame.  Beacon frames also contain timestamp information, authentication information, data transfer speed information, and vendor-specific proprietary information.  Beacon frames can be disabled in order to hide the presence of a wireless network. However, although disabling beacon frames can help prevent users from locating wireless networks, tools such as NetStumbler can identify wireless networks, regardless of whether the beacon frame is active. </p>

<p>Association requests are not management frames that contain the SSID of a wireless network. An association request is sent from the wireless client to the AP to request access to the wireless network. The process of requesting access to the wireless network comes after the client has been authenticated by an AP or authentication server. </p>

<p>Once the AP has received and processed the association request, an association response is sent back to the wireless client. An association response provides the wireless client with an answer as to whether the client will be allowed to access the network. An association response is not a management frame that contains the SSID of a wireless network.</p>

<p>Deauthentication frames are not management frames that contain the SSID of a wireless network. Deauthentication management frames are sent by either the AP or the wireless client to terminate the connection.  Deauthentication messages are typically used to end an authorized connection; however, they can also be used to end wireless sessions between rogue clients or rogue APs.</p>

<p>Probe request frames are not management frames that contain the SSID of a wireless network.  Probe request management frames are sent by wireless clients to request network information from any AP in the transmission range of the client. Once an AP receives a probe request, the AP can provide a probe response.  Probe responses provide the client with information about the corresponding wireless network. </p>`,
  reference: [
    {
      title: "Boson CCNA Curriculum 200-301",
      description: "Module 3: Wireless Networking Fundamentals, Associating With an AP"
    },
    {
      title: "O'Reilly Press: 802.11 Wireless Networks: The Definitive Guide:  Chapter 4. 802.11 Framing in Detail",
      description: "Comprehensive explanation of 802.11 frame types and structures",
      link: "https://www.oreilly.com/library/view/80211-wireless-networks/0596100523/ch04.html"
    },
    {
      title:  "Wi-Fi Planet: Understanding 802.11 Frame Types",
      description: "Overview of different 802.11 management, control, and data frames",
      link: "http://www.wi-fiplanet.com/tutorials/article. php/1447501"
    }
  ]
},
  {
  id: 453,
  category: "Security Fundamentals",
  questionType: "Single-select",
  question: `Which of the following is used by WEP to provide encryption?`,
  options: [
    "AES",
    "RC4",
    "TKIP",
    "GCMP",
    "CCMP"
  ],
  correctAnswer: 1,
  explanation: `<p>RC4 is a stream cipher encryption algorithm used in the Wired Equivalent Privacy (WEP) protocol to provide encryption.  RC4 is less secure than Advanced Encryption Standard (AES), which is used by Wi-Fi Protected Access 2 (WPA2) and WPA3. Unlike AES, which supports an encryption key length of 256 bits, RC4 supports an encryption key length of up to 128 bits.  Consequently, RC4 is not as secure as AES.  Furthermore, RC4 uses a stream cipher, which is a less secure encryption method.  RC4 is not used with WPA2.</p>

<p>AES and Counter Mode with Cipher Block Chaining Message Authentication Code Protocol (CCMP) are used by WPA2 to provide message integrity checks (MICs) and encryption.  Wireless security protocols use MICs to prevent data tampering.  Encryption is used to protect confidentiality. </p>

<p>WPA2, which implements the 802.11i wireless standard, was developed to address the security vulnerabilities in the original WPA standard. One enhancement over WPA included in WPA2 is the encryption algorithm.  AES is a stronger encryption algorithm than the RC4 algorithm used by earlier wireless standards. When AES is implemented, a 128-bit block cipher is used to encrypt data and a security key of 128, 192, or 256 bits can be used.  This is a processor-intensive operation, and implementing WPA2 and AES often requires new hardware, such as new wireless access points (WAPs) and new client wireless network adapters.</p>

<p>In addition to AES, WPA2 also uses CCMP to provide encryption.  CCMP is an encryption mechanism that uses block ciphers.  In WPA2, CCMP is used by AES during the encryption process.  The WPA2 encryption process is thus sometimes known as AES-CCMP. </p>

<p>Temporal Key Integrity Protocol (TKIP) is used to provide MICs and encryption in the WPA protocol. WPA is the predecessor to WEP and the predecessor of WPA2. The WPA TKIP implementation provides improvements over WEP but uses RC4 as the encryption algorithm.  TKIP supports an encryption key of up to 128 bits, whereas AES supports an encryption key of 256 bits.  Consequently, TKIP is not specified as the encryption method in the 802.11i standard.</p>

<p>Galois/Counter Mode Protocol (GCMP) is used along with AES to provide MICs and encryption in the WPA3 protocol. The WPA3 protocol was introduced in 2018 as a future replacement for WPA2. GCMP is considered to be stronger and more efficient than CCMP. GCMP uses AES to provide encryption and Galois Message Authentication Code (GMAC) to provide MICs. </p>`,
  reference: [
    {
      title: "Boson CCNA Curriculum 200-301",
      description: "Module 8:  Security Fundamentals, Wireless Security"
    },
    {
      title: "CCNA 200-301 Official Cert Guide",
      description:  "Volume 1, Chapter 28: Securing Wireless Networks, WPA, WPA2, and WPA3"
    }
  ]
},
  {
  id: 494,
  category: "Network Access",
  questionType: "Single-select",
  question: `Which of the following best describes a lightweight AP in sniffer mode?`,
  options: [
    "It captures wireless traffic for analysis.",
    "It enables a failsafe if the CAPWAP connection goes down.",
    "It is the default operating mode for a lightweight AP.",
    "It acts as a dedicated connection between two networks."
  ],
  correctAnswer: 0,
  explanation: `<p>A Cisco lightweight access point (AP) operating in sniffer mode captures wireless traffic for analysis. A lightweight AP provides an interface for wireless clients to connect to the wireless local area network (WLAN).  However, unlike autonomous APs, a lightweight AP relies on a Cisco wireless LAN controller (WLC) for management and configuration.  Sniffer mode allows a lightweight AP to capture wireless traffic, similar to the way a wired network sniffer behaves. When traffic is captured, a lightweight AP that is operating in sniffer mode will send the traffic to an analyzer, which is typically software that is installed on a PC or other host. </p>

<p>Local mode, not sniffer mode, is the default operating mode for a lightweight AP. A Cisco lightweight AP operating in local mode is capable of providing multiple basic service sets (BSSs) on a single channel.   In this mode, the AP can connect to a WLC and can provide client connectivity.   In addition, an AP operating in local mode scans all wireless channels as a means of monitoring wireless quality and security.  The connection between a lightweight AP and a WLC is created by using two tunnels established by the Control and Provisioning of Wireless Access Points (CAPWAP) tunneling protocol.   Information sent between lightweight APs and the WLC is encapsulated in Internet Protocol (IP) packets. This process enables a lightweight AP and WLC to manage connectivity to the same WLAN yet be separated by both physical and logical means.</p>

<p>A Cisco lightweight AP operating in FlexConnect mode, not sniffer mode, enables a failsafe if the CAPWAP connection goes down. FlexConnect mode does not provide BSSs.  When configured, FlexConnect mode enables a lightweight AP to switch traffic between a given Service Set Identifier (SSID) and a given virtual local area network (VLAN).</p>

<p>A Cisco lightweight AP operating in bridge mode, not sniffer mode, acts as a dedicated connection between two networks.  Lightweight APs operating in bridge mode can connect to other networks in either a point-to-point or point-to-multipoint fashion. When multiple APs are configured in bridge mode, the collection of lightweight APs can be used to form a mesh network. </p>`,
  reference: [
    {
      title: "CCNA 200-301 Official Cert Guide",
      description:  "Volume 1, Chapter 27: Analyzing Cisco Wireless Architectures, Cisco AP Modes"
    }
  ]
},
  {
  id: 461,
  category: "Automation and Programmability",
  questionType: "Matching",
  question: `<p>Match each southbound API or SDN technology on the left with its correct characteristic on the right.</p>`,
  
  // For matching questions, we structure data differently
  matchingPairs: {
    terms: [
      { id: "onepk", text: "OnePK" },
      { id: "openflow", text: "OpenFlow" },
      { id: "opflex", text: "OpFlex" },
      { id: "netconf", text: "NETCONF" }
    ],
    definitions: [
      { id: "def1", text: "is a Cisco-proprietary API", correctMatch: "onepk" },
      { id: "def2", text: "uses an imperative SDN model", correctMatch: "openflow" },
      { id: "def3", text: "uses a declarative SDN model", correctMatch: "opflex" },
      { id: "def4", text: "uses XML and RPCs to configure network devices", correctMatch: "netconf" }
    ]
  },
  
  correctAnswer: {
    onepk: "def1",
    openflow: "def2",
    opflex: "def3",
    netconf: "def4"
  },
  
  explanation: `<p>Software-Defined Networking (SDN) is an intelligent network architecture in which a software controller assumes the control plane functionality for all network devices.   Southbound Application Programming Interfaces (APIs) enable an SDN controller to communicate with devices on the network data plane.  A southbound API is sometimes called a southbound interface (SBI).  NETCONF, OnePK, OpenFlow, and OpFlex are all examples of southbound APIs.   A northbound API is sometimes called a northbound interface (NBI).  Northbound APIs enable an SDN controller to communicate with applications in the application plane.   Examples of northbound APIs include Java Open Services Gateway initiative (OSGi) and Representational State Transfer (REST).</p>

<p>NETCONF uses Extensible Markup Language (XML) and Remote Procedure Calls (RPCs) to configure network devices.  XML is used for both data encoding and protocol messages.  NETCONF typically relies on Secure Shell (SSH) for transport.  </p>

<p>OpFlex uses a declarative SDN model in which the instructions that are sent to the controller are not so detailed.  The controller allows the devices in the data plane to make more network decisions about how to implement the policy.  </p>

<p>OpenFlow uses an imperative SDN model in which detailed instructions are sent to the SDN controller when a new policy is to be configured.  The SDN controller manages both the network and the policies applied to the devices.  </p>

<p>The OnePK API is a Cisco-proprietary API.   It uses Java, C, or Python to configure network devices.  It can use either Secure Sockets Layer (SSL) or Transport Layer Security (TLS) to encrypt data in transit.  </p>`,
  
  reference: [
    {
      title: "Boson CCNA Curriculum 200-301",
      description: "Module 9: Automation and Programming, Southbound APIs"
    },
    {
      title: "Cisco:  NETCONF Protocol:  Information About the NETCONF Protocol (PDF)",
      description: "Official documentation on NETCONF protocol",
      link: "https://www.cisco.com/c/en/us/td/docs/ios-xml/ios/prog/configuration/173/b_173_programmability_cg/netconf_protocol.html"
    },
    {
      title: "Cisco:  Cisco Application Policy Infrastructure Controller (APIC)",
      description: "Information about Cisco APIC and OpFlex",
      link: "https://www.cisco.com/c/en/us/products/cloud-systems-management/application-policy-infrastructure-controller-apic/index.html"
    },
    {
      title: "Cisco: OpenFlow:  Information About OpenFlow",
      description: "Official documentation on OpenFlow protocol",
      link:  "https://www.cisco.com/c/en/us/td/docs/switches/datacenter/nexus9000/sw/7-x/programmability/guide/b_Cisco_Nexus_9000_Series_NX-OS_Programmability_Guide/b_Cisco_Nexus_9000_Series_NX-OS_Programmability_Guide_chapter_011.html"
    },
    {
      title: "Cisco:  Implementing OnePK:  Information About onePK",
      description: "Official documentation on OnePK API",
      link: "https://www.cisco.com/c/en/us/td/docs/ios-xml/ios/onepk/configuration/xe-3s/onepk-xe-3s-book/onepk-about.html"
    },
    {
      title: "Cisco:  Cisco Extensible Network Controller:  Product Architecture and Functions (PDF)",
      description: "White paper on Cisco XNC architecture",
      link: "https://www.cisco.com/c/dam/en/us/products/collateral/cloud-systems-management/extensible-network-controller-xnc/white-paper-c11-731550.pdf"
    }
  ]
},
  {
  id: 651,
  category: "Network Access",
  questionType: "Single-select",
  question: `<img src="/images/vlan-topology-651.png" alt="VLAN Trunking Topology" style="max-width:  100%; height: auto; margin: 20px 0;" />

SwitchA and SwitchB are connected over an 802.1Q trunk link.  The native VLAN for the trunk link is configured as VLAN 11 on SwitchA.  The native VLAN for the trunk link is the default VLAN on SwitchB.  All of the hosts reside in the same IP subnet. 

Which of the hosts can HostA reach in this scenario?`,
  options: [
    "HostC",
    "none of the hosts",
    "HostD",
    "HostB"
  ],
  correctAnswer: 3,
  explanation: `<p>In this scenario, HostA can ping HostB.  One virtual local area network (VLAN) is considered the native VLAN when 802.1Q encapsulation is configured on a trunk link. Traffic over the native VLAN is not tagged; that is, an 802.1Q header is not added to the frame. When a switch receives a frame without an 802.1Q header, the switch knows that the frame is part of the native VLAN.  By default, VLAN 1 is identified as the native VLAN.  Changing the native VLAN can have unexpected consequences.  For example, if a trunk is manually formed between two switches and the native VLAN is not the same on both ends of the link, any untagged traffic received on the trunk link will be considered by each switch to belong to its locally configured native VLAN, not to the native VLAN that is configured on the sending side of the link.  This could potentially cause connectivity issues such as failed pings between devices that reside in the same VLAN on both sides of the trunk. </p>

<p>In this scenario, the native VLAN for the trunk link on SwitchA is configured as VLAN 11. When HostA sends a ping message to HostB, SwitchA recognizes that HostA is a member of VLAN 11. Therefore, the traffic from HostA is sent untagged across the trunk link to SwitchB. When SwitchB receives the untagged frames from SwitchA, it forwards them to the native VLAN configured for its side of the link, which in this scenario is the default VLAN, VLAN 1. Because HostB is a member of VLAN 1, it will receive the ping messages from HostA and will be able to reply by using the same process in reverse. </p>

<p>HostA cannot ping HostC or HostD.  When HostA attempts to send a ping message to either of these hosts, SwitchA will recognize that HostA is a member of VLAN 11, which is considered the native VLAN for SwitchA's end of the trunk link. Therefore, SwitchA will not add an 802.1Q header to tag the traffic as it crosses the trunk link. When SwitchB receives the untagged traffic from HostA, it will forward the traffic to its locally configured native VLAN, which is VLAN 1. Because neither HostC nor HostD are members of VLAN 1, they will not receive the traffic from HostA. </p>`,
  reference: [
    {
      title: "Boson CCNA Curriculum 200-301",
      description: "Module 5: Switching and Network Access, Configuring Trunk Ports"
    },
    {
      title: "CCNA 200-301 Official Cert Guide",
      description: "Volume 1, Chapter 8: Implementing Ethernet Virtual LANs, Mismatched Native VLAN on a Trunk"
    },
    {
      title: "Cisco:  Configuring VLANs:  Configuring VLAN Trunks",
      description: "Official documentation on configuring VLAN trunks and native VLAN settings",
      link: "https://www.cisco.com/c/en/us/td/docs/switches/lan/catalyst9300/software/release/16-12/configuration_guide/vlan/b_1612_vlan_9300_cg/configuring_vlans.html"
    },
    {
      title: "Cisco: IEEE 802.1Q Tunneling:  802.1Q Tunneling Configuration Guidelines and Restrictions",
      description: "Understanding 802.1Q trunking and native VLAN behavior",
      link: "https://www.cisco.com/c/en/us/td/docs/switches/lan/catalyst9300/software/release/16-12/configuration_guide/vlan/b_1612_vlan_9300_cg/configuring_layer_2_tunneling.html"
    }
  ]
},
  {
  id: 63,
  category: "IP Connectivity",
  questionType: "Single-select",
  question: `You administer an OSPF network that contains a mixture of Ethernet, FastEthernet, GigabitEthernet, and TenGigabitEthernet links. The reference bandwidth is set to the default value of 100.

Which of the following will occur? (Select the best answer.)`,
  options: [
    "All links will have different OSPF costs.",
    "GigabitEthernet and TenGigabitEthernet links will have the same OSPF cost.",
    "Ethernet and FastEthernet links will have the same OSPF cost.",
    "FastEthernet, GigabitEthernet, and TenGigabitEthernet links will have the same OSPF cost.",
    "All links will have the same OSPF cost."
  ],
  correctAnswer: 3,
  explanation: `<p>FastEthernet, GigabitEthernet, and TenGigabitEthernet links will have the same Open Shortest Path First (OSPF) cost. An OSPF routing process uses a cost metric that is based on the bandwidth of an interface relative to a reference bandwidth. The formula to determine the cost of an interface is as follows:</p>

<pre>
cost = reference bandwidth / interface bandwidth
</pre>

<p>The default reference bandwidth is 100 megabits per second (Mbps). You can issue the <strong>auto-cost</strong> command from router configuration mode to change the reference bandwidth for an OSPF routing process. The syntax for the <strong>auto-cost</strong> command is <strong>auto-cost reference-bandwidth ref-bw</strong>, where <em>ref-bw</em> is the reference bandwidth expressed as an integer value in megabits per second between 1 and 4294967. Therefore, the default value of the <em>ref-bw</em> parameter is 100.</p>

<p>The minimum supported cost for an OSPF interface is 1, and any values that calculate to less than 1 are rounded up to 1. Therefore, any link with an interface bandwidth greater than or equal to 100 Mbps will result in a cost of 1 by default. As a result, the 100-Mbps FastEthernet links, the 1-Gbps GigabitEthernet links, and the 10-Gbps TenGigabitEthernet links in this scenario will all have a cost of 1; the 10-Mbps Ethernet links will have a cost of 10.</p>

<p>If the reference bandwidth is less than the fastest routed link on the network, a situation can arise where the cost of two interfaces is the same even though their link speeds are different. When an OSPF routing process is presented with multiple routes of the same cost, equal-cost load balancing is used to distribute packets evenly among the available paths. This distribution will cause some packets in this scenario to take suboptimal routes to their destinations. To prevent this from occurring, the reference bandwidth should be a value greater than or equal to the bandwidth of the fastest routed link in the administrative domain. Alternatively, you can manually configure an OSPF cost for each interface by issuing the <strong>ip ospf cost</strong> command from interface configuration mode.</p>`,
  reference: [
    {
      title: "Boson CCNA Curriculum 200-301",
      description: "Module 6: IP Routing, OSPF Route Processing"
    },
    {
      title: "Cisco: OSPF Design Guide: OSPF Cost",
      description: "Official Cisco documentation on OSPF cost calculations and design",
      link: "https://www.cisco.com/c/en/us/support/docs/ip/open-shortest-path-first-ospf/7039-1.html"
    },
    {
      title: "Cisco: OSPF Commands: auto-cost",
      description: "Explanation of the auto-cost command in OSPF",
      link: "https://www.cisco.com/c/en/us/td/docs/ios-xml/ios/iproute_ospf/command/iro-ospf-cr-book/iro-ospf-c1.html#wp1239497003"
    },
    {
      title: "Cisco: OSPF Commands: ip ospf cost",
      description: "Explanation of the ip ospf cost command",
      link: "https://www.cisco.com/c/en/us/td/docs/ios-xml/ios/iproute_ospf/command/iro-ospf-cr-book/iro-ospf-c1.html#wp1239406843"
    }
  ]
},
  {
  id: 485,
  category: "Network Access",
  questionType: "Single-select",
  question: `Which of the following connects a wireless client to a wired network without requiring a separate wireless controller? (Select the best answer.)`,
  options: [
    "autonomous AP deployment",
    "embedded AP deployment",
    "lightweight AP deployment",
    "cloud-based AP deployment"
  ],
  correctAnswer: 0,
  explanation: `<p>Of the available choices, an autonomous access point (AP) deployment connects a wireless client to a wired network without requiring a separate wireless controller. An AP is a device that connects a wireless client to a wired network. An autonomous AP contains network interfaces for both wireless and wired networks; it is typically deployed as part of an autonomous AP architecture in which APs are connected directly to the access layer of the three-tier hierarchical network model.</p>

<p>A lightweight AP deployment connects a wireless client to a wired network but requires a separate wireless controller. Wireless clients connect to lightweight APs, which are capable of performing real-time wireless network functions but rely on a Cisco wireless LAN controller (WLC) for management functions. The connection between a lightweight AP and a WLC is created by using two tunnels established by the Control and Provisioning of Wireless Access Points (CAPWAP) tunneling protocol. Information sent between lightweight APs and the WLC is encapsulated in Internet Protocol (IP) packets. This process enables a lightweight AP and WLC to manage connectivity to the same wireless local area network (WLAN) yet be separated by both physical and logical means.</p>

<p>A cloud-based AP deployment connects a wireless client to a wired network but requires a separate wireless controller. For example, a Cisco Meraki AP provides wireless access by connecting to a centralized management system known as the Cisco Meraki Cloud. APs deployed at the access layer of the three-tier hierarchical network model contact the cloud in order to automatically configure themselves. APs are managed through a cloud-based dashboard.</p>

<p>An embedded AP deployment connects a wireless client to a wired network but requires a separate wireless controller. The primary difference between this deployment and others is that the WLC is embedded within a stack of switching hardware instead of existing as a separate entity. APs can connect to the WLC by connecting to switches that are directly hosting the WLC or switch ports that are operating on the same virtual local area network (VLAN) as the WLC.</p>`,
  reference: [
    {
      title: "Boson CCNA Curriculum 200-301",
      description: "Module 1: Network Fundamentals, Controllers"
    },
    {
      title: "CCNA 200-301 Official Cert Guide",
      description: "Volume 1, Chapter 27: Analyzing Cisco Wireless Architectures, Autonomous AP Architecture"
    }
  ]
},
  {
  id: 2,
  category: "IP Connectivity",
  questionType: "Matching",
  question: `<p>Match each route source or protocol to its correct default administrative distance (AD).</p>`,

  matchingPairs: {
    terms: [
      { id: "esgcp", text: "eBGP" },
      { id: "direct", text: "directly connected route" },
      { id: "iegcp", text: "internal EIGRP route" },
      { id: "isis", text: "IS-IS route" },
      { id: "ospf", text: "OSPF route" },
      { id: "rip", text: "RIP route" },
      { id: "static", text: "static route" }
    ],
    definitions: [
      { id: "def1", text: "20", correctMatch: "esgcp" },
      { id: "def2", text: "0", correctMatch: "direct" },
      { id: "def3", text: "90", correctMatch: "iegcp" },
      { id: "def4", text: "115", correctMatch: "isis" },
      { id: "def5", text: "110", correctMatch: "ospf" },
      { id: "def6", text: "120", correctMatch: "rip" },
      { id: "def7", text: "1", correctMatch: "static" }
    ]
  },

  correctAnswer: {
    esgcp: "def1",
    direct: "def2",
    iegcp: "def3",
    isis: "def4",
    ospf: "def5",
    rip: "def6",
    static: "def7"
  },

  explanation: `<p>Route preference is based on the administrative distance (AD) of the connectivity method or the routing protocol used. When multiple routes to a network exist, a router prefers the routing protocol with the lowest AD. The following list contains the most commonly used ADs:</p>
<table>
<tr><th>Route Source</th><th>AD</th></tr>
<tr><td>Directly connected route</td><td>0</td></tr>
<tr><td>Static route</td><td>1</td></tr>
<tr><td>EIGRP summary route</td><td>5</td></tr>
<tr><td>eBGP</td><td>20</td></tr>
<tr><td>Internal EIGRP</td><td>90</td></tr>
<tr><td>IGRP</td><td>100</td></tr>
<tr><td>OSPF</td><td>110</td></tr>
<tr><td>IS-IS</td><td>115</td></tr>
<tr><td>RIP</td><td>120</td></tr>
<tr><td>External EIGRP</td><td>170</td></tr>
<tr><td>iBGP</td><td>200</td></tr>
<tr><td>Unknown</td><td>255</td></tr>
</table>
<p>Directly connected routes (AD 0) are preferred over any other route to the same network. Static routes (AD 1) are preferred after directly connected routes. Internal EIGRP (AD 90) is commonly used and preferred over OSPF (AD 110), IS-IS (AD 115), and RIP (AD 120). An eBGP route's AD is 20. When there are multiple paths to a destination, the protocol with the lowest AD is chosen by the router.</p>
<p>You can configure the AD of routing protocols by using the <strong>distance</strong> command in router configuration mode. For example, to change the AD of OSPF from 110 to 80, enter <code>distance 80</code></p>
<p>You can view the AD in a route by using the <strong>show ip route</strong> command. The AD is the first bracketed number in the output, for example: <pre>O E2 172.150.0.0 [110/5] via 10.19.54.2</pre> The 110 in the brackets is OSPF's default AD.</p>`,
  reference: [
    {
      title: "Boson CCNA Curriculum 200-301",
      description: "Module 6: IP Routing, Understanding AD"
    },
    {
      title: "Cisco: What Is Administrative Distance?",
      description: "Cisco documentation explaining AD values and their usage",
      link: "https://www.cisco.com/c/en/us/support/docs/ip/enhanced-interior-gateway-routing-protocol-eigrp/8653-21.html"
    }
  ]
},

   {
  id: 636,
  category: "Network Fundamentals",
  questionType: "Multi-select",
  question: `Which of the following IP address blocks are defined in RFC 1918? (Select 2 choices.)`,
  options: [
    "203.0.113.0/24",
    "172.16.0.0/12",
    "192.0.2.0/24",
    "198.51.100.0/24",
    "192.168.0.0/16"
  ],
  correctAnswer: [1, 4],
  explanation: `<p>The <strong>172.16.0.0/12</strong> and <strong>192.168.0.0/16</strong> Internet Protocol (IP) address blocks are defined in Request for Comments (RFC) 1918. The Internet Assigned Numbers Authority (IANA) defines three IP address blocks for use in private networks. Because these IP address blocks are intended for private local area network (LAN) use, they are commonly filtered by edge routers so that packets with private IP addresses are not inadvertently routed across the Internet. The following list indicates the IP address blocks that are reserved for private, internal use:</p>
<ul>
<li>10.0.0.0/8</li>
<li>172.16.0.0/12</li>
<li>192.168.0.0/16</li>
</ul>
<p>These IP address blocks correspond to contiguous network ranges within the Class A, B, and C network space. The IP address block 10.0.0.0/8 consists of a single Class A network, the 172.16.0.0/12 IP address block consists of 16 contiguous Class B networks, and the 192.168.0.0/16 IP address block consists of 256 contiguous Class C networks. These private IP address blocks cover the following range of IP addresses:</p>
<ul>
<li>Class A – 10.0.0.0 to 10.255.255.255</li>
<li>Class B – 172.16.0.0 to 172.31.255.255</li>
<li>Class C – 192.168.0.0 to 192.168.255.255</li>
</ul>
<p>The <strong>192.0.2.0/24, 198.51.100.0/24, and 203.0.113.0/24</strong> IP address blocks are reserved by IANA for documentation and example code. In order to mitigate the use of real or private IP addresses in documentation, IANA has defined these three IP address blocks for use in documentation and example code. In addition, IANA has reserved the domain names example.com and example.net for use in documentation and example code. The three reserved address blocks are described in RFC 3757, and their reservation is specified in RFC 5735.</p>`,
  reference: [
    {
      title: "Boson CCNA Curriculum 200-301",
      description: "Module 2: Network Addressing and Transport, Classful Networks"
    },
    {
      title: "CCNA 200-301 Official Cert Guide",
      description: "Volume 1, Chapter 11: Perspectives on IPv4 Subnetting, Networks"
    },
    {
      title: "IETF: RFC 1918: Address Allocation for Private Internets",
      description: "Official RFC defining private IPv4 address ranges",
      link: "https://datatracker.ietf.org/doc/html/rfc1918"
    }
  ]
},
  {
  id: 87,
  category: "IP Services",
  questionType: "Single-select",
  question: `You are configuring a DHCP pool on a Cisco router named RouterA.

Which of the following commands correctly configures a domain name for the pool? (Select the best answer.)`,
  options: [
    "RouterA(config)#domain-name example.com",
    "RouterA(config)#ip domain-name example.com",
    "RouterA(dhcp-config)#domain-name example.com",
    "RouterA(dhcp-config)#ip domain-name example.com",
    "RouterA(config)#ip dhcp pool example.com"
  ],
  correctAnswer: 2,
  explanation: `<p>Issuing the <code>domain-name example.com</code> command in Dynamic Host Configuration Protocol (DHCP) pool configuration mode correctly configures a domain name for the pool in this scenario. From DHCP pool configuration mode, you can issue the <code>domain-name domain-name</code> command to configure the domain name that will be assigned to DHCP clients that are assigned Internet Protocol (IP) addresses from the pool. For example, the following command configures a DHCP pool that has been created on RouterA to assign the domain name <strong>example.com</strong> to clients that are assigned IP addresses from the pool:</p>
<pre>
RouterA(dhcp-config)#domain-name example.com
</pre>
<p>The <code>ip dhcp pool example.com</code> command does not assign a domain name to a DHCP pool. To configure a DHCP pool on a Cisco device, you must first create the pool by issuing the <code>ip dhcp pool pool-name</code> command from global configuration mode, where <strong>pool-name</strong> is the name of the DHCP pool you want to create. For example, issuing the <code>ip dhcp pool example.com</code> command from global configuration mode creates a DHCP pool named <strong>example.com</strong> and places the router into DHCP pool configuration mode, as shown in the following output:</p>
<pre>
RouterA(config)#ip dhcp pool example.com
RouterA(dhcp-config)#
</pre>
<p>In addition to domain names, you can configure other DHCP server options in DHCP pool configuration mode, such as the network range from which IP addresses should be assigned, the default gateway IP address, and the amount of time that is allowed to elapse before IP leases expire.</p>

<p>Aside from creating the DHCP server pool, there is one other common DHCP server pool command that is typically issued in global configuration mode. The <code>ip dhcp excluded-address ip-address [last-address]</code> command is issued in global configuration mode. This command prevents a DHCP server pool from assigning IP addresses to DHCP clients that are reserved for static assignment on other devices.</p>

<p>The <code>ip domain-name example.com</code> command is incorrect syntax if issued in DHCP pool configuration mode. If you issue this command in global configuration mode, the <strong>example.com</strong> domain name is statically configured for the device on which you have issued the command, not assigned from a DHCP server pool. In addition, the <code>domain-name example.com</code> command is incorrect syntax if issued in global configuration mode.</p>`,
  reference: [
    {
      title: "Boson CCNA Curriculum 200-301",
      description: "Module 7: IP Services, DHCP Server Configuration"
    },
    {
      title: "Cisco: Configuring the Cisco IOS DHCP Server",
      description: "Cisco documentation for DHCP server setup",
      link: "https://www.cisco.com/c/en/us/support/docs/ip/dhcp/15274-29.html"
    }
  ]
},
  {
  id: 610,
  category: "Network Fundamentals",
  questionType: "Single-select",
  question: `Which of the following do not indicate a duplex mismatch on an Ethernet LAN? (Select the best answer.)`,
  options: [
    "alignment errors",
    "late collisions",
    "baby giants",
    "runts",
    "FCS errors"
  ],
  correctAnswer: 2,
  explanation: `<p>Of the available choices, <strong>baby giants</strong> do not indicate a duplex mismatch on an Ethernet local area network (LAN). A baby giant is an Ethernet frame that is up to 1,600 bytes in length. The default maximum transmission unit (MTU) size for Ethernet frames is 1,500 bytes, not including the Ethernet header and the cyclic redundancy check (CRC) trailer, which add 18 bytes to the frame. Baby giant frames are slightly larger than an Ethernet frame. These can occur if you use Q-in-Q encapsulation, Multiprotocol Label Switching (MPLS), or any other feature that adds to the size of an Ethernet frame.</p>
<p>A late collision is an Ethernet collision that occurs after 512 bits of a frame have already been transmitted. Typically, collisions are detected within a 51.2-microsecond time frame, or 512 bits. Thus an Ethernet cable that is too long might create late collisions. In addition, a half-duplex port that is connected to a full-duplex port can report late collisions on the half-duplex side of the connection.</p>
<p>Runts, Frame Check Sequence (FCS) errors, and alignment errors can all indicate a duplex mismatch on an Ethernet LAN. Although the half-duplex side of a duplex mismatch will report late collisions, the full-duplex side will report different errors, such as runts, FCS errors, and alignment errors. A runt is a frame that is fewer than 64 bytes and has a bad FCS.</p>`,
  reference: [
    {
      title: "Boson CCNA Curriculum 200-301",
      description: "Module 1: Network Fundamentals, Troubleshooting Interfaces and Cabling"
    },
    {
      title: "CCNA 200-301 Official Cert Guide",
      description: "Volume 1, Chapter 7: Configuring and Verifying Switch Interfaces, Common Layer 1 Problems on Working Interfaces"
    },
    {
      title: "Cisco Press: Ethernet Switching: Ethernet Frame Fields (7.1.4)",
      description: "Understanding Ethernet frame types and errors",
      link: "https://www.ciscopress.com/articles/article.asp?p=2731052&seqNum=6"
    },
    {
      title: "Cisco: Troubleshooting LAN Switching Environments: Configuration Issues",
      description: "Cisco documentation on troubleshooting duplex mismatches and interface problems",
      link: "https://www.cisco.com/c/en/us/support/docs/lan-switching/ethernet/12023-12.html"
    }
  ]
},
 {
  id: 626,
  category: "Network Fundamentals",
  questionType: "Matching",
  question: `<p>Place each address in the correct category: Subnet Address, Host Address, or Broadcast Address.</p>`,
  matchingPairs: {
    terms: [
      { id: "t1", text: "192.168.2.32/27" },
      { id: "t2", text: "192.168.2.32/26" },
      { id: "t3", text: "192.168.4.127/25" },
      { id: "t4", text: "192.168.12.0/22" },
      { id: "t5", text: "192.168.4.255/23" },
      { id: "t6", text: "192.168.12.0/21" }
    ],
    definitions: [
      { id: "d1", text: "Subnet Address", correctMatch: "t1" },
      { id: "d2", text: "Host Address", correctMatch: "t2" },
      { id: "d3", text: "Broadcast Address", correctMatch: "t3" },
      { id: "d4", text: "Subnet Address", correctMatch: "t4" },
      { id: "d5", text: "Host Address", correctMatch: "t5" },
      { id: "d6", text: "Subnet Address", correctMatch: "t6" }
    ]
  },
  correctAnswer: {
    t1: "d1", // Subnet Address
    t2: "d2", // Host Address
    t3: "d3", // Broadcast Address
    t4: "d4", // Subnet Address
    t5: "d5", // Host Address
    t6: "d6"  // Subnet Address
  },
  explanation: `<p>The first address in a subnet is the subnet address, the last address in a subnet is the broadcast address, and all the addresses in between are host addresses. Therefore, to determine whether an address is a subnet address, broadcast address, or host address, you must determine what address range is used for each subnet.</p>
<p>The /27 in the 192.168.2.32/27 address indicates that 27 bits belong to the network portion of a 32-bit Internet Protocol (IP) address. The remaining bits belong to the host portion of the IP address. To determine how many addresses are defined by a subnet mask, use the formula 2^n, where n is the number of bits in the host portion of the address. A /27 subnet mask uses 5 bits for host addresses, so 2^5 equals 32 addresses for the subnet. Networks that are subnetted by using /27 masks are separated into groups of 32 addresses each. For example, the 192.168.2.0 network can be divided into the following eight subnets:
<br>192.168.2.0/27<br>192.168.2.32/27<br>192.168.2.64/27<br>192.168.2.96/27<br>192.168.2.128/27<br>192.168.2.160/27<br>192.168.2.192/27<br>192.168.2.224/27
</p>
<p>These addresses are the subnet addresses for each subnet defined by the subnet mask. Therefore, the 192.168.2.32/27 address is a subnet address. The last address in this subnet, 192.168.2.63/27, is the broadcast address, and the 30 addresses from 192.168.2.33/27 through 192.168.2.62/27 are host addresses.
</p>
<p>The /26 in the 192.168.2.32/26 address indicates that 26 bits belong to the network portion of a 32-bit IP address and 6 bits belong to the host portion. Because 2^6 equals 64, networks that are subnetted by using /26 masks are separated into groups of 64 addresses each. For example, the 192.168.2.0 network can be divided into the following four subnets:<br>
192.168.2.0/26<br>192.168.2.64/26<br>192.168.2.128/26<br>192.168.2.192/26</p>
<p>The 192.168.2.32/26 address is not a subnet address, because it does not match any of these subnet addresses. Nor is 192.168.2.32/26 a broadcast address, because it is not the last address in any of these subnets. Therefore, the 192.168.2.32/26 address is a host address within the 192.168.2.0/26 subnet.
</p>
<p>The /25 in the 192.168.4.127/25 address indicates that 25 bits belong to the network portion and 7 bits belong to the host portion. Because 2^7 equals 128, networks that are subnetted by using /25 masks are separated into groups of 128 addresses each. For example, the 192.168.4.0 network can be divided into the following two subnets:<br>
192.168.4.0/25<br>192.168.4.128/25</p>
<p>The 192.168.4.127/25 address is not a subnet address, because it does not match either of these subnet addresses. However, 192.168.4.127/25 is a broadcast address, because it is the last address in the 192.168.4.0/25 subnet.
</p>
<p>The /23 in the 192.168.4.255/23 address indicates that 23 bits belong to the network portion and 9 bits belong to the host portion. Because 2^9 equals 512, networks that are subnetted by using /23 masks are separated into groups of 512 addresses each. A single Class C network address includes 256 addresses, so you must combine two networks to create a single subnet with 512 addresses. For example, you can create the following subnets:
<br>192.168.0.0/23<br>192.168.2.0/23<br>192.168.4.0/23<br>192.168.6.0/23<br>192.168.8.0/23<br>192.168.10.0/23<br>...and so on</p>
<p>All of the addresses from 192.168.4.0/23 to 192.168.5.255/23 are on the same subnet; the next subnet starts with 192.168.6.0/23. The 192.168.4.255/23 address is not a subnet address, because the subnet address is 192.168.4.0/23. Nor is 192.168.4.255/23 a broadcast address, because the broadcast address for this subnet is 192.168.5.255/23. Because the 510 addresses from 192.168.4.1/23 to 192.168.5.254/23 are host addresses, the 192.168.4.255/23 address is a host address within the 192.168.4.0/23 subnet.
</p>
<p>The /22 in the 192.168.12.0/22 address indicates that 22 bits belong to the network portion and 10 bits belong to the host portion. Because 2^10 equals 1,024, networks that are subnetted by using /22 masks are separated into groups of 1,024 addresses each. You must combine four Class C networks to create a single subnet with 1,024 addresses. For example, you can create the following subnets:<br>
192.168.0.0/22<br>192.168.4.0/22<br>192.168.8.0/22<br>192.168.12.0/22<br>192.168.16.0/22<br>192.168.20.0/22<br>...and so on</p>
<p>The 192.168.12.0/22 address is a subnet address, because it is the first address in the 192.168.12.0/22 subnet. The 192.168.15.255/22 address is the broadcast address for the subnet, and the 1,022 addresses from 192.168.12.1/22 to 192.168.15.254/22 are host addresses.
</p>
<p>The /21 in the 192.168.12.0/21 address indicates that 21 bits belong to the network portion and 11 bits belong to the host portion. Because 2^11 equals 2,048, networks that are subnetted by using /21 masks are separated into groups of 2,048 addresses each. You must combine eight Class C networks to create a single subnet with 2,048 addresses. For example, you can create the following subnets:<br>
192.168.0.0/21<br>192.168.8.0/21<br>192.168.16.0/21<br>192.168.24.0/21<br>192.168.32.0/21<br>192.168.40.0/21<br>...and so on</p>
<p>All of the addresses from 192.168.8.0/21 through 192.168.15.255/21 are on the same subnet. The 192.168.12.0/21 address is not a subnet address, because the subnet address for this subnet is 192.168.8.0/21. Nor is 192.168.12.0/21 a broadcast address, because the broadcast address for this subnet is 192.168.15.255/21. Because the 2,046 addresses from 192.168.8.1/21 through 192.168.15.254/21 are host addresses, the 192.168.12.0/21 address is a host address within the 192.168.8.0/21 subnet.
</p>
<p>Although it is important to learn the formula for calculating how many addresses exist on a subnet, the following list demonstrates the relationship between subnet masks and valid host addresses:
<ul>
<li>/16 contains 2^16 = 65,536 addresses (2^16 – 2 = 65,534 hosts)</li>
<li>/17 contains 2^15 = 32,768 addresses (2^15 – 2 = 32,766 hosts)</li>
<li>/18 contains 2^14 = 16,384 addresses (2^14 – 2 = 16,382 hosts)</li>
<li>/19 contains 2^13 = 8,192 addresses (2^13 – 2 = 8,190 hosts)</li>
<li>/20 contains 2^12 = 4,096 addresses (2^12 – 2 = 4,094 hosts)</li>
<li>/21 contains 2^11 = 2,048 addresses (2^11 – 2 = 2,046 hosts)</li>
<li>/22 contains 2^10 = 1,024 addresses (2^10 – 2 = 1,022 hosts)</li>
<li>/23 contains 2^9 = 512 addresses (2^9 – 2 = 510 hosts)</li>
<li>/24 contains 2^8 = 256 addresses (2^8 – 2 = 254 hosts)</li>
<li>/25 contains 2^7 = 128 addresses (2^7 – 2 = 126 hosts)</li>
<li>/26 contains 2^6 = 64 addresses (2^6 – 2 = 62 hosts)</li>
<li>/27 contains 2^5 = 32 addresses (2^5 – 2 = 30 hosts)</li>
<li>/28 contains 2^4 = 16 addresses (2^4 – 2 = 14 hosts)</li>
<li>/29 contains 2^3 = 8 addresses (2^3 – 2 = 6 hosts)</li>
<li>/30 contains 2^2 = 4 addresses (2^2 – 2 = 2 hosts)</li>
</ul>
</p>`,
  reference: [
    {
      title: "Boson CCNA Curriculum 200-301",
      description: "Module 2: Network Addressing and Transport, Subnetting"
    },
    {
      title: "CCNA 200-301 Official Cert Guide",
      description: "Volume 1, Chapter 14: Analyzing Existing Subnets, Defining a Subnet"
    },
    {
      title: "Cisco: IP Addressing and Subnetting for New Users",
      description: "Cisco documentation on subnetting best practices and subnet address definitions",
      link: "https://www.cisco.com/c/en/us/support/docs/ip/address-resolution-protocol-arp/13788-3.html"
    }
  ]
},
  {
  id: 613,
  category: "Network Fundamentals",
  questionType: "Single-select",
  question: `Which of the following fields appears last in an Ethernet frame? (Select the best answer.)`,
  options: [
    "destination address",
    "data",
    "source address",
    "preamble",
    "SOF",
    "length",
    "FCS"
  ],
  correctAnswer: 6,
  explanation: `<p>The 4-byte Frame Check Sequence (FCS) field appears last in an Ethernet frame. The FCS field is a 4-byte cyclic redundancy check (CRC) that is intended to enable a frame's receiver to determine whether the frame has been corrupted in transit. The FCS is calculated based on the values of every other field in the frame. If a CRC error is detected, the frame will be discarded and the interface CRC and Frame counters will be incremented. Similarly, the frame will be discarded if it contains fewer than 64 bytes; a frame containing fewer than 64 bytes is referred to as a <strong>runt</strong>.</p>
<p>An Ethernet frame typically consists of seven fields in the following order:</p>
<ul>
  <li>A 7-byte preamble field</li>
  <li>A 1-byte start-of-frame (SOF) field</li>
  <li>A 6-byte destination address field</li>
  <li>A 6-byte source address field</li>
  <li>A 2-byte type field</li>
  <li>A data field in the range from 46 through 1,500 bytes</li>
  <li>A 4-byte FCS field</li>
</ul>
<p>The first five fields of the frame are known as the Ethernet header. The preamble field is used to notify receiving hosts that a frame is being sent. The SOF field is used for synchronization with other hosts on the local area network (LAN). The destination address field contains the Media Access Control (MAC) address of the host for which the data is intended. The source address field contains the MAC address of the host that is sending the data. Finally, an Ethernet header contains a 2-byte type field to indicate the protocol that is intended to receive the frame's data after processing. A payload field of a size in the range from 46 through 1,500 bytes immediately follows the Ethernet header.</p>`,
  reference: [
    {
      title: "Boson CCNA Curriculum 200-301",
      description: "Module 2: Network Addressing and Transport, Ethernet Frames"
    },
    {
      title: "CCNA 200-301 Official Cert Guide",
      description: "Volume 1, Chapter 2: Fundamentals of Ethernet LANs"
    },
    {
      title: "Cisco: Troubleshooting Ethernet: Frame Formats",
      description: "Cisco documentation on Ethernet frame structure and troubleshooting",
      link: "https://www.cisco.com/c/en/us/support/docs/lan-switching/ethernet/10386-etrdoubletrb.html"
    }
  ]
},
  {
  id: 55,
  category: "IP Connectivity",
  questionType: "Multi-select",
  question: `Which of the following OSPF network types have a default Hello timer of 10 seconds and a default dead timer of 40 seconds? (Select 2 choices.)`,
  options: [
    "point-to-multipoint",
    "broadcast",
    "point-to-point",
    "point-to-multipoint nonbroadcast",
    "nonbroadcast"
  ],
  correctAnswer: [1, 2],
  explanation: `<p>The broadcast and point-to-point Open Shortest Path First (OSPF) network types have a default Hello timer of 10 seconds and a default dead timer of 40 seconds. The nonbroadcast, point-to-multipoint, and point-to-multipoint nonbroadcast OSPF network types have a default Hello timer of 30 seconds and a dead timer of 120 seconds.</p>
<p>The Hello timer is used to specify the amount of time between Hello packets. The dead timer is used to specify the amount of time to wait before declaring a neighbor to be down. In order for OSPF routers to establish an adjacency, the Hello timer on one router should match the Hello timer on the other router, and the dead timer on one router should match the dead timer on the other router. The dead timer is set to four times the Hello timer value by default.</p>
<p>There are five OSPF network types:</p>
<ul>
  <li>Broadcast</li>
  <li>Nonbroadcast</li>
  <li>Point-to-point</li>
  <li>Point-to-multipoint broadcast</li>
  <li>Point-to-multipoint nonbroadcast</li>
</ul>
<p>The OSPF broadcast network type is enabled by default on Fiber Distributed Data Interface (FDDI) and Ethernet interfaces, including Fast Ethernet and Gigabit Ethernet interfaces. On broadcast networks, multicast updates are sent, so manual configuration of neighbor routers with the <strong>neighbor</strong> command is not required. To configure an OSPF broadcast network, you should issue the <code>ip ospf network broadcast</code> command.</p>
<p>The OSPF point-to-point network type is enabled by default on High-Level Data Link Control (HDLC) and Point-to-Point Protocol (PPP) serial interfaces. On point-to-point networks, DR and BDR elections are not performed. Multicast updates are sent, so manual configuration of neighbor routers with the <strong>neighbor</strong> command is not required. To configure an OSPF point-to-point network, you should issue the <code>ip ospf network point-to-point</code> command.</p>
<p>On nonbroadcast networks, DR and BDR elections are performed. Nonbroadcast networks do not allow multicasts; therefore, manual configuration of neighbor routers with the <strong>neighbor</strong> command is required so that OSPF sends unicast updates. To configure an OSPF nonbroadcast network, which is also called a nonbroadcast multiaccess (NBMA) network, you should issue the <code>ip ospf network non-broadcast</code> command.</p>
<p>OSPF point-to-multipoint networks operate just like OSPF point-to-point networks except the Hello timer is set to 30 seconds and the dead timer is set to 120 seconds by default. To configure an OSPF point-to-multipoint network, you should issue the <code>ip ospf network point-to-multipoint</code> command.</p>
<p>OSPF point-to-multipoint nonbroadcast networks operate just like OSPF point-to-multipoint broadcast networks except that multicasts cannot be sent; therefore, manual configuration of neighbor routers with the <strong>neighbor</strong> command is required so that OSPF sends unicast updates. To configure an OSPF point-to-multipoint nonbroadcast network, you should issue the <code>ip ospf network point-to-multipoint non-broadcast</code> command.</p>`,
  reference: [
    {
      title: "Boson CCNA Curriculum 200-301",
      description: "Module 6: IP Routing, Understanding OSPF Adjacencies"
    },
    {
      title: "Cisco: Initial Configurations for OSPF over a Point-to-Point Link",
      link: "https://www.cisco.com/c/en/us/support/docs/ip/open-shortest-path-first-ospf/13684-12.html"
    },
    {
      title: "Cisco: OSPF Design Guide: Adjacencies on Non-Broadcast Multi-Access (NBMA) Networks",
      link: "https://www.cisco.com/c/en/us/support/docs/ip/open-shortest-path-first-ospf/7039-1.html"
    },
    {
      title: "Cisco: OSPF Command Reference: ip ospf network",
      link: "https://www.cisco.com/c/en/us/td/docs/ios-xml/ios/iproute_ospf/command/iro-ospf-cr-book/iro-ospf-c1.html#wp1239500902"
    },
    {
      title: "Cisco: Configuring OSPF",
      link: "https://www.cisco.com/c/en/us/support/docs/ip/open-shortest-path-first-ospf/7039-1.html"
    }
  ]
},
 {
  id: 687,
  category: "Network Fundamentals",
  questionType: "Single-select",
  question: `Which of the following addresses will a switch use to make forwarding decisions? (Select the best answer.)`,
  options: [
    "destination MAC addresses",
    "source IP addresses",
    "source MAC addresses",
    "destination IP addresses"
  ],
  correctAnswer: 0,
  explanation: `<p>A switch will use destination Media Access Control (MAC) addresses to make forwarding decisions. Switches make forwarding decisions based on the destination MAC address contained in a frame's header. The switch first searches the Content Addressable Memory (CAM) table for an entry that matches the frame's destination MAC address. The CAM table, which is also called the switching table, is used by a switch to discover the relationship between the Layer 2 address of a device and the physical port used to reach the device. If the frame's destination MAC address is not found in the table, the switch forwards the frame to all its ports, except the port from which it received the frame. If the destination MAC address is found in the table, the switch forwards the frame to the appropriate port. The source MAC address is also recorded if it did not previously exist in the CAM table.</p>

<p>A switch will not use source MAC addresses to make forwarding decisions. However, a switch will use source MAC addresses to populate the CAM table by recording the source MAC address of an inbound Layer 2 frame and the corresponding switch port that the frame arrived on.</p>

<p>A switch will not use source or destination Internet Protocol (IP) addresses to make forwarding decisions. IP addresses are Open Systems Interconnection (OSI) Layer 3 addresses and are typically used by devices such as routers to make forwarding decisions.</p>`,
  reference: [
    {
      title: "Boson CCNA Curriculum 200-301",
      description: "Module 5: Switching and Network Access, Using the CAM Table"
    },
    {
      title: "CCNA 200-301 Official Cert Guide",
      description: "Volume 1, Chapter 5: Analyzing Ethernet LAN Switching, Learning MAC Addresses"
    },
    {
      title: "Cisco: Catalyst 6500/6000 Switches ARP or CAM Table Issues Troubleshooting: Background Information",
      description: "Cisco documentation on CAM table operation in switches",
      link: "https://www.cisco.com/c/en/us/support/docs/switches/catalyst-6500-series-switches/12013-17.html"
    }
  ]
},
  {
  id: 639,
  category: "Network Fundamentals",
  questionType: "Single-select",
  question: `Your company has been assigned the 2012:0:0:99::/64 IPv6 prefix by your ISP. You have issued the following commands on your Cisco router's FastEthernet 0/0 interface:

<pre>
ipv6 address 2012:0:0:99::/64 eui-64
no shutdown
</pre>

Host computers should be also autoconfigured by using the EUI-64 format. HostA has an IPv4 address of 192.168.0.14 and a MAC address of 00-33-66-99-BB-EE.

You have configured HostA to use stateless autoconfiguration.

Which of the following IPv6 addresses will HostA use? (Select the best answer.)`,
  options: [
    "2012::99:0:0233:6699:BBEE",
    "2012:0:0:99:192.168.0.14",
    "2012:0:0:99::C0A8:000E",
    "2012::99:0233:66FF:FE99:BBEE",
    "2012::99:0:192.168.0.14",
    "2012::99:0233:6699:BBEE"
  ],
  correctAnswer: 3,
  explanation: `<p>HostA will use the Internet Protocol version 6 (IPv6) address <strong>2012::99:0233:66FF:FE99:BBEE</strong>. The scenario indicates that hosts should be autoconfigured by using the extended unique identifier (EUI)-64 format. For autoconfiguration to occur, the router must send the IPv6 prefix to a host in a router advertisement message. Router advertisements, and other stateless autoconfiguration messages, are sent by using Internet Control Message Protocol version 6 (ICMPv6). An IPv6 host typically sends a router solicitation message on startup to prompt a router into sending a router advertisement, rather than waiting for the arrival of a periodic router advertisement. Once a router advertisement is received, the host will append its interface identifier, which is a modified version of its Media Access Control (MAC) address, to the received IPv6 prefix to create a globally unique, IPv6 unicast address.</p>
<p>An interface identifier in EUI-64 format is created by taking the first half of the host's MAC address, which is referred to as the Organizationally Unique Identifier (OUI), adding the hexadecimal number FFFE, and then appending the last half of the host's MAC address, which is the hardware-specific portion of the MAC address. The seventh binary bit in the OUI, which is referred to as the U/L bit, is then flipped; that is, the original value of the U/L bit is inverted. A U/L bit value of 0 in the OUI indicates that the MAC address is universal. Universal addresses are intended to be globally unique and are the addresses burned in by the manufacturer. By contrast, a U/L bit value of 1 indicates a locally administered MAC address, such as the address created by a virtual interface or manually configured by an administrator. The U/L value is inverted when an EUI-64 interface ID is created in order to facilitate simple local scope identifiers for manual administration. It should be noted that there is no correlation between the U/L bit value in an EUI-64 interface ID and the scope of the IPv6 address. The U/L bit value in an EUI-64 interface ID was intended to provide the ability for future technology to identify interface IDs with a local scope.</p>
<p>In this scenario, the MAC address 00-33-66-99-BB-EE has an OUI of 00-33-66 and a network interface card (NIC) identifier of 99-BB-EE. To create an EUI-64-compliant interface ID, you should first append the hexadecimal value FFFE to the OUI and then append the NIC identifier: 0233:66FF:FE99:BBEE. Finally, you should invert the value of the seventh bit of the OUI to represent the scope of the EUI-64 interface ID. The hexadecimal value 00 in the first eight bits of the OUI can be represented in binary as 0000 0000 and indicates that the seventh bit represents the U/L bit. In this scenario, the seventh bit has a value of 0, which indicates that the MAC address from which the EUI-64 address is derived is a universal address. Inverting the value of the U/L bit changes the value from 0 to 1; therefore, the first eight bits of the OUI become 0000 0010. These bits can be represented in hexadecimal as 02, and result in an EUI-64 interface ID of 0233:66FF:FE99:BBEE. The EUI-64 interface ID is then combined with the IPv6 prefix to create an IPv6 address. Appending the IPv6 prefix 2012::99 to this interface identifier creates the global unicast IPv6 address 2012::99:0233:66FF:FE99:BBEE.</p>
<p>This address is considered globally unique because the IPv6 prefix is in the 2000::/3 range. IPv6 global unicast addresses always begin with a 2 or a 3 because the first three bits of an IPv6 global unicast address are always 001.</p>
<p>HostA will not use the IPv6 address 2012::99:0233:6699:BBEE. The address 2012::99:0233:6699:BBEE expands to 2012:0:0:99:0233:6699:BBEE, which does not use the correct prefix value of 2012:0:0:99::/64.</p>
<p>HostA will not use the IPv6 address 2012::99:0:0033:6699:BBEE. Although the interface identifier is composed by using the MAC address, it does not follow the EUI-64 format.</p>
<p>HostA will not use the IPv6 addresses 2012::99:0:192.168.0.14 or 2012:0:0:99::C0A8:000E. An IP version 4 (IPv4)-compatible IPv6 address can be created by using zeros for the first 96 bits of the address and by using the IPv4 address for the last 32 bits of the address. The IPv4 address can be written with or without leading zeros and can be written in binary or hexadecimal format. Therefore, the following notations would be acceptable for HostA if it were to use an IPv4-compatible IPv6 address:
<ul>
<li>0:0:0:0:0:0:192.168.0.14</li>
<li>::192.168.0.14</li>
<li>0:0:0:0:0:0:C0A8:000E</li>
<li>::C0A8:000E</li>
</ul>
<p>When you convert the IPv4 address 192.168.0.14 from decimal to hexadecimal, 192 converts to C0, 168 converts to A8, 0 converts to 00, and 14 converts to 0E.</p>
<p>HostA will not use the IPv6 address 2012:0:0:99:192.168.0.14, because it does not contain enough bits to create a valid 128-bit IPv6 address. The prefix 2012:0:0:99::/64 contains 64 bits for the prefix, and 64 bits are needed for the interface identifier. IPv4 addresses contain only 32 bits, so appending 192.168.0.14 directly to the prefix creates an address with only 96 bits.</p>`,
  reference: [
    {
      title: "CCNA 200-301 Official Cert Guide",
      description: "Volume 1, Chapter 24: Implementing IPv6 Addressing on Routers, Generating a Unique Interface ID Using Modified EUI-64"
    },
    {
      title: "Cisco: Configuring IPv6 Routing: Configuring IPv6 Addressing and Enabling IPv6 Routing",
      description: "Cisco documentation for configuring IPv6 addressing",
      link: "https://www.cisco.com/c/en/us/support/docs/ip/ipv6/11357-3.html"
    }
  ]
},
  {
  id: 11,
  category: "IP Connectivity",
  questionType: "Single-select",
  question: `
<img src="/images/q011-ospf-topology.png" alt="OSPF and Static Routing Topology" style="max-width: 100%; height: auto; margin: 20px 0;" />
<p>You administer the network in the exhibit.</p>
<p>You issue the <strong>show ip route</strong> command on Router1 and receive the following partial output:</p>
<pre>
Router1#show ip route
&lt;output omitted&gt;
Gateway of last resort is not set

10.0.0.0/30 is subnetted, 1 subnets
O    10.10.10.0 [110/20] via 192.168.1.2, 00:00:00, Ethernet0/0
192.168.1.0/30 is subnetted, 1 subnets
C    192.168.1.0 is directly connected, Ethernet0/0
</pre>
<p>You issue the <code>ip route 10.10.10.0 255.255.255.252 ethernet 0/0</code> command on Router1.</p>
<p>Which of the following will happen next? (Select the best answer.)</p>
`,
  options: [
    "The static route will be used as a backup if the OSPF route goes down.",
    "Routing loops or performance problems will occur because Router1 points back to itself.",
    "The OSPF route will be replaced with a static route.",
    "The gateway of last resort will be the Ethernet 0/0 interface on Router1."
  ],
  correctAnswer: 2,
  explanation: `<p>The OSPF route will be replaced with a static route. When you configure a static route to the same destination as a learned OSPF route, the route with the lowest administrative distance is preferred. A static route has an administrative distance of 1, while OSPF routes have a default administrative distance of 110. Therefore, the static route will replace the OSPF route in the routing table and be used for forwarding traffic to the specified destination. The static route will not be used as a backup unless its administrative distance is manually changed to be higher than the OSPF route's administrative distance.</p>`,
  reference: [
    {
      title: "Boson CCNA Curriculum 200-301",
      description: "Module 6: IP Routing, Administrative Distance and Static Routing"
    },
    {
      title: "CCNA 200-301 Official Cert Guide",
      description: "Volume 1, Chapter 16: Static Routes and Routing Protocols"
    }
  ]
},
  {
  id: 620,
  category: "Network Fundamentals",
  questionType: "Single-select",
  question: `Given a host IP address of 48.25.24.71/21, what is the broadcast address for the subnetwork? (Select the best answer.)`,
  options: [
    "48.25.31.254",
    "48.25.24.240",
    "48.25.24.255",
    "48.25.31.255",
    "48.25.24.127",
    "48.25.25.254"
  ],
  correctAnswer: 3,
  explanation: `<p>The broadcast address for the subnetwork containing the host 48.25.24.71/21 is 48.25.31.255.</p>
<p>An Internet Protocol (IP) address is composed of four groups of eight binary bits, or 32 bits total. Each bit can store either a 1 or a 0 value. The address consists of two parts, a network portion and a host portion, which are divided by the use of a subnet mask. Like the IP address, the subnet mask is composed of four groups of eight binary bits containing either a 1 or a 0 value. Because each group contains eight bits of information, the groups are referred to as octets. Each octet ranges from 0 through 255 in decimal value.</p>
<p>To determine the subnetwork address range of a given IP address/subnet mask combination, you must first identify the interesting octet within the subnet mask. The interesting octet is the first octet that contains a decimal value other than 255 or 0.</p>
<p>The subnet mask in this example is /21. This notation is known as Classless Inter-Domain Routing (CIDR) notation. To calculate the network and host information for the network, you will need to convert the subnet mask to dotted decimal notation.</p>
<p>To convert /21 from CIDR notation to dotted decimal notation, begin at the left and set the first 21 bits to a value of 1. Set the remaining 11 bits to 0.</p>
<p>/21 = 11111111.11111111.11111000.00000000</p>
<p>Binary bit weight increases in significance from right to left, with the leftmost bit in each octet worth a decimal value of 128 and the rightmost bit worth a decimal value of 1. The decimal value for each octet is computed by adding up the bit weight for any bit containing a 1 within the octet. The following exhibit displays how to calculate the decimal value of the subnet mask octets based on the binary value assigned to each bit:</p>
<img src="/images/q620-subnet-mask-weight.png" alt="Subnet Mask Bit Weights" style="max-width: 100%; height: auto; margin: 12px 0;" />
<p>/21 = 11111111.11111111.11111000.00000000 = 255.255.248.0</p>
<p>Now that the subnet mask is in dotted decimal notation, the interesting octet is easily identified, because the third octet has a decimal value of 248, not 0 or 255. When the interesting octet has been identified, the network numbers are determined by the weight of the least significant bit that is set to 1 in the interesting octet. Another way to determine the network numbers is to simply subtract the decimal value of the interesting octet from 256. The difference between 256 and 248 is 8; therefore, the networks will be arranged in multiples of 8.</p>
<img src="/images/q620-subnet-network-multiple.png" alt="Subnet Network Number Multiples" style="max-width: 100%; height: auto; margin: 12px 0;" />
<p>With the network numbers arranged by factors of 8, a partial list of the available networks using the 255.255.248.0 subnet mask in this scenario includes the following:</p>
<ul>
<li>48.25.0.0</li>
<li>48.25.8.0</li>
<li>48.25.16.0</li>
<li>48.25.24.0</li>
<li>48.25.32.0</li>
<li>...and so on</li>
</ul>
<p>The total number of hosts can be determined by the number of bits equal to 0 in the binary subnet mask. You can then calculate the number of hosts for a given subnetwork by using the formula 2<sup>n</sup> – 2, where n is the number of bits equal to 0 in the subnet mask.</p>
<p>/21 = 11111111.11111111.11111000.00000000</p>
<p>There are 11 bits equal to 0 in the /21 subnet mask. Using the 2<sup>n</sup> – 2 formula, 2,048 – 2 = 2,046. Therefore, 2,046 hosts are available for each subnetwork when a subnet mask of /21 is applied. You must subtract 2 from the number of available hosts, because the first address is the subnetwork address and the last is the broadcast address.</p>
<p>Likewise, you can determine the number of subnetworks available by examining the network mask. Because you are working with a Class A network, the first octet is excluded from the calculation. The formula to calculate the number of networks is 2<sup>n</sup>, where n is the number of bits equal to 1.</p>
<p>XXXXXXXX.11111111.11111000.00000000</p>
<p>Excluding the first octet, 13 bits that equal 1 are still in the subnet mask. Using the # networks = 2<sup>n</sup> formula, you should find that 8,192 networks are available when a subnet mask of 255.255.248.0 is applied to a Class A network.</p>
<p>Applying a subnet mask larger than the default subnet mask for a given network class is known as supernetting. This technique allows network engineers and administrators to combine and divide networks without regard to classful network boundaries, thus making more efficient use of IP address space.</p>
<p>Based on the information above, an IP address of 48.25.24.71/21 is located in the 48.25.24.0 network. This network has an address range of 48.25.24.0 to 48.25.31.255. The first address in the subnetwork is 48.25.24.0, and the last usable host address is 48.25.31.254; thus, the broadcast address is 48.25.31.255.</p>`,
  reference: [
    {
      title: "Boson CCNA Curriculum 200-301",
      description: "Module 2: Network Addressing and Transport, Subnetting"
    },
    {
      title: "CCNA 200-301 Official Cert Guide",
      description: "Volume 1, Chapter 14: Analyzing Existing Subnets, Analyzing Existing Subnets: Binary"
    },
    {
      title: "Cisco: IP Addressing and Subnetting for New Users",
      link: "https://www.cisco.com/c/en/us/support/docs/ip/address-resolution-protocol-arp/13788-3.html"
    }
  ]
},
  {
  id: 675,
  category: "Network Access",
  questionType: "Multi-select",
  question: `An LACP channel group on SwitchA is configured to operate in active mode.

In which modes could you configure the corresponding channel group on SwitchB to create a valid EtherChannel configuration? (Select 2 choices.)`,
  options: [
    "auto",
    "desirable",
    "active",
    "on",
    "passive"
  ],
  correctAnswer: [2, 4],
  explanation: `<p>In this scenario, you could configure the channel group on SwitchB to operate in either <strong>active</strong> or <strong>passive</strong> mode to create a valid EtherChannel configuration. EtherChannel is used to bundle two or more identical, physical interfaces into a single logical link between switches. An EtherChannel can be permanently established between switches, or it can be negotiated by using one of two aggregation protocols: the Cisco-proprietary Port Aggregation Protocol (PAgP) or the open-standard Institute of Electrical and Electronics Engineers (IEEE) 802.3ad protocol, which is also known as Link Aggregation Control Protocol (LACP). The EtherChannel aggregation protocol must match on each switch, or they will be unable to dynamically establish an EtherChannel link between them.</p>
<p>In addition, the channel group modes on each switch must operate in compatible modes to create a functional EtherChannel link. The <code>channel-group number mode {on | active | passive | {auto | desirable} [non-silent]}</code> command is used to configure the operating mode for an interface, or range of interfaces, in a channel group. The following table displays the channel-group modes that will result in a valid EtherChannel configuration:</p>
<img src="/images/q675-etherchannel-modes.png" alt="EtherChannel LACP/PAgP Compatibility Table" style="max-width: 100%; height: auto; margin:12px 0;" />
<p>The <strong>on</strong> keyword configures the channel group to unconditionally create the channel with no LACP or PAgP negotiation. In the <strong>on</strong> mode, a functional EtherChannel exists only if a channel group that is in the on mode is connected to another channel group that is also in the on mode. If either side of the link is not in the on mode, packet loss can occur. In addition, while in on mode, any LACP or PAgP configuration information is ignored by the channel group.</p>
<p>The <strong>active</strong> and <strong>passive</strong> keywords can be used only with LACP. The <strong>active</strong> keyword configures the channel group to actively negotiate LACP, and the <strong>passive</strong> keyword configures the channel group to listen for LACP negotiation to be offered. Either or both sides of the link must be set to <strong>active</strong> to establish an EtherChannel over LACP; setting both sides to <strong>passive</strong> will not establish an EtherChannel over LACP.</p>
<p>The <strong>auto</strong>, <strong>desirable</strong>, and <strong>non-silent</strong> keywords can be used only with PAgP. The <strong>desirable</strong> keyword configures the channel group to actively negotiate PAgP, and the <strong>auto</strong> keyword configures the channel group to listen for PAgP negotiation to be offered. Either or both sides of the link must be set to <strong>desirable</strong> to establish an EtherChannel over PAgP; setting both sides to <strong>auto</strong> will not establish an EtherChannel over PAgP. The optional <strong>non-silent</strong> keyword requires that a port receive PAgP packets before the port is added to the channel.</p>`,
  reference: [
    {
      title: "Boson CCNA Curriculum 200-301",
      description: "Module 5: Switching and Network Access, Understanding PAgP and LACP Modes"
    },
    {
      title: "CCNA 200-301 Official Cert Guide",
      description: "Volume 1, Chapter 10: RSTP and EtherChannel Configuration, Configuring Layer 2 EtherChannel"
    },
    {
      title: "Cisco: Catalyst 3750 Switch Cisco IOS Commands: channel-group",
      link: "https://www.cisco.com/c/en/us/td/docs/switches/lan/catalyst3750x_3560x/software/release/12-2_55_se/configuration/guide/3750xscg/swstp_ch.html"
    }
  ]
},
 {
  id: 700,
  category: "Network Access",
  questionType: "Single-select",
  question: `Which of the following components simplifies the management and deployment of wireless APs in a Cisco Autonomous WLAN solution? (Select the best answer.)`,
  options: [
    "WLSE",
    "WiSM",
    "WLC",
    "WDS"
  ],
  correctAnswer: 0,
  explanation: `<p>CiscoWorks Wireless LAN Solution Engine (WLSE) simplifies the management and deployment of wireless access points (WAPs) in a Cisco Autonomous wireless local area network (WLAN) solution. In a Cisco Autonomous WLAN solution, each access point (AP) is responsible for both connection and management functionalities; hence the management of the WLAN is decentralized. A CiscoWorks WLSE can be installed to help automate the management and deployment of the APs in a Cisco Autonomous WLAN solution. Features provided by a CiscoWorks WLSE include dynamic radio frequency (RF) management, network security, intrusion detection, self-healing capabilities, and monitoring and reporting services for the wireless network.</p>
<p>By contrast, a wireless LAN controller (WLC) provides wireless network management services in a Cisco Unified Wireless Network. A Cisco Unified Wireless Network uses Lightweight Access Point Protocol (LWAPP) and a combination of lightweight access points (APs) and WLCs. Lightweight APs enable wireless clients to connect to the network, and WLCs provide management and configuration information for the lightweight APs. For example, WLCs determine which RF each lightweight AP should use. WLCs are not used in a Cisco Autonomous WLAN solution.</p>
<p>Although Wireless Domain Services (WDS) is a component used in Cisco Autonomous WLAN solutions, WDS does not simplify the management of or deployment of WAPs. WDS is a Cisco IOS feature that can be installed on APs and used to enable those APs to interact with a CiscoWorks WLSE. For example, WDS collects and aggregates radio information from APs and forwards that data to a CiscoWorks WLSE.</p>
<p>The Cisco Wireless Services Module (WiSM) is a WLC module that can be installed in a Catalyst 6500 series switch or a Cisco 7600 series router. Cisco WiSMs are used on Cisco Unified Wireless Networks and are not part of Cisco Autonomous WLAN solutions.</p>`,
  reference: [
    {
      title: "Cisco: Installation and Configuration Guide for the CiscoWorks Wireless LAN Solution Engine: Product Overview (PDF)",
      link: "https://www.cisco.com/c/en/us/support/docs/wireless/ciscoworks-wlse/100928-wlse-guide.html"
    }
  ]
},
  {
  id: 32,
  category: "IP Connectivity",
  questionType: "Single-select",
  question: `Which of the following is a Cisco-proprietary FHRP that elects an AVG and up to four primary AVFs? (Select the best answer.)`,
  options: [
    "HSRP",
    "LACP",
    "GLBP",
    "VRRP"
  ],
  correctAnswer: 2,
  explanation: `<p>Gateway Load Balancing Protocol (GLBP) is a Cisco-proprietary First-Hop Redundancy Protocol (FHRP) that elects an active virtual gateway (AVG) and up to four primary active virtual forwarders (AVFs). FHRPs are protocols that are used to provide Layer 3 gateway redundancy, such as failover and load balancing. Providing Layer 3 redundancy ensures that hosts on a local area network (LAN) will have a backup path to external networks should a primary path fail or become too congested to forward traffic. Layer 3 devices in an FHRP configuration typically share a virtual Internet Protocol (IP) address that is then configured as the default gateway on each host for which the device is to forward traffic. The FHRP devices might also share a single virtual Media Access Control (MAC) address or provide multiple virtual MAC addresses, depending on the protocol. FHRPs typically use a priority system to elect a primary Layer 3 forwarding device, which is known as an AVG, an active router, or a master router, depending on the protocol. The same priority system elects either a single or multiple backup-forwarding devices.</p>
<p>Each GLBP group contains an AVG that is elected based on which router is configured with the highest priority value or the highest IP address value if multiple routers are configured with the highest priority value. The other routers in the GLBP group are configured as primary or secondary AVFs. GLBP can support up to 1,024 virtual routers on a physical interface. The AVG in a GLBP group assigns a virtual MAC address to a maximum of four primary AVFs; all other routers in the group are considered secondary AVFs and are placed in the listen state. When the AVG receives Address Resolution Protocol (ARP) requests that are sent to the virtual IP address for the GLBP group, the AVG responds with different virtual MAC addresses. This provides load balancing, because each of the primary AVFs will participate by forwarding a portion of the traffic sent to the virtual IP address. The primary difference between GLBP and other FHRPs is that, by default, GLBP load balances between every router in the GLBP group. Other protocols either cannot load balance or require additional configuration in order to load balance.</p>
<p>Hot Standby Router Protocol (HSRP) is a Cisco-proprietary FHRP; however, HSRP elects only an active router and a standby router. Based on priority value, HSRP elects a single active router and a standby router. The active router is the router with the highest priority; it forwards packets, responds to ARP requests with a virtual MAC address, and can be the only router that is explicitly configured with the virtual IP address. The standby router is the router with the second-highest priority. If multiple HSRP routers have the same priority, the router with the highest IP address is elected as the active router. The router with the second-highest IP address is elected as the standby router, which will assume the role of the active router if the active router fails. To participate in the active and standby router election process, each HSRP router must be a member of the same group. An HSRP group is identified by a group number from 0 through 255. The default HSRP group value is 0. Unlike GLBP, HSRP does not load balance by default. However, it is possible to load balance traffic between HSRP gateways by creating up to 255 HSRP groups on an interface and configuring each group so that it elects a different active router. This is known as a multigroup HSRP configuration.</p>
<p>Virtual Router Redundancy Protocol (VRRP) is not a Cisco-proprietary FHRP. VRRP is an Internet Engineering Task Force (IETF)-standard FHRP that is supported by both Cisco and non-Cisco devices. Similar to HSRP, VRRP elects a master router that forwards packets, responds to ARP requests, and can be the only router that is explicitly configured with the virtual IP address. It is important to note that Cisco-specific enhancements to VRRP might not be available when connecting a Cisco device that is using VRRP to a non-Cisco device that is using VRRP. If only Cisco devices are used in the topology and a choice between HSRP and VRRP is available, Cisco recommends using HSRP. Both HSRP and VRRP can be used to configure failover in case a primary default gateway goes down.</p>
<p>Link Aggregation Control Protocol (LACP) is not an FHRP. LACP is an Institute of Electrical and Electronics Engineers (IEEE) protocol that is used to enable link aggregation on EtherChannel links.</p>`,
  reference: [
    {
      title: "Boson CCNA Curriculum 200-301",
      description: "Module 6: IP Routing, Understanding FHRPs"
    },
    {
      title: "Cisco: Configuring GLBP: Information About GLBP",
      link: "https://www.cisco.com/c/en/us/td/docs/ios-xml/ios/ipapp/command/ipapp-cr-book/ipapp-cr-g.html"
    }
  ]
},

{
  id: 59,
  category: "IP Connectivity",
  questionType: "Single-select",
  question: `
You are attempting to configure OSPF between RouterA and RouterB on your network. However, the routers are unable to form an OSPF adjacency. You issue the <code>show ip ospf interface fastethernet 0/0</code> command on each router and receive the following output:

<pre>
RouterA#show ip ospf interface fastethernet 0/0
FastEthernet 0/0 is up, line protocol is up
  Internet Address 10.1.1.13/30, Area 0
  Process ID 101, Router ID 192.168.15.237, Network Type BROADCAST, Cost: 1
  ...
  Hello 10, Dead 40, Wait 40, Retransmit 5
  Hello due in 00:00:07
  ...
  Neighbor Count is 0, Adjacent neighbor count is 0

RouterB#show ip ospf interface fastethernet 0/0
FastEthernet 0/0 is up, line protocol is up
  Internet Address 10.1.1.14/30, Area 0
  Process ID 102, Router ID 192.168.15.237, Network Type BROADCAST, Cost: 1
  ...
  Hello 10, Dead 40, Wait 40, Retransmit 5
  Hello due in 00:00:05
  ...
  Neighbor Count is 0, Adjacent neighbor count is 0
</pre>

Why are the routers unable to form an adjacency? (Select the best answer.)
`,
  options: [
    "The cost must be higher than 1.",
    "The IP addresses are configured with the wrong subnet mask.",
    "The OSPF process IDs must match.",
    "The router IDs must not match.",
    "The OSPF areas must match.",
    "The dead timer value must match the Hello timer value."
  ],
  correctAnswer: 3,
  explanation: `<p>The routers are unable to form an adjacency because the router IDs must not match. Router IDs must be unique; a router will ignore Hello packets that are marked with its own router ID. To manually configure the router ID, you should issue the <code>router-id ip-address</code> command in router configuration mode, where <code>ip-address</code> is a 32-bit value in dotted decimal notation. If the router ID is not manually configured, the router ID will be the highest loopback Internet Protocol (IP) address configured on a router. If a loopback IP address is not configured, then the router ID will be the highest IP address among the configured interfaces on the router.</p>

<p>The Open Shortest Path First (OSPF) areas in this scenario match. Only OSPF routers in the same hierarchical area form adjacencies. To configure an OSPF area, you should issue the <code>network address mask area area</code> command in OSPF router configuration mode. Although you can configure a multiarea OSPF topology, the OSPF areas on neighboring interfaces must match in order for two OSPF routers to form an adjacency. In this scenario, RouterB's FastEthernet 0/0 interface is operating in Area 0 and is directly connected to RouterA's FastEthernet 0/0 interface, which is also operating in Area 0. Area 0 is also known as the backbone area. If you are not using virtual links, any nonbackbone OSPF areas you configure must border Area 0. On smaller networks, single-area OSPF configurations also offer the benefit of generating fewer link-state advertisements (LSAs).</p>

<p>Whereas Enhanced Interior Gateway Routing Protocol (EIGRP) process IDs must match when EIGRP is used, OSPF process IDs do not have to match when OSPF is used. The OSPF process ID is locally significant to the router and can be any positive integer in the range from 1 through 65535. You can specify the OSPF process ID by issuing the <code>ospf process-id</code> command when you configure a router for OSPF.</p>

<p>The cost does not have to be higher than 1. By default, OSPF uses the bandwidth of a link to determine the cost. The higher the bandwidth, the lower the cost. To calculate the cost, divide 100,000,000 by the bandwidth in bits per second (bps). The FastEthernet 100-megabits per seconds (Mbps) link between RouterA and RouterB would have a default cost of 1, because 100,000,000 ÷ 100,000,000 = 1. To manually configure the OSPF cost of a link, you should issue the <code>ip ospf cost cost</code> command in interface configuration mode.</p>

<p>The IP addresses for RouterA and RouterB are within the same subnet. Therefore, the subnet mask is correct, and the two routers should be able to communicate. A /30 subnet mask allows for two hosts per subnet. In this example, 10.1.1.12/30 is the network address, 10.1.1.13/30 and 10.1.1.14/30 are valid host addresses, and 10.1.1.15/30 is the broadcast address.</p>

<p>The dead timer value should not match the Hello timer value. In order for OSPF routers to establish an adjacency, the dead timer on one router should match the dead timer on the other router and the Hello timer on one router should match the Hello timer on the other router. Both RouterA and RouterB are set to a Hello interval of 10 seconds and a dead interval of 40 seconds, so the OSPF timers are configured correctly. The Hello timer is used to specify the amount of time between sending Hello packets, and the dead timer is used to specify the amount of time to wait for Hello packets before declaring a neighbor to be down. By default, the Hello timer is set to 10 seconds on point-to-point and broadcast links and 30 seconds on nonbroadcast multiaccess (NBMA) links. The dead timer is set to four times the Hello timer value by default. To manually configure the Hello timer interval, you should issue the <code>ip ospf hello-interval seconds</code> command in interface configuration mode. To manually configure the dead timer interval, you should issue the <code>ip ospf dead-interval seconds</code> command in interface configuration mode.</p>`,
  reference: [
    {
      title: "Boson CCNA Curriculum 200-301",
      description: "Module 6: IP Routing, Troubleshooting OSPF Adjacencies"
    },
    {
      title: "Cisco: OSPF Neighbor Problems Explained",
      link: "https://www.cisco.com/c/en/us/support/docs/ip/open-shortest-path-first-ospf/13685-13.html"
    },
    {
      title: "Cisco: OSPF Design Guide",
      link: "https://www.cisco.com/c/en/us/support/docs/ip/open-shortest-path-first-ospf/7039-1.html"
    },
    {
      title: "Cisco: What Does the show ip ospf interface Command Reveal?",
      link: "https://www.cisco.com/c/en/us/support/docs/ip/open-shortest-path-first-ospf/13774-19.html"
    }
  ]
},


{
  id: 59,
  category: "IP Connectivity",
  questionType: "Single-select",
  question: `
You are attempting to configure OSPF between RouterA and RouterB on your network. However, the routers are unable to form an OSPF adjacency. You issue the <b>show ip ospf interface fastethernet 0/0</b> command on each router and receive the following output:<br><br>
<pre>
RouterA#show ip ospf interface fastethernet 0/0
FastEthernet 0/0 is up, line protocol is up
  Internet Address 10.1.1.13/30, Area 0
  Process ID 101, Router ID 192.168.15.237, Network Type BROADCAST, Cost: 1
  Transmit Delay is 1 sec, State DR, Priority 1
  Designated Router (ID) 192.168.15.237, Interface address 10.1.1.13
  No Backup Designated router on this network
  Timer intervals configured, Hello 10, Dead 40, Wait 40, Retransmit 5
    Hello due in 00:00:07
  Index 1/1, flood queue length 0
  Next 0x0(0)/0x0(0)
  Last flood scan length is 2, maximum is 2
  Last flood scan time is 0 msec, maximum is 4 msec
  Neighbor Count is 0, Adjacent neighbor count is 0
  Suppress hello for 0 neighbor(s)

RouterB#show ip ospf interface fastethernet 0/0
FastEthernet 0/0 is up, line protocol is up
  Internet Address 10.1.1.14/30, Area 0
  Process ID 102, Router ID 192.168.15.237, Network Type BROADCAST, Cost: 1
  Transmit Delay is 1 sec, State DR, Priority 1
  Designated Router (ID) 192.168.15.237, Interface address 10.1.1.14
  No Backup Designated router on this network
  Timer intervals configured, Hello 10, Dead 40, Wait 40, Retransmit 5
    Hello due in 00:00:05
  Index 1/1, flood queue length 0
  Next 0x0(0)/0x0(0)
  Last flood scan length is 2, maximum is 2
  Last flood scan time is 0 msec, maximum is 4 msec
  Neighbor Count is 0, Adjacent neighbor count is 0
  Suppress hello for 0 neighbor(s)
</pre><br>
Why are the routers unable to form an adjacency? (Select the best answer.)
`,
  options: [
    "The cost must be higher than 1.",
    "The IP addresses are configured with the wrong subnet mask.",
    "The OSPF process IDs must match.",
    "The router IDs must not match.",
    "The OSPF areas must match.",
    "The dead timer value must match the Hello timer value."
  ],
  correctAnswer: 3,
  explanation: `
The routers are unable to form an adjacency because the router IDs must not match. Router IDs must be unique; a router will ignore Hello packets that are marked with its own router ID. To manually configure the router ID, you should issue the <b>router-id ip-address</b> command in router configuration mode, where <i>ip-address</i> is a 32-bit value in dotted decimal notation. If the router ID is not manually configured, the router ID will be the highest loopback Internet Protocol (IP) address configured on a router. If a loopback IP address is not configured, then the router ID will be the highest IP address among the configured interfaces on the router.

The Open Shortest Path First (OSPF) areas in this scenario match. Only OSPF routers in the same hierarchical area form adjacencies. To configure an OSPF area, you should issue the <b>network address mask area area</b> command in OSPF router configuration mode. Although you can configure a multiarea OSPF topology, the OSPF areas on neighboring interfaces must match in order for two OSPF routers to form an adjacency. In this scenario, RouterB's FastEthernet 0/0 interface is operating in Area 0 and is directly connected to RouterA's FastEthernet 0/0 interface, which is also operating in Area 0. Area 0 is also known as the backbone area. If you are not using virtual links, any nonbackbone OSPF areas you configure must border Area 0. On smaller networks, single-area OSPF configurations also offer the benefit of generating fewer link-state advertisements (LSAs).

Whereas Enhanced Interior Gateway Routing Protocol (EIGRP) process IDs must match when EIGRP is used, OSPF process IDs do not have to match when OSPF is used. The OSPF process ID is locally significant to the router and can be any positive integer in the range from 1 through 65535. You can specify the OSPF process ID by issuing the <b>ospf process-id</b> command when you configure a router for OSPF.

The cost does not have to be higher than 1. By default, OSPF uses the bandwidth of a link to determine the cost. The higher the bandwidth, the lower the cost. To calculate the cost, divide 100,000,000 by the bandwidth in bits per second (bps). The FastEthernet 100-megabits per seconds (Mbps) link between RouterA and RouterB would have a default cost of 1, because 100,000,000 ÷ 100,000,000 = 1. To manually configure the OSPF cost of a link, you should issue the <b>ip ospf cost cost</b> command in interface configuration mode.

The IP addresses for RouterA and RouterB are within the same subnet. Therefore, the subnet mask is correct, and the two routers should be able to communicate. A /30 subnet mask allows for two hosts per subnet. In this example, 10.1.1.12/30 is the network address, 10.1.1.13/30 and 10.1.1.14/30 are valid host addresses, and 10.1.1.15/30 is the broadcast address.

The dead timer value should not match the Hello timer value. In order for OSPF routers to establish an adjacency, the dead timer on one router should match the dead timer on the other router and the Hello timer on one router should match the Hello timer on the other router. Both RouterA and RouterB are set to a Hello interval of 10 seconds and a dead interval of 40 seconds, so the OSPF timers are configured correctly. The Hello timer is used to specify the amount of time between sending Hello packets, and the dead timer is used to specify the amount of time to wait for Hello packets before declaring a neighbor to be down. By default, the Hello timer is set to 10 seconds on point-to-point and broadcast links and 30 seconds on nonbroadcast multiaccess (NBMA) links. The dead timer is set to four times the Hello timer value by default. To manually configure the Hello timer interval, you should issue the <b>ip ospf hello-interval seconds</b> command in interface configuration mode. To manually configure the dead timer interval, you should issue the <b>ip ospf dead-interval seconds</b> command in interface configuration mode.
`,
  reference: [
    {
      title: "Boson CCNA Curriculum 200-301",
      description: "Module 6: IP Routing, Troubleshooting OSPF Adjacencies"
    },
    {
      title: "Cisco: OSPF Neighbor Problems Explained",
      link: "https://www.cisco.com/c/en/us/support/docs/ip/open-shortest-path-first-ospf/13685-13.html"
    },
    {
      title: "Cisco: OSPF Design Guide",
      link: "https://www.cisco.com/c/en/us/support/docs/ip/open-shortest-path-first-ospf/7039-1.html"
    },
    {
      title: "Cisco: What Does the show ip ospf interface Command Reveal?",
      link: "https://www.cisco.com/c/en/us/support/docs/ip/open-shortest-path-first-ospf/13774-19.html"
    }
  ]
},

{
  id: 20,
  category: "IP Connectivity",
  questionType: "Single-select",
  question: `Which of the following are found in the EIGRP routing table? (Select the best answer.)`,
  options: [
    "successors",
    "all neighbor routers",
    "successors and feasible successors",
    "feasible successors"
  ],
  correctAnswer: 0,
  explanation: `
<b>Explanation:</b>
<br>
The Enhanced Interior Gateway Routing Protocol (EIGRP) routing table contains only successors, which are the best next-hop routes to a destination. EIGRP routers maintain a routing table, a topology table, and a neighbor table. To display the EIGRP routing table, you should issue the <b>show ip route eigrp</b> command.<br><br>
The topology table contains successors and feasible successors. Feasible successors are routes that are guaranteed to represent a loop-free path to a destination. To display the topology table, you should issue the <b>show ip eigrp topology</b> command. Each route contains two numbers inside parentheses. The first number is the feasible distance (FD), which is the total distance to the destination network through that next-hop router. The second number is the advertised distance (AD), sometimes called the reported distance (RD), which is the cost that the next-hop router has calculated for the route. The route with the lowest FD becomes the successor. The successor route is placed in the routing table and is used to route packets to the destination network.<br><br>
If the AD for a nonsuccessor route is less than the FD of the successor, the route is a feasible successor; if the AD is greater than the FD of the successor, the route is not a feasible successor and is not listed in the topology table. The FD is compared to the AD to ensure that only paths that are guaranteed to be free of loops are selected as alternate routes.<br><br>
The neighbor table lists routes through all the adjacent EIGRP neighbors. Routes that are not chosen as successors or feasible successors are not listed in the routing table or topology table; they are listed only in the neighbor table. To display the neighbor table, you should issue the <b>show ip eigrp neighbors</b> command.
`,
  reference: [
    {
      title: "Cisco: Introduction to EIGRP",
      link: "https://www.cisco.com/c/en/us/support/docs/ip/enhanced-interior-gateway-routing-protocol-eigrp/13677-12.html"
    }
  ]
},

{
  id: 27,
  category: "IP Connectivity",
  questionType: "Single-select",
  question: `An OSPF router is attempting to obtain its router ID.

Which of the following will take precedence? (Select the best answer.)`,
  options: [
    "the lowest IP address on a loopback interface",
    "a manually configured router ID",
    "the lowest IP address on a nonloopback interface",
    "the highest IP address on a loopback interface",
    "the highest IP address on a nonloopback interface"
  ],
  correctAnswer: 1,
  explanation: `
<b>Explanation:</b><br>
Of the choices provided, a manually configured router ID will take precedence over any form of automatically calculated router ID on an Open Shortest Path First (OSPF) router. OSPF uses router IDs in the designated router (DR) and backup designated router (BDR) election process.<br><br>
If the OSPF router ID of a router is not manually configured, the router ID will be determined first by the highest Internet Protocol (IP) address among loopback interfaces and then by the highest IP address among physical interfaces if no loopback interfaces have been configured. Because loopback interfaces are logical, not physical, a loopback interface can never fail. For this reason, configuring a loopback interface is recommended for OSPF operation, because loopback interfaces are more reliable than physical interfaces.<br><br>
An OSPF router does not consider the lowest IP address of any interface when it attempts to obtain a router ID. However, a switch that is using Spanning Tree Protocol (STP) will use the lowest bridge ID (BID) when it attempts to determine the root bridge. The BID is composed of a 2-byte bridge priority and a 6-byte Media Access Control (MAC) address. The bridge priority is considered first in the determination of the lowest BID. When two or more switches have the lowest priority, the switch with the lowest MAC address becomes the root bridge.
`,
  reference: [
    {
      title: "Boson CCNA Curriculum 200-301",
      description: "Module 6: IP Routing, Understanding OSPF Router IDs"
    },
    {
      title: "Cisco: OSPF Design Guide",
      link: "https://www.cisco.com/c/en/us/support/docs/ip/open-shortest-path-first-ospf/7039-1.html"
    },
    {
      title: "Cisco: What Does the show ip ospf neighbor Command Reveal?",
      link: "https://www.cisco.com/c/en/us/support/docs/ip/open-shortest-path-first-ospf/13774-20.html"
    }
  ]
},

{
  id: 522,
  category: "Network Fundamentals",
  questionType: "Single-select",
  question: `Which of the following represents the maximum bandwidth of a CAT 5e cable? (Select the best answer.)`,
  options: [
    "10,000 Mbps",
    "10 Mbps",
    "1,000 Mbps",
    "100 Mbps"
  ],
  correctAnswer: 2,
  explanation: `
<b>Explanation:</b><br>
The maximum bandwidth of a CAT 5e cable is 1,000 megabits per second (Mbps), or 1 gigabit per second (Gbps). CAT 5e was created to enhance the bandwidth limitations of the CAT 5 cable standard. CAT 5 can support bandwidth of up to 100 Mbps. Unshielded twisted-pair (UTP) cables contain multiple pairs of color-coded copper wires encased in a protective jacket. The protective jacket is typically made of rubber. Twisted-pair cables are categorized by the Telecommunications Industry Association (TIA) and the Electronic Industries Alliance (EIA) according to the maximum frequency the cable can process.<br><br>
The maximum bandwidth of a CAT 6 cable is 10,000 Mbps, or 10 Gbps. However, CAT 6 can only support 10 Gbps bandwidth for segments of about 180 feet (55 meters) or less. For segments between 183 feet and 328 feet (56 and 100 meters), the maximum supported bandwidth for CAT 6 is 1,000 Mbps, or 1 Gbps. CAT 6 segments cannot extend beyond 328 feet (100 meters) without the use of a repeater.<br><br>
The maximum bandwidth of a CAT 3 cable is 10 Mbps. CAT 3 cables are typically used for telephone systems.
`,
  reference: [
    {
      title: "True Cable: Cat5e Ethernet Cable, Know Which Ethernet Cables to Buy For Your Application",
      link: "https://www.truecable.com/blogs/cable-academy/cat5e-ethernet-cable-know-which-ethernet-cables-to-buy-for-your-application"
    }
  ]
},

{
  id: 633,
  category: "Network Fundamentals",
  questionType: "Single-select",
  question: `You want to configure an IP address for a router's serial interface that will provide a point-to-point connection to a branch office.

Which of the following IP addresses are you most likely to use? (Select the best answer.)`,
  options: [
    "172.16.17.18/30",
    "172.16.17.19/30",
    "172.16.17.24/30",
    "172.16.17.23/30",
    "172.16.17.20/30"
  ],
  correctAnswer: 0,
  explanation: `
<b>Explanation:</b>
<br>
Of the choices available, the 172.16.17.18/30 Internet Protocol (IP) address is the most appropriate address for the router's serial interface in this scenario. To conserve IP addresses, you should always use a /30 subnet mask for point-to-point links.
<br><br>
In this scenario, you should first determine whether each address is a network address, a broadcast address, or a host address. A /30 subnet mask, which is equivalent to 255.255.255.252, indicates that 30 bits are used for the network portion of the address and that 2 bits remain for the host portion of the address, which allows for 2, or 2^2 – 2, host addresses. The first address is the subnet address, the next two addresses are valid host addresses, and the last address is the broadcast address for the subnet. Networks that are subnetted by using /30 masks are separated into groups of four addresses each. For example, the 172.16.17.0 network can be divided into the following subnets:
<br><br>
172.16.17.0/30<br>
172.16.17.4/30<br>
172.16.17.8/30<br>
172.16.17.12/30<br>
172.16.17.16/30<br>
172.16.17.20/30<br>
172.16.17.24/30<br>
172.16.17.28/30<br>
...and so on
<br><br>
The addresses in the list above are considered network addresses. The two addresses after the network address are host addresses, and the final address in the group of four is considered the broadcast address. Network and broadcast addresses cannot be assigned to hosts.
<br><br>
The 172.16.17.18 address is a host address on the 172.16.17.16/30 network. The network address is 172.16.17.16, the two available host addresses are 172.16.17.17 and 172.16.17.18, and the broadcast address is 172.16.17.19.
<br><br>
The 172.16.17.19/30 and 172.16.17.23/30 IP addresses cannot be used as the router's serial interface address in this scenario, because they are broadcast addresses; 172.16.17.19/30 is the broadcast address for the 172.16.17.16/30 subnet, whereas 172.16.17.23/30 is the broadcast address for the 172.16.17.20/30 subnet.
<br><br>
The 172.16.17.20/30 and 172.16.17.24/30 IP addresses cannot be used as the router's serial interface address in this scenario, because they are network addresses; 172.16.17.20/30 is the network address for the subnet containing the hosts 172.16.17.21/30 and 172.16.17.22/30, whereas 172.16.17.24/30 is the network address for the subnet containing the hosts 172.16.17.25/30 and 172.16.17.26/30.
`,
  reference: [
    {
      title: "Boson CCNA Curriculum 200-301",
      description: "Module 2: Network Addressing and Transport, Subnetting"
    },
    {
      title: "CCNA 200-301 Official Cert Guide",
      description: "Volume 1, Chapter 13: Analyzing Subnet Masks, Calculations Based on the IPv4 Address Format"
    },
    {
      title: "Cisco: IP Addressing and Subnetting for New Users",
      link: "https://www.cisco.com/c/en/us/support/docs/ip/address-resolution-protocol-arp/13788-3.html"
    }
  ]
},

{
  id: 460,
  category: "Automation and Programmability",
  questionType: "Single-select",
  question: `Which of the following Cisco SDA components creates VXLAN tunnels between SDA switches? (Select the best answer.)`,
  options: [
    "the underlay network",
    "the overlay network",
    "the applications",
    "the scripts",
    "the fabric"
  ],
  correctAnswer: 1,
  explanation: `
<b>Explanation:</b><br>
Of the available choices, the overlay network is the Cisco Software-Defined Access (SDA) component that creates Virtual Extensible local area network (VXLAN) tunnels between Cisco SDA switches. The tunnels send and receive traffic between fabric endpoints.<br><br>

Cisco SDA is a Cisco-developed means of building local area networks (LANs) by using policies and automation. The Cisco Digital Network Architecture (DNA) controller, which is similar to a Software-Defined Networking (SDN) controller, is the central component of a Cisco SDA network. Cisco DNA is a software-centric network architecture that uses a combination of Application Programming Interfaces (APIs) and a graphical user interface (GUI) to simplify network operations. The Representational State Transfer (REST) API is used to natively communicate with Cisco devices. To communicate with third-party devices, Cisco DNA Center relies on software development kits (SDKs).<br><br>

Neither the underlay network nor the fabric is the component that creates VXLAN tunnels between SDA switches. The underlay network is a more traditional network configuration of switches. It is a collection of devices, interfaces, and media that comprises the Internet Protocol (IP) network that connects each fabric node. The underlay network is part of a dynamic discovery process that is involved in creating the overlay network's VXLAN tunnels. When an endpoint in a Cisco SDA network sends traffic to another endpoint, the traffic flows from the endpoint through the overlay network's VXLAN tunnels. The fabric is the entirety of the overlay network and the underlay network in a Cisco SDA network.<br><br>

An SDN controller uses two different sets of APIs: one set to communicate with applications and another set to communicate with devices in the data plane. Northbound APIs enable an SDN controller to communicate with applications in the application plane. Applications use northbound APIs to send requests or instructions to the SDN controller, which uses that information to modify and manage network flow. Southbound APIs enable an SDN controller to communicate with devices in the data plane.<br><br>

Neither scripts nor applications are the component that creates VXLAN tunnels between SDA switches. In both SDA and SDN deployments, the controller communicates with devices by using a southbound API. Communication with applications and user interfaces is accomplished by using a northbound API.
`,
  reference: [
    {
      title: "Boson CCNA Curriculum 200-301",
      description: "Module 9: Automation and Programming, SDN and Cisco SDA"
    },
    {
      title: "CCNA 200-301 Official Cert Guide, Volume 2",
      description: "Chapter 17: Cisco Software-Defined Access (SDA), SDA Fabric, Underlay, and Overlay"
    }
  ]
},

{
  id: 658,
  category: "Network Access",
  questionType: "Matching",
  question: `
<p>You have two switch ports connected together, each configured with one of these modes:</p>
<ul>
  <li>access</li>
  <li>dynamic auto</li>
  <li>dynamic desirable</li>
  <li>trunk</li>
</ul>
<p>Match each pair of switch port modes (Local:Remote) with the resulting operational mode of the link.</p>
  `,
   matchingPairs: {
    terms: [
      { id: "a_a", text: "access : access" },
      { id: "a_da", text: "access : dynamic auto" },
      { id: "a_dd", text: "access : dynamic desirable" },
      { id: "a_t", text: "access : trunk" },
      { id: "da_a", text: "dynamic auto : access" },
      { id: "da_da", text: "dynamic auto : dynamic auto" },
      { id: "da_dd", text: "dynamic auto : dynamic desirable" },
      { id: "da_t", text: "dynamic auto : trunk" },
      { id: "dd_a", text: "dynamic desirable : access" },
      { id: "dd_da", text: "dynamic desirable : dynamic auto" },
      { id: "dd_dd", text: "dynamic desirable : dynamic desirable" },
      { id: "dd_t", text: "dynamic desirable : trunk" },
      { id: "t_a", text: "trunk : access" },
      { id: "t_da", text: "trunk : dynamic auto" },
      { id: "t_dd", text: "trunk : dynamic desirable" },
      { id: "t_t", text: "trunk : trunk" }
    ],
    definitions: [
      // All results must be UNIQUE!
      { id: "access_1", text: "access" },
      { id: "access_2", text: "access" },
      { id: "access_3", text: "access" },
      { id: "misconfig_1", text: "misconfig" },
      { id: "access_4", text: "access" },
      { id: "access_5", text: "access" },
      { id: "trunk_1", text: "trunk" },
      { id: "trunk_2", text: "trunk" },
      { id: "access_6", text: "access" },
      { id: "trunk_3", text: "trunk" },
      { id: "trunk_4", text: "trunk" },
      { id: "trunk_5", text: "trunk" },
      { id: "misconfig_2", text: "misconfig" },
      { id: "trunk_6", text: "trunk" },
      { id: "trunk_7", text: "trunk" },
      { id: "trunk_8", text: "trunk" }
    ]
  },
  correctAnswer: {
    "a_a": "access_1",
    "a_da": "access_2",
    "a_dd": "access_3",
    "a_t": "misconfig_1",
    "da_a": "access_4",
    "da_da": "access_5",
    "da_dd": "trunk_1",
    "da_t": "trunk_2",
    "dd_a": "access_6",
    "dd_da": "trunk_3",
    "dd_dd": "trunk_4",
    "dd_t": "trunk_5",
    "t_a": "misconfig_2",
    "t_da": "trunk_6",
    "t_dd": "trunk_7",
    "t_t": "trunk_8"
  },
  explanation: `
<table border="1" cellspacing="0" cellpadding="5" style="border-collapse: collapse; text-align: center;">
  <tr style="background: #eee; font-weight:bold">
    <td>Administrative mode</td>
    <td>access</td>
    <td>dynamic auto</td>
    <td>dynamic desirable</td>
    <td>trunk</td>
  </tr>
  <tr>
    <td>access</td>
    <td style="background:#28b463; color:#fff">access</td>
    <td style="background:#28b463; color:#fff">access</td>
    <td style="background:#28b463; color:#fff">access</td>
    <td style="background:#af7ac5; color:#fff">misconfig</td>
  </tr>
  <tr>
    <td>dynamic auto</td>
    <td style="background:#28b463; color:#fff">access</td>
    <td style="background:#28b463; color:#fff">access</td>
    <td style="background:#2874a6; color:#fff">trunk</td>
    <td style="background:#2874a6; color:#fff">trunk</td>
  </tr>
  <tr>
    <td>dynamic desirable</td>
    <td style="background:#28b463; color:#fff">access</td>
    <td style="background:#2874a6; color:#fff">trunk</td>
    <td style="background:#2874a6; color:#fff">trunk</td>
    <td style="background:#2874a6; color:#fff">trunk</td>
  </tr>
  <tr>
    <td>trunk</td>
    <td style="background:#af7ac5; color:#fff">misconfig</td>
    <td style="background:#2874a6; color:#fff">trunk</td>
    <td style="background:#2874a6; color:#fff">trunk</td>
    <td style="background:#2874a6; color:#fff">trunk</td>
  </tr>
</table>
<br>
A Layer 2 switch port can be configured to operate in either a static mode or a dynamic mode. When operating in static mode, the switch port is explicitly configured as either an access port or a trunk.

An access port is a member of a virtual local area network (VLAN) and is typically connected to an edge device, like a server or a workstation, whereas a trunk port is not a member of any VLAN and is typically connected to a nonedge device, such as a switch or a router. By default, an access port on a Cisco switch operates in VLAN 1. In addition, access ports automatically drop VLAN-tagged frames, such as those forwarded by 802.1Q.

The static switchport modes are also referred to as on and off to indicate whether a port has been statically configured as a trunk port or an access port, respectively. For example, the off keyword in the Mode column of the following sample output from the show interfaces command indicates that the FastEthernet 0/5 interface is configured to operate in a static access mode:

<pre>
Port      Mode      Encapsulation  Status         Native vlan
Fa0/5     off       802.1q         not-trunking   1
</pre>

When operating in a dynamic mode, a switch port uses Dynamic Trunking Protocol (DTP) to negotiate whether it should operate as an access port or a trunk port. There are two dynamic modes of operation for a switch port:
<ul>
  <li><b>auto</b> – operates in access mode unless the neighboring interface actively negotiates to operate as a trunk</li>
  <li><b>desirable</b> – operates in access mode unless it can actively negotiate a trunk connection with a neighboring interface</li>
</ul>
The default dynamic mode is dependent on the hardware platform. In general, departmental-level or wiring closet–level switches default to auto mode, whereas backbone-level switches default to desirable mode. Because a switch port in auto mode does not actively negotiate to operate in trunk mode, it will form a trunk link only if negotiations are initiated by the neighboring interface. A neighboring interface will initiate negotiations only if it is configured to operate in trunk mode or desirable mode. By contrast, a switch port in desirable mode will actively negotiate to operate in trunk mode and will form a trunk link with a neighboring port that is configured to operate in trunk, desirable, or auto mode.
  `,
  reference: [
    {
      title: "Boson CCNA Curriculum 200-301",
      description: "Module 5: Switching and Network Access, Understanding and Configuring DTP"
    },
    {
      title: "CCNA 200-301 Official Cert Guide",
      description: "Volume 1, Chapter 8: Implementing Ethernet Virtual LANs, VLAN Trunking Configuration"
    },
    {
      title: "Cisco: Configuring VLANs: Trunking Overview",
      link: "https://www.cisco.com/c/en/us/support/docs/lan-switching/vlan/10023-3.html"
    }
  ]
},

{
  id: 434,
  category: "Security Fundamentals",
  questionType: "Matching",
  question: `
<p>Match each Layer 2 attack type on the left with its description on the right.</p>
`,
  matchingPairs: {
    terms: [
      { id: "vlanhopping", text: "VLAN hopping" },
      { id: "macflooding", text: "MAC flooding" },
      { id: "arppoisoning", text: "ARP poisoning" },
      { id: "macspoofing", text: "MAC spoofing" },
      { id: "dhcpspoofing", text: "DHCP spoofing" }
    ],
    definitions: [
      { id: "def1", text: "An attacker sends double-tagged 802.1Q frames over a trunk link." },
      { id: "def2", text: "An attacker sends traffic out every port on a switch." },
      { id: "def3", text: "An attacker intercepts traffic intended for another recipient." },
      { id: "def4", text: "An attacker identifies itself using the address of another host." },
      { id: "def5", text: "An attacker installs a rogue server on the network." }
    ]
  },
  correctAnswer: {
    vlanhopping: "def1",
    macflooding: "def2",
    arppoisoning: "def3",
    macspoofing: "def4",
    dhcpspoofing: "def5"
  },
  explanation: `
<p>In a Media Access Control (MAC) spoofing attack, an attacker uses the MAC address of another known host on the network in order to bypass port security measures. MAC spoofing can also be used to impersonate another host on the network. Implementing sticky secure MAC addresses can help mitigate MAC spoofing attacks.</p>

<p>In a MAC flooding attack, an attacker generates thousands of forged frames every minute with the intention of overwhelming the switch's MAC address table. Once this table is flooded, the switch can no longer make intelligent forwarding decisions and all traffic is flooded. This allows the attacker to view all data sent through the switch because all traffic will be sent out each port. Implementing port security can help mitigate MAC flooding attacks by limiting the number of MAC addresses that can be learned on each interface to a maximum of 128. A MAC flooding attack is also known as a Content Addressable Memory (CAM) table overflow attack.</p>

<p>In an Address Resolution Protocol (ARP) poisoning attack, which is also known as an ARP spoofing attack, the attacker sends a gratuitous ARP (GARP) message to a host. The GARP message associates the attacker's MAC address with the Internet Protocol (IP) address of a valid host on the network. Subsequently, traffic sent to the valid host address will go through the attacker's computer rather than directly to the intended recipient. Implementing Dynamic ARP Inspection (DAI) can help mitigate ARP poisoning attacks.</p>

<p>In a virtual local area network (VLAN) hopping attack, an attacker attempts to inject packets into other VLANs by accessing the VLAN trunk and double-tagging 802.1Q frames. A successful VLAN hopping attack enables an attacker to send traffic to other VLANs without the use of a router. You can prevent VLAN hopping by disabling Dynamic Trunking Protocol (DTP) on trunk ports, by changing the native VLAN, and by configuring user-facing ports as access ports.</p>

<p>In a Dynamic Host Configuration Protocol (DHCP) spoofing attack, an attacker installs a rogue DHCP server on the network in an attempt to intercept DHCP requests. The rogue DHCP server can then respond to the DHCP requests with its own IP address as the default gateway address; hence all traffic is routed through the rogue DHCP server. You should enable DHCP snooping to help prevent DHCP spoofing attacks.</p>
  `,
  reference: [
    {
      title: "Cisco: Layer 2 Security Features on Cisco Catalyst Layer 3 Fixed Configuration Switches Configuration Example: Background Information",
      link: "https://www.cisco.com/c/en/us/support/docs/switches/catalyst-3550-series-switches/72854-layer2-secftrs.html"
    },
    {
      title: "Cisco: Implementation of Security: Layer 2 Security Design",
      link: "https://www.cisco.com/c/en/us/support/docs/security-vpn/implementation/18158-seclayer2design.html"
    }
  ]
},

{
  id: 95,
  category: "IP Services",
  questionType: "Single-select",
  question: `Which of the following protocols uses both TCP and UDP? (Select the best answer.)`,
  options: [
    "DNS",
    "Telnet",
    "FTP",
    "DHCP",
    "TFTP"
  ],
  correctAnswer: 0,
  explanation: `
<b>Explanation:</b><br>
Domain Name System (DNS) uses both Transmission Control Protocol (TCP) and User Datagram Protocol (UDP) over port 53. DNS uses a hierarchical database to translate fully qualified domain names (FQDNs) to Internet Protocol (IP) addresses. An FQDN includes the host name of a device and the domain name to which that device is connected. DNS enables you to access a computer named server1 on the boson.com domain by using the FQDN server1.boson.com instead of the IP address of the computer.<br><br>
TCP is a Transport layer protocol that is used for reliable, synchronized, connection-oriented transfer of data. Data sent by TCP is sequenced and checked for errors, and any lost packets are retransmitted. File Transfer Protocol (FTP), which is used to transfer files over a network, uses TCP ports 20 and 21. Telnet, a terminal emulation protocol that can be used to remotely log on to a router, uses TCP port 23. Other Application layer protocols that use TCP include Simple Mail Transfer Protocol (SMTP), which uses TCP port 25; Hypertext Transfer Protocol (HTTP), which uses TCP port 80; and Post Office Protocol 3 (POP3), which uses TCP port 110. Neither FTP nor Telnet uses UDP to communicate.<br><br>
UDP is a Transport layer protocol that is used for unreliable, connectionless datagram transfer. Transmitted datagrams can appear out of sequence or can be dropped without notice. Dynamic Host Configuration Protocol (DHCP), which assigns IP addressing and default gateway information to clients, uses UDP ports 67 and 68. Trivial File Transfer Protocol (TFTP), which is used to transfer files over a network, uses UDP port 69. Other Application layer protocols that use UDP include Network Time Protocol (NTP), which uses UDP port 123; Simple Network Management Protocol (SNMP), which uses UDP ports 161 and 162; and Remote Authentication Dial-In Service User (RADIUS), which uses UDP ports 1812 and 1813. Neither DHCP nor TFTP uses TCP to communicate.
  `,
  reference: [
    {
      title: "Boson CCNA Curriculum 200-301",
      description: "Module 7: IP Services, DNS"
    },
    {
      title: "Microsoft: DNS or other Services works on both TCP and UDP",
      link: "https://learn.microsoft.com/en-us/troubleshoot/windows-server/networking/dns-works-on-tcp-and-udp-port-53"
    }
  ]
},

{
  id: 688,
  category: "Network Fundamentals",
  questionType: "Single-select",
  question: `Which of the following is used to run a guest OS within a host OS? (Select the best answer.)`,
  options: [
    "a VM",
    "a virtual switch",
    "virtual memory",
    "a virtual PBX"
  ],
  correctAnswer: 0,
  explanation: `
<b>Explanation:</b><br>
A virtual machine (VM) is used to run a guest operating system (OS) within a host OS. Though VMs share hardware resources with the host OS, they are otherwise isolated from one another. VMs can be used for a variety of purposes, such as software testing or hosting specific network services. An additional programming layer, known as a hypervisor, is required in order for the VM to communicate with the host hardware. A hypervisor is used to allocate hardware resources, such as hard drive space, central processing unit (CPU), and random access memory (RAM), to the VM.<br><br>
A virtual switch is a virtual device used to allow multiple VMs to communicate within a host system. A VM needs a virtual network interface card (NIC) in order to communicate with other devices. Each virtual NIC is assigned a unique Media Access Control (MAC) address. Similar to a hardware-based switch, a virtual switch maintains a table of MAC-to-port associations. When data is sent from one VM to another, the virtual switch will use this table to determine which port to use to forward the received data.<br><br>
A virtual private branch exchange (PBX) is a virtual device used to route telephone calls. A PBX serves as a centralized device that routes calls between a telephone company and phones within a single office location. In addition, PBX systems can be used to connect fax and voicemail services. A virtual PBX is a software-based exchange that can run on a desktop computer or a VM instead of on a dedicated device.<br><br>
Virtual memory is an allocated section of hard drive space that can be used as additional RAM. If more memory is needed than is available in RAM, data is moved out of physical RAM in chunks of data called pages. When the data stored in a page is needed again, the page is moved back into RAM.
  `,
  reference: [
    {
      title: "Boson CCNA Curriculum 200-301",
      description: "Module 4: Virtualization Fundamentals, Device Virtualization"
    },
    {
      title: "CCNA 200-301 Official Cert Guide",
      description: "Volume 2, Chapter 15: Cloud Architecture, Server Virtualization"
    },
    {
      title: "IBM: Virtual Machines",
      link: "https://www.ibm.com/topics/virtual-machines"
    }
  ]
},

{
  id: 408,
  category: "Security Fundamentals",
  questionType: "Single-select",
  question: `An administrator has configured the clear-text password B0\$0n! so that it must be used to access enable mode on a Cisco router. The password is encrypted in the running configuration. No other passwords configured on the device are encrypted.

Which of the following commands did the administrator most likely use to accomplish this goal? (Select the best answer.)`,
  options: [
    "enable secret B0\$0n!",
    "enable secret 5 B0\$0n!",
    "service password-encryption",
    "password 0 B0\$0n!"
  ],
  correctAnswer: 0,
  explanation: `
<b>Explanation:</b><br>
Most likely, the administrator issued the <b>enable secret B0\$0n!</b> command to configure the clear-text password B0\$0n! so that it is used to access enable mode on the router and is encrypted in the running configuration. In some Cisco IOS versions prior to 15.3(3), the <b>enable secret</b> command by default stores an encrypted password in the device's configuration file by using a Secure Hash Algorithm (SHA) 256-bit hash. As of Cisco IOS 15.3(3), Type 4 passwords have been deprecated because of a security flaw in their implementation.<br><br>
The syntax for the <b>enable secret</b> command is <b>enable secret [level /level/] {password | [encryption-type] encrypted-password}</b>, where <i>password</i> is a string of characters that represents the clear-text password. Instead of supplying a clear-text password, you can specify an <i>encryption-type</i> value of 0, 4, or 5 and an <i>encrypted-password</i> value of either a clear-text password, a SHA-256 hash, or a Message Digest 5 (MD5) hash, respectively. Supplying a hash value requires that you have previously encrypted the value by using a hashing algorithm in the same fashion that IOS uses the algorithm. This command configures a password that is required in order to place the device into enable mode, which is also known as privileged EXEC mode. The device must, at a minimum, be placed into enable mode for the user to be able to display the running configuration.<br><br>
The administrator did not issue the <b>enable secret 5 B0\$0n!</b> command in this scenario. If the administrator had specified an <i>encryption-type</i> value of 5, the <b>enable secret</b> command would have assumed that the B0\$0n! string was an MD5 hash instead of a clear-text password. When issued, the command would have then generated an error message similar to the following:<br>
<pre>
ERROR: The secret you entered is not a valid encrypted secret.
To enter an UNENCRYPTED secret, do not specify type 5 encryption.
When you properly enter an UNENCRYPTED secret, it will be encrypted.
</pre>
The administrator did not issue the <b>service password-encryption</b> command in this scenario. If the administrator had issued the <b>service password-encryption</b> command, all current and future passwords in the device's running configuration would be encrypted. In this scenario, only the password B0\$0n! has been encrypted.<br><br>
The administrator did not issue the <b>password 0 B0\$0n!</b> command in this scenario. The <b>line console 0</b> command followed by the <b>password</b> command configures a password for accessing the router by using the console. Typically, the console is accessed by physically connecting a console cable between the router and a device that is running terminal software. Issuing the password for the console places the device into user mode.
  `,
  reference: [
    {
      title: "CCNA 200-301 Official Cert Guide",
      description: "Volume 2, Chapter 5: Securing Network Devices, Encoding the Enable Passwords with Hashes"
    },
    {
      title: "Cisco: Configuring Security with Passwords, Privileges, and Logins: Cisco IOS CLI Modes",
      link: "https://www.cisco.com/c/en/us/td/docs/ios-xml/ios/sec_usr_cfg/configuration/15-s/sec-usr-cfg-15-s-book/sec-usr-cfg-line-modes.html"
    },
    {
      title: "Cisco: Configuring Security with Passwords, Privileges, and Logins: Cisco IOS Password Encryption Levels",
      link: "https://www.cisco.com/c/en/us/td/docs/ios-xml/ios/sec_usr_cfg/configuration/15-s/sec-usr-cfg-15-s-book/sec-usr-cfg-encryption.html"
    }
  ]
},

{
  id: 439,
  category: "Security Fundamentals",
  questionType: "Single-select",
  question: `You issue the following commands on SwitchA:

<pre>
SwitchA#configure terminal
SwitchA(config)#interface fastethernet 0/1
SwitchA(config-if)#switchport port-security
SwitchA(config-if)#switchport port-security maximum 12
</pre>

You want to configure SwitchA to discard traffic and increment the SecurityViolation counter when it receives traffic on FastEthernet 0/1 from a host with an unauthorized MAC address.

Which of the following commands should you issue? (Select the best answer.)`,
  options: [
    "switchport port-security violation shutdown",
    "switchport port-security violation protect",
    "switchport port-security violation restrict",
    "switchport port-security violation discard"
  ],
  correctAnswer: 2,
  explanation: `
You should issue the <b>switchport port-security violation restrict</b> command to configure SwitchA to discard traffic and increment the SecurityViolation counter when SwitchA receives traffic on FastEthernet 0/1 from a host with an unauthorized Media Access Control (MAC) address. The syntax of the <b>switchport port-security violation</b> command is <b>switchport port-security violation {protect | restrict | shutdown}</b>.<br><br>
The <b>switchport port-security violation protect</b> command configures a switch port to discard traffic that it receives from unauthorized hosts. However, the SecurityViolation counter is not incremented when the <b>protect</b> keyword is used.<br><br>
The <b>switchport port-security violation shutdown</b> command configures a switch port to enter the error-disabled state when the port receives traffic from unauthorized hosts. You can remove the switch port from the error-disabled state by issuing the <b>errdisable recovery cause shutdown</b> command from global configuration mode or by issuing the <b>shutdown</b> and <b>no shutdown</b> commands from interface configuration mode.<br><br>
The <b>switchport port-security violation discard</b> command contains incorrect syntax, because <b>discard</b> is not a valid keyword of the <b>switchport port-security violation</b> command.
  `,
  reference: [
    {
      title: "Boson CCNA Curriculum 200-301",
      description: "Module 8: Security Fundamentals, Restricting Ports by Client MAC Address"
    },
    {
      title: "Cisco: Configuring Port-Based Traffic Control: Configuring Port Security",
      link: "https://www.cisco.com/c/en/us/td/docs/switches/lan/catalyst3750x_3560x/software/release/12-2_55_se/configuration/guide/3750xscg/swstp_sb.html"
    }
  ]
},

{
  id: 17,
  category: "IP Connectivity",
  questionType: "Single-select",
  question: `
You are trying to configure Router1 to perform unequal-cost load balancing over OSPF. However, only one OSPF route exists to the destination network.

Which of the following must you do to enable unequal-cost load balancing? (Select the best answer.)
`,
  options: [
    "Adjust the Hello timers and dead timers so that they match throughout the network.",
    "Issue the ip ospf cost 1 command on all interfaces.",
    "Adjust the OSPF process IDs so that they match throughout the network.",
    "Configure the variance to a value higher than 1.",
    "Configure the routes to use EIGRP."
  ],
  correctAnswer: 4,
  explanation: `
You should configure the routers to use Enhanced Interior Gateway Routing Protocol (EIGRP). EIGRP supports load balancing over equal-cost and unequal-cost paths. By contrast, Open Shortest Path First (OSPF) supports equal-cost load balancing but does not support unequal-cost load balancing. If multiple OSPF paths to a destination exist and each path has the same bandwidth, OSPF will load balance between the paths.

Issuing the ip ospf cost 1 command on all interfaces will not enable Router1 to perform unequal-cost load balancing. You can manually configure the OSPF cost of a path through an interface by issuing the ip ospf cost command in interface configuration mode, where cost is the path cost that you want to assign. OSPF uses cost, which is based on bandwidth, as its metric. The higher the bandwidth, the lower the cost. OSPF selects the lowest-cost path, which is the path with the highest bandwidth, to a destination.

OSPF does not use variance; therefore, configuring variance to a value higher than 1 will not enable Router1 to perform unequal-cost load balancing unless you also configure Router1 to use EIGRP. The variance command is used to determine whether EIGRP feasible successors can be used for unequal-cost load balancing.

Adjusting the OSPF process IDs so that they match throughout the network will not enable Router1 to perform unequal-cost load balancing. The OSPF process ID is locally significant to the router and can be any positive integer from 1 through 65535. You can specify the OSPF process ID by issuing the router ospf process-id command.

Adjusting the Hello timers and dead timers so that they match throughout the network will not enable Router1 to perform unequal-cost load balancing. OSPF Hello timers have to match and OSPF dead timers have to match in order for two routers to form an adjacency. However, all of the routers on the network are set to a hello interval of 10 seconds and a dead interval of 40 seconds; thus the OSPF timers are configured correctly. The Hello timer is used to specify the amount of time between sending hello packets, and the dead timer is used to specify the amount of time to wait for hello packets before declaring a neighbor to be down. By default, the Hello timer is set to 10 seconds on point-to-point and broadcast links and 30 seconds on nonbroadcast multiaccess (NBMA) links. The dead timer is set to four times the Hello timer value by default. To manually configure the Hello timer interval, you should issue the ip ospf hello-interval seconds command in interface configuration mode. To manually configure the dead timer interval, you should issue the ip ospf dead-interval seconds command in OSPF router configuration mode.
  `,
  reference: [
    {
      title: "Boson CCNA Curriculum 200-301",
      description: "Module 6: IP Routing, Choosing Between OSPF and EIGRP"
    },
    {
      title: "Cisco: OSPF Design Guide: OSPF Cost",
      link: "https://www.cisco.com/c/en/us/support/docs/ip/open-shortest-path-first-ospf/7039-1.html"
    },
    {
      title: "Cisco: How Does Unequal Cost Path Load Balancing (Variance) Work in IGRP and EIGRP?",
      link: "https://www.cisco.com/c/en/us/support/docs/ip/enhanced-interior-gateway-routing-protocol-eigrp/16406-17.html"
    }
  ]
},

{
  id: 465,
  category: "Automation and Programmability",
  questionType: "Single-select",
  question: `Which of the following Cisco management solutions is typically installed on a desktop workstation? (Select the best answer.)`,
  options: [
    "Cisco PI",
    "Cisco DNA Center",
    "Cisco IOS 15",
    "Cisco Network Assistant"
  ],
  correctAnswer: 3,
  explanation: `
<b>Explanation:</b><br>
Of the available choices, only Cisco Network Assistant is a Cisco management solution that is typically installed on an administrator's desktop workstation. Cisco Network Assistant is a free Java-based desktop application that enables a local area network (LAN) administrator to perform network operations, diagnose problems, and interact with network devices by using a graphical user interface (GUI). A typical Cisco Network Assistant installation supports the management of up to 80 devices. Cisco Network Assistant predates Cisco Software-Defined Access (SDA) and does not support Cisco SDA.<br><br>
Cisco Digital Network Architecture (DNA) Center is not typically installed on a desktop workstation. Cisco DNA Center is an enterprise Cisco management solution that is built specifically to support Cisco SDA. Cisco SDA is a Cisco-developed means of building LANs by using policies and automation. Cisco DNA Center, which abstracts the complexity of network configuration by implementing a centralized controller and GUI, also supports many of the same traditional campus device management features that are supported by other Cisco management solutions. Administrators typically interact with Cisco DNA by using a browser-based GUI.<br><br>
Cisco Prime Infrastructure (PI) is not typically installed on a desktop workstation. In addition, Cisco PI does not support Cisco SDA. Cisco PI is a traditional enterprise Cisco management platform that relies on a browser-based GUI to enable administrators to perform operations on the network, diagnose problems with the network, and interact with devices on the network.<br><br>
Cisco IOS 15 is not typically installed on a desktop workstation. Cisco IOS is a network device operating system (OS) that is used to directly configure, manage, and troubleshoot a single device. Administrators typically interact with Cisco IOS by using a command-line interface (CLI). Access to the CLI can be gained by connecting to a device's console port, by connecting to a Telnet session, or by connecting to a Secure Shell (SSH) session, depending on how the device is configured.
  `,
  reference: [
    {
      title: "Cisco: Cisco Network Assistant",
      link: "https://www.cisco.com/c/en/us/products/switches/network-assistant/index.html"
    }
  ]
},

{
  id: 640,
  category: "Network Fundamentals",
  questionType: "Single-select",
  question: `Which of the following IPv6 addresses is a link-local multicast address that is used to send a packet to all routers on a segment? (Select the best answer.)`,
  options: [
    "FF05::2",
    "FF02::1",
    "FF05::1",
    "FF02::2"
  ],
  correctAnswer: 3,
  explanation: `
<b>Explanation:</b><br>
The Internet Protocol version 6 (IPv6) address FF02::2 is a link-local multicast address that is used to send a packet to all routers on a segment. All IPv6 router interfaces automatically join this multicast group. Link-local multicast addresses in IPv6 work similarly to how multicast addresses work in IP version 4 (IPv4). A multicast address is used to send packets to multiple devices that are configured with that multicast address. The following table shows common IPv4 multicast addresses and their respective IPv6 multicast addresses:

<table border="1" cellspacing="0" cellpadding="5" style="border-collapse: collapse; text-align: center;">
<tr>
  <th>Multicast Address</th>
  <th>IPv4</th>
  <th>IPv6</th>
</tr>
<tr>
  <td>All Hosts</td>
  <td>224.0.0.1</td>
  <td>FF02:0:0:0:0:0:0:1</td>
</tr>
<tr>
  <td>All Routers</td>
  <td>224.0.0.2</td>
  <td>FF02:0:0:0:0:0:0:2</td>
</tr>
<tr>
  <td>All OSPF Routers</td>
  <td>224.0.0.5</td>
  <td>FF02:0:0:0:0:0:0:5</td>
</tr>
<tr>
  <td>All OSPF DRs</td>
  <td>224.0.0.6</td>
  <td>FF02:0:0:0:0:0:0:6</td>
</tr>
<tr>
  <td>All RIP Routers (except RIPv1)</td>
  <td>224.0.0.9</td>
  <td>FF02:0:0:0:0:0:0:9</td>
</tr>
<tr>
  <td>All EIGRP Routers</td>
  <td>224.0.0.10</td>
  <td>FF02:0:0:0:0:0:0:A</td>
</tr>
</table>
<br>

Similar to IPv4, IPv6 uses three types of addresses, including unicast and multicast addresses. However, IPv6 does not use broadcast addresses. Instead, IPv6 uses anycast addresses, which are not available in IPv4. Functions that were performed by broadcast addresses in IPv4 are performed by multicast and anycast addresses in IPv6. Unicast addresses in IPv6 work similarly to how they work in IPv4. A unicast address is used to send packets to a single device. Multicast addresses in IPv6 also work similarly to how they work in IPv4. Anycast addresses are used to send packets to the closest device that is configured with the anycast address. Therefore, an anycast address can be described as a one-to-nearest address. The closest device is selected by the routing protocol that is used by the router. Because anycast addresses use the same address for multiple devices in a group, anycast addresses are ideal for load balancing.

The IPv6 prefix FF00::/8 is used for all multicast addresses. IPv6 addresses in the FF00::/8 range begin with the characters from FF00 through FFFF. However, certain address ranges are used to indicate the scope of the multicast address. The following IPv6 multicast scopes are defined:
<ul>
  <li>FF01::/16 &ndash; node-local</li>
  <li>FF02::/16 &ndash; link-local</li>
  <li>FF05::/16 &ndash; site-local</li>
  <li>FF08::/16 &ndash; organization-local</li>
  <li>FF0E::/16 &ndash; global</li>
</ul>

The IPv6 address FF02::1 is a link-local multicast address that is used to send a packet to all nodes on a segment. All IPv6 nodes automatically join this multicast group. Therefore, IPv6-enabled routers and hosts on a segment receive multicast packets sent to FF02::1.

The IPv6 address FF05::2 is a site-local multicast address that is used to send a packet to all routers in a site, not just on the local segment. The IPv6 address FF05::1 is a site-local multicast address that is used to send a packet to all nodes in a site.
  `,
  reference: [
    {
      title: "CCNA 200-301 Official Cert Guide",
      description: "Volume 1, Chapter 23: IPv6 Addressing and Subnetting, Unique Local Unicast Addresses"
    },
    {
      title: "RIPE: IPv6 Address Types (PDF)",
      link: "https://www.ripe.net/publications/docs/ripe-690#IPv6AddressTypes"
    }
  ]
},

{
  id: 504,
  category: "Network Access",
  questionType: "Single-select",
  question: `
You are configuring a normal WLAN by using the WLC GUI. You configure the <b>Profile Name</b> field on the <b>WLANs &gt; New</b> page with a value of <b>MyCompanyLAN</b>.

Which of the following statements about the SSID field is true? (Select the best answer.)
`,
  options: [
    "You can configure it with a reserved keyword.",
    "You must configure it with Profile Name value.",
    "You can configure it with the Profile Name value, but they need not match.",
    "You must not configure it with the Profile Name value."
  ],
  correctAnswer: 2,
  explanation: `
You can configure the <b>SSID</b> field on the <b>WLANs &gt; New</b> page with the value that you created for the <b>Profile Name</b> field, but they need not match. In this scenario, you have configured the <b>Profile Name</b> field on the Cisco wireless LAN controller (WLC) graphical user interface (GUI) <b>WLANs &gt; New</b> page with a value of <b>MyCompanyLAN</b>. When you are creating a new wireless local area network (WLAN), the profile name can be up to 32 characters in length and should uniquely identify the WLAN that you are configuring. The value that you enter in the <b>Profile Name</b> field will be used by the WLC to identify the WLAN on other configuration pages. For simplicity, many administrators choose to use the same value for the <b>Profile Name</b> field as they plan to configure in the <b>SSID</b> field, although this is not required.

The Cisco WLC GUI is a browser-based interface that enables you to configure various wireless network settings. To create a new normal WLAN, you should complete four steps on the <b>WLANs &gt; New</b> page of the WLC GUI:
<br><br>
<ol>
<li>Select the type of WLAN you are creating from the <b>Type</b> drop-down list box; by default, this value is configured to <b>WLAN</b>.</li>
<li>Enter a 32-character or less profile name in the <b>Profile Name</b> field.</li>
<li>Enter a 32-character or less Service Set Identifier (SSID) in the <b>SSID</b> field.</li>
<li>Choose a WLAN ID from the <b>ID</b> drop-down list box; by default, this value is configured to <b>WLAN</b>.</li>
</ol>

There are three types of WLANs you can create by using the WLC GUI:
<ol>
<li>A normal WLAN, which is the WLAN to which wireless clients inside your company's walls will connect</li>
<li>A Guest LAN, which is the WLAN to which guest wireless clients inside your company's walls will connect</li>
<li>A Remote LAN, which is the WLAN configuration for wired ports on the WLC</li>
</ol>

After you configure the type of WLAN, you should configure a profile name for the WLAN in the <b>Profile Name</b> field. After you configure the <b>Profile Name</b> field, you should configure a value of up to 32 characters in the <b>SSID</b> field. The SSID is the WLAN network name that will be broadcast to wireless clients. In general, an SSID is the name for the collection of wireless clients that are all operating with the same Institute of Electrical and Electronics Engineers (IEEE) 802.11 configuration.

Finally, you should configure the WLAN ID on which the WLAN will operate. By default, the <b>ID</b> drop-down list box on the <b>WLANs &gt; New</b> page will be configured to a value of 1. You can choose to configure a WLAN on any WLAN ID in the range from 1 through 512. Although Cisco controllers support a maximum of 512 WLANs, only 16 can be actively configured.

You cannot configure an SSID by using a reserved keyword. For example, you cannot configure the <b>SSID</b> field to a value <b>s</b> because <b>s</b> is a keyword that is short for <b>shutdown</b>.
  `,
  reference: [
    {
      title: "CCNA 200-301 Official Cert Guide",
      description: "Volume 1, Chapter 29: Building a Wireless LAN, Configuring a WLAN"
    },
    {
      title: "Cisco: WLANs: Creating and Removing WLANs (GUI)",
      link: "https://www.cisco.com/c/en/us/td/docs/wireless/controller/7-2/configuration/guide/cg/cg_wlans.html"
    }
  ]
},

{
  id: 79,
  category: "IP Connectivity",
  questionType: "Single-select",
  question: `
<img src="/images/q079-topology.png" alt="network diagram" style="max-width: 100%; height: auto;">
<br>
What command would you issue on RouterA so that traffic can be routed to RouterC? (Select the best answer.)
`,
  options: [
    "ipv6 route 2001:DB8:1::/64 2001:DB8:2::2",
    "ipv6 route 2001:DB8:1::/64 2001:DB8:1::2",
    "ipv6 route 2001:DB8:2::/64 2001:DB8:1::2",
    "ipv6 route 2001:DB8:2::/64 2001:DB8:2::2"
  ],
  correctAnswer: 2,
  explanation: `
<b>Explanation:</b><br>
Of the choices provided, you would issue the <b>ipv6 route 2001:DB8:2::/64 2001:DB8:1::2</b> command on RouterA so that traffic can be routed to RouterC. The basic syntax of the <b>ipv6 route</b> command is <b>ipv6 route prefix/length {interface | next-hop} [administrative-distance]</b>, where <i>prefix/length</i> is the destination network, <i>interface</i> is the output interface on the local router, <i>next-hop</i> is the next-hop Internet Protocol version 6 (IPv6) address, and <i>administrative-distance</i> is an optional administrative distance (AD).<br><br>
You should not issue the <b>ipv6 route 2001:DB8:2::/64 2001:DB8:2::2</b> command, because it incorrectly specifies the next-hop IPv6 address. The next-hop IPv6 address should be the inbound interface on RouterB, 2001:DB8:1::2.<br><br>
You should not issue the <b>ipv6 route 2001:DB8:1::/64 2001:DB8:1::2</b> command, because it incorrectly specifies the destination network. The destination network should be the network between RouterB and RouterC, 2001:DB8:2::/64.<br><br>
You should not issue the <b>ipv6 route 2001:DB8:1::/64 2001:DB8:2::2</b> command, because it incorrectly specifies both the destination network and the next-hop IPv6 address.
  `,
  reference: [
    {
      title: "Boson CCNA Curriculum 200-301",
      description: "Module 6: IP Routing, IPv6 Static Routes"
    },
    {
      title: "Cisco: Cisco IOS IPv6 Command Reference: IPv6 Commands: ipv6 route",
      link: "https://www.cisco.com/c/en/us/td/docs/ios-xml/ios/ipv6/command/ipv6-cr-book/ip6-c3.html#wp1234567890"
    },
    {
      title: "Cisco: IPv6 Routing: Static Routing: Information About IPv6 Routing: Static Routing",
      link: "https://www.cisco.com/c/en/us/td/docs/ios-xml/ios/ipv6/configuration/xe-3s/ip6-xe-3s-book/ip6-static.html"
    }
  ]
},

{
  id: 70,
  category: "IP Connectivity",
  questionType: "Multi-select",
  question: `Which of the following are used in the calculation of EIGRP metric weights? (Select 2 choices.)`,
  options: [
    "the sum of the segment delays",
    "the average segment delay",
    "the highest segment bandwidth",
    "the lowest segment bandwidth"
  ],
  correctAnswer: [0, 3],
  explanation: `
<b>Explanation:</b><br>
Enhanced Interior Gateway Routing Protocol (EIGRP) uses the lowest segment bandwidth and the sum of the segment delays in the calculation of metric weights, or K values. The <b>metric weights</b> command adjusts K values, which EIGRP uses to calculate the best path to a destination network. By default, EIGRP uses the K values that are related to bandwidth and delay, and the other values are set to 0. Modifying K values can cause undesired effects on the network, such as allowing low-bandwidth connections to be used for load balancing. Therefore, Cisco recommends leaving the K values at their default settings. The K values must match between two routers for a neighbor relationship to be established between the routers.
  `,
  reference: [
    {
      title: "Cisco: EIGRP Wide Metrics: EIGRP Metric Weights",
      link: "https://www.cisco.com/c/en/us/support/docs/ip/enhanced-interior-gateway-routing-protocol-eigrp/13623-14.html"
    }
  ]
},

{
  id: 616,
  category: "Network Fundamentals",
  questionType: "Multi-select",
  question: `Which of the following Application layer protocols use UDP for unsynchronized, connectionless data transfer? (Select 2 choices.)`,
  options: [
    "FTP",
    "HTTP",
    "SMTP",
    "TFTP",
    "SNMP"
  ],
  correctAnswer: [3, 4],
  explanation: `
<b>Explanation:</b><br>
Simple Network Management Protocol (SNMP) and Trivial File Transfer Protocol (TFTP) use User Datagram Protocol (UDP) for unsynchronized, connectionless data transfer. UDP is a Transport layer protocol that does not use sequence numbers or establish synchronized connections. Because of its connectionless nature, transmitted datagrams can appear out of sequence or can be dropped without notice; thus it is the responsibility of the Application layer protocol to reorder packets or request the transmission of lost datagrams. SNMP is used to monitor and manage network devices. TFTP is used to transfer files over a network. Other common Application layer protocols that use UDP include Dynamic Host Configuration Protocol (DHCP), which is used to assign Internet Protocol (IP) addressing information to clients, Network Time Protocol (NTP), which is used to coordinate time on a network, and Remote Authentication Dial-In User Service (RADIUS), which is used to authenticate users.<br><br>
Hypertext Transfer Protocol (HTTP) and File Transfer Protocol (FTP) use Transmission Control Protocol (TCP) for reliable, connection-oriented data transfer. TCP is a Transport layer protocol that uses sequencing and error-checking to ensure that transmitted data can be easily reordered if packets arrive out of sequence and can be retransmitted if any packets are lost. Because TCP handles data sequencing and the retransmission of lost data, the Application layer protocols that rely on TCP do not need to handle those tasks and can rely on receiving reliable, ordered data. FTP, which is used to transfer files over a network, uses TCP ports 20 and 21. Other common TCP protocols are HTTP, which is used to transfer webpages over the Internet, Simple Mail Transfer Protocol (SMTP), which is used to send email messages, Post Office Protocol 3 (POP3), which is used to retrieve email messages, and Telnet, which is used to manage network devices.
  `,
  reference: [
    {
      title: "Boson CCNA Curriculum 200-301",
      description: "Module 2: Network Addressing and Transport, UDP"
    },
    {
      title: "CCNA 200-301 Official Cert Guide",
      description: "Volume 2, Chapter 1: Introduction to TCP/IP Transport and Applications, Connection Establishment and Termination"
    },
    {
      title: "IANA: Service Name and Transport Protocol Port Number Registry",
      link: "https://www.iana.org/assignments/service-names-port-numbers/service-names-port-numbers.xhtml"
    }
  ]
},

{
  id: 404,
  category: "Security Fundamentals",
  questionType: "Matching",
  question: `
<p>Match each Cisco IOS command on the left with its correct description on the right.</p>
  `,
  matchingPairs: {
    terms: [
      { id: "enable_secret", text: "enable secret" },
      { id: "enable_secret_5", text: "enable secret 5" },
      { id: "enable_password", text: "enable password" },
      { id: "password_7", text: "password 7" },
      { id: "service_password_encryption", text: "service password-encryption" }
    ],
    definitions: [
      { id: "def1", text: "configures and encrypts a clear-text password for gaining access to enable mode" },
      { id: "def2", text: "configures a previously encrypted password for gaining access to enable mode" },
      { id: "def3", text: "configures a clear-text password for gaining access to enable mode" },
      { id: "def4", text: "configures an encrypted VTY login password" },
      { id: "def5", text: "enables global password encryption" }
    ]
  },
  correctAnswer: {
    enable_secret: "def1",
    enable_secret_5: "def2",
    enable_password: "def3",
    password_7: "def4",
    service_password_encryption: "def5"
  },
   explanation: `
The <b>enable secret password</b> command configures and encrypts a clear-text password for gaining access to enable mode. The <b>enable secret 5 hash</b> command, on the other hand, configures a previously Message Digest 5 (MD5)-encrypted password for gaining access to enable mode. In some Cisco IOS versions prior to 15.3(3), the <b>enable secret</b> command by default stores an encrypted password in the device’s configuration file by using a Secure Hash Algorithm (SHA) 256-bit hash. As of Cisco IOS 15.3(3), Type 4 passwords have been deprecated because of a security flaw in their implementation.<br><br>
The syntax for the <b>enable secret</b> command is <b>enable secret [level level] {password | [encryption-type] encrypted-password}</b>, where <i>password</i> is a string of characters that represents the clear-text password. Instead of supplying a clear-text password, you can specify an <i>encryption-type</i> value of 0, 4, or 5 and an <i>encrypted-password</i> value of either a clear-text password, a SHA-256 hash, or an MD5 hash, respectively. Supplying a hash value requires that you have previously encrypted the value by using a hashing algorithm in the same fashion that IOS uses the algorithm. This command configures a password that is required in order to place the device into enable mode, which is also known as privileged EXEC mode. The device must, at a minimum, be placed into enable mode for the user to be able to display the running configuration.<br><br>
The <b>enable password password</b> command configures a clear-text enable password on a Cisco device. If both the <b>enable password</b> command and the <b>enable secret</b> command are in the running configuration of a Cisco device, the device will ignore the password associated with the <b>enable password</b> command.<br><br>
The <b>service password-encryption</b> command enables global password encryption on a Cisco device. When <b>service password-encryption</b> is issued, any passwords that are currently configured as clear-text in the running configuration will be encrypted. In addition, any future passwords created in the configuration will be encrypted. However, even if all passwords on a device have been encrypted because the <b>service password-encryption</b> command has been configured, as in this scenario, the router will still prefer the <b>enable secret</b> password over the <b>enable password</b> password.<br><br>
The <b>password 7 hash</b> command configures an encrypted virtual terminal (VTY) login password when the command is issued in VTY line configuration mode. For example, you can configure Telnet login information on a Cisco device by issuing the <b>line vty first last</b> command to place the device in VTY line configuration mode. Next, you can issue the <b>password password</b> command to configure a Telnet password and the <b>login</b> command to enable password checks if the command has been disabled on the router. The <b>login</b> command is typically configured by default. Issuing the Telnet password when you are connecting to a device places the device into user EXEC mode, where it is not typically possible to display the running configuration.
  `,
  reference: [
    {
      title: "Boson CCNA Curriculum 200-301",
      description: "Module 8: Security Fundamentals, Passwords"
    },
    {
      title: "CCNA 200-301 Official Cert Guide",
      description: "Volume 2, Chapter 5: Securing Network Devices, Securing IOS Passwords"
    },
    {
      title: "Cisco: Configuring Security with Passwords, Privileges, and Logins: Cisco IOS CLI Modes",
      link: "https://www.cisco.com/c/en/us/td/docs/ios-xml/ios/sec_usr_cfg/configuration/15-s/sec-usr-cfg-15-s-book/sec-usr-cfg-line-modes.html"
    },
    {
      title: "Cisco: Configuring Security with Passwords, Privileges, and Logins: Cisco IOS Password Encryption Levels",
      link: "https://www.cisco.com/c/en/us/td/docs/ios-xml/ios/sec_usr_cfg/configuration/15-s/sec-usr-cfg-15-s-book/sec-usr-cfg-encryption.html"
    }
  ]
},

{
  id: 444,
  category: "Security Fundamentals",
  questionType: "Single-select",
  question: `Which of the following best describes authorization? (Select the best answer.)`,
  options: [
    "the process of verifying the level of access configured for a user",
    "the process of recording the use of resources",
    "the process of verifying a user's identity",
    "the process of establishing a user's accounts upon hire"
  ],
  correctAnswer: 0,
  explanation: `
Authorization is the process of verifying the level of access configured for a user. The following list defines the three phases of the Authentication, Authorization, and Accounting (AAA) process:<br><br>
<ul>
  <li><b>Authentication</b> – the process of verifying a user's identity</li>
  <li><b>Authorization</b> – the process of verifying the level of access configured for a user</li>
  <li><b>Accounting</b> – the process of recording the use of resources</li>
</ul>
AAA systems manage user activity. AAA systems are typically more sophisticated than simple password authentication systems, such as a local password database. Two common AAA systems include Remote Authentication Dial-In User Server (RADIUS) and Terminal Access Controller Access-Control System Plus (TACACS+).<br><br>
RADIUS is a standard AAA protocol created by the Internet Engineering Task Force (IETF). Compared to TACACS+, RADIUS has several limitations. For example, RADIUS encrypts only the password in Access-Request packets; it does not encrypt the entire contents of the packet like TACACS+ does.<br><br>
TACACS+ is a Cisco-proprietary protocol used during AAA operations. TACACS+ provides more granular and flexible control over user access privileges. For example, the AAA operations are separated by TACACS+, whereas RADIUS combines the authentication and authorization services into a single function. Because TACACS+ separates these functions, administrators have more control over access to configuration commands. In addition, TACACS+ encrypts the entire contents of packets, thus providing additional security.
  `,
  reference: [
    {
      title: "Boson CCNA Curriculum 200-301",
      description: "Module 8: Security Fundamentals, AAA"
    },
    {
      title: "CCNA 200-301 Official Cert Guide",
      description: "Volume 2, Chapter 4: Security Architectures, Controlling and Monitoring User Access"
    }
  ]
},

{
  id: 44,
  category: "IP Services",
  questionType: "Matching",
  question: `
<p>Match each Cisco command with the correct step number for enabling SSH on VTY lines, as described in the configuration process.</p>
  `,
  matchingPairs: {
    terms: [
      { id: "hostname", text: "hostname" },
      { id: "ip_domain_name", text: "ip domain-name" },
      { id: "crypto_key_generate_rsa", text: "crypto key generate rsa" },
      { id: "transport_input_ssh", text: "transport input ssh" }
    ],
    definitions: [
      { id: "step1", text: "Step 1" },
      { id: "step2", text: "Step 2" },
      { id: "step3", text: "Step 3" },
      { id: "step4", text: "Step 4" }
    ]
  },
  correctAnswer: {
    hostname: "step1",
    ip_domain_name: "step2",
    crypto_key_generate_rsa: "step3",
    transport_input_ssh: "step4"
  },
  explanation: `
To enable Secure Shell (SSH) for virtual terminal (VTY) lines on a Cisco router, you should complete the following steps:<br><br>
1. Configure the router with a host name other than Router by issuing the <b>hostname</b> command.<br>
2. Configure the router with a domain name by issuing the <b>ip domain-name</b> command.<br>
3. Generate an RSA key pair for the router by issuing the <b>crypto key generate rsa</b> command.<br>
4. Configure the VTY lines to use SSH by issuing the <b>transport input ssh</b> command from line configuration mode.<br><br>
SSH is often used as a secure replacement for Telnet to manage network devices. In order for SSH to be enabled on a Cisco device, the device must be running a K9 IOS image, which provides cryptographic functionality.<br><br>
It is not necessary to issue the <b>ip ssh version 2</b> command. By default, Cisco devices support both SSH version 1 (SSHv1) and SSH version 2 (SSHv2) connections. Issuing the <b>ip ssh version 2</b> command ensures that the device will accept only SSHv2 connections.
  `,
  reference: [
    {
      title: "Boson CCNA Curriculum 200-301",
      description: "Module 7: IP Services, SSH Configuration"
    },
    {
      title: "Cisco: Configure SSH on Routers and Switches: Set Up an IOS Router or Switch as SSH Client",
      link: "https://www.cisco.com/c/en/us/support/docs/security-vpn/secure-shell-ssh/4145-ssh.html"
    }
  ]
},

{
  id: 13,
  category: "IP Connectivity",
  questionType: "Multi-select",
  question: `<img src="/images/q013-topology.png" alt="network diagram" style="max-width: 100%; height: auto; margin-bottom: 16px;">

You administer the network shown in the diagram. You issue the <b>show ip route</b> command on RouterD and receive the following output:
<pre>
Gateway of last resort is not set

192.168.0.0/24 is variably subnetted, 9 subnets, 2 masks
D    192.168.0.128/28 [90/2195456] via 192.168.0.37, 00:03:31, Serial0/1
D    192.168.0.160/28 [90/2681856] via 192.168.0.18, 00:03:31, Serial0/0
C    192.168.0.48/30 is directly connected, Serial0/2
C    192.168.0.16/30 is directly connected, Serial0/0
C    192.168.0.36/30 is directly connected, Serial0/1
C    192.168.0.144/28 is directly connected, FastEthernet0/0
D    192.168.0.4/30 [90/2195456] via 192.168.0.18, 00:03:31, Serial0/0
D    192.168.0.192/28 [90/2195456] via 192.168.0.18, 00:03:31, Serial0/0
D    192.168.0.8/30 [90/2681856] via 192.168.0.37, 00:03:31, Serial0/1
</pre>
Which interface and routing protocol on RouterD will be used to forward a packet from the 192.168.0.144/28 network to the 192.168.0.128/28 network? (Select 2 choices.)
`,
  options: [
    "Serial 0/0",
    "Serial 0/1",
    "RIP",
    "OSPF",
    "directly connected",
    "EIGRP",
    "Serial 0/2"
  ],
  correctAnswer: [1, 5],
  explanation: `
The Serial 0/1 interface and Enhanced Interior Gateway Routing Protocol (EIGRP) will be used on RouterD to send a packet from the 192.168.0.144/28 network to the 192.168.0.128/28 network. The letter D at the beginning of the routing entries indicates that EIGRP was used to determine the paths to non-directly connected networks. The show ip route command also displays the administrative distance (AD) and metric, the Internet Protocol (IP) address of the next hop, and the outgoing interface for each route.

When a packet is sent to a router, the router checks the routing table to see whether the next-hop address for the destination network is known. Examination of the show ip route output shows that nine different routes have been added to RouterD's routing table. In this scenario, a packet sent from the 192.168.0.144/28 network to the 192.168.0.128/28 network will follow the path from RouterD to RouterC and then on to RouterA, where it will be forwarded to the 192.168.0.128/28 network. Although the topology pictured above does not indicate the location of the Serial 0/1 interface on RouterD, the displayed routing table indicates that the Serial 0/1 interface has an address of 192.168.0.37 with a 30-bit subnet mask. This particular IP address belongs to the 192.168.0.36/30 subnet, which connects RouterD to RouterC.

When the show ip route command is issued, the initial output includes a key that can be used to determine the routing protocols used to learn routes to other networks. The display key looks like this:
<pre>
RouterA#show ip route
Codes:   C - connected, S - static, I - IGRP, R - RIP, M - mobile, B - BGP
         D - EIGRP, EX - EIGRP external, O - OSPF, IA - OSPF inter area
         N1 - OSPF NSSA external type 1, N2 - OSPF NSSA external type 2
         E1 - OSPF external type 1, E2 - OSPF external type 2, E - EGP
         i - IS-IS, L1 - IS-IS level-1, L2 - IS-IS level-2, ia - IS-IS inter area
         * - candidate default, U - per-user static route, o - ODR
         P - periodic downloaded static route
<output omitted>
</pre>
The letter D is used to specify a route learned through the use of EIGRP. Other codes displayed in this key include the letter O for Open Shortest Path First (OSPF) and the letter R for Routing Information Protocol (RIP). Directly connected routes are denoted in the routing table by the letter C. The routing table above indicates that neither OSPF nor RIP has been configured for this topology.

The Serial 0/0 interface would not be used to send a packet from the 192.168.0.144/28 network to the 192.168.0.128/28 network. By examining the output from the show ip route command, you can see that the Serial 0/0 interface has an IP address of 192.168.0.18. This address is part of the 192.168.0.16/30 subnet, which is the network used to connect RouterD to RouterB. However, RouterD's routing table displays a route to the 192.168.0.128/28 network via the Serial 0/1 interface. The Serial 0/1 interface has an IP address of 192.168.0.37, which belongs to the 192.168.0.36/30 subnet and is used to connect RouterD to RouterC.

The Serial 0/2 interface would not be used to send a packet from the 192.168.0.144/28 network to the 192.168.0.128/28 network. By examining the output from the show ip route command, you can see that the Serial 0/2 interface is used only to connect to the directly connected 192.168.0.48/30 network.

Reference:
Boson CCNA Curriculum 200-301, Module 6: IP Routing, Understanding AD

Boson CCNA Curriculum 200-301, Module 6: IP Routing, Dynamic Routes

<a href="https://learningnetwork.cisco.com/s/article/ip-addressing-and-subnetting-for-new-users">Cisco: IP Addressing and Subnetting for New Users</a>
  `,
  reference: [
    {
      title: "Boson CCNA Curriculum 200-301",
      description: "Module 6: IP Routing, Understanding AD"
    },
    {
      title: "Boson CCNA Curriculum 200-301",
      description: "Module 6: IP Routing, Dynamic Routes"
    },
    {
      title: "Cisco: IP Addressing and Subnetting for New Users",
      link: "https://learningnetwork.cisco.com/s/article/ip-addressing-and-subnetting-for-new-users"
    }
  ]
},

{
  id: 22,
  category: "IP Connectivity",
  questionType: "Single-select",
  question: `
Select the correct order of OSPF neighbor state transitions:<br>
`,
  options: [
    "Down, Init, 2-Way, Exstart, Exchange, Loading, Full",
    "Init, Down, 2-Way, Exchange, Exstart, Loading, Full",
    "Down, 2-Way, Init, Exchange, Exstart, Loading, Full",
    "Down, Init, Exstart, 2-Way, Exchange, Loading, Full",
    "Down, Exchange, Init, 2-Way, Exstart, Loading, Full"
  ],
  correctAnswer: 0,
  explanation: `
When an Open Shortest Path First (OSPF) neighbor router is powered on, it transitions through the following neighbor states:<br>
<ul>
  <li>Down</li>
  <li>Init</li>
  <li>2-Way</li>
  <li>Exstart</li>
  <li>Exchange</li>
  <li>Loading</li>
  <li>Full</li>
</ul>
An OSPF neighbor router begins in the Down state. A neighbor in the Down state has not yet sent a Hello packet.<br><br>
When a Hello packet is received from the neighbor router but the Hello packet does not contain the receiving router's ID, the neighbor router is in the Init state. The receiving router replies to the neighbor router with a Hello packet that contains the neighbor router's ID as an acknowledgment that the receiving router received the neighbor's Hello packet. If a router is stuck in the Init state, it has sent Hello packets but has not received any from the neighbor router.<br><br>
The neighbor router replies with a Hello packet that contains the receiving router's ID. When this occurs, the neighbor router is in the 2-Way state. At the end of the 2-Way state, the designated router (DR) and backup designated router (BDR) are elected for broadcast and nonbroadcast multiaccess (NBMA) networks. On broadcast and NBMA networks, neighbor routers will proceed to the Full state only with the DR and BDR; non-DR/BDR routers will remain in the 2-Way state with all other neighbor routers. Routers that remain in the 2-Way state will contain <b>2WAY/DROTHER</b> in the output of the <b>show ip ospf neighbor</b> command. If all routers on a segment remain in the 2-Way state, you should verify whether all routers on the segment are set to a priority of 0, which prevents any of them from becoming the DR or BDR.<br><br>
After the DR and BDR are elected, neighbor routers form master-slave relationships in order to establish the method for exchanging link-state information. Routers in this state are in the Exstart state. If a router is stuck in the Exstart state, you should verify whether there is a problem with mismatched maximum transmission unit (MTU) settings or duplicate router IDs.<br><br>
Neighbor routers then exchange database descriptor (DBD) packets. These DBD packets contain link-state advertisement (LSA) headers that describe the contents of the link-state database (LSDB). Routers in this state are in the Exchange state. If a router is stuck in the Exchange state, you should verify whether there is a problem with mismatched MTU settings or duplicate router IDs.<br><br>
Routers then send link-state request (LSR) packets to request the contents of the neighbor router's OSPF database. The neighbor router replies with link-state update (LSU) packets that contain the routing database information. Routers in this state are in the Loading state. If a router is stuck in the Loading state, you should verify whether there is a problem with mismatched MTU settings or corrupted LSR packets.<br><br>
After the OSPF databases of neighbor routers are fully synchronized, the routers transition to the Full state, which is the normal OSPF router state for DRs and BDRs. A router will periodically send Hello packets to its neighbors to indicate that it is still functional. If a router does not receive a Hello packet from a neighbor within the dead timer interval, the neighbor router will transition back to the Down state.
  `,
  reference: [
    {
      title: "Boson CCNA Curriculum 200-301",
      description: "Module 6: IP Routing, Understanding OSPF Adjacencies"
    },
    {
      title: "Cisco: OSPF Neighbor States",
      link: "https://www.cisco.com/c/en/us/support/docs/ip/open-shortest-path-first-ospf/13682-10.html"
    }
  ]
},

{
  id: 644,
  category: "Network Fundamentals",
  questionType: "Single-select",
  question: `Which of the following address types is used by IPv6 routing protocols to form neighbor adjacencies? (Select the best answer.)`,
  options: [
    "link-local address",
    "global unicast address",
    "multicast address",
    "anycast address",
    "site-local unicast address"
  ],
  correctAnswer: 0,
  explanation: `
A link-local address is an address type that is used by Internet Protocol version 6 (IPv6) routing protocols to form neighbor adjacencies. IPv6 link-local addresses are unicast addresses used for communication over a single link. Routers do not forward traffic sent to a link-local address; the traffic stays on the local link. These addresses always begin with FE8, FE9, FEA, or FEB.<br><br>
IPv6 routing protocols do not use a global unicast address to form a neighbor adjacency. A global unicast address, which is also referred to as an aggregatable global address, is designed to minimize the size of Internet routing tables. A global unicast address contains three distinct parts:<br>
<ul>
  <li>The Global Routing Prefix – identifies the public portion of the address, as assigned by a service provider</li>
  <li>The Site-Level Aggregator (SLA) – identifies the site or group of sites associated with the address</li>
  <li>The Interface ID – identifies the address assigned to the interface of the network device associated with the address</li>
</ul>
The Global Routing Prefix is a 48-bit field that is defined by the Internet service provider (ISP). The SLA is a 16-bit field that identifies a site and is analogous to a subnet in IP version 4 (IPv4). The Interface ID is a 64-bit field that must be globally unique; therefore, it typically contains the MAC address of the originating device in extended unique identifier (EUI)-64 format. Because there is an inherent hierarchy in the aggregatable global address scheme, these addresses lend themselves to simple consolidation, which greatly reduces the complexity of Internet routing tables.<br><br>
IPv6 routing protocols do not use a multicast address to form neighbor adjacencies. Some IPv4 routing protocols, such as Open Shortest Path First version 2 (OSPFv2), use multicast addresses to form neighbor adjacencies. A particular multicast address is used to send packets to multiple devices that are configured with that multicast address, such as the All OSPF Routers multicast address. The following table shows common IPv4 multicast addresses and their respective IPv6 multicast addresses:<br>
<table border="1" cellspacing="0" cellpadding="5" style="border-collapse: collapse;">
<tr><th>Multicast Address</th><th>IPv4</th><th>IPv6</th></tr>
<tr><td>All Hosts</td><td>224.0.0.1</td><td>FF02:0:0:0:0:0:0:1</td></tr>
<tr><td>All Routers</td><td>224.0.0.2</td><td>FF02:0:0:0:0:0:0:2</td></tr>
<tr><td>All OSPF Routers</td><td>224.0.0.5</td><td>FF02:0:0:0:0:0:0:5</td></tr>
<tr><td>All OSPF DRs</td><td>224.0.0.6</td><td>FF02:0:0:0:0:0:0:6</td></tr>
<tr><td>All RIP Routers (except RIPv1)</td><td>224.0.0.9</td><td>FF02:0:0:0:0:0:0:9</td></tr>
<tr><td>All EIGRP Routers</td><td>224.0.0.10</td><td>FF02:0:0:0:0:0:0:A</td></tr>
</table>
<br>
IPv6 routing protocols do not use an anycast address to form neighbor adjacencies. Anycast addresses are used to send packets to the closest device that is configured with the anycast address. Therefore, an anycast address can be described as a <i>one-to-nearest</i> address. The closest device is selected by the routing protocol that is used by the router. Because anycast addresses use the same address for multiple devices in a group, anycast addresses are ideal for load balancing.<br><br>
IPv6 routing protocols do not use a site-local unicast address to form neighbor adjacencies. Site-local unicast addresses were once used for private addressing in a fashion similar to how Request for Comments (RFC) 1918 addresses are used on IPv4 networks. However, site-local addresses were deprecated by RFC 3879. It is best practice to follow the recommendations of RFC 4193 for private IPv6 addressing, which is also referred to as unique local addressing (ULA).
  `,
  reference: [
    {
      title: "Boson CCNA Curriculum 200-301",
      description: "Module 2: Network Addressing and Transport, Understanding IPv6 Address Types"
    },
    {
      title: "CCNA 200-301 Official Cert Guide",
      description: "Volume 1, Chapter 24: Implementing IPv6 Addressing on Routers, Link-Local Addresses"
    },
    {
      title: "Cisco: IPv6 Addressing and Basic Connectivity Configuration Guide, Cisco IOS Release 15M&T",
      link: "https://www.cisco.com/c/en/us/td/docs/ios-xml/ios/ipaddr_basic/configuration/xe-3s/ip6-xe-3s-book/ip6-addr-basic.html"
    },
    {
      title: "RIPE: IPv6 Address Types (PDF)",
      link: "https://www.ripe.net/publications/docs/ripe-690#IPv6AddressTypes"
    }
  ]
},

{
  id: 428,
  category: "Security Fundamentals",
  questionType: "Single-select",
  question: `
You issue the <b>show vlan brief</b> command on Switch1 and receive the following partial output:
<pre>
Switch1#show vlan brief
VLAN Name             Status    Ports
---- ---------------- --------- --------------------
11   VLAN0011         active    Fa0/1, Fa0/2, Fa0/3, Fa0/4
                                 Fa0/5, Fa0/6, Fa0/7, Fa0/8
                                 Fa0/9, Fa0/10
12   VLAN0012         active    Fa0/11, Fa0/12, Fa0/13, Fa0/14
                                 Fa0/15, Fa0/16, Fa0/17, Fa0/18
                                 Fa0/19
14   VLAN0014         active    Fa0/20, Fa0/21, Fa0/22, Fa0/23
                                 Fa0/24
</pre>
You issue the following commands on Switch1:
<pre>
Switch1#configure terminal
Switch1(config)#ip arp inspection vlan 11-12,14
Switch1(config)#interface range gigabitethernet 0/1 - 2
Switch1(config-if-range)#switchport access vlan 11
Switch1(config-if-range)#switchport mode access
Switch1(config-if-range)#ip arp inspection
</pre>
Which of the following statements is true? (Select the best answer.)
`,
  options: [
    "All ports on the switch are trusted ports.",
    "Only GigabitEthernet 0/1 and GigabitEthernet 0/2 are trusted ports.",
    "Only GigabitEthernet 0/1 and GigabitEthernet 0/2 ports are untrusted ports.",
    "Only VLAN 11 ports are trusted ports.",
    "All ports on the switch are untrusted ports."
  ],
  correctAnswer: 4,
  explanation: `
All the ports on Switch1 in this scenario are untrusted ports because the <b>ip arp inspection trust</b> command has not been issued anywhere in the scenario. By default, a port is configured as an untrusted port when Dynamic ARP Inspection (DAI) is enabled on that port. Therefore, configuring virtual local area networks (VLANs) 11, 12, and 14 with DAI by issuing the <b>ip arp inspection vlan 11-12,14</b> command ensures that any port operating in those VLANs is automatically an untrusted port.<br><br>
When DAI is configured for an entire VLAN, you can override the default configuration for a given port by issuing the <b>ip arp inspection trust</b> command in interface configuration mode. In this scenario, the <b>switchport access vlan 11</b> command configures both GigabitEthernet interfaces, when those interfaces are operating in access mode, to reside on VLAN 11. The <b>switchport mode access</b> command enables access mode on each interface. However, the <b>ip arp inspection command</b>, not the <b>ip arp inspection trust</b> command, has been issued on both the GigabitEthernet 0/1 interface and the GigabitEthernet 0/2 interface in this scenario. Therefore, the default configuration has not changed.<br><br>
DAI can be enabled on a single VLAN or on multiple VLANs. To enable DAI, you should use the <b>ip arp inspection vlan</b> global configuration command. The syntax of the <b>ip arp inspection vlan</b> command is <b>ip arp inspection vlan {vlan-ID | vlan-range}</b>. A range of VLANs can be entered by using a comma-separated list and/or a dash-separated pair of VLAN numbers indicating the range of VLANs to include. For example, each of the following commands enables DAI on VLANs 2 through 4: <b>ip arp inspection vlan 2,3,4</b> and <b>ip arp inspection vlan 2-4</b>. Configuring DAI on each VLAN ensures that traffic sent from each host is inspected. In addition, each port is by default an untrusted port.
  `,
  reference: [
    {
      title: "Boson CCNA Curriculum 200-301",
      description: "Module 8: Security Fundamentals, DAI"
    },
    {
      title: "CCNA 200-301 Official Cert Guide",
      description: "Volume 2, Chapter 8: DHCP Snooping and ARP Inspection, Dynamic ARP Inspection Configuration"
    }
  ]
},

{
  id: 476,
  category: "Automation and Programmability",
  questionType: "Single-select",
  question: `Which of the following is centralized on an SDN network? (Select the best answer.)`,
  options: [
    "the management plane",
    "the application plane",
    "the data plane",
    "the control plane"
  ],
  correctAnswer: 3,
  explanation: `
The control plane is centralized on a Software-Defined Networking (SDN) network, which is a type of controller-based network. The control plane is responsible for network decision-making in both a controller-based network and a traditional network. However, the control plane in a traditional network is typically distributed among many devices. The Open Shortest Path First (OSPF) routing protocol running on a series of routers on a traditional network is one example of a traditional control plane. OSPF makes routing decisions for packets that require routing among Layer 3 devices. In a controller-based network, the decision-making logic is either moved to a central controller or monitored by a central controller.<br><br>
The data plane is not centralized on an SDN network. Layer 2 switches, Layer 3 switches, and end devices typically operate in the data plane. In a controller-based network, the controller communicates with the data plane by using a southbound Application Programming Interface (API), such as NETCONF, OpenFlow, OpFlex, or OnePK. Network tasks that are typically performed in the data plane include the encapsulation and decapsulation of packets, the adding or removing of trunk headers, the matching of Media Access Control (MAC) addresses to a MAC address table, the matching of Internet Protocol (IP) addresses to paths in a routing table, the encryption of data, Network Address Translation (NAT), and filtering by using either access control lists (ACLs) or port security.<br><br>
The management plane is not centralized on an SDN network. Network management protocols, such as Telnet, Secure Shell (SSH), Simple Network Management Protocol (SNMP), and Syslog typically operate in the management plane on both a traditional network and a controller-based network. All of these protocols enable an administrator to connect to and manage a network device.<br><br>
The application plane is not centralized on an SDN network. The application plane is the component of a controller-based network in which applications that are written to allow interaction with the centralized controller reside. These applications are typically designed to improve network management efficiency through network automation. A controller communicates with applications in the application plane by using a northbound API such as Representational State Transfer (REST) or Open Services Gateway initiative (OSGi).
  `,
  reference: [
    {
      title: "Boson CCNA Curriculum 200-301",
      description: "Module 9: Automation and Programming, Device Management on Controller-Based Networks"
    },
    {
      title: "CCNA 200-301 Official Cert Guide",
      description: "Volume 2, Chapter 16: Introduction to Controller-Based Networking, The Data, Control, and Management Planes"
    },
    {
      title: "CCNA 200-301 Official Cert Guide",
      description: "Volume 2, Chapter 16: Introduction to Controller-Based Networking, Controllers and Software-Defined Architecture"
    }
  ]
},

{
  id: 680,
  category: "Network Access",
  questionType: "Single-select",
  question: `
Refer to the exhibit.<br><br>
<pre>
2008 May 5 13:29:12 %SPANTREE-2-RX_PORTFAST:Received BPDU on PortFast enable port. Disabling 1/4
2008 May 5 13:29:12 %PAGP-5-PORTFROMSTP:Port 1/4 left bridge port 1/4
</pre>
You are a network administrator, and you receive the console message shown above. Port 1/4 has entered the error-disabled state and must be manually re-enabled.<br><br>
Which of the following features most likely caused the switch port to enter the error-disabled state and send the console message displayed above? (Select the best answer.)
`,
  options: [
    "root guard",
    "loop guard",
    "PortFast",
    "BPDU guard"
  ],
  correctAnswer: 3,
  explanation: `
The BPDU guard feature puts a switch port into the error-disabled state and generates a console message when a bridge protocol data unit (BPDU) is received on a switch port that has been enabled with the PortFast feature and the BPDU guard feature. PortFast is a feature that should be used only on switch ports that are connected to end devices, such as user workstations or print devices. Because PortFast immediately transitions a port to the Spanning Tree Protocol (STP) forwarding state, skipping over the listening and learning states, steps should be taken to ensure that a switch that is inadvertently or intentionally connected to the port cannot influence the STP topology or cause switching loops.<br><br>
The BPDU guard feature should be enabled on ports that have been enabled with PortFast so that BPDU guard can prevent a rogue switch from modifying the STP topology. When such a port receives a BPDU, BPDU guard immediately puts that port into the error-disabled state and shuts down the port. The port must then be manually re-enabled, or it can be recovered automatically through the errdisable timeout function. BPDU guard should not be enabled on ports that are connected to other switches. You can enable BPDU guard for the entire switch by issuing the <b>spanning-tree portfast bpduguard default</b> command in global configuration mode, or you can enable BPDU guard on a specific port by issuing the <b>spanning-tree bpduguard enable</b> command in interface configuration mode.<br><br>
PortFast is a feature that provides immediate accessibility to the network for ports that are connected to end devices. PortFast transitions the port into the STP forwarding state without going through the STP listening and learning states. Because the ports are not expected to receive BPDUs, they are not required to listen for BPDUs and learn the network topology. You can enable PortFast for the entire switch by issuing the <b>spanning-tree portfast default</b> command in global configuration mode, or you can enable PortFast for specific ports by issuing the <b>spanning-tree portfast</b> command in interface configuration mode.<br><br>
The root guard feature, when enabled on a port, prevents superior BPDUs received on a neighbor switch connected to that port from becoming the root bridge. If superior BPDUs are received on a port enabled with root guard, the port enters the root-inconsistent state and no data will flow through that port until the port stops receiving superior BPDUs. You can enable root guard on specific ports by issuing the <b>spanning-tree guard root</b> command in interface configuration mode.<br><br>
The loop guard feature prevents nondesignated ports from inadvertently forming bridging loops if the steady flow of BPDUs is interrupted. When the port stops receiving BPDUs, loop guard puts the port into the loop-inconsistent state, which keeps the port in a blocking state. After the port starts receiving BPDUs again, loop guard enables the port to transition through the normal STP states. You can enable loop guard for the entire switch by issuing the <b>spanning-tree loopguard default</b> command in global configuration mode, or you can enable loop guard for specific ports by issuing the <b>spanning-tree guard loop</b> command in interface configuration mode.
  `,
  reference: [
    {
      title: "Boson CCNA Curriculum 200-301",
      description: "Module 5: Switching and Network Access, BPDU Guard"
    },
    {
      title: "CCNA 200-301 Official Cert Guide",
      description: "Volume 1, Chapter 9: Spanning Tree Protocol Concepts, Optional STP Features"
    },
    {
      title: "Cisco: Configuring Optional Spanning-Tree Features: Understanding Optional Spanning-Tree Features",
      link: "https://www.cisco.com/c/en/us/support/docs/lan-switching/spanning-tree-protocol/10556-21.html"
    },
    {
      title: "Cisco: Spanning Tree PortFast BPDU Guard Enhancement: Feature Description",
      link: "https://www.cisco.com/c/en/us/td/docs/switches/lan/catalyst4500/12-2/32sg/configuration/guide/conf/stp_enhance.html"
    }
  ]
},

{
  id: 515,
  category: "IP Services",
  questionType: "Single-select",
  question: `
<img src="/images/q515-nat-topology.png" alt="Cisco NAT Configuration Topology" style="max-width: 100%; height: auto; margin: 20px 0;" />
You administer the network shown below:<br><br>
<pre>
RouterA#show running-config
<output omitted>
interface FastEthernet0/0
 ip address 10.1.2.1 255.255.255.0
 ip nat inside
 no fair-queue
!
interface FastEthernet0/1
 ip address 10.1.1.1 255.255.255.0
 ip nat inside
 no fair-queue
!
interface Serial0/0
 ip address 172.16.1.1 255.255.254.0
 ip nat outside
!
router rip
 network 10.0.0.0
 network 192.168.200.0
!
ip nat pool nat-pool 172.16.1.2 172.16.1.21 prefix 23
ip nat inside source list 10 pool nat-pool
!
access-list 10 permit 10.1.0.0 0.0.255.255
<output omitted>
</pre>
Hosts connected to LAN A and LAN B access the external network through RouterA. Currently, only 20 users can simultaneously access the external network. Your supervisor has asked you to reconfigure RouterA so that all users from LAN A and LAN B can access the external network. You have also been instructed to use the minimum number of addresses from the 172.16.1.0/23 network while still providing access for all users.<br><br>
Which of the following command sets will accomplish this task? (Select the best answer.)
`,
  options: [
    `RouterA(config)#no ip nat pool nat-pool 172.16.1.2 172.16.1.21 prefix 23`,
    `RouterA(config)#no ip nat inside source list 10 pool nat-pool
RouterA(config)#ip nat outside source list 10 pool nat-pool overload`,

    `RouterA(config)#no ip nat pool nat-pool 172.16.1.2 172.16.1.21 prefix 23
RouterA(config)#no ip nat inside source list 10 pool nat-pool
RouterA(config)#ip nat inside source list 10 interface serial 0/0 overload`,

    `RouterA(config)#no ip nat inside source list 10 pool nat-pool
RouterA(config)#ip nat inside source list 10 pool nat-pool overload`
  ],
  correctAnswer: 2,
  explanation: `
To configure Network Address Translation (NAT) on RouterA so that all users on LAN A and LAN B can access the external network, and to use the minimum number of Internet Protocol (IP) addresses from the 172.16.1.0/23 network, you should issue the following commands on RouterA:<br><br>
<pre>
RouterA(config)#no ip nat pool nat-pool 172.16.1.2 172.16.1.21 prefix 23
RouterA(config)#no ip nat inside source list 10 pool nat-pool
RouterA(config)#ip nat inside source list 10 interface serial 0/0 overload
</pre>
NAT can map host addresses in one network to addresses in another network. In NAT terminology, one of these networks is designated as the <b>inside network</b> and the other is designated as the <b>outside network</b>. NAT is often used to allow hosts on a privately addressed internal network to communicate with hosts on the Internet. In this case, the private network is referred to as the inside network and the Internet is referred to as the outside network.<br><br>
NAT can be configured to perform a one-to-one mapping, where an IP address from the outside network must be available for every host on the inside network. NAT can also be configured to allow a large number of hosts on the inside network to use a few IP addresses or even a single IP address from the outside network.<br><br>
This scenario states that NAT is currently configured on the network, but only 20 hosts can simultaneously access the outside network; this configuration requires 20 public IP addresses from the outside network. In this case, the <b>ip nat pool</b> command is used to define a pool of addresses from the outside network to be used by hosts on the inside network when they need to communicate with the outside network. The <b>ip nat inside source list</b> command refers to an access list that defines which hosts on the inside network can use addresses from this pool when they are communicating with the outside network.<br><br>
The scenario requires that you reconfigure NAT; all hosts on the inside network must be able to communicate with the outside network and must use a minimum number of addresses from the outside network. This can be accomplished by using a technique called <b>NAT overload</b>. NAT overload allows multiple hosts on the inside network to communicate by using a single IP address, which is configured on the interface that connects to the outside network. A router configured with NAT maintains a port translation table that uses unused ports to map traffic from the single IP address on the outside network back to the hosts on the inside network. This translation table can be displayed when you issue the <b>show ip nat translations</b> command.<br><br>
To configure NAT overload in this scenario, you should remove the NAT pool by issuing the <b>no ip nat pool</b> command, because the current NAT pool will no longer be used. You should also remove the <b>ip nat inside source list</b> command by issuing the <b>no ip nat inside source list</b> command. You should then issue the <b>ip nat inside source list</b> command, reference the interface that connects to the outside network, and use the <b>overload</b> keyword.<br><br>
The <b>ip nat inside source list 10 pool nat-pool overload</b> command in the following block of commands does not minimize the number of IP addresses used from the 172.16.1.0/27 network unless the pool size is reduced:<br><br>
<pre>
RouterA(config)#no ip nat inside source list 10 pool nat-pool
RouterA(config)#ip nat inside source list 10 pool nat-pool overload
</pre>
Although using the <b>overload</b> keyword is acceptable with a NAT pool, using the <b>overload</b> keyword with the pool in this scenario would consume 20 addresses, whereas using the <b>overload</b> keyword with an interface would consume only one address. Therefore, the <b>overload</b> keyword should be used with the <b>ip nat inside source list 10 interface serial 0/0</b> command to force all traffic destined for the external network to be sourced with the IP address assigned to interface Serial 0/0 rather than sourced with IP addresses from a pool of addresses.<br><br>
The <b>ip nat outside</b> command in the following block of commands is used to perform address translation on traffic that originates on the outside network and is destined for the inside network; this is the opposite of what you are trying to accomplish in this scenario:<br><br>
<pre>
RouterA(config)#no ip nat inside source list 10 pool nat-pool
RouterA(config)#ip nat outside source list 10 pool nat-pool overload
</pre>
Likewise, the <b>ip nat outside</b> command in the following block of commands is used to perform address translation on traffic that originates on the outside network and is destined for the inside network:<br><br>
<pre>
RouterA(config)#no ip nat pool nat-pool 172.16.1.2 172.16.1.21 prefix 23
RouterA(config)#ip nat outside source list 10 pool nat-pool overload
</pre>
`,
  reference: [
    {
      title: "Boson CCNA Curriculum 200-301",
      description: "Module 7: IP Services, PAT Configuration"
    },
    {
      title: "Cisco: Configuring Network Address Translation: Getting Started",
      link: "https://www.cisco.com/c/en/us/support/docs/ip/network-address-translation-nat/13772-12.html"
    }
  ]
},

{
  id: 664,
  category: "Network Access",
  questionType: "Single-select",
  question: `
You need to discover the following information about a device connected to a Cisco switch:<br><br>
<ul>
  <li>The IP address of the neighboring device</li>
  <li>The interface on the switch that is connected to the neighboring device</li>
  <li>The interface on the neighboring device that is connected to the switch</li>
</ul>
Which of the following commands should you issue? (Select the best answer.)
`,
  options: [
    "show cdp neighbors",
    "show cdp",
    "show cdp interface",
    "show cdp neighbors detail"
  ],
  correctAnswer: 3,
  explanation: `
<b>Explanation:</b><br>
You should issue the <b>show cdp neighbors detail</b> command. Cisco Discovery Protocol (CDP) is an Open Systems Interconnection (OSI) Layer 2 Cisco-proprietary protocol that is used to advertise and discover only directly connected Cisco devices on a local network. By default, CDP sends advertisements every 60 seconds and retains information about a neighbor for 180 seconds before discarding it. Although CDP is enabled by default on many Cisco devices, it can be disabled for security purposes. However, disabling CDP may not be an option as some devices such as Cisco Voice over Internet Protocol (VoIP) phones rely on CDP to convey critical information, such as their power requirements, to other devices.<br><br>
The <b>show cdp neighbors detail</b> command can provide detailed information about neighboring devices that have been discovered by using CDP. The <b>show cdp neighbors detail</b> command will provide the following information:<br>
<ul>
  <li>The device ID, or host name, of the neighboring device</li>
  <li>The Internet Protocol (IP) address of the neighboring device</li>
  <li>The platform, or product number, of the neighboring device</li>
  <li>The capabilities of the neighboring device</li>
  <li>The local interface</li>
  <li>The remote interface</li>
  <li>The holdtime</li>
  <li>The software version</li>
  <li>The native virtual local area network (VLAN)</li>
  <li>The VLAN Trunking Protocol (VTP) domain</li>
</ul>
The following is sample output from the <b>show cdp neighbors detail</b> command:<br>
<pre>
Switch1#show cdp neighbors detail
-------------------------
Device ID: boson-1
Entry address(es):

  IP address: 10.1.2.3
Platform: WS-C2960-24TT-L, Capabilities: Switch IGMP
Interface: GigabitEthernet0/1, Port ID (outgoing port): GigabitEthernet0/10
Holdtime : 117 sec

Version :
Cisco IOS Software, C2960 Software (C2960-LANBASEK9-M), Version 12.2(25)SEE2, RELEASE SOFTWARE (fc1)
Copyright (c) 1986-2006 by Cisco Systems, Inc.
Compiled Tue 08-Nov-06 15:20 by smithc

advertisement version: 2
VTP Management Domain: 'boson'
Native VLAN: 1
Duplex: full
Management address(es):
</pre>
The <b>show cdp neighbors</b> command displays much of the same information found in the output of the <b>show cdp neighbors detail</b> command. However, it does not display the IP address of the neighboring device. The following information is displayed when the <b>show cdp neighbors</b> command is issued:<br>
<ul>
  <li>The device ID of the neighboring device</li>
  <li>The capabilities of the neighboring device</li>
  <li>The product number of the neighboring device</li>
  <li>The holdtime</li>
  <li>The local interface</li>
  <li>The remote interface</li>
</ul>
The following displays sample output from the <b>show cdp neighbors</b> command:<br>
<pre>
Switch1#show cdp neighbors
Capability Codes: R - Router, T - Trans Bridge, B - Source Route Bridge
    S - Switch, H - Host, I - IGMP, r - Repeater

Device ID  Local Intrfce Holdtme Capability Platform Port ID
boson-1    Gig 0/1       117     S I       WS-C2960-2 Gig 0/1
boson-2    Gig 0/2       143     S I       WS-C2960-4 Gig 0/1
boson-3    Fas 0/3       102     R S I     1841       Fas 0/1
boson-4    Fas 0/4       133     R S I     1841       Fas 0/2
</pre>
The <b>show cdp</b> command displays global information about CDP, including timer and holdtime information. The following is sample output from the <b>show cdp</b> command:<br>
<pre>
Switch1#show cdp

Global CDP information:
        Sending CDP packets every 60 seconds
        Sending a holdtime value of 180 seconds
        Sending CDPv2 advertisements is   enabled
</pre>
The <b>show cdp interface</b> command displays information about the interfaces on which CDP is enabled. The following is sample output from the <b>show cdp interface</b> command:<br>
<pre>
Switch1#show cdp interface

GigabitEthernet0/0 is up, line protocol is up, encapsulation is ARPA
  Sending CDP packets every 60 seconds
  Holdtime is 180 seconds
FastEthernet0/0 is up, line protocol is up, encapsulation is ARPA
  Sending CDP packets every 60 seconds
  Holdtime is 180 seconds
</pre>
`,
  reference: [
    {
      title: "Boson CCNA Curriculum 200-301",
      description: "Module 5: Switching and Network Access, Displaying CDP and LLDP Neighbors"
    },
    {
      title: "CCNA 200-301 Official Cert Guide, Volume 2, Chapter 9",
      description: "Device Management Protocols, Examining Information Learned by CDP"
    },
    {
      title: "Cisco: Cisco IOS Cisco Discovery Protocol Command Reference: show cdp neighbors",
      link: "https://www.cisco.com/c/en/us/td/docs/ios-xml/ios/cdp/command/cdp-cr-book/cdp-commands.html#wp1488318916"
    },
    {
      title: "Cisco: Configuring CDP: Monitoring and Maintaining CDP",
      link: "https://www.cisco.com/c/en/us/support/docs/ios-nx-os-software/ios-xe-configuration/217898-configuring-cdp-monitoring-and-maintai.html"
    }
  ]
},

{
  id: 421,
  category: "Security Fundamentals",
  questionType: "Single-select",
  question: `
<img src="/images/q421-acl-topology.png" alt="ACL Topology" style="max-width:100%;height:auto;margin:20px 0;" />
You administer the network shown in the exhibit. You issue the following commands on RouterA:<br>
<pre>
RouterA(config)#access-list 100 deny ip 0.0.0.0 0.255.255.255 any
RouterA(config)#access-list 101 deny ip 172.16.1.0 0.0.0.255 any
RouterA(config)#access-list 102 deny ip 127.0.0.0 0.255.255.255 any
RouterA(config)#access-list 103 deny ip 10.0.0.0 0.255.255.255 any
RouterA(config)#access-list 104 deny ip 192.168.0.0 0.0.255.255 any
RouterA(config)#access-list 105 deny ip 224.0.0.0 15.255.255.255 any
RouterA(config)#access-list 106 permit ip any 172.16.1.0 0.0.0.255
RouterA(config)#interface gi0/0
RouterA(config-if)#ip access-group 100 in
RouterA(config-if)#ip access-group 101 in
RouterA(config-if)#ip access-group 102 in
RouterA(config-if)#ip access-group 103 in
RouterA(config-if)#ip access-group 104 in
RouterA(config-if)#ip access-group 105 in
RouterA(config-if)#ip access-group 106 in
</pre>
Which of the following statements is true regarding this configuration? (Select the best answer.)
`,
  options: [
    "HostA will not be able to access the Internet.",
    "All traffic destined for the 172.16.1.0/24 network will be allowed.",
    "Only broadcast traffic will be allowed on the 172.16.1.0/24 network.",
    "A range of common threats will be mitigated.",
    "All IP traffic will be blocked on the Gi0/0 interface."
  ],
  correctAnswer: 1,
  explanation: `
Based on the configuration shown in this scenario, all traffic destined for the 172.16.1.0/24 network will be allowed. Access control lists (ACLs) are used to control packet flow into and out of a router. They can either permit or deny packets based on source network address, destination network address, protocol, or port. Multiple ACLs can be used to accomplish more complex packet flow throughout a network. You have created multiple ACLs in this scenario, but they all use Internet Protocol (IP). When multiple ACLs that use the same protocol are applied to an interface, only the last ACL applied to the interface will affect traffic on the interface. The last ACL that is applied to interface Gi0/0 is ACL 106, which contains the statement <b>access-list 106 permit ip any 172.16.1.0 0.0.0.255</b>. This statement permits IP traffic from any source address to be sent to the 172.16.1.0/24 network. Any IP traffic that is destined for the 172.16.1.0/24 network and that is sent through the Gi0/0 interface will be allowed by this configuration.<br><br>
A range of common threats will not be mitigated by the ACL in this scenario. Although the individual statements in this scenario are intended to mitigate common threats, such as IP spoofing, they should be applied as a single ACL rather than as separate ACLs.<br><br>
The ACL configuration shown in this scenario will not block all IP traffic on Gi0/0. Because ACL 106 is applied to the interface last and ACL 106 permits IP traffic from any source address to be forwarded to the 172.16.1.0/24 network, no IP traffic that is destined for the 172.16.1.0/24 network will be blocked on Gi0/0. However, because no other IP traffic is explicitly permitted by ACL 106, all inbound IP traffic that is not destined for the 172.16.1.0/24 network will be denied by the implicit deny statement at the end of ACL 106.<br><br>
HostA's Internet access will not be affected by the configuration in this scenario. The ACLs are applied to the Internet-connected interface, and HostA is connected to the internal network.<br><br>
The configuration in this scenario will not permit only broadcast traffic on the 172.16.1.0/24 network. All IP traffic directed toward the 172.16.1.0/24 network will be permitted in this scenario.
`,
  reference: [
    {
      title: "Boson CCNA Curriculum 200-301",
      description: "Module 8: Security Fundamentals, Extended ACLs"
    },
    {
      title: "CCNA 200-301 Official Cert Guide, Volume 2, Chapter 3",
      description: "Advanced IPv4 Access Control Lists, Extended Numbered IP Access Control Lists"
    },
    {
      title: "Cisco: Access Control List Overview and Guidelines",
      link: "https://www.cisco.com/c/en/us/td/docs/ios-xml/ios/sec_data_acl/configuration/xe-3s/sec-data-acl-xe-3s-book/sec-access-list-overview.html"
    }
  ]
},

{
  id: 75,
  category: "IP Services",
  questionType: "Single-select",
  question: `
You issue the <b>show ip nat translations</b> command on RouterA and receive the following partial output:<br>
<pre>
Pro Inside global      Inside local         Outside local    Outside global
udp 192.0.2.7:49713   10.20.30.55:49713    203.0.113.9:69   203.0.113.9:69
tcp 192.0.2.8:49716   10.20.30.32:49716    203.0.113.13:23  203.0.113.13:23
</pre>
Which IP address is the destination of the Telnet connection? (Select the best answer.)
`,
  options: [
    "203.0.113.13",
    "10.20.30.32",
    "10.20.30.55",
    "192.0.2.8",
    "203.0.113.9"
  ],
  correctAnswer: 0,
  explanation: `
<b>Explanation:</b><br>
The Internet Protocol (IP) address of the destination of the Telnet connection is 203.0.113.13.<br>
The <b>show ip nat translations</b> command displays the mapping between internal and external IP addresses when Network Address Translation (NAT) is configured on a router. NAT translates between public and private IP addresses to enable hosts on a privately addressed network to access a public network, such as the Internet. By default, NAT provides only a one-to-one mapping of addresses. If multiple hosts require simultaneous access to the public network, NAT must be configured to use either a pool of public IP addresses or NAT overloading. In this scenario, RouterA is configured with a pool of public IP addresses.<br><br>
The <b>show ip nat translations</b> command displays five fields of information for each NAT translation session:<br>
<ul>
  <li>Protocol – displays the type of protocol in the translated session, such as Internet Control Message Protocol (ICMP), Transmission Control Protocol (TCP), or User Datagram Protocol (UDP)</li>
  <li>Inside global address – displays an IP address that represents an inside host as seen by hosts on the outside network</li>
  <li>Inside local address – displays the IP address configured on a host on the local network</li>
  <li>Outside local address – displays the IP address of a host on the outside network as seen from a host on the inside network</li>
  <li>Outside global address – displays the IP address configured on a host on the outside network</li>
</ul>
Typically, NAT is configured only for addresses on the inside network; therefore, the outside local and outside global address are often identical, as seen in this example. The following graphic depicts the relationship between inside local, inside global, outside local, and outside global addresses:<br>
<img src="/images/q75-nat-translation-diagram.png" alt="NAT Address Translation Diagram" style="max-width:100%;height:auto;margin:12px 0;" />
In this scenario, 10.20.30.32 is the inside local address, 192.0.2.8 is the inside global address, and 203.0.113.13 is the outside local and outside global address.<br><br>
When the source device at 10.20.30.32 initiates a Telnet connection with the destination device at 203.0.113.13, it sends packets on TCP port 23. The source device also chooses an ephemeral port number that the destination device will use when communicating back to HostA. Ephemeral ports are generally numbered from 49152 through 65535. When the destination device in this scenario responds back, it will send packets over TCP port 49716.<br><br>
The IP address 10.20.30.55 is the address of a host that is establishing a Trivial File Transfer Protocol connection to 203.0.113.9 on UDP port 69. RouterA uses NAT to map the host's IP address to 192.0.2.7, which is another public IP address in RouterA's NAT pool.
`,
  reference: [
    {
      title: "Boson CCNA Curriculum 200-301",
      description: "Module 7: IP Services, PAT Configuration"
    },
    {
      title: "Cisco: Cisco IOS IP Addressing Services Command Reference: show ip nat translations",
      link: "https://www.cisco.com/c/en/us/td/docs/ios-xml/ios/ipaddr_nat/command/nat-cr-book/nat-s1.html"
    },
    {
      title: "Cisco: NAT: Local and Global Definitions",
      link: "https://www.cisco.com/c/en/us/support/docs/ip/network-address-translation-nat/13772-12.html"
    }
  ]
},

{
  id: 693,
  category: "Network Fundamentals",
  questionType: "Single-select",
  question: `
How many address fields can be expected in an 802.11 data frame that is sent from a wireless station and destined to a host on the wired network? (Select the best answer.)
`,
  options: [
    "two",
    "one",
    "three",
    "four"
  ],
  correctAnswer: 3,
  explanation: `
Three address fields can be expected in an Institute of Electrical and Electronics Engineers (IEEE) 802.11 data frame that is sent from a wireless station and destined to a host on the wired network. An 802.11 Media Access Control (MAC) frame is generally comprised of nine fields, as shown in the following diagram:<br>
<img src="/images/q693-80211-mac-frame.png" alt="802.11 MAC frame fields" style="max-width:100%;height:auto;margin:12px 0;" />
The Frame Control (FC) field is used to identify the type of 802.11 frame, and its 2 bytes of data are subdivided into 11 related fields of information, such as wireless protocol, frame type, and frame subtype.<br><br>
The Duration (DUR) field is a 2-byte field that is used mainly by control frames to indicate transmission timers. However, this field is also used by the Power Save (PS) Poll control frame to indicate the association identity (AID) of a client.<br><br>
The address fields, Address 1 (ADD1), Address 2 (ADD2), Address 3 (ADD3), and Address 4 (ADD4), are 6-byte fields used to convey MAC address and Basic Service Set Identifier (BSSID) information. What information resides in which address field is entirely dependent on the type of frame. However, ADD1, ADD2, and ADD3 typically contain a source MAC address, destination MAC address, and BSSID with the order being dependent on whether the frame is entering the distribution system (DS), leaving the DS, or passing directly between ad-hoc wireless devices. The ADD4 field is only present for frames passing between devices in the DS, such as from one access point (AP) to another AP.<br><br>
The Sequence (SEQ) field is a 2-byte field that is subdivided to store two related pieces of information: the fragment number and sequence number of each frame.<br><br>
The DATA portion of a frame varies in size and contains the frame's payload. For data frames, the payload is user data. However, for other frames, such as management frames, this portion of the frame might contain information such as supported data rates and cipher suites.<br><br>
Finally, the Frame Check Sequence (FCS) field contains a 4-byte cyclic redundancy check (CRC) value calculated from all the 802.11 header fields, including the data portion of the frame. This value is used by the receiving station to determine whether the frame was corrupted during transit.
`,
  reference: [
    {
      title: "Boson CCNA Curriculum 200-301",
      description: "Module 3: Wireless Networking Fundamentals, 802.11 MAC Frames"
    },
    {
      title: "SANS Institute: IEEE 802.11 Pocket Reference Guide",
      link: "https://www.sans.org/white-papers/802-11-pocket-reference-guide-1340/"
    },
    {
      title: "Microsoft Docs: How 802.11 Wireless Works: 802.11 MAC Frame",
      link: "https://learn.microsoft.com/en-us/windows/win32/nativewifi/how-802-11-wireless-works-802-11-mac-frame"
    }
  ]
},

{
  id: 646,
  category: "Network Access",
  questionType: "Single-select",
  question: `
SwitchA and SwitchB are connected by an 802.1Q trunk link with the default settings.

Which of the following is most likely to occur if you change the native VLAN to VLAN 10 on the trunk interface of SwitchB? (Select the best answer.)
`,
  options: [
    "No traffic will be sent between the two switches.",
    "Traffic from VLANs other than VLAN 10 will be sent between the two switches, but no traffic from VLAN 10 will be sent between the switches.",
    "Traffic will be sent between the switches, but problems could occur because of a native VLAN mismatch.",
    "Traffic will be sent between the two switches, and traffic sent over VLAN 10 will be untagged."
  ],
  correctAnswer: 2,
  explanation: `
Traffic will be sent between the switches, but problems could occur because of a native virtual local area network (VLAN) mismatch. SwitchA is configured to use the default native VLAN, VLAN 1. Modifying the native VLAN to VLAN 10 on SwitchB could cause problems because of the different native VLANs. A mismatched native VLAN configured on either of the two ends of a trunk link could cause problems when traffic is sent by using one of the configured native VLANs. The traffic may be sent, but the native VLAN mismatch could potentially cause the traffic to be misdirected or dropped. In addition, when Dynamic Trunking Protocol (DTP) is used to negotiate the formation of a trunk link between switches, DTP uses the native VLAN for its packets. If the native VLAN is not the same on both ends of the link, a trunk will not dynamically form.

Spanning Tree Protocol (STP) issues, such as unexpected loops, can occur if there is a native VLAN mismatch on the ends of a trunk link. If Per-VLAN Spanning Tree Plus (PVST+) is enabled, one or more of the following error messages might appear on the console to indicate a native VLAN mismatch:

<pre>
%SPANTREE-SP-2-RECV-PVID-ERR: Received BPDU with inconsistent peer
Vlan id 1 on GigabitEthernet1/1 VLAN10
%SPANTREE-SP-2-BLOCK-PVID-PEER: Blocking GigabitEthernet1/1 on VLAN0001. Inconsistent peer vlan.
%SPANTREE-SP-2-BLOCK-PVID-LOCAL: Blocking GigabitEthernet1/1 on VLAN0001. Inconsistent local vlan.
</pre>

Traffic over the native VLAN is not tagged, which means that an 802.1Q header is not added to the frame. When a switch receives a frame without an 802.1Q header, the switch knows that the frame is part of the native VLAN. Thus both SwitchA and SwitchB should be configured with the same native VLAN in order to ensure that traffic flows correctly between the switches.
`,
  reference: [
    {
      title: "Boson CCNA Curriculum 200-301",
      description: "Module 5: Switching and Network Access, Trunk Encapsulation Methods"
    },
    {
      title: "CCNA 200-301 Official Cert Guide, Volume 1, Chapter 8",
      description: "Implementing Ethernet Virtual LANs, Mismatched Native VLAN on a Trunk"
    },
    {
      title: "Cisco: Configuring VLANs: Configuring VLAN Trunks",
      link: "https://www.cisco.com/c/en/us/td/docs/switches/lan/catalyst3850/software/release/3se/network_management/command_reference/b_nm_3se_3850_cr/b_nm_3se_3850_cr_chapter_010.html"
    },
    {
      title: "Cisco: IEEE 802.1Q Tunneling: 802.1Q Tunneling Configuration Guidelines and Restrictions",
      link: "https://www.cisco.com/c/en/us/td/docs/switches/lan/catalyst6500/ios/12-2SX/layer2/command/reference/l2_tunnel.html"
    }
  ]
},

{
  id: 423,
  category: "Security Fundamentals",
  questionType: "Single-select",
  question: `
<img src="/images/q423-acl-topology.png" alt="ACL Topology" style="max-width:100%;height:auto;margin:20px 0;" />
You administer the network shown in the following exhibit:<br><br>
RouterB has been assigned an IP address of 192.168.1.50 on the same /30 subnet as the RouterA interface that connects to RouterB.<br><br>
After a failed attempt to telnet from RouterA to RouterB, you connect to the console of RouterB and issue the <b>show access-lists</b> command. The command produces the following output:
<pre>
RouterB#show access-lists
Standard IP access list 10
 10 permit host 192.168.1.34 (0 matches)
 20 permit host 192.168.1.50 (5 matches)
Extended IP access list 101
 10 permit tcp host 192.168.1.33 any eq telnet (0 matches)
 20 permit tcp host 192.168.1.49 any eq telnet (0 matches)
</pre>
You then issue the <b>show running-config | section line</b> command on RouterB and receive the following output:
<pre>
RouterB#show running-config | section line
line con 0
line aux 0
line vty 0 4
 access-class 10 in
 login
 password cisco
</pre>
Why is RouterA unable to telnet to RouterB? (Select the best answer.)
`,
  options: [
    "ACL 10 on RouterB does not permit RouterA's IP address.",
    "ACL 101 on RouterA is applied to the wrong interface.",
    "ACL 101 on RouterA does not permit RouterB's IP address.",
    "ACL 101 on RouterB does not permit Telnet traffic."
  ],
  correctAnswer: 0,
  explanation: `
RouterA cannot telnet to RouterB because access control list (ACL) 10 on RouterB does not permit RouterA's Internet Protocol (IP) address. You can determine the configuration of ACLs on RouterB by issuing the show access-lists command, as shown in the following output:

<pre>
RouterB#show access-lists
Standard IP access list 10
 10 permit host 192.168.1.34 (0 matches)
 20 permit host 192.168.1.50 (5 matches)
Extended IP access list 101
 10 permit tcp host 192.168.1.33 any eq telnet (0 matches)
 20 permit tcp host 192.168.1.49 any eq telnet (0 matches)
</pre>

Based on the output, you can determine that RouterB is configured with two access lists: a standard ACL with an ID of 10 that permits traffic from the host with the IP address of 192.168.1.34 and the host with the IP address of 192.168.1.50, and an extended ACL with an ID of 101 that specifically permits Telnet traffic from the host with the IP address of 192.168.1.33 and the host with the IP address of 192.168.1.49. Issuing the <b>show running-config | section line</b> command on RouterB reveals that ACL 10, not ACL 101, is applied to the virtual terminal (VTY) configuration on RouterB, as shown in the following output:

<pre>
RouterB#show running-config | section line
line con 0
line aux 0
line vty 0 4
 access-class 10 in
 login
 password cisco
</pre>

The standard ACL with an ID of 10 permits traffic with a source IP address that matches its own Serial 0 interface. Because of the implicit deny rule that applies to all ACLs, traffic from any other source is denied. Therefore, RouterA is unable to telnet to RouterB; ACL 10 on RouterB does not permit RouterA's IP address.

ACLs are constructed by using the following syntax:

Standard: <b>access-list access-list-number [permit | deny] [host | source source-wildcard | any]</b>

Extended: <b>access-list access-list-number [dynamic dynamic-name [timeout minutes]] [deny | permit] protocol source source-wildcard [operator [port]] destination destination-wildcard [operator [port]] [established] [precedence precedence] [tos tos] [log | log-input] [time-range time-range-name]</b>

ACL 101 on RouterB does permit Telnet traffic. However, ACL 101 is not applied to the VTY lines on RouterB. There are two ways to solve the problem in this scenario: by replacing the inbound ACL in RouterB's VTY configuration with the extended ACL that has an ID of 101 or by reconfiguring ACL 10 with a source network or host IP address that will be matched when the source of the traffic is RouterA.

There are no outbound ACLs applied to RouterA's configuration. RouterA is configured with a single standard ACL that permits all traffic from the 192.168.1.0/24 network.
`,
  reference: [
    {
      title: "Boson CCNA Curriculum 200-301",
      description: "Module 8: Security Fundamentals, Configuring IPv4 ACLs to Control Access"
    },
    {
      title: "Cisco: Configuring IP Access Lists: Standard ACLs",
      link: "https://www.cisco.com/c/en/us/td/docs/ios-xml/ios/security/command/sec-cr-book/sec-cr-a1.html"
    }
  ]
},

{
  id: 472,
  category: "Automation and Programmability",
  questionType: "Single-select",
  question: `
Which of the following configuration management tools typically uses SSH to connect to remote nodes? (Select the best answer.)
`,
  options: [
    "Puppet",
    "Chef",
    "Salt",
    "Ansible"
  ],
  correctAnswer: 3,
  explanation: `
<b>Explanation:</b><br>
Ansible is the configuration management tool that typically uses Secure Shell (SSH) to connect to remote nodes. By default, SSH operates on Transmission Control Protocol (TCP) port 22. Ansible operates on Linux distributions, UNIX-like systems, and Microsoft Windows. However, unlike the other configuration management software packages, Ansible does not use agent software on managed nodes. Configurations are stored on the Ansible server in playbooks that are written in YAML Ain't Markup Language (YAML). Managed nodes can download scripted modules from an Ansible server by using SSH.<br><br>
Puppet accepts inbound requests from agents by using Hypertext Transfer Protocol Secure (HTTPS) on TCP port 8140. Of the four major configuration management tools, Puppet is the most mature and the most widely used. Puppet operates on Linux distributions, UNIX-like systems, and Microsoft Windows. Puppet uses a client/server architecture; managed nodes that are running the Puppet Agent application can receive configurations from a master server that is running Puppet Server. Modules are written in Ruby Domain Specific Language (DSL) or in a Ruby-like Puppet language known as Puppet DSL.<br><br>
Chef communicates by using HTTPS on the traditional TCP port 443. Like Puppet, Chef operates on Linux distributions, UNIX-like systems, and Microsoft Windows. Chef can use a client/server architecture or a standalone client configuration. Configuration information is contained within cookbooks that are written in Ruby DSL and are stored on a Chef Server. Managed nodes that are running the Chef Client can pull cookbooks from the server. Standalone clients that do not have access to a server can run chef-solo and pull cookbooks from a local directory or from a tar.gz archive on the Internet.<br><br>
Salt requires TCP ports 4505 and 4506 to communicate. Salt also operates on Linux distributions, UNIX-like systems, and Microsoft Windows. Salt can use a client/server architecture by installing Salt master software on the server and Salt minion software on managed nodes. Masters and minions communicate by using ZeroMQ. Salt can also be used without client agent software by using Salt SSH. However, Salt SSH is much slower than ZeroMQ. Salt configuration information is stored primarily in state modules that are typically written in YAML; however, Python or Python Domain Specific Language (PyDSL) can also be used for complex configuration scripts.
`,
  reference: [
    {
      title: "Boson CCNA Curriculum 200-301",
      description: "Module 9: Automation and Programming, Ansible"
    },
    {
      title: "CCNA 200-301 Official Cert Guide, Volume 2, Chapter 19",
      description: "Understanding Ansible, Puppet, and Chef, Ansible, Puppet, and Chef Basics"
    },
    {
      title: "Ansible Documentation: Getting Started: Connecting to remote nodes",
      link: "https://docs.ansible.com/ansible/latest/user_guide/intro_getting_started.html"
    },
    {
      title: "InfoWorld: Review: Puppet vs. Chef vs. Ansible vs. Salt",
      link: "https://www.infoworld.com/article/3299424/review-puppet-vs-chef-vs-ansible-vs-salt.html"
    }
  ]
},

{
  id: 654,
  category: "Network Access",
  questionType: "Single-select",
  question: `
Which of the following CoS priority values does a Cisco IP phone assign to traffic received from a host on its access port by default? (Select the best answer.)
`,
  options: [
    "3",
    "0",
    "5",
    "7"
  ],
  correctAnswer: 1,
  explanation: `
By default, a Cisco Internet Protocol (IP) phone assigns a Class of Service (CoS) priority value of 0 to traffic received from a host on its access port. Because voice traffic is vulnerable to degradation and deterioration if the traffic is sent unevenly, IP phones support Quality of Service (QoS) that is based on the Institute of Electrical and Electronics Engineers (IEEE) 802.1p CoS standard. QoS uses the CoS priority value to prioritize the forwarding of voice and data packets in a predictable fashion. Because data packets from the host computer and voice packets from the IP phone share a physical link to the switch, a method to prioritize the transmission of the voice packets over the data packets is required. A problem occurs when the data packets transmitted by the host have a higher CoS priority value than the voice packets that are generated by the IP phone. If this happens, the data packets could take precedence over the voice packets and cause unacceptable degradation of the voice call. There, the default behavior of a Cisco IP phone is to override the CoS priority value assigned by the host and reassign the lowest CoS priority value of 0 to the data packets.

In addition, you can configure the IP phone to reclassify the CoS priority value that the host assigns to its data packets to a specify value, instead of the default CoS priority value of 0. The CoS priority value can range from 0 through 7, with 7 being the highest priority. By default, Cisco IP phones classify voice data traffic with a CoS priority of 5 and voice signaling traffic with a CoS priority value of 3. Overriding the CoS priority to a specify value ensures that voice packets will have a higher priority than the data packets and the voice packets will be given preference over the data packets as they are processed by the switch.

However, under certain circumstances, such as when the data transmitted by the host is mission-critical, you might want the IP phone to trust the host-generated CoS priority value assigned to the data packets. In those circumstances, you can configure the IP phone so that it does not override the CoS values from the host but accepts the existing CoS value as valid and forwards unchanged data packets to the switch.
`,
  reference: [
    {
      title: "Boson CCNA Curriculum 200-301",
      description: "Module 7: IP Services, Classification"
    },
    {
      title: "CCNA 200-301 Official Cert Guide, Volume 1, Chapter 8",
      description: "Implementing Ethernet Virtual LANs, Implementing Interfaces Connected to Phones"
    },
    {
      title: "Cisco: Configuring Voice VLAN: Understanding Voice VLAN",
      link: "https://www.cisco.com/c/en/us/support/docs/lan-switching/802-1x/116424-configure-voice-vlan.html"
    }
  ]
},

{
  id: 38,
  category: "IP Services",
  questionType: "Single-select",
  question: `
Which of the following does RED and WRED address? (Select the best answer.)
`,
  options: [
    "bandwidth guarantees",
    "bandwidth starvation",
    "tail drop",
    "strict-priority queuing"
  ],
  correctAnswer: 2,
  explanation: `
<b>Explanation:</b><br>
Random early detection (RED) and weighted RED (WRED) are congestion avoidance mechanisms that address tail drop, which occurs when new incoming packets are dropped because a router's queues are too full to accept them. Tail drop particularly affects Transmission Control Protocol (TCP) traffic, because when TCP packets are dropped, the sources of the traffic must retransmit the lost TCP packets. Additionally, the TCP traffic sources will detect the congestion and will correspondingly slow down the rate at which they send data until the congestion clears. When the congestion clears, the TCP sources speed up data transmission, which again causes congestion; this ebb and flow of traffic is called global TCP synchronization. RED mitigates the problems caused by global TCP synchronization by randomly dropping packets as congestion increases and before the queue becomes full. As the average size of the queue increases, RED will randomly drop packets at an increasingly faster rate. WRED improves upon RED by employing different tail drop thresholds for each IP precedence or Differentiated Services Code Point (DSCP) value, whereby lower-priority traffic is more likely to be dropped than higher-priority traffic.

RED and WRED do not address bandwidth starvation. Queuing methods, such as weighted fair queuing (WFQ), class-based WFQ (CBWFQ), or low latency queuing (LLQ), mitigate bandwidth starvation. Bandwidth starvation occurs when higher-priority queues monopolize an interface's bandwidth so that traffic from lower-priority queues is never sent.

RED and WRED do not address bandwidth guarantees. CBWFQ and LLQ provide bandwidth guarantees by allowing the creation of up to 64 custom traffic classes, each with a guaranteed minimum bandwidth. Bandwidth can be allocated as a value in Kbps, as a percentage of bandwidth, or as a percentage of the remaining bandwidth.

RED and WRED do not address strict-priority queuing. LLQ improves upon CBWFQ through the support of strict-priority queues that can be used for delay-sensitive traffic. The strict-priority queues can use as much bandwidth as possible but can use only the guaranteed minimum bandwidth when other queues have traffic to send, thereby avoiding bandwidth starvation for the lower-priority queues.
`,
  reference: [
    {
      title: "Boson CCNA Curriculum 200-301",
      description: "Module 7: IP Services, Congestion Avoidance"
    },
    {
      title: "Cisco: Congestion Avoidance Overview",
      link: "https://www.cisco.com/c/en/us/td/docs/ios-xml/ios/qos/configuration/15-s/qos-15-s-book/qos-cngestn-avd.html"
    }
  ]
},

{
  id: 518,
  category: "Network Fundamentals",
  questionType: "Single-select",
  question: `
RouterA is configured with an IP address of 192.168.51.1. You issue the following command on RouterA:<br>
<pre>
RouterA(config)#snmp-server engineID local 111AB333DF
</pre>
RouterB is directly connected to RouterA and is configured with an IP address of 192.168.51.2. You issue the following commands on RouterB:<br>
<pre>
RouterB(config)#snmp-server engineID local 111BB333DF
RouterB(config)#snmp-server user boson boson remote 192.168.51.1 v3 auth md5 80$0n!
</pre>
Why does the attempt to create the RouterB user fail? (Select the best answer.)
`,
  options: [
    "No SNMPv3 chassis ID has been configured on RouterB.",
    "No SNMPv3 community string has been configured on RouterA.",
    "No SNMPv3 user has been configured on RouterA.",
    "No remote engine ID is specified on RouterA.",
    "No remote engine ID is specified on RouterB."
  ],
  correctAnswer: 4,
  explanation: `
The attempt to create the Simple Network Management Protocol version 3 (SNMPv3) user on RouterB fails because no remote engine ID is specified on RouterB. An SNMPv3 engine ID is a unique 10-character hexadecimal string that identifies Simple Network Management Protocol (SNMP) servers. The engine ID is used as part of the calculation process for the authentication or privacy hashes that SNMPv3 uses for security. By default, an SNMPv3 engine ID is comprised of the enterprise number and the default Media Access Control (MAC) address. No two devices in an administrative domain can have the same engine ID.<br><br>
The <b>snmp-server user boson boson remote 192.168.51.1 v3 auth md5 80$0n!</b> command attempts to create an SNMPv3 user named boson that belongs to the security group boson. The <b>remote 192.168.51.1</b> in this command specifies that the user will access a remote identity with an IP address of 192.168.51.1. The v3 in this command specifies that the user will use the SNMPv3 security model. The <b>auth md5 80$0n!</b> keywords in this command specify that the user account should use Message Digest 5 (MD5) authentication derived from a password string of <b>80$0n!</b>.<br><br>
However, RouterB has not been configured with a remote engine ID that matches the local engine ID on RouterA. Before you can create a remote user on an SNMPv3 agent, you must create a remote engine ID that matches the local engine ID of the device to which the user will connect. Therefore, issuing the <b>snmp-server engineID remote 192.168.51.1</b> command on RouterB prior to creating the user in this scenario would have enabled the device to create the user.<br><br>
You do not need to specify a remote engine ID on RouterA unless users on RouterA need to authenticate to the SNMPv3 server that is running on RouterB.<br><br>
You do not need to configure an SNMPv3 chassis ID on RouterB in this scenario. An SNMP chassis ID is a serial number that can be assigned to a router by the user and then obtained by using SNMP. However, an SNMPv3 chassis ID is not necessarily the manufacturer-assigned serial number of the hardware itself. By default, the chassis ID is the hardware serial number on systems in which the serial number can be read. On other systems, there is no default value.<br><br>
The user will be created even though no security group has been created. However, the user will not belong to the security group you have specified, because the group does not exist. To create an SNMPv3 security group, you should issue the <b>snmp-server group group-name v3 [auth | noauth | priv]</b> command from global configuration mode.<br><br>
You do not need to configure a community string in this scenario, because SNMPv3 does not require them. Community strings are used as a means of allowing access to SNMP in version 2c and earlier. SNMPv3 is the first version of SNMP to support user and group configuration in its authentication security model. However, before you can configure SNMPv3 users, you should configure the following:
<ul>
<li>An SNMPv3 group that maps users to views</li>
<li>The Internet Protocol (IP) address or port number for the remote SNMP agent where the user is configured</li>
<li>The SNMP engine ID by issuing the <b>snmp-server engineID</b> command</li>
</ul>
You can verify the SNMP engine ID by issuing the <b>show snmp engineID</b> command. You can verify the names of SNMP groups in addition to the SNMP security model on a switch by issuing the <b>show snmp group</b> command.
`,
  reference: [
    {
      title: "Boson CCNA Curriculum 200-301",
      description: "Module 7: IP Services, SNMP Configuration"
    },
    {
      title: "Cisco: SNMP Version 3: Configuring the SNMP Server",
      link: "https://www.cisco.com/c/en/us/support/docs/ip/simple-network-management-protocol-snmp/13904-snmpv3-13904.html"
    }
  ]
},

{
  id: 622,
  category: "Network Fundamentals",
  questionType: "Single-select",
  question: `
How many octets of a MAC address represent the OUI? (Select the best answer.)
`,
  options: [
    "three",
    "one",
    "four",
    "two",
    "five"
  ],
  correctAnswer: 0,
  explanation: `
The first three octets of a Media Access Control (MAC) address represent the organizationally unique identifier (OUI), which is assigned by the Institute of Electrical and Electronics Engineers (IEEE) to identify the manufacturer of the device. The last three octets make up the unique network interface card (NIC)-specific identifier assigned to the device by the manufacturer.<br><br>
A MAC address, also known as a physical address, is a 48-bit address that is permanently encoded on a NIC. MAC addresses are written in hexadecimal format and are composed of six 8-bit octets for a total of 6 bytes of data in the entire address, as shown in the following diagram:<br>
<img src="/images/q622-mac-oui-structure.png" alt="MAC Address OUI Diagram" style="max-width:100%;height:auto;margin:12px 0;" /><br>
The most significant bytes are at the beginning, or leftmost octet, and are transmitted first. Bytes decrease in significance as you move to the right through the address to the least significant octet appearing at the end, or rightmost octet.<br><br>
The significance of each octet follows the same rule of the overall address: the most significant bit is on the left, and the least significant bit is on the right. However, when transmitted, a bit differs from a byte in that the least significant bit of a byte is transmitted first. The two least significant bits of the most significant byte of a MAC address are used as indicator flags; these two bits are bit 2 and bit 1 in the example below:<br>
<img src="/images/q622-mac-bits.png" alt="MAC Address bits diagram" style="max-width:100%;height:auto;margin:12px 0;" /><br>
The least significant bit, or bit 1, of the most significant byte is where a MAC address is designated as a unicast address or a multicast address; a 0 equates to unicast, and a 1 equates to multicast. The second least significant bit, or bit 2, is used to designate whether the MAC address is globally administered by the IEEE and carries an OUI or whether the MAC address is locally administered; a 0 indicates the presence of an OUI, and a 1 indicates a locally administered MAC address.
`,
  reference: [
    {
      title: "Boson CCNA Curriculum 200-301",
      description: "Module 2: Network Addressing and Transport, MAC Address"
    },
    {
      title: "CCNA 200-301 Official Cert Guide, Volume 1, Chapter 2",
      description: "Fundamentals of Ethernet LANs, Ethernet Addressing"
    },
    {
      title: "IANA: Ethernet Numbers",
      link: "https://www.iana.org/assignments/ethernet-numbers/ethernet-numbers.xhtml"
    },
    {
      title: "IETF: RFC 7042: IANA Considerations and IETF Protocol and Documentation Usage for IEEE 802 Parameters",
      link: "https://datatracker.ietf.org/doc/html/rfc7042"
    }
  ]
},

{
  id: 455,
  category: "Automation and Programmability",
  questionType: "Single-select",
  question: `
Which of the following is a benefit of network automation? (Select the best answer.)
`,
  options: [
    "Data models are formed from show command output that is processed by automation scripts.",
    "Data models are enhanced by APIs to provide only the most specific information.",
    "Data models are human-interpreted from the output of show commands.",
    "Data models are formalized and defined by a centralized controller."
  ],
  correctAnswer: 3,
  explanation: `
One benefit of network automation is that data models are formalized and defined by a centralized controller. In addition, network automation aids reliable deployment of device configurations throughout an enterprise. Network automation includes the Software-Defined Networking (SDN) architecture. An SDN architecture is one in which management software is used to centralize device intelligence.

SDNs use northbound Application Programming Interfaces (APIs) to send network instructions from software applications to the central controller. Southbound protocols, which connect to a network's physical devices, are typically linked to the SDN controller by using a service abstraction layer (SAL). The SAL is a database, or registry, of the services provided by the southbound APIs. The APIs are bound to the registry so that the SAL can service an application's request.

Data models are enhanced by APIs to provide more robust information, not only the most specific information, about a network. Because of the centralized controller, data can be collected throughout a network. The controller can then provide that data to APIs in ways that enable extrapolation and interpretation that is more difficult to achieve when data is manually collected.

Data models are not human-interpreted from the output of show commands when network automation is implemented. The issuing of Cisco IOS show commands to verify configurations and to troubleshoot networks is an action traditionally performed by an administrator. The administrator must then interpret the output of the show command to verify a configuration or to uncover problems with the configuration. Often, the output of a given show command must be compared to the output of other show commands or to a configuration standard in order for the administrator to obtain complete information.

Data models are not formed from show command output that is processed by automation scripts. Automation scripts are typically human-created programs that parse the output of show commands in order to obtain specific information about a specific configuration. Although they might ease administrative burden for common and repetitive tasks, automation scripts are less robust than network automation.
`,
  reference: [
    {
      title: "Boson CCNA Curriculum 200-301",
      description: "Module 9: Automation and Programming, Automation and Programming Overview"
    },
    {
      title: "CCNA 200-301 Official Cert Guide, Volume 2, Chapter 16",
      description: "Introduction to Controller-Based Networking, How Automation Impacts Network Management"
    },
    {
      title: "Cisco: What is Network Automation?",
      link: "https://www.cisco.com/c/en/us/products/automation/what-is-network-automation.html"
    },
    {
      title: "Cisco: Software-Defined Networking: Why We Like It and How We Are Building On It",
      link: "https://www.cisco.com/c/en/us/solutions/software-defined-networking/overview.html"
    }
  ]
},

{
  id: 416,
  category: "Security Fundamentals",
  questionType: "Single-select",
  question: `
The sending host on a site-to-site VPN that is constructed by using GRE with IPSec for transport adds a VPN header and an IP header to the packet.

Which of the following steps occurs next? (Select the best answer.)
`,
  options: [
    "The sending host sends the packet to the destination.",
    "The sending host adds the session key to the packet.",
    "The receiving host decrypts the packet.",
    "The sending host encapsulates the packet."
  ],
  correctAnswer: 0,
  explanation: `
After a sending host on a site-to-site virtual private network (VPN) that is constructed by using Generic Routing Encapsulation (GRE) with Internet Protocol Security (IPSec) for transport adds a VPN header and an Internet Protocol (IP) header to the packet, the sending host sends the packet to the destination. The addition of the VPN header and IP header to the packet is a process known as encapsulation.

A site-to-site VPN uses IPSec to transport information across a tunnel that is established between two hosts. A typical site-to-site VPN uses GRE with confidentiality, integrity, and antireplay protection provided by IPSec. There are four steps in the site-to-site VPN IPSec encryption process. By contrast, a remote access VPN uses client software to encrypt traffic between a remote user and internal company resources.

First, the sending device combines a session key, which is also known as an encryption key or a shared key, with the data that is to be transported over the tunnel. It then uses the session key to encrypt both the data and the key.

Second, the sending device encapsulates the encrypted data and session key into a packet with a VPN header and a new IP header. These headers contain the source and destination information that is used to transport the encrypted data and session key over the tunnel.

Third, the sending device sends the completed packet to the destination device at the other end of the tunnel, or site-to-site VPN.

Fourth and finally, the destination device, or receiving device, uses the same session key that the sending device used for encryption to decrypt the encrypted packet and session key.
`,
  reference: [
    {
      title: "Boson CCNA Curriculum 200-301",
      description: "Module 8: Security Fundamentals, GRE Tunnels"
    },
    {
      title: "CCNA 200-301 Official Cert Guide, Volume 2, Chapter 14",
      description: "WAN Architecture, Internet VPN Fundamentals"
    }
  ]
},

{
  id: 91,
  category: "IP Services",
  questionType: "Single-select",
  question: `
Which of the following best describes the purpose of SNMP? (Select the best answer.)
`,
  options: [
    "to create VPNs",
    "to send email",
    "to manage network devices",
    "to transfer files",
    "to collect information about directly connected Cisco devices"
  ],
  correctAnswer: 2,
  explanation: `
Simple Network Management Protocol (SNMP) is used to manage network devices. SNMP can be used to remotely monitor and configure a wide variety of network devices, such as routers, switches, and network printers. SNMP version 1 (SNMPv1) and SNMPv2 use community strings to provide authentication. However, neither SNMPv1 nor SNMPv2 uses encryption; all data and community strings are sent in clear text. A malicious user can sniff an SNMP community string and use it to access and modify network devices.

SNMPv3 is an enhancement to the SNMP protocol that uses encryption to provide confidentiality, integrity, and authentication. SNMPv3 is also the first version of SNMP to support user and group configuration in its authentication security model. However, before you can configure SNMPv3 users, you must configure the following:
<ul>
<li>An SNMPv3 group that maps users to views</li>
<li>The Internet Protocol (IP) address or port number for the remote SNMP agent where the user is configured</li>
<li>The SNMP engine ID by issuing the <b>snmp-server engineID</b> command</li>
</ul>
Although you can configure SNMP to perform automated backups of configuration files by using management information base (MIB) object IDs (OIDs), SNMP itself is not used to transfer files. SNMP relies upon other file transfer protocols, such as File Transfer Protocol (FTP), Trivial FTP (TFTP), and Secure FTP (SFTP).

SNMP can collect information from many different network devices, not just neighboring Cisco devices. By contrast, Cisco Discovery Protocol (CDP) is used to advertise and discover only directly connected Cisco devices.

SNMP is not used to send email. Simple Mail Transfer Protocol (SMTP) is used to send email. Post Office Protocol 3 (POP3) and Internet Message Access Protocol 4 (IMAP4) are used to receive email.

SNMP is not used to create virtual private networks (VPNs). To create a VPN, you would typically use a protocol that can encrypt the data on the virtual network, such as IP Security (IPSec). A VPN is often used when it is necessary to connect two locations that are separated by a public network, such as the Internet.
`,
  reference: [
    {
      title: "Boson CCNA Curriculum 200-301",
      description: "Module 7: IP Services, SNMP"
    },
    {
      title: "Cisco: Simple Network Management Protocol: Versions of SNMP",
      link: "https://www.cisco.com/c/en/us/support/docs/ip/simple-network-management-protocol-snmp/14037-3.html"
    }
  ]
},

{
  id: 410,
  category: "Security Fundamentals",
  questionType: "Single-select",
  question: `
Which of the following is an example of authentication by something you have? (Select the best answer.)
`,
  options: [
    "a PIN",
    "your fingerprints",
    "your driver's license",
    "a password"
  ],
  correctAnswer: 2,
  explanation: `
Your driver's license is an example of authentication by something you have. There are three typical methods of authentication for gaining access to a secure environment: something you know, something you have, and something you are. A fourth possible method is authentication by someplace you are, which means that you can be granted access to a secure system by virtue of your workstation's location on a network, such as an Internet Protocol (IP) address or your physical location in the world.

Authentication by one type of factor, such as something you know, is known as single-factor authentication. Authentication by more than one type of factor, such as something you know and something you are, is known as multifactor authentication. However, requiring more than one of any single factor, such as two knowledge factors, is not considered multifactor authentication.

Authentication by something you have is the process of verifying your identity by using a device or document that you carry with you, such as a fob, a driver's license, a smart card, or a mobile phone with an authenticator application. For example, a police officer who stops you can verify your identity by comparing an image on your driver's license to your physical appearance. In addition, your company might require that you carry a fob in order to gain access to the office by using an exterior door. You would typically hold the fob in front of a sensor and allow the sensor to read the information that is stored on the fob; if the information matches that of an authorized user, you would be allowed entry. Authentication by something you have is also known as Type 2 authentication. Authentication by something you have is considered a stronger form of authentication than authentication by something you know because it requires the user to carry some sort of authenticating electronic access control (EAC) token.

A password or a personal identification number (PIN) is an example of authentication by something you know. For example, a bank's website might choose to ask you to provide both a password and the answer to a security question such as your mother's maiden name. Although the bank's website prompts you for two forms of verification, both of those prompts are for information that you store in your memory. Authentication by something you know is also known as Type 1 authentication. Authentication by something you know is considered the weakest form of authentication because such authentication can often be easily guessed or broken by brute force.

Fingerprints are an example of authentication by something you are. Authentication by something you are is the process of verifying your identity by using something that is unique about you and that cannot be easily changed, such as your iris, your retina, or your fingerprints. For example, your company could connect your workstation to a fingerprint scanner instead of requiring you to unlock your workstation with keystrokes and a password. Authentication by something you are is also known as Type 3 authentication. Authentication by something you are is considered the strongest form of authentication because of the unique biometrics of individuals.
`,
  reference: [
    {
      title: "Boson CCNA Curriculum 200-301",
      description: "Module 8: Security Fundamentals, Authentication Factors"
    },
    {
      title: "CCNA 200-301 Official Cert Guide, Volume 2, Chapter 4",
      description: "Security Architectures, Password Alternatives"
    }
  ]
},

{
  id: 65,
  category: "IP Connectivity",
  questionType: "Single-select",
  question: `
<img src="/images/q065.png" alt="OSPF Area 0 Topology" style="max-width:100%;height:auto;margin:20px 0;" />
You administer the network in the above exhibit. OSPF is configured with the default settings.

You issue the <b>show ip route ospf</b> command on RouterE.

Which of the following are you least likely to see in the output? (Select the best answer.)
`,
  options: [
    "O    192.0.3.1 [110/66] via 10.10.10.7, 00:23:40, FastEthernet1/0",
    "O    192.0.4.1 [110/2] via 10.10.10.7, 00:23:40, FastEthernet1/0",
    "O    192.0.6.1 [110/1] via 10.10.10.7, 00:23:40, FastEthernet1/1",
    "O    192.0.5.1 [110/65] via 10.10.10.10, 00:23:40, Serial0/0"
  ],
  correctAnswer: 2,
  explanation: `
Of the choices provided, you are least likely to see the following output from the <b>show ip route ospf</b> command on RouterE:

<pre>
O    192.0.6.1 [110/1] via 10.10.10.7, 00:23:40, FastEthernet1/1
</pre>
The O in the output above indicates that the path to 192.0.6.1 was inserted into the routing table by Open Shortest Path First (OSPF). However, the 192.0.6.0 network is directly connected to RouterE in the topology in this scenario. By default, a router prefers a directly connected path to a path learned by a routing protocol. Therefore the path to 192.0.6.1 would not have been inserted into the routing table by OSPF.

When the <b>show ip route</b> command is issued with a routing protocol keyword, the resulting output displays only the routes that were inserted into the routing table by the specified routing protocol. In this scenario, the <b>show ip route ospf</b> command would display only the routes that were inserted into the routing table on RouterA by OSPF.

If you were to issue the <b>show ip route ospf</b> command on RouterE in this scenario, you would most likely see a total of six paths in the output that were learned by RouterE. In addition to the 192.0.3.0, 192.0.4.0, and 192.0.5.0 networks, all of which are directly connected to other OSPF routers in the topology, RouterE would use OSPF to learn about the networks that are configured on the interfaces that directly connect RouterB to RouterC, RouterB to RouterD, and RouterC to RouterD.

If RouterB were connected to networks outside the OSPF topology in this scenario and were configured to redistribute those networks into OSPF, RouterE would additionally learn about the routes beyond RouterB by using OSPF. Similarly, RouterE could learn about a default route through RouterB by using OSPF if the <b>default-information originate</b> command were issued on RouterB.
`,
  reference: [
    {
      title: "Boson CCNA Curriculum 200-301",
      description: "Module 6: IP Routing, OSPF Route Processing"
    },
    {
      title: "Cisco: IP Routing Protocol-Independent Commands: show ip route",
      link: "https://www.cisco.com/c/en/us/td/docs/ios-xml/ios/iproute_pi/command/iproutepi-cr-book/ip2-show-ip-route.html"
    }
  ]
},

{
  id: 662,
  category: "Network Access",
  questionType: "Single-select",
  question: `
By default, what is the default maximum amount of time that a Cisco switch will retain LLDP information before discarding it when LLDP is enabled on an interface? (Select the best answer.)
`,
  options: [
    "65534 seconds",
    "180 seconds",
    "120 seconds",
    "30 seconds",
    "60 seconds"
  ],
  correctAnswer: 2,
  explanation: `
By default, a Cisco switch will retain Link Layer Discovery Protocol (LLDP) information for 120 seconds when LLDP is enabled on an interface. LLDP is an Open Systems Interconnection (OSI) Layer 2 open-standard discovery protocol that is used to facilitate interoperability between Cisco devices and non-Cisco devices. Attributes that can be learned from neighboring devices contain Type, Length, Value (TLV) information including port description, system description, and management address.

By default, a Cisco switch will send LLDP advertisements every 30 seconds when LLDP is enabled on an interface. These advertisements are used by neighboring devices to update the LLDP information learned about each neighbor. They are also used as keepalive messages to ensure that a discovered neighbor continues to be available on the network. You can issue the lldp timer rate command from global configuration mode to configure the frequency at which LLDP advertisements are sent by a switch. The default rate value is 30 seconds; however, the rate can be configured to any integer value from 5 through 65534 seconds. A Cisco switch will retain LLDP information for 120 seconds when LLDP is enabled on an interface. This time interval is known as the LLDP holdtime. You can issue the lldp holdtime seconds command from global configuration mode to configure the LLDP holdtime to any integer value from 0 through 65535 seconds. Whenever a new LLDP advertisement is received, the hold timer is reset and the LLDP information is considered current. When the hold timer expires for a particular neighbor, the LLDP information regarding that neighbor is considered stale and is discarded.

You can issue the show lldp command from privileged EXEC mode to display the current LLDP configuration. The following sample output shows the default settings for a Cisco 3560 series switch after LLDP has been enabled globally:

<pre>
SwitchA#show lldp

Global LLDP Information:
  Status: ACTIVE
  LLDP advertisements are sent every 30 seconds
  LLDP hold time advertised is 120 seconds
  LLDP interface reinitialisation delay is 2 seconds
</pre>

LLDP is disabled by default on Cisco switches. You can issue the lldp run command from global configuration mode to enable LLDP globally on a switch. By default, all interfaces are configured to transmit and receive LLDP packets when LLDP is globally enabled. However, you can issue the lldp transmit and lldp receive commands from interface configuration mode to control the sending and receiving of LLDP packets for a specific interface. For example, the no lldp transmit command configures an interface not to send LLDP packets, whereas the lldp receive command configures an interface that was previously configured not to receive LLDP packets to resume listening for LLDP packets. You can issue the show lldp interface command to examine the LLDP status of a particular interface. For example, the following sample output indicates that the FastEthernet 0/4 interface is configured to receive LLDP updates but not to send them:

<pre>
SwitchA#show lldp interface fastethernet 0/4

FastEthernet0/4:
  Tx: disabled
  Rx: enabled
  Tx state: INIT
  Rx state: WAIT PORT OPER
</pre>

Cisco Discovery Protocol (CDP) will retain information for 180 seconds by default before discarding it when enabled on an interface. Like LLDP, CDP is an OSI Layer 2 protocol that is used to advertise and discover only directly connected Cisco devices on a local network. However, unlike LLDP, CDP is a Cisco-proprietary protocol rather than open-standard. CDP sends advertisements every 60 seconds by default. Although CDP is enabled by default on many Cisco devices, it can be disabled for security purposes. An advantage of using CDP rather than LLDP on a network containing only Cisco devices is that CDP can also provide VLAN Trunking Protocol (VTP) information, whereas LLDP cannot. VTP is a protocol that is used to centrally manage virtual local area network (VLAN) changes and to propagate those changes across a network to all devices in the VTP domain.
`,
  reference: [
    {
      title: "CCNA 200-301 Official Cert Guide, Volume 2, Chapter 9",
      description: "Device Management Protocols, Configuring and Verifying LLDP"
    },
    {
      title: "Cisco: Configuring CDP: Default CDP Configuration",
      link: "https://www.cisco.com/c/en/us/support/docs/ios-nx-os-software/ios-xe-configuration/217898-configuring-cdp-monitoring-and-maintai.html"
    },
    {
      title: "Cisco: Configuring LLDP, LLDP-MED, and Wired Location Service: Default LLDP Configuration",
      link: "https://www.cisco.com/c/en/us/td/docs/switches/lan/catalyst3850/software/release/3se/network_management/command_reference/b_nm_3se_3850_cr/b_nm_3se_3850_cr_chapter_011.html"
    }
  ]
},

{
  id: 40,
  category: "IP Services",
  questionType: "Single-select",
  question: `
Which of the following Application layer protocols uses TCP for reliable, connection-oriented data transfer? (Select the best answer.)
`,
  options: [
    "DHCP",
    "TFTP",
    "FTP",
    "SNMP"
  ],
  correctAnswer: 2,
  explanation: `
File Transfer Protocol (FTP) uses Transmission Control Protocol (TCP) for reliable, connection-oriented data transfer. TCP is a Transport layer protocol that uses sequencing and error-checking to ensure that transmitted data can be easily reordered if packets arrive out of sequence and can be retransmitted if any packets are lost. FTP, which is used to transfer files over a network, uses TCP ports 20 and 21. Cisco devices can reliably transfer IOS images by using FTP. FTP requires the transmission of authentication credentials, even if anonymous FTP is in use, but those credentials are transmitted in plain text. Other common TCP protocols are Hypertext Transfer Protocol (HTTP), which is used to transfer webpages over the Internet, Simple Mail Transfer Protocol (SMTP), which is used to send email messages, Post Office Protocol 3 (POP3), which is used to retrieve email messages, and Telnet, which is used to manage network devices.

Dynamic Host Configuration Protocol (DHCP), Simple Network Management Protocol (SNMP), and Trivial FTP (TFTP) use User Datagram Protocol (UDP) and not TCP. UDP is a Transport layer protocol that is used for unreliable, connectionless datagram transfer. Because UDP does not use sequence numbers or establish synchronized connections, transmitted datagrams can appear out of sequence or can be dropped without notice. DHCP is used to assign Internet Protocol (IP) addressing and configuration information to clients. SNMP is used to monitor and manage network devices. TFTP is used to transfer files without authentication over a network. For example, administrators can use TFTP to transfer Cisco IOS images from a server to a device to perform firmware upgrades. Other common Application layer protocols that use UDP include Network Time Protocol (NTP), which is used to coordinate time on a network, and Remote Authentication Dial-In User Service (RADIUS), which is used to authenticate users.
`,
  reference: [
    {
      title: "Boson CCNA Curriculum 200-301",
      description: "Module 7: IP Services, FTP"
    },
    {
      title: "IANA: Service Name and Transport Protocol Port Number Registry",
      link: "https://www.iana.org/assignments/service-names-port-numbers/service-names-port-numbers.xhtml"
    }
  ]
},

{
  id: 467,
  category: "Automation and Programmability",
  questionType: "Multi-select",
  question: `
Which of the following statements about REST APIs are true? (Select 2 choices.)
`,
  options: [
    "REST APIs encode data in either XML format or JSON format.",
    "REST APIs are typically used to communicate with an SDN application plane.",
    "REST APIs encode data exclusively in XML format.",
    "REST APIs are typically used to communicate with an SDN data plane.",
    "REST APIs encode data exclusively in JSON format."
  ],
  correctAnswer: [0, 1],
  explanation: `
Representational State Transfer (REST) Application Programming Interfaces (APIs) encode data in either Extensible Markup Language (XML) format or in JavaScript Object Notation (JSON) format. In addition, REST APIs are typically used to communicate with a Software-Defined Networking (SDN) application plane.

An SDN controller uses two different sets of APIs: one set to communicate with applications and another set to communicate with devices. Northbound APIs enable an SDN controller to communicate with applications in the application plane. Applications use northbound APIs to send requests or instructions to the SDN controller, which uses that information to modify and manage network flow. Southbound APIs enable an SDN controller to communicate with devices in the data plane.

XML is a markup language that is similar to Hypertext Markup Language (HTML) in structure; it uses tags to define blocks of data. Whereas HTML is used to render information on a webpage, XML is a more structured language that is used to format data in a way that can be easily transmitted over the Internet and parsed by a variety of applications.

JSON is a data modeling language that returns data in the form of an object that contains key and value pairs. A single JSON object can contain multiple key and value pairs. Each key and value pair inside a JSON object is separated from the others by a comma (,). Furthermore, each pair's key is separated from its value by a colon (:). The element in quotation marks on the left side of each colon is the key. The element on the right side of each colon is the value, which might or might not be enclosed in quotation marks. There are several data value types that can be returned in JSON output: text, numeric, array, object, Boolean, and null.
`,
  reference: [
    {
      title: "Boson CCNA Curriculum 200-301",
      description: "Module 9: Automation and Programming, The REST API"
    },
    {
      title: "CCNA 200-301 Official Cert Guide, Volume 2, Chapter 18",
      description: "Understanding REST and JSON, Interpreting JSON"
    }
  ]
},

{
  id: 512,
  category: "IP Services",
  questionType: "Single-select",
  question: `
<img src="/images/q512.png" alt="DHCP Relay Topology" style="max-width:100%;height:auto;margin:20px 0;" />
You administer the network in the topology diagram.<br><br>
RouterA is configured as a DHCP server. In an effort to centralize the administration of DHCP services, you have decided to configure RouterB as a DHCP relay agent rather than configure it as a DHCP server. You issue the <b>show running-config</b> command on RouterA and receive the following partial output:<br>
<pre>
RouterA#show running-config
<output omitted>
ip dhcp pool DHCP
 network 192.168.111.16 255.255.255.240
 default-router 192.168.111.30
 dns-server 192.168.111.67
<output omitted>
</pre>
Which of the following commands should you issue on RouterB? (Select the best answer.)
`,
  options: [
    "ip helper-address 192.168.100.18",
    "service dhcp",
    "ip helper-address 192.168.111.30",
    "ip default-network 192.168.111.30",
    "network 192.168.111.32 255.255.255.248"
  ],
  correctAnswer: 2,
  explanation: `
Of the choices provided, you should issue the <b>ip helper-address 192.168.111.30</b> command on RouterB's Fa0/0 interface. The <b>ip helper-address</b> command configures Dynamic Host Configuration Protocol (DHCP) relay, which enables an interface to forward DHCP broadcasts across a network to the IP address of a DHCP server. The DHCP server will respond to the request and begin the DHCP discovery process. The syntax of the <b>ip helper-address</b> command is <b>ip helper-address ip-address</b>, where <i>ip-address</i> is the IP address of the DHCP server. Therefore, you should not issue the <b>ip helper-address 192.168.100.18</b> command.

By default, the <b>ip helper-address</b> command configures an interface to forward broadcasts to the following User Datagram Protocol (UDP) ports:<br>
<ul>
<li>UDP port 37 – Time Protocol</li>
<li>UDP port 49 – Terminal Access Controller Access-Control System (TACACS)</li>
<li>UDP port 53 – Domain Name System (DNS)</li>
<li>UDP port 67 – Bootstrap Protocol (BOOTP) and DHCP Server</li>
<li>UDP port 68 – BOOTP and DHCP Client</li>
<li>UDP port 69 – Trivial File Transfer Protocol (TFTP)</li>
<li>UDP port 137 – Network Basic Input/Output System (NetBIOS) Name Service</li>
<li>UDP port 138 – NetBIOS Datagram</li>
</ul>

You should not issue the <b>network 192.168.111.32 255.255.255.248</b> command on RouterB, because you are not creating a DHCP server on RouterB. However, you would create a DHCP scope on the DHCP server, RouterA, that contains the IP addresses that should be distributed by RouterA. The syntax of the <b>network</b> command is <b>network address [mask | prefix]</b>, where <i>address</i> is the network address, <i>mask</i> is the subnet mask, and <i>prefix</i> is the prefix length in Classless Inter-Domain Routing (CIDR) notation.

You should not issue the <b>service dhcp</b> command on RouterB, because you are not configuring RouterB as a DHCP server in this scenario. The <b>service dhcp</b> command enables the DHCP service on a Cisco router if the service is disabled. However, the DHCP service and DHCP relay agent services are typically enabled by default.

You should not issue the <b>ip default-network 192.168.111.30</b> command on RouterB, because you are not configuring RouterB's gateway of last resort. The <b>ip default-network ip-address</b> command can be used to configure a gateway of last resort on a router when IP routing is enabled. If IP routing is not enabled on a router, you can instead issue the <b>ip default-gateway ip-address</b> command to configure a gateway of last resort.
`,
  reference: [
    {
      title: "Cisco: Cisco IOS IP Application Services Command Reference: ip helper-address",
      link: "https://www.cisco.com/c/en/us/td/docs/ios-xml/ios/ipapp/command/ipapp-cr-book/ipapp-cr-a1.html#wp1083081464"
    }
  ]
},

{
  id: 77,
  category: "IP Connectivity",
  questionType: "Single-select",
  question: `
You issue the following command on a Cisco router in global configuration mode:

<pre>
ipv6 route 2001:db8:a::/32 fastethernet 0/1
</pre>

Which of the following have you created? (Select the best answer.)
`,
  options: [
    "a directly attached static route",
    "a fully specified static route",
    "a recursive static route",
    "a floating static route"
  ],
  correctAnswer: 0,
  explanation: `
You have created a directly attached Internet Protocol version 6 (IPv6) static route if you issue the <b>ipv6 route 2001:db8:a::/32 fastethernet 0/1</b> command on a Cisco router in global configuration mode. A directly attached static route specifies the destination IPv6 network and the outbound interface. When a directly connected static route is configured, the router assumes that any packet that matches the destination network is reachable through the specified outbound interface. Therefore, the packet's full destination address is used as the IPv6 next-hop address.

There are three other types of IPv6 static routes: fully specified static routes, recursive static routes, and floating static routes. A fully specified static route is an IPv6 static route in which the destination network, outbound interface, and next-hop IPv6 address are all configured directly. For example, if you were to issue the <b>ipv6 route 2001:db8:a::/32 fastethernet 0/1 2001:db8:b::1</b> command, the IPv6 prefix of 2001:db8:a::/32 represents the destination network. The router's FastEthernet 0/1 interface is the outbound interface. The IPv6 address of 2001:db8:b::1 is the next-hop IPv6 address. Fully specified static routes are most often used when the outbound interface is multiaccess and could therefore be configured with multiple next-hop addresses. The next-hop address that is specified in the command must be directly connected to the outbound interface.

A recursive static route specifies the destination IPv6 network and the IPv6 next-hop address only. For example, the <b>ipv6 route 2001:db8:a::/32 2001:db8:a::1</b> command configures the router to resolve all IPv6 addresses in the 2001:db8:a::/32 prefix through the next hop that has been assigned the IPv6 address of 2001:db8:a::1. The router assumes the outbound interface to be the interface to which the next hop is either directly or indirectly connected. In other words, the next-hop IPv6 address must be resolvable through the outbound interface.

A floating static route can be comprised of any of the other three types of IPv6 static routes. A floating static route is typically used as a backup route when the primary route goes down. Floating static routes are typically configured with an administrative distance (AD) value that is numerically higher than the AD of the primary route. For example, the <b>ipv6 route 2001:db8:a::/32 2001:db8:a::1 5</b> command will install a static route with an AD of 5. If a static route with the default AD of 1 were to go down, the floating static route could be used as a backup route to the destination network.
`,
  reference: [
    {
      title: "Boson CCNA Curriculum 200-301",
      description: "Module 6: IP Routing, IPv6 Static Routes"
    },
    {
      title: "Cisco: IPv6 Routing: Static Routing: Information About IPv6 Routing: Static Routing",
      link: "https://www.cisco.com/c/en/us/td/docs/ios-xml/ios/ipv6/configuration/xe-3s/ipv6-xe-3s-book/ip6-static.html"
    }
  ]
},

{
  id: 480,
  category: "Automation and Programmability",
  questionType: "Multi-select",
  question: `
In a controller-based network, the functions of which of the following protocols are least likely to be moved to a centralized controller? (Select 2 choices.)
`,
  options: [
    "SSH",
    "EIGRP",
    "OSPF",
    "SNMP",
    "BGP"
  ],
  correctAnswer: [0, 3],
  explanation: `
In a controller-based network, neither the functions of Simple Network Management Protocol (SNMP) nor the functions of Secure Shell (SSH) are likely to be moved to a centralized controller. In a controller-based network, such as a Software-Defined Networking (SDN) network, the control plane is centralized. SNMP and SSH operate in the management plane in both a traditional network and a controller-based network. Therefore, neither the functions of SNMP nor the functions of SSH are likely to be moved to a centralized controller. Other network management protocols that operate in this plane include Telnet and Syslog. All of these protocols enable an administrator to connect to and manage a network device.

In a controller-based network, the functions of Border Gateway Protocol (BGP), Enhanced Interior Gateway Routing Protocol (EIGRP), and Open Shortest Path First (OSPF) will be moved to a centralized controller. Routing protocols like BGP, EIGRP, and OSPF operate in the control plane of a traditional distributed network. These protocols make routing decisions for packets that require routing among Layer 3 devices. In a controller-based network, the decision-making logic is either moved to a central controller or monitored by a central controller.

Layer 2 switches, Layer 3 switches, and end devices typically operate in the data plane. In a controller-based network, the controller communicates with the data plane by using a southbound Application Programming Interface (API), such as NETCONF, OpenFlow, OpFlex, or OnePK. Network tasks that are typically performed in the data plane include the encapsulation and decapsulation of packets, the adding or removing of trunk headers, the matching of Media Access Control (MAC) addresses to a MAC address table, the matching of Internet Protocol (IP) addresses to paths in a routing table, the encryption of data, Network Address Translation (NAT), and filtering by using either access control lists (ACLs) or port security.
`,
  reference: [
    {
      title: "Boson CCNA Curriculum 200-301",
      description: "Module 9: Automation and Programming, Management Plane"
    },
    {
      title: "CCNA 200-301 Official Cert Guide, Volume 2, Chapter 16",
      description: "Introduction to Controller-Based Networking, The Data, Control, and Management Planes"
    }
  ]
},

{
  id: 492,
  category: "Network Access",
  questionType: "Single-select",
  question: `
Which of the following statements about FlexConnect ACLs is true? (Select the best answer.)
`,
  options: [
    "They are applied per AP and per VLAN.",
    "They can be configured with a per-rule direction.",
    "They are not supported on the native VLAN.",
    "They do not support an implicit deny rule."
  ],
  correctAnswer: 0,
  explanation: `
FlexConnect access control lists (ACLs) are applied per access point (AP) and per virtual local area network (VLAN). One possible application of FlexConnect ACLs is to prevent administration of the wireless local area network (WLAN) from a particular VLAN. FlexConnect ACLs are similar to traditional Cisco IOS ACLs in that they are rules that permit or deny traffic from a given source to a given destination. However, FlexConnect ACLs are configured on Cisco wireless lightweight AP VLAN interfaces if the lightweight AP is operating in FlexConnect mode. Even though FlexConnect ACLs are applied differently than traditional ACLs, it is important to name FlexConnect ACLs differently from any traditional ACLs that might be configured on the WLAN.

FlexConnect ACLs are supported on the native VLAN. Although it is possible to configure FlexConnect ACLs for the native VLAN, it is not possible to configure FlexConnect ACLs for the native VLAN if the VLAN configuration is inherited from a FlexConnect group.

FlexConnect ACLs cannot be configured with a per-rule direction. This is in contrast to a traditional ACL, which can be configured with inbound rules or outbound rules. A FlexConnect ACL is applied in the ingress direction or the egress direction as an entire set of rules, not on a per-rule basis.

FlexConnect ACLs support the implicit deny rule. In this way, FlexConnect ACLs work similarly to traditional ACLs. The implicit deny rule is an invisible rule that is applied to the end of an ACL. It ensures that traffic that is not explicitly matched by a previous rule in the ACL is denied by the ACL.
`,
  reference: [
    {
      title: "Cisco: Configuring FlexConnect ACLs: Restrictions for FlexConnect Access Control Lists",
      link: "https://www.cisco.com/c/en/us/td/docs/wireless/controller/8-1/config-guide/b_cg81/flexconnect_access_control_lists.html"
    }
  ]
},

{
  id: 46,
  category: "IP Services",
  questionType: "Single-select",
  question: `
You want to configure SSH for incoming VTY connections on a new router. The router is running a K9 IOS image but has not yet been configured with a host name, a domain name, or an RSA key pair. In addition, the VTY lines are not yet configured to accept incoming SSH connections.

You issue the <b>ip ssh time-out 60</b> command from global configuration mode to configure the router with a 60-second timeout.

Which of the following messages will you most likely receive? (Select the best answer.)
`,
  options: [
    "Please create RSA keys to enable SSH.",
    "Invalid input detected at '^' marker.",
    "Please define a domain-name first.",
    "Please enable SSH as a transport mode.",
    "Please define a hostname other than Router."
  ],
  correctAnswer: 0,
  explanation: `
You will most likely receive the <b>Please create RSA keys to enable SSH</b> message when you issue the <b>ip ssh time-out 60</b> command from global configuration mode. To enable Secure Shell (SSH) for virtual terminal (VTY) lines on a Cisco router, you should complete the following steps:

<ol>
  <li>Configure the router with a host name other than Router by issuing the <b>hostname</b> command.</li>
  <li>Configure the router with a domain name by issuing the <b>ip domain-name</b> command.</li>
  <li>Generate an RSA key pair for the router by issuing the <b>crypto key generate rsa</b> command.</li>
  <li>Configure the VTY lines to use SSH by issuing the <b>transport input ssh</b> command from line configuration mode.</li>
</ol>

SSH is often used as a secure replacement for Telnet to manage network devices. In order for SSH to be enabled on a Cisco device, the device must be running a K9 IOS image, which provides cryptographic functionality.

You will not receive the <b>Invalid input detected at '^' marker</b> message when you issue the <b>ip ssh time-out 60</b> command in this scenario. You would receive the <b>Invalid input detected at '^' marker</b> message if you were to mistype the <b>time-out</b> keyword or if you were to try to configure the SSH timeout with a value greater than 120 seconds. Although SSH is not yet enabled in this scenario, the router will accept the <b>ip ssh time-out 60</b> command as a valid configuration. The <b>ip ssh time-out 60</b> command would appear in the configuration if you were to issue the <b>show running-config</b> command.

You will not receive the <b>Please define a hostname other than Router</b> message when you issue the <b>ip ssh time-out 60</b> command in this scenario. However, because you have not configured the router with a host name other than the default name of Router, you would receive the <b>Please define a hostname other than Router</b> message if you were to issue the <b>crypto key generate rsa</b> command. To configure a router with a host name other than the default, you should issue the <b>hostname host-name</b> command from global configuration mode.

You will not receive the <b>Please define a domain-name first</b> message when you issue the <b>ip ssh time-out 60</b> command in this scenario. However, if you had configured the router with a valid host name but had not configured the router with a domain name, you would receive the <b>Please define a domain-name first</b> message if you were to issue the <b>crypto key generate rsa</b> command. In this scenario, you have configured neither the domain name nor the host name. To configure a router with a domain name, you should issue the <b>ip domain-name domain-name</b> command from global configuration mode.

You will not receive the <b>Please enable SSH as a transport mode</b> message when you issue the <b>ip ssh time-out 60</b> command in this scenario. The <b>Please enable SSH as a transport mode</b> message is not a warning message that is displayed on Cisco routers. You can issue the <b>transport input ssh</b> command to configure SSH as the transport mode for VTY lines.
`,
  reference: [
    {
      title: "Boson CCNA Curriculum 200-301",
      description: "Module 7: IP Services, SSH Configuration"
    },
    {
      title: "Cisco: Configure SSH on Routers and Switches: Set Up an IOS Router or Switch as SSH Client",
      link: "https://www.cisco.com/c/en/us/support/docs/security-vpn/ssh/116579-configure-ssh.html"
    }
  ]
},

{
  id: 669,
  category: "Network Access",
  questionType: "Single-select",
  question: `Which of the following commands should you issue to restore the LLDP hold timer configuration to its default value? (Select the best answer.)`,
  options: [
    "no lldp holdtime",
    "lldp holdtime 180",
    "lldp timer 120",
    "lldp holdtime 0"
  ],
  correctAnswer: 0,
  explanation: `
<b>Explanation:</b>
<br>
You should issue the <b>no lldp holdtime</b> command to restore the Link Layer Discovery Protocol (LLDP) hold timer configuration to its default value. LLDP is an Open Systems Interconnection (OSI) Layer 2 open-standard discovery protocol that is used to facilitate interoperability between Cisco devices and non-Cisco devices. Attributes that can be learned from neighboring devices contain Type, Length, Value (TLV) information including port description, system description, and management address. LLDP is disabled by default on Cisco switches.<br><br>
By default, a Cisco switch will retain LLDP information for 120 seconds when LLDP is enabled on an interface. This time interval is known as the LLDP holdtime. You can issue the <b>lldp holdtime seconds</b> command from global configuration mode to configure the LLDP holdtime to any integer value from 0 through 65535 seconds. Whenever a new LLDP advertisement is received, the hold timer is reset and the LLDP information is considered current. When the hold timer expires for a particular neighbor, the LLDP information regarding that neighbor is considered stale and is discarded. You can restore the hold timer to its default configuration value by issuing the <b>no lldp holdtime</b> command.<br><br>
You should not issue the <b>lldp holdtime 0</b> command to restore the LLDP hold timer configuration to its default value. Issuing the <b>lldp holdtime 0</b> command configures the hold timer to expire immediately; however, it will not restore the hold timer to its default configuration value. Likewise, you should not issue the <b>lldp holdtime 180</b> command to restore the LLDP hold timer configuration to its default value. Issuing the <b>lldp holdtime 180</b> command configures the hold timer to a value of 180 seconds, which is not the default value of 120 seconds.<br><br>
You should not issue the <b>lldp timer 120</b> command to restore the LLDP hold timer configuration to its default value. Issuing the <b>lldp timer 120</b> command configures the LLDP update frequency to 120 seconds; however, it will not restore the hold timer to its default configuration value. By default, a Cisco switch will send LLDP advertisements every 30 seconds when LLDP is enabled on an interface. These advertisements are used by neighboring devices to update the LLDP information learned about each neighbor. They are also used as keepalive messages to ensure that a discovered neighbor continues to be available on the network. You can issue the <b>lldp timer rate</b> command from global configuration mode to configure the frequency at which LLDP advertisements are sent by a switch. The default <b>rate</b> value is 30 seconds; however, the rate can be configured to any integer value from 5 through 65534 seconds.
`,
  reference: [
    {
      title: "CCNA 200-301 Official Cert Guide, Volume 2, Chapter 9",
      description: "Device Management Protocols, Configuring and Verifying LLDP"
    },
    {
      title: "Cisco: Configuring CDP: Default CDP Configuration",
      link: "https://www.cisco.com/c/en/us/td/docs/ios-xml/ios/cdp/configuration/xe-3s/cdp-xe-3s-book/cdp-config.html"
    },
    {
      title: "Cisco: Configuring LLDP, LLDP-MED, and Wired Location Service: Default LLDP Configuration",
      link: "https://www.cisco.com/c/en/us/support/docs/switches/catalyst-3750-series-switches/11386-42.html"
    }
  ]
},

{
  id: 483,
  category: "Network Access",
  questionType: "Single-select",
  question: `Which of the following Cisco lightweight AP modes sends captured traffic to an analyzer? (Select the best answer.)`,
  options: [
    "local",
    "FlexConnect",
    "sniffer",
    "bridge"
  ],
  correctAnswer: 2,
  explanation: `
<b>Explanation:</b>
<br>
A Cisco lightweight access point (AP) operating in sniffer mode sends captured traffic to an analyzer. A lightweight AP provides an interface for wireless clients to connect to the wireless local area network (WLAN) but requires a wireless LAN controller (WLC) for management functions. This is in contrast to an autonomous AP, which does not need a WLC. Sniffer mode allows a lightweight AP to capture wireless traffic, similar to the way a wired network sniffer behaves. When traffic is captured, a lightweight AP that is operating in sniffer mode will send the traffic to an analyzer, which is typically software that is installed on a PC or other host.<br><br>
A Cisco lightweight AP operating in local mode provides basic service sets (BSSs); it does not send captured traffic to an analyzer. A BSS is a closed group of wireless devices that are dependent on a fixed device. Before a wireless device can join the group, it must advertise its capabilities and obtain permission from the fixed device. A lightweight AP operating in local mode, which is the default, is capable of providing multiple BSSs on a single channel. In this mode, the AP can connect to a WLC and can provide client connectivity. In addition, an AP operating in local mode scans all wireless channels as a means of monitoring wireless quality and security. The connection between a lightweight AP and a WLC is created by using two tunnels established by the Control and Provisioning of Wireless Access Points (CAPWAP) tunneling protocol. Information sent between lightweight APs and the WLC is encapsulated in Internet Protocol (IP) packets. This process enables a lightweight AP and WLC to manage connectivity to the same WLAN yet be separated by both physical and logical means.<br><br>
A Cisco lightweight AP operating in FlexConnect mode enables a failsafe for the lightweight AP if its connection to the WLC by way of CAPWAP tunnels goes down; it does not send captured traffic to an analyzer. When configured, FlexConnect mode enables a lightweight AP to switch traffic between a given Service Set Identifier (SSID) and a given virtual local area network (VLAN).<br><br>
A Cisco lightweight AP operating in bridge mode enables a lightweight AP to act as a dedicated connection between two networks; it does not send captured traffic to an analyzer. Lightweight APs operating in bridge mode can connect to other networks in either a point-to-point or a point-to-multipoint fashion. When multiple APs are configured in bridge mode, the collection of lightweight APs can be used to form a mesh network.
`,
  reference: [
    {
      title: "CCNA 200-301 Official Cert Guide, Volume 1, Chapter 27",
      description: "Analyzing Cisco Wireless Architectures, Cisco AP Modes"
    }
  ]
},

{
  id: 698,
  category: "Network Access",
  questionType: "Single-select",
  question: `Which of the following WLC interfaces controls all Layer 3 communications between a WLC and a lightweight AP? (Select the best answer.)`,
  options: [
    "the management interface",
    "the service port interface",
    "the AP-manager interface",
    "the virtual interface",
    "a dynamic interface"
  ],
  correctAnswer: 2,
  explanation: `
The AP-manager interface on a wireless LAN controller (WLC) controls all Layer 3 communications between a WLC and a lightweight access point (AP). A WLC can contain up to four static interfaces: the management interface, the AP-manager interface, the virtual interface, and the service port interface. The AP-manager interface contains the Internet Protocol (IP) address that is used as the source IP address by which the lightweight APs communicate with the WLC. Because the AP-manager interface communicates with the lightweight APs on the wireless network, the IP address assigned to the AP-manager interface should be unique on the network. After the interface has been configured, the WLC uses the AP-manager interface to listen for Layer 3 Lightweight Access Point Protocol (LWAPP) communications.

The management interface is used for in-band management information. This interface is used for all Layer 2 LWAPP communications between the controller and the lightweight APs. In addition, the management interface is used to communicate with other WLCs on the wireless network.

The service port interface is used for maintenance purposes on a WLC. This interface is a physical interface on the WLC that can be used to recover the WLC in the event that the WLC fails. The service port interface is the only interface that is available while the WLC is booting.

The virtual interface can be used to provide a specific IP address that is the same across multiple controllers when wireless clients roam among the controllers. This enables seamless roaming among the controllers. The virtual interface is also used in situations where web authorization has been enabled for clients; the user is redirected to the IP address of the virtual interface when the user opens a web browser. In addition, if Dynamic Host Configuration Protocol (DHCP) relay has been enabled on the controller, the virtual interface can be used as the DHCP server address on wireless clients.

In addition to the four static interfaces, a WLC can contain up to 512 dynamic interfaces. Dynamic interfaces are user-defined and are typically used for wireless client data. The dynamic interfaces function similarly to virtual local area networks (VLANs). For example, you can create a dynamic interface to segment traffic on the WLC.
`,
  reference: [
    {
      title: "CCNA 200-301 Official Cert Guide, Volume 1, Chapter 29",
      description: "Building a Wireless LAN, Accessing a Cisco WLC"
    },
    {
      title: "Cisco: Configuring the AP-Manager Interface: AP-Manager Interface",
      link: "https://www.cisco.com/c/en/us/support/docs/wireless/5500-series-wireless-controllers/200642-Config-WLC-AP-Manager.html"
    }
  ]
},

{
  id: 34,
  category: "IP Connectivity",
  questionType: "Multi-select",
  question: `Which of the following statements are true regarding HSRP? (Select 2 choices.)`,
  options: [
    "In an HSRP group, only one virtual IP address and one virtual MAC address is used.",
    "One router is elected as the active router, and another router is elected as the standby router.",
    "One router is elected as the master router, and all other routers are placed in the backup state.",
    "In an HSRP group, only one virtual IP address is used but multiple virtual MAC addresses are used.",
    "All routers in an HSRP group can participate by forwarding a portion of the traffic."
  ],
  correctAnswer: [0, 1],
  explanation: `
The following statements are true regarding Hot Standby Router Protocol (HSRP):

<ul>
<li>One router is elected as the active router, and another router is elected as the standby router.</li>
<li>In an HSRP group, only one virtual IP address and one virtual MAC address is used.</li>
</ul>
HSRP is a Cisco-proprietary First-Hop Redundancy Protocol (FHRP). Based on priority value, HSRP elects a single active router and a standby router. The active router is the router with the highest priority; it forwards packets, responds to ARP requests with a virtual MAC address, and can be the only router that is explicitly configured with the virtual IP address.

The standby router is the router with the second-highest priority. If multiple HSRP routers have the same priority, the router with the highest IP address will be elected as the active router. The router with the second-highest IP address will be elected as the standby router, which will assume the role of the active router if the active router fails. To participate in the active and standby router election process, each HSRP router must be a member of the same group. An HSRP group is identified by a group number from 0 through 255. The default HSRP group value is 0.

The election of a master router and the placement of all other routers in the group into the backup state are characteristics of Virtual Router Redundancy Protocol (VRRP). Like HSRP, VRRP provides router redundancy and only one router is active at any time. If the master router becomes unavailable, one of the backup routers will become the master router.

Routers in a single HSRP group cannot forward a portion of the traffic in a load-balancing fashion. You can provide load balancing by configuring multiple HSRP groups or by configuring Gateway Load Balancing Protocol (GLBP). GLBP elects an active virtual gateway (AVG) and up to four primary active virtual forwarders (AVFs). The AVG in a GLBP group assigns a virtual MAC address to the AVFs. When the AVG receives Address Resolution Protocol (ARP) requests that are sent to the virtual IP address for the GLBP group, the AVG responds with different virtual MAC addresses. This provides load balancing, because each of the primary AVFs will participate by forwarding a portion of the traffic sent to the virtual IP address.
`,
  reference: [
    {
      title: "Boson CCNA Curriculum 200-301, Module 6: IP Routing",
      description: "Understanding HSRP"
    },
    {
      title: "Cisco: Configuring HSRP and VRRP: Understanding HSRP",
      link: "https://www.cisco.com/c/en/us/support/docs/ip/hot-standby-router-protocol-hsrp/10518-5.html"
    }
  ]
},

{
  id: 426,
  category: "Security Fundamentals",
  questionType: "Single-select",
  question: `
<img src="/images/426-dai-topology.png" alt="DAI Topology" style="max-width: 100%; height: auto; margin: 18px 0;" />
You are configuring security for the network shown in the topology diagram. You want to configure DAI on Switch1.

Which port or ports on the switch should you configure as trusted? (Select the best answer.)
`,
  options: [
    "ports Fa1/1, Fa1/2, Fa1/3, and Fa1/4",
    "none of the ports",
    "all of the ports",
    "port Fa2/1"
  ],
  correctAnswer: 3,
  explanation: `
You should configure port Fa2/1 on Switch1 as a trusted port when you are configuring Dynamic ARP Inspection (DAI) on the switch. DAI can be used to help mitigate Address Resolution Protocol (ARP) poisoning attacks, which are also known as ARP spoofing attacks. In an ARP poisoning attack, an attacker intercepts an ARP request packet and replies with the attacker's own Media Access Control (MAC) address, rather than the address of the intended recipient. Subsequently, the attacker can intercept any traffic intended for the original recipient.

DAI can be configured on individual ports or on entire virtual local area networks (VLANs). DAI can be enabled on a single VLAN or on multiple VLANs. To enable DAI, you should use the ip arp inspection vlan global configuration command. The syntax of the ip arp inspection vlan command is ip arp inspection vlan <vlan-ID | vlan-range>. A range of VLANs can be entered by using a comma-separated list or a dash-separated pair of VLAN numbers indicating the range of VLANs to include. For example, each of the following commands enables DAI on VLANs 2 through 4: ip arp inspection vlan 2,3,4 and ip arp inspection vlan 2-4. Configuring DAI on each VLAN ensures that traffic sent from each VLAN is inspected. In addition, each port is either configured as trusted or not. Issuing the ip arp inspection command in interface configuration mode enables DAI on an interface by default configures the interface as an untrusted port.

When DAI is configured on a switch, ports are labeled as either trusted or untrusted. An ARP packet that is received on a trusted port is not inspected unless an ARP packet received on an untrusted port is inspected. If an ARP reply received on an untrusted port is not on a trusted entry on the switch, the packet will be dropped. By default, all ports are untrusted when DAI is configured. However, interfaces that connect to other switches, such as the Fa2/1 interface, should be configured as trusted by using the ip arp inspection trust command. When DAI is configured for an entire VLAN, you can command the default configuration for each port by issuing the ip arp inspection trust command in interface configuration mode.

Ports Fa1/1, Fa1/2, Fa1/3, and Fa1/4 should not be configured as trusted ports. Because they are connected to end user computers, they should be configured as untrusted. If port Fa2/1 is configured as an untrusted port, ARP replies that originate from other switches will not be permitted out trusted ports. Only ARP replies which originate from the DHCP server will be permitted out untrusted ports.
`,
  reference: [
    {
      title: "Boson CCNA Curriculum 200-301, Module 8: Security Fundamentals",
      description: "Dynamic ARP Inspection"
    },
    {
      title: "CCNA 200-301 Official Cert Guide, Volume 2, Chapter 8",
      description: "DHCP Snooping and ARP Inspection, Dynamic ARP Inspection Configuration"
    },
    {
      title: "Cisco: Configuring Dynamic ARP Inspection: Interface Trust States and Network Security",
      link: "https://www.cisco.com/c/en/us/support/docs/ip/dhcp/67967-dhcp-dai.html"
    }
  ]
},

{
  id: 464,
  category: "Automation and Programmability",
  questionType: "Single-select",
  question: `Which of the following Cisco management solutions supports Cisco SDA? (Select the best answer.)`,
  options: [
    "Cisco PI",
    "Cisco IOS 15",
    "Cisco Network Assistant",
    "Cisco DNA Center"
  ],
  correctAnswer: 3,
  explanation: `
<b>Explanation:</b>
<br>
Of the available choices, Cisco Digital Network Architecture (DNA) Center is the Cisco management solution that supports Cisco Software-Defined Access (SDA). Cisco SDA is a Cisco-developed means of building local area networks (LANs) by using policies and automation. Cisco DNA Center, which abstracts the complexity of network configuration by implementing a centralized controller and graphical user interface (GUI), also supports many of the same traditional campus device management features that are supported by other Cisco management solutions. Administrators typically interact with Cisco DNA by using a browser-based GUI. Cisco DNA Center uses the Representational State Transfer (REST) API to natively communicate with Cisco devices. To communicate with third-party devices, Cisco DNA Center relies on software development kits (SDKs).

Cisco IOS 15 is not built specifically to support the Cisco SDA. Cisco IOS is a network device operating system (OS) that is used to directly configure, manage, and troubleshoot a single device. Administrators typically interact with Cisco IOS by using a command-line interface (CLI). Access to the CLI can be gained by connecting to a device's console port, by connecting to a Telnet session, or by connecting to a Secure Shell (SSH) session, depending on how the device is configured.

Cisco Network Assistant is not built specifically to support the Cisco SDA. Cisco Network Assistant is a free Java-based desktop application that enables a LAN administrator to perform network operations, diagnose problems, and interact with network devices by using a GUI. A typical Cisco Network Assistant installation supports the management of up to 80 devices. Cisco Network Assistant predates Cisco SDA and is therefore not specifically built to support Cisco SDA.

Cisco Prime Infrastructure (PI) is not built specifically to support the Cisco SDA. Cisco PI is a traditional enterprise Cisco management platform that relies on a browser-based GUI to enable administrators to perform operations on the network, diagnose problems with the network, and interact with devices on the network.
`,
  reference: [
    {
      title: "Boson CCNA Curriculum 200-301, Module 9",
      description: "Automation and Programming, Cisco DNA Center"
    },
    {
      title: "CCNA 200-301 Official Cert Guide, Volume 2, Chapter 17",
      description: "Cisco Software-Defined Access (SDA), DNA Center as a Network Management Platform"
    }
  ]
}
];
