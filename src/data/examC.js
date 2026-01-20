// Exam C Questions - CCNA 200-301
// Add your questions here following the template

export const examCQuestions = [
  // TODO: Add Exam C questions here
  {
  id: 601,
  category: "Network Fundamentals",
  questionType: "Multi-select",
  question: `Which of the following statements are true regarding physical connections in the Cisco ACI architecture? (Select 2 choices.)`,
  options: [
    "Each spine node must connect to every leaf node.",
    "Each leaf node must connect to every spine node.",
    "Leaf nodes must be fully meshed.",
    "An APIC must connect to at least one spine node.",
    "Spine nodes must be fully meshed."
  ],
  correctAnswer: [0, 1],
  explanation: `
<b>Explanation:</b><br>
In the Cisco Application Centric Infrastructure (ACI), each leaf node must connect to every spine node and each spine node must connect to every leaf node. Cisco ACI is a data center technology that uses switches, categorized as spine and leaf nodes, to dynamically implement network application policies in response to application-level requirements. Network application policies are defined on a Cisco Application Policy Infrastructure Controller (APIC) and are implemented by the spine and leaf nodes.<br><br>
The spine and leaf nodes create a scalable network fabric that is optimized for east-west data transfer, which in a data center is typically traffic between an application server and its supporting data services, such as database or file servers. Each spine node requires a connection to each leaf node; however, spine nodes do not interconnect nor do leaf nodes interconnect. Despite its lack of fully meshed connections between spine nodes or between leaf nodes, this physical topology enables nonlocal traffic to pass from any ingress leaf interface to any egress leaf interface through a single, dynamically selected spine node. By contrast, local traffic is passed directly from an ingress interface on a leaf node to the appropriate egress interface on the same leaf node.<br><br>
Because a spine node has a connection to every leaf node, the scalability of the fabric is limited by the number of ports on the spine node, not by the number of ports on the leaf node. For example, if additional access ports are needed, a new leaf node can be added to the infrastructure as long as there is a sufficient number of ports remaining on the existing spine nodes to support the new leaf node. In addition, redundant connections between a spine and leaf pair are unnecessary because the nature of the topology ensures that each leaf has multiple connections to the network fabric. Therefore, each spine node requires only a single connection to each leaf node.<br><br>
Redundancy is also provided by the presence of multiple APICs, which are typically deployed as a cluster of three controllers. APICs are not directly involved in forwarding traffic and are therefore not required to connect to every spine or leaf node. Instead, the APIC cluster is connected to one or more leaf nodes in much the same manner that other endpoint groups (EPGs), such as application servers, are connected. Because APICs are not directly involved in forwarding traffic, the failure of an APIC does not affect the ability of the fabric to forward traffic.
`,
  reference: [
    {
      title: "Boson CCNA Curriculum 200-301, Module 1",
      description: "Network Fundamentals, Spine-Leaf Topology"
    },
    {
      title: "CCNA 200-301 Official Cert Guide, Volume 2, Chapter 16",
      description: "Introduction to Controller-Based Networking, ACI Physical Design: Spine and Leaf"
    },
    {
      title: "Cisco: Cisco Application Centric Infrastructure: Cisco Application Centric Infrastructure Fabric Overview",
      link: "https://www.cisco.com/c/en/us/solutions/data-center-virtualization/application-centric-infrastructure/index.html"
    }
  ]
},

{
  id: 623,
  category: "Network Fundamentals",
  questionType: "Single-select",
  question: `You are using Wireshark to monitor traffic on a local LAN segment. You notice that a large number of frames originating from a particular host contain a destination MAC address of FF-FF-FF-FF-FF-FF.

What kind of address is the destination address you have noticed in these frames? (Select the best answer.)`,
  options: [
    "broadcast",
    "loopback",
    "unicast",
    "multicast"
  ],
  correctAnswer: 0,
  explanation: `
<b>Explanation:</b><br>
<p>A Media Access Control (MAC) address of FF-FF-FF-FF-FF-FF is an Ethernet broadcast address. A MAC address, also known as a physical address, is a 48-bit address that is permanently encoded on a network interface card (NIC). Each NIC has a specific MAC address and will ignore frames that are not intended for that address, the network broadcast address, or a relevant group address, Ethernet frames use unicast addresses to send data to a single device, and multicast addresses are used to simultaneously send the same data to a group of devices.</p><br><br>
<p>MAC addresses are written in hexadecimal format. With MAC addresses, numbers have a lower value than letters and the hexadecimal value A is lower than the hexadecimal value F. A MAC address is composed of six 8-bit octets for a total of 6 bytes of data in the entire address, as shown in the following diagram:</p><br>
<p><img src="/images/623-mac-octets.png" alt="MAC address octets" style="max-width:100%;margin:12px 0;"></p><br>
<br>
<p>The most significant bytes are at the beginning, or leftmost octet, and are transmitted first. Bytes decrease in significance as you move to the right through the address to the least significant octet appearing at the end, or rightmost octet. The first three octets represent the organizationally unique identifier (OUI), which is assigned by the Institute of Electrical and Electronics Engineers (IEEE) to identify the manufacturer of the device, and the last three octets make up the unique NIC-specific identifier assigned to the device by the manufacturer.</p><br>
<p>The significance of each octet follows the same rule of the overall address: the most significant bit is on the left, and the least significant bit is on the right. However, when transmitted, a bit defines form a byte in that the least significant bit of a byte is transmitted first. The two least significant bits of the most significant byte of a MAC address are used as indicator flags; these two bits are bit 2 and bit 1 in the example below:</p><br>
<p><img src="/images/623-mac-address-bits.png" alt="MAC address bits" style="max-width:100%;margin:12px 0;"></p><br>
<p>The least significant bit, or bit 1, of the most significant byte is where a MAC address is designated as a unicast address or a multicast address; a 0 equates to unicast, and a 1 equates to multicast. The second least significant bit, or bit 2, is used to designate whether the MAC address is globally administered by the IEEE and carries an OUI or whether the MAC address is locally administered; a 0 indicates the presence of an OUI, and a 1 indicates a locally administered MAC address.</p><br>
<p>Several MAC addresses have been given special definitions by the IEEE. For example, the FF-FF-FF-FF-FF-FF address is reserved for use as the Ethernet broadcast address and the CF-00-00-00-00-00 address is reserved for Ethernet loopback testing. In addition, the Ethernet multicast range from 01-00-5E-00-00-00 through 01-00-5E-7F-FF-FF has been allocated for IP multicast use.</p>
`,
  reference: [
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
  id: 501,
  category: "Network Access",
  questionType: "Single-select",
  question: `Which of the following commands are you most likely to issue in order to view general IP addressing information for a specific Cisco AP named MyLAP? (Select the best answer.)`,
  options: [
    "show ap config global",
    "show ap config general MyLAP",
    "show ap core-dump MyLAP",
    "show ap crash-file"
  ],
  correctAnswer: 1,
  explanation: `
<b>Explanation:</b><br>
Of the available choices, you are most likely to issue the <b>show ap config general MyLAP</b> command in order to view general Internet Protocol (IP) addressing information for a specific Cisco access point (AP) named MyLAP. Similar to a Cisco wired router or switch, you can administer a Cisco AP or wireless LAN controller (WLC) by using a command-line interface (CLI). However, the CLI interface does not support the same Cisco IOS command set as a Cisco router or switch. You can configure a Cisco WLC or a Cisco AP either by using the built-in graphical user interface (GUI) in a browser or by using the CLI.<br><br>
Issuing the <b>show ap config general cisco-ap</b> command, where <b>cisco-ap</b> is the host name of the Cisco AP that is configured with the information you want to display, produces general AP configuration output. This output includes information such as the AP’s IP address, the default gateway IP address, and the Domain Name System (DNS) server address. In addition, the output includes the subnet mask that is configured on the AP. The following is sample output from a Cisco AP:<br>
<pre>
ap_console>show ap config general MyLAP
Cisco AP Identifier.......................... 77
Cisco AP Name................................ MyLAP
Country code................................. US
<output omitted>
Switch Port Number........................... 1
MAC Address................................. 12:34:56:ab:cd:ef
IP Address Configuration..................... DHCP
IP Address................................... 192.168.10.15
IP NetMask................................... 255.255.255.0
Gateway IP addr.............................. 192.168.10.1
<output omitted>
DNS server IP................................ 192.168.10.2
</pre>
You are not likely to issue the <b>show ap config global</b> command in this scenario. The <b>show ap config global</b> command displays global Syslog server settings for every AP that is joined to the Cisco WLC. The following is sample output from the <b>show ap config global</b> command:<br>
<pre>
(Cisco Controller)>show ap config global

AP global system logging host............ 192.168.10.111
AP global system logging level........... informational
AP Telnet Settings....................... Globally Configured (Disabled)
AP SSH Settings.......................... Globally Configured (Disabled)
Diminished TX power Settings............. Globally Configured (Disable)
AP Broken Antenna Failure Detection Status..... Disabled
</pre>
You are not likely to issue the <b>show ap core-dump MyLAP</b> command in this scenario. The <b>show ap core-dump cisco-ap</b> command displays the memory core dump for the lightweight AP that is specified as the <b>cisco-ap</b> parameter. Core memory dumps can be large and are typically used for troubleshooting purposes when hardware failures occur.<br><br>
You are not likely to issue the <b>show ap crash-file</b> command in this scenario. The <b>show ap crash-file</b> command displays a list of crash dump files and radio core dump files that have been generated by lightweight APs. This command is useful if you need to review the output of a crash file or core dump file for a specific AP.
`,
  reference: [
    {
      title: "Cisco: Cisco Wireless Controller Command Reference: show ap config general",
      link: "https://www.cisco.com/c/en/us/td/docs/wireless/controller/9-1/command/reference/b_cr91/b_cr91_chap13.html"
    }
  ]
},

{
  id: 617,
  category: "Network Fundamentals",
  questionType: "Single-select",
  question: `Which of the following Application layer protocols uses TCP for reliable, connection-oriented data transfer? (Select the best answer.)`,
  options: [
    "DHCP",
    "TFTP",
    "SNMP",
    "FTP"
  ],
  correctAnswer: 3,
  explanation: `
<b>Explanation:</b><br>
File Transfer Protocol (FTP) uses Transmission Control Protocol (TCP) for reliable, connection-oriented data transfer. TCP is a Transport layer protocol that uses sequencing and error-checking to ensure that transmitted data can be easily reordered if packets arrive out of sequence and can be retransmitted if any packets are lost. FTP, which is used to transfer files over a network, uses TCP ports 20 and 21. Other common TCP protocols are Hypertext Transfer Protocol (HTTP), which is used to transfer webpages over the Internet, Simple Mail Transfer Protocol (SMTP), which is used to send email messages, Post Office Protocol 3 (POP3), which is used to retrieve email messages, and Telnet, which is used to manage network devices.<br><br>
Dynamic Host Configuration Protocol (DHCP), Simple Network Management Protocol (SNMP), and Trivial FTP (TFTP) use User Datagram Protocol (UDP) and not TCP. UDP is a Transport layer protocol that is used for unreliable, connectionless datagram transfer. Because UDP does not use sequence numbers or establish synchronized connections, transmitted datagrams can appear out of sequence or can be dropped without notice. DHCP is used to assign Internet Protocol (IP) addressing information to clients. TFTP is used to transfer files over a network. Other common Application layer protocols that use UDP include Network Time Protocol (NTP), which is used to coordinate time on a network, and Remote Authentication Dial-In User Service (RADIUS), which is used to authenticate users.
`,
  reference: [
    {
      title: "Boson CCNA Curriculum 200-301, Module 2",
      description: "Network Addressing and Transport, TCP"
    },
    {
      title: "CCNA 200-301 Official Cert Guide, Volume 2, Chapter 1",
      description: "Introduction to TCP/IP Transport and Applications, Connection Establishment and Termination"
    },
    {
      title: "IANA: Service Name and Transport Protocol Port Number Registry",
      link: "https://www.iana.org/assignments/service-names-port-numbers/service-names-port-numbers.xhtml"
    }
  ]
},

{
  id: 429,
  category: "Security Fundamentals",
  questionType: "Single-select",
  question: `You issue the <b>show vlan brief</b> command on Switch1 and receive the following partial output:
<pre>
Switch1#show vlan brief
VLAN Name                             Status    Ports
---- -------------------------------- --------- -------------------------------
1    default                          active    Gi0/1, Gi0/2
11   VLAN0011                         active    Fa0/1, Fa0/2, Fa0/3, Fa0/4
                                                 Fa0/5, Fa0/6, Fa0/7, Fa0/8
12   VLAN0012                         active    Fa0/11, Fa0/12, Fa0/13, Fa0/14
                                                 Fa0/15, Fa0/16, Fa0/17, Fa0/18
14   VLAN0014                         active    Fa0/19, Fa0/20, Fa0/21, Fa0/22,
                                                 Fa0/23, Fa0/24
&lt;output omitted&gt;
</pre>
You issue the following commands on Switch1:
<pre>
Switch1#configure terminal
Switch1(config)#ip arp inspection vlan 11-12,14
Switch1(config)#interface range gigabitethernet 0/1 - 2
Switch1(config-if-range)#ip arp inspection trust
Switch1(config-if-range)#switchport access vlan 11
Switch1(config-if-range)#switchport mode access
</pre>
Which of the following statements is true? (Select the best answer.)`,
  options: [
    "Only VLAN 11 ports are trusted ports.",
    "All ports on the switch are untrusted ports.",
    "All ports on the switch are trusted ports.",
    "Only GigabitEthernet 0/1 and GigabitEthernet 0/2 ports are untrusted ports.",
    "Only GigabitEthernet 0/1 and GigabitEthernet 0/2 are trusted ports."
  ],
  correctAnswer: 4,
  explanation: `
<b>Explanation:</b><br>
Only GigabitEthernet 0/1 and GigabitEthernet 0/2 are trusted ports in this scenario because the <b>ip arp inspection trust</b> command has been issued on those interfaces. An interface level Dynamic ARP Inspection (DAI) configuration overrides a global virtual local area network (VLAN) DAI configuration, even if the port that is configured with the interface level command is assigned to a VLAN after the interface level command has been issued.
<br><br>
By default, a port is configured as an untrusted port when DAI is enabled on that port. Therefore, configuring VLANs 11, 12, and 14 with DAI in this scenario ensures that any port operating in those VLANs is automatically an untrusted port. However, when DAI is configured for an entire VLAN, you can override the default configuration for a given port by issuing the <b>ip arp inspection trust</b> command in interface configuration mode. In this scenario, the <b>ip arp inspection vlan 11-12,14</b> command configures DAI globally on VLANs 11, 12, and 14. The <b>ip arp inspection trust</b> command overrides the global configuration on the GigabitEthernet 0/1 and GigabitEthernet 0/2 ports.
<br><br>
DAI can be enabled on a single VLAN or on multiple VLANs. To enable DAI, you should use the <b>ip arp inspection vlan</b> global configuration command. The syntax of the ip arp inspection vlan command is <b>ip arp inspection vlan &lt;vlan-ID | vlan-range&gt;</b>. A range of VLANs can be entered by using a comma-separated list and/or a dash-separated pair of VLAN numbers indicating the range of VLANs to include. For example, each of the following commands enables DAI on VLANs 2 through 4: <b>ip arp inspection vlan 2,3,4</b> and <b>ip arp inspection vlan 2-4</b>. Configuring DAI on each VLAN ensures that traffic sent from each host is inspected. In addition, each port is by default an untrusted port.
`,
  reference: [
    {
      title: "Boson CCNA Curriculum 200-301, Module 8: Security Fundamentals",
      description: "DAI"
    },
    {
      title: "CCNA 200-301 Official Cert Guide, Volume 2, Chapter 8",
      description: "DHCP Snooping and ARP Inspection, Dynamic ARP Inspection Configuration"
    }
  ]
},

{
  id: 5,
  category: "IP Connectivity",
  questionType: "Single-select",
  question: `You administer a router that contains five routes to the same network: a static route, a RIPv2 route, an IGRP route, an OSPF route, and an internal EIGRP route. The default ADs are used. The link to the static route has just failed.

Which of the following routes will be used? (Select the best answer.)`,
  options: [
    "both the RIPv2 route and the EIGRP route",
    "the EIGRP route",
    "the RIPv2 route",
    "the OSPF route",
    "the IGRP route"
  ],
  correctAnswer: 1,
  explanation: `
<b>Explanation:</b><br>
The Enhanced Interior Gateway Routing Protocol (EIGRP) route will be used when the link to the static route goes down. When multiple routes to a network exist and each route uses a different routing protocol, a router prefers the routing protocol with the lowest administrative distance (AD). The following list contains the most commonly used ADs:
<br>
<table border="1" cellpadding="3" cellspacing="0" style="border-collapse:collapse;">
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
<br>
In this scenario, the static route has the lowest AD. Therefore, the static route is used instead of the other routes. When the static route fails, the EIGRP route is preferred, because internal EIGRP has an AD of 90.<br><br>
If the EIGRP route were to fail, the Interior Gateway Routing Protocol (IGRP) route would be preferred, because IGRP has an AD of 100. If the IGRP route were also to fail, the Open Shortest Path First (OSPF) route would be preferred, because OSPF has an AD of 110. The Routing Information Protocol version 2 (RIPv2) route would not be used unless all of the other links were to fail, because RIPv2 has an AD of 120.<br><br>
ADs for a routing protocol can be manually configured by issuing the <b>distance</b> command in router configuration mode. For example, to change the AD of Routing Information Protocol (RIP) from 120 to 80, you should issue the following commands:
<pre>
RouterA(config)#router rip
RouterA(config-router)#distance 80
</pre>
You can view the AD of the best route to a network by issuing the <b>show ip route</b> command. The AD is the first number inside the brackets in the output. For example, the following router output shows an OSPF route with an AD of 160:
<pre>
Router#show ip route
&lt;output omitted&gt;
Gateway of last resort is 10.19.54.20 to network 10.140.0.0

O E2 172.150.0.0/16 [160/5] via 10.19.54.6, 0:01:00, Ethernet2
</pre>
The number 5 in the brackets above is the OSPF metric, which is based on cost. OSPF calculates cost based on the bandwidth of an interface: the higher the bandwidth, the lower the cost. When two OSPF paths exist to the same destination, the router will choose the OSPF path with the lowest cost.
`,
  reference: [
    {
      title: "Boson CCNA Curriculum 200-301, Module 6: IP Routing",
      description: "Understanding AD"
    },
    {
      title: "Cisco: What Is Administrative Distance?",
      link: "https://www.cisco.com/c/en/us/support/docs/ip/enhanced-interior-gateway-routing-protocol-eigrp/8237-46.html"
    }
  ]
},

{
  id: 72,
  category: "IP Connectivity",
  questionType: "Matching",
  question: `Match each routing protocol to the metric it uses to determine the best path to a destination network.`,
  matchingPairs: {
    terms: [
      { id: "t1", text: "EIGRP" },
      { id: "t2", text: "IS-IS" },
      { id: "t3", text: "OSPF" },
      { id: "t4", text: "RIP" }
    ],
    definitions: [
      { id: "d1", text: "cost", correctMatch: "t2" },
      { id: "d2", text: "hop count", correctMatch: "t4" },
      { id: "d3", text: "cost", correctMatch: "t3" },
      { id: "d4", text: "bandwidth and delay", correctMatch: "t1" }
    ]
  },
  correctAnswer: {
    t1: "d4",
    t2: "d1",
    t3: "d3",
    t4: "d2"
  },
  explanation: `
By default, Enhanced Interior Gateway Routing Protocol (EIGRP) uses bandwidth and delay to calculate the EIGRP composite metric, which is used to determine the best path to a destination network. Bandwidth refers to the data throughput of a link. Delay refers to the length of time required to send a packet to a destination.

EIGRP can also use load and reliability as components of the composite metric, but these are not used by default. Load refers to the amount of data activity over a link. Reliability refers to the bit-error rate of a link.

Open Shortest Path First (OSPF) and Intermediate System-to-Intermediate System (IS-IS) use cost to calculate the best path to a destination network. By default, OSPF and IS-IS calculate the cost based on bandwidth. However, cost can be configured by using any value that an administrator desires, such as the monetary cost of using a link.

Routing Information Protocol version 1 (RIPv1) and RIPv2 use hop count to calculate the best path to a destination network. Hop count refers to the number of routers a packet will traverse from source to destination. However, RIP has a hop-count limitation of 15 hops; any route more than 15 hops away is considered to be unreachable. With a defined maximum metric, a routing protocol can mitigate routing loops caused by invalid routing updates.
`,
  reference: [
    {
      title: "CCNA 200-301 Official Cert Guide, Volume 1, Chapter 19",
      description: "Understanding OSPF Concepts, Metrics"
    }
  ]
},

{
  id: 655,
  category: "Network Access",
  questionType: "Single-select",
  question: `You are configuring a new LAN for a small company. The infrastructure will be connected with three new Cisco Catalyst 2950 switches. VTP will be enabled on the switches when setup is complete.

What is the default VTP mode on the new switches? (Select the best answer.)`,
  options: [
    "learning mode",
    "server mode",
    "transparent mode",
    "client mode"
  ],
  correctAnswer: 1,
  explanation: `
<b>Explanation:</b><br>
When a Cisco Catalyst 2950 switch is powered up with factory settings, the default VLAN Trunking Protocol (VTP) mode is server mode. Server mode is required on at least one switch in a network when VTP is being implemented. Server mode allows the user to create, modify, or delete any virtual local area network (VLAN) in the VTP domain. These changes are then advertised to other switches participating in the same VTP domain. You can issue the <b>show vtp status</b> command in privileged EXEC mode to view the VTP operating mode that is configured on a switch. For example, the following command output indicates that SwitchA is operating in server mode:<br>
<pre>
SwitchA#show vtp status
VTP Version             : 2
Configuration Revision  : 4
Maximum VLANs supported locally    : 64
Number of existing VLANs   : 9

VTP Operating Mode      : Server
VTP Domain Name         : Boson
VTP Pruning Mode        : Disabled
VTP2 Mode               : Disabled
VTP Traps Generation    : Disabled
MD5 digest              : 0xEE 0xB3 0xDC 0x9F 0xE2 0xE0 0x25
Configuration last modified by 0.0.0.0 at 3-1-2012 04:55:57
Local updater ID is 0.0.0.0 (no valid interface found)
</pre>
Switches that operate in client mode store the same VTP information as switches that are in server mode; they receive the advertisements that are sent out by the VTP server. In client mode, however, switches are unable to modify any of the VTP information.
<br><br>
In transparent mode, switches forward the VTP advertisements they receive from other switches, but they do not act upon that information. Transparent-mode switches do not advertise their own VLAN information, nor do they participate in the VLANs advertised by the other switches. Changes to VLAN configurations on a switch operating in transparent mode only affect that switch and are not forwarded to other switches in the VTP domain.
<br><br>
Learning is a switch state in which frames passed through a switch are examined and their corresponding Media Access Control (MAC) addresses are learned. After learning the MAC addresses, switches are able to quickly forward frames to the correct port without having to broadcast the frame to the entire switch. Learning is not a valid mode for VTP configuration.
`,
  reference: [
    {
      title: "Boson CCNA Curriculum 200-301, Module 5: Switching and Network Access",
      description: "VTP Modes"
    },
    {
      title: "CCNA 200-301 Official Cert Guide, Volume 1, Chapter 8",
      description: "Implementing Ethernet Virtual LANs, VLAN Trunking Protocol"
    },
    {
      title: "Cisco: Understanding VLAN Trunk Protocol (VTP)",
      link: "https://www.cisco.com/c/en/us/support/docs/lan-switching/vtp/10558-21.html"
    }
  ]
},

{
  id: 445,
  category: "Security Fundamentals",
  questionType: "Single-select",
  question: `Which of the following best describes accounting? (Select the best answer.)`,
  options: [
    "the process of verifying the level of access configured for a user",
    "the process of establishing a user's accounts upon hire",
    "the process of verifying a user's identity",
    "the process of recording the use of resources"
  ],
  correctAnswer: 3,
  explanation: `
<b>Explanation:</b><br>
Accounting is the process of recording the use of resources. The following list defines the three phases of the Authentication, Authorization, and Accounting (AAA) process:
<ul>
<li>Authentication – the process of verifying a user's identity</li>
<li>Authorization – the process of verifying the level of access configured for a user</li>
<li>Accounting – the process of recording the use of resources</li>
</ul>
AAA systems manage user activity. AAA systems are typically more sophisticated than simple password authentication systems, such as a local password database. Two common AAA systems are Remote Authentication Dial-In User Server (RADIUS) and Terminal Access Controller Access-Control System Plus (TACACS+).

RADIUS is a standard AAA protocol created by the Internet Engineering Task Force (IETF). Compared to TACACS+, RADIUS has several limitations. For example, RADIUS encrypts only the password in Access-Request packets; it does not encrypt the entire contents of the packet like TACACS+ does.

TACACS+ is a Cisco-proprietary protocol used during AAA operations. TACACS+ provides more granular and flexible control over user access privileges. For example, the AAA operations are separated by TACACS+, whereas RADIUS combines the authentication and authorization services into a single function. Because TACACS+ separates these functions, administrators have more control over access to configuration commands. In addition, TACACS+ encrypts the entire contents of packets, thus providing additional security.
`,
  reference: [
    {
      title: "Boson CCNA Curriculum 200-301, Module 8: Security Fundamentals",
      description: "AAA"
    },
    {
      title: "CCNA 200-301 Official Cert Guide, Volume 2, Chapter 4",
      description: "Security Architectures, Controlling and Monitoring User Access"
    }
  ]
},

{
  id: 88,
  category: "IP Services",
  questionType: "Single-select",
  question: `You receive the following output on the console of RouterA:
<pre>
*Dec  1 14:20:07.059: %DUAL-5-NBRCHANGE: IP-EIGRP(0) 1: Neighbor 192.168.1.2 (FastEthernet0/0) is down: interface down
</pre>
Which of the following statements is true? (Select the best answer.)`,
  options: [
    "A notification-level severity code is being displayed in the output.",
    "The logging history size 1 command has been issued on RouterA.",
    "The default logging facility code is being displayed in the output.",
    "The service timestamps debug datetime command has been issued on RouterA."
  ],
  correctAnswer: 0,
  explanation: `
<b>Explanation:</b><br>
A notification-level severity code is being displayed in the output. Notification-level events include route flaps, neighbor adjacencies, interface protocol up/down transitions, and system restart messages.
<br><br>
Cisco debug messages and log messages are divided into the following severity levels:
<ul>
<li>0 – emergencies</li>
<li>1 – alerts</li>
<li>2 – critical</li>
<li>3 – errors</li>
<li>4 – warnings</li>
<li>5 – notifications</li>
<li>6 – informational</li>
<li>7 – debugging</li>
</ul>
You can filter log messages on the console by severity level by issuing the <b>logging console severity-level</b> command, or you can filter log messages to a Syslog server by issuing the <b>logging trap severity-level</b> command. When the logging console or logging trap command is issued with a severity-level parameter, messages with the specified severity level and all lower-numbered severity levels will be displayed or sent, respectively.

Messages are formatted in the Berkeley Software Distribution (BSD) Syslog format, which is a percent sign (%) followed by a facility code, a severity code, and a mnemonic code. The three codes are separated by dashes. In the output displayed in this scenario, the facility code is DUAL, the severity code is 5, which is equivalent to notifications, and the mnemonic code is NBRCHANGE. The dash-separated code is followed by a colon and the human-readable text of the log message.

The <b>service timestamps debug datetime msec</b> command, not the <b>service timestamps debug datetime</b> command, has been issued on RouterA. The <b>service timestamps debug</b> command can be used to configure the format in which the debug output will display the time. For example, using the <b>service timestamps debug datetime</b> command in global configuration mode will display a debug timestamp that consists of the date and time relative to Coordinated Universal Time (UTC) but will not include milliseconds. Issuing the <b>service timestamps debug datetime msec</b> command performs the same function as the service timestamps debug datetime command but adds the milliseconds value, which creates more granular timestamps and can thus increase the value of the logs following an attack. The output in this scenario includes a milliseconds value of .059.

In contrast to the <b>service timestamps debug</b> command, you can issue the <b>service timestamps log datetime msec</b> command to display the date and time with milliseconds relative to UTC in logs that are generated by the Cisco device. Although debug messages on Cisco devices are displayed in the standard Syslog format, debug messages are not exactly the same as the log messages that are sent by Syslog to a file or a server. You can send Syslog messages from a Cisco device to a Syslog server by issuing the <b>logging host ip-address</b> command, where <i>ip-address</i> is the Internet Protocol (IP) address of the Syslog server.

The default logging facility code is not being displayed in the output in this scenario. A logging facility, or facility code, is typically a free-form keyword value on Cisco devices that is used to identify the service or feature that generated the message. For example, the output in this scenario has a facility code of DUAL. However, when a Cisco device sends Syslog messages to a Syslog server, a configured facility code is used to identify the device that sent the message. By default, Cisco devices are privately configured to use a value of local7. You can configure the logging facility that the device sends to the Syslog server by issuing the <b>logging facility facility-type</b> command, where <i>facility-type</i> is the facility code you want to send.

There is not enough information in this scenario to determine whether the logging history size 1 command has been issued on RouterA. The logging history size value command, which uses a number from 0 through 500, can be issued to increase the size of a router’s logging history table. The default history table size is 1, which means that only one log message is stored in the table at a time.
`,
  reference: [
    {
      title: "Boson CCNA Curriculum 200-301, Module 7: IP Services",
      description: "Log Severity Levels"
    },
    {
      title: "Cisco: System Message Logging, Table 3: Message Logging Severity Level Keywords",
      link: "https://www.cisco.com/c/en/us/td/docs/ios/12_2/configfun/configuration/guide/ffun_c/fcf014.html"
    }
  ]
},

{
  id: 56,
  category: "IP Connectivity",
  questionType: "Single-select",
  question: `You issue the <b>show ip ospf interface fastethernet 0/0</b> command on Router1 and receive the following output:
<pre>
Router1#show ip ospf interface fastethernet 0/0
FastEthernet0/0 is up, line protocol is up
  Internet Address 192.168.101.1/24, Area 0
  Process ID 2, Router ID 192.168.101.1, Network Type BROADCAST, Cost: 1
  Transmit Delay is 1 sec, State DR, Priority 1
  Designated Router (ID) 192.168.101.1, Interface address 192.168.101.1
  No backup designated router on this network
  Timer intervals configured, Hello 10, Dead 40, Wait 40, Retransmit 5
    Hello due in 00:00:00
  Supports Link-local Signaling (LLS)
  Index 1/1, flood queue length 0
  Next 0x0(0)/0x0(0)
  Last flood scan length is 0, maximum is 0
  Last flood scan time is 0 msec, maximum is 0 msec
  Neighbor Count is 0, Adjacent neighbor count is 0
  Suppress hello for 0 neighbor(s)
</pre>
Which of the following is true? (Select the best answer.)`,
  options: [
    "The FastEthernet 0/0 interface is adjacent to two neighbors.",
    "The FastEthernet 0/0 interface is configured with a nondefault dead timer value.",
    "The FastEthernet 0/0 interface is adjacent to one neighbor.",
    "The FastEthernet 0/0 interface is configured with a default Hello timer value."
  ],
  correctAnswer: 3,
  explanation: `
<b>Explanation:</b><br>
The FastEthernet 0/0 interface on Router1 is configured with a default Hello timer value. By default, the Hello timer is set to 10 seconds on OSPF point-to-point and broadcast networks. You can view information about an OSPF interface by issuing the <b>show ip ospf interface</b> command in privileged EXEC mode.

The <b>show ip ospf interface</b> command also displays the designated router (DR) and backup designated router (BDR) for the network segment as well as neighbor information for each interface. In this scenario, the output from the show ip ospf interface command indicates that the FastEthernet 0/0 interface is configured to operate in Open Shortest Path First (OSPF) Area 0. In addition, the Hello timer is set to 10 seconds, which is the default.

The FastEthernet 0/0 interface is not adjacent to any neighbors. The <b>Neighbor Count is 0, Adjacent neighbor count is 0</b> output above displays information about OSPF neighbors and neighbor adjacencies.

The FastEthernet 0/0 interface is configured with the default dead timer value. By default, the dead timer is set to 40 seconds on point-to-point and broadcast links.
`,
  reference: [
    {
      title: "Boson CCNA Curriculum 200-301, Module 6: IP Routing",
      description: "Understanding OSPF Adjacencies"
    },
    {
      title: "Cisco: What Does the show ip ospf interface Command Reveal?",
      link: "https://www.cisco.com/c/en/us/support/docs/ip/open-shortest-path-first-ospf/13774-19.html"
    }
  ]
},

{
  id: 923,
  category: "IP Services",
  questionType: "Multi-select",
  question: `Which of the following SNMP actions are used by an NMS to extract information from an SNMP agent? (Select 2 choices.)`,
  options: [
    "GetNext",
    "Trap",
    "Get",
    "Set",
    "Inform"
  ],
  correctAnswer: [0, 2],
  explanation: `
<b>Explanation:</b><br>
The Get and GetNext actions are used by a network management station (NMS) to extract information from a Simple Network Management Protocol (SNMP) agent. An SNMP agent reads and displays information from a hierarchical database of objects known as a management information base (MIB). The objects in the MIB are organized by using object IDs (OIDs), which are unique identifiers that are assigned to each object. By using the MIB, SNMP can perform complex management tasks, such as automated backups of the Cisco devices throughout the network.
<br><br>
SNMP is a protocol that an NMS can use to communicate with an agent in the same community. If the NMS and the agent do not share the same community string, the NMS is not permitted to communicate with the agent. SNMP communities can be configured to be either read-only or read-write. Read-only communities enable an NMS to retrieve MIB data from a community, whereas read-write communities enable an NMS to modify and retrieve MIB data. If the NMS is authorized to communicate with the agent of a read-only community, the NMS can take any of the following actions:
<ul>
<li>Get – request a particular item from the MIB</li>
<li>GetNext – request the next sequential item from the MIB</li>
<li>GetBulk – request several sequential items from the MIB</li>
</ul>
By contrast, if the NMS is authorized to communicate with the agent of a read-write community, the NMS can take any of the following actions:
<ul>
<li>Get – request a particular item from the MIB</li>
<li>GetNext – request the next sequential item from the MIB</li>
<li>GetBulk – request several sequential items from the MIB</li>
<li>Set – modify an item in the MIB</li>
</ul>
The SNMP agent typically accumulates statistical data regarding the number and type of SNMP requests and responses it has processed. For example, on Cisco routers, you can issue the show snmp command to display the accumulated SNMP statistics, as shown in the following sample output:
<pre>
Chassis: 437255317
1230 SNMP packets input
    5 Bad SNMP version errors
    5 Unknown community name
    4 Illegal operation for community name supplied
    0 Encoding errors
    0 Number of requested variables
    680 Get-request PDUs
    475 Get-next PDUs
    60 Set-request PDUs
    0 Get-response PDUs
    0 Trap PDUs
  0 Too big errors (Maximum packet size 1500)
  5 No such name errors
  60 Bad values errors
  0 General errors
762 Response PDUs
  0 Trap PDUs
</pre>
The sample output indicates the number of Get, GetNext, and Set requests that have been received by the router as well as statistics on the number of various types of SNMP packets that the router has sent in response to NMS queries. For example, the Illegal operation for community name supplied field in the sample output indicates that four SNMP packets requested an operation that was not allowed for the associated community, such as a Get request for a community that permits only get requests. In addition, the Unknown community name field indicates that five SNMP packets were received with an unknown community string.
<br><br>
The Trap and Inform actions are not used by an NMS to extract information from an SNMP agent. Instead, the Trap and Inform actions are used by an SNMP agent to alert an NMS when a particular threshold has been exceeded:
<ul>
<li>Trap – send to the NMS an alert that does not require an acknowledgement</li>
<li>Inform – send to the NMS an alert that requires an acknowledgement</li>
</ul>
Although the Inform action is more reliable than the Trap action, the Inform action can sometimes be misunderstood. The Inform action can be sent multiple times if an agent does not receive an acknowledgement from the NMS; the agent stores the data from the Inform action in local memory until it receives an acknowledgement of the receipt of the notification.
`,
  reference: [
    {
      title: "Cisco: Configuring SNMP Support: SNMP Get",
      link: "https://www.cisco.com/c/en/us/td/docs/ios-xml/ios/snmp/configuration/15-mt/snm-15-mt-book/nm-snmp-support.html"
    }
  ]
},

{
  id: 49,
  category: "IP Connectivity",
  questionType: "Multi-select",
  question: `On which interfaces is the OSPF point-to-point network type enabled by default? (Select 2 choices.)`,
  options: [
    "Ethernet",
    "X.25",
    "HDLC",
    "PPP",
    "FDDI",
    "Frame Relay"
  ],
  correctAnswer: [2, 3],
  explanation: `
<b>Explanation:</b><br>
The Open Shortest Path First (OSPF) point-to-point network type is enabled by default on High-Level Data Link Control (HDLC) and Point-to-Point Protocol (PPP) serial interfaces. If the ip ospf network command has not been issued for an OSPF interface, the default network type is used. The default OSPF network type depends upon the type of network to which the interface is connected.<br><br>
There are five OSPF network types:
<ul>
<li>Broadcast</li>
<li>Nonbroadcast</li>
<li>Point-to-point</li>
<li>Point-to-multipoint broadcast</li>
<li>Point-to-multipoint nonbroadcast</li>
</ul>
The OSPF Broadcast network type is enabled by default on Fiber Distributed Data Interface (FDDI) and Ethernet interfaces, including Fast Ethernet and Gigabit Ethernet interfaces. On broadcast networks, designated router (DR) and backup designated router (BDR) elections are performed. Multicast updates are sent, so manual configuration of neighbor routers with the neighbor command is not required. By default, the Hello timer is set to 10 seconds and the dead timer is set to 40 seconds. To configure an OSPF broadcast network, you should issue the ip ospf network broadcast command.<br><br>
The OSPF nonbroadcast network type is enabled by default on Frame Relay and X.25 interfaces. On nonbroadcast networks, DR and BDR elections are performed. Nonbroadcast networks do not allow multicasts; therefore, manual configuration of neighbor routers with the neighbor command is required so that OSPF sends unicast updates. By default, the Hello timer is set to 30 seconds and the dead timer is set to 120 seconds. To configure an OSPF nonbroadcast network, which is also called a nonbroadcast multiaccess (NBMA) network, you should issue the ip ospf network non-broadcast command.<br><br>
On point-to-point networks, DR and BDR elections are not performed. Multicast updates are sent, so manual configuration of neighbor routers with the neighbor command is not required. By default, the Hello timer is set to 10 seconds and the dead timer is set to 40 seconds. To configure an OSPF point-to-point network, you should issue the ip ospf network point-to-point command.<br><br>
On OSPF point-to-multipoint networks, DR and BDR elections are not performed. Multicast updates are sent, so manual configuration of neighbor routers with the neighbor command is not required. By default, the Hello timer is set to 30 seconds and the dead timer is set to 120 seconds. To configure an OSPF point-to-multipoint broadcast network, you should issue the ip ospf network point-to-multipoint command.<br><br>
On OSPF point-to-multipoint nonbroadcast networks, DR and BDR elections are not performed. Nonbroadcast networks do not allow multicasts; therefore, manual configuration of neighbor routers with the neighbor command is required so that OSPF sends unicast updates. By default, the Hello timer is set to 30 seconds and the dead timer is set to 120 seconds. To configure an OSPF point-to-multipoint nonbroadcast network, you should issue the ip ospf network point-to-multipoint non-broadcast command.
`,
  reference: [
    {
      title: "Boson CCNA Curriculum 200-301, Module 6: IP Routing",
      description: "OSPF Interface Types"
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
      title: "Cisco: Cisco IOS IP Routing: OSPF Command Reference: ip ospf network",
      link: "https://www.cisco.com/c/en/us/td/docs/ios/12_2/iproute/command/reference/irs_osp2.html"
    },
    {
      title: "Cisco: Configuring OSPF",
      link: "https://www.cisco.com/c/en/us/support/docs/ip/open-shortest-path-first-ospf/7039-1.html"
    }
  ]
},

{
  id: 7,
  category: "IP Connectivity",
  questionType: "Single-select",
  question: `You issue the <b>show ip route</b> command on RouterA and receive the following partial output:
<pre>
10.20.0.0/22 [1/0] via 192.168.1.20, 00:00:38, Serial1/0
R 10.20.0.0/24 [120/3] via 192.168.1.3, 00:03:38, Serial1/3
D 10.20.0.16/28 [90/2051456] via 192.168.1.4, 00:02:14, Serial4/0
O 10.20.0.0/28 [110/64] via 192.168.10.1, 00:02:38, Serial1/0
</pre>
RouterA receives a packet that is destined for 10.20.0.14.
<br>Which of the following routes will RouterA use to send the packet? (Select the best answer.)`,
  options: [
    "the EIGRP route, because it has the lowest administrative distance",
    "the OSPF route, because it is the route with the longest prefix match",
    "the RIP route, because it has the highest administrative distance",
    "the static route, because static routes are preferred over dynamic routes"
  ],
  correctAnswer: 1,
  explanation: `
<b>Explanation:</b><br>
RouterA will use the Open Shortest Path First (OSPF) route, because it is the route with the longest prefix match. When a packet is sent to a router, the router checks the routing table to see whether the next-hop address for the destination network is known. If multiple routes to a destination are known, the most specific route is used. Therefore, the following rules apply on RouterA:
<ul>
<li>Packets sent to the 10.20.0.0/28 network use the OSPF route. This includes destination addresses from 10.20.0.0 through 10.20.0.15.</li>
<li>Packets sent to the 10.20.0.0/22 network, <b>except those sent to the 10.20.0.0/28 network</b>, use the Enhanced Interior Gateway Routing Protocol (EIGRP) route. This includes destination addresses from 10.20.0.16 through 10.20.0.63.</li>
<li>Packets sent to the 10.20.0.0/24 network, <b>except those sent to the 10.20.0.0/28 network</b>, use the Routing Information Protocol (RIP) route. This includes destination addresses from 10.20.0.0 through 10.20.0.255.</li>
<li>Packets sent to the 10.20.0.0/22 network, <b>except those sent to the 10.20.0.0/24 network</b>, use the static route. This includes destination addresses from 10.20.0.0 through 10.20.3.255.</li>
<li>Packets sent to any destination not listed in the routing table are forwarded to the default gateway, if one is configured.</li>
</ul>

Because the most specific route to 10.20.0.14 is the route toward the 10.20.0.0/28 network, RouterA will forward a packet destined for 10.20.0.14 to the Serial1/0 interface.

RouterA will not use the EIGRP route to send a packet that is destined for 10.20.0.14. Routes with longer prefix lengths are preferred over routes with shorter prefix lengths, and routes with lower ADs are preferred over routes with higher ADs.<br>
RouterA will not use the RIP route to send a packet that is destined for 10.20.0.14. <br>
RouterA will not use the static route to send a packet that is destined for 10.20.0.14. If the static route were configured so that the destination network were 10.20.0.0/28, the static route would be preferred over the OSPF route because static routes have a lower AD than dynamic routes.
<br><br>
The following list contains the most commonly used ADs:
<br>
<table border="1" cellpadding="3" cellspacing="0" style="border-collapse:collapse;">
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
`,
  reference: [
    {
      title: "Boson CCNA Curriculum 200-301, Module 6: IP Routing",
      description: "Understanding AD"
    },
    {
      title: "Cisco: Route Selection in Cisco Routers",
      link: "https://www.cisco.com/c/en/us/support/docs/ip/enhanced-interior-gateway-routing-protocol-eigrp/47862-eigrpint.html"
    }
  ]
},

{
  id: 660,
  category: "Network Access",
  questionType: "Single-select",
  question: `Which of the following DTP modes operates in access mode unless the neighboring interface actively negotiates to operate as a trunk? (Select the best answer.)`,
  options: [
    "desirable",
    "auto",
    "off",
    "on"
  ],
  correctAnswer: 1,
  explanation: `
<b>Explanation:</b><br>
Dynamic Trunking Protocol (DTP) auto mode operates in access mode unless the neighboring interface actively negotiates to operate as a trunk. There are two dynamic modes of operation for a switch port:
<ul>
<li><b>auto</b> – operates in access mode unless the neighboring interface actively negotiates to operate as a trunk</li>
<li><b>desirable</b> – operates in access mode unless it can actively negotiate a trunk connection with a neighboring interface</li>
</ul>
The default dynamic mode is dependent on the hardware platform. In general, departmental-level or wiring closet–level switches default to auto mode, whereas backbone-level switches default to desirable mode. Because a switch port in auto mode does not actively negotiate to operate in trunk mode, it will form a trunk link only if negotiations are initiated by the neighboring interface. A neighboring interface will initiate negotiations only if it is configured to operate in trunk mode or desirable mode. By contrast, a switch port in desirable mode will actively negotiate to operate in trunk mode and will form a trunk link with a neighboring port that is configured to operate in trunk, desirable, or auto mode.

Off and on are not DTP modes. They are static operating modes. The Mode column in the output of the show interfaces interface slot/number trunk command indicates the switchport mode configured for a particular interface. The possible values of the Mode column are the following:
<ul>
<li><b>off</b> – indicates that the port has been statically configured to operate in access mode</li>
<li><b>on</b> – indicates that the port has been statically configured to operate in trunk mode</li>
<li><b>auto</b> – indicates that the port will dynamically determine its operating mode; the port operates in access mode unless the neighboring interface actively negotiates to operate as a trunk</li>
<li><b>desirable</b> – indicates that the port will dynamically determine its operating mode; the port operates in access mode unless it can actively negotiate a trunk connection with a neighboring interface</li>
</ul>
`,
  reference: [
    {
      title: "Boson CCNA Curriculum 200-301, Module 5: Switching and Network Access",
      description: "Understanding and Configuring DTP"
    },
    {
      title: "CCNA 200-301 Official Cert Guide, Volume 1, Chapter 8",
      description: "Implementing Ethernet Virtual LANs, VLAN Trunking Configuration"
    },
    {
      title: "Cisco: Configuring VLANs: Trunking Overview",
      link: "https://www.cisco.com/c/en/us/support/docs/lan-switching/vlan/10023-3.html"
    }
  ]
},

{
  id: 498,
  category: "Network Access",
  questionType: "Single-select",
  question: `Which of the following wireless QoS levels provides the lowest bandwidth and is typically used for guest services on a Cisco WLAN? (Select the best answer.)`,
  options: [
    "Platinum",
    "Bronze",
    "Silver",
    "Gold"
  ],
  correctAnswer: 1,
  explanation: `
<b>Explanation:</b><br>
The Bronze wireless Quality of Service (QoS) level provides the lowest bandwidth and is typically used for guest services on a Cisco wireless local area network (WLAN). Cisco wireless LAN controllers (WLCs) support four different QoS levels: Platinum, Gold, Silver, and Bronze. QoS prioritizes certain types of traffic over others and can therefore be used to ensure quality for services that are sensitive to network issues such as delay and congestion. Prioritizing guest traffic at a lower level than transactional traffic on a WLAN guarantees that WLAN guests will be prevented from consuming excess bandwidth and thus interfering with normal business operations.
<br><br>
The Platinum wireless QoS level prioritizes Voice over Internet Protocol (VoIP) traffic on a Cisco WLAN. VoIP is susceptible to network delay, which can create jitter and severely affect the quality of a call. To ensure that VoIP traffic is of highest quality, the Platinum level is typically applied to VoIP endpoints and to the control tunnels between lightweight access points (APs) and the WLC.
<br><br>
The Gold wireless QoS level prioritizes video traffic on a Cisco WLAN. The Gold level is typically used to ensure that video and mission-critical real-time interactive traffic streams from source to destination without disruption.
<br><br>
The Silver QoS level is the default setting when you configure a WLAN on a Cisco WLC. The Silver QoS level is also known as the best-effort level of QoS. Traffic that is delivered by using best effort is considered lower priority than mission-critical, video, and voice traffic. This is the level at which most transactional traffic is delivered.
`,
  reference: [
    {
      title: "CCNA 200-301 Official Cert Guide, Volume 1, Chapter 29",
      description: "Building a Wireless LAN, Configuring WLAN QoS"
    },
    {
      title: "Cisco: Quality of Service: Quality of Service",
      link: "https://www.cisco.com/c/en/us/td/docs/wireless/controller/8-1/config-guide/b_cg81/qos_overview.html"
    }
  ]
},

{
  id: 474,
  category: "Automation and Programmability",
  questionType: "Multi-select",
  question: `A REST API query returns the following output:
<pre>
{
    "id": 12345,
    "name": "John",
    "frame": "open",
    "login": "John",
    "role": [
        "Receivables",
        "read-only",
        "Accounting Folder",
        "Sales Folder"
    ]
}
</pre>
Which of the following statements are true? (Select 2 choices.)`,
  options: [
    "The value of the id key is numeric.",
    "The value of the read-only key is a text value.",
    "The value of the group key is an object.",
    "The value of the role key is an array."
  ],
  correctAnswer: [0, 3],
  explanation: `
<b>Explanation:</b><br>
Of the available choices, it is true that the value of the group key in the Representational State Transfer (REST) Application Programming Interface (API) output above is an object. In addition, the value of the id key is numeric. REST is an API architecture that uses Hypertext Transfer Protocol (HTTP) or HTTP Secure (HTTPS) to enable external resources to access and make use of programmatic methods that are exposed by the API. The REST API that is being queried in this scenario has returned output in JavaScript Object Notation (JSON) format. JSON is a data modeling language that is commonly used by REST APIs. The JSON data modeling language returns data in the form of an object that contains key and value pairs.
<br><br>
The value of the id key is numeric in the JSON object in this scenario. Numeric data is defined by digits that are not enclosed in quotation marks. If a string of digits is encoded in quotation marks, it will be treated as text even if it contains only numeric characters. The numeric value of the id key in this scenario is 12345.
<br><br>
A single JSON object can contain multiple key and value pairs. Each key and value pair inside a JSON object is separated from the others by a comma (,). Furthermore, each pair’s key is separated from its value by a colon (:). The element in quotation marks on the left side of each colon is the key; the element on the right side of each colon is the value, which might or might not be enclosed in quotation marks. There are several data value types that can be returned in JSON output: text, numeric, array, object, Boolean, and null.
<br><br>
The value of the name key, the value of the frame key, and the value of the role key are all text values in the JSON object in this scenario. JSON keys and JSON text values are always enclosed in quotation marks. Text values typically contain alphanumeric or Unicode characters.
<br><br>
The value of the role key is an array in the JSON output in this scenario. A JSON object can be identified by the curly brackets that mark the beginning and the end of the object ({ }). A left curly bracket ({) marks the beginning of a JSON object. A right curly bracket (}) marks the end of a JSON object. Arrays can be nested as values inside other JSON objects. In addition, other JSON objects can be specified as values inside other JSON objects. In this scenario, the value of the groups key in the primary JSON object is shown in the following JSON object:
<pre>
{
  "role": [
    "Receivables",
    "read-only",
    "Accounting Folder",
    "Sales Folder"
  ]
}
</pre>
As previously mentioned, a JSON object is a group of key and value pairs. The JSON object above contains two key and value pairs. The role key contains a text value of Receivables. The read-only key, on the other hand, contains an array.
<br><br>
There are no Boolean or null values in the JSON output in this scenario. A given JSON key can be assigned a Boolean value of either true or false. Because these are Boolean values, not text values, they are typically not placed inside quotation marks. Null values technically have no value at all, although it is not exactly the same as a numeric value of zero. A given JSON key can be assigned a null value by specifying null without quotation marks.
`,
  reference: [
    {
      title: "Boson CCNA Curriculum 200-301, Module 9: Automation and Programming",
      description: "JSON"
    },
    {
      title: "CCNA 200-301 Official Cert Guide, Volume 2, Chapter 18",
      description: "Understanding REST and JSON, Interpreting JSON"
    }
  ]
},

{
  id: 21,
  category: "IP Connectivity",
  questionType: "Single-select",
  question: `Which of the following statements is correct regarding an EIGRP feasible successor? (Select the best answer.)`,
  options: [
    "It has an advertised distance that is less than the feasible distance of the successor.",
    "It has the lowest advertised distance.",
    "It has an advertised distance that is greater than the feasible distance of the successor.",
    "It has the lowest feasible distance."
  ],
  correctAnswer: 0,
  explanation: `
<b>Explanation:</b><br>
An Enhanced Interior Gateway Routing Protocol (EIGRP) feasible successor has an advertised distance (AD) that is less than the feasible distance (FD) of the successor. Feasible successors are backup routes that can be used if the successor route goes down; they are guaranteed to represent a loop-free path to a destination. If the AD of a route is greater than the FD of the successor, the route cannot be guaranteed to be free of loops and cannot be chosen as a feasible successor.
<br><br>
An EIGRP successor is the best route to a destination. The successor is the route with the lowest FD, which is the best metric along a path to a destination. The FD is the metric to a neighbor router plus that neighbor router's AD to the destination network.
<br><br>
Neither the successor nor the feasible successor has the lowest AD. The AD is the metric that has been calculated by the upstream router.
`,
  reference: [
    {
      title: "Cisco: Introduction to EIGRP",
      link: "https://www.cisco.com/c/en/us/support/docs/ip/enhanced-interior-gateway-routing-protocol-eigrp/13677-12.html"
    }
  ]
},

{
  id: 635,
  category: "Network Fundamentals",
  questionType: "Single-select",
  question: `Which of the following IP address blocks is reserved by IANA for use in private networks? (Select the best answer.)`,
  options: [
    "192.0.2.0/24",
    "169.254.0.0/16",
    "127.0.0.0/8",
    "172.16.0.0/12"
  ],
  correctAnswer: 3,
  explanation: `
<b>Explanation:</b><br>
The 172.16.0.0/12 Internet Protocol (IP) address block is reserved by the Internet Assigned Numbers Authority (IANA) for use in private networks. In Request for Comments (RFC) 1918, IANA defines three IP address blocks for use in private networks. Because these IP address blocks are intended for private local area network (LAN) use, they are commonly filtered by edge routers so that packets with private IP addresses are not inadvertently routed across the Internet. The following list indicates the IP address blocks that are reserved for private, internal use:
<ul>
<li>10.0.0.0/8</li>
<li>172.16.0.0/12</li>
<li>192.168.0.0/16</li>
</ul>
These IP address blocks correspond to contiguous network ranges within the Class A, B, and C network space. The IP address block 10.0.0.0/8 consists of a single Class A network, the 172.16.0.0/12 IP address block consists of 16 contiguous Class B networks, and the 192.168.0.0/16 IP address block consists of 256 contiguous Class C networks. These private IP address blocks cover the following range of IP addresses:
<ul>
<li>Class A – 10.0.0.0 to 10.255.255.255</li>
<li>Class B – 172.16.0.0 to 172.31.255.255</li>
<li>Class C – 192.168.0.0 to 192.168.255.255</li>
</ul>
The 127.0.0.0/8 IP address block is reserved by IANA for host loopback addresses. A packet with a destination IP address anywhere within this range is routed immediately back to the sending host by its IP implementation. This IP address block is described in RFC 1122, and its reservation is specified in RFC 5735, which defines special-use IP version 4 (IPv4) addresses.

The 169.254.0.0/16 IP address block is reserved by IANA for the auto-configuration of link-local IP addresses when a dynamic IP address cannot be obtained from another source, such as a Dynamic Host Configuration Protocol (DHCP) server. This IP address block is commonly used by Microsoft operating systems (OSs) that support Automatic Private IP Addressing (APIPA). This address block is described in RFC 3927, and its reservation is specified in RFC 5735.

The 192.0.2.0/24 IP address block is reserved by IANA for documentation and example code. In order to mitigate the use of real or private IP addresses in documentation, IANA has defined three IP address blocks for use in documentation and example code:
<ul>
<li>192.0.2.0/24</li>
<li>198.51.100.0/24</li>
<li>203.0.113.0/24</li>
</ul>
In addition, IANA has reserved the domain names example.com and example.net for use in documentation and example code. The 192.0.2.0/24 address block is described in RFC 3757, and its reservation is specified in RFC 5735.
`,
  reference: [
    {
      title: "Boson CCNA Curriculum 200-301, Module 2: Network Addressing and Transport",
      description: "Classful Networks"
    },
    {
      title: "CCNA 200-301 Official Cert Guide, Volume 1, Chapter 11",
      description: "Perspectives on IPv4 Subnetting, Private IP Networks"
    },
    {
      title: "IETF: RFC 1918: Address Allocation for Private Internets",
      link: "https://datatracker.ietf.org/doc/html/rfc1918"
    }
  ]
},

{
  id: 683,
  category: "Network Access",
  questionType: "Single-select",
  question: `Which of the following optional STP features reduces convergence time by immediately placing edge ports into a forwarding state? (Select the best answer.)`,
  options: [
    "root guard",
    "BPDU filter",
    "PortFast",
    "loop guard",
    "BPDU guard"
  ],
  correctAnswer: 2,
  explanation: `
<b>Explanation:</b><br>
PortFast is an optional Spanning Tree Protocol (STP) feature that reduces convergence time by immediately placing edge ports into a forwarding state. PortFast is recommended for ports that connect to end-user devices, such as desktop computers. In addition, PortFast cannot be used with loop guard. If PortFast is enabled on a loop guard–enabled port, loop guard will be automatically disabled. To enable PortFast, you should issue the <b>spanning-tree portfast</b> command from interface configuration mode.<br><br>
Loop guard places inconsistent ports into the blocking state; it does not reduce convergence time by immediately placing edge ports into a forwarding state. Loop guard prevents a switch port from transitioning to the forwarding state when it stops receiving bridge protocol data units (BPDUs); this prevents switching loops from occurring. A port configured with loop guard that stops receiving BPDUs will be put into the loop-inconsistent state, as shown in the following output:<br>
<pre>
%SPANTREE-4-LOOPGUARDBLOCK: No BPDUs were received on port 0/1 in vlan 4. Moved to loop inconsistent state
</pre>
After the port starts receiving BPDUs again, loop guard enables the port to transition through the normal STP states. To enable loop guard, you should issue the <b>spanning-tree guard loop</b> command from interface configuration mode.
<br><br>
Root guard is used to prevent newly introduced switches from being elected the new root; it does not reduce convergence time by immediately placing edge ports into a forwarding state. This allows administrators to maintain control over which switch is the root. When STP is used, the device with the lowest bridge priority is elected the root. If an additional device is added to the network with a lower priority than the current root, it will become the new root. However, this could cause the network to reconfigure in unintended ways. To prevent this, root guard can be applied. Root guard is applied on a per-port basis with the <b>spanning-tree guard root</b> command. If root guard is applied on a loop guard–enabled port, loop guard will be automatically disabled.
<br><br>
BPDU guard is used to disable ports that erroneously receive BPDUs; it does not reduce convergence time by immediately placing edge ports into a forwarding state. BPDU guard is applied to edge ports that have PortFast enabled. Because PortFast automatically places ports into a forwarding state, a switch that has been connected to a PortFast-enabled port could cause switching loops. However, when BPDU guard is applied, the receipt of a BPDU on a PortFast interface will result in the port being placed into a disabled state, which prevents loops from occurring. To enable BPDU guard, you should issue the <b>spanning-tree bpduguard enable</b> command from interface configuration mode.<br><br>
The BPDU filter feature prevents PortFast-enabled ports from sending or receiving BPDUs; it does not reduce convergence time by immediately placing edge ports into a forwarding state. The BPDU filter behaves differently depending on whether it is enabled globally or only on specific ports. When enabled globally, the BPDU filter does not restrict BPDU flow on a PortFast interface until the interface is in an operational state. In addition, if a port receives a BPDU, it loses its PortFast status and the BPDU filter feature is automatically disabled for that port until it is operational. You can globally enable BPDU filtering by issuing the <b>spanning-tree portfast bpdufilter default</b> command in global configuration mode. By contrast, when enabled for a specific port, the BPDU filter feature filters all inbound and outbound BPDUs for the port with respect to the operational state of the port. Configuring BPDU filtering at the port level effectively disables STP on that port and could result in a bridging loop. You can enable BPDU filtering on an individual port by issuing the <b>spanning-tree bpdufilter enable</b> command in interface configuration mode.
`,
  reference: [
    {
      title: "Boson CCNA Curriculum 200-301, Module 5: Switching and Network Access",
      description: "PortFast"
    },
    {
      title: "CCNA 200-301 Official Cert Guide, Volume 1, Chapter 9",
      description: "Spanning Tree Protocol Concepts, Optional STP Features"
    },
    {
      title: "Cisco: Configuring Optional Spanning-Tree Features: Understanding Optional Spanning-Tree Features",
      link: "https://www.cisco.com/c/en/us/support/docs/lan-switching/spanning-tree-protocol/10593-74.html"
    }
  ]
},

{
  id: 619,
  category: "Network Fundamentals",
  questionType: "Single-select",
  question: `Given a host IP address of 48.25.24.71/21, what is the last available host address in this network? (Select the best answer.)`,
  options: [
    "48.25.24.255",
    "48.25.25.255",
    "48.25.24.240",
    "48.25.31.254",
    "48.25.24.249",
    "48.25.25.255"
  ],
  correctAnswer: 3,
  explanation: `
<b>Explanation:</b><br>
<p>The last available address for the subnetwork containing the host 48.25.24.71/21 is 48.25.31.254. An Internet Protocol (IP) address consists of four groups of eight binary bits, or 32 bits total. Each bit can store either a 1 or a 0 value. The address consists of two parts, a network portion and a host portion, which are divided by the use of a subnet mask. Like the IP address, the subnet mask is composed of four groups of eight binary bits containing either a 1 or a 0 value. Because each group contains eight bits of information, the groups are referred to as octets and each octet ranges from 0 through 255 in decimal value.</p>
<br><br>
<p>To determine the subnet address range of a given IP address/subnet mask combination, you must first identify the interesting octet within the subnet mask. The interesting octet is the first octet that contains a decimal value other than 255 or 0.</p><br><br>
<p>The subnet mask in this example is /21. This notation is known as Classless Inter-Domain Routing (CIDR) notation. To calculate the network and host information for the network, you will need to convert the subnet mask to dotted decimal notation.</p><br><br>
<p>To convert /21 from CIDR notation to dotted decimal notation, begin at the left and set the first 21 bits to a value of 1. Set the remaining 11 bits to 0.</p>
<pre>
/21 = 11111111.11111111.11111000.00000000
</pre>
Binary bit weight increases in significance from right to left, with the leftmost bit in each octet worth a decimal value of 128 and the rightmost bit worth a decimal value of 1. The decimal value for each octet is computed by adding up the bit weight for any bit containing a 1 within the octet. The following exhibit displays how to calculate the decimal value of the subnet mask octets based on the binary value assigned to each bit:
<p><img src="/images/619-subnetting-binary.png" alt="Subnet mask binary weights"></p>
<br>
/21 = 11111111.11111111.11111000.00000000 = 255.255.248.0
<br><br>
Now that the subnet mask is in dotted decimal notation, the interesting octet is easily identified, because the third octet has a decimal value of 248, not 255 or 0. Once the interesting octet has been identified, the network numbers are determined by the weight of the least significant bit that is set to 1 in the interesting octet. Another way to determine the network numbers is to simply subtract the decimal value of the interesting octet from 256. The difference between 256 and 248 is 8; therefore, the networks will be arranged in multiples of 8.
<p><img src="/images/619-subnetting-multiples.png" alt="Subnetting multiples"></p>
<br>
A partial list of the available networks using the 255.255.248.0 subnet mask in this scenario contains the following:
<ul>
<li>48.25.0.0</li>
<li>48.25.8.0</li>
<li>48.25.16.0</li>
<li>48.25.24.0</li>
<li>48.25.32.0</li>
<li>...and so on</li>
</ul>
The total number of hosts can be determined by the number of bits equal to 0 in the binary subnet mask. You can then calculate the number of hosts for a given subnetwork by using the formula 2<sup>n</sup> – 2, where n is the number of bits equal to 0 in the subnet mask.
<pre>
/21 = 11111111.11111111.11111000.00000000
</pre>
There are 11 bits equal to 0 in the /21 subnet mask. Using the 2<sup>n</sup> – 2 formula, 2,048 – 2 = 2,046. Therefore, 2,046 hosts are available for each subnetwork when a subnet mask of /21 is applied. You must subtract 2 from the number of available hosts, because the first address is the subnetwork address and the last address is the broadcast address.
<br><br>
Likewise, you can determine the number of subnetworks that are available by examining the network mask. Because you are working with a Class A network, the first octet is excluded from the calculation. The formula to calculate the number of networks is 2<sup>n</sup>, where n is the number of bits equal to 1.
<pre>
XXXXXXXX.11111111.11111000.00000000
</pre>
Excluding the first octet, 13 bits that equal 1 are still in the network mask. Using the <i># networks = 2<sup>n</sup></i> formula, you should find that 8,192 networks are available when a subnet mask of 255.255.248.0 is applied to a Class A network.
<br><br>
Applying a subnet mask larger than the default subnet mask for a given network class is known as supernetting. This technique allows network engineers and administrators to combine and divide networks without regard to classful network boundaries, thus making more efficient use of IP address space.
<br><br>
Based on the information above, an IP address of 48.25.24.71/21 is located in the 48.25.24.0 network. This network has an address range of 48.25.24.0 to 48.25.31.255, and the last usable host address in the subnet is 48.25.31.254.
`,
  reference: [
    {
      title: "Boson CCNA Curriculum 200-301, Module 2: Network Addressing and Transport",
      description: "Subnetting"
    },
    {
      title: "CCNA 200-301 Official Cert Guide, Volume 1, Chapter 14",
      description: "Analyzing Existing Subnets: Binary"
    },
    {
      title: "Cisco: IP Addressing and Subnetting for New Users",
      link: "https://www.cisco.com/c/en/us/support/docs/ip/address-resolution-protocol-arp/13788-3.html"
    }
  ]
},

{
  id: 3,
  category: "IP Connectivity",
  questionType: "Single-select",
  question: `What AD is assigned to internal EIGRP routes by default? (Select the best answer.)`,
  options: [
    "0",
    "170",
    "5",
    "90",
    "1"
  ],
  correctAnswer: 3,
  explanation: `
<b>Explanation:</b><br>
Internal Enhanced Interior Gateway Routing Protocol (EIGRP) routes are assigned an administrative distance (AD) of 90 by default. AD values are used to determine the routing protocol that should be preferred when multiple routes to a destination network exist. A routing protocol with a lower AD will be preferred over a route with a higher AD. The following list contains the most commonly used AD values:
<br>
<table border="1" cellpadding="3" cellspacing="0" style="border-collapse:collapse;">
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
<br>
EIGRP routes appear in the output of the <b>show ip route</b> command with a letter D, as shown in the following output:
<pre>
Router1#show ip route
Codes: C - connected, S - static, I - IGRP, R - RIP, M - mobile, B - BGP
       D - EIGRP, EX - EIGRP external, O - OSPF, IA - OSPF inter area
       N1 - OSPF NSSA external type 1, N2 - OSPF NSSA external type 2
       E1 - OSPF external type 1, E2 - OSPF external type 2, E - EGP
       i - IS-IS, L1 - IS-IS level-1, L2 - IS-IS level-2, ia - IS-IS inter area
       * - candidate default, U - per-user static route, o - ODR
       P - periodic downloaded static route

Gateway of last resort is not set

     192.168.0.0/24 is variably subnetted, 9 subnets, 2 masks
D    192.168.0.128/28 [90/2195456] via 192.168.0.37, 00:03:31, Serial1/0
</pre>
The first number within the brackets is the AD. The second number within the brackets is the metric.<br><br>

To modify the AD of incoming routes, you should use the <b>distance</b> command. The syntax of the distance command is <b>distance administrative-distance ip-address wildcard-mask [acl]</b>. The <i>ip-address</i> and <i>wildcard-mask</i> parameters define the source of the route. The optional <i>acl</i> parameter, for which you can use the access control list (ACL) name or number, specifies the routes to which the AD should be applied. If no ACL is specified in the distance command, then the AD is applied to all routes received from the specified IP address or network.

Directly connected routes have an AD of 0. Therefore, directly connected routes are trusted over routes from any other source.

Static routes have an AD of 1. Therefore, static routes are more trusted than routes from any routing protocol. Static routes are optimal for routing networks that do not change often. To create a static route, you should issue the <b>ip route</b> command.

EIGRP summary routes have an AD of 5. Routes that are learned by EIGRP are called internal EIGRP routes and have an AD of 90. To modify the AD values used by EIGRP, you should issue the <b>distance eigrp internal external</b> command, where <i>internal</i> is the AD used for internal EIGRP routes and <i>external</i> is the AD used for external EIGRP routes.
`,
  reference: [
    {
      title: "Boson CCNA Curriculum 200-301, Module 6: IP Routing",
      description: "Understanding AD"
    },
    {
      title: "Cisco: What Is Administrative Distance?",
      link: "https://www.cisco.com/c/en/us/support/docs/ip/enhanced-interior-gateway-routing-protocol-eigrp/8237-46.html"
    }
  ]
},

{
  id: 663,
  category: "Network Access",
  questionType: "Matching",
 question: `Match each feature to either CDP or LLDP.`,
matchingPairs: {
  terms: [
    { id: "l1", text: "LLDP" },
    { id: "c1", text: "CDP" },
    { id: "c2", text: "CDP" },
    { id: "c3", text: "CDP" },
    { id: "c4", text: "CDP" },
    { id: "l2", text: "LLDP" },
    { id: "c5", text: "CDP" },
    { id: "l3", text: "LLDP" },
    { id: "c6", text: "CDP" },
    { id: "l4", text: "LLDP" }
  ],
  definitions: [
    { id: "d1", text: "has a 60-second update frequency" },   // CDP
    { id: "d2", text: "has a 180-second hold timer" },        // CDP
    { id: "d3", text: "is enabled by default" },              // CDP
    { id: "d4", text: "is a Layer 2 protocol" },              // CDP
    { id: "d5", text: "is a proprietary protocol" },          // CDP
    { id: "d6", text: "can convey VTP information" },         // CDP
    { id: "d7", text: "has a 30-second update frequency" },   // LLDP
    { id: "d8", text: "has a 120-second hold timer" },        // LLDP
    { id: "d9", text: "is disabled by default" },             // LLDP
    { id: "d10", text: "is an open-standard protocol" }       // LLDP
  ]
},
correctAnswer: {
  l1: "d7",   // LLDP - has a 30-second update frequency
  c1: "d1",   // CDP - has a 60-second update frequency
  c2: "d2",   // CDP - has a 180-second hold timer
  c3: "d3",   // CDP - is enabled by default
  c4: "d4",   // CDP - is a Layer 2 protocol
  l2: "d8",   // LLDP - has a 120-second hold timer
  c5: "d5",   // CDP - is a proprietary protocol
  l3: "d9",   // LLDP - is disabled by default
  c6: "d6",   // CDP - can convey VTP information
  l4: "d10"   // LLDP - is an open-standard protocol
},
  explanation: `
Link Layer Discovery Protocol (LLDP) is an Open Systems Connection (OSI) Layer 2 open-standard discovery protocol that is used to facilitate interoperability between Cisco devices and non-Cisco devices. Attributes that can be learned from neighboring devices contain Type, Length, Value (TLV) information including port description, system description, and management address. By default, a Cisco switch will send LLDP advertisements every 30 seconds when LLDP is enabled on an interface. These advertisements are used by neighboring devices to update the LLDP information learned about each neighbor. They are also used as keepalive messages to ensure that a discovered neighbor continues to be available on the network. You can issue the <b>lldp timer rate</b> command from global configuration mode to configure the frequency at which LLDP advertisements are sent by a switch. The default <b>rate</b> value is 30 seconds; however, the rate can be configured to any integer value from 5 through 65534 seconds. A Cisco switch will retain LLDP information for 120 seconds when LLDP is enabled on an interface. This time interval is known as the LLDP holdtime. You can issue the <b>lldp holdtime seconds</b> command from global configuration mode to configure the LLDP holdtime to any integer value from 0 through 65535 seconds. Whenever a new LLDP advertisement is received, the hold timer is reset and the LLDP information is considered current. When the hold timer expires for a particular neighbor, the LLDP information regarding that neighbor is considered stale and is discarded.
<br><br>
LLDP is disabled by default on Cisco switches. You can issue the <b>lldp run</b> command from global configuration mode to enable LLDP globally on a switch. By default, all interfaces are configured to transmit and receive LLDP packets when LLDP is globally enabled. However, you can issue the <b>lldp transmit</b> and <b>lldp receive</b> commands from interface configuration mode to control the sending and receiving of LLDP packets for a specific interface. For example, the <b>no lldp transmit</b> command configures an interface not to send LLDP packets, whereas the <b>lldp receive</b> command configures an interface that was previously configured not to receive LLDP packets to resume listening for LLDP packets. You can issue the <b>show lldp interface</b> command to examine the LLDP status of a particular interface. For example, the following sample output indicates that the FastEthernet 0/4 interface is configured to receive LLDP updates but not to send them:
<pre>
SwitchA#show lldp interface fastethernet 0/4
FastEthernet0/4:
  Tx: disabled
  Rx: enabled
  Tx state: INIT
  Rx state: WAIT PORT OPER
</pre>
Cisco Discovery Protocol (CDP) is an OSI Layer 2 Cisco-proprietary protocol that is used to advertise and discover only directly connected Cisco devices on a local network. By default, CDP sends advertisements every 60 seconds and retains information about a neighbor for 180 seconds before discarding it. Although CDP is enabled by default on many Cisco devices, it can be disabled for security purposes. An advantage of using CDP rather than LLDP on a network containing only Cisco devices is that CDP can also provide VLAN Trunking Protocol (VTP) information, whereas LLDP cannot. VTP is a protocol that is used to centrally manage virtual local area network (VLAN) changes and to propagate those changes across a network to all devices in the VTP domain.
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
  id: 629,
  category: "Network Fundamentals",
  questionType: "Multi-select",
  question: `Which of the following IPv6 address prefixes are not routable? (Select 2 choices.)`,
  options: [
    "FE80::/10",
    "FD05::/16",
    "FF02::/16",
    "F000::/8",
    "F800::/8",
    "2000::/3"
  ],
  correctAnswer: [0, 2],
  explanation: `
<b>Explanation:</b><br>
The Internet Protocol version 6 (IPv6) address prefixes FE80::/10 and FF02::/16 are not routable. The IPv6 prefix FE80::/10 is used for linklocal unicast addresses. IPv6 addresses in the FE80::/10 range begin with the characters FE80 through FEBF. Unicast packets are used for one-to-one communication. Linklocal unicast addresses are unique only on a single data link segment. Therefore, linklocal unicast addresses are not routable. An IPv6-capable host typically creates a linklocal unicast address automatically at startup. Linklocal unicast addresses are used for host-to-host neighbor discovery and to set the default gateway when no router is present to provide a routable IPv6 prefix. You can issue the ipv6 enable command from interface configuration mode on a Cisco router to enable IPv6 on the interface and to automatically generate a linklocal unicast. IPv6 address. Alternatively, you can issue the ipv6 address command from interface configuration mode to configure a linklocal unicast IPv6 address and to enable IPv6 on the interface. The ipv6 address command can also be used to assign end-to-end IPv6 unicast addresses on an interface, in which case an IPv6 local unicast or global unicast or an IPv6 linklocal unicast address is automatically generated.<br><br>
The IPv6 prefix FF02::/16 is used for link-local multicast addresses. Like link-local unicast addresses, linklocal multicast addresses are not routable. There are nonroutable and routable address spaces in IPv6, such as the loopback address of ::1, which is not routable.<br><br>
The IPv6 prefix 2000::/3 is used for global aggregatable unicast addresses. IPv6 addresses in the 2000::/3 range begin with the characters 2000 through 3FFF. Global aggregatable unicast address prefixes are distributed by the Internet Assigned Numbers Authority (IANA) and are globally routable over the Internet.<br><br>
The IPv6 prefixes FC00::/8 and FD00::/8 are used for unique local unicast addresses. These address blocks also used to match the FC00::/7 subnet range. IPv6 addresses in these ranges begin with the characters FC00 through FDFF. Like private IPv4 (RFC 1918) addresses, unique local unicast addresses are not globally routable, but they are routable within an organization.<br><br>
All IPv6 addresses beginning with FF are multicast addresses, which are used for one-to-many communication. Ethernet frames use unicast addresses to send data to a single device, and multicast addresses are used to simultaneously send the same data to a group of devices, thereby conserving bandwidth. The following IPv6 multicast scopes are defined:
<ul>
<li>FF01::/16 – node-local</li>
<li>FF02::/16 – link-local</li>
<li>FF05::/16 – site-local</li>
<li>FF08::/16 – organization-local</li>
<li>FF0E::/16 – global</li>
</ul>
The FF01::/16 prefix is used for node-local multicast addresses. These addresses are used only on the interface itself, much like a loopback address. Therefore, they are not routable.<br>
The FF05::/16 prefix is used for site-local multicast addresses, and the FF08::/16 prefix is used for organization-local multicast addresses. Like unique local unicast addresses, site-local multicast and organization-local multicast addresses are not globally routable, but they are routable within an organization. The FF0E::/16 prefix is used for globally routable multicast addresses.<br><br>
IPv6 hosts use the multicasting capabilities of the Neighbor Discovery (ND) protocol to discover the link layer addresses of neighbor hosts. The Hop Limit field is typically set to 255 in ND packets that are sent to neighbors. Routers decrement the Hop Limit value as a packet is routed from segment to segment. Therefore, a router that receives an ND packet with a Hop Limit value of 255 considers the source of the ND packet to be a neighbor. If a router receives an ND packet with a Hop Limit value that is less than 255, the packet is ignored, thereby protecting the network from threats that could result from the ND protocol's lack of neighbor authentication.<br>
`,
  reference: [
    {
      title: "Boson CCNA Curriculum 200-301, Module 2: Network Addressing and Transport",
      description: "Review Question 3"
    },
    {
      title: "CCNA 200-301 Official Cert Guide, Volume 1, Chapter 24",
      description: "Implementing IPv6 Addressing on Routers, Link-Local Addresses"
    },
    {
      title: "RIPE: IPv6 Address Types (PDF)",
      link: "https://www.ripe.net/publications/docs/ripe-554"
    }
  ]
},

{
  id: 80,
  category: "IP Connectivity",
  questionType: "Single-select",
  question: `You issue the <b>ipv6 route 2001:DB8:2::/64 2001:DB8:1::2</b> command on RouterA so that traffic can be routed to RouterC. When you attempt to ping the GigabitEthernet 0/1 interface of RouterC by issuing the <b>ping ipv6 2001:DB8:2::2</b> command on RouterA, the ping fails.<br><br>
Which of the following is most likely the problem? (Select the best answer.)`,
  options: [
    "RouterB does not have a route to the 2001:DB8:1::/64 network.",
    "RouterB does not have a route to the 2001:DB8:2::/64 network.",
    "RouterA does not have a default gateway.",
    "RouterC does not have a route to the 2001:DB8:1::/64 network."
  ],
  correctAnswer: 3,
  explanation: `
<b>Explanation:</b><br>
RouterC most likely does not have a route to the 2001:DB8:1::/64 network. Without a route to the 2001:DB8:1::/64 network, RouterC cannot communicate with RouterA. You can issue the <b>ipv6 route 2001:DB8:1::/64 2001:DB8:2::/64</b> command on RouterC to create a static route to the 2001:DB8:1::/64 network. Alternatively, you can issue the <b>ipv6 route ::/0 gigabitethernet 0/1</b> command on RouterC to create a default gateway.
<br><br>
RouterA has a recursive Internet Protocol version 6 (IPv6) static route to the 2001:DB8:2::/64 network, so RouterA does not need a default gateway. If RouterA had a default gateway, you might not have needed to create a static route to the 2001:DB8:2::/64 network.<br>
RouterB does not need a route to the 2001:DB8:1::/64 network or the 2001:DB8:2::/64 network. RouterB is directly connected to both networks and should be able to ping RouterA and RouterC without a static route or a dynamic routing protocol.
`,
  reference: [
    {
      title: "Boson CCNA Curriculum 200-301, Module 6: IP Routing",
      description: "IPv6 Static Routes"
    },
    {
      title: "Cisco: Cisco IOS IPv6 Command Reference: IPv6 Commands: ipv6 route",
      link: "https://www.cisco.com/c/en/us/td/docs/ios-xml/ios/ipv6/command/ipv6-cr-book/ip6-c1.html#wp1057705"
    },
    {
      title: "Cisco: IPv6 Routing: Static Routing: Information About IPv6 Routing: Static Routing",
      link: "https://www.cisco.com/c/en/us/support/docs/ip/ip-version-6/116261-config-ipv6-static-00.html"
    }
  ]
},

{
  id: 479,
  category: "Automation and Programmability",
  questionType: "Single-select",
  question: `In a controller-based network, the functions of which of the following protocols are moved to a centralized controller? (Select the best answer.)`,
  options: [
    "OSPF",
    "Syslog",
    "SSH",
    "SNMP"
  ],
  correctAnswer: 0,
  explanation: `
<b>Explanation:</b><br>
In a controller-based network, the functions of Open Shortest Path First (OSPF) or other routing protocols will be moved to a centralized controller. Routing protocols like OSPF operate in the control plane of a traditional distributed network. In a controller-based network, such as a Software-Defined Networking (SDN) network, the control plane is centralized. OSPF makes routing decisions for packets that require routing among Layer 3 devices. In a controller-based network, the decision-making logic is either moved to a central controller or monitored by a central controller.

Layer 2 switches, Layer 3 switches, and end devices typically operate in the data plane. In a controller-based network, the controller communicates with the data plane by using a southbound Application Programming Interface (API), such as NETCONF, OpenFlow, OpFlex, or OnePK. Network tasks that are typically performed in the data plane include the encapsulation and decapsulation of packets, the adding or removing of trunk headers, the matching of Media Access Control (MAC) addresses to a MAC address table, the matching of Internet Protocol (IP) addresses to paths in a routing table, the encryption of data, Network Address Translation (NAT), and filtering by using either access control lists (ACLs) or port security.

Secure Shell (SSH), Simple Network Management Protocol (SNMP), and Syslog operate in the management plane in both a traditional network and a controller-based network. Therefore, the functions of SSH, SNMP, and Syslog are not likely to be moved to a centralized controller. Another network management protocol that operates in this plane includes Telnet. All of these protocols enable an administrator to connect to and manage a network device.
`,
  reference: [
    {
      title: "Boson CCNA Curriculum 200-301, Module 9: Automation and Programming",
      description: "Underlay Network"
    },
    {
      title: "CCNA 200-301 Official Cert Guide, Volume 2, Chapter 16",
      description: "Introduction to Controller-Based Networking, The Data, Control, and Management Planes"
    },
    {
      title: "CCNA 200-301 Official Cert Guide, Volume 2, Chapter 16",
      description: "Introduction to Controller-Based Networking, Controllers and Software-Defined Architecture"
    }
  ]
},

{
  id: 52,
  category: "IP Connectivity",
  questionType: "Single-select",
  question: `You configure OSPF on a router and advertise all available interfaces. The serial interfaces are configured with PPP encapsulation and are using the default OSPF network type and timer values.

Which of the following statements is correct regarding how OSPF operates on the serial interfaces? (Select the best answer.)`,
  options: [
    "The neighbor command is required to establish adjacencies.",
    "DR and BDR elections are performed.",
    "Unicast updates are sent.",
    "The Hello timer is set to 10 seconds, and the dead timer is set to 40 seconds."
  ],
  correctAnswer: 3,
  explanation: `
<b>Explanation:</b><br>
The Hello timer is set to 10 seconds and the dead timer is set to 40 seconds. The serial interfaces are configured with Point-to-Point Protocol (PPP) encapsulation, which uses the Open Shortest Path First (OSPF) point-to-point network type by default. There are five OSPF network types:
<ul>
<li>Broadcast</li>
<li>Nonbroadcast</li>
<li>Point-to-point</li>
<li>Point-to-multipoint broadcast</li>
<li>Point-to-multipoint nonbroadcast</li>
</ul>
On point-to-point networks, designated router (DR) and backup designated router (BDR) elections are not performed. Multicast updates are sent, so manual configuration of neighbor routers with the neighbor command is not required. By default, the Hello timer is set to 10 seconds and the dead timer is set to 40 seconds. To configure an OSPF point-to-point network, you should issue the <b>ip ospf network point-to-point</b> command. The OSPF point-to-point network type is enabled by default on High-Level Data Link Control (HDLC) and Point-to-Point Protocol (PPP) serial interfaces.

On broadcast networks, DR and BDR elections are performed. Multicast updates are sent, so manual configuration of neighbor routers with the neighbor command is not required. By default, the Hello timer is set to 10 seconds and the dead timer is set to 40 seconds. To configure an OSPF broadcast network, you should issue the <b>ip ospf network broadcast</b> command. The OSPF broadcast network type is enabled by default on Fiber Distributed Data Interface (FDDI) and Ethernet interfaces, including Fast Ethernet and Gigabit Ethernet interfaces.

On nonbroadcast networks, DR and BDR elections are performed. Nonbroadcast networks do not allow multicasts; therefore, manual configuration of neighbor routers with the neighbor command is required so that OSPF sends unicast updates. By default, the Hello timer is set to 30 seconds and the dead timer is set to 120 seconds. To configure an OSPF nonbroadcast network, which is also called a nonbroadcast multiaccess (NBMA) network, you should issue the <b>ip ospf network non-broadcast</b> command. The OSPF nonbroadcast network type is enabled by default on Frame Relay and X.25 interfaces.

OSPF point-to-multipoint broadcast networks operate just like OSPF point-to-point networks except the Hello timer is set to 30 seconds and the dead timer is set to 120 seconds by default. To configure an OSPF point-to-multipoint broadcast network, you should issue the <b>ip ospf network point-to-multipoint</b> command.

OSPF point-to-multipoint nonbroadcast networks operate just like OSPF point-to-multipoint broadcast networks except that multicasts cannot be sent; therefore, manual configuration of neighbor routers with the neighbor command is required so that OSPF sends unicast updates. To configure an OSPF point-to-multipoint nonbroadcast network, you should issue the <b>ip ospf network point-to-multipoint non-broadcast</b> command.
`,
  reference: [
    {
      title: "Boson CCNA Curriculum 200-301, Module 6: IP Routing",
      description: "Understanding OSPF Adjacencies"
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
      link: "https://www.cisco.com/c/en/us/td/docs/ios/12_2/iproute/command/reference/irs_osp2.html"
    },
    {
      title: "Cisco: Configuring OSPF",
      link: "https://www.cisco.com/c/en/us/support/docs/ip/open-shortest-path-first-ospf/7039-1.html"
    }
  ]
},

{
  id: 505,
  category: "Network Access",
  questionType: "Single-select",
  question: `You are configuring a normal WLAN by using the WLC GUI. You have configured the first three fields on the <b>WLANs &gt; New</b> page. You now want to select a value from the ID drop-down list box.<br><br>
Which of the following are you configuring? (Select the best answer.)`,
  options: [
    "the WLAN's configuration name that will be used elsewhere in the WLC GUI",
    "the unique ID on which the WLAN will operate",
    "the network name that wireless clients will use to connect to the WLAN",
    "the type of WLAN you are attempting to create"
  ],
  correctAnswer: 1,
  explanation: `
<b>Explanation:</b><br>
You are configuring the unique ID on which the wireless local area network (WLAN) will operate if you select a value from the <b>ID</b> drop-down list box on the <b>WLANs &gt; New</b> page in the Cisco wireless LAN controller (WLC) graphical user interface (GUI). The Cisco WLC GUI is a browser-based interface that enables you to configure various wireless network settings. To create a new normal WLAN, you should complete four steps on the <b>WLANs &gt; New</b> page of the WLC GUI:<br>
<ol>
<li>Select the type of WLAN you are creating from the <b>Type</b> drop-down list box; by default, this value is configured to <b>WLAN</b>.</li>
<li>Enter a 32-character or less profile name in the <b>Profile Name</b> field.</li>
<li>Enter a 32-character or less Service Set Identifier (SSID) in the <b>SSID</b> field.</li>
<li>Choose a WLAN ID from the <b>ID</b> drop-down list box.</li>
</ol>
There are three types of WLANs you can create by using the WLC GUI:<br>
<ol>
<li>A normal WLAN, which is the WLAN to which wireless clients inside your company's walls will connect</li>
<li>A Guest LAN, which is the WLAN to which guest wireless clients inside your company’s walls will connect</li>
<li>A Remote LAN, which is the WLAN configuration for wired ports on the WLC</li>
</ol>
After you configure the type of WLAN, you should configure a profile name for the WLAN in the <b>Profile Name</b> field. The profile name can be up to 32 characters in length and should uniquely identify the WLAN that you are configuring. The value that you enter in the <b>Profile Name</b> field will be used by the WLC to identify the WLAN on other configuration pages. For simplicity, many administrators choose to use the same value for the <b>Profile Name</b> field as they plan to configure in the <b>SSID</b> field, although this is not required.

After you configure the <b>Profile Name</b> field, you should configure a value of up to 32 characters in the <b>SSID</b> field. The SSID is the WLAN network name that will be broadcast to wireless clients. In general, an SSID is the name for the collection of wireless clients that are all operating with the same Institute of Electrical and Electronics Engineers (IEEE) 802.11 configuration.

Finally, you should configure the WLAN ID on which the WLAN will operate. By default, the <b>ID</b> drop-down list box on the <b>WLANs &gt; New</b> page will be configured to a value of 1. You can choose to configure a WLAN on any WLAN ID in the range from 1 through 512. Although Cisco controllers support a maximum of 512 WLANs, only 16 can be actively configured.
`,
  reference: [
    {
      title: "CCNA 200-301 Official Cert Guide, Volume 1, Chapter 29",
      description: "Building a Wireless LAN, Configuring a WLAN"
    },
    {
      title: "Cisco: WLANs: Creating and Removing WLANs (GUI)",
      link: "https://www.cisco.com/c/en/us/td/docs/wireless/controller/8-1/config-guide/b_cg81/wlan.html"
    }
  ]
},

{
  id: 491,
  category: "Network Access",
  questionType: "Single-select",
  question: `Which of the following statements about FlexConnect ACLs is true? (Select the best answer.)`,
  options: [
    "They cannot be configured with a per-rule direction.",
    "They do not support an implicit deny rule.",
    "They are not supported on the native VLAN.",
    "They are applied per AP and per port."
  ],
  correctAnswer: 0,
  explanation: `
<b>Explanation:</b><br>
FlexConnect access control lists (ACLs) cannot be configured with a per-rule direction. This is in contrast to a traditional ACL, which can be configured with inbound rules or outbound rules. A FlexConnect ACL is applied in the ingress direction or the egress direction as an entire set of rules, not on a per-rule basis. FlexConnect ACLs are similar to traditional Cisco IOS ACLs in that they are rules that permit or deny traffic from a given source to a given destination. However, FlexConnect ACLs are configured on Cisco wireless lightweight access point (AP) virtual local area network (VLAN) interfaces if the lightweight AP is operating in FlexConnect mode.

FlexConnect ACLs are supported on the native VLAN. Although it is possible to configure FlexConnect ACLs for the native VLAN, it is not possible to configure FlexConnect ACLs for the native VLAN if the VLAN configuration is inherited from a FlexConnect group.

FlexConnect ACLs support the implicit deny rule. In this way, FlexConnect ACLs work similarly to traditional ACLs. The implicit deny rule is an invisible rule that is applied to the end of an ACL. It ensures that traffic that is not explicitly matched by a previous rule in the ACL is denied by the ACL.

FlexConnect ACLs are applied per AP and per VLAN, not per AP and per interface. One possible application of FlexConnect ACLs is to prevent someone from administering the wireless local area network (WLAN) from a particular VLAN. Even though FlexConnect ACLs are applied differently than traditional ACLs, it is important to name FlexConnect ACLs differently from any traditional ACLs that might be configured on the WLAN.
`,
  reference: [
    {
      title: "Cisco: Configuring FlexConnect ACLs: Restrictions for FlexConnect Access Control Lists",
      link: "https://www.cisco.com/c/en/us/td/docs/wireless/controller/8-1/config-guide/b_cg81/flexconnect.html"
    }
  ]
},

{
  id: 418,
  category: "Security Fundamentals",
  questionType: "Single-select",
  question: `The sending host on a site-to-site VPN that is constructed by using GRE with IPSec for transport encrypts a new packet.

Which of the following steps occurs next? (Select the best answer.)`,
  options: [
    "The sending host adds the session key to the packet.",
    "The sending host adds a VPN header and an IP header.",
    "The receiving host decrypts the packet.",
    "The sending host sends the packet to the destination."
  ],
  correctAnswer: 1,
  explanation: `
<b>Explanation:</b><br>
After a sending host on a site-to-site virtual private network (VPN) that is constructed by using Generic Routing Encapsulation (GRE) with Internet Protocol Security (IPSec) for transport encrypts a new packet, the sending host adds a VPN header and an Internet Protocol (IP) header to the packet in a process known as encapsulation.

A site-to-site VPN uses IPSec to transport information across a tunnel that is established between two hosts. A typical site-to-site VPN uses GRE with confidentiality, integrity, and antireplay protection provided by IPSec. There are four steps in the site-to-site VPN IPSec encryption process. By contrast, a remote access VPN uses client software to encrypt traffic between a remote user and internal company resources.

First, the sending device combines a session key, which is also known as an encryption key or a shared key, with the data that is to be transported over the tunnel. It then uses the session key to encrypt both the data and the key.

Second, the sending device encapsulates the encrypted data and session key into a packet with a VPN header and a new IP header. These headers contain the source and destination information that is used to transport the encrypted data and session key over the tunnel.

Third, the sending device sends the completed packet to the destination device at the other end of the tunnel, or site-to-site VPN.

Fourth and finally, the destination device, or receiving device, uses the same session key that the sending device used for encryption to decrypt the encrypted packet and session key.
`,
  reference: [
    {
      title: "Boson CCNA Curriculum 200-301, Module 8: Security Fundamentals",
      description: "GRE Tunnels"
    },
    {
      title: "CCNA 200-301 Official Cert Guide, Volume 2, Chapter 14",
      description: "WAN Architecture, Internet VPN Fundamentals"
    }
  ]
},

{
  id: 484,
  category: "Network Access",
  questionType: "Single-select",
  question: `Which of the following Cisco lightweight AP modes can form a mesh when it is enabled on multiple APs? (Select the best answer.)`,
  options: [
    "bridge",
    "local",
    "FlexConnect",
    "sniffer"
  ],
  correctAnswer: 0,
  explanation: `
<b>Explanation:</b><br>
Of the available choices, a Cisco lightweight access point (AP) operating in bridge mode can form a mesh when it is enabled on multiple APs. A lightweight AP provides an interface for wireless clients to connect to the wireless local area network (WLAN) but requires a wireless LAN controller (WLC) for management functions. This is in contrast to an autonomous AP, which does not need a WLC. Lightweight APs operating in bridge mode can connect to other networks in either a point-to-point or a point-to-multipoint fashion. When multiple APs are configured in bridge mode, the collection of lightweight APs can be used to form a mesh network.

A Cisco lightweight AP operating in local mode provides basic service sets (BSSs); it does not send captured traffic to an analyzer. A BSS is a closed group of wireless devices that are dependent on a fixed device. Before a wireless device can join the group, it must advertise its capabilities and obtain permission from the fixed device. A lightweight AP operating in local mode, which is the default, is capable of providing multiple BSSs on a single channel. In this mode, the AP can connect to a WLC and can provide client connectivity. In addition, an AP operating in local mode scans all wireless channels as a means of monitoring wireless quality and security. The connection between a lightweight AP and a WLC is created by using two tunnels established by the Control and Provisioning of Wireless Access Points (CAPWAP) tunneling protocol. Information sent between lightweight APs and the WLC is encapsulated in Internet Protocol (IP) packets. This process enables a lightweight AP and WLC to manage connectivity to the same WLAN yet be separated by both physical and logical means.

A Cisco lightweight AP operating in FlexConnect mode enables a failsafe for the lightweight AP if its connection to the WLC by way of CAPWAP tunnels goes down; it does not form a mesh when it is enabled on multiple APs. When configured, FlexConnect mode enables a lightweight AP to switch traffic between a given Service Set Identifier (SSID) and a given virtual local area network (VLAN).

A Cisco lightweight AP operating in sniffer mode allows the AP to capture wireless traffic, similar to the way a wired network sniffer behaves; it does not form a mesh when it is enabled on multiple APs. When traffic is captured, a lightweight AP that is operating in sniffer mode will send the traffic to an analyzer, which is typically software that is installed on a PC or other host.
`,
  reference: [
    {
      title: "CCNA 200-301 Official Cert Guide, Volume 1, Chapter 27",
      description: "Analyzing Cisco Wireless Architectures, Cisco AP Modes"
    }
  ]
},

{
  id: 449,
  category: "Security Fundamentals",
  questionType: "Single-select",
  question: `You are configuring Layer 2 security on a WLAN by using the WLC GUI. You select <b>WPA+WPA2</b> from the Layer 2 Security drop-down list box. You want to configure the WPA2 passphrase in ASCII format.

Which of the following WPA2 key management methods should you select from the Auth Key Mgmt drop-down list box? (Select the best answer.)`,
  options: [
    "CCKM",
    "802.1X+CCKM",
    "PSK",
    "802.1X"
  ],
  correctAnswer: 2,
  explanation: `
<b>Explanation:</b><br>
You should select the PSK Wi-Fi Protected Access 2 (WPA2) key management method from the <b>Auth Key Mgmt</b> drop-down list box if you want to configure the WPA2 passphrase in American Standard Code for Information Interchange (ASCII) format. The PSK method configures WPA or WPA2 to use the Pre-Shared Key (PSK) key management method. This method requires that an administrator configure each wireless client that will connect to the network with the key that is configured on the access point or wireless LAN controller (WLC). The PSK option supports key entry as either an ASCII passphrase from 8 through 63 characters in length or a key of 64 hexadecimal values. Combining WPA or WPA2 with a PSK key management method is often known as WPA-PSK, or WPA Personal.

You should not select the 802.1X key management method in this scenario. The Institute of Electrical and Electronics Engineers (IEEE) 802.1X standard defines a method of port-based network access control. On Cisco wireless local area networks (WLANs), the 802.1X key management method is the default method for both WPA and WPA2. It typically requires a Remote Authentication Dial-In User Service (RADIUS) server and uses various Extensible Authentication Protocol (EAP) implementations to authenticate users. Combining WPA or WPA2 with an 802.1X key management method is often known as WPA-8021X mode, or WPA Enterprise.

You should not select the CCKM key management method in this scenario. This option enables the Cisco Centralized Key Management (CCKM) key management method. CCKM is a Cisco-proprietary fast-rekeying method that enables a wireless client to roam from one access point to another without requiring authentication from the WLC. CCKM is typically used to reduce delay when wireless clients transition between access points so that delay-sensitive services, such as Voice over Internet Protocol (VoIP), operate smoothly.

You should not select the 802.1X+CCKM key management method in this scenario. This option enables 802.1X clients to use the CCKM key management method to roam between access points without performing the complete authentication process again. Normally, 802.1X clients mutually authenticate to a new access point. This process likewise involves reauthenticating with the RADIUS server. The 802.1X+CCKM key management method reduces the need to reauthenticate with the RADIUS server, thus reducing the amount of time it takes for an 802.1X client to roam between access points.
`,
  reference: [
    {
      title: "Boson CCNA Curriculum 200-301, Module 8: Security Fundamentals",
      description: "Configuring Cisco WLAN Layer 2 Security"
    },
    {
      title: "Cisco: WLAN Security: Configuring WPA1+WPA2 (GUI)",
      link: "https://www.cisco.com/c/en/us/td/docs/wireless/controller/8-5/config-guide/b_cg85/wlan_security.html"
    }
  ]
},

{
  id: 703,
  category: "Network Access",
  questionType: "Single-select",
  question: `Which of the following is not a type of IEEE 802.11 management frame? (Select the best answer.)`,
  options: [
    "association response",
    "beacon",
    "probe request",
    "power-save poll"
  ],
  correctAnswer: 3,
  explanation: `
<b>Explanation:</b><br>
A power-save poll frame is not a type of Institute of Electrical and Electronics Engineers (IEEE) 802.11 management frame; instead, a Power Save (PS) Poll frame is a type of IEEE 802.11 control frame. There are three general types of 802.11 frames: control, management, and data. Each of these general types is further subdivided into several, more granular subtypes. The 2-byte Frame Control (FC) field of the 802.11 frame header is used to identify the type and subtype of each frame.

Management frames are used to manage the connection between an access point (AP) and a wireless client. Numerous types of management frames exist, including beacons, probe requests, probe responses, association requests, association responses, authentication requests, authentication responses, deauthentication responses, reassociation requests, reassociation responses, and announcement traffic indication messages. Each of these frame types performs specific duties necessary to initialize, maintain, or terminate wireless transmissions between an AP and a client. Because they are not encrypted by default, management frames are frequently targeted by malicious users. For example, deauthentication management frames, which are used to terminate wireless connections, can be used to launch Denial of Service (DoS) attacks when the frames are spoofed.

Control frames are used to manage access to the wireless medium. Numerous types of control frames exist, including Ready-to-Send (RTS), Clear-to-Send (CTS), Acknowledgment (ACK), and PS Poll. RTS and CTS frames are used to manage potential interference between transmitting stations. ACK frames are used to acknowledge data frames. PS-Poll frames are used by wireless clients to poll an AP for frames that might have been buffered while the clients were in a power-saving mode.

Data frames are used to convey user data through the wireless network. Numerous types of data frames exist; however, there are two general categories of data frames: contention free (CF) service frames and contention-based service frames. Most wireless networks operate in a contention-based service infrastructure. Wireless devices in a contention-based service infrastructure use the Distributed Coordination Function (DCF) to share the medium. DCF relies on RTS and CTS control frames to manage interference and does not provide any Quality of Service (QoS) features. By contrast, CF service infrastructures use the 802.11 Point Coordination Function (PCF) to control access to the medium and to provide QoS features through the APs.
`,
  reference: [
    {
      title: "O'Reilly Press: 802.11 Wireless Networks: The Definitive Guide: Chapter 4",
      description: "802.11 Framing in Detail"
    },
    {
      title: "Wi-Fi Planet: Understanding 802.11 Frame Types",
      link: "https://www.wi-fiplanet.com/tutorials/article.php/3410171/Wi-Fi-Tutorial-Understanding-80211-Frame-Types.htm"
    }
  ]
},

{
  id: 60,
  category: "IP Connectivity",
  questionType: "Single-select",
  question: `You are attempting to configure OSPF between RouterA and RouterB on your network. However, the routers are unable to form an OSPF adjacency. You issue the <b>show ip ospf interface fastethernet 0/0</b> command on each router and receive the following output:
<pre>
RouterA#show ip ospf interface fastethernet 0/0
FastEthernet 0/0 is up, line protocol is up
  Internet Address 10.1.1.13/30, Area 1
  Process ID 101, Router ID 192.168.15.237, Network Type BROADCAST,
  Cost: 1
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
  Process ID 102, Router ID 192.168.15.237, Network Type BROADCAST,
  Cost: 1
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
</pre>
Why are the routers unable to form an adjacency? (Select the best answer.)`,
  options: [
    "The cost must be higher than 1.",
    "The OSPF process IDs must match.",
    "The OSPF areas must match.",
    "The router IDs must not match.",
    "The dead timer value must match the Hello timer value.",
    "The IP addresses are configured with the wrong subnet mask."
  ],
  correctAnswer: 2,
  explanation: `
<b>Explanation:</b><br>
The routers are unable to form an adjacency because the Open Shortest Path First (OSPF) areas must match. Although you can configure a multiarea OSPF topology, the OSPF areas on neighboring interfaces must match in order for two OSPF routers to form an adjacency. In this scenario, RouterB's FastEthernet 0/0 interface is operating in Area 0 and is directly connected to RouterA's FastEthernet 0/0 interface, which is operating in Area 1. Area 0 is also known as the backbone area. If you are not using virtual links, any nonbackbone OSPF areas you configure must border Area 0. On smaller networks, single-area OSPF configurations also offer the benefit of generating fewer link-state advertisements (LSAs).

Only OSPF routers in the same hierarchical area form adjacencies. To configure an OSPF area, you should issue the <b>network address mask area area</b> command in OSPF router configuration mode.

The OSPF router IDs in this scenario are already unique. To manually configure the router ID, you should issue the <b>router-id ip-address</b> command in router configuration mode, where <i>ip-address</i> is a 32-bit value in dotted decimal notation. If the router ID is not manually configured, the router ID will be the highest loopback Internet Protocol (IP) address configured on a router. If a loopback IP address is not configured, then the router ID will be the highest IP address among the configured interfaces on the router. Router IDs must be unique; a router will ignore Hello packets that are marked with its own router ID.

Whereas Enhanced Interior Gateway Routing Protocol (EIGRP) process IDs must match when EIGRP is used, OSPF process IDs do not have to match when OSPF is used. The OSPF process ID is locally significant to the router and can be any positive integer in the range from 1 through 65535. You can specify the OSPF process ID by issuing the <b>router ospf process-id</b> command when you configure a router for OSPF.

The cost does not have to be higher than 1. By default, OSPF uses the bandwidth of a link to determine the cost. The higher the bandwidth, the lower the cost. To calculate the cost, divide 100,000,000 by the bandwidth in bits per second (bps). The FastEthernet 100-megabits per seconds (Mbps) link between RouterA and RouterB would have a default cost of 1, because 100,000,000 / 100,000,000 = 1. To manually configure the OSPF cost of a link, you should issue the <b>ip ospf cost cost</b> command in interface configuration mode.

The IP addresses for RouterA and RouterB are within the same subnet. Therefore, the subnet mask is correct, and the two routers should be able to communicate. A /30 subnet mask allows for two hosts per subnet. In this example, 10.1.1.12/30 is the network address, 10.1.1.13/30 and 10.1.1.14/30 are valid host addresses, and 10.1.1.15/30 is the broadcast address.

The dead timer value should not match the Hello timer value. In order for OSPF routers to establish an adjacency, the dead timer on one router should match the dead timer on the other router and the Hello timer on one router should match the Hello timer on the other router. Both RouterA and RouterB are set to a Hello interval of 10 seconds and a dead interval of 40 seconds, so the OSPF timers are configured correctly. The Hello timer is used to specify the amount of time between sending Hello packets, and the dead timer is used to specify the amount of time to wait for Hello packets before declaring a neighbor to be down. By default, the Hello timer is set to 10 seconds on point-to-point and broadcast links and 30 seconds on nonbroadcast multiaccess (NBMA) links. The dead timer is set to four times the Hello timer value by default. To manually configure the Hello timer interval, you should issue the <b>ip ospf hello-interval seconds</b> command in interface configuration mode. To manually configure the dead timer interval, you should issue the <b>ip ospf dead-interval seconds</b> command in interface configuration mode.
`,
  reference: [
    {
      title: "Boson CCNA Curriculum 200-301, Module 6: IP Routing",
      description: "Troubleshooting OSPF Adjacencies"
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
  id: 685,
  category: "Network Fundamentals",
  questionType: "Single-select",
  question: `Which of the following addresses will a switch use to populate the CAM table? (Select the best answer.)`,
  options: [
    "source MAC addresses",
    "destination MAC addresses",
    "source IP addresses",
    "destination IP addresses"
  ],
  correctAnswer: 0,
  explanation: `
<b>Explanation:</b><br>
A switch will use source Media Access Control (MAC) addresses to populate the Content Addressable Memory (CAM) table. The CAM table, which is also called the switching table, is used by a switch to discover the relationship between the Open Systems Interconnection (OSI) Layer 2 address of a device and the physical port used to reach the device. The switch populates the CAM table by recording the source MAC address of an inbound Layer 2 frame and the corresponding switch port that the frame arrived on.

Switches make forwarding decisions based on the destination MAC address contained in a frame's header. The switch first searches the CAM table for an entry that matches the frame's destination MAC address. If the frame's destination MAC address is not found in the table, the switch forwards the frame to all its ports, except the port from which it received the frame. If the destination MAC address is found in the table, the switch forwards the frame to the appropriate port. The source MAC address is also recorded if it did not previously exist in the CAM table.

A switch will not use destination MAC addresses to populate the CAM table. However, if a switch already has entries in the CAM table for a frame's source and destination MAC addresses, the switch can forward frames between them.

A switch will not use source or destination Internet Protocol (IP) addresses to populate the CAM table. IP addresses are Layer 3 addresses that are typically used to populate the routing table, which is stored in the Ternary CAM (TCAM) table.
`,
  reference: [
    {
      title: "Boson CCNA Curriculum 200-301, Module 5: Switching and Network Access",
      description: "Using the CAM Table"
    },
    {
      title: "CCNA 200-301 Official Cert Guide, Volume 1, Chapter 5",
      description: "Analyzing Ethernet LAN Switching, Learning MAC Addresses"
    },
    {
      title: "Cisco: Catalyst 6500/6000 Switches ARP or CAM Table Issues Troubleshooting: Background Information",
      link: "https://www.cisco.com/c/en/us/support/docs/switches/catalyst-6500-series-switches/12013-12.html"
    }
  ]
},

{
  id: 615,
  category: "Network Fundamentals",
  questionType: "Matching",
  question: `Match each Ethernet frame field (left) to its position/order (right, 1 to 7).

Available options (on the left):
- preamble
- SOF
- destination address
- source address
- type
- payload
- FCS

Order (on the right): 1, 2, 3, 4, 5, 6, 7`,
  matchingPairs: {
    terms: [
      { id: "t1", text: "preamble" },
      { id: "t2", text: "SOF" },
      { id: "t3", text: "destination address" },
      { id: "t4", text: "source address" },
      { id: "t5", text: "type" },
      { id: "t6", text: "payload" },
      { id: "t7", text: "FCS" }
    ],
    definitions: [
      { id: "1", text: "1" },
      { id: "2", text: "2" },
      { id: "3", text: "3" },
      { id: "4", text: "4" },
      { id: "5", text: "5" },
      { id: "6", text: "6" },
      { id: "7", text: "7" }
    ]
  },
  correctAnswer: {
    t1: "1",
    t2: "2",
    t3: "3",
    t4: "4",
    t5: "5",
    t6: "6",
    t7: "7"
  },
  explanation: `
An Ethernet frame typically consists of seven fields in the following order:
<ol>
<li>A 7-byte preamble field</li>
<li>A 1-byte start-of-frame (SOF) field</li>
<li>A 6-byte destination address field</li>
<li>A 6-byte source address field</li>
<li>A 2-byte type field</li>
<li>A data payload field in the range from 46 through 1,500 bytes</li>
<li>A 4-byte FCS field</li>
</ol>
The first five fields of the frame are known as the Ethernet header. The preamble field is used to notify receiving hosts that a frame is being sent. The SOF field is used for synchronization with other hosts on the local area network (LAN). The destination address field contains the Media Access Control (MAC) address of the host for which the data is intended. The source address field contains the MAC address of the host that is sending the data. Finally, an Ethernet header contains a 2-byte type field to indicate the protocol that is intended to receive the frame's data after processing. A payload field of a size in the range from 46 through 1,500 bytes immediately follows the Ethernet header.

The 4-byte Frame Check Sequence (FCS) field appears last in an Ethernet frame. The FCS field is a 4-byte cyclic redundancy check (CRC) that is intended to enable a frame's receiver to determine whether the frame has been corrupted in transit. The FCS is calculated based on the values of every other field in the frame. If a CRC error is detected, the frame will be discarded and the interface CRC and Frame counters will be incremented. Similarly, the frame will be discarded if it contains less than 64 bytes; a frame containing fewer than 64 bytes is referred to as a runt.
`,
  reference: [
    {
      title: "Boson CCNA Curriculum 200-301, Module 2: Network Addressing and Transport",
      description: "Ethernet Frames"
    },
    {
      title: "CCNA 200-301 Official Cert Guide, Volume 1, Chapter 2",
      description: "Fundamentals of Ethernet LANs, Ethernet Data-Link Protocols"
    },
    {
      title: "Cisco: Troubleshooting Ethernet: Frame Formats",
      link: "https://www.cisco.com/c/en/us/support/docs/ethernet/ethernet-sub/ipoverether_ps1831_TSD_Products_Technical_Note.html"
    }
  ]
},

{
  id: 676,
  category: "Network Access",
  questionType: "Matching",
  question: `Match each STP feature to its correct function.
`,
  matchingPairs: {
    terms: [
      { id: "t3", text: "root guard" },
      { id: "t4", text: "loop guard" },
      { id: "t1", text: "BPDU guard" },
      { id: "t2", text: "PortFast" }
    ],
    definitions: [
      { id: "3", text: "prevents introduced switches from being elected the new root" },
      { id: "1", text: "disables ports that erroneously receive BPDUs" },
      { id: "2", text: "reduces convergence time by placing edge ports into a forwarding state" },
      { id: "4", text: "prevents a switch port from transitioning to the forwarding state when it stops receiving BPDUs" }
    ]
  },
  correctAnswer: {
    t3: "3",
    t4: "4",
    t1: "1",
    t2: "2"
  },
  explanation: `
Root guard is used to prevent newly introduced switches from being elected the new root. This allows administrators to maintain control over which switch is the root. When Spanning Tree Protocol (STP) is used, the device with the lowest bridge priority is elected the root. If an additional device is added to the network with a lower priority than the current root, it will become the new root. However, this could cause the network to reconfigure in unintended ways. To prevent this, root guard can be applied. Root guard is applied on a per-port basis with the spanning-tree guard root command.

Loop guard places inconsistent ports into the blocking state. It also prevents a switch port from transitioning to the forwarding state when it stops receiving bridge protocol data units (BPDUs); this prevents switching loops from occurring. A port configured with loop guard that stops receiving BPDUs will be put into the loop-inconsistent state. After the port starts receiving BPDUs again, loop guard enables the port to transition through the normal STP states. To enable loop guard, issue the spanning-tree guard loop command from interface configuration mode.

PortFast reduces convergence time by immediately placing edge ports into a forwarding state. PortFast is recommended for ports that connect to end-user devices, such as desktop computers. In addition, PortFast cannot be used with loop guard. If PortFast is enabled on a loop guard–enabled port, loop guard will be automatically disabled. To enable PortFast, issue the spanning-tree portfast command from interface configuration mode.

BPDU guard disables ports that erroneously receive BPDUs. BPDU guard is applied to edge ports that have PortFast enabled. Because PortFast automatically places ports into a forwarding state, a switch that has been connected to a PortFast-enabled port could cause switching loops. However, when BPDU guard is applied, the receipt of a BPDU on a port with BPDU guard enabled will result in the port being placed into a disabled state, which prevents loops from occurring. To enable BPDU guard, issue the spanning-tree bpduguard enable command from interface configuration mode.
`,
  reference: [
    {
      title: "Boson CCNA Curriculum 200-301, Module 5: Switching and Network Access",
      description: "Cisco Enhancements to STP"
    },
    {
      title: "CCNA 200-301 Official Cert Guide, Volume 1, Chapter 9",
      description: "Spanning Tree Protocol Concepts, Optional STP Features"
    },
    {
      title: "Cisco: Configuring Optional Spanning-Tree Features: Understanding Optional Spanning-Tree Features",
      link: "https://www.cisco.com/c/en/us/support/docs/lan-switching/spanning-tree-protocol/10593-74.html"
    }
  ]
},

{
  id: 641,
  category: "Network Fundamentals",
  questionType: "Single-select",
  question: `Which of the following is a unique local IPv6 unicast prefix? (Select the best answer.)`,
  options: [
    "FC00::/7",
    "2000::/3",
    "FE80::/10",
    "FF00::/8"
  ],
  correctAnswer: 0,
  explanation: `
Of the available choices, only FC00::/7 is a unique local Internet Protocol version 6 (IPv6) unicast prefix. IPv6 unique local unicast addresses are similar to IP version 4 (IPv4) private addresses in that they are assigned by a local administrator and must be unique only within an organization. These addresses always begin with FC or FD because the first 7 bits of an IPv6 unique local unicast address are always 1111110. Unique local unicast addresses require a randomly generated prefix to ensure that they are unique. Because of the random nature of the network prefix, unique local unicast addresses are not aggregatable and cannot be summarized.

The IPv6 prefix of FE80::/10 is an IPv6 link-local unicast prefix, not a unique local prefix. IPv6 link-local unicast addresses are used for communication over a single link. Routers do not forward traffic sent to a link-local address; the traffic stays on the local link. IPv6 link-local unicast addresses are often used for neighbor discovery. These addresses usually begin with FE8, as specified in Request for Comments (RFC) 4291. Technically, these addresses could begin with FE9, FEA, or FEB because there are four possible combinations of the first 12 bits of the address. The first 10 bits of an IPv6 link-local unicast address are always 1111111010, or FE, which means that link-local IPv6 addresses could technically begin with any of the following:

• 1111 1110 1000, which is equal to FE8
• 1111 1110 1001, which is equal to FE9
• 1111 1110 1010, which is equal to FEA
• 1111 1110 1011, which is equal to FEB

The IPv6 prefix of 2000::/3 is a global unicast IPv6 prefix, not a unique local prefix. IPv6 global unicast addresses are similar to IPv4 global unicast addresses in that they are globally routable. These addresses are assigned by the Internet Corporation for Assigned Names and Numbers (ICANN) to the Regional Internet Registries (RIRs), which distribute the addresses to Internet service providers (ISPs). The ISPs then distribute address ranges to organizations. IPv6 global unicast addresses always begin with a 2 or a 3 because the first 3 bits of an IPv6 global unicast address are always 001.

The IPv6 prefix of FF00::/8 is a multicast IPv6 prefix, not a unique local prefix. IPv6 multicast addresses are similar to IPv4 multicast addresses. IPv6 addresses in the FF00::/8 range begin with the characters FF00 through FFFF. However, certain address ranges are used to indicate the scope of the multicast address. The following IPv6 multicast scopes are defined:

• FF01::/16 – node-local
• FF02::/16 – link-local
• FF05::/16 – site-local
• FF08::/16 – organization-local
• FF0E::/16 – global

These addresses always begin with FF because the first 8 bits of an IPv6 multicast address are always 11111111.
`,
  reference: [
    {
      title: "CCNA 200-301 Official Cert Guide, Volume 1, Chapter 23",
      description: "IPv6 Addressing and Subnetting, Unique Local Unicast Addresses"
    },
    {
      title: "RIPE: IPv6 Address Types (PDF)",
      link: "https://www.ripe.net/publications/docs/ripe-554"
    }
  ]
},

{
  id: 645,
  category: "Network Fundamentals",
  questionType: "Single-select",
  question: `Which of the following statements is true regarding link-local addresses? (Select the best answer.)`,
  options: [
    "They are used for ULA.",
    "They must be globally unique.",
    "They must never be used as source addresses.",
    "They must never be used as destination addresses.",
    "They are not routable."
  ],
  correctAnswer: 4,
  explanation: `
Link-local addresses are an Internet Protocol version 6 (IPv6) address type that is not routable. IPv6 link-local addresses are unicast addresses used for one-to-one communication. Because link-local unicast addresses are unique only on the local segment, they need not be globally unique and are not routable. An IPv6-capable host typically creates a link-local unicast address automatically at startup. Link-local unicast addresses are used for neighbor discovery and for environments in which no router is present to provide a routable IPv6 prefix. These addresses always begin with FE8, FE9, FEA, or FEB.

By contrast, a global unicast address, which is also referred to as an aggregatable global address, must be globally unique. Global unicast addresses are designed to minimize the size of Internet routing tables. A global unicast address contains three distinct parts:

• The Global Routing Prefix – identifies the public portion of the address, as assigned by a service provider
• The Site-Level Aggregator (SLA) – identifies the site or group of sites associated with the address
• The Interface ID – identifies the address assigned to the interface of the network device associated with the address

The Global Routing Prefix is a 48-bit field that is defined by the Internet service provider (ISP). The SLA is a 16-bit field that identifies a site and is analogous to a subnet in IP version 4 (IPv4). The Interface ID is a 64-bit field that must be globally unique; therefore, it typically contains the MAC address of the originating device in extended unique identifier (EUI)-64 format. Because there is an inherent hierarchy in the aggregatable global address scheme, these addresses lend themselves to simple consolidation, which greatly reduces the complexity of Internet routing tables.

Multicast addresses, not link-local addresses, must never be used as source addresses. The IPv6 prefix FF00::/8 is used for multicast addresses, which are used for one-to-many communication. IPv6 addresses in the FF00::/8 range begin with the characters FF00 through FFFF. However, certain address ranges are used to indicate the scope of the multicast address. The following IPv6 multicast scopes are defined:

• FF01::/16 – node-local
• FF02::/16 – link-local
• FF05::/16 – site-local
• FF08::/16 – organization-local
• FF0E::/16 – global

Unicast site-local addresses, not link-local addresses, are used for unique local addressing (ULA). Addresses with the IPv6 prefix FC00::/7 are used for private addressing in a fashion similar to the use of Request for Comments (RFC) 1918 addresses on IPv4 networks. The IPv6 prefix FC00::/7 refers to addresses that begin with the characters FC00 through FDFF. RFC 4193 outlines the best practices for private IPv6 addressing.
`,
  reference: [
    {
      title: "Boson CCNA Curriculum 200-301, Module 2: Network Addressing and Transport",
      description: "Understanding IPv6 Address Types"
    },
    {
      title: "CCNA 200-301 Official Cert Guide, Volume 1, Chapter 24",
      description: "Implementing IPv6 Addressing on Routers, Link-Local Addresses"
    },
    {
      title: "Cisco: IPv6 Addressing and Basic Connectivity Configuration Guide, Cisco IOS Release 15M&T",
      link: "https://www.cisco.com/c/en/us/td/docs/ios-xml/ios/ipv6/config_library/15-mt/ipv6-15-mt-book/ip6-add.html"
    },
    {
      title: "RIPE: IPv6 Address Types (PDF)",
      link: "https://www.ripe.net/publications/docs/ripe-554"
    }
  ]
},

{
  id: 86,
  category: "IP Services",
  questionType: "Single-select",
  question: `<p><img src="/images/q86.png" alt="ygb" style="max-width:100%;margin:12px 0;"></p>
<p>You are the administrator for the network shown above. DHCP services for the network are provided by the DHCP server on NetworkB. DHCP services are not running on the routers.</p>

<p>Which of the following commands should you issue to enable clients on NetworkA to receive IP addresses from the DHCP server? (Select the best answer.)</p>`,
  options: [
    "RouterB(config-if)#ip helper-address 10.10.1.2",
    "RouterB(config-if)#ip helper-address 10.10.3.5",
    "RouterB(config-if)#ip helper-address 10.10.1.1",
    "RouterA(config-if)#ip helper-address 10.10.1.1",
    "RouterA(config-if)#ip helper-address 10.10.1.2",
    "RouterA(config-if)#ip helper-address 10.10.3.5"
  ],
  correctAnswer: 5,
  explanation: `
To allow clients on NetworkA to receive Internet Protocol (IP) addresses from the Dynamic Host Configuration Protocol (DHCP) server located on NetworkB, you should issue the <b>ip helper-address 10.10.3.5</b> command on the Fa0/0 interface of RouterA. The <b>ip helper-address</b> command configures an interface to forward DHCP broadcasts across a network to the IP address of a DHCP server. The DHCP server will respond to the request and begin the DHCP discovery process.

By default, the ip helper-address command configures an interface to forward broadcasts to the following User Datagram Protocol (UDP) ports:

• UDP port 37 – Time Protocol
• UDP port 49 – Terminal Access Controller Access-Control System (TACACS)
• UDP port 53 – Domain Name System (DNS)
• UDP port 67 – Bootstrap Protocol (BOOTP) and DHCP Server
• UDP port 68 – BOOTP and DHCP Client
• UDP port 69 – Trivial File Transfer Protocol (TFTP)
• UDP port 137 – Network Basic Input/Output System (NetBIOS) Name Service
• UDP port 138 – NetBIOS Datagram

You can issue the <b>ip forward-protocol udp port</b> command to configure the router to forward broadcasts for additional UDP ports.

The use of the ip helper-address command is not limited to a single unicast address. If a network contains multiple DHCP servers, an entry for each server could be configured on the router. The same would hold true for a network running DHCP, DNS, and TFTP on multiple servers with different IP addresses. For example, if DHCP requests were serviced at IP address 10.10.3.5, DNS at 10.10.3.4, and TFTP at 10.10.3.3, you would issue the following commands:

RouterA(config-if)#ip helper-address 10.10.3.3
RouterA(config-if)#ip helper-address 10.10.3.4
RouterA(config-if)#ip helper-address 10.10.3.5

These commands would be displayed in the output of the <b>show running-config</b> command as shown as shown below:

<pre>
!
interface FastEthernet0/0
 ip address 10.10.2.1 255.255.255.0
 ip helper-address 10.10.3.3
 ip helper-address 10.10.3.4
 ip helper-address 10.10.3.5
 no ip directed-broadcast
 no shutdown
!</pre>

UDP broadcasts are not forwarded by routers. Therefore, the <b>ip helper-address</b> command must be issued on interface Fa0/0 of RouterA for UDP broadcast traffic to reach NetworkB. Issuing the <b>ip helper-address</b> command on RouterB will have no effect on broadcast traffic emanating from NetworkA.

The addresses 10.10.1.1 and 10.10.1.2 are serial interface IP addresses for RouterA and RouterB, respectively, and do not provide DHCP services for either network. When you configure the <b>ip helper-address</b> command, you should use the IP address of the DHCP server or a server farm. Using the IP address of a router's serial interface will not allow traffic to be broadcast onto a remote network.
`,
  reference: [
    {
      title: "Boson CCNA Curriculum 200-301, Module 7: IP Services",
      description: "DHCP Client Configuration"
    },
    {
      title: "Cisco: Cisco IOS IP Application Services Command Reference: ip helper-address",
      link: "https://www.cisco.com/c/en/us/td/docs/ios/12_2/ip/app_commands/ip-app/ip1-03.html#wp1026519"
    }
  ]
},

{
  id: 627,
  category: "Network Fundamentals",
  questionType: "Matching",
  question: `
<<<<<<< HEAD
You should place the addresses as shown in the following graphic:
=======
>>>>>>> copilot/add-scores-history-feature
Match each subnet mask to the number of valid host addresses it provides.
`,
  matchingPairs: {
    terms: [
      { id: "t1", text: "/25" },
      { id: "t2", text: "/23" },
      { id: "t3", text: "/22" },
      { id: "t4", text: "/20" },
      { id: "t5", text: "/19" }
    ],
    definitions: [
      { id: "a", text: "126 host addresses" },
      { id: "b", text: "510 host addresses" },
      { id: "c", text: "1,022 host addresses" },
      { id: "d", text: "4,094 host addresses" },
      { id: "e", text: "8,190 host addresses" }
    ]
  },
  correctAnswer: {
    t1: "a", // /25 -> 126 host addresses
    t2: "b", // /23 -> 510 host addresses
    t3: "c", // /22 -> 1,022 host addresses
    t4: "d", // /20 -> 4,094 host addresses
    t5: "e"  // /19 -> 8,190 host addresses
  },
  explanation: `
A subnet mask specifies how many bits belong to the network portion of a 32-bit Internet Protocol (IP) address. The remaining bits in the IP address belong to the host portion of the IP address. To determine how many host addresses are defined by a subnet mask, use the formula 2^n – 2, where n is the number of bits in the host portion of the address.

A /19 subnet mask uses 13 bits for host addresses. Therefore, 2^13 – 2 equals 8,190 valid host addresses.  

A /20 subnet mask uses 12 bits for host addresses. Therefore, 2^12 – 2 equals 4,094 valid host addresses.  

A /22 subnet mask uses 10 bits for host addresses. Therefore, 2^10 – 2 equals 1,022 valid host addresses.  

A /23 subnet mask uses 9 bits for host addresses. Therefore, 2^9 – 2 equals 510 valid host addresses.  

A /25 subnet mask uses 7 bits for host addresses. Therefore, 2^7 – 2 equals 126 valid host addresses.  

Although it is important to learn the formula for calculating valid host addresses, the following list demonstrates the relationship between subnet masks and valid host addresses:

• /16 subnet mask contains 2^16 – 2 = 65,534 host addresses  
• /17 subnet mask contains 2^15 – 2 = 32,766 host addresses  
• /18 subnet mask contains 2^14 – 2 = 16,382 host addresses  
• /19 subnet mask contains 2^13 – 2 = 8,190 host addresses  
• /20 subnet mask contains 2^12 – 2 = 4,094 host addresses  
• /21 subnet mask contains 2^11 – 2 = 2,046 host addresses  
• /22 subnet mask contains 2^10 – 2 = 1,022 host addresses  
• /23 subnet mask contains 2^9 – 2 = 510 host addresses  
• /24 subnet mask contains 2^8 – 2 = 254 host addresses  
• /25 subnet mask contains 2^7 – 2 = 126 host addresses  
• /26 subnet mask contains 2^6 – 2 = 62 host addresses  
• /27 subnet mask contains 2^5 – 2 = 30 host addresses  
• /28 subnet mask contains 2^4 – 2 = 14 host addresses  
• /29 subnet mask contains 2^3 – 2 = 6 host addresses  
• /30 subnet mask contains 2^2 – 2 = 2 host addresses  
`,
  reference: [
    {
      title: "Boson CCNA Curriculum 200-301, Module 2: Network Addressing and Transport",
      description: "Subnetting"
    },
    {
      title: "CCNA 200-301 Official Cert Guide, Volume 1, Chapter 14",
      description: "Analyzing Existing Subnets, Defining a Subnet"
    },
    {
      title: "Cisco: IP Addressing and Subnetting for New Users",
      link: "https://www.cisco.com/c/en/us/support/docs/ip/address-resolution-protocol-arp/13788-3.html"
    }
  ]
},

{
  id: 36,
  category: "IP Connectivity",
  questionType: "Single-select",
  question: `You are configuring HSRP version 1 for a group of Layer 3 switches in your company's network. The HSRP group has a virtual MAC address of 0000.0C07.AC0B.

Which part of the virtual MAC address identifies the HSRP group number? (Select the best answer.)`,
  options: [
    "0C",
    "00",
    "AC",
    "07",
    "0B"
  ],
  correctAnswer: 4,
  explanation: `
The Hot Standby Router Protocol (HSRP) group number is identified by the 0B in the virtual Media Access Control (MAC) address 0000.0C07.AC0B. HSRP is a Cisco-proprietary protocol that enables multiple routers to function as a single gateway for the network. HSRP configures two or more routers to share a virtual Internet Protocol (IP) address and a virtual MAC address so that the group of routers appears as a single device to other hosts on the network.

Based on priority value, HSRP elects a single active router and a standby router. The active router is the router with the highest priority; it forwards packets, responds to Address Resolution Protocol (ARP) requests with a virtual MAC address, and can be the only router that is explicitly configured with the virtual IP address. The standby router is the router with the second-highest priority. If multiple HSRP routers have the same priority, the router with the highest IP address will be elected as the active router. The router with the second-highest IP address will be elected as the standby router, which will assume the role of the active router if the active router fails. To participate in the active and standby router election process, each HSRP router must be a member of the same group. An HSRP group is identified by a group number value from 0 through 255. The default HSRP group value is 0.

To differentiate the virtual MAC addresses of the various groups, HSRP uses a special format based on the well-known virtual MAC address 0000.0C07.ACxx, where xx is the group number in hexadecimal format. In this scenario, the virtual MAC address for the HSRP group is 0000.0C07.AC0B; the group number is identified by the final two digits, 0B, in the virtual MAC address. Thus, because 0B is the hexadecimal equivalent of 11 in decimal notation, the virtual MAC address 0000.0C07.AC0B indicates that the HSRP group number for this scenario is 11.
`,
  reference: [
    {
      title: "Boson CCNA Curriculum 200-301, Module 6: IP Routing",
      description: "Understanding Virtual MAC Addresses"
    },
    {
      title: "Cisco: Configuring HSRP: Configuring HSRP",
      link: "https://www.cisco.com/c/en/us/support/docs/ip/hot-standby-router-protocol-hsrp/13780-5.html"
    }
  ]
},

{
  id: 456,
  category: "Automation and Programmability",
  questionType: "Matching",
  question: `
Match each item in the left column to its correct description on the right.<br>
`,
  matchingPairs: {
    terms: [
      { id: "t1", text: "output of show commands" },
      { id: "t2", text: "network automation" },
      { id: "t3", text: "automation script" }
    ],
    definitions: [
      { id: "a", text: "is often interpreted by a human administrator" },
      { id: "b", text: "uses a centralized controller to define data models" },
      { id: "c", text: "is written by a human to parse show command output" }
    ]
  },
  correctAnswer: {
    t1: "a",
    t2: "b",
    t3: "c"
  },
  explanation: `
Network automation uses a centralized controller to define and formalize data models. In addition, network automation aids reliable deployment of device configurations throughout an enterprise. Network automation includes the Software-Defined Networking (SDN) architecture. An SDN architecture is one in which management software is used to centralize device intelligence.

SDNs use northbound Application Programming Interfaces (APIs) to send network instructions from software applications to the central controller. Southbound protocols, which connect to a network's physical devices, are typically linked to the SDN by using a service abstraction layer (SAL). The SAL is a database, or registry, of the services provided by the southbound APIs. The APIs are bound to the registry so that the SAL can service an application's request.

The output of show commands is often interpreted by a human administrator. The issuing of Cisco IOS show commands to verify configurations and to troubleshoot networks is an action traditionally performed by an administrator. The administrator must then interpret the output of the show command to verify a configuration or to uncover problems with the configuration. Often, the output of a given show command must be compared to the output of other show commands or to a configuration standard in order for the administrator to obtain complete information.

An automation script is written by a human to parse show command output. Automation scripts are typically human-created programs that parse the output of show commands in order to obtain specific information about a specific configuration. Although they might ease administrative burden for common and repetitive tasks, automation scripts are less robust than network automation.
`,
  reference: [
    {
      title: "Boson CCNA Curriculum 200-301, Module 9: Automation and Programming",
      description: "Automation and Programming Overview"
    },
    {
      title: "CCNA 200-301 Official Cert Guide, Volume 2, Chapter 16",
      description: "Introduction to Controller-Based Networking, How Automation Impacts Network Management"
    },
    {
      title: "Cisco: What is Network Automation?",
      link: "https://www.cisco.com/c/en/us/products/cloud-systems-management/network-automation/what-is-network-automation.html"
    },
    {
      title: "Cisco: Software-Defined Networking: Why We Like It and How We Are Building On It",
      link: "https://www.cisco.com/c/dam/en_us/about/press/internet-protocol-journal/documents/ipj_16-1.pdf"
    }
  ]
},

{
  id: 82,
  category: "IP Connectivity",
  questionType: "Single-select",
  question: `You issue the <b>ip route 10.2.2.0 255.255.255.0 192.168.1.1 10</b> command.

What does the number <b>10</b> at the end of the command indicate? (Select the best answer.)`,
  options: [
    "the next-hop IP address",
    "the number of packets allowed",
    "the administrative distance",
    "the hop count",
    "the 192.168.1.10 IP address",
    "the number of IP addresses allowed"
  ],
  correctAnswer: 2,
  explanation: `
The number 10 at the end of the ip route 10.2.2.0 255.255.255.0 192.168.1.1 10 command indicates the administrative distance (AD) for the route. The syntax of the ip route command is 
ip route prefix mask {ip-address | interface} [distance], where prefix is the network address of the destination network, mask is the subnet mask of the destination network, ip-address is the Internet Protocol (IP) address of the next-hop router, interface is the local interface to which the packets should be sent, and distance is the AD of the route.

When multiple routes to a network exist and a more specific route is not available, the router will choose the route with the lowest AD. Therefore, a static route created by issuing the ip route 10.2.2.0 255.255.255.0 192.168.1.1 10 command would be preferred over a static route created by the ip route 10.2.2.0 255.255.255.0 192.168.2.1 20 command. An administrator will sometimes create static routes with different ADs so that a backup static route is available in case the primary static route goes down. A backup static route is often referred to as a floating static route.

If the AD is not specified in the ip route command, a static route uses the default AD of 1. Therefore, a static route created by issuing the ip route 10.2.2.0 255.255.255.0 192.168.0.1 command would be preferred over a static route created by the ip route 10.2.2.0 255.255.255.0 192.168.1.1 10 command.

The number 10 in the ip route 10.2.2.0 255.255.255.0 192.168.1.1 10 command does not indicate the number of IP addresses or packets allowed by the route. The static route in this scenario will allow any number of packets from the 10.2.2.0 255.255.255.0 network.

The number 10 in the ip route 10.2.2.0 255.255.255.0 192.168.1.1 10 command does not indicate the hop count for the route. Hop count is used by Routing Information Protocol (RIP) to indicate the number of routers a packet will traverse from source to destination. However, static routes do not use hop count as a metric.

The number 10 in the ip route 10.2.2.0 255.255.255.0 192.168.1.1 10 command does not indicate the 192.168.1.10 IP address. Packets destined for the 10.2.2.0 255.255.255.0 network will be sent to the next-hop address of 192.168.1.1.

The number 10 in the ip route 10.2.2.0 255.255.255.0 192.168.1.1 10 command does not indicate the next-hop address. The next-hop address of 192.168.1.1 is used for packets destined for the 10.2.2.0 255.255.255.0 network.
`,
  reference: [
    {
      title: "Boson CCNA Curriculum 200-301, Module 6: IP Routing",
      description: "Configuring a Floating Static Route"
    },
    {
      title: "Cisco: Cisco IOS IP Addressing Services Command Reference: ip route",
      link: "https://www.cisco.com/c/en/us/td/docs/ios/12_2/ipaddr/command/reference/iad_02.html#wp1027852"
    }
  ]
},

{
  id: 689,
  category: "Network Fundamentals",
  questionType: "Single-select",
  question: `Which of the following statements is true regarding VMs? (Select the best answer.)`,
  options: [
    "Installing virus protection on the host computer automatically protects any VMs running on that host computer.",
    "VMs running on a host computer must run the same version of an OS as the host computer.",
    "All software is shared between the host computer and the VMs.",
    "Multiple VMs can be running simultaneously on a single host computer."
  ],
  correctAnswer: 3,
  explanation: `
Multiple virtual machines (VMs) can be running simultaneously on a single host computer. A VM is an isolated environment running a separate operating system (OS) while sharing hardware resources with a host machine's OS. For example, you can configure a Windows 10 VM that can run within Windows 8; both OSs can run at the same time if virtualization software, such as Microsoft Virtual PC, is used. The Windows 10 VM could then be used as a testing environment for patch or application deployment. Depending on a computer's hardware capabilities, multiple VMs can be installed on a single computer, which can help provide more efficient utilization of hardware resources.

Before a VM is installed, it is important to ensure that the hardware on the host in which you are configuring the VM has enough central processing unit (CPU) process availability and random access memory (RAM) to support the simultaneous use of multiple OSs, and that the client you are accessing the VM from has sufficient network bandwidth. An additional programming layer, known as a hypervisor, is required in order for the VM to communicate with the host hardware. A hypervisor is used to allocate hardware resources, such as hard drive space, CPU, and RAM, to the VM.

The VMs on a host computer can, but are not required to, run the same version of an OS as the host computer. For example, you can install Ubuntu Linux on a VM that is hosted on a Windows 10 computer. Alternatively, as in the example given previously, you can configure a Windows 10 VM that can run within Windows 8.

Installing virus protection on the host computer will not automatically protect any VMs running on that host computer. Securing the host computer does not secure all virtual computers running on that host computer. You must manually manage the security of each VM that is installed on a host computer. For example, installing patches and security software on the host computer will not also configure the patches and software to be installed on the VMs.

Although a VM shares the hardware resources of the host computer, the software remains separate. Software installed on the host is not accessible from within the VM. For example, Microsoft Office might be installed on the host computer, but in order to access Microsoft Office from within a VM you must also install Microsoft Office on the VM. Separate instances of software on the host computer and on each VM can help protect the host computer from potentially harmful changes made within a VM. For example, if a VM user accidentally deletes a system file or installs malicious software, the host computer will not be affected.
`,
  reference: [
    {
      title: "Boson CCNA Curriculum 200-301, Module 4: Virtualization Fundamentals",
      description: "Device Virtualization"
    },
    {
      title: "CCNA 200-301 Official Cert Guide, Volume 2, Chapter 15",
      description: "Cloud Architecture, Server Virtualization"
    },
    {
      title: "IBM: Virtual Machines",
      link: "https://www.ibm.com/cloud/learn/vm"
    }
  ]
},

{
  id: 12,
  category: "IP Connectivity",
  questionType: "Single-select",
  question: `
You issue the <b>show ip route</b> command on RouterA and receive the following partial output:<br>
O 10.20.0.0/28 [110/64] via 192.168.10.1, 00:02:38, Serial0/1
<br><br>
You want to create a floating static route to 192.168.10.2 that will be used as a backup if the OSPF route goes down.<br>
Which of the following commands should you issue? (Select the best answer.)
`,
  options: [
    "ip route 10.20.0.0 255.255.255.240 192.168.10.2 120",
    "ip route 10.20.0.0 255.255.255.240 192.168.10.2 90",
    "ip route 10.20.0.0 255.255.255.240 192.168.10.2",
    "ip route 10.20.0.0 255.255.255.240 192.168.10.2 distance 150"
  ],
  correctAnswer: 0,
  explanation: `
You should issue the ip route 10.20.0.0 255.255.255.240 192.168.10.2 120 command. A floating static route is a static route with a nondefault administrative distance (AD) that can be used if an existing route goes down. The syntax of the ip route command is ip route prefix mask {ip-address | interface} [distance], where prefix is the network address of the destination network, mask is the subnet mask of the destination network, ip-address is the Internet Protocol (IP) address of the next-hop router, interface is the local interface to which the packets should be sent, and distance is the AD of the route.

You can view the AD of a route by issuing the show ip route command. The AD is the first number inside the brackets in the output. The output of the show ip route command in this scenario indicates that the AD of the Open Shortest Path First (OSPF) route is 110. Therefore, the floating static route must be configured with an AD higher than 110 so that it can be used as a backup route.

If you were to issue the ip route 10.20.0.0 255.255.255.240 192.168.10.2 command, the static route would be used instead of the OSPF route. When the ip route command is issued without the optional distance parameter, the default AD of 1 is used. This is lower than the AD of the OSPF route, so the static route would be used instead of the OSPF route. Similarly, if you were to issue the ip route 10.20.0.0 255.255.255.240 192.168.10.2 90 command, the AD of the static route would be 90, which is lower than the AD of the OSPF route.

You cannot issue the ip route 10.20.0.0 255.255.255.240 192.168.10.2 distance 150 command, because distance is not a valid keyword for the ip route command. The distance command can be used to change the AD of a routing protocol, such as OSPF.
`,
  reference: [
    {
      title: "Boson CCNA Curriculum 200-301, Module 6: IP Routing",
      description: "Understanding AD"
    },
    {
      title: "Boson CCNA Curriculum 200-301, Module 6: IP Routing",
      description: "Static Routes"
    },
    {
      title: "Cisco: Specify a Next Hop IP Address for Static Routes: Floating Static Route Example",
      link: "https://www.cisco.com/c/en/us/support/docs/ip/static/20848-46.html"
    }
  ]
},

{
  id: 73,
  category: "IP Services",
  questionType: "Single-select",
  question: `
You issue the <b>show ip nat translations</b> command on RouterA and receive the following partial output:<br><br>
Pro Inside global   Inside local         Outside local       Outside global<br>
udp 192.0.2.7:49713 10.20.30.55:49713   203.0.113.9:69      203.0.113.9:69<br>
tcp 192.0.2.8:49716 10.20.30.32:49716   203.0.113.13:23     203.0.113.13:23
<br><br>
HostA establishes a TFTP connection with HostB.<br>
<p>What is the IP address of HostA? (Select the best answer.)</p>
<p><img src="/images/q73.png" alt="NAT-translation-diagram" style="max-width:100%;margin:12px 0;"></p>
`,
  options: [
    "10.20.30.32",
    "10.20.30.55",
    "203.0.113.9",
    "192.0.2.7",
    "192.0.2.8",
    "203.0.113.13"
  ],
  correctAnswer: 1,
  explanation: `
<p>The Internet Protocol (IP) address of HostA is 10.20.30.55. The show ip nat translations command displays the mapping between internal and external IP addresses when Network Address Translation (NAT) is configured on a router. NAT translates between public and private IP addresses to enable hosts on a privately addressed network to access a public network, such as the Internet. By default, NAT provides only a one-to-one mapping of addresses. If multiple hosts require simultaneous access to the public network, NAT must be configured to use either a pool of public IP addresses or NAT overloading. In this scenario, RouterA is configured with a pool of public IP addresses.</p>

<p>The show ip nat translations command displays five fields of information for each NAT translation session:</p>

<ul>
<li>Protocol – displays the type of protocol in the translated session, such as Internet Control Message Protocol (ICMP), Transmission Control Protocol (TCP), or User Datagram Protocol (UDP)</li>
<li>Inside global address – displays an IP address that represents an inside host as seen by hosts on the outside network; the inside global address, which is an IP address in RouterA’s NAT pool, is 192.0.2.7</li>
<li>Inside local address – displays the IP address configured on a host on the local network, such as 10.20.30.32 or 10.20.30.55</li>
<li>Outside local address – displays the IP address of a host on the outside network as seen from a host on the inside network</li>
<li>Outside global address – displays the IP address configured on a host on the outside network</li>
</ul>

<p>Typically, NAT is configured only for addresses on the inside network; therefore, the outside local and outside global address are often identical, as seen in this example. The following graphic depicts the relationship between inside local, inside global, outside local, and outside global addresses:</p>
<p><img src="/images/q73.png" alt="NAT-translation-diagram" style="max-width:100%;margin:12px 0;"></p>

<p>In this scenario, 10.20.30.55 is the inside local address, 192.0.2.7 is the inside global address, and 203.0.113.9 is the outside local and outside global address.</p>

<p>When HostA initiates a Trivial File Transfer Protocol (TFTP) connection with HostB, it sends packets to 203.0.113.9 on UDP port 69. HostA also chooses an ephemeral port number that HostB will use when communicating back to HostA. Ephemeral ports are generally numbered from 49152 through 65535. When HostB at 203.0.113.9 responds to HostA, it will send packets to 192.0.2.7 on UDP port 49713.</p>

<p>The IP address 10.20.30.32 is the address of a host that is establishing a Telnet connection to 203.0.113.13 on TCP port 23. RouterA uses NAT to map the host’s IP address to 192.0.2.8, which is another public IP address in RouterA’s NAT pool.</p>
`,
  reference: [
    {
      title: "Boson CCNA Curriculum 200-301, Module 7: IP Services",
      description: "PAT Configuration"
    },
    {
      title: "Cisco: Cisco IOS IP Addressing Services Command Reference: show ip nat translations",
      link: "https://www.cisco.com/c/en/us/td/docs/ios/12_2/ipaddr/command/reference/iad_11.html#wp1027135"
    },
    {
      title: "Cisco: NAT: Local and Global Definitions",
      link: "https://www.cisco.com/c/en/us/support/docs/ip/network-address-translation-nat/13772-12.html"
    }
  ]
},

{
  id: 468,
  category: "Automation and Programmability",
  questionType: "Single-select",
  question: `Which of the following is a REST API encoding format that returns data in the form of an object that contains key and value pairs? (Select the best answer.)`,
  options: [
    "JSON",
    "YAML",
    "BSON",
    "XML"
  ],
  correctAnswer: 0,
  explanation: `
Of the available choices, JavaScript Object Notation (JSON) is a Representational State Transfer (REST) Application Programming Interface (API) encoding format that returns data in the form of an object that contains key and value pairs. REST APIs encode data in either Extensible Markup Language (XML) format or in JSON format. In addition, REST APIs are typically used to communicate with a Software-Defined Networking (SDN) application plane.

An SDN controller uses two different sets of APIs: one set to communicate with applications and another set to communicate with devices. Northbound APIs enable an SDN controller to communicate with applications in the application plane. Applications use northbound APIs to send requests or instructions to the SDN controller, which uses that information to modify and manage network flow. Southbound APIs enable an SDN controller to communicate with devices in the data plane.

JSON is a data modeling language that returns data in the form of an object that contains key and value pairs. A single JSON object can contain multiple key and value pairs. Each key and value pair inside a JSON object is separated from the others by a comma (,). Furthermore, each pair’s key is separated from its value by a colon (:). The element in quotation marks on the left side of each colon is the key. The element on the right side of each colon is the value, which might or might not be enclosed in quotation marks. There are several data value types that can be returned in JSON output: text, numeric, array, object, Boolean, and null.

XML is a REST API encoding format. However, XML does not return data in the form of key and value pairs. XML is a markup language that is similar to Hypertext Markup Language (HTML) in structure; it uses tags to define blocks of data. Whereas HTML is used to render information on a webpage, XML is a more structured language that is used to format data in a way that can be easily transmitted over the Internet and parsed by a variety of applications.

YAML Ain’t Markup Language (YAML) is not a REST API encoding format. YAML is a data serialization language that presents information in a format that is typically more human-readable than either XML or JSON. YAML is commonly used by the Ansible configuration management tool to store configuration playbooks.

Binary JSON (BSON) is not a REST API encoding format. BSON is a data serialization format that stores JSON data in a binary form that is not human-readable. This is in contrast to the text format that is typical of JSON. BSON is typically used in information storage systems, such as MongoDB.
`,
  reference: [
    {
      title: "Boson CCNA Curriculum 200-301, Module 9: Automation and Programming",
      description: "JSON"
    },
    {
      title: "CCNA 200-301 Official Cert Guide, Volume 2, Chapter 18",
      description: "Understanding REST and JSON, Interpreting JSON"
    }
  ]
},

{
  id: 37,
  category: "IP Services",
  questionType: "Single-select",
  question: `Which of the following is a congestion avoidance method that drops lower-priority packets if network congestion is detected? (Select the best answer.)`,
  options: [
    "WRED",
    "RED",
    "WFQ",
    "FIFO"
  ],
  correctAnswer: 0,
  explanation: `
Weighted random early detection (WRED) is a congestion avoidance method that drops lower-priority packets if network congestion is detected. WRED selectively drops packets when output queues reach a predefined threshold. When the average queue depth exceeds the minimum threshold for a designated service level, WRED begins to drop packets that match that service level. If the queue depth continues to grow, WRED progressively drops more packets that match the designated service level. When the average queue depth reaches the maximum threshold for a designated service level, all packets are dropped that match that service level. Because WRED drops packets based on their precedence if network congestion is detected, low-priority packets are dropped before high-priority packets are dropped.

Similarly, random early detection (RED) is a congestion avoidance method that drops packets if network congestion is detected. However, RED does not use Internet Protocol (IP) precedence to determine the priority of packets; instead, RED randomly drops packets based on a mark probability denominator. The mark probability denominator is the fraction of packets that should be dropped when a queue reaches its minimum threshold. Because RED does not select randomly drop packets, high-priority packets have the same probability of being dropped as lower-priority packets.

First-in-first-out (FIFO) queuing is a congestion management method, not a congestion avoidance method. FIFO is a basic queuing method that offers no packet prioritization or congestion avoidance. As the name implies, packets are processed in the order they are received without any regard to their IP precedence. Because there is no congestion avoidance in a FIFO queue, all packets destined for a full FIFO queue are dropped until the existing packets are processed and additional space is freed in the queue. FIFO queuing can cause jitter and delay for important traffic because bursts of unimportant traffic may fill the queue ahead of the important traffic.

Weighted fair queuing (WFQ) is a congestion management method, not a congestion avoidance method. Traffic flows are identified by WFQ based on source and destination IP address, port number, protocol number, and Type of Service (ToS). Although WFQ is easy to configure, it is supported only on interfaces at 2.048 megabits per second (Mbps) or lower and does not provide any bandwidth or delay guarantees. WFQ addresses the jitter and delay problems inherent with FIFO queuing, and it addresses the bandwidth starvation problem inherent with other congestion management methods, such as priority queueing (PQ).
`,
  reference: [
    {
      title: "Boson CCNA Curriculum 200-301, Module 7: IP Services",
      description: "Congestion Avoidance"
    },
    {
      title: "Cisco: Congestion Avoidance Overview: Weighted Random Early Detection",
      link: "https://www.cisco.com/c/en/us/support/docs/quality-of-service-qos/qos-congestion-management/1966-wred.html"
    }
  ]
},

{
  id: 667,
  category: "Network Access",
  questionType: "Multi-select",
  question: `Which of the following statements are true regarding LLDP? (Select 2 choices.)`,
  options: [
    "An LLDP interface can be configured to receive LLDP messages but not transmit them.",
    "It is enabled by default on Cisco switches.",
    "An LLDP interface can be configured to transmit LLDP messages but not receive them.",
    "It cannot be disabled at the interface level.",
    "It can convey VTP information."
  ],
  correctAnswer: [0,2],
  explanation: `
A Link Layer Discovery Protocol (LLDP) interface can be configured to receive LLDP messages but not transmit them, or it can be configured to transmit LLDP messages but not receive them. LLDP is an Open Systems Interconnections (OSI) Layer 2 open-standard discovery protocol that is used to facilitate interoperability between Cisco devices and non-Cisco devices. Attributes that can be learned from neighboring devices contain Type, Length, Value (TLV) information including port description, system description, and management address.

By default, all interfaces are configured to transmit and receive LLDP packets when LLDP is globally enabled. However, you can issue the lldp transmit and lldp receive commands from interface configuration mode to control the sending and receiving of LLDP packets for a specific interface. For example, the following sample output indicates that the FastEthernet 0/4 interface is configured to receive LLDP updates but not to send them:

SwitchA#show lldp interface fastethernet 0/4
FastEthernet0/4:
  Tx: disabled
  Rx: enabled
  Tx state: INIT
  Rx state: WAIT PORT OPER

By default, a Cisco switch will send LLDP advertisements every 30 seconds when LLDP is enabled on an interface. These advertisements are used by neighboring devices to update the LLDP information learned about each neighbor. They are also used as keepalive messages to ensure that a discovered neighbor continues to be available on the network. You can issue the lldp timer rate command from global configuration mode to configure the frequency at which LLDP advertisements are sent by a switch. The default rate value is 30 seconds; however, the rate can be configured to any integer value from 5 through 65534 seconds. A Cisco switch will retain LLDP information for 120 seconds when LLDP is enabled on an interface. This time interval is known as the LLDP holdtime. You can issue the lldp holdtime seconds command from global configuration mode to configure the LLDP holdtime to any integer value from 0 through 65535 seconds. Whenever a new LLDP advertisement is received, the hold timer is reset and the LLDP information is considered current. When the hold timer expires for a particular neighbor, the LLDP information regarding that neighbor is considered stale and is discarded.

You can issue the show lldp command from privileged EXEC mode to display the current LLDP configuration. The following sample output shows the default settings for a Cisco 3560 series switch after LLDP has been enabled globally:

SwitchA#show lldp
Global LLDP Information:
  Status: ACTIVE
  LLDP advertisements are sent every 30 seconds
  LLDP hold time advertised is 120 seconds
  LLDP interface reinitialisation delay is 2 seconds

LLDP is disabled by default on Cisco switches. You can issue the lldp run command from global configuration mode to enable LLDP globally on a switch.

Cisco Discovery Protocol (CDP), not LLDP, can provide VLAN Trunking Protocol (VTP) information in advertisements. VTP is a protocol that is used to centrally manage virtual local area network (VLAN) changes and to propagate those changes across a network to all devices in the VTP domain. Like LLDP, CDP is an OSI Layer 2 protocol that is used to advertise and discover only directly connected Cisco devices on a local network. However, unlike LLDP, CDP is a Cisco-proprietary protocol rather than open-standard. CDP sends advertisements every 60 seconds by default. Although CDP is enabled by default on many Cisco devices, it can be disabled for security purposes.
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
  id: 523,
  category: "Network Fundamentals",
  questionType: "Multi-select",
  question: `You issue the <b>show interfaces status</b> command while troubleshooting intermittent connectivity issues.

Which of the following causes are you most likely attempting to isolate? (Select 2 choices.)`,
  options: [
    "speed mismatches",
    "broadcast storms",
    "switching loops",
    "duplex mismatches",
    "late collisions"
  ],
  correctAnswer: [0,3],
  explanation: `
Most likely, you are attempting to troubleshoot duplex mismatches or speed mismatches if you issue the show interfaces status command while troubleshooting intermittent connectivity issues. Duplex mismatch errors can cause a number of problems on switches, including intermittent connectivity, performance problems, a high number of collisions, and late collisions. A duplex mismatch error occurs when the ends of a network link are configured with different duplex settings. Cisco switches support half-duplex mode and full-duplex mode, but both ends of the link should be configured to use the same duplex setting. If they are configured with different duplex settings, network performance could be adversely affected due to collisions being detected. One symptom of a duplex mismatch is that the half-duplex side of the connection will report late collisions. The full-duplex side, on the other hand, will report runts, Frame Check Sequence (FCS) errors, and alignment errors. You can configure the duplex settings explicitly, or you can configure the link to autonegotiate duplex settings. Duplex mismatches can sometimes be difficult to diagnose because the problems might be intermittent and the interface will report an up/up state. If you suspect that a duplex mismatch is causing network problems, you can use the status parameter of the show interfaces command to verify the duplex settings for all the interfaces on a switch.

Speed mismatch errors can prevent an interface from sending or receiving traffic. A speed mismatch error occurs when one end of a network link is configured to use a different speed than the other end of the link, such as when one end of a link is configured to transmit at 100 megabits per second (Mbps) while the other end of the link is configured to transmit at 10 Mbps. In such a scenario, a link between the two interfaces would not be able to be established and the link would remain in the down state. If you suspect that a speed mismatch error is causing network problems, you can use the status parameter of the show interfaces command to verify the speed settings for all the interfaces on a switch.

It is not likely that you are troubleshooting broadcast storms if you issue the show interfaces status command. A broadcast storm is the result of an extreme amount of broadcast traffic on a network, thereby causing network congestion. Broadcast traffic is traffic, such as Internet Control Message Protocol (ICMP) traffic, that is sent to all hosts on a network. A broadcast storm occurs when a device repeatedly sends out broadcast packets, resulting in continual broadcast responses from other hosts on the network. The visible indication of flow of broadcast traffic can be the result of connecting multiple switches together in such a way as to create a loop or the result of connecting a patch cable to two different ports on the same switch.

A sluggish or unresponsive network is characteristic of a network suffering from a broadcast storm. In addition, broadcast storms can usually highly CPU utilization by connected hosts as well as any affected switches. High CPU usage results from the devices processing the large volume of packets being sent over the network during the storm. You might also see a high collision count after issuing the show interfaces command. To view the CPU usage of a device, you can issue the show processes command.

It is not likely that you are troubleshooting late collisions if you issue the show interfaces status command. A late collision is a collision that occurs after the 512th bit (64th byte) of a frame has been transmitted by a device. A switch detects such a collision if it begins sending a frame and a collision occurs after 512 bits of the outgoing frame have been sent. The amount of time it takes to send the first 512 bits of a frame is dependent on the network technology in use. For example, it takes 5.12 microseconds to send 512 bits over a 10-Mbps Ethernet segment, whereas it only takes 5.12 microseconds to send 512 bits over a 100-Mbps FastEthernet segment. Similar to other collision errors, late collisions can occur as a result of duplex mismatch errors or a network segment that extends farther than the cable length supports. If you notice late collisions occurring on an interface, you should ensure that the duplex settings are configured correctly and that the network segments are not too long. You can issue the show interfaces interface command to troubleshoot late collisions.

It is not likely that you are troubleshooting switching loops if you issue the show interfaces status command. There can be only one active path at any given time between any two devices on an Ethernet network. If multiple paths between the same two endpoints exist at the same time, switching loops can occur. You can issue the show spanning-tree command to examine the Spanning Tree Protocol (STP) configuration on a switch. STP is designed to eliminate switching loops by placing redundant connections between switches in a blocking state.
`,
  reference: [
    {
      title: "Boson CCNA Curriculum 200-301, Module 1: Network Fundamentals",
      description: "Duplex Mismatch and Speed Mismatch"
    },
    {
      title: "CCNA 200-301 Official Cert Guide, Volume 1, Chapter 15",
      description: "Network Troubleshooting"
    },
    {
      title: "Cisco: Cisco IOS Interface and Hardware Component Command Reference: show interfaces",
      link: "https://www.cisco.com/c/en/us/td/docs/ios-xml/ios/interface/command/ir-cr-book/ir-s2.html"
    }
  ]
},

{
  id: 519,
  category: "Security Fundamentals",
  questionType: "Single-select",
  question: `You want to assist users on your company’s network in generating strong passwords for any accounts they might access from the network, including passwords for sites on the Internet that are not controlled by your organization. In addition, some of your company’s users have expressed concerns about remembering unique passwords after you recommended not using the same password for all accounts.

Which of the following is a solution that you are most likely to recommend to your company’s users? (Select the best answer.)`,
  options: [
    "issuing the user secret command",
    "installing a password manager application",
    "issuing the enable secret command",
    "implementing an enterprise-wide SSO solution"
  ],
  correctAnswer: 1,
  explanation: `
Most likely, you will recommend installing a password manager application in this scenario. A password manager application is software that centrally stores a given user’s account credentials for multiple service providers. In this way, it is similar to a password book or a password list that a user might manually maintain on paper. Unlike manual methods, password manager applications often include the following additional benefits:

• Automatic generation of unique and complex passwords for new accounts  
• Automatic Uniform Resource Locator (URL)–based filling of web forms that request credentials  
• Encrypted storage of credentials that can only be accessed by a master password or other more secure means  

The above features together enable users to easily create strong and unique passwords for every account, prevent attacks by keyloggers and phishing sites, and protect against typographical errors when they are filling in credentials.

You should not recommend issuing the enable secret command in this scenario. The enable secret command is typically issued by Cisco device administrators in order to create an encrypted password that is then used to access privileged EXEC mode in IOS. The secret keyword configures the password to appear in an encrypted format in the device’s running configuration. For example, the command enable secret eX$1m!M@x creates an enable password of eX$1m!M@x and stores the password as a Message Digest 5 (MD5) hash value. In the output of the show running-config command, the hash value of the password rather than the actual password would be displayed, similar to the following:

enable secret 5 $2â•…mWXYzQ81976tgzx

The 5 indicates that the password was encrypted with MD5.

You should not recommend issuing the username secret command in this scenario. The username secret command is typically issued by Cisco device administrators in order to create a user’s credentials on that specific device. The username command creates a new user and adds the user to the local user database on a router. The secret keyword configures the user’s password to appear in an encrypted format in the device’s running configuration. For example, the command username boson secret eX$1m!M@x creates a user named boson and stores the password as an MD5 hash value. In the output of the show running-config command, the hash value of the password rather than the actual password would be displayed, similar to the following:

username boson secret 5 $2â•…mWXYzQ81976tgzx

The 5 indicates that the password was encrypted with MD5.

You should not recommend implementing an enterprise-wide single sign-on (SSO) solution in this scenario, because an SSO solution would not prevent users from reusing passwords. In addition, an SSO solution would not extend to accounts that users maintain on the Internet, outside of your organization. SSO solutions enable users to use the same credentials to access many different servers or hosts on an organization’s network without reauthentication.
`,
  reference: [
    {
      title: "Boson CCNA Curriculum 200-301, Module 8: Security Fundamentals",
      description: "Maintaining Passwords"
    },
    {
      title: "Techopedia: Password Manager",
      link: "https://www.techopedia.com/definition/15313/password-manager"
    }
  ]
},

{
  id: 431,
  category: "Security Fundamentals",
  questionType: "Single-select",
  question: `You are implementing common Layer 2 security measures on a Cisco switch. You issue the <b>switchport nonegotiate</b> command on a switch interface.

Which of the following Layer 2 security measures are you implementing? (Select the best answer.)`,
  options: [
    "configuring the port mode manually",
    "disabling an unused port",
    "disabling DTP on a port",
    "enabling port security on an access port",
    "moving the port to an unused VLAN"
  ],
  correctAnswer: 2,
  explanation: `
You are disabling Dynamic Trunking Protocol (DTP) on a port when you issue the switchport nonegotiate command while you are implementing common Layer 2 security measures on a Cisco switch. By default, every network interface on a Cisco switch is an active port. Before you deploy a switch on a network, you should take steps to ensure that every trunk port and access port on the switch is secured and that every unused port on the switch is disabled.

By default, all interfaces on a Cisco switch will use DTP to automatically negotiate whether an interface should be a trunk port or an access port. The transmission of DTP packets over an interface can be exploited by a malicious user in order to obtain information about the network or to convert an interface that should be an access port into a trunk port. You should issue the switchport nonegotiate command on a manually configured port to prevent any attempts by the switch to negotiate by using DTP.

You are not configuring the port mode manually by issuing the switchport nonegotiate command in this scenario. To manually configure a trunk port, you should first issue the switchport trunk encapsulation protocol command in interface configuration mode, where protocol is the trunk encapsulation protocol you want to use, and then issue the switchport mode trunk command in interface configuration mode. To manually configure an access port, you should issue the switchport mode access command in interface configuration mode. Manually configuring interfaces to use either trunk mode or access mode effectively disables DTP and ensures that the traffic on those ports is restricted to the intended purpose. Even so, you should issue the switchport nonegotiate command on a manually configured trunk port to prevent any attempts by the switch to negotiate by using DTP, because a manually configured trunk port will continue to send DTP frames.

You are not disabling an unused port by issuing the switchport nonegotiate command in this scenario. Disabling an unused port creates a barrier that prevents rogue devices from communicating on the network should such a device connect to the port. To disable an unused port on a switch, you should issue the shutdown command on that port. To verify that a port is in the shutdown state, you should issue the show interfaces type number command, where type and number specify the interface you want to show. A port that has been shut down will be reported as administratively down by the show interfaces type number command.

You are not moving the port to an unused virtual local area network (VLAN) by issuing the switchport nonegotiate command in this scenario. Moving an unused port to an unused VLAN creates a logical barrier that prevents rogue devices from communication on the network should such a device connect to the port. To move an access port to an unused VLAN, you should issue the switchport access vlan vlan-id command on the port, where vlan-id is the ID of the unused VLAN. When you move an unused port to an unused VLAN, you should also manually configure the port as an access port by issuing the switchport mode access command and shut down the port by issuing the shutdown command.

You are not enabling port security on an access port by issuing the switchport nonegotiate command in this scenario. To protect switch interfaces against Media Access Control (MAC) flooding attacks, you should enable port security on all access mode interfaces on the switch. Issuing the switchport port-security command in interface configuration mode enables port security with default settings. You can modify port security settings before you enable port security by issuing the switchport port-security mac-address mac-address command, the switchport port-security maximum maximum-number-of-mac-addresses command, and the switchport port-security violation [protect | restrict | shutdown] command.

When enabled with its default settings, port security will shut down a port on which a violation occurs. In addition, port security will allow only the first MAC address to connect to the port to access the port.
`,
  reference: [
    {
      title: "Boson CCNA Curriculum 200-301, Module 5: Switching and Network Access",
      description: "Securing and Configuring DTP"
    },
    {
      title: "Cisco: Implementation of Security: Layer 2 Security Design",
      link: "https://www.cisco.com/c/en/us/support/docs/lan-switching/802-1x/13801-12.html"
    }
  ]
},

{
  id: 427,
  category: "Security Fundamentals",
  questionType: "Multi-select",
  question: `You issue the following commands on Switch1:<br>
<pre>
Switch1(config)#ip arp inspection vlan 11,14,18
Switch1(config)#interface fastethernet 0/1
Switch1(config-if)#switchport access vlan 14
Switch1(config-if)#switchport mode access
Switch1(config-if)#ip arp inspection trust
Switch1(config-if-range)#interface range fastethernet 0/2 - 4
Switch1(config-if-range)#switchport access vlan 14
Switch1(config-if-range)#switchport mode access
</pre>
Which of the following statements are true? (Select 2 choices.)`,
  options: [
    "All ports in VLAN 14 are trusted ports.",
    "Ports in every VLAN except VLAN 14 are trusted ports.",
    "Every port in VLANs 11, 14, and 18 is an untrusted port.",
    "The FastEthernet 0/1 port in VLAN 14 is a trusted port.",
    "Every port except the FastEthernet 0/1 port in VLAN 14 is an untrusted port."
  ],
  correctAnswer: [3, 4],
  explanation: `
In this scenario, the FastEthernet 0/1 port in virtual local area network (VLAN) 14 is a trusted port. In addition, every port except the FastEthernet 0/1 port in VLAN 14 is an untrusted port. The ip arp inspection vlan 11,14,18 command configures Dynamic ARP Inspection (DAI) globally for VLANs 11, 14, and 18. This means that every port in those VLANs is automatically configured with DAI. When DAI is configured on a switch, ports are labeled as either trusted or untrusted. An Address Resolution Protocol (ARP) packet that is received on a trusted port is not inspected, whereas an ARP packet received on an untrusted port is inspected. If an ARP reply received on an untrusted port does not match a trusted entry on the switch, the packet will be dropped.

By default, a port is configured as an untrusted port when DAI is enabled on that port. Therefore, configuring VLANs 11, 14, and 18 with DAI ensures that any port operating in those VLANs is automatically an untrusted port. When DAI is configured for an entire VLAN, you can override the default configuration for a given port by issuing the ip arp inspection trust command in interface configuration mode.

In this scenario, a range of four interfaces has been configured to operate on VLAN 14. These interfaces include the FastEthernet 0/1 interface, the FastEthernet 0/2 interface, the FastEthernet 0/3 interface, and the FastEthernet 0/4 interface. However, only the FastEthernet 0/1 interface has been configured with the ip arp inspection trust command. Therefore, only the FastEthernet 0/1 interface is a trusted port.

DAI can be enabled on a single VLAN or on multiple VLANs. To enable DAI, you should use the ip arp inspection vlan global configuration command. The syntax of the ip arp inspection vlan command is ip arp inspection vlan {vlan-ID | vlan-range}. A range of VLANs can be entered by using a comma-separated list or a dash-separated pair of VLAN numbers indicating the range of VLANs to include. For example, each of the following commands enables DAI on VLANs 2 through 4: ip arp inspection vlan 2,3,4 and ip arp inspection vlan 2-4. Configuring DAI on each VLAN ensures that traffic sent from each host is inspected. In addition, each port is by default an untrusted port.
`,
  reference: [
    {
      title: "Boson CCNA Curriculum 200-301, Module 8: Security Fundamentals",
      description: "DAI"
    },
    {
      title: "CCNA 200-301 Official Cert Guide, Volume 2, Chapter 8",
      description: "DHCP Snooping and ARP Inspection, Dynamic ARP Inspection Configuration"
    },
    {
      title: "Cisco: Configuring Dynamic ARP Inspection: Interface Trust States and Network Security",
      link: "https://www.cisco.com/c/en/us/support/docs/security/dynamic-arp-inspection/82376-dynarp-inspect.html"
    }
  ]
},

{
  id: 516,
  category: "Network Fundamentals",
  questionType: "Single-select",
  question: `Which of the following topologies provides the best balance of scalability and redundancy when deployed in the enterprise edge of the Cisco enterprise architecture model? (Select the best answer.)`,
  options: [
    "hub-and-spoke",
    "point-to-point",
    "full-mesh",
    "partial-mesh"
  ],
  correctAnswer: 3,
  explanation: `
A partial-mesh topology provides the best balance of scalability and redundancy when deployed in the enterprise edge of the Cisco enterprise architecture model. In a partial-mesh topology, redundant paths exist between some, but not all, of the devices in the network. Because some devices in a partial-mesh topology do not have redundant connections to other devices on the network, a certain degree of redundancy is compromised. However, the scalability of the network is proportionately increased because each device on the network is not required to have a connection to every other device.

A point-to-point topology does not provide the best balance of scalability and redundancy when deployed in the enterprise edge of the Cisco enterprise architecture model. A point-to-point topology is a simple topology that connects one network node to another network node by using a single direct link. Because the entire bandwidth of the directly connected link is dedicated to the transmission of signals between the two nodes, a point-to-point topology can be considered the simplest topology that provides the most quality and highest availability. However, a point-to-point topology cannot be implemented on large networks because, by definition, it supports only two network nodes.

A hub-and-spoke topology does not provide the best balance of scalability and redundancy when deployed in the enterprise edge of the Cisco enterprise architecture model. In a hub-and-spoke topology, each device connects to a central device in a hub-and-spoke fashion. Because every device in a hub-and-spoke topology must pass traffic through the central hub to reach any other spoke on the network, the hub represents a single point of failure. Thus redundancy is limited in a hub-and-spoke topology. In addition, the scalability of this topology is directly related to the resources available on the central device.

A full-mesh topology does not provide the best balance of scalability and redundancy when deployed in the enterprise edge of the Cisco enterprise architecture model. In a full-mesh topology, each device is required to have a direct connection to every other device on the network. This requirement enables a full-mesh topology to provide optimal redundancy and routing between devices on the network. However, this requirement limits the scalability of the topology because each new device on the network will require a connection to every existing device on the network.
`,
  reference: [
    {
      title: "CCNA 200-301 Official Cert Guide, Volume 2, Chapter 13",
      description: "LAN Architecture, Topology Terminology Seen Within a Two-Tier Design"
    }
  ]
},

{
  id: 681,
  category: "Network Access",
  questionType: "Single-select",
  question: `You have issued the <b>show running-config</b> command on SwitchA and have received the following partial output:
<pre>
interface FastEthernet0/8
 switchport trunk encapsulation dot1q
 switchport mode trunk
 switchport access vlan 20
 spanning-tree portfast
</pre>
Why would port FastEthernet 0/8 not be displayed in the output of the <b>show vlan</b> command on SwitchA? (Select the best answer.)`,
  options: [
    "FastEthernet 0/8 is configured to use PortFast.",
    "FastEthernet 0/8 is configured as an access port.",
    "FastEthernet 0/8 is not configured with an IP address.",
    "FastEthernet 0/8 is configured as a trunk port."
  ],
  correctAnswer: 3,
  explanation: `
Port FastEthernet 0/8 would not be displayed in the output of the show vlan command on SwitchA because FastEthernet 0/8 is configured as a trunk port. Only access ports are displayed in the output of the show vlan command, as shown in the following output:

<pre>
SwitchA#show vlan

VLAN Name                             Status    Ports
---- -------------------------------- --------- -------------------------------
1    default                          active    Fa0/4, Fa0/5,
                                                Fa0/7, Fa0/9, Fa0/10,
                                                Fa0/12, Gi0/1, Gi0/2
2    VLAN0002                         active
10   VLAN0010                         active    Fa0/3
20   VLAN0020                         active

1002 fddi-default                     active
1003 token-ring-default               active
1004 fddinet-default                  active
1005 trnet-default                    active

VLAN Type  SAID      MTU   Parent RingNo BridgeNo Stp BrdgMode Trans1 Trans2
---- ----- --------- ----- ------ ------ --------- --- ------- ------ ------
1    enet  100001    1500  -      -      -         -   -       -      -
2    enet  100002    1500  -      -      -         -   -       -      -
10   enet  100010    1500  -      -      -         -   -       -      -
20   enet  100020    1500  -      -      -         -   -       -      -
1002 fddi  101002    1500  -      -      -         -   -       -      -
1003 tr    101003    1500  -      -      -         -   -       -      -
1004 fdnet 101004    1500  -      -      -         -   -       -      -
1005 trnet 101005    1500  -      -      -         -   -       -      -
</pre>

To display information about trunk ports, you should issue the show interfaces trunk command, as shown in the following output:

<pre>
SwitchA#show interfaces trunk
Port      Mode         Encapsulation  Status        Native vlan
Fa0/1     on           802.1q         trunking      1
Fa0/8     on           802.1q         trunking      1

Port      Vlans allowed on trunk
Fa0/1     1-4094
Fa0/8     1-4094

Port      Vlans allowed and active in management domain
Fa0/1     1,2,10,20
Fa0/8     1,2,10,20

Port      Vlans in spanning tree forwarding state and not pruned
Fa0/1     1,2,10,20
Fa0/8     1,2,10,20
</pre>

Even though FastEthernet 0/8 is configured with the switchport access vlan 20 command, which is typically issued on access ports, FastEthernet 0/8 is also configured with the switchport mode trunk command, which configures FastEthernet 0/8 to be a trunk port, not an access port. To configure FastEthernet 0/8 to be an access port, you should issue the switchport mode access command from interface configuration mode.

Although port FastEthernet 0/8 is not configured with an Internet Protocol (IP) address, an IP address is not required for a switch port to be displayed by the show vlan command. Access ports operate at Layer 2; IP addresses are Layer 3 addresses.

Although port FastEthernet 0/8 is configured to use PortFast, PortFast will not prevent a switch port from being displayed by the show vlan command. PortFast is used to immediately place a switch port into a forwarding state, skipping the Spanning Tree Protocol (STP) listening and learning states. PortFast should be used only on ports that are connected to an end host, such as an IP phone, a client workstation, or a server. Conversely, PortFast should not be enabled on a port that is connected to a switch or other networking device. If you enable PortFast on such a port, you risk creating bridging loops because the port is permanently in the STP forwarding state.
`,
  reference: [
    {
      title: "CCNA 200-301 Official Cert Guide, Volume 1, Chapter 8",
      description: "Implementing Ethernet Virtual LANs, VLAN and VLAN Trunking Configuration and Verification"
    },
    {
      title: "CCNA 200-301 Official Cert Guide, Volume 1, Chapter 9",
      description: "Spanning Tree Protocol Concepts, Optional STP Features"
    },
    {
      title: "Cisco: Cisco IOS LAN Switching Command Reference: show vlan",
      link: "https://www.cisco.com/c/en/us/td/docs/ios-xml/ios/lanswitch/command/lsw-cr-book/lsw_s1.html"
    },
    {
      title: "Cisco: Configuring Optional Spanning-Tree Features: Understanding Optional Spanning-Tree Features",
      link: "https://www.cisco.com/c/en/us/support/docs/lan-switching/spanning-tree-protocol/10593-74.html"
    }
  ]
},

{
  id: 672,
  category: "Network Access",
  questionType: "Multi-select",
  question: `<p><img src="/images/q672.png" alt="etherchannel-modes" style="max-width:100%;margin:12px 0;"></p>
<p>You want to establish an EtherChannel between SwitchA and SwitchB that uses an IEEE standards-based protocol.</p>

<p>Which of the following channel-group modes could you configure on the switches? (Select 2 choices.)</p>`,
  options: [
    "SwitchA set to auto and SwitchB set to auto",
    "SwitchA set to active and SwitchB set to active",
    "SwitchA set to passive and SwitchB set to active",
    "SwitchA set to auto and SwitchB set to desirable",
    "SwitchA set to on and SwitchB set to on",
    "SwitchA set to passive and SwitchB set to passive",
    "SwitchA set to desirable and SwitchB set to desirable"
  ],
  correctAnswer: [1, 2],
  explanation: `
You could set one switch to active and the other switch to passive; alternatively, you could set both switches to active. Link Aggregation Control Protocol (LACP) is an Institute of Electrical and Electronics Engineers (IEEE) standards-based protocol that groups individual physical ports into a single logical link, called an EtherChannel. The ports that constitute an EtherChannel are grouped according to various parameters, such as hardware, port, and administrative limitations. Because LACP is a standards-based protocol, it can be used between Cisco and non-Cisco switches.

You can issue the show etherchannel summary command to verify the status of an EtherChannel link and to determine which aggregation protocol, if any, was used to establish the link. The following sample output indicates that the LACP protocol was used to successfully establish an EtherChannel link:

<pre>
SwitchA#show etherchannel summary
Flags: D - down    P - bundled in port-channel
       I - stand-alone S - suspended H - Hot-standby (LACP only)
       R - Layer3     S - Layer2
       U - in use     f - failed to allocate aggregator
       M - not in use, minimum links not met
       u - unsuitable for bundling
       w - waiting to be aggregated
       d - default port

Number of channel-groups in use: 1
Number of aggregators: 1

Group  Port-channel  Protocol    Ports
------+-------------+----------+--------------------
1      Po1(US)      LACP       Fa0/5(P) Fa0/6(P)
</pre>

Port Aggregation Protocol (PAgP) is an older, Cisco-proprietary alternative to LACP. Because PAgP is a Cisco-proprietary protocol, it can be used only on Cisco switches. Like LACP, PAgP identifies neighboring ports and their group capabilities; however, PAgP does not assign roles to the EtherChannel’s endpoints like LACP does.

The following table displays the channel-group configurations that will establish an EtherChannel:

<table style="text-align:center;border:1px solid #ccc;border-collapse:collapse;">
<tr style="background:#e8f6ff;font-weight:bold;">
  <td>SwitchA / SwitchB</td>
  <td>off</td><td>auto</td><td>desirable</td><td>passive</td><td>active</td><td>on</td>
</tr>
<tr>
  <td style="background:#e8f6ff"><b>off</b></td>
  <td>NO</td><td>NO</td><td>NO</td><td>NO</td><td>NO</td><td>NO</td>
</tr>
<tr>
  <td style="background:#e8f6ff"><b>auto</b></td>
  <td>NO</td><td>NO</td><td>PAgP</td><td>NO</td><td>NO</td><td>NO</td>
</tr>
<tr>
  <td style="background:#e8f6ff"><b>desirable</b></td>
  <td>NO</td><td>PAgP</td><td>PAgP</td><td>NO</td><td>NO</td><td>NO</td>
</tr>
<tr>
  <td style="background:#e8f6ff"><b>passive</b></td>
  <td>NO</td><td>NO</td><td>NO</td><td>NO</td><td>LACP</td><td>NO</td>
</tr>
<tr>
  <td style="background:#e8f6ff"><b>active</b></td>
  <td>NO</td><td>NO</td><td>NO</td><td>LACP</td><td>LACP</td><td>NO</td>
</tr>
<tr>
  <td style="background:#e8f6ff"><b>on</b></td>
  <td>NO</td><td>NO</td><td>NO</td><td>NO</td><td>NO</td><td>ON</td>
</tr>
</table>

The channel-group command configures the EtherChannel mode. The syntax of the channel-group command is channel-group number mode {on | active | passive | {auto | desirable} [non-silent]}, where number is the port channel interface number. The on keyword configures the channel group to unconditionally create the channel with no LACP or PAgP negotiation.

The active and passive keywords can be used only with LACP. The active keyword configures the channel group to actively negotiate LACP, and the passive keyword configures the channel group to listen for LACP negotiation to be offered. Either or both sides of the link must be set to active to establish an EtherChannel over LACP; setting both sides to passive will not establish an EtherChannel over LACP.

The auto, desirable, and non-silent keywords can be used only with PAgP. The desirable keyword configures the channel group to actively negotiate PAgP, and the auto keyword configures the channel group to listen for PAgP negotiation to be offered. Either or both sides of the link must be set to desirable to establish an EtherChannel over PAgP; setting both sides to auto will not establish an EtherChannel over PAgP. The optional non-silent keyword requires that a port receive PAgP packets before the port is added to the channel.
`,
  reference: [
    {
      title: "Boson CCNA Curriculum 200-301, Module 5: Switching and Network Access",
      description: "Understanding PAgP and LACP Modes"
    },
    {
      title: "CCNA 200-301 Official Cert Guide, Volume 1, Chapter 10",
      description: "RSTP and EtherChannel Configuration, Configuring Layer 2 EtherChannel"
    },
    {
      title: "Cisco: Catalyst 3750 Switch Cisco IOS Commands: channel-group",
      link: "https://www.cisco.com/c/en/us/td/docs/switches/lan/catalyst3750/software/release/12-2_25_see/command/reference/cli2_25s/swch3.html"
    },
    {
      title: "Cisco: Catalyst 3750 Switch Cisco IOS Commands: channel-protocol",
      link: "https://www.cisco.com/c/en/us/td/docs/switches/lan/catalyst3750/software/release/12-2_25_see/command/reference/cli2_25s/swch2.html"
    }
  ]
},

{
  id: 447,
  category: "Security Fundamentals",
  questionType: "Single-select",
  question: `You are configuring security on a new WLAN by using the WLC GUI.

Which of the following security settings are you most likely to configure by using the <b>Layer 2 Security</b> drop-down list box on the <b>Layer 2</b> tab? (Select the best answer.)`,
  options: [
    "WPA+WPA2",
    "Web Passthrough",
    "VPN Pass-Through",
    "Web Authentication"
  ],
  correctAnswer: 0,
  explanation: `
Of the available choices, you are most likely to configure the <b>WPA+WPA2</b> setting by using the <b>Layer 2 Security</b> drop-down list box on the <b>Layer 2</b> tab of the Cisco Wireless LAN Controller (WLC) graphical user interface (GUI). There are two types of wireless local area networks (WLANs) that you can configure by using the WLC GUI: a WLAN and a Guest LAN. When you configure a new WLAN by using the WLC GUI, you can configure security settings by clicking the new WLAN’s <b>Security</b> tab. By default, the <b>Layer 2</b> tab is selected when you click the Security tab. However, it is not possible to configure Layer 2 security on a Guest LAN.

On the <b>Layer 2</b> tab of the <b>Security</b> tab, you can select one of the following Layer 2 wireless security features from the <b>Layer 2 Security</b> drop-down list box:
<ul>
<li><b>None</b>, which disables Layer 2 security and allows open authentication to the WLAN</li>
<li><b>WPA+WPA2</b>, which enables Layer 2 security by using Wi-Fi Protected Access (WPA) or the more secure WPA2</li>
<li><b>802.1X</b>, which enables Layer 2 security by using Extensible Authentication Protocol (EAP) authentication combined with a dynamic Wired Equivalent Privacy (WEP) key</li>
<li><b>Static WEP</b>, which enables Layer 2 security by using a static shared WEP key</li>
<li><b>Static WEP + 802.1X</b>, which enables Layer 2 security by using either a static shared WEP key or EAP authentication</li>
<li><b>CKIP</b>, which enables Layer 2 security by using the Cisco Key Integrity Protocol (CKIP)</li>
<li><b>None + EAP Passthrough</b>, which enables Layer 2 security by using open authentication combined with remote EAP authentication</li>
</ul>
There are two different sets of Layer 3 security features that you can configure on a Cisco WLC: one set for a WLAN and one set for a Guest LAN. Depending on which type of WLAN you create and which Layer 2 security options you have selected, you can select one of the following Layer 3 wireless security features from the <b>Layer 3 Security</b> drop-down list box on the <b>Layer 3</b> tab of the <b>Security</b> tab in the WLC GUI:
<ul>
<li><b>None</b>, which disables Layer 3 security no matter which Layer 2 security option is configured and regardless of whether you are configuring a WLAN or a Guest LAN</li>
<li><b>IPSec</b>, which enables Layer 3 security for WLANs by using Internet Protocol Security (IPsec)</li>
<li><b>VPN Pass-Through</b>, which enables Layer 3 security for WLANs by allowing a client to establish a connection with a specific virtual private network (VPN) server</li>
<li><b>Web Authentication</b>, which enables Layer 3 security for Guest LANs by prompting for a user name and password when a client connects to the network</li>
<li><b>Web Passthrough</b>, which enables direct access to the network for Guest LANs without prompting for a user name and password</li>
</ul>
Not every Layer 3 security mechanism is compatible with every Layer 2 security mechanism. It is therefore important to first configure Layer 2 security options before you attempt to configure Layer 3 security options.
`,
  reference: [
    {
      title: "Boson CCNA Curriculum 200-301, Module 8: Security Fundamentals",
      description: "Configuring Cisco WLAN Layer 2 Security"
    },
    {
      title: "CCNA 200-301 Official Cert Guide, Volume 1, Chapter 29",
      description: "Building a Wireless LAN, Configuring WLAN Security"
    },
    {
      title: "Cisco: Wireless LAN Controller Layer 2 Layer 3 Security Compatibility Matrix: Wireless LAN Controller Layer 2 – Layer 3 Security Compatibility Matrix",
      link: "https://www.cisco.com/c/en/us/support/docs/wireless-mobility/wlan-security/116057-sec-wlc-l2l3-compat-matrix.html"
    },
    {
      title: "Cisco: WLANs Tab",
      link: "https://www.cisco.com/c/en/us/td/docs/wireless/controller/8-1/config-guide/b_cg81/wlan.html"
    }
  ]
},

{
  id: 653,
  category: "Network Access",
  questionType: "Single-select",
  question: `<p><img src="/images/q653.png" alt="ip-phone-trust-boundary" style="max-width:100%;margin:12px 0;"></p>
<p>Refer to the exhibit.</p>

<p>Which of the following should you do to move the trust boundary to the IP phone? (Select the best answer.)</p>`,
  options: [
    "Issue the switchport priority extend cos command on the switch port connected to the IP phone.",
    "Issue the mls qos trust cos command on the IP phone.",
    "Issue the mls qos trust cos command on the switch port connected to the IP phone.",
    "Issue the switchport priority extend cos command on the IP phone."
  ],
  correctAnswer: 2,
  explanation: `
Issuing the mls qos trust cos command on the switch port connected to the Internet Protocol (IP) phone moves the trust boundary to the IP phone. By default, voice traffic from the IP phone is tagged with an Institute of Electrical and Electronics Engineers (IEEE) 802.1Q header that contains an IEEE 802.1p Class of Service (CoS) value. Normally, the CoS priority value is trusted by the switch in order to prioritize voice traffic on the network. Data traffic sent by the host through the IP phone is also tagged with an IEEE 802.1Q header that contains a CoS value that is not trusted by the switch by default. The mls qos trust cos command configures the switch to trust both voice traffic sent by the IP phone and data traffic sent by the host through the IP phone. This moves the trust boundary to the IP phone.

Issuing the switchport priority extend cos command on the switch port connected to the IP phone configures the IP phone to override the priority of the data packets it receives from the host and assign new CoS values to the host-generated packets. Issuing the switchport priority extend cos command prevents the computer from exploiting a high-priority data queue.

You cannot issue the mls qos trust cos command or the switchport priority extend cos command on the IP phone, because the IP phone does not have a command-line interface (CLI). CLI configurations for the IP phone must be accomplished through the CLI of the switch port connected to the IP phone.
`,
  reference: [
    {
      title: "CCNA 200-301 Official Cert Guide, Volume 1, Chapter 8",
      description: "Implementing Ethernet Virtual LANs, Implementing Interfaces Connected to Phones"
    },
    {
      title: "Cisco: Configuring Voice VLAN: Understanding Voice VLAN",
      link: "https://www.cisco.com/c/en/us/support/docs/switches/catalyst-2960-series-switches/116057-configuring-voice-vlan.html"
    }
  ]
},{
  id: 665,
  category: "Network Access",
  questionType: "Multi-select",
  question: `
You issue the following command on your router:<br><br>
<code>RouterA#show cdp neighbors</code><br><br>
Which of the following information will be displayed? (Select 4 choices.)
`,
  options: [
    "the interface on RouterA that is connected to the neighboring device",
    "the capabilities and product number of the neighboring device",
    "the interface on the neighboring device that is connected to RouterA",
    "the IP address of the neighboring device",
    "the software version running on the neighboring device",
    "the device ID of the neighboring device"
  ],
  correctAnswer: [0, 1, 2, 5],
  explanation: `
The following information will be displayed when the show cdp neighbors command is issued:

• The device ID of the neighboring device  
• The capabilities of the neighboring device  
• The product number of the neighboring device  
• The holdtime  
• The local interface  
• The remote interface

The following is sample output from the show cdp neighbors command:

<pre>
RouterA#show cdp neighbors
Capability Codes: R - Router, T - Trans Bridge, B - Source Route Bridge
                  S - Switch, H - Host, I - IGMP, r - Repeater

Device ID    Local Intrfce Holdtme Capability Platform Port ID
boson-1      Gig 0/1       117     S I       WS-C2960-2 Gig 0/1
boson-2      Gig 0/2       143     S I       WS-C2960-4 Gig 0/1
boson-3      Fas 0/3       102     R S I     1841       Fas 0/1
boson-4      Fas 0/4       133     R S I     1841       Fas 0/2
</pre>

The Device ID field indicates the host name, Media Access Control (MAC) address, or serial number of the neighboring device. The Local Intrfce field indicates the interface on the local device. The Holdtme field indicates the amount of time remaining before the Cisco Discovery Protocol (CDP) advertisement is discarded. The Capability field indicates the type of device:

<ul>
<li>R – router</li>
<li>S – switch</li>
<li>I – Internet Group Management Protocol (IGMP) device</li>
<li>H – host</li>
<li>T – transparent bridge</li>
<li>B – source-routing bridge</li>
<li>r – repeater</li>
</ul>

The Platform field indicates the product number of the neighboring device. The Port ID field indicates the connected interface on the neighboring device.

You cannot discover the Internet Protocol (IP) address of a neighboring device or the software version running on a neighboring device by issuing the show cdp neighbors command. However, this information is included in the output of the show cdp neighbors detail command. The following is sample output from the show cdp neighbors detail command:

<pre>
RouterA#show cdp neighbors detail
-------------------------
Device ID: boson-1
Entry address(es):
  IP address: 10.1.2.3
Platform: WS-C2960-24TT-L, Capabilities: Switch IGMP
Interface: GigabitEthernet0/1, Port ID (outgoing port):
GigabitEthernet0/10
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
`,
  reference: [
    {
      title: "Boson CCNA Curriculum 200-301, Module 5: Switching and Network Access",
      description: "Displaying CDP and LLDP Neighbors"
    },
    {
      title: "CCNA 200-301 Official Cert Guide, Volume 2, Chapter 9",
      description: "Device Management Protocols, Examining Information Learned by CDP"
    },
    {
      title: "Cisco: Cisco IOS Cisco Discovery Protocol Command Reference: show cdp neighbors",
      link: "https://www.cisco.com/c/en/us/td/docs/ios-xml/ios/cdp/command/cdp-cr-book/cdp-s1.html"
    },
    {
      title: "Cisco: Configuring CDP: Monitoring and Maintaining CDP",
      link: "https://www.cisco.com/c/en/us/support/docs/ios-nx-os-software/cdp/118978-configure-cdp.html"
    }
  ]
},

{
  id: 466,
  category: "Automation and Programmability",
  questionType: "Single-select",
  question: `Which of the following is the Cisco enterprise management platform that does not support Cisco SDA? (Select the best answer.)`,
  options: [
    "Cisco PI",
    "Cisco Network Assistant",
    "Cisco IOS 15",
    "Cisco DNA Center"
  ],
  correctAnswer: 0,
  explanation: `
Of the available choices, Cisco Prime Infrastructure (PI) is the Cisco enterprise management platform that does not support Cisco Software-Defined Access (SDA). Cisco SDA is a Cisco-developed means of building local area networks (LANs) by using policies and automation. Cisco PI is a traditional enterprise Cisco management platform that relies on a browser-based graphical user interface (GUI) to enable administrators to perform operations on the network, diagnose problems with the network, and interact with devices on the network.

Cisco DNA Center is the Cisco enterprise management platform that is specifically built to support Cisco SDA. Cisco DNA Center, which abstracts the complexity of network configuration by implementing a central controller and GUI, also supports many of the same traditional campus device management features that are supported by other Cisco management solutions. Administrators typically interact with Cisco DNA by using a browser-based GUI.

Cisco Network Assistant is a LAN management platform, not an enterprise management platform. Cisco Network Assistant is a free Java-based desktop application that enables a LAN administrator to perform network operations, diagnose problems, and interact with network devices by using a GUI. A typical Cisco Network Assistant installation supports the management of up to 80 devices. Cisco Network Assistant predates Cisco SDA and does not support Cisco SDA.

Cisco IOS is a network device operating system (OS), not an enterprise management platform, that is used to directly configure, manage, and troubleshoot a single device. Administrators typically interact with Cisco IOS by using a command-line interface (CLI). Access to the CLI can be accomplished by connecting to a device's console port, by connecting to a Telnet session, or by connecting to a Secure Shell (SSH) session, depending on how the device is configured.
`,
  reference: [
    {
      title: "CCNA 200-301 Official Cert Guide, Volume 2, Chapter 17",
      description: "Cisco Software-Defined Access (SDA), DNA Center as a Network Management Platform"
    }
  ]
},

{
  id: 64,
  category: "IP Connectivity",
  questionType: "Single-select",
  question: `<p><img src="/images/q64.png" alt="ospf-network-diagram" style="max-width:100%;margin:12px 0;"></p>
<p>You administer the OSPF network above.</p>

<p>You issue the <b>show running-config</b> command on RouterA and receive the following output:</p>
<pre>
router ospf 100
 log-adjacency-changes
 network 10.10.1.0 0.0.0.255 area 0
 network 172.16.1.0 0.0.0.3 area 0
 network 192.168.3.0 0.0.0.3 area 0
 network 192.168.100.1 0.0.0.0 area 0
 default-information originate
!
ip route 0.0.0.0 0.0.0.0 FastEthernet1/0
</pre>
Which of the following statements is true of RouterD? (Select the best answer.)
`,
  options: [
    "The interface with the IP address of 10.10.1.1 is the gateway of last resort.",
    "RouterD is not configured with a gateway of last resort.",
    "The interface with the IP address of 192.168.1.2 is the gateway of last resort.",
    "The interface with the IP address of 172.16.1.1 is the gateway of last resort.",
    "The interface with the IP address of 192.168.1.1 is the gateway of last resort."
  ],
  correctAnswer: 2,
  explanation: `
RouterD's gateway of last resort is the interface with the Internet Protocol (IP) address of 192.168.1.2, which is the Serial 0/2 interface on RouterC. Open Shortest Path First (OSPF) will advertise RouterA's gateway of last resort because the <b>default-information originate</b> command has been issued for the OSPF configuration on RouterA. The <b>default-information originate</b> command configures OSPF to inject a router's default external route into OSPF. Additionally, if you issue either the <b>default-information originate</b> command or a <b>redistribute network</b> command in OSPF router configuration mode, Cisco IOS automatically considers the router an autonomous system boundary router (ASBR). An ASBR redistributes routes from other routing protocols into the OSPF domain.

RouterA in this scenario is additionally configured with the <b>ip route 0.0.0.0 0.0.0.0 FastEthernet1/0</b> command. Therefore, any traffic destined for a network that is not in RouterA's routing table will be forwarded through the FastEthernet 1/0 interface on RouterA. Because OSPF is advertising the default route through the FastEthernet 1/0 interface, each of RouterA's OSPF neighbors will learn a default path from RouterA. The neighbors of those routers will also learn a default path. Therefore, because RouterD's only path to the gateway of last resort is through the Serial 0/2 interface of RouterC, RouterD's gateway of last resort is configured to be the IP address 192.168.1.2, which is assigned to the Serial 0/2 interface of RouterC.

You can verify the configuration of the gateway of last resort by issuing the <b>show ip route</b> command, as shown in the following output from RouterD:

<pre>
RouterD#show ip route
Codes: C - connected, S - static, R - RIP, M - mobile, B - BGP
       D - EIGRP, EX - EIGRP external, O - OSPF, IA - OSPF inter area
       N1 - OSPF NSSA external type 1, N2 - OSPF NSSA external type 2
       E1 - OSPF external type 1, E2 - OSPF external type 2
       i - IS-IS, su - IS-IS summary, L1 - IS-IS level-1, L2 - IS-IS level-2
       ia - IS-IS inter area, * - candidate default, U - per-user static route
       o - ODR, P - periodic downloaded static route

Gateway of last resort is 192.168.1.2 to network 0.0.0.0

      172.16.0.0/30 is subnetted, 1 subnets
O        172.16.1.0 [110/1690] via 192.168.1.2, 00:40:13, Serial0/0
      0.0.0.0/0 is subnetted, 3 subnets
O        10.10.1.0 [110/1627] via 192.168.1.2, 00:40:13, Serial0/0
O        10.20.2.0 [110/1627] via 192.168.1.2, 00:40:13, Serial0/0
O        10.10.2.0 [110/1627] via 192.168.1.2, 00:40:13, Serial0/0
C        10.10.4.0 is directly connected, FastEthernet1/0
      192.168.1.0/30 is subnetted, 1 subnets
C        192.168.1.0 is directly connected, Serial0/0
      192.168.2.0/30 is subnetted, 1 subnets
O        192.168.2.0 [110/1626] via 192.168.1.2, 00:40:13, Serial0/0
      192.168.100.0/32 is subnetted, 4 subnets
C        192.168.100.5 is directly connected, Loopback0
O        192.168.100.1 [110/1627] via 192.168.1.2, 00:40:13, Serial0/0
O        192.168.100.2 [110/1627] via 192.168.1.2, 00:40:15, Serial0/0
O        192.168.100.3 [110/65] via 192.168.1.2, 00:40:15, Serial0/0
      192.168.3.0/30 is subnetted, 1 subnets
O        192.168.3.0 [110/1626] via 192.168.1.2, 00:40:15, Serial0/0
O*E2 0.0.0.0/0 [110/1] via 192.168.1.2, 00:40:15, Serial0/0
</pre>
`,
  reference: [
    {
      title: "Boson CCNA Curriculum 200-301, Module 6: IP Routing",
      description: "Configuring Multiarea OSPFv2"
    },
    {
      title: "Cisco: OSPF Command Reference: default-information originate (OSPF)",
      link: "https://www.cisco.com/c/en/us/td/docs/ios-xml/ios/iproute_ospf/command/iro-cr-book/iro_o1.html#wp1043011"
    }
  ]
},

{
  id: 33,
  category: "IP Connectivity",
  questionType: "Single-select",
  question: `Which of the following HSRP routers has the highest priority? (Select the best answer.)`,
  options: [
    "the active router",
    "the backup router",
    "the master router",
    "the standby router"
  ],
  correctAnswer: 0,
  explanation: `
The Hot Standby Router Protocol (HSRP) active router has the highest priority. When HSRP is configured, routers are placed into an HSRP group. The router with the highest priority value, or the router with the highest IP address if more than one router has the highest priority value, is elected as the active router for the group. The router with the next-highest priority is elected as the standby router. All remaining routers in the group are placed in the listen state. The active router is responsible for forwarding traffic sent to the gateway IP address. If the active router fails or becomes unavailable, the standby router will assume the role of the active router and another router will be elected as the standby router.

Virtual Router Redundancy Protocol (VRRP) has one master router and one or more backup routers. The VRRP master router has the highest priority. By default, the VRRP priority is set to 100; the VRRP priority can be a value from 1 through 254. Routers are assigned to a VRRP group, and the group functions as a single gateway for clients. A VRRP group has one master router; all other routers in the VRRP group are backup routers. The master router is used to forward packets to different virtual LANs (VLANs). When VRRP is implemented, the group of devices is assigned a virtual IP address and a virtual Media Access Control (MAC) address. Clients that utilize a VRRP platform send packets to the virtual IP address. These packets are received and forwarded from the current master router. Backup routers receive advertisements from the master router that inform the backup routers of the master router's state. These advertisements are sent every second by default. If updates are not received for a specified amount of time, the master device is assumed to have failed and the election of a new master device begins.
`,
  reference: [
    {
      title: "Boson CCNA Curriculum 200-301, Module 6: IP Routing",
      description: "Understanding HSRP"
    },
    {
      title: "Cisco: Configuring HSRP and VRRP: Understanding HSRP",
      link: "https://www.cisco.com/c/en/us/support/docs/ip/hot-standby-router-protocol-hsrp/9234-hsrp-vrrp.html"
    }
  ]
},

{
  id: 606,
  category: "Network Fundamentals",
  questionType: "Single-select",
  question: `Which of the following examples best describes the PaaS service model? (Select the best answer.)`,
  options: [
    "A company licenses an office suite, including email service, that is delivered to the end user through a web browser.",
    "A company obtains a subscription to use a service provider’s infrastructure, programming tools, and programming languages to develop and serve cloud-based applications.",
    "A company moves all company-wide policy documents to an Internet-based virtual file system hosted by a service provider.",
    "A company hires a service provider to deliver cloud-based processing and storage that will house multiple virtual hosts configured in a variety of ways."
  ],
  correctAnswer: 1,
  explanation: `
A company that uses a service provider’s infrastructure, programming tools, and programming languages to develop and serve cloud-based applications is an example of the Platform as a Service (PaaS) service model. The National Institute of Standards and Technology (NIST) defines three service models in its definition of cloud computing: Software as a Service (SaaS), Infrastructure as a Service (IaaS), and PaaS.

The SaaS service model enables its consumer to access applications running in the cloud infrastructure but does not enable the consumer to manage the cloud infrastructure or the configuration of the provided applications. Of the three service models, SaaS exposes the least amount of the consumer’s network to the cloud and is the least likely to require changes to the consumer’s network design. A company that licenses a service provider’s office suite and email service that is delivered to end users through a web browser is using SaaS. SaaS providers use an Internet-enabled licensing function, a streaming service, or a web application to provide end users with software that they might otherwise install and activate locally. Web-based email clients, such as Gmail and Outlook.com, are examples of SaaS.

The PaaS service model provides its consumer with slightly more freedom than the SaaS model by enabling the consumer to install and possibly configure provider-supported applications in the cloud infrastructure. A company that uses a service provider’s infrastructure, programming tools, and programming languages to develop and serve cloud-based applications is using PaaS. PaaS enables a consumer to use the service provider’s development tools or Application Programming Interface (API) to develop and deploy specific cloud-based applications or services. Another example of PaaS might be using a third party’s MySQL database and Apache services to build a cloud-based customer relationship management (CRM) platform.

The IaaS service model provides the greatest degree of freedom by enabling its consumer to provision processing, memory, storage, and network resources within the cloud infrastructure. The IaaS service model also enables its consumer to install applications, including operating systems (OSs) and custom applications. However, with IaaS, the cloud infrastructure remains in control of the service provider. A company that hires a service provider to deliver cloud-based processing and storage that will house multiple physical or virtual hosts configured in a variety of ways is using IaaS. For example, a company that wanted to establish a web server farm by configuring multiple Linux Apache MySQL PHP (LAMP) servers could save hardware costs by virtualizing the farm and using a provider’s cloud service to deliver the physical infrastructure and bandwidth for the virtual farm. Control over the OS, software, and server configuration would remain the responsibility of the organization, whereas the physical infrastructure and bandwidth would be the responsibility of the service provider. Using a third party’s infrastructure to host corporate Domain Name System (DNS) and Dynamic Host Configuration Protocol (DHCP) servers is another example of IaaS.

A company that moves all company-wide policy documents to an Internet-based virtual file system hosted by a third party is using cloud storage. Cloud storage is a term used to describe the use of a service provider’s virtual file system as a document or file repository. Cloud storage enables an organization to conserve storage space on a local network. However, cloud storage is also a security risk in that the organization might not have ultimate control over who can access the files.
`,
  reference: [
    {
      title: "Boson CCNA Curriculum 200-301, Module 1: Network Fundamentals",
      description: "PaaS"
    },
    {
      title: "CCNA 200-301 Official Cert Guide, Volume 2, Chapter 15",
      description: "Cloud Architecture, Cloud and the 'As a Service' Model"
    },
    {
      title: "NIST: Special Publication 800-145: The NIST Definition of Cloud Computing (PDF)",
      link: "https://nvlpubs.nist.gov/nistpubs/Legacy/SP/nistspecialpublication800-145.pdf"
    }
  ]
},

{
  id: 609,
  category: "Network Access",
  questionType: "Single-select",
  question: `You have issued the <b>errdisable detect cause inline-power</b> command from global configuration mode on a Cisco switch. Power policing is enabled with the default settings.

If a PD attempts to draw more than the cutoff power from a PoE-enabled interface, how long will the interface remain in an error-disabled state? (Select the best answer.)`,
  options: [
    "until it is manually reset with the shutdown and no shutdown commands",
    "60, 480 seconds",
    "300 seconds",
    "30 seconds"
  ],
  correctAnswer: 0,
  explanation: `
In this scenario, the interface will remain in an error-disabled state until it is manually reset with the shutdown and no shutdown commands. Because sending an electrical current to a device that does not support Power over Ethernet (PoE) could potentially damage the receiving device, power-sourcing equipment (PSE), such as a PoE-capable switch, will first apply a small voltage to a PoE-enabled port to determine whether a powered device (PD) is attached to the port. The Institute of Electrical and Electronics Engineers (IEEE) PoE standards require a PD to provide a measurable resistance of approximately 25 kilo Ohms (kohms) when it is probed by the PSE. If the PSE detects a PD, the PSE can then send a signal with a higher voltage to determine the class of the PD. When an IEEE standards-compliant PD receives this higher-voltage signal from a PSE, its response will inform the PSE about the PD’s power demand. The PSE will categorize the PD into an appropriate class, if possible, and will further guarantee a minimum amount of power relative to the class of the PD. If the PSE cannot determine the appropriate class for a PD, the PD will be categorized into the default class and will not be guaranteed the full amount of power.

You can issue the errdisable detect cause inline-power command to change the current draw of connected devices and to take action if the draw exceeds the amount allocated to the PD in accordance with the assigned power class. The allocated amount of power is referred to as the cutoff power. If an attached PD attempts to draw more than the cutoff power from the configured interface, a log message describing the event will also be sent to the console.

An interface in an error-disable state will remain shut down until it is manually reset (by an administrator issuing the shutdown and no shutdown commands in sequence for the interface) or until the device’s auto recovery mechanism timer expires and the port is automatically reset. If error-disable auto recovery for inline power has been disabled, you can issue the errdisable detect cause inline-power command from global configuration mode to re-enable it. Although error-disable detection for inline power is enabled by default on Cisco PoE-capable switches, error-disable auto recovery for inline power is not enabled by default. Therefore, a port that has been placed into an error-disabled state by an inline-power event will not automatically reset by default. You can issue the errdisable recovery cause inline-power command from global configuration mode to enable error-disable auto recovery for inline power. When auto recovery is enabled, the switch will reset the error-disabled interface after the auto recovery timer expires. The auto recovery timer can be configured to a value between 30 seconds and 86,400 seconds, but it defaults to a value of 300 seconds.

You can issue the power inline police action log command to change the default power policing behavior. When the log action is configured, a PoE-enabled interface will restart and send a log message to the console when an attached PD attempts to draw more than the cutoff power from the configured interface. This will typically cause the PD to reboot and to reattempt to negotiate its power requirements.
`,
  reference: [
    {
      title: "CCNA 200-301 Official Cert Guide, Volume 2, Chapter 13",
      description: "LAN Architecture, Power over Ethernet (PoE)"
    },
    {
      title: "Cisco: Configuring PoE: Configuring Power Policing",
      link: "https://www.cisco.com/c/en/us/support/docs/switches/catalyst-3750-series-switches/116287-config-pwr-policing.html"
    }
  ]
},

{
  id: 699,
  category: "Network Access",
  questionType: "Single-select",
  question: `Which of the following WLC interfaces is the only available interface when the WLC is booting? (Select the best answer.)`,
  options: [
    "the AP-manager interface",
    "a dynamic interface",
    "the virtual interface",
    "the management interface",
    "the service port interface"
  ],
  correctAnswer: 4,
  explanation: `
The service port interface of a wireless LAN controller (WLC) is the only available interface when the WLC is booting. A WLC can contain up to four static interfaces: the management interface, the AP-manager interface, the virtual interface, and the service port interface. The service port interface is used for maintenance purposes on a WLC. This interface is a physical interface on the WLC that can be used to recover the WLC in the event that the WLC fails.

The virtual interface supports mobility management by providing a specific Internet Protocol (IP) address that is the same across multiple controllers when wireless clients roam among the controllers. This enables seamless roaming among the controllers. The virtual interface supports other uses as well. For example, the virtual interface can also be used in situations where web authorization has been enabled for clients; the user is redirected to the IP address of the virtual interface when the user opens a web browser. In addition, if Dynamic Host Configuration Protocol (DHCP) relay has been enabled on the controller, the virtual interface can be used as the DHCP server address on wireless clients.

The AP-manager interface supports the IP address that is used as the source IP address by the lightweight access points (APs) communicating with the WLC. Because the AP-manager interface communicates with the lightweight APs on the wireless network, the IP address assigned to the AP-manager interface should be unique on the network. After the interface has been configured, the WLC uses the AP-manager interface to listen for Layer 3 Lightweight Access Point Protocol (LWAPP) communications.

The management interface is used for in-band management information. This interface is used for all Layer 2 LWAPP communications between the controller and the lightweight APs. In addition, the management interface is used to communicate with other WLCs on the wireless network.

In addition to the four static interfaces, a WLC can contain up to 512 dynamic interfaces. Dynamic interfaces are user-defined and are typically used for wireless client data. The dynamic interfaces function similarly to virtual local area networks (VLANs). For example, you can create a dynamic interface to segment traffic on the WLC.
`,
  reference: [
    {
      title: "CCNA 200-301 Official Cert Guide, Volume 1, Chapter 29",
      description: "Building a Wireless LAN, Using WLC Interfaces"
    },
    {
      title: "Cisco: Overview of Ports and Interfaces: Interfaces",
      link: "https://www.cisco.com/c/en/us/td/docs/wireless/controller/8-1/config-guide/b_cg81/interfaces.html"
    }
  ]
},

{
  id: 48,
  category: "IP Services",
  questionType: "Single-select",
  question: `You want to configure SSH for incoming VTY connections on a router with the host name Router1. Router1 is running a K9 IOS image but has not yet been configured with a domain name or an RSA key pair. In addition, the VTY lines are not yet configured to accept incoming SSH connections.

You issue the crypto key generate rsa command from global configuration mode.

Which of the following messages will you most likely receive? (Select the best answer.),`,
  options: [
    "The name for the keys will be:",
    "Please enable SSH version 2.",
    "% Please define a domain-name first.",
    "Please define a hostname other than Router.",
    "Please create RSA keys to enable SSH."
  ],
  correctAnswer: 2,
  explanation: `
You will most likely receive the Please define a domain-name first message when you issue the crypto key generate rsa command, because you have not configured the router with a domain name. To configure a router with a domain name, you should issue the ip domain-name domain-name command from global configuration mode.

To enable Secure Shell (SSH) for virtual terminal (VTY) lines on a Cisco router, you should complete the following steps:

1. Configure the router with a host name other than Router by using the hostname command.
2. Configure the router with a domain name by issuing the ip domain-name command.
3. Generate an RSA key pair for the router by issuing the crypto key generate rsa command.
4. Configure the VTY lines to use SSH by issuing the transport input ssh command from line configuration mode.

SSH is often used as a secure replacement for Telnet to manage network devices. In order for SSH to be enabled on a Cisco device, the device must be running a K9 IOS image, which provides cryptographic functionality.

You will not receive the The name for the keys will be: message when you issue the crypto key generate rsa command in this scenario. However, if you had already configured the router with a valid host name and a domain name, you would have received the The name for the keys will be: message after issuing the crypto key generate rsa command. After you specify the name for the keys, you will be prompted for the modulus length.

You will not receive the Please define a hostname other than Router message when you issue the crypto key generate rsa command in this scenario, because you have already configured the router with a host name other than the default name of Router. To configure a router with a host name other than the default, you should issue the hostname host-name command from global configuration mode.

You will not receive the Please create RSA keys to enable SSH message when you issue the crypto key generate rsa command in this scenario. However, if you had issued another command related to SSH, such as the ip ssh time-out 60 command, but had not yet enabled SSH on the router, you would have received the Please create RSA keys to enable SSH message.

You will not receive the Please enable SSH version 2 message when you issue the crypto key generate rsa command in this scenario. The Please enable SSH version 2 message is shown as a warning message that is displayed on Cisco routers. By default, Cisco devices support both SSH version 1 (SSHv1) and SSH version 2 (SSHv2) connections. Issuing the ip ssh version 2 command ensures that the device will accept only SSHv2 connections.
`,
  reference: [
    {
      title: "Boson CCNA Curriculum 200-301, Module 7: IP Services",
      description: "SSH Configuration"
    },
    {
      title: "CCNA 200-301 Official Cert Guide, Volume 1, Chapter 6",
      description: "Configuring Basic Switch Management, Securing Remote Access with Secure Shell"
    },
    {
      title: "Cisco: Configure SSH on Routers and Switches: Set Up an IOS Router or Switch as SSH Client",
      link: "https://www.cisco.com/c/en/us/support/docs/security-vpn/ssh/4145-ssh.html"
    }
  ]
},

{
  id: 647,
  category: "Network Access",
  questionType: "Single-select",
  question: `You issue the following commands on a Catalyst 2950 switch:
<pre>
SwitchA#configure terminal
SwitchA(config)#interface fastethernet 0/7
SwitchA(config-if)#switchport trunk encapsulation dot1q
SwitchA(config-if)#switchport mode trunk
SwitchA(config-if)#switchport trunk native vlan 44
</pre>
Which of the following statements is true regarding VLAN traffic when it is sent over port FastEthernet 0/7? (Select the best answer.),`,
  options: [
    "VLAN 1 traffic will be untagged.",
    "All VLAN traffic will be tagged.",
    "All VLAN traffic will be untagged.",
    "VLAN 44 traffic will be untagged."
  ],
  correctAnswer: 3,
  explanation: `
Traffic from virtual local area network (VLAN) 44 will be untagged when it is sent over port FastEthernet 0/7. VLAN 44 traffic is untagged because it has been configured as the native VLAN by the switchport trunk native vlan 44 command. By default, the native VLAN is VLAN 1. You can issue the switchport trunk native vlan vlan-id command to change the native VLAN.

Traffic from VLAN 1 will not be untagged when it is sent over port FastEthernet 0/7; it will be tagged because VLAN 1 is no longer the native VLAN. To reconfigure VLAN 1 to be the native VLAN, you can issue the switchport trunk native vlan 1 command or the no switchport trunk native vlan command. Changing the native VLAN can have unexpected consequences. For example, when Dynamic Trunking Protocol (DTP) is used to negotiate the formation of a trunk link between switches, DTP uses the native VLAN for its packets. If the native VLAN is not the same on both ends of the link, a trunk will not dynamically form. In addition, if a trunk is manually formed and the native VLAN is not the same on both ends of the link, any untagged traffic received on the trunk link is considered to belong to the locally configured native VLAN, not to the native VLAN configured on the sending side of the link.

All VLAN traffic will not be untagged when it is sent over port FastEthernet 0/7; only native VLAN traffic will be untagged. Traffic from all other VLANs will be tagged when it is sent over port FastEthernet 0/7. A switch adds a VLAN tag to the header of each frame that belongs to a nonnative VLAN before it sends the frame out a trunked port so that the receiving device will know which VLAN the frame belongs to.

You can issue the show interfaces trunk command to display the list of ports that are configured for trunking, the native VLAN for each trunk port, and the list of currently allowed VLANs for each trunk port. The following displays the output of the show interfaces trunk command:
<pre>
SwitchA#show interfaces trunk
Port      Mode         Encapsulation  Status        Native vlan
Fa0/7     desirable    802.1q         trunking      44

Port      Vlans allowed on trunk
Fa0/7     1-54,56-4094

Port      Vlans allowed and active in management domain
Fa0/7     1-10,44

Port      Vlans in spanning tree forwarding state and not pruned
Fa0/7     1-10,44
</pre>
`,
  reference: [
    {
      title: "Boson CCNA Curriculum 200-301, Module 5: Switching and Network Access",
      description: "Trunk Encapsulation Methods"
    },
    {
      title: "CCNA 200-301 Official Cert Guide, Volume 1, Chapter 8",
      description: "Implementing Ethernet Virtual LANs, Mismatched Native VLAN on a Trunk"
    },
    {
      title: "Cisco: Configuring VLANs: Configuring VLAN Trunks",
      link: "https://www.cisco.com/c/en/us/support/docs/lan-switching/virtual-lans-vlan/10023-3.html"
    },
    {
      title: "Cisco: IEEE 802.1Q Tunneling: 802.1Q Tunneling Configuration Guidelines and Restrictions",
      link: "https://www.cisco.com/c/en/us/support/docs/lan-switching/802-1q/24063-174.html"
    }
  ]
},

{
  id: 674,
  category: "Network Access",
  questionType: "Single-select",
  question: `An LACP channel group on SwitchA is configured to operate in passive mode.

In which mode should you configure the corresponding channel group on SwitchB to create a valid EtherChannel configuration? (Select the best answer.),`,
  options: [
    "passive",
    "active",
    "desirable",
    "on",
    "auto"
  ],
  correctAnswer: 1,
  explanation: `
In this scenario, you should configure the channel group on SwitchB to operate in active mode to create a valid EtherChannel configuration. EtherChannel is used to bundle two or more identical, physical interfaces into a single logical link between switches. An EtherChannel can be permanently established between switches, or it can be negotiated by using one of two aggregation protocols: the Cisco-proprietary Port Aggregation Protocol (PAgP) or the open-standard Institute of Electrical and Electronics Engineers (IEEE) 802.3ad protocol, which is also known as Link Aggregation Control Protocol (LACP). The EtherChannel aggregation protocol must match on each switch, or they will be unable to dynamically establish an EtherChannel link between them.

In addition, the channel groups on each switch must operate in compatible modes to create a functional EtherChannel link. The channel-group number mode {on | active | passive | {auto | desirable} [non-silent]} command is used to configure the operating mode for an EtherChannel port on a range of interfaces, in a channel group. The following table displays the channel-group modes that will result in a valid EtherChannel configuration:

<table style="text-align:center;border:1px solid #ccc;border-collapse:collapse;">
<tr style="background:#e8f6ff;font-weight:bold;">
  <td>SwitchA / SwitchB</td>
  <td>off</td><td>auto</td><td>desirable</td><td>passive</td><td>active</td><td>on</td>
</tr>
<tr>
  <td style="background:#e8f6ff"><b>off</b></td>
  <td>NO</td><td>NO</td><td>NO</td><td>NO</td><td>NO</td><td>NO</td>
</tr>
<tr>
  <td style="background:#e8f6ff"><b>auto</b></td>
  <td>NO</td><td>NO</td><td>PAgP</td><td>NO</td><td>NO</td><td>NO</td>
</tr>
<tr>
  <td style="background:#e8f6ff"><b>desirable</b></td>
  <td>NO</td><td>PAgP</td><td>PAgP</td><td>NO</td><td>NO</td><td>NO</td>
</tr>
<tr>
  <td style="background:#e8f6ff"><b>passive</b></td>
  <td>NO</td><td>NO</td><td>NO</td><td>NO</td><td>LACP</td><td>NO</td>
</tr>
<tr>
  <td style="background:#e8f6ff"><b>active</b></td>
  <td>NO</td><td>NO</td><td>NO</td><td>LACP</td><td>LACP</td><td>NO</td>
</tr>
<tr>
  <td style="background:#e8f6ff"><b>on</b></td>
  <td>NO</td><td>NO</td><td>NO</td><td>NO</td><td>NO</td><td>ON</td>
</tr>
</table>
The on keyword configures the channel group to unconditionally create the channel with no LACP or PAgP negotiation. In the on mode, a functional EtherChannel exists only if a channel group that is in the on mode is connected to another channel group that also is in the on mode. If either side of the link is not in on mode, packet loss can occur. In addition, while in on mode, any LACP or PAgP configuration information is ignored by the channel group.

The active and passive keywords can be used only with LACP. The active keyword configures the channel group to actively negotiate LACP, and the passive keyword configures the channel group to listen for LACP negotiation to be offered. Either or both sides of the link must be set to active to establish an EtherChannel over LACP; setting both sides to passive will not establish an EtherChannel over LACP.

The auto, desirable, and non-silent keywords can be used only with PAgP. The desirable keyword configures the channel group to actively negotiate PAgP, and the auto keyword configures the channel group to listen for PAgP negotiation to be offered. Either or both sides of the link must be set to desirable to establish an EtherChannel over PAgP; setting both sides to auto will not establish an EtherChannel over PAgP. The optional non-silent keyword requires that a port receive PAgP packets before the port is added to the channel.
`,
  reference: [
    {
      title: "Boson CCNA Curriculum 200-301, Module 5: Switching and Network Access",
      description: "Understanding PAgP and LACP Modes"
    },
    {
      title: "CCNA 200-301 Official Cert Guide, Volume 1, Chapter 10",
      description: "RSTP and EtherChannel Configuration, Configuring Layer 2 EtherChannel"
    },
    {
      title: "Cisco: Catalyst 3750 Switch Cisco IOS Commands: channel-group",
      link: "https://www.cisco.com/c/en/us/td/docs/switches/lan/catalyst3750/software/release/12-2_25_see/command/reference/cli2_25s/swch3.html"
    }
  ]
},

{
  id: 649,
  category: "Network Access",
  questionType: "Single-select",
  question: `Which of the following commands should you issue to configure a switch to send traffic from VLAN 17 as untagged? (Select the best answer.),`,
  options: [
    "switchport trunk native vlan 17",
    "switchport trunk allowed vlan add 17",
    "switchport trunk allowed vlan remove 17",
    "switchport voice vlan 17"
  ],
  correctAnswer: 0,
  explanation: `
You should issue the switchport trunk native vlan 17 command to configure a switch to send traffic from virtual local area network (VLAN) 17 as untagged. The switchport trunk native vlan 17 command is used to configure a trunk port to use VLAN 17 as the native VLAN. Traffic that is passed over the native VLAN is sent untagged, which means that the packet is sent without 802.1Q encapsulation. Changing the native VLAN can have unexpected consequences. For example, when Dynamic Trunking Protocol (DTP) is used to negotiate the formation of a trunk link between switches, DTP uses the native VLAN for its packets. If the native VLAN is not the same on both ends of the link, a trunk will not dynamically form. In addition, if a trunk is manually formed and the native VLAN is not the same on both ends of the link, any untagged traffic received on the trunk link is considered to belong to the locally configured native VLAN, not the native VLAN configured on the sending side of the link. This could potentially cause connectivity issues such as failed pings between devices that reside in the same VLAN on both sides of the trunk.

You should not issue the switchport trunk allowed vlan add 17 command or the switchport trunk allowed vlan remove 17 command. The switchport trunk allowed vlan {add | all | except | remove} vlan-list command is issued from interface configuration mode to manually prune VLANs. Manual pruning enables an administrator to strictly specify which VLANs are allowed or denied on a trunk port. The switchport trunk allowed vlan add 17 command configures a trunk port to allow VLAN 17 traffic, and the switchport trunk allowed vlan remove 17 command configures a trunk port to disallow VLAN 17 traffic. In either case, VLAN 17 traffic is tagged unless VLAN 17 is configured as the native VLAN.

You should not issue the switchport voice vlan 17 command. The switchport voice vlan vlan-id command configures voice traffic to be sent over a user-specified voice VLAN. Voice traffic will be carried in 802.1Q frames and will be carried on a different VLAN than data traffic. If you were to issue the switchport voice vlan 17 command, voice traffic would be tagged and sent over VLAN 17.
`,
  reference: [
    {
      title: "Boson CCNA Curriculum 200-301, Module 5: Switching and Network Access",
      description: "Configuring Trunk Ports"
    },
    {
      title: "CCNA 200-301 Official Cert Guide, Volume 1, Chapter 8",
      description: "Implementing Ethernet Virtual LANs, Mismatched Native VLAN on a Trunk"
    },
    {
      title: "Cisco: Configuring VLANs: Configuring VLAN Trunks",
      link: "https://www.cisco.com/c/en/us/support/docs/lan-switching/virtual-lans-vlan/10023-3.html"
    },
    {
      title: "Cisco: IEEE 802.1Q Tunneling: 802.1Q Tunneling Configuration Guidelines and Restrictions",
      link: "https://www.cisco.com/c/en/us/support/docs/lan-switching/802-1q/24063-174.html"
    }
  ]
},{
  id: 459,
  category: "Automation and Programmability",
  questionType: "Multi-select",
  question: `Which of the following Cisco SDA components are typically located north of the DNA Center controller? (Select 2 choices.),`,
  options: [
    "the fabric",
    "the overlay network",
    "the applications",
    "the scripts",
    "the underlay network"
  ],
  correctAnswer: [2, 3],
  explanation: `
Of the available choices, scripts and applications are the Cisco Software-Defined Access (SDA) components that are typically located north of the Cisco Digital Network Architecture (DNA) Center controller. Cisco DNA is a software-centric network architecture that uses a combination of Application Programming Interfaces (APIs) and a graphical user interface (GUI) to simplify network operations. The Representational State Transfer (REST) API is used to natively communicate with Cisco devices. To communicate with third-party devices, Cisco DNA Center relies on software development kits (SDKs). The Cisco DNA controller, which is similar to a Software-Defined Networking (SDN) controller, is the central component of a Cisco SDA network. Cisco SDA is a Cisco-developed means of building local area networks (LANs) by using policies and automation.

An SDN controller uses two different sets of APIs: one set to communicate with applications and another set to communicate with devices in the data plane. Northbound APIs enable an SDN controller to communicate with applications in the application plane. Applications use northbound APIs to send requests or instructions to the SDN controller, which uses that information to modify and manage network flow. Southbound APIs enable an SDN controller to communicate with devices in the data plane.

In both SDA and SDN deployments, the controller communicates with devices by using a southbound API. Communication with applications and user interfaces is accomplished by using a northbound API.

Of the available choices, the fabric, overlay network, and underlay network are the Cisco SDA components that are typically located south of the Cisco DNA Center controller. The fabric is the entirety of the overlay network and the underlay network.

The overlay network creates Virtual Extensible LAN (VXLAN) tunnels between Cisco SDA switches. The tunnels send and receive traffic between fabric endpoints. The underlay network, on the other hand, is a more traditional network configuration of switches. It is a collection of devices, interfaces, and media that comprises the Internet Protocol (IP) network that connects each fabric node. The underlay network is part of a dynamic discovery process that is involved in creating the overlay network’s VXLAN tunnels. When an endpoint in a Cisco SDA network sends traffic to another endpoint, the traffic flows from the endpoint through the overlay network’s VXLAN tunnels.
`,
  reference: [
    {
      title: "Boson CCNA Curriculum 200-301, Module 9: Automation and Programming",
      description: "SDN and Cisco SDA"
    },
    {
      title: "CCNA 200-301 Official Cert Guide, Volume 2, Chapter 16",
      description: "Introduction to Controller-Based Networking, How Automation Impacts Network Management"
    }
  ]
},

{
  id: 78,
  category: "IP Connectivity",
  questionType: "Multi-select",
  question: `You issue the following command on a Cisco router in global configuration mode:
<pre>ipv6 route 2001:db8:a::/32 2001:db8:a::1 5</pre>
Which of the following have you created? (Select 2 choices.),`,
  options: [
    "a fully specified static route",
    "a directly attached static route",
    "a floating static route",
    "a recursive static route"
  ],
  correctAnswer: [2, 3],
  explanation: `
You have created an Internet Protocol version 6 (IPv6) recursive static route that is also a floating static route if you issue the ipv6 route 2001:db8:a::/32 2001:db8:a::1 5 command on a Cisco router in global configuration mode. A recursive static route specifies the destination IPv6 network and the IPv6 next-hop address only. For example, the ipv6 route 2001:db8:a::/32 2001:db8:a::1 command configures the router to resolve all IPv6 addresses in the 2001:db8:a::/32 prefix through the next hop that has been assigned the IPv6 address of 2001:db8:a::1. The router assumes the outbound interface to be the interface to which the next hop is either directly or indirectly connected. In other words, the next-hop IPv6 address must be resolvable through the outbound interface.

A floating static route adds an administrative distance (AD) value to the route so that it can be used as a backup route. By default, static routes have an AD of 1. Floating static routes are typically configured with an AD value that is numerically higher so that it can be used as a backup route when the primary route goes down. For example, the ipv6 route 2001:db8:a::/32 2001:db8:a::1 5 command will install a static route with an AD of 5. If a static route with the default AD of 1 were to go down, the floating static route could be used as a backup route to the destination network.

There are two other types of IPv6 static routes: directly attached static routes and fully specified static routes. A directly attached static route specifies the destination IPv6 network and the outbound interface. For example, the ipv6 route 2001:db8:a::/32 fastethernet 0/1 command configures a directly attached static route. When a directly connected static route is configured, the router assumes that any packet that matches the destination network is reachable through the specified outbound interface. Therefore, the packet’s full destination address is used as the IPv6 next-hop address.

A fully specified static route is an IPv6 static route in which the destination network, outbound interface, and next-hop IPv6 address are all configured directly. For example, if you were to issue the ipv6 route 2001:db8:a::/32 fastethernet 0/1 2001:db8:b::1 command, the IPv6 prefix of 2001:db8:a::/32 represents the destination network. The router’s FastEthernet 0/1 interface is the outbound interface. The IPv6 address of 2001:db8:b::1 is the next-hop IPv6 address. Fully specified static routes are most often used when the outbound interface is multiaccess and could therefore be configured with multiple next-hop addresses. The next-hop address that is specified in the command must be directly connected to the outbound interface.
`,
  reference: [
    {
      title: "Boson CCNA Curriculum 200-301, Module 6: IP Routing",
      description: "IPv6 Static Routes"
    },
    {
      title: "Cisco: IPv6 Routing: Static Routing: Information About IPv6 Routing: Static Routing",
      link: "https://www.cisco.com/c/en/us/td/docs/ios-xml/ios/ipv6/configuration/xe-16/ipv6-xe-16-book/ip6-static.html"
    }
  ]
},

{
  id: 701,
  category: "Network Access",
  questionType: "Multi-select",
  question: `Which of the following functions are performed by a WLC in a split-MAC deployment? (Select 2 choices.),`,
  options: [
    "authentication",
    "resource reservation",
    "packet prioritization",
    "beacon and probe response",
    "encryption"
  ],
  correctAnswer: [0, 1],
  explanation: `
Authentication and resource reservation are functions performed by a wireless LAN controller (WLC) in a split-MAC deployment. In a Cisco Unified Wireless Network deployment, the Media Access Control (MAC) functions that are normally handled by a single device in an autonomous wireless network are distributed between lightweight access points (APs) and WLCs. A WLC handles tasks that are not time-sensitive, such as security management, lightweight AP configuration management, and client load balancing. The WLC is also responsible for client association requests, data encapsulation, client authentication, key exchange, security policy enforcement, and radio frequency (RF) management.

By contrast, the functionality provided by the lightweight AP includes handling the real-time processing of data, such as sending and receiving 802.11 traffic, responding to beacons and probe messages, encryption, and packet prioritization. In addition, the lightweight AP must send management information to the WLC so that the WLC can forward the information to a management station.
`,
  reference: [
    {
      title: "CCNA 200-301 Official Cert Guide, Volume 1, Chapter 27",
      description: "Analyzing Cisco Wireless Architectures, Split-MAC Architectures"
    },
    {
      title: "Cisco: Cisco Unified Wireless Technology and Architecture: Split MAC Architecture",
      link: "https://www.cisco.com/c/en/us/about/security-center/archived-reference/index.html"
    }
  ]
},

{
  id: 462,
  category: "Automation and Programmability",
  questionType: "Matching",
  question: `
Match each API protocol to its correct SDN interface type.<br>
Two items should be matched to <b>NBI</b>, and four items should be matched to <b>SBI</b>.<br>
`,
  matchingPairs: {
    terms: [
      { id: "t1", text: "OSGi" },
      { id: "t4", text: "OnePK" },
      { id: "t2", text: "REST" },
      { id: "t3", text: "NETCONF" },
      { id: "t5", text: "OpenFlow" },
      { id: "t6", text: "OpFlex" }
    ],
    definitions: [
      { id: "c", text: "SBI" },
      { id: "d", text: "SBI" },
      { id: "a", text: "NBI" },
      { id: "b", text: "NBI" },
      { id: "e", text: "SBI" },
      { id: "f", text: "SBI" }
    ]
  },
  correctAnswer: {
    t1: "a", // OSGi - NBI
    t2: "b", // REST - NBI
    t3: "c", // NETCONF - SBI
    t4: "d", // OnePK - SBI
    t5: "e", // OpenFlow - SBI
    t6: "f"  // OpFlex - SBI
  },
  explanation: `
Software-Defined Networking (SDN) is an intelligent network architecture in which a software controller assumes the control plane functionality for all network devices. A northbound Application Programming Interface (API) is sometimes called a northbound interface (NBI). Northbound APIs enable an SDN controller to communicate with applications in the application plane. Examples of northbound APIs include Java Open Services Gateway initiative (OSGi) and Representational State Transfer (REST).

REST is a northbound API architecture that uses Hypertext Transfer Protocol (HTTP) or HTTP Secure (HTTPS) to enable external resources to access and make use of programmatic methods that are exposed by the API. REST APIs typically return data in either Extensible Markup Language (XML) or JavaScript Object Notation (JSON) format.

OSGi is a Java-based northbound API framework that is intended to enable the development of modular programs. OSGi also allows the use of the Python programming language as a means of extended controller functions. For transport, OSGi deployments often rely on HTTP.

A southbound API is sometimes called a southbound interface (SBI). Southbound APIs enable an SDN controller to communicate with devices on the network data plane. NETCONF, OnePK, OpenFlow, and OpFlex are all examples of southbound APIs.

NETCONF uses Extensible Markup Language (XML) and Remote Procedure Calls (RPCs) to configure network devices. XML is used for both data encoding and protocol messages. NETCONF typically relies on Secure Shell (SSH) for transport.

OpFlex uses a declarative SDN model in which the instructions that are sent to the controller are not so detailed. The controller allows the devices in the data plane to make more network decisions about how to implement the policy.

OpenFlow uses an imperative SDN model in which detailed instructions are sent to the SDN controller when a new policy is to be configured. The SDN controller manages both the network and the policies applied to the devices.

The OnePK API is a Cisco-proprietary API. It uses Java, C, or Python to configure network devices. It can use either Secure Sockets Layer (SSL) or Transport Layer Security (TLS) to encrypt data in transit.
`,
  reference: [
    {
      title: "Boson CCNA Curriculum 200-301, Module 9: Automation and Programming",
      description: "Southbound APIs"
    },
    {
      title: "CCNA 200-301 Official Cert Guide, Volume 2, Chapter 16",
      description: "Introduction to Controller-Based Networking, How Automation Impacts Network Management"
    },
    {
      title: "Cisco: NETCONF Protocol: Information About the NETCONF Protocol (PDF)",
      link: "https://www.cisco.com/c/en/us/support/docs/cloud-systems-management/netconf/118978-configure-netconf.html"
    },
    {
      title: "Cisco: Cisco Application Policy Infrastructure Controller (APIC)",
      link: "https://www.cisco.com/c/en/us/td/docs/cloud-systems-management/application-policy-infrastructure-controller/1-2-x/cli-ref/b_CLI_Ref_1_2_x/b_CLI_Ref_1_2_x_chapter_01.html"
    },
    {
      title: "Cisco: OpenFlow: Information About OpenFlow",
      link: "https://www.cisco.com/c/en/us/td/docs/ios-xml/ios/sdn/configuration/xe-3s/sdn-xe-3s-book/sdn-openflow.html"
    },
    {
      title: "Cisco: Implementing OnePK: Information About onePK",
      link: "https://www.cisco.com/c/en/us/td/docs/ios-xml/ios/onepk/configuration/xe-3s/onepk-xe-3s-book/onepk-overview.html"
    },
    {
      title: "Cisco: Cisco Extensible Network Controller: Product Architecture and Functions (PDF)",
      link: "https://www.cisco.com/c/en/us/about/networking/tech-field-day/2014/tfd9/cisco-extensible-network-controller-presentation.pdf"
    }
  ]
},

{
  id: 692,
  category: "Network Fundamentals",
  questionType: "Single-select",
  question: `Which of the following fields in an 802.11 MAC frame is used to indicate whether the frame is a management frame? (Select the best answer.),`,
  options: [
    "FCS",
    "SEQ",
    "DUR",
    "FC"
  ],
  correctAnswer: 3,
  explanation: `
<p>The Frame Control (FC) field of an Institute of Electrical & Electronics Engineers (IEEE) 802.11 Media Access Control (MAC) frame is used to indicate whether the frame is a management frame. The FC field is the first field in a MAC frame, and its 2 bytes of data are subdivided into 11 related fields of information, such as wireless protocol, frame type, and frame subtype, as shown in the following diagram:</p>

<p><img src="/images/q692.png" alt="802.11 MAC Frame" style="max-width:100%;margin:12px 0;"></p>

<p>The Protocol Version field is a 2-bit field that identifies the 802.11 protocol used by the frame. The 2-bit Type field identifies which type of 802.11 frame follows. There are three general types of 802.11 frames: control, management, and data. The 4-bit Sub Type field further identifies what subset of frame can be expected. For example, if the Type field identifies the frame as a management frame, the Sub Type field might identify the frame as a beacon frame, which is a type of management frame.</p>

<p>The To DS and From DS fields are used to identify if the frame is destined to or transmitted from the distribution system (DS). For example, if the To DS field was set and the From DS field was unset, this would indicate that the frame was traveling from the wireless network to a computer that is connected to the wired network, or DS. If the To DS field is unset and the From DS field is set, then the frame is traveling to the wireless network from the wired network. If neither field is set, then the frame is not intended to leave the wireless network.</p>

<p>The More Fragments field indicates whether the frame is fragmented and if additional fragments follow. The Retry field indicates whether the frame has been retransmitted; this field is only applicable to management and data frames.</p>

<p>The Power Management field identifies the power mode of the client, which is commonly referred to as the station (STA). The STA can be in power save mode or active mode, and the Power Management field of a frame is used to inform the access point (AP) of the current state of the STA. The More Data field indicates that the AP has additional data buffered for the STA. This field is commonly used with broadcast and multicast frames.</p>

<p>The WEP field indicates whether the frame data is encrypted. Finally, the Strict field indicates whether data frames can be processed in an order different from which they were received.</p>

<p>The remaining fields in an 802.11 frame are as follows:</p>

<p><img src="/images/q692_2.png" alt="802.11 MAC Subfields" style="max-width:100%;margin:12px 0;"></p>

<p>The Duration (DUR) field is a 2-byte field that is used mainly by control frames to indicate transmission times. However, this field is also used by the Power Save (PS) poll control frame to indicate the association identity (AID) of a client.</p>

<p>The address fields, Address 1 (ADD1), Address 2 (ADD2), Address 3 (ADD3), and Address 4 (ADD4), are 6-byte fields used to convey MAC address and Basic Service Set Identifier (BSSID) information. What information resides in which address field is nearly dependent on the type of frame. However, ADD1, ADD2, and ADD3 typically contain a source MAC address, destination MAC address, and BSSID with the order being dependent on whether the frame is entering the DS, leaving the DS, or passing directly between ad-hoc wireless devices. The ADD4 field is only present for frames passing between devices in the DS, such as from one AP to another AP.</p>

<p>The Sequence (SEQ) field is a 2-byte field that is subdivided to store two related pieces of information: the fragment number and sequence number of each frame.</p>

<p>The DATA portion of a frame varies in size and contains the frame's payload. For data frames, the payload is user data. However, for other frames, such as management frames, this portion of the frame might contain information such as supported data rates and cipher suites.</p>

<p>Finally, the Frame Check Sequence (FCS) field contains a 4-byte cyclic redundancy check (CRC) value calculated from all the 802.11 header fields, including the data portion of the frame. This value is used by the receiving device to determine whether the frame was corrupted during transit.</p>
`,
  reference: [
    {
      title: "Boson CCNA Curriculum 200-301, Module 3: Wireless Networking Fundamentals",
      description: "802.11 MAC Frames"
    },
    {
      title: "SANS Institute: IEEE 802.11 Pocket Reference Guide (PDF)",
      link: "https://www.sans.org/white-papers/1192/"
    },
    {
      title: "Microsoft Docs: How 802.11 Wireless Works: 802.11 MAC Frame",
      link: "https://learn.microsoft.com/en-us/windows/win32/nativewifi/802-11-mac-frame"
    }
  ]
},

{
  id: 631,
  category: "Network Fundamentals",
  questionType: "Single-select",
  question: `Which of the following pairs of IP addresses could you use at each end of a point-to-point link? (Select the best answer.),`,
  options: [
    "10.1.1.127/30 and 10.1.1.128/30",
    "10.1.1.62/30 and 10.1.1.65/30",
    "10.1.1.236/30 and 10.1.1.237/30",
    "10.1.1.2/30 and 10.1.1.3/30",
    "10.1.1.153/30 and 10.1.1.154/30"
  ],
  correctAnswer: 4,
  explanation: `
You could use the 10.1.1.153/30 and 10.1.1.154/30 Internet Protocol (IP) addresses for each end of a point-to-point link. A /30 subnet mask is typically used for point-to-point links so that the available IP address space is conserved. Networks that are subnetted by using /30 masks are separated into groups of four addresses each. The first address is the subnet address, the next two addresses are valid host addresses, and the last address is the broadcast address for the subnet. Because there are four addresses in each subnet, each subnet address is divisible by four.

The following list indicates how many IP addresses exist within each subnet, based on the subnet mask:

/24 subnet mask: 256 addresses in each subnet  
/25 subnet mask: 128 addresses in each subnet  
/26 subnet mask: 64 addresses in each subnet  
/27 subnet mask: 32 addresses in each subnet  
/28 subnet mask: 16 addresses in each subnet  
/29 subnet mask: 8 addresses in each subnet  
/30 subnet mask: 4 addresses in each subnet

To determine the number of valid host addresses for each of the subnets in the list, subtract two from the total number of addresses: one for the subnet address and one for the broadcast address.

The 10.1.1.153/30 and 10.1.1.154/30 IP addresses can be used as host addresses for each end of a point-to-point link for the following reasons. First, neither address is a subnet address or a broadcast address; second, both host addresses are on the same subnet. The subnet address is 10.1.1.152/30; the last octet, 152, is divisible by four. The broadcast address for the subnet is 10.1.1.155/30. The subnet address for the next available /30 subnet is 10.1.1.156/30.

The 10.1.1.3/30 IP address cannot be used as a host address, because it is a broadcast address. The subnet address is 10.1.1.0/30, the valid host addresses are 10.1.1.1/30 and 10.1.1.2/30, and the broadcast address is 10.1.1.3/30.

The 10.1.1.62/30 and 10.1.1.65/30 IP addresses are valid host addresses. However, these two addresses cannot be used for each end of a point-to-point link, because they reside within different subnets. The 10.1.1.62/30 address resides within the 10.1.1.60/30 subnet, and the 10.1.1.65/30 address resides within the 10.1.1.64/30 subnet.

The 10.1.1.127/30 and 10.1.1.128/30 IP addresses cannot be used as host addresses. The 10.1.1.127/30 address is the broadcast address for the 10.1.1.124/30 subnet, and the 10.1.1.128/30 address is the subnet address for the 10.1.1.128/30 subnet.

The IP address 10.1.1.236/30 cannot be used as a host address, because it is the subnet address for the 10.1.1.236/30 subnet. The last octet, 236, is divisible by four; therefore, the address 10.1.1.236/30 is the subnet address.
`,
  reference: [
    {
      title: "Boson CCNA Curriculum 200-301, Module 2: Network Addressing and Transport",
      description: "Subnetting"
    },
    {
      title: "CCNA 200-301 Official Cert Guide, Volume 1, Chapter 13",
      description: "Analyzing Subnet Masks, Calculations Based on the IPv4 Address Format"
    },
    {
      title: "Cisco: IP Addressing and Subnetting for New Users",
      link: "https://www.cisco.com/c/en/us/support/docs/ip/address-resolution-protocol-arp/13788-3.html"
    }
  ]
},

{
  id: 402,
  category: "Security Fundamentals",
  questionType: "Matching",
  question: `
Match each mitigation method to the type of threat or attack it most likely mitigates.
`,
  matchingPairs: {
    terms: [
      { id: "t1", text: "User Awareness or Training" },
      { id: "t2", text: "User Awareness or Training" },
      { id: "t3", text: "User Awareness or Training" },
      { id: "t4", text: "Physical Access Control" },
      { id: "t5", text: "Physical Access Control" }
    ],
    definitions: [
      { id: "a", text: "social engineering" },
      { id: "b", text: "pharming" },
      { id: "c", text: "brute-force attack" },
      { id: "d", text: "burglary" },
      { id: "e", text: "tailgating" }
    ]
  },
  correctAnswer: {
    t1: "a", // User Awareness or Training -> social engineering
    t2: "b", // User Awareness or Training -> pharming
    t3: "c", // User Awareness or Training -> brute-force attack
    t4: "d", // Physical Access Control -> burglary
    t5: "e"  // Physical Access Control -> tailgating
  },
  explanation: `
Brute-force attacks, pharming, and social engineering can all be mitigated by implementing user awareness or training. Burglary and tailgating, on the other hand, are more likely to be mitigated by using physical access controls.

User awareness is a security program element that provides employees with information about protecting confidential data. User training is a security program element that familiarizes users with corporate security policies in a formal and mandatory fashion. Physical access control is a security program element that protects infrastructure locations such as network closets.

Educating users about enterprise security is an important step in ensuring the confidentiality and integrity of data. Through education, users without a technological background can learn to identify and thus avoid falling prey to common attacks. For example, users who have been educated on the dangers of phishing emails, pharming, and social engineering attacks will be less likely to click malicious links in emails than those who have not been educated on such tactics. Phishing is an attempt to compromise user information by disguising a malicious email as a legitimate email. Pharming is the use of a legitimate service to redirect users to a malicious or compromised site. Social engineering is the simple exploitation of human trust and instinctive behavior. The goal of both user awareness and user training is to minimize the likelihood of users becoming victims of their own instincts.

User awareness is different from user training in that user training is a more formal and mandatory process. Making users aware of potential threats might involve little more than sending emails or making announcements that describe the threat. User training, on the other hand, is formally instructing users by using a published company security policy that outlines how to identify a given threat and how to respond to it. An example of user training might be guiding users through a company’s password complexity policy. In this case, users would be taught how to create secure passwords in order to mitigate common password attacks, such as a brute-force attack. A brute-force attack occurs when an attacker uses every possible combination of characters in an attempt to guess a password.

Although not specific to users, physical access control allows administrators to protect sensitive equipment and data from accidental or malicious compromise by users. For example, locking the door to a network closet prevents users, visitors, or malicious actors from accessing, corrupting, or stealing the hardware that keeps the local area network (LAN) running. Physical access controls can be as simple as a padlock or as elaborate as a mantrap, which is a system that is intended to prevent unauthorized people from following an authorized person into a secured location. A mantrap consists of a set of two locked doors that operate in a manner that prevents both doors from being opened at the same time. People who enter the mantrap must be identified before they are allowed to exit the mantrap into the secure area. Security guards can use facial recognition to verify the identity of proximity badge holders.
`,
  reference: [
    {
      title: "Boson CCNA Curriculum 200-301, Module 8: Security Fundamentals",
      description: "Access Controls"
    },
    {
      title: "Boson CCNA Curriculum 200-301, Module 8: Security Fundamentals",
      description: "Password Attacks"
    },
    {
      title: "CCNA 200-301 Official Cert Guide, Volume 2, Chapter 4",
      description: "Security Architectures, Developing a Security Program to Educate Users"
    }
  ]
},

{
  id: 68,
  category: "IP Connectivity",
  questionType: "Single-select",
  question: `
<p><img src="/images/q68.png" alt="ospf-area0-diagram" style="max-width:100%;margin:12px 0;"></p>
<p>You administer the network in the above exhibit.</p>

<p>RouterA's Serial 0/0 interface is directly connected to the ISP and should provide the default route for the entire network. No static routes are configured on RouterB.</p>

<p>You issue the show running-config command on RouterA and receive the following partial output:</p>
<pre>
router ospf 100
 log-adjacency-changes
 network 10.10.10.0 0.0.0.3 area 0
 network 123.45.67.89 0.0.0.3 area 0
 default-information originate
!
ip route 0.0.0.0 0.0.0.0 10.10.10.2
</pre>
Which of the following statements is true? (Select the best answer.)
`,
  options: [
    "RouterA is not configured to advertise a gateway of last resort.",
    "The static route is misconfigured on RouterA.",
    "The network 10.10.10.0 0.0.0.3 area 0 command contains invalid syntax.",
    "Traffic from RouterB to the Internet will be forwarded through RouterA."
  ],
  correctAnswer: 1,
  explanation: `
The static route is misconfigured on RouterA; therefore, RouterB will not be configured with a gateway of last resort. The ip route 0.0.0.0 0.0.0.0 10.10.10.2 command in this scenario configures RouterA to use the FastEthernet 1/0 interface on RouterB as a gateway of last resort instead of the Serial 0/0 interface on RouterA, which is the interface that is connected to the Internet service provider (ISP). Additionally, the default-information originate command is configured on RouterA.

Issuing the default-information originate command in Open Shortest Path First (OSPF) router configuration mode will cause RouterA to inject its statically configured default route into OSPF, thereby advertising the default route to neighboring routers and propagating neighboring routers with a gateway of last resort. However, in this case, the OSPF process on RouterB will not place the route into its routing table, because the next-hop address advertised by RouterA is the address of one of RouterB's broadcast interfaces. If RouterA and RouterB were connected over a serial link, RouterB would place the advertised default route into its routing table and would create a routing loop.

Traffic from RouterB to the Internet will not be forwarded through RouterA. RouterA is not advertising its default route to RouterB in this scenario. Additionally, RouterB is not configured with its own gateway of last resort.

RouterA is configured to advertise a gateway of last resort. The default-information originate command configures an OSPF router to inject its default route into OSPF as an external route, thereby advertising its default route to neighboring routers.

The network 10.10.10.0 0.0.0.3 area 0 command does not contain invalid syntax. To configure a particular interface or network to connect to a specific OSPF area, you should issue the network ip-address wildcard-mask area-id command in OSPF router configuration mode. By using the ip-address and wildcard-mask parameters, you can specify a router interface, a single network, or a group of networks. In this scenario, the network 10.10.10.0 0.0.0.3 area 0 command correctly configures OSPF to advertise the 10.10.10.0/30 network.
`,
  reference: [
    {
      title: "Boson CCNA Curriculum 200-301, Module 6: IP Routing",
      description: "Static Routes"
    },
    {
      title: "Cisco: How OSPF Injects a Default Route into a Normal Area",
      link: "https://www.cisco.com/c/en/us/support/docs/ip/open-shortest-path-first-ospf/13188-ospf-default.html"
    }
  ]
},

{
  id: 438,
  category: "Security Fundamentals",
  questionType: "Multi-select",
  question: `
<p><img src="/images/q438.png" alt="switch-port-security-diagram" style="max-width:100%;margin:12px 0;"></p>
<p>You administer the network shown in the exhibit. You issue the following commands on SwitchA:
<pre>
SwitchA#configure terminal
SwitchA(config)#interface fastethernet 0/1
SwitchA(config-if)#switchport port-security
SwitchA(config-if)#switchport port-security violation protect
</pre>
Which of the following statements are true regarding this configuration? (Select 2 choices.)
`,
  options: [
    "One of the hosts will not be able to access the network.",
    "Any previously learned MAC addresses will be removed.",
    "The interface will dynamically learn a MAC address.",
    "Static MAC addresses cannot be configured on the interface.",
    "The interface will remain up but will drop all packets generated by the hosts connected to the hub."
  ],
  correctAnswer: [0, 2],
  explanation: `
After you issue this command sequence on SwitchA, one of the hosts will not be able to access the network and the interface will dynamically learn a Media Access Control (MAC) address. You can configure port security to limit traffic on a switch port so that only traffic sent from one or more statically configured or dynamically learned source MAC addresses is allowed into a switch port. If port security has not been previously configured for an interface, issuing the switchport port-security command will result in port security becoming enabled with all of the following default settings:

<ul>
<li>Sticky address learning is disabled.</li>
<li>A maximum of one MAC address will be allowed on the port.</li>
<li>The Shutdown violation mode is enabled.</li>
<li>The port security aging time is configured to zero.</li>
<li>The port security static aging is disabled.</li>
<li>The port security aging type is configured to absolute.</li>
</ul>

It is not necessary to re-enable port security if you modify port security settings, such as the maximum number of MAC addresses allowed on the port, after having previously issued the switchport port-security command without parameters.

The switchport port-security violation protect command configures an interface to discard traffic from unauthorized hosts. The switchport port-security violation command can be issued with either the restrict keyword, the protect keyword, or the shutdown keyword. The restrict keyword configures the interface to remain up if more than the maximum number of addresses is learned, but traffic from the violating devices is dropped and a log entry is generated. Similarly, the protect keyword configures the interface to remain up if more than the maximum number of addresses is learned and to drop traffic from violating devices; however, unlike the restrict keyword, the protect keyword does not create a log of the violations. The shutdown keyword configures the port to shut down if more than the maximum allowed MAC addresses are learned on the interface.

Because the FastEthernet 0/1 interface is configured to permit the default maximum number of MAC addresses and has a violation mode of protect, the interface will permit only one of the two hosts in this scenario to access the network. When the second host attempts to access the network, the FastEthernet interface will discard all traffic from the second host and will continue to function normally for the first host.

You can issue the switchport port-security maximum command to specify the number of authorized MAC addresses for a particular interface. For example, the switchport port-security maximum 2 command can double the number of secure MAC addresses stored on the interface to two.

You can configure static MAC addresses on an interface that is configured for port security. In addition, you can allow the interface to dynamically learn the MAC addresses of connected devices. Port security supports both methods of learning MAC addresses.

You can issue the clear port-security dynamic [address mac-address | interface type mod/num] command to remove a MAC address from an interface. The command sequence shown in this scenario will not remove a MAC address from interface FastEthernet 1/1.

The command sequence shown in this scenario will not cause the FastEthernet 0/1 interface to remain up but will drop all packets originating from the hosts connected to the hub. The interface will remain up and will accept packets from only one of the hosts connected to it. However, if the violation mode of the interface were changed to shutdown, the interface would be shut down when it detected the MAC address of the second host and then neither host would be able access the network.
`,
  reference: [
    {
      title: "Boson CCNA Curriculum 200-301, Module 8: Security Fundamentals",
      description: "Restricting Ports by Client MAC Address"
    },
    {
      title: "Cisco: Configuring Port-Based Traffic Control: Configuring Port Security",
      link: "https://www.cisco.com/c/en/us/support/docs/lan-switching/port-security/10584-12.html"
    }
  ]
},

{
  id: 637,
  category: "Network Fundamentals",
  questionType: "Single-select",
  question: `
You issue the following command on a Cisco router's FastEthernet 0/0 interface:
<pre>
ipv6 address 2001:DB8:A::/64 eui-64
no shutdown
</pre>
The interface on the other side of the link is not yet configured. In addition, there is no DHCPv6 server on the network.

How many IPv6 addresses are configured on the interface? (Select the best answer.)
`,
  options: [
    "none",
    "two",
    "one",
    "three"
  ],
  correctAnswer: 1,
  explanation: `
Two Internet Protocol version 6 (IPv6) addresses are configured on the interface after you issue the ipv6 address 2001:DB8:A::/64 eui-64 command on the Cisco router's FastEthernet 0/0 interface. The eui-64 keyword configures a static IPv6 prefix but allows the router to automatically generate a 64-bit interface ID known as an extended unique identifier (EUI)-64 interface ID; the EUI-64 interface ID is based on the interface's Media Access Control (MAC) address.

In addition, a second IPv6 address, referred to as a link-local unicast address, is automatically assigned to an interface when IPv6 is enabled on that interface. Therefore, the IPv6 interface in this scenario is configured with two IPv6 addresses. There are three ways to enable IPv6 on an interface: by manually assigning an IPv6 address to the interface, by automatically assigning an IPv6 address to the interface, or by issuing the ipv6 enable command on the interface.

To automatically assign an IPv6 address to an interface, you can implement Stateless Address Automatic Configuration (SLAAC), Dynamic Host Configuration Protocol version 6 (DHCPv6), or a combination of the two. SLAAC configurations occur based on information that is sent in router advertisements from an IPv6 gateway operating on the same network segment. When the link-local interface is active on the segment, it can announce itself and receive router advertisements from an IPv6 router that is operating on the same segment. If an IPv6 router exists and can function as an IPv6 gateway, it will advertise that functionality as well as the globally unique prefix with which it is configured and with which connected nodes should be used. The ipv6 address autoconfig command configures an interface to automatically assign itself a global unicast IPv6 address by using SLAAC.

The same ipv6 address autoconfig command that enables SLAAC on an interface will enable the interface to obtain additional information from a DHCPv6 server if a DHCPv6 server exists on the network and is configured to send naddress information. The ipv6 address dhcp command configures a DHCPv6 client interface to use stateful DHCPv6 addressing, which configures addressing information and extra information from the DHCPv6 server.

IPv6 link-local unicast addresses are used for communication over a single link. Routers do not forward traffic sent to a link-local address; the traffic stays on the local link. IPv6 link-local unicast addresses are often used for neighbor discovery. These addresses usually begin with FE8, as specified in Request for Comments (RFC) 4291.

Unlike with IP version 4 (IPv4), it is possible to configure more than one IPv6 address on an interface without defining the addresses as primary or secondary. IPv4-only interfaces can be configured with only one primary IPv4 address. Although it is possible for an interface to have more than two IPv6 addresses, that is not the case in this scenario.
`,
  reference: [
    {
      title: "CCNA 200-301 Official Cert Guide, Volume 1, Chapter 24",
      description: "Implementing IPv6 Addressing on Routers, Generating a Unique Interface ID Using Modified EUI-64"
    },
    {
      title: "Cisco: Configuring IPv6 Routing: Configuring IPv6 Addressing and Enabling IPv6 Routing",
      link: "https://www.cisco.com/c/en/us/td/docs/ios-xml/ios/ipv6/configuration/xe-3s/ipv6-xe-3s-book/ipv6-add-cfg.html"
    }
  ]
},

{
  id: 23,
  category: "IP Connectivity",
  questionType: "Single-select",
  question: `
What is the normal OSPF neighbor state for a router that is neither the DR nor the BDR? (Select the best answer.)
`,
  options: [
    "Full",
    "Loading",
    "Down",
    "Exchange",
    "2-Way"
  ],
  correctAnswer: 4,
  explanation: `
The normal Open Shortest Path First (OSPF) neighbor state for a router that is neither the designated router (DR) nor the backup designated router (BDR) is the 2-Way state. When an OSPF neighbor router is powered on, it transitions through the following neighbor states:

• Down
• Init
• 2-Way
• Exstart
• Exchange
• Loading
• Full

An OSPF neighbor router begins in the Down state. A neighbor in the Down state has not yet sent a Hello packet.

When a Hello packet is received from the neighbor router but the Hello packet does not contain the receiving router’s ID, the neighbor router is in the Init state. The receiving router replies to the neighbor router with a Hello packet that contains the neighbor router’s ID as an acknowledgment that the receiving router received the neighbor’s Hello packet. If a router is stuck in the Init state, it has sent Hello packets but has not received any from the neighbor router.

The neighbor router replies with a Hello packet that contains the receiving router’s ID. When this occurs, the neighbor router is in the 2-Way state. At the end of the 2-Way state, the DR and BDR are elected for broadcast and nonbroadcast multiaccess (NBMA) networks. On broadcast and NBMA networks, neighbor routers will proceed to the Full state only with the DR and BDR; other neighbor adjacencies will remain in the 2-Way state. Routers that remain in the 2-Way state will contain 2WAY/DROTHER in the output of the show ip ospf neighbor command. If all routers on a segment remain in the 2-Way state, you should verify whether all routers on the segment are set to a priority of 0, which prevents any of them from becoming the DR or BDR.

After the DR and BDR are elected, neighbor routers form master-slave relationships in order to establish the method for exchanging link-state information. Routers in this state are in the Exstart state. If a router is stuck in the Exstart state, you should verify whether there is a problem with mismatched maximum transmission unit (MTU) settings or duplicate router IDs.

Neighbor routers then exchange database descriptor (DBD) packets. These DBD packets contain link-state advertisement (LSA) headers that describe the contents of the link-state database (LSDB). Routers in this state are in the Exchange state. If a router is stuck in the Exchange state, you should verify whether there is a problem with mismatched MTU settings or duplicate router IDs.

Routers then send link-state request (LSR) packets to request the contents of the neighbor router’s OSPF database. The neighbor router replies with link-state update (LSU) packets that contain the routing database information. Routers in this state are in the Loading state. If a router is stuck in the Loading state, you should verify whether there is a problem with mismatched MTU settings or corrupted LSR packets.

After the OSPF databases of neighbor routers are fully synchronized, the routers transition to the Full state, which is the normal OSPF router state for DRs and BDRs. A router will periodically send Hello packets to its neighbors to indicate that it is still functional. If a router does not receive a Hello packet from a neighbor within the dead timer interval, the neighbor router will transition back to the Down state.
`,
  reference: [
    {
      title: "Boson CCNA Curriculum 200-301, Module 6: IP Routing",
      description: "Understanding OSPF Adjacencies"
    },
    {
      title: "Cisco: OSPF Neighbor States",
      link: "https://www.cisco.com/c/en/us/support/docs/ip/open-shortest-path-first-ospf/7039-1.html"
    }
  ]
},

{
  id: 422,
  category: "Security Fundamentals",
  questionType: "Single-select",
  question: `
Which of the following statements is true regarding ACLs? (Select the best answer.)
`,
  options: [
    "ACLs are processed from the least specific entry in the list to the most specific entry.",
    "ACLs are processed from the most specific entry in the list to the least specific entry.",
    "ACLs are processed from the first entry in the list to the last entry.",
    "ACLs are processed from the last entry in the list to the first entry."
  ],
  correctAnswer: 2,
  explanation: `
Access control lists (ACLs) are processed sequentially from the first entry in the list to the last entry. ACLs are used to control packet flow across a network. They can either permit or deny packets based on source network, destination network, protocol, or destination port. Each ACL can only be applied to a single protocol per interface and per direction. Multiple ACLs can be used to accomplish more complex packet flow throughout an organization. ACLs are constructed by using the following syntax:

Standard: <b>access-list access-list-number [permit | deny] [host | source source-wildcard | any]</b>

Extended: <b>access-list access-list-number [dynamic dynamic-name [timeout minutes]] {deny | permit} protocol source source-wildcard [operator [port]] destination destination-wildcard [operator [port]] [established] [precedence precedence] [tos tos] [log | log-input] [time-range time-range-name]</b>

Named: <b>ip access-list {extended | standard} name</b>

Standard ACLs must use an access list number in the range of numbers from 1 through 99, whereas extended ACLs can use access list numbers from 100 through 199 on all Cisco platforms and from 2000 through 2699 on most newer versions of IOS.

Because standard ACLs can filter packets only by source Internet Protocol (IP) address, they should be placed as close to the destination as possible so that other traffic originating from the source address is not affected by the ACL. By contrast, you can use extended ACLs to filter packets based on source and destination IP addresses, protocols, and ports. Extended ACLs should be placed as close to the source as possible.

ACLs are processed from top to bottom; therefore, correct sequencing is critical to ensure that an ACL achieves the desired degree of filtering. More specific entries should be located higher in an ACL so that they are processed before less specific entries. If you add new statements to an existing ACL, the statements will be appended to the end of the existing ACL; consequently, it may be necessary to re-create the ACL if you need to add a statement that should appear at or near the top of the ACL. There is an implicit deny all statement at the end of every ACL. Therefore, if traffic does not match an entry in an ACL, the traffic will be denied.

ACL processing is not performed based on statement specificity. ACLs are always processed from top to bottom. However, it is recommended that more-specific statements be placed higher than less-specific statements in an ACL. This helps ensure that statements located higher in an ACL do not negate statements located lower in the ACL.
`,
  reference: [
    {
      title: "Boson CCNA Curriculum 200-301, Module 8: Security Fundamentals",
      description: "ACLs"
    },
    {
      title: "CCNA 200-301 Official Cert Guide, Volume 2, Chapter 3",
      description: "Advanced IPv4 Access Control Lists, Extended Numbered IP Access Control Lists"
    },
    {
      title: "Cisco: Configuring IP Access Lists: Process ACLs",
      link: "https://www.cisco.com/c/en/us/support/docs/security/ios-firewall/23602-confaccesslists.html"
    }
  ]
},

{
  id: 413,
  category: "Security Fundamentals",
  questionType: "Single-select",
  question: `
Which of the following technologies can you use to establish a secure VPN tunnel between two sites that are separated by an untrusted network? (Select the best answer.)
`,
  options: [
    "IPSec",
    "PPPoA",
    "GRE",
    "PPPoE"
  ],
  correctAnswer: 0,
  explanation: `
You can use Internet Protocol Security (IPSec) to establish a secure virtual private network (VPN) tunnel between two sites that are separated by an untrusted network. IPSec is a security framework that can guarantee the confidentiality and integrity of data as it passes through an untrusted network. An IPSec VPN connection is established through a series of negotiations and authentications. Initially, the VPN peers negotiate an Internet Key Exchange (IKE) security association (SA) and establish a tunnel for key management and authentication. The key management tunnel protects the subsequent negotiation of IPSec SAs. The IPSec SAs enable the VPN peers to establish a tunnel for data transmission and to specify the methods that are used to ensure the confidentiality and integrity of the data sent through that tunnel. Typically, Authentication Header (AH) protocol or Encapsulating Security Protocol (ESP) is used to ensure the integrity of a packet and to authenticate the origin of a packet. AH is embedded within a packet to provide authentication, whereas ESP encapsulates the data in order to provide data privacy.

You cannot use Generic Routing Encapsulation (GRE) to establish a secure VPN tunnel between two sites that are separated by an untrusted network. GRE is a protocol designed to tunnel any Layer 3 protocol through an Internet Protocol (IP) transport network. Because the focus of GRE is to transport many different protocols, it has very limited security features. By contrast, IPSec has strong data confidentiality and data integrity features but it can transport only IP traffic. GRE over IPSec combines the best features of both protocols to securely transport any protocol over an IP network.

You cannot use Point-to-Point Protocol over ATM (PPPoA) to establish a secure VPN tunnel between two sites that are separated by an untrusted network. PPPoA is used to initiate a session with a Digital Subscriber Line (DSL) service provider. With PPPoA, a Point-to-Point Protocol (PPP) session is initiated between an Asymmetric DSL (ADSL)-enabled router and an access concentrator. After the PPP session is established, traffic that passes between the router and the access concentrator is encapsulated in PPP frames. The PPP frames are then encapsulated directly into Asynchronous Transfer Mode (ATM) cells and transmitted across the ADSL circuit. In addition, because neither PPP frames nor ATM cells are encrypted, PPPoA cannot provide a secure connection between the remote location and the company headquarters.

You cannot use PPP over Ethernet (PPPoE) to establish a secure VPN tunnel between two sites that are separated by an untrusted network. PPPoE is typically used to initiate a session with a DSL service provider. With PPPoE, PPP frames are encapsulated into Ethernet frames for transmission to the service provider. Because PPP frames are not encrypted, PPPoE cannot provide a secure connection between the remote location and the company headquarters.
`,
  reference: [
    {
      title: "Boson CCNA Curriculum 200-301, Module 8: Security Fundamentals",
      description: "The IPSec Protocol"
    },
    {
      title: "Cisco: Configuring Security for VPNs with IPSec: IPSec Functionality Overview",
      link: "https://www.cisco.com/c/en/us/support/docs/security/ipsec-negotiation-ike-protocols/14148-3.html"
    }
  ]
},

{
  id: 513,
  category: "Network Access",
  questionType: "Multi-select",
  question: `
<p><img src="/images/q513.png" alt="802.1q-trunking" style="max-width:100%;margin:12px 0;"></p>
<p>You connect SwitchA and SwitchB as shown above. SwitchA is a Cisco switch, and SwitchB is a non-Cisco switch. You want to be able to trunk VLAN traffic between the two switches.</p>

<p>What commands should you issue on SwitchA? (Select 2 choices.)</p>
`,
  options: [
    "SwitchA(config-if)#switchport trunk encapsulation dot1q",
    "SwitchA(config-if)#switchport trunk encapsulation isl",
    "SwitchA(config-if)#switchport mode trunk",
    "SwitchA(config-if)#switchport trunk encapsulation isl",
    "SwitchA(config-if)#switchport mode access",
    "SwitchA(config-if)#switchport trunk encapsulation dot1q"
  ],
  correctAnswer: [0, 2],
  explanation: `
You should issue the switchport mode trunk command and the switchport trunk encapsulation dot1q command in interface configuration mode. A trunk is used to carry traffic from multiple virtual local area networks (VLANs) over a single link. Traffic from each VLAN is encapsulated in a frame with a special header when it is transmitted onto the trunk link and then de-encapsulated when it is received on the other side of the trunk. This encapsulation of frames, which is also referred to as VLAN tagging, ensures that traffic does not lose its VLAN membership properties as it passes from one switch to another. To enable trunking on the port, you must enter interface configuration mode and issue the switchport mode trunk command.

There are two trunking encapsulation methods: Inter-Switch Link (ISL) and 802.1Q. ISL is a Cisco-proprietary trunking encapsulation method and works only when you are configuring trunking between Cisco devices. The Institute of Electrical and Electronics Engineers (IEEE) 802.1Q standard can be used to trunk between any two industry-standard switches. In this scenario, you must use 802.1Q encapsulation because SwitchB is a non-Cisco switch. Therefore, you should issue the switchport trunk encapsulation dot1q command in interface configuration mode on SwitchA.

The following command sequence would configure Gigabit Ethernet port 1/0/1 for trunking with 802.1Q encapsulation and save the configuration:

<pre>
SwitchA#configure terminal
SwitchA(config)#interface gigabitethernet 1/0/1
SwitchA(config-if)#switchport mode trunk
SwitchA(config-if)#switchport trunk encapsulation dot1q
SwitchA(config-if)#exit
SwitchA(config)#exit
SwitchA#copy running-config startup-config
</pre>

You should not issue the switchport trunk encapsulation isl command, because SwitchB is not a Cisco device. If SwitchB were a Cisco device, you could issue the switchport trunk encapsulation isl command in interface configuration mode on SwitchA. The encapsulation methods on each side of the trunk link must match; therefore, you would also be required to issue the switchport trunk encapsulation isl command in interface configuration mode on SwitchB.

You cannot issue the switchport mode trunk command in global configuration mode, because it must be issued in interface configuration mode. Similarly, you cannot issue the switchport trunk encapsulation command in global configuration mode, because it must be issued in interface configuration mode.

A port that is not configured for trunking is called an access port. Access ports carry traffic for a single VLAN and are typically used to connect a workstation to a switch. To configure a port for access mode, you must enter interface configuration mode and issue the switchport mode access command.
`,
  reference: [
    {
      title: "Boson CCNA Curriculum 200-301, Module 5: Switching and Network Access",
      description: "Configuring Trunk Ports"
    },
    {
      title: "Cisco: Configuring VLANs",
      link: "https://www.cisco.com/c/en/us/support/docs/lan-switching/virtual-lans-vlan/10023-3.html"
    }
  ]
},

{
  id: 486,
  category: "Network Access",
  questionType: "Single-select",
  question: `Which of the following enables a Cisco Meraki AP to automatically configure itself when it is connected to a network? (Select the best answer.)`,
  options: [
    "cloud-based AP deployment",
    "autonomous AP deployment",
    "embedded AP deployment",
    "lightweight AP deployment"
  ],
  correctAnswer: 0,
  explanation: `
Of the available choices, a cloud-based access point (AP) deployment enables a Cisco Meraki AP to automatically configure itself when it is connected to a network. An AP is a device that connects a wireless client to a wired network. For example, a Cisco Meraki AP provides wireless access by connecting to a centralized management system known as the Cisco Meraki Cloud. APs deployed at the access layer of the three-tier hierarchical network model contact the cloud in order to automatically configure themselves. APs are managed through a cloud-based dashboard.

An autonomous AP deployment connects a wireless client to a wired network without requiring a separate wireless controller; it does not automatically configure itself. An AP is a device that connects a wireless client to a wired network. An autonomous AP contains network interfaces for both wireless and wired networks; it is typically deployed as part of an autonomous AP architecture in which APs are connected directly to the access layer of the three-tier hierarchical network model.

A lightweight AP deployment connects a wireless client to a wired network but requires a separate wireless controller; it is not typically a Cisco Meraki AP. Wireless clients connect to lightweight APs, which are capable of performing real-time wireless network functions but rely on a Cisco wireless LAN controller (WLC) for management functions. The connection between a lightweight AP and a WLC is created by using two tunnels established by the Control and Provisioning of Wireless Access Points (CAPWAP) tunneling protocol. Information passing between lightweight APs and the WLC is encapsulated in Internet Protocol (IP) packets. This process enables a lightweight AP and WLC to manage connectivity to the same wireless local area network (WLAN) yet be separated by both physical and logical means. This type of deployment is also known as a split-MAC architecture because the lightweight AP handles the frames while the WLC handles the management functions.

An embedded AP deployment connects a wireless client to a wired network but requires a separate wireless controller; it is not a Cisco Meraki AP. The primary difference between this deployment and others is that the WLC is embedded within a stack of switching hardware instead of existing as a separate entity. APs can connect to the WLC by connecting to switches that are directly hosting the WLC or switch ports that are operating on the same virtual local area network (VLAN) as the WLC.
`,
  reference: [
    {
      title: "CCNA 200-301 Official Cert Guide, Volume 1, Chapter 27",
      description: "Analyzing Cisco Wireless Architectures, Cloud-based AP Architecture"
    }
  ]
},

{
  id: 611,
  category: "Network Fundamentals",
  questionType: "Multi-select",
  question: `Which of the following can cause late collisions on an Ethernet LAN? (Select 2 choices.)`,
  options: [
    "UDLD",
    "a native VLAN mismatch",
    "a duplex mismatch",
    "BPDU guard",
    "long cable segments"
  ],
  correctAnswer: [2, 4],
  explanation: `
Of the available choices, only long cable segments or a duplex mismatch can cause late collisions on an Ethernet local area network (LAN). A late collision is an Ethernet collision that occurs after 512 bits of a frame have already been transmitted. Typically, collisions are detected within a 51.2-microsecond time frame, or 512 bits. Thus an Ethernet cable that is too long might create late collisions. In addition, a half-duplex port that is connected to a full-duplex port can report late collisions on the half-duplex side of the connections. The full-duplex side will report different errors, such as runts, Frame Check Sequence (FCS) errors, and alignment errors.

A native virtual LAN (VLAN) mismatch can cause a port to go into the error-disabled state; it will not cause late collisions. A native VLAN mismatch occurs when each end of an Institute of Electrical and Electronics Engineers (IEEE) 802.1Q trunk port is operating within a different native VLAN.

BPDU guard can cause a port to go into the error-disabled state; it will not cause late collisions. BPDU guard is designed to prevent switching loops by ensuring that an access port that receives bridge protocol data units (BPDUs) is placed into the error-disabled state. Access ports should be connected to end stations and therefore should never receive BPDUs.

UniDirectional Link Detection (UDLD) can cause a port to go into the error-disabled state; it will not cause late collisions. UDLD is designed to determine whether a communication link is occurring in only one direction. Unidirectional links can result in switching loops if the switch does not know that the link is unidirectional. If UDLD detects a unidirectional link, it places the port into the error-disabled state.
`,
  reference: [
    {
      title: "Boson CCNA Curriculum 200-301, Module 1: Network Fundamentals",
      description: "Collisions"
    },
    {
      title: "CCNA 200-301 Official Cert Guide, Volume 1, Chapter 7",
      description: "Configuring and Verifying Switch Interfaces, Common Layer 1 Problems on Working Interfaces"
    },
    {
      title: "Cisco: Troubleshooting LAN Switching Environments: Configuration Issues",
      link: "https://www.cisco.com/c/en/us/support/docs/lan-switching/ethernet/12013-12.html"
    },
    {
      title: "Cisco: Troubleshooting Ethernet Collisions: Late Collisions",
      link: "https://www.cisco.com/en/US/products/hw/switches/ps708/products_tech_note09186a00800b1500.shtml"
    }
  ]
},

{
  id: 436,
  category: "Security Fundamentals",
  questionType: "Single-select",
  question: `In which of the following Layer 2 attacks does an attacker generate thousands of forged frames every minute with the intention of overwhelming the switch's MAC address table? (Select the best answer.)`,
  options: [
    "MAC spoofing",
    "VLAN hopping",
    "MAC flooding",
    "DHCP spoofing",
    "ARP poisoning"
  ],
  correctAnswer: 2,
  explanation: `
In a Media Access Control (MAC) flooding attack, an attacker generates thousands of forged frames every minute with the intention of overwhelming the switch's MAC address table. Once this table is flooded, the switch can no longer make intelligent forwarding decisions and all traffic is flooded. This allows the attacker to view all data sent through the switch because all traffic will be sent out each port. Implementing port security can help mitigate MAC flooding attacks by limiting the number of MAC addresses that can be learned on each interface to a maximum of 128. A MAC flooding attack is also known as a Content Addressable Memory (CAM) table overflow attack.

[Additional verbatim explanation about other attacks omitted for brevity.]
`,
  reference: [
    {
      title: "Cisco: Layer 2 Security Features on Cisco Catalyst Layer 3 Fixed Configuration Switches Configuration Example: Background Information",
      link: "https://www.cisco.com/c/en/us/support/docs/security/ios-firewall/23602-confaccesslists.html"
    },
    {
      title: "Cisco: Implementation of Security: Layer 2 Security Design",
      link: "https://www.cisco.com/en/US/products/hw/switches/ps708/products_tech_note09186a00800b1500.shtml"
    }
  ]
},

{
  id: 406,
  category: "Security Fundamentals",
  questionType: "Single-select",
  question: `Which of the following commands should you issue in order to encrypt the password that is required to access privilege level 7 on a router? (Select the best answer.)`,
  options: [
    "enable password 7 cisco",
    "enable secret level 7 cisco",
    "enable password level 7 cisco",
    "enable secret 7 cisco"
  ],
  correctAnswer: 1,
  explanation: `
You should issue the enable secret level 7 cisco command to encrypt the password that is required to access privilege level 7. [...verbatim as before...]
`,
  reference: [
    {
      title: "Boson CCNA Curriculum 200-301, Module 8: Security Fundamentals",
      description: "Creating a Secure Password for Privileged EXEC Mode Access"
    },
    {
      title: "CCNA 200-301 Official Cert Guide, Volume 2, Chapter 5",
      description: "Securing Network Devices, Securing IOS Passwords"
    },
    {
      title: "Cisco: Configuring Security with Passwords, Privileges, and Logins: Cisco IOS CLI Modes",
      link: "https://www.cisco.com/c/en/us/td/docs/ios-xml/ios/sec_usr_cfg/configuration/xe-3s/sec-usr-cfg-xe-3s-secure.html"
    },
    {
      title: "Cisco: Configuring Security with Passwords, Privileges, and Logins: Cisco IOS Password Encryption Levels",
      link: "https://www.cisco.com/c/en/us/support/docs/security/ios-firewall/23602-confaccesslists.html"
    }
  ]
},

{
  id: 15,
  category: "IP Connectivity",
  questionType: "Matching",
  question: `
To complete this question, click Launch Simulator and follow the on-screen instructions.
`,
  matchingPairs: {
    terms: [
      { id: "t1", text: "Host Route" },
      { id: "t2", text: "Network Route" },
      { id: "t3", text: "Default Route" },
      { id: "t4", text: "Floating Static Route" }
    ],
    definitions: [
      { id: "a", text: "L 192.168.1.1/32 is directly connected" },
      { id: "b", text: "O 192.168.1.0/24 [110/2] via 10.1.1.13" },
      { id: "c", text: "S* 0.0.0.0/0 [1/0] via 10.1.2.3" },
      { id: "d", text: "S 192.168.1.0/24 [5/0] via 10.1.2.3" }
    ]
  },
  correctAnswer: {
    t1: "a", // Host Route -> L 192.168.1.1/32 is directly connected
    t2: "b", // Network Route -> O 192.168.1.0/24 [110/2] via 10.1.1.13
    t3: "c", // Default Route -> S* 0.0.0.0/0 [1/0] via 10.1.2.3
    t4: "d"  // Floating Static Route -> S 192.168.1.0/24 [5/0] via 10.1.2.3
  },
  explanation: `
Routes that are marked with an L in the output of the show ip route command are local host routes. Internet Protocol version 4 (IPv4) host routes have a /32 mask, and IP version 6 (IPv6) host routes have a /128 mask. However, not all IPv4 routes with a /32 mask are considered host routes. IPv4 addresses that are manually configured with a /32 mask are considered to be connected addresses and are marked with a C in the output of the show ip route command.

Routes that are marked with an O in the output of the show ip route command are Open Shortest Path First (OSPF) routes, which are considered network routes. OSPF, Enhanced Interior Gateway Routing Protocol (EIGRP), and Routing Information Protocol (RIP) routes are all considered network routes. EIGRP routes are marked with a D in the output of the show ip route command. RIP routes are marked with an R in the output of the show ip route command.

Routes that are marked with an S in the output of the show ip route command are static routes. Normal static routes have an administrative distance (AD) of 1; the AD is the first number inside the brackets. A static route with a modified AD is called a floating static route and is often used as a backup route in case the primary route goes down. For example, the S 192.168.1.0/24 [5/0] via 10.1.2.3 entry from the show ip route command indicates a floating static route with an AD of 5.

Routes that are marked with an * in the output of the show ip route command are default routes. A static default route can be configured by issuing the ip route 0.0.0.0 0.0.0.0 {next-hop-IP | interface} command. The S* 0.0.0.0/0 [1/0] via 10.1.2.3 entry from the show ip route command indicates a static default route.
`,
  reference: [
    {
      title: "Boson CCNA Curriculum 200-301, Module 6: IP Routing",
      description: "Understanding Router Path Selection"
    },
    {
      title: "Cisco: Local Host Routes Installed in the Routing Table on Cisco IOS and Cisco IOS-XR",
      link: "https://www.cisco.com/c/en/us/support/docs/ip/routing-information-protocol-rip/13787-3.html"
    },
    {
      title: "Cisco: Cisco IOS IP Routing: Protocol-Independent Command Reference: show ip route",
      link: "https://www.cisco.com/c/en/us/td/docs/ios-xml/ios/iproute_pi/command/iri-cr-book/iri-cr-s5.html#wp1024084"
    }
  ]
},

{
  id: 478,
  category: "Automation and Programmability",
  questionType: "Single-select",
  question: `In a controller-based network, which of the following typically contains end devices and Layer 2 switches? (Select the best answer.)`,
  options: [
    "the application plane",
    "the control plane",
    "the data plane",
    "the management plane"
  ],
  correctAnswer: 2,
  explanation: `
In a controller-based network, such as a Software-Defined Networking (SDN) network, the data plane typically contains end devices and Layer 2 switches. Layer 3 switches also often operate in the data plane. A centralized controller connects to the data plane by using a southbound Application Programming Interface (API), such as NETCONF, OpenFlow, OpFlex, or OnePK. Network tasks that are typically performed in the data plane include the encapsulation and decapsulation of packets, the adding or removing of trunk headers, the matching of Media Access Control (MAC) addresses to a MAC address table, the matching of Internet Protocol (IP) addresses to paths in a routing table, the encryption of data, Network Address Translation (NAT), and filtering by using either access control lists (ACLs) or port security.

In a controller-based network, the control plane is centralized. The control plane is responsible for network decision making in both a controller-based network and a traditional network. However, the control plane in a traditional network is typically distributed among many devices. The Open Shortest Path First (OSPF) routing protocol running on a series of routers on a traditional network is one example of a traditional control plane. OSPF makes routing decisions for packets that require routing among Layer 3 devices. In a controller-based network, the decision-making logic is either moved to a central controller or monitored by a central controller.

In a controller-based network, a centralized controller connects to the application plane by using a northbound API. The application plane is the component of a controller-based network in which applications that are written to allow interaction with the centralized controller reside. These applications are typically designed to improve network management efficiency through network automation. A controller communicates with applications in the application plane by using a northbound API such as Representational State Transfer (REST) or Java Open Services Gateway initiative (OSGi).

In both a controller-based network and a traditional network, the management plane consists of network management protocols, such as Telnet, Secure Shell (SSH), Simple Network Management Protocol (SNMP), and Syslog. All of these protocols enable an administrator to connect to and manage a network device.
`,
  reference: [
    {
      title: "Boson CCNA Curriculum 200-301, Module 9: Automation and Programming",
      description: "Data Plane"
    },
    {
      title: "CCNA 200-301 Official Cert Guide, Volume 2, Chapter 16",
      description: "Introduction to Controller-Based Networking, The Data, Control, and Management Planes"
    },
    {
      title: "CCNA 200-301 Official Cert Guide, Volume 2, Chapter 16",
      description: "Introduction to Controller-Based Networking, Controllers and Software-Defined Architecture"
    }
  ]
},

{
  id: 96,
  category: "IP Services",
  questionType: "Single-select",
  question: `
<p><img src="/images/q96.png" alt="HostA-DNS-defaultGW-WWW-server" style="max-width:100%;margin:12px 0;"></p>
<p>A web browser on HostA sends an HTTP request to WWW_server. This is the first time HostA has ever sent a request to WWW_server. HostA does not use a hosts file. With which of the following devices does HostA establish a TCP connection in this scenario? (Select the best answer.)</p>
`,
  options: [
    "only DNS_server and WWW_server",
    "DNS_server, Default_GW, and WWW_server",
    "only WWW_server",
    "only Default_GW and WWW_server"
  ],
  correctAnswer: 2,
  explanation: `
HostA establishes a Transmission Control Protocol (TCP) connection with only WWW_server in this scenario. If a host does not have the Internet Protocol (IP) address that corresponds to the fully qualified domain name (FQDN) of a web server cached and does not use a hosts file, it must first contact a Domain Name System (DNS) server to resolve the FQDN of the target web server into an IP address. The DNS server contains a hierarchical database of host name-to-IP address mappings.

Normal DNS requests and responses are sent by using User Datagram Protocol (UDP) and do not result in TCP connections with the DNS server. DNS can use TCP but typically generates TCP sessions for only zone transfers and query responses that exceed 512 bytes. This process is known as a recursive DNS search. Recursive DNS searches allow DNS servers to provide authoritative name resolution information to hosts.

Once the FQDN of the web server has been resolved into an IP address, the host will initiate the TCP three-way handshake to establish a TCP session with the web server. The host will send a zero-length SYN segment directed to the web server. The web server will respond with a zero-length SYN/ACK segment. To complete the handshake, the host will then respond with a zero-length ACK segment directed to the web server. Once the TCP session has been established, the host can finally send a Hypertext Transfer Protocol (HTTP) request initiated by the browser.

If the IP address is on the same subnet, the host will send its HTTP request directly to the web server at that IP address. If the IP address is on a different subnet, as in this scenario, the host will still send its HTTP request to the web server, but it will forward the IP packets to the host's default gateway instead of directly to the web server. Although the IP packets for the HTTP request are forwarded to the default gateway, this process is transparent to the TCP session over which the HTTP request is made. The default gateway does not modify the majority of the IP packet's header fields, such as the source and destination IP addresses, nor does it modify the payload of the IP packet, which includes the encapsulated TCP session. Instead, the gateway removes the Layer 2 header and trailer from the encapsulated IP packet and then adds a new Layer 2 header before forwarding the packet to the next hop on the route to the packet's final destination.
`,
  reference: [
    {
      title: "Boson CCNA Curriculum 200-301, Module 7: IP Services",
      description: "DNS"
    },
    {
      title: "Microsoft: DNS or other Services works on both TCP and UDP",
      link: "https://learn.microsoft.com/en-us/windows-server/networking/dns/dns-top"
    }
  ]
},

{
  id: 696,
  category: "Network Fundamentals",
  questionType: "Single-select",
  question: `You administer the network of a manufacturing plant in New York City. You want to install three 802.11b wireless access points (APs) in the administrative offices.

Which channels should you configure on the three APs? (Select the best answer.)
`,
  options: [
    "any channel, as long as each AP uses a different channel",
    "1, 6, and 11",
    "1, 2, and 3",
    "any channel, as long as all three APs use the same channel",
    "1, 7, and 13"
  ],
  correctAnswer: 1,
  explanation: `
You should configure one access point (AP) to use channel 1, one AP to use channel 6, and one AP to use channel 11. Although 802.11b can be configured to use 11 different channels in the United States and Canada, only three nonoverlapping channels can be used: 1, 6, and 11. Neighboring APs should use nonoverlapping channels so that the APs do not interfere with one another. Therefore, you should not use the same channel for all of the APs, nor should you use channels that overlap, such as channels 1, 2, and 3.

The following table displays the 802.11b channels that can be used in the United States and Canada, along with their respective frequency ranges:

<table>
  <tr>
    <th>Channel</th><th>Range (GHz)</th>
  </tr>
  <tr><td>1</td><td>2.401 - 2.423</td></tr>
  <tr><td>2</td><td>2.406 - 2.428</td></tr>
  <tr><td>3</td><td>2.411 - 2.433</td></tr>
  <tr><td>4</td><td>2.416 - 2.438</td></tr>
  <tr><td>5</td><td>2.421 - 2.443</td></tr>
  <tr><td>6</td><td>2.426 - 2.448</td></tr>
  <tr><td>7</td><td>2.431 - 2.453</td></tr>
  <tr><td>8</td><td>2.436 - 2.458</td></tr>
  <tr><td>9</td><td>2.441 - 2.463</td></tr>
  <tr><td>10</td><td>2.446 - 2.468</td></tr>
  <tr><td>11</td><td>2.451 - 2.473</td></tr>
</table>

You cannot use channels 1, 7, and 13 for the wireless network, because channel 13 cannot be used in the United States. Channels 1 through 13 can be used on 802.11b wireless networks in Europe and Japan.
`,
  reference: [
    {
      title: "Boson CCNA Curriculum 200-301, Module 3: Wireless Networking Fundamentals",
      description: "Wireless Bands and Channels"
    },
    {
      title: "CCNA 200-301 Official Cert Guide, Volume 1, Chapter 26",
      description: "Fundamentals of Wireless Networks, Wireless Bands and Channels"
    },
    {
      title: "Cisco: Deployment",
      link: "https://www.cisco.com/c/en/us/td/docs/solutions/Enterprise/Mobility/WLSE/3-6dg/wlse36dg/wireless.html"
    }
  ]
},

{
  id: 495,
  category: "Network Access",
  questionType: "Single-select",
  question: `Which of the following best describes a lightweight AP in local mode? (Select the best answer.)`,
  options: [
    "It enables a failsafe if the CAPWAP connection goes down.",
    "It acts as a dedicated connection between two networks.",
    "It is the default operating mode for a lightweight AP.",
    "It captures wireless traffic for analysis."
  ],
  correctAnswer: 2,
  explanation: `
Local mode is the default operating mode for a lightweight access point (AP). A lightweight AP provides an interface for wireless clients to connect to the wireless local area network (WLAN). However, unlike autonomous APs, a lightweight AP relies on a Cisco wireless LAN controller (WLC) for management and configuration.

A Cisco lightweight AP operating in local mode is capable of providing multiple basic service sets (BSSs) on a single channel. In this mode, the AP can connect to a WLC and can provide client connectivity. In addition, an AP operating in local mode scans all wireless channels as a means of monitoring wireless quality and security. The connection between a lightweight AP and a WLC is created by using two tunnels established by the Control and Provisioning of Wireless Access Points (CAPWAP) tunneling protocol. Information sent between lightweight APs and the WLC is encapsulated in Internet Protocol (IP) packets. This process enables a lightweight AP and WLC to manage connectivity to the same WLAN yet be separated by both physical and logical means.

A Cisco lightweight AP operating in sniffer mode, not local mode, captures wireless traffic for analysis. A lightweight AP provides an interface for wireless clients to connect to the WLAN. However, unlike autonomous APs, a lightweight AP relies on a Cisco WLC for management and configuration. Sniffer mode allows a lightweight AP to capture wireless traffic, similar to the way a wired network sniffer behaves. When traffic is captured, a lightweight AP that is operating in sniffer mode will send the traffic to an analyzer, which is typically software that is installed on a PC or other host.

A Cisco lightweight AP operating in FlexConnect mode, not local mode, enables a failsafe if the CAPWAP connection goes down. FlexConnect mode does not provide BSSs. When configured, FlexConnect mode enables a lightweight AP to switch traffic between a given Service Set Identifier (SSID) and a given virtual local area network (VLAN).

A Cisco lightweight AP operating in bridge mode, not local mode, acts as a dedicated connection between two networks. Lightweight APs operating in bridge mode can connect to other networks in either a point-to-point or point-to-multipoint fashion. When multiple APs are configured in bridge mode, the collection of lightweight APs can be used to form a mesh network.
`,
  reference: [
    {
      title: "CCNA 200-301 Official Cert Guide, Volume 1, Chapter 27",
      description: "Analyzing Cisco Wireless Architectures, Cisco AP Modes"
    }
  ]
},

{
  id: 440,
  category: "Security Fundamentals",
  questionType: "Multi-select",
  question: `Which of the following are most likely to be considered forms of authentication? (Select 2 choices.)`,
  options: [
    "allowing a user to access a specific file",
    "logging a verified user's file access",
    "verifying a user's password",
    "verifying a user's fingerprint pattern",
    "assigning a role to a verified user"
  ],
  correctAnswer: [2, 3],
  explanation: `
Verifying a user’s fingerprint pattern and verifying a user’s password are both likely to be considered forms of authentication. Authentication, Authorization, and Accounting (AAA) systems manage user activity. Authentication is the process of verifying a user’s identity. Authentication by itself does not grant access to a given resource. AAA systems are typically more sophisticated than simple password authentication systems, such as a local password database. Two common AAA systems are Remote Authentication Dial-In User Server (RADIUS) and Terminal Access Controller Access-Control System Plus (TACACS+).

RADIUS is a standard AAA protocol created by the Internet Engineering Task Force (IETF). Compared to TACACS+, RADIUS has several limitations. For example, RADIUS encrypts only the password in Access-Request packets; it does not encrypt the entire contents of the packet like TACACS+ does.

TACACS+ is a Cisco-proprietary protocol used during AAA operations. TACACS+ provides more granular and flexible control over user access privileges. For example, the AAA operations are separated by TACACS+, whereas RADIUS combines the authentication and authorization services into a single function. Because TACACS+ separates these functions, administrators have more control over access to configuration commands. In addition, TACACS+ encrypts the entire contents of packets, thus providing additional security.

The following list defines the three phases of the AAA process:

<ul>
<li>Authentication – the process of verifying a user’s identity</li>
<li>Authorization – the process of verifying the level of access configured for a user</li>
<li>Accounting – the process of recording the use of resources</li>
</ul>

Allowing a user to access a specific file is a form of authorization, not authentication. Similarly, assigning a role to a verified user is a form of authorization. Allowing access to a specific file can involve assigning specific user or group permissions directly to the file, matching a rule, such as an access control list (ACL) that associates a specific user with a file, or assigning a user to a specific role that has permission to access the file.

Logging a verified user's file access is a form of accounting, not authentication. Accounting is a feature of AAA systems that enables administrators to track resource usage across a network. If a security incident occurs, accounting can aid the effort to track the incident back to its source.
`,
  reference: [
    {
      title: "Boson CCNA Curriculum 200-301, Module 8: Security Fundamentals",
      description: "AAA"
    },
    {
      title: "Boson CCNA Curriculum 200-301, Module 8: Security Fundamentals",
      description: "Authentication Factors"
    },
    {
      title: "CCNA 200-301 Official Cert Guide, Volume 2, Chapter 4",
      description: "Security Architectures, Controlling and Monitoring User Access"
    }
  ]
},

{
  id: 62,
  category: "IP Connectivity",
  questionType: "Single-select",
  question: `
<p><img src="/images/q62.png" alt="OSPF network diagram" style="max-width:100%;margin:12px 0;"></p>
<p>You administer the OSPF network shown in the diagram above. The <b>auto-cost reference-bandwidth 1000</b> command has been issued on every router in the network.</p>

<p>What is the cost of the route from RouterA to RouterC? (Select the best answer.)</p>
`,
  options: [
    "2",
    "3",
    "12",
    "11",
    "20"
  ],
  correctAnswer: 1,
  explanation: `
<p>In this scenario, the cost of the route from RouterA to RouterC is 3. In an Open Shortest Path First (OSPF) network, a cost is associated with every link on the network. The OSPF routing process on each router calculates the optimal route to other routers in the network based on the sum of the link costs to those routers. The route with the lowest cost is considered the best. If there is more than one route with the same cost, then the OSPF routing process will use load balancing to distribute traffic evenly among the routes. The cost of each link and the optimal route from RouterA to RouterC are shown in the following exhibit:</p>

<p><img src="/images/q62_2.png" alt="OSPF route costs" style="max-width:100%;margin:12px 0;"></p>

<p>The cost of a link is based on the interface bandwidth and the reference bandwidth, as indicated by the following formula:</p>
<pre>cost = reference bandwidth / interface bandwidth</pre>

<p>By default, the reference bandwidth is 100 megabits per second (Mbps). If a bandwidth has not been configured on an interface, the OSPF process will use the default value for the interface type. For example, a 100-Mbps Fast Ethernet interface has a default interface bandwidth of 100. The minimum supported cost for an OSPF interface is 1, and any values that calculate to less than 1 are rounded up to 1. Therefore, any link with an interface bandwidth greater than or equal to 100 Mbps will result in a cost of 1 by default.</p>

<p>An OSPF process uses cost values to generate its shortest path first (SPF) tree and then to determine the optimal routes to all known networks. Because the minimum cost value is 1, the reference bandwidth should be a value greater than or equal to the bandwidth of the fastest routed link in the administrative domain.</p>

<p>In this scenario, the <b>auto-cost reference-bandwidth 1000</b> command has modified the reference bandwidth to 1000 Mbps. Thus a 100-Mbps Fast Ethernet interface has a cost of 10 and a 1-gigabit-per-second (Gbps) Gigabit Ethernet interface has a cost of 1.</p>

<p>When the reference bandwidth is less than the fastest routed link on the network, a situation can arise where the costs of two interfaces are the same even though their link speeds are different. If the reference bandwidth in this scenario were set to the default reference bandwidth of 100 Mbps, all of the interfaces would have a cost of 1. Because all links would then appear to have the same cost, the OSPF routing process would not be able to distinguish between the Fast Ethernet links and the Gigabit Ethernet links in the network. The OSPF process would then perform equal-cost load balancing to distribute packets evenly among the available paths. This distribution would cause some packets in this example to take suboptimal routes to their destinations.
You can issue the <b>auto-cost</b> command from router configuration mode to change the reference bandwidth for an OSPF routing process. The syntax for the auto-cost command is <b>auto-cost reference-bandwidth ref-bw</b>, where <i>ref-bw</i> is an integer between 1 and 4294967 and is expressed in Mbps. Alternatively, you can manually configure a cost at the interface level by issuing the <b>ip ospf cost</b> command.
`,
  reference: [
    {
      title: "Boson CCNA Curriculum 200-301, Module 6: IP Routing",
      description: "OSPF Route Processing"
    },
    {
      title: "Cisco: OSPF Design Guide: OSPF Cost",
      link: "https://www.cisco.com/c/en/us/support/docs/ip/open-shortest-path-first-ospf/7039-1.html"
    }
  ]
},

{
  id: 470,
  category: "Automation and Programmability",
  questionType: "Multi-select",
  question: `Which of the following configuration management tools are written in Ruby? (Select 2 choices.)`,
  options: [
    "Puppet",
    "Salt",
    "Chef",
    "Ansible"
  ],
  correctAnswer: [0,2],
  explanation: `
Puppet and Chef are configuration management tools that are written in Ruby. By contrast, Ansible and Salt are configuration management tools that are written in Python. Configuration management tools are used to automate the installation, configuration, and maintenance of multiple computer systems, including the software that runs on those systems. The capabilities of Puppet and Chef are aligned more closely with the needs of application developers, whereas the capabilities of Ansible and Salt are aligned more closely with the needs of system administrators.

Of the four major configuration management tools, Puppet is the most mature and the most widely used. Puppet operates on Linux distributions, UNIX-like systems, and Microsoft Windows. It accepts inbound requests from Puppet agents by using Hypertext Transfer Protocol Secure (HTTPS) on Transmission Control Protocol (TCP) port 8140. Puppet uses a client/server architecture; managed nodes that are running the Puppet Agent application can receive configurations from a master server that is running Puppet Server. Modules are written in Ruby Domain Specific Language (DSL) or in a Ruby-like Puppet language known as Puppet DSL.

Like Puppet, Chef operates on Linux distributions, UNIX-like systems, and Microsoft Windows. Chef can use a client/server architecture or a standalone client configuration. Chef communicates by using HTTPS on the traditional TCP port 443. Configuration information is contained within cookbooks that are written in Ruby DSL and are stored on a Chef Server. Managed nodes that are running the Chef Client can pull cookbooks from the server. Standalone clients that do not have access to a server can run chef-solo and pull cookbooks from a local directory or from a tar.gz archive on the Internet.

Like the other configuration management software packages, Ansible also operates on Linux distributions, UNIX-like systems, and Microsoft Windows. However, unlike the other configuration management software packages, Ansible does not use agent software on managed nodes. Ansible uses Secure Shell (SSH) to connect to remote nodes. By default, SSH operates on TCP port 22. Configurations are stored on the Ansible server in playbooks that are written in YAML. Managed nodes can download scripted modules from an Ansible server by using SSH.

Salt also operates on Linux distributions, UNIX-like systems, and Microsoft Windows. Salt can use a client/server architecture by installing Salt master software on the server and Salt minion software on managed nodes. Masters and minions communicate by using ZeroMQ. To communicate, Salt requires TCP ports 4505 and 4506. Salt can also be used without client agent software by using Salt Secure Shell (SSH). However, Salt SSH is much slower than ZeroMQ. Salt configuration information is stored primarily in state modules that are typically written in YAML Ain’t Markup Language (YAML); however, Python or Python Domain Specific Language (PyDSL) can also be used for complex configuration scripts.
`,
  reference: [
    {
      title: "Boson CCNA Curriculum 200-301, Module 9: Automation and Programming",
      description: "Configuration Management Mechanisms"
    },
    {
      title: "InfoWorld: Review: Puppet vs. Chef vs. Ansible vs. Salt",
      link: "https://www.infoworld.com/article/2841705/review-puppet-vs-chef-vs-ansible-vs-salt.html"
    }
  ]
},

{
  id: 411,
  category: "Security Fundamentals",
  questionType: "Matching",
  question: `
To complete this question, click Launch Simulator and follow the on-screen instructions.
`,
  matchingPairs: {
    terms: [
      { id: "t1", text: "something you know" },
      { id: "t2", text: "something you are" },
      { id: "t3", text: "something you know" },
      { id: "t4", text: "something you have" }
    ],
    definitions: [
      { id: "a", text: "your password" },
      { id: "b", text: "your fingerprint" },
      { id: "c", text: "your father's middle name" },
      { id: "d", text: "your credit card" }
    ]
  },
  correctAnswer: {
    t1: "a", // something you know -> your password
    t2: "b", // something you are -> your fingerprint
    t3: "c", // something you know -> your father's middle name
    t4: "d"  // something you have -> your credit card
  },
  explanation: `
Your fingerprints are an example of authentication by something you are. Your password and your father's middle name are examples of authentication by something you know. Your credit card is an example of authentication by something you have. There are three typical methods of authentication for gaining access to a secure environment: something you know, something you have, and something you are. A fourth possible method is authentication by someplace you are, which means that you can be granted access to a secure system by virtue of your workstation's location on a network, such as an Internet Protocol (IP) address or your physical location in the world.<br><br>

Authentication by one type of factor, such as something you know, is known as single-factor authentication. Authentication by more than one type of factor, such as something you know and something you are, is known as multifactor authentication. However, requiring more than one of any single factor, such as two knowledge factors, is not considered multifactor authentication.<br><br>

Your password or your father's middle name is an example of authentication by something you know. For example, a bank's website might choose to ask you to provide both a password and the answer to a security question such as your father's middle name. Although the bank's website prompts you for two forms of verification, both of those prompts are for information that you store in your memory. Authentication by something you know is also known as Type 1 authentication. Authentication by something you know is considered the weakest form of authentication because such authentication can often be easily guessed or broken by brute force.<br><br>

Your credit card is an example of authentication by something you have. Authentication by something you have is the process of verifying your identity by using a device or document that you carry with you, such as a fob, a driver's license, a smart card, or a mobile phone with an authenticator application. For example, a police officer who stops you can verify your identity by comparing an image on your driver's license to your physical appearance. Authentication by something you have is also known as Type 2 authentication. Authentication by something you have is considered a stronger form of authentication than authentication by something you know because it requires the user to carry some sort of authenticating electronic access control (EAC) token.<br><br>

Your fingerprints are an example of authentication by something you are. Authentication by something you are is the process of verifying your identity by using something that is unique about you and that cannot be easily changed, such as your iris, your retina, or your fingerprints. For example, your company could connect your workstation to a fingerprint scanner instead of requiring you to unlock your workstation with keystrokes and a password. Authentication by something you are is also known as Type 3 authentication. Authentication by something you are is considered the strongest form of authentication because of the unique biometrics of individuals.<br><br>
`,
  reference: [
    {
      title: "Boson CCNA Curriculum 200-301, Module 8: Security Fundamentals",
      description: "Authentication Factors"
    },
    {
      title: "CCNA 200-301 Official Cert Guide, Volume 2, Chapter 4",
      description: "Security Architectures, Password Alternatives"
    }
  ]
},

{
  id: 41,
  category: "IP Services",
  questionType: "Single-select",
  question: `Which of the following ports is used by TFTP? (Select the best answer.)`,
  options: [
    "UDP port 21",
    "UDP port 69",
    "TCP port 21",
    "UDP port 20",
    "TCP port 20",
    "TCP port 69"
  ],
  correctAnswer: 1,
  explanation: `
User Datagram Protocol (UDP) port 69 is used by Trivial File Transfer Protocol (TFTP). UDP is a Transport layer protocol that does not use sequence numbers or establish synchronized connections. Because of UDP's connectionless nature, transmitted datagrams can appear out of sequence or can be dropped without notice; thus it is the responsibility of the Application layer protocol to reorder packets or request the transmission of lost datagrams.<br><br>

TFTP is used to transfer files unreliably and without authentication over a network. Cisco devices can unreliably transfer IOS images by using TFTP. For example, administrators can use TFTP to transfer Cisco IOS images from a server to a device to perform firmware upgrades.<br><br>

TFTP does not use Transmission Control Protocol (TCP). TCP is a Transport layer protocol that uses sequencing and error-checking to ensure that transmitted data can be easily reordered if packets arrive out of sequence and can be retransmitted if any packets are lost. Because TCP handles data sequencing and the retransmission of lost data, the Application layer protocols that rely on TCP do not need to handle those tasks and can rely on receiving reliable, ordered data.<br><br>

File Transfer Protocol (FTP) uses TCP ports 20 and 21 to transfer files over a network. Cisco devices can reliably transfer IOS images by using FTP. Unlike TFTP, FTP requires the transmission of authentication credentials, even if anonymous FTP is in use; however, those credentials are transmitted in plain text.
`,
  reference: [
    {
      title: "Boson CCNA Curriculum 200-301, Module 7: IP Services",
      description: "TFTP"
    },
    {
      title: "IANA: Service Name and Transport Protocol Port Number Registry",
      link: "https://www.iana.org/assignments/service-names-port-numbers/service-names-port-numbers.txt"
    }
  ]
},

{
  id: 41,
  category: "IP Services",
  questionType: "Single-select",
  question: `Which of the following ports is used by TFTP? (Select the best answer.)`,
  options: [
    "UDP port 21",
    "UDP port 69",
    "TCP port 21",
    "UDP port 20",
    "TCP port 20",
    "TCP port 69"
  ],
  correctAnswer: 1,
  explanation: `
User Datagram Protocol (UDP) port 69 is used by Trivial File Transfer Protocol (TFTP). UDP is a Transport layer protocol that does not use sequence numbers or establish synchronized connections. Because of UDP's connectionless nature, transmitted datagrams can appear out of sequence or can be dropped without notice; thus it is the responsibility of the Application layer protocol to reorder packets or request the transmission of lost datagrams.

TFTP is used to transfer files unreliably and without authentication over a network. Cisco devices can unreliably transfer IOS images by using TFTP. For example, administrators can use TFTP to transfer Cisco IOS images from a server to a device to perform firmware upgrades.

TFTP does not use Transmission Control Protocol (TCP). TCP is a Transport layer protocol that uses sequencing and error-checking to ensure that transmitted data can be easily reordered if packets arrive out of sequence and can be retransmitted if any packets are lost. Because TCP handles data sequencing and the retransmission of lost data, the Application layer protocols that rely on TCP do not need to handle those tasks and can rely on receiving reliable, ordered data.

File Transfer Protocol (FTP) uses TCP ports 20 and 21 to transfer files over a network. Cisco devices can reliably transfer IOS images by using FTP. Unlike TFTP, FTP requires the transmission of authentication credentials, even if anonymous FTP is in use; however, those credentials are transmitted in plain text.
`,
  reference: [
    {
      title: "Boson CCNA Curriculum 200-301, Module 7: IP Services",
      description: "TFTP"
    },
    {
      title: "IANA: Service Name and Transport Protocol Port Number Registry",
      link: "https://www.iana.org/assignments/service-names-port-numbers/service-names-port-numbers.txt"
    }
  ]
},

{
  id: 454,
  category: "Security Fundamentals",
  questionType: "Single-select",
  question: `Which of the following is used by both WPA2 and WPA3 to provide encryption? (Select the best answer.)`,
  options: [
    "GCMP",
    "AES",
    "RC4",
    "TKIP",
    "CCMP"
  ],
  correctAnswer: 1,
  explanation: `
Advanced Encryption Standard (AES) is used by both Wi-Fi Protected Access 2 (WPA2) and WPA3 to provide encryption. Wireless security protocols use message integrity checks (MICs) to prevent data tampering. Encryption is used to protect confidentiality.

WPA2, which implements the 802.11i wireless standard, was developed to address the security vulnerabilities in the original WPA standard. One enhancement over WPA included in WPA2 is the encryption algorithm. AES is a stronger encryption algorithm than the RC4 algorithm used by earlier wireless standards. When AES is implemented, a 128-bit block cipher is used to encrypt data and a security key of 128, 192, or 256 bits can be used. This is a processor-intensive operation, and implementing WPA2 and AES often requires new hardware, such as new wireless access points (WAPs) and new client wireless network adapters.

In addition to AES, WPA2 also uses Counter Mode with Cipher Block Chaining Message Authentication Code Protocol (CCMP) to provide encryption. CCMP is an encryption mechanism that uses block ciphers. In WPA2, CCMP is used by AES during the encryption process. The WPA2 encryption process is thus sometimes known as AES-CCMP.

Galois/Counter Mode Protocol (GCMP) is used along with AES to provide MICs and encryption in the WPA3 protocol. The WPA3 protocol was introduced in 2018 as a future replacement for WPA2. GCMP is considered to be stronger and more efficient than CCMP. GCMP uses AES to provide encryption and Galois Message Authentication Code (GMAC) to provide MICs.

RC4 is a stream cipher encryption algorithm used in the Wired Equivalent Privacy (WEP) protocol. Unlike AES, which supports an encryption key length of 256 bits, RC4 supports an encryption key length of up to 128 bits. Consequently, RC4 is not as secure as AES. Furthermore, RC4 uses a stream cipher, which is a less secure encryption method. RC4 is not used with WPA2.

Temporal Key Integrity Protocol (TKIP) is used to provide MICs and encryption in the WPA protocol. WPA is the successor to WEP and the predecessor of WPA2. The WPA TKIP implementation provides improvements over WEP but uses RC4 as the encryption algorithm. TKIP supports an encryption key of up to 128 bits, whereas AES supports an encryption key of 256 bits. Consequently, TKIP is not specified as the encryption method in the 802.11i standard.
`,
  reference: [
    {
      title: "Boson CCNA Curriculum 200-301, Module 8: Security Fundamentals",
      description: "WPA2"
    },
    {
      title: "Boson CCNA Curriculum 200-301, Module 8: Security Fundamentals",
      description: "WPA3"
    },
    {
      title: "CCNA 200-301 Official Cert Guide, Volume 1, Chapter 28",
      description: "Securing Wireless Networks, WPA, WPA2, and WPA3"
    }
  ]
},

{
  id: 45,
  category: "IP Services",
  questionType: "Single-select",
  question: `You want to install an IOS image on a router so that it will support SSH.

Which of the following should you install? (Select the best answer.)`,
  options: [
    "an image with the Advanced IP Services package",
    "an image with the Advanced Enterprise Services package",
    "a WAN image",
    "a K9 image",
    "an NPE image"
  ],
  correctAnswer: 3,
  explanation: `
You should consider installing a K9 image. K9 images provide the cryptographic functionality required to enable Secure Shell (SSH) and Internet Protocol Security (IPSec).

Wide area network (WAN) images do not necessarily support SSH; K9 WAN images support SSH, but non-K9 and NPE images do not. WAN images include WAN features such as Ethernet over Multiprotocol Label Switching (EoMPLS), Virtual Private LAN Service (VPLS), and Hierarchical Quality of Service (H-QoS).

You should not install an NPE image. NPE images are exported to countries that have import restrictions on encryption technologies and, therefore, do not support SSH and IPSec.

Images with the IP Base, IP Services, Advanced IP Services, and Advanced Enterprise Services packages do not necessarily support SSH; K9 versions of these packages support SSH, but non-K9 and NPE images do not. The IP Base package includes basic routing protocol functionality. The IP Services package adds full routing protocol functionality, including support for Open Shortest Path First (OSPF). The Advanced IP Services package adds advanced IP version 4 (IPv4) and IP version 6 (IPv6) features, Layer 3 virtual private networks (VPNs), and Multiprotocol Label Switching (MPLS). The Advanced Enterprise Services package adds AppleTalk and ATM support.
`,
  reference: [
    {
      title: "Boson CCNA Curriculum 200-301, Module 7: IP Services",
      description: "SSH Configuration"
    },
    {
      title: "Cisco: Secure Shell Version 2 Support: Prerequisites for Secure Shell Version 2 Support",
      link: "https://www.cisco.com/c/en/us/td/docs/ios-xml/ios/sec_usr_cfg/configuration/xe-3s/sec-usr-cfg-xe-3s-secure.html"
    }
  ]
},

{
  id: 25,
  category: "IP Connectivity",
  questionType: "Single-select",
  question: `If the OSPF router ID of a router is not manually configured, in what order is the router ID determined? (Select the best answer.)`,
  options: [
    "first by the OSPF priority value, then by the lowest IP address among physical interfaces, then by the lowest IP address among loopback interfaces",
    "first by the OSPF priority value, then by the highest IP address among loopback interfaces, then by the highest IP address among physical interfaces",
    "first by the lowest IP address among physical interfaces, then by the lowest IP address among loopback interfaces",
    "first by the highest IP address among physical interfaces, then by the highest IP address among loopback interfaces",
    "first by the lowest IP address among loopback interfaces, then by the lowest IP address among physical interfaces",
    "first by the highest IP address among loopback interfaces, then by the highest IP address among physical interfaces"
  ],
  correctAnswer: 5,
  explanation: `
If the Open Shortest Path First (OSPF) router ID of a router is not manually configured, the router ID is determined first by the highest Internet Protocol (IP) address among loopback interfaces, then by the highest IP address among physical interfaces if no loopback interfaces have been configured. To manually configure a router ID for an OSPF router, you should issue the <strong>router-id value</strong> command in router configuration mode, where <strong>value</strong> is a 32-bit value in dotted decimal notation. If the router ID is not manually configured, the router ID will be the highest loopback IP address configured on a router. If a loopback IP address is not configured, the router ID will be the highest IP address among configured interfaces on the router. Because loopback interfaces are logical, not physical, a loopback interface can never fail. For this reason, configuring a loopback interface is recommended for OSPF operation, because loopback interfaces are more reliable than physical interfaces.

The highest IP address among physical interfaces will only be used for the router ID if the router ID is not manually configured and if a loopback address is not configured. The router ID is not determined by the lowest IP address among interfaces.

The OSPF priority value is <strong>not used</strong> for determining the router ID. The priority value is used for electing the designated router (DR) and backup designated router (BDR) for an OSPF multiaccess network. The DR is typically the router with the highest OSPF priority. The DR and BDR generate link-state advertisements (LSAs) that contain OSPF routing information. The router with the highest priority becomes the DR, and the router with the second highest priority becomes the BDR. By default, the OSPF priority is 1. To change the OSPF priority, issue the <strong>ip ospf priority value</strong> command, where <strong>value</strong> is a number from 0 through 255; a router with a priority of 0 will never be elected to be the DR or BDR. If priorities are equal between two or more routers, the router with the highest router ID will be elected to become the DR.
`,
  reference: [
    {
      title: "Boson CCNA Curriculum 200-301, Module 6: IP Routing",
      description: "Understanding OSPF Router IDs"
    },
    {
      title: "Cisco: OSPF Design Guide",
      link: "https://www.cisco.com/c/en/us/support/docs/ip/open-shortest-path-first-ospf/7039-1.html"
    },
    {
      title: "Cisco: What Does the show ip ospf neighbor Command Reveal?",
      link: "https://www.cisco.com/c/en/us/support/docs/ip/open-shortest-path-first-ospf/13684-19.html"
    }
  ]
},

{
  id: 29,
  category: "IP Connectivity",
  questionType: "Matching",
  question: `
To complete this question, click Launch Simulator and follow the on-screen instructions.
`,
  matchingPairs: {
    terms: [
      { id: "t1", text: "0007.B400.0102" },
      { id: "t2", text: "0000.0C07.AC0B" },
      { id: "t3", text: "0000.5E00.0101" }
    ],
    definitions: [
      { id: "a", text: "GLBP" },
      { id: "b", text: "HSRP" },
      { id: "c", text: "VRRP" }
    ]
  },
  correctAnswer: {
    t1: "a", // 0007.B400.0102 -> GLBP
    t2: "b", // 0000.0C07.AC0B -> HSRP
    t3: "c"  // 0000.5E00.0101 -> VRRP
  },
  explanation: `
Hot Standby Router Protocol (HSRP) is a Cisco-proprietary protocol that enables multiple routers to function as a single gateway for the network. HSRP configures two or more routers to share a virtual Internet Protocol (IP) address and a virtual MAC address so that the group of routers appears as a single device to other hosts on the network. The HSRP virtual MAC address takes the form 0000.0C07.ACxx, where xx is the group number in hexadecimal format. Therefore, an HSRP router could have a virtual MAC address from 0000.0C07.AC00 through 0000.0C07.ACFF.

Virtual Router Redundancy Protocol (VRRP) is an Internet Engineering Task Force (IETF)-standard protocol that is supported by both Cisco and non-Cisco devices. Routers are assigned to a VRRP group, and the group functions as a single gateway for clients. A VRRP group has one master router, which is the router with the highest priority value. All other routers in the VRRP group are backup routers. The virtual MAC address for VRRP groups takes the form 0000.5E00.01xx, where xx is a hexadecimal value identifying the VRRP group number. For example, VRRP Group 1 would be identified by the virtual MAC address 0000.5E00.0101.

Gateway Load Balancing Protocol (GLBP) is a router redundancy protocol that also provides load balancing. GLBP enables you to configure multiple routers as a GLBP group; the routers in the group receive traffic sent to a virtual IP address that is configured for the group. The GLBP active virtual gateway (AVG) assigns a virtual MAC address to a maximum of four primary active virtual forwarders (AVFs); all other routers in the group are considered secondary AVFs and are placed in the listen state. GLBP virtual MAC addresses typically use the 0007.B400.xxyy format, where xx represents the GLBP group number and yy represents the AVF number.
`,
  reference: [
    {
      title: "Boson CCNA Curriculum 200-301, Module 6: IP Routing",
      description: "Understanding Virtual MAC Addresses"
    },
    {
      title: "Cisco: GLBP - Gateway Load Balancing Protocol",
      link: "https://www.cisco.com/c/en/us/td/docs/ios-xml/ios/ipapp/command/iap-cr-book/iap-g1.html"
    },
    {
      title: "Cisco: Hot Standby Router Protocol Features and Functionality: HSRP Operation",
      link: "https://www.cisco.com/c/en/us/support/docs/ip/hot-standby-router-protocol-hsrp/9234-hsrp.html"
    },
    {
      title: "Cisco: Configuring VRRP",
      link: "https://www.cisco.com/c/en/us/support/docs/ip/routing-information-protocol-rip/9315-26.html"
    }
  ]
},
];
