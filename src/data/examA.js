// Exam A Questions - CCNA 200-301

export const examAQuestions = [
  
  {
  id: 464,
  category:  "Automation and Programmability",
  questionType:  "Single-select",
  question: "Which of the following Cisco management solutions supports Cisco SDA?  (Select the best answer.)",
  options: [
    "Cisco PI",
    "Cisco IOS 15",
    "Cisco Network Assistant",
    "Cisco DNA Center"
  ],
  correctAnswer: 3, // Index 3 = "Cisco DNA Center"
  explanation: `<p>Of the available choices, Cisco Digital Network Architecture (DNA) Center is the Cisco management solution that supports Cisco Software-Defined Access (SDA). Cisco SDA is a Cisco-developed means of building local area networks (LANs) by using policies and automation. Cisco DNA Center, which abstracts the complexity of network configuration by implementing a centralized controller and graphical user interface (GUI), also supports many of the same traditional campus device management features that are supported by other Cisco management solutions. Administrators typically interact with Cisco DNA by using a browser-based GUI. Cisco DNA Center uses the Representational State Transfer (REST) API to natively communicate with Cisco devices. To communicate with third-party devices, Cisco DNA Center relies on software development kits (SDKs).</p>

<p>Cisco IOS 15 is not built specifically to support the Cisco SDA. Cisco IOS is a network device operating system (OS) that is used to directly configure, manage, and troubleshoot a single device. Administrators typically interact with Cisco IOS by using a command-line interface (CLI). Access to the CLI can be gained by connecting to a device's console port, by connecting to a Telnet session, or by connecting to a Secure Shell (SSH) session, depending on how the device is configured.</p>

<p>Cisco Network Assistant is not built specifically to support the Cisco SDA. Cisco Network Assistant is a free Java-based desktop application that enables a LAN administrator to perform network operations, diagnose problems, and interact with network devices by using a GUI.  A typical Cisco Network Assistant installation supports the management of up to 80 devices. Cisco Network Assistant predates Cisco SDA and is therefore not specifically built to support Cisco SDA.</p>

<p>Cisco Prime Infrastructure (PI) is not built specifically to support Cisco SDA. Cisco PI is a traditional enterprise Cisco management platform that relies on a browser-based GUI to enable administrators to perform operations on the network, diagnose problems with the network, and interact with devices on the network.</p>`,
  reference: [
    {
      title: "Boson CCNA Curriculum 200-301",
      description: "Module 9: Automation and Programming, Cisco DNA Center"
    },
    {
      title: "CCNA 200-301 Official Cert Guide",
      description: "Volume 2, Chapter 17: Cisco Software-Defined Access"
    }
  ]
},

{
  id: 690,
  category:  "Network Fundamentals",
  questionType: "Single-select",
  question: "Which of the following is another name for a hypervisor?  (Select the best answer.)",
  options: [
    "a PaaS",
    "an IaaS",
    "a VMM",
    "a VM"
  ],
  correctAnswer: 2, // Index 2 = "a VMM"
  explanation:  `<p>A virtual machine monitor (VMM) is another name for a hypervisor. A hypervisor is software that is capable of virtualizing the physical components of computer hardware.  Virtualization enables the creation of multiple VMs that can be configured and run in separate instances on the same hardware.  In this way, virtualization is capable of reducing an organization's expenses on hardware purchases. A potential security risk associated with hypervisors is access to the hypervisor itself. Individuals or services with access to the hypervisor are potentially capable of compromising all of the VMs running on that hypervisor.</p>

<p>There are two types of hypervisors.  A Type 1 hypervisor is a hypervisor that is installed on a bare metal server, meaning that the hypervisor is also its own operating system (OS). Because of their proximity to the physical hardware, Type 1 hypervisors typically perform better than Type 2 hypervisors. A Type 2 hypervisor cannot be installed on a bare metal server. Instead, Type 2 hypervisors are applications that are installed on host OSs, such as Microsoft Windows, macOS, or Linux.  These applications, which are also called hosted hypervisors, use calls to the host OS to translate between guest OSs in VMs and the server hardware.  Because they are installed similarly to other applications on the host OS, Type 2 hypervisors are typically easier to deploy and maintain than Type 1 hypervisors.</p>

<p>A virtual machine (VM) is not another name for a hypervisor. A VM is a virtual instance of a device that runs on a hypervisor. In other words a VM is a virtualized computing environment that relies on a hypervisor to communicate with the physical hardware on which it is installed.</p>

<p>Neither Infrastructure as a Service (IaaS) nor Platform as a Service (PaaS) is another name for a hypervisor. Cloud storage, IaaS, Software as a Service (SaaS), and PaaS are all terms used to describe cloud computing, which is a general term for products or services that are provided by a third party over a network. IaaS enables an organization to use the hardware resources of a third party, such as processing, networking, and file system resources, to house and configure virtual hosts. PaaS differs from IaaS because the licensee is using the third party's development tools or Application Programming Interface (API) to develop and deploy specific cloud-based applications or services instead of only using the third party's infrastructure to build and deploy cloud-based server or host environments. SaaS providers use an Internet-enabled licensing function, a streaming service, or a web application to provide end users with software that they might otherwise install and activate locally. Cloud storage is a term used to describe the use of a third party's virtual file system as a document or file repository.</p>`,
  reference: [
    {
      title: "Boson CCNA Curriculum 200-301",
      description: "Module 4: Virtualization Fundamentals, The Hypervisor"
    },
    {
      title: "CCNA 200-301 Official Cert Guide",
      description: "Volume 2, Chapter 15: Cloud Architecture, Server Virtualization"
    },
    {
      title: "IBM",
      description: "Virtual Machines"
    }
  ]
},

{
  id: 511,
  category:  "Network Fundamentals",
  questionType: "Single-select",
  question: `<p>You are connecting two Catalyst 6500 switches with fiber-optic cable. When you boot SwitchA, you receive a SYS-3-TRANSCEIVER_NOTAPPROVED error.</p>

<p>Which of the following is most likely the cause of the problem?  (Select the best answer.)</p>`,
  options: [
    "There is a physical problem with the fiber cable.",
    "You have installed the SFP module upside down.",
    "You have connected a cable to an incorrect port.",
    "You have installed a third-party SFP module."
  ],
  correctAnswer: 3, // Index 3 = "You have installed a third-party SFP module."
  explanation: `<p>You have most likely installed a third-party Small Form-Factor Pluggable (SFP) transceiver module in SwitchA if you receive a SYS-3-TRANSCEIVER_NOTAPPROVED error when you boot SwitchA. An SFP module is a hot-pluggable device that enables a switch, router, or other device to accept connections from Fibre Channel (FC) or Gigabit Ethernet cables.  Cisco devices do not support the use of third-party SFP modules.</p>

<p>An SFP module that is installed in a Cisco device stores identifying information, such as the module serial number, vendor name, and security code. When a switch detects the insertion of an SFP module, the switch software attempts to read the identifying information stored on the SFP module. If the information is not valid or not present, the switch software will report the SYS-3-TRANSCEIVER_NOTAPPROVED error.</p>

<p>The switch would not report a SYS-3-TRANSCEIVER_NOTAPPROVED error if you had connected a cable to an incorrect port. If you connected a cable to the wrong SFP module port, you would most likely notice that the ports on the switches are up, but the line protocol is down.</p>

<p>The switch would not report a SYS-3-TRANSCEIVER_NOTAPPROVED error if there were a physical problem with the fiber cable. If the fiber cable were broken, you would notice that the port status light-emitting diodes (LEDs) on the SFP modules are not lit.</p>

<p>The switch would not report a SYS-3-TRANSCEIVER_NOTAPPROVED error if you had installed the SFP module upside down. Instead, the switch would not recognize the SFP module, and the output from show commands would contain no information about the module.</p>`,
  reference: [
    {
      title:  "Cisco",
      description: "Catalyst 6500 Series Switch System Message Guide"
    }
  ]
},

{
  id: 412,
  category:  "Security Fundamentals",
  questionType: "Single-select",
  question: "Which of the following combinations represents a single-factor authentication method?  (Select the best answer.)",
  options: [
    "a smart card, a password, and a PIN",
    "a fingerprint, a retina scan, and a password",
    "a password and a PIN",
    "a password, a fingerprint, and a smart card"
  ],
  correctAnswer: 2, // Index 2 = "a password and a PIN"
  explanation: `<p>Of the available options, the combination of a password and a personal identification number (PIN) represents a single-factor authentication method.  A single-factor authentication method refers to the use of only one of the three common methods to verify a user's identity. The three authentication factors are something you know, something you have, and something you are. A password and a PIN are knowledge factor access control methods, which are pieces of information that you know.  Because a password and a PIN are both something you know, when the two are used in combination with each other they represent a single-factor authentication method.</p>

<p>Two-factor, or dual-factor, authentication refers to the use of two different factors to authenticate a user. For example, a password and a code that is automatically generated at the time of authentication by a device or token is two-factor authentication because it requires both knowledge of the password and possession of the device.</p>

<p>The combination of a fingerprint, a retina scan, and a password is also an example of a two-factor authentication method. The fingerprint and retina scanners are both biometric, which are inherent factor access control methods, and the password is something the user knows. An inherent factor is an attribute that is part of the user, such as fingerprints, retinal patterns, and voice patterns. Biometric scanners are used to obtain a scan of a user's physical attributes and are considered the most effective method of securing physical access to network infrastructure. An authentication system compares the scan to a previously stored scan; if the scans match, the user will be authenticated.</p>

<p>The combination of a smart card, a password, and a PIN is also a two-factor authentication method. A smart card is a physical item a user possesses, which is an ownership factor access control method, and a password and a PIN are both something the user knows.  A smart card contains a memory chip that is encoded with a unique digital identifier.  The digital code stored on a smart card is read by a smart card reader and compared to the list of authorized users.  If the digital signature matches a user on the list, the user will be authenticated.</p>

<p>Multifactor authentication refers to the use of two or three factors to authenticate a user. Therefore, dual-factor authentication is also sometimes known as multifactor authentication.</p>`,
  reference: [
    {
      title: "Boson CCNA Curriculum 200-301",
      description: "Module 8: Security Fundamentals, Authentication Factors"
    },
    {
      title: "CCNA 200-301 Official Cert Guide",
      description: "Volume 2, Chapter 4: Security Architectures, Password Alternatives"
    }
  ]
},

{
  id: 71,
  category: "IP Connectivity",
  questionType:  "Single-select",
  question: "Which of the following components are used to calculate the EIGRP composite metric by default?  (Select the best answer.)",
  options: [
    "bandwidth and delay",
    "bandwidth and cost",
    "delay and load",
    "cost and hop count",
    "bandwidth and reliability",
    "load and reliability",
    "MTU and hop count"
  ],
  correctAnswer: 0, // Index 0 = "bandwidth and delay"
  explanation: `<p>By default, Enhanced Interior Gateway Routing Protocol (EIGRP) uses bandwidth and delay to calculate the composite metric, which is used to determine the best path to a destination network.  Bandwidth refers to the data throughput of a link. Delay refers to the length of time required to send a packet to a destination.</p>

<p>EIGRP can also use load and reliability as components, but these components are not used by default. Load refers to the amount of data activity over a link. Reliability refers to the bit-error rate of a link.</p>

<p>The maximum transmission unit (MTU) is not used to calculate the EIGRP metric. MTU refers to the maximum length of frames that can be accepted by devices along the data route. </p>

<p>Open Shortest Path First (OSPF) and Intermediate System-to-Intermediate System (IS-IS) use cost to calculate the best path to a destination network. By default, OSPF and IS-IS calculate the cost based on bandwidth. However, cost can be configured by using any value that an administrator desires, such as the monetary cost of using a link.</p>

<p>Routing Information Protocol version 1 (RIPv1) and RIPv2 use hop count to calculate the best path to a destination network. Hop count refers to the number of routers a packet will traverse from source to destination. However, RIP has a hop-count limitation of 15 hops; any route more than 15 hops away is considered to be unreachable. With a defined maximum metric, a routing protocol can mitigate routing loops caused by invalid routing updates.</p>`,
  reference: [
    {
      title: "Cisco",
      description: "Setting a Preferred Route by Influencing EIGRP Metrics"
    }
  ]
},

{
  id: 405,
  category: "Security Fundamentals",
  questionType: "Single-select",
  question: `<p>You issue the following commands on a Cisco router named RouterA:</p>

<pre>enable password !b0s0nu$3r!
enable secret b0$0n4dm!n
line console 0
password b0$0n4dm1n
line vty 0 15
login
password b0s0nu$3r
service password-encryption</pre>

<p>Another user has been asked to examine the running configuration on RouterA but not make any configuration changes. The user connects to RouterA by using Telnet.</p>

<p>Which of the following will the user require in order to perform this task?  (Select the best answer.)</p>`,
  options: [
    "the enable secret password and the VTY line password",
    "the VTY line password alone",
    "the console password alone",
    "the console password and the VTY line password",
    "the enable secret password and the console password",
    "the enable password and the VTY line password",
    "the enable password and the console password"
  ],
  correctAnswer:  0, // Index 0 = "the enable secret password and the VTY line password"
  explanation:  `<p>The user will require the enable secret password and the virtual terminal (VTY) line password to examine the running configuration on RouterA in this scenario. In this scenario, the user connects to RouterA by using Telnet. You can configure Telnet login information on a Cisco device by issuing the line vty first last command to place the device in VTY line configuration mode. Next, you can issue the password password command to configure a Telnet password and the login command to enable password checks if the command has been disabled on the router. The login command is typically configured by default.  Issuing the Telnet password when you are connecting to a device places the device into user EXEC mode, where it is not typically possible to display the running configuration.</p>

<p>In Cisco IOS 15, the enable secret command stores an encrypted password in the device's configuration file by using a Secure Hash Algorithm (SHA) 256-bit hash. This command configures a password that is required in order to place the device into enable mode, which is also known as privileged EXEC mode. The device must, at a minimum, be placed into enable mode for the user to be able to display the running configuration. </p>

<p>The user will need the enable secret password, not the enable password, to access privileged EXEC mode in this scenario.  The enable password password command configures a clear-text enable password on a Cisco device. If both the enable password command and the enable secret command are in the running configuration of a Cisco device, the device will ignore the password associated with the enable password command. Therefore, issuing the password that is configured by the enable password command in this scenario will not provide the user with access to privileged EXEC mode.</p>

<p>The user will not need the console password in this scenario. The line console 0 command followed by the password command configures a password for accessing the router by using the console. Typically, the console is accessed by physically connecting a console cable between the router and a device that is running terminal software. Issuing the password for the console places the device into user EXEC mode.</p>`,
  reference: [
    {
      title: "Boson CCNA Curriculum 200-301",
      description: "Module 8: Security Fundamentals, Passwords"
    },
    {
      title: "CCNA 200-301 Official Cert Guide",
      description: "Volume 2, Chapter 5: Securing Network Devices, Securing IOS Passwords"
    }
  ]
},

{
  id: 625,
  category:  "Network Fundamentals",
  questionType: "Single-select",
  question: `<p>You issue the show running-config command on RouterA and receive the following partial output:</p>

<pre>interface FastEthernet0/0
ip address 192.168.18.33 255.255.255.240</pre>

<p>HostA is on the same physical network as the FastEthernet 0/0 interface of RouterA.</p>

<p>Which IP address should you configure on HostA to ensure that the host can communicate with the rest of the network? (Select the best answer.)</p>`,
  options: [
    "192.168.18.32/28",
    "192.168.18.46/28",
    "192.168.18.16/28",
    "192.168.18.48/28"
  ],
  correctAnswer:  1, // Index 1 = "192.168.18.46/28"
  explanation:  `<p>Of the choices available, you should use the 192.168.18.46/28 Internet Protocol (IP) address on HostA. You should configure an IP address on HostA that is in the same network as RouterA's FastEthernet 0/0 interface so that HostA can communicate with the router. Based on the output from the <strong>show running-config</strong> command on RouterA, the router is configured with an IP address of 192.168.18.33 255.255.255.240, or 192.168.18.33/28.</p>

<p>The /28 in the 192.168.18.33/28 address indicates that 28 bits belong to the network portion of a 32-bit IP address.  The remaining bits belong to the host portion of the IP address.  To determine how many addresses are defined by a subnet mask, use the formula 2<sup>n</sup>, where <em>n</em> is the number of bits in the host portion of the address. A /28 subnet mask uses 4 bits for host addresses, so 2<sup>4</sup> equals 16 addresses for the subnet. Networks that are subnetted by using /28 masks are separated into groups of 16 addresses each.  For example, the 192.168.18.0 network can be divided into the following subnets: </p>

<p>192.168.18.0/28<br>
192.168.18.16/28<br>
192.168.18.32/28<br>
192.168.18.48/28<br>
192.168.18.64/28<br>
192.168.18.80/28<br>
192.168.18.96/28<br>
192.168.18.112/28<br>
192.168.18.128/28<br>
192.168.18.144/28<br>
192.168.18.160/28<br>
192.168.18.176/28<br>
192.168.18.192/28<br>
192.168.18.208/28<br>
192.168.18.224/28<br>
192.168.18.240/28</p>

<p>These addresses are the subnet addresses for each subnet defined by the subnet mask. Therefore, the 192.168.18.32/28 address is a subnet address.  The last address in this subnet, 192.168.18.47/28, is the broadcast address, and the 14 addresses from 192.168.18.33/28 through 192.168.18.46/28 are host addresses.</p>

<p>Therefore, given that RouterA's FastEthernet 0/0 interface is configured with an IP address of 192.168.18.33, you can configure HostA with an IP address from 192.168.18.34 through 192.168.18.46. Thus, of the choices provided, you should configure HostA with an IP address of 192.168.18.46, which falls within this range.  Using this address, HostA will be configured with an IP address in the same subnet as RouterA's FastEthernet 0/0 interface. </p>

<p>You should not configure the host to use the 192.168.18.16/28, 192.168.18.32/28, or 192.168.18.48/28 address.  These IP addresses are subnet addresses and cannot be assigned to a host.</p>`,
  reference: [
    {
      title: "Boson CCNA Curriculum 200-301",
      description: "Module 2:  Network Addressing and Transport, Subnetting"
    },
    {
      title: "CCNA 200-301 Official Cert Guide",
      description:  "Volume 1, Chapter 14: Analyzing Existing Subnets, Defining a Subnet"
    },
    {
      title: "Cisco",
      description: "IP Addressing and Subnetting for New Users"
    }
  ]
},

{
  id: 28 ,  // Question ID number
  category: "IP Connectivity",  // Category name
  questionType: "Single-select",
  question: `Which of the following is a valid HSRP version 2 virtual MAC address? (Select the best
answer.)
`,  // Question text (use `` for multi-line, add <p> tags if needed)
  options: [
    "0000.5E00.0101",  // Option A (index 0)
    "0000.0C07.ACOB",  // Option B (index 1)
    "0005.73A0.0FFF",  // Option C (index 2)
    "0000.0C9F.F00A",  // Option D (index 3)
    "0007.B400.0102"  // Option E (index 4) - add more options as needed
  ],
  correctAnswer:3 ,  // Index of correct answer (0, 1, 2, or 3)
  explanation: `<p>Of the available choices, only 0000.0C9F.F0OA is a valid Hot Standby Router Protocol (HSRP)
version 2 virtual Media Access Control (MAC) address. HSRP is a Cisco-proprietary protocol
that enables multiple routers to function as a single gateway for the network. HSRP configures
two or more routers to share a virtual Internet Protocol (IP) address and a virtual MAC address
so that the group of routers appears as a single device to other hosts on the network.</p>

<p> Based on priority value, HSRP elects a single active router and a standby router. The active
router is the router with the highest priority; it forwards packets, responds to Address
Resolution Protocol (ARP) requests with a virtual MAC address, and can be the only router that
is explicitly configured with the virtual IP address. The standby router is the router with the
second-highest priority. If multiple HSRP routers have the same priority, the router with the
highest IP address is elected as the active router. The router with the second-highest IP
address is elected as the standby router, which will assume the role of the active router if the
active router fails. To participate in the active and standby router election process, each HSRP
router must be a member of the same group.</p>

<p>There are two versions of HSRP for IP version 4 (IPv4) networks: HSRP version 1 and HSRP
version 2. An HSRP version 1 group is identified by a group number from 0 through 255. An
HSRP version 2 group is identified by a group number from 0 through 4095. The default HSRP
group value for both versions is 0.</p>

<p>To differentiate the virtual MAC addresses of the various groups, HSRP version 1 uses a special
format based on the well-known virtual MAC address 0000.0C07.AC.xx, where xx is the group
number in hexadecimal format. HSRP version 2, on the other hand, uses a virtual MAC address
of 0000.0C9F.Fxxx, where xxx is the group number in hexadecimal format. In this scenario,
the virtual MAC address for the HSRP group is 0000.0C9F.F0OA; the group number is identified
by the final three digits, 00A, in the virtual MAC address. Thus, because 00A is the
hexadecimal equivalent of 10 in decimal notation, the virtual MAC address 0000.0C9F.F00A
indicates that the HSRP group number for this scenario is 10.</p>

<p>The virtual MAC address 0000.5E00.0101 is not an HSRP version 2 virtual MAC address. This
MAC address is a Virtual Router Redundancy Protocol (VRRP) MAC address. VRRP is an supported by both Cisco and non-Cisco devices. However, if only Cisco devices are used in the
topology and a choice between HSRP and VRRP is available, Cisco recommends using HSRP. A
VRRP virtual MAC address typically uses the 0000.5E00.01xx format, where xx is the VRRP
group number.</p>

<p>The virtual MAC address 0007.B400.0102 is not an HSRP version 2 virtual MAC address. This
MAC address is a Gateway Load Balancing Protocol (GLBP) virtual MAC address. The GLBP
active virtual gateway (AVG) assigns a virtual MAC address to a maximum of four primary
active virtual forwarders (AVFs); all other routers in the group are considered secondary AVFs
and are placed in the listen state. GLBP virtual MAC addresses typically use the
0007.B400. xxyy format, where xx represents the GLBP group number and yy represents the
AVF number.</p>

<p>The virtual MAC address 0005.73A0.OFFF is not an HSRP version 2 virtual MAC address. There
is a version of HSRP for IPv6 that uses a range of virtual MAC addresses from 0005.73A0.0000
through 0005.73A0.OFFF. However, configuring HSRP for IPv6 is beyond the scope of CCNA.</p>`,  // Explanation (wrap paragraphs in <p></p> tags)
  reference: [
    {
      title: "Boson CCNA Curriculum 200-301, Module 6: IP Routing, Understanding Virtual MAC Addresses",
      description: "Cisco: Hot Standby Router Protocol (HSRP) Frequently Asked Questions: Q. What are the differences between HSRP version 2 and HSRP version 1? Cisco: Configuring HSRP: Configuring HSRP"
    }
    // Add more references if needed with a comma before this
  ]
},

{
  id: 469 ,  // Question ID number
  category: "Automation and Programmability",  // Category name
  questionType: "Single-select",
  question: `Which of the following is a REST API encoding format that uses HTML-like tags to define
blocks of data? (Select the best answer.)`,  // Question text (use `` for multi-line, add <p> tags if needed)
  options: [
    "XML",  // Option A (index 0)
    "YAML",  // Option B (index 1)
    "BSON",  // Option C (index 2)
    "JSON"   // Option D (index 3)
  ],
  correctAnswer: 0,  // Index of correct answer (0, 1, 2, or 3)
  explanation: `<p> Of the available choices, Extensible Markup Language (XML) is a Representational State
Transfer (REST) Application Programming Interface (API) encoding format that uses Hypertext
Markup Language (HTML)-like tags to define blocks of data. REST APIs encode data in either
XML format or in JavaScript Object Notation (JSON) format. In addition, REST APIs are
typically used to communicate with a Software-Defined Networking (SDN) application plane.</p>

<p>An SDN controller uses two different sets of APIs: one set to communicate with applications
and another set to communicate with devices. Northbound APIs enable an SDN controller to
communicate with applications in the application plane. Applications use northbound APIs to
send requests or instructions to the SDN controller, which uses that information to modify and
manage network flow. Southbound APIs enable an SDN controller to communicate with
devices in the data plane.</p>

<p>XML is a markup language that is similar to HTML in structure; it uses tags to define blocks of
data. Whereas HTML is used to render information on a webpage, XML is a more structured
language that is used to format data in a way that can be easily transmitted over the Internet
and parsed by a variety of applications.</p>

<p>JSON is a REST API encoding format. However, JSON returns data in the form of an object
that contains key and value pairs. A single JSON object can contain multiple key and value
pairs. Each key and value pair inside a JSON object is separated from the others by a comma
(). Furthermore, each pair's key is separated from its value by a colon (:). The element in
quotation marks on the left side of each colon is the key. The element on the right side of
each colon is the value, which might or might not be enclosed in quotation marks. There are
several data value types that can be returned in JSON output: text, numeric, array, object,
Boolean, and null.</p>

<p>YAML Ain't Markup Language (YAML) is not a REST API encoding format. YAML is a data
serialization language that presents information in a format that is typically more human-
readable than either XML or JSON. YAML is commonly used by the Ansible configuration
management tool to store configuration playbooks.</p>

<p>Binary JSON (BSON) is not a REST API encoding format. BSON is a data serialization format
that stores JSON data in a binary form that is not human-readable. This is in contrast to the text format that is typical of JSON. BSON is typically used in information storage systems, such
as MongoDB.</p>`,  // Explanation (wrap paragraphs in <p></p> tags)
  reference: [
    {
      title: "Boson CCNA Curriculum 200-301, Module 9: Automation and Programming, XML",
      description: "CCNA 200-301 Official Cert Guide, Volume 2, Chapter 18: Understanding REST and JSON, Interpreting JSON"
    }
    // Add more references if needed with a comma before this
  ]
},

{
  id: 612,  // Question ID number
  category: "Network Fundamentals",  // Category name
  questionType: "Single-select",
  question: `Which of the following best describes what occurs when a packet must be re-sent because of
an interruption that occurs before the 64th byte has been transmitted? (Select the best
answer.)`,  // Question text (use `` for multi-line, add <p> tags if needed)
  options: [
    "A runt frame is transmitted.",  // Option A (index 0)
    "A collision occurs.",  // Option B (index 1)
    "A late collision occurs.",  // Option C (index 2)
    "A jumbo frame is transmitted." ,  // Option D (index 3)
    "A baby giant frame is transmitted."   // Option E (index 4)
  ],
  correctAnswer: 1,  // Index of correct answer (0, 1, 2, or 3)
  explanation: `<p> A collision occurs when a packet must be re-sent because of an interruption that occurs before
the 64th byte, or 512th bit, has been transmitted. When two devices attempt to send data
simultaneously, a collision occurs. On Ethernet networks, which use Carrier Sense Multiple
Access with Collision Detection (CSMA/CD), both devices will wait a random amount of time
before resending. Collisions can be caused by a duplex mismatch, by a malfunctioning device,
or by having too many nodes on a network segment.</p>

<p>A late collision occurs when a packet must be re-sent because of an interruption that occurs
after the 64th byte, or 512th bit, has been transmitted. Late collisions can be caused by a
duplex mismatch or by a network segment that extends farther than the cable length
supports.</p>

<p>A runt is a frame that is fewer than 64 bytes and has a bad Frame Check Sequence (FCS).
Frames that are smaller than 64 bytes are discarded. Runts can sometimes be caused by
excessive collisions but can also be caused by malfunctioning hardware.</p>

<p>A baby giant is a frame that is up to 1,600 bytes in length. The default maximum transmission
unit (MTU) size for Ethernet frames is 1,500 bytes, not including the Ethernet header and the
cyclic redundancy check (CRC) trailer, which add 18 bytes to the frame. Therefore, baby giant
frames are slightly larger than an Ethernet frame. Baby giants can occur if you use Q-in-Q
encapsulation, Multiprotocol Label Switching (MPLS), or any other feature that adds to the size
of an Ethernet frame.</p>

<p>A jumbo is a frame that is up to 9,216 bytes in length, which is much larger than a standard
Ethernet frame. You can issue the system mtu bytes global configuration command to
change the MTU size on Ethernet or Fast Ethernet interfaces; however, they cannot support
jumbo frames.</p>`,  // Explanation (wrap paragraphs in <p></p> tags)
  reference: [
    {
      title: "Boson CCNA Curriculum 200-301, Module 1: Network Fundamentals, Collisions CCNA 200-301 Official Cert Guide, Volume 1, Chapter 7: Configuring and Verifying Switch Interfaces, Common Layer 1 Problems on Working Interfaces",
      description: "Cisco: Troubleshooting Ethernet Collisions"
    }
    // Add more references if needed with a comma before this
  ]
},

{
  id: 487,  // Question ID number
  category: "Network Access",  // Category name
  questionType: "Single-select",
  question: `Which of the following best describes an AP deployment that connects APs to a WLC that is
housed within a switch stack? (Select the best answer.)`,  // Question text (use `` for multi-line, add <p> tags if needed)
  options: [
    "lightweight AP deployment",  // Option A (index 0)
    "autonomous AP deployment",  // Option B (index 1)
    "embedded AP deployment",  // Option C (index 2)
    "cloud-based AP deployment"   // Option D (index 3)
  ],
  correctAnswer: 2,  // Index of correct answer (0, 1, 2, or 3)
  explanation: `<p> Of the available choices, an embedded access point (AP) deployment typically connects APs to
a Cisco wireless LAN controller (WLC) that is housed within a switch stack. An AP is a device
that connects a wireless client to a wired network. The primary difference between this
deployment and others is that the WLC is embedded within a stack of switching hardware
instead of existing as a separate entity. APs can connect to the WLC by connecting to switches
that are directly hosting the WLC or switch ports that are operating on the same virtual local
area network (VLAN) as the WLC.</p> 

<p>A lightweight AP deployment can be an embedded AP deployment. However, a lightweight AP
deployment does not always connect APs to a WLC that is housed within a switch stack. A
lightweight AP deployment requires a separate wireless controller. Wireless clients connect to
lightweight APs, which are capable of performing real-time wireless network functions but rely
on a WLC for management functions. The connection between a lightweight AP and a WLC is
created by using two tunnels established by the Control and Provisioning of Wireless Access
Points (CAPWAP) tunneling protocol. Information sent between lightweight APs and the WLC is
encapsulated in Internet Protocol (IP) packets. This process enables a lightweight AP and WLC
to manage connectivity to the same wireless local area network (WLAN) yet be separated by
both physical and logical means. This type of deployment is also known as a split-MAC
architecture because the lightweight AP handles the frames while the WLC handles the
management functions.</p>

<p>An autonomous AP deployment does not connect APs to a WLC that is housed within a switch
stack. An autonomous AP contains network interfaces for both wireless and wired networks; it
is typically deployed as part of an autonomous AP architecture in which APs are connected
directly to the access layer of the three-tier hierarchical network model.</p>

<p>A cloud-based AP deployment does not connect APs to a WLC that is housed within a switch
stack. Instead cloud-based APs connect to and are automatically configured by a WLC that is
housed in a cloud-based system. For example, a Cisco Meraki AP provides wireless access by
connecting to a centralized management system known as the Cisco Meraki Cloud. APs
deployed at the access layer of the three-tier hierarchical network model contact the cloud in
order to automatically configure themselves. APs are managed through a cloud-based
dashboard.</p>`,  // Explanation (wrap paragraphs in <p></p> tags)
  reference: [
    {
      title: "CCNA 200-301 Official Cert Guide, Volume 1, Chapter 27: Analyzing Cisco Wireless Architectures, Split-MAC Architectures",
      description: "CCNA 200-301 Official Cert Guide, Volume 1, Chapter 27: Analyzing Cisco Wireless Architectures, Split-MAC Architectures"
    }
    // Add more references if needed with a comma before this
  ]
},

{
  id: 614,  // Question ID number
  category: "Network Fundamentals",  // Category name
  questionType: "Single-select",
  question: `Which of the following terms best describes an Ethernet frame that exceeds 1,518 bytes and
has a bad FCS value? (Select the best answer.)`,  // Question text (use `` for multi-line, add <p> tags if needed)
  options: [
    "a baby giant",  // Option A (index 0)
    "a runt",  // Option B (index 1)
    "a giant",  // Option C (index 2)
    "a jumbo"   // Option D (index 3)
  ],
  correctAnswer:2 ,  // Index of correct answer (0, 1, 2, or 3)
  explanation: `<p>A giant is an Ethernet frame that exceeds 1,518 bytes and has a bad Frame Check Sequence
(FCS) value. The default maximum transmission unit (MTU) size for Ethernet frames is 1,500
bytes, not including the Ethernet header and the cyclic redundancy check (CRC) trailer, which
add 18 bytes to the frame. The FCS field in the Ethernet frame stores a 4-byte CRC value that
is intended to enable a frame's receiver to determine whether the frame has been corrupted in
transit. The FCS is calculated based on the values of every other field in the frame. If a CRC
error is detected, the frame is discarded and the interface CRC and Frame counters are
incremented.</p>

<p>Although the Ethernet standard requires frames to have a size between 64 bytes and 1,518
bytes, there are devices that can support larger frame sizes. These nonstandard frames can
facilitate the efficient transmission of large data payloads in environments where large, non-
standard frame sizes are supported, such as data center storage network implementations.
There are several common Ethernet frames that exceed the standard size of 1,518 bytes. A
baby giant is a frame that is up to 1,600 bytes in length. Baby giants can occur if you use Q-
in-Q encapsulation, Multiprotocol Label Switching (MPLS), or any other feature that adds to
the size of an Ethernet frame. A jumbo is a frame that is up to 9,216 bytes in length, which is
much larger than a standard Ethernet frame.</p>

<p>A runt is a frame that is fewer than 64 bytes and has a bad FCS value. Frames that are smaller
than 64 bytes are discarded. Runts can sometimes be caused by excessive collisions but can
also be caused by malfunctioning hardware.</p>`,  // Explanation (wrap paragraphs in <p></p> tags)
  reference: [
    {
      title: "Cisco: Troubleshooting Ethernet Collisions",
      description: "CCNA 200-301 Official Cert Guide, Volume 1, Chapter 7: Configuring and Verifying Switch Interfaces, Common Layer 1 Problems on Working Interfaces"
    }
    // Add more references if needed with a comma before this
  ]
},

{
  id: 668,  // Question ID number
  category: "",  // Category name
  questionType: "Single-select",
  question: `Which of the following commands should you issue to globally disable LLDP? (Select the best
answer.)`,  // Question text (use `` for multi-line, add <p> tags if needed)
  options: [
    "no lldp run",  // Option A (index 0)
    "Ildp holdtime 0",  // Option B (index 1)
    "no lldp receive",  // Option C (index 2)
    "no lldp transmit"   // Option D (index 3)
  ],
  correctAnswer: 0,  // Index of correct answer (0, 1, 2, or 3)
  explanation: `<p>You should issue the no lldp run command from global configuration mode to disable Link
Layer Discovery Protocol (LLDP). LLDP is an Open Systems Interconnection (OSI) Layer 2
open-standard discovery protocol that is used to facilitate interoperability between Cisco
devices and non-Cisco devices. Attributes that can be learned from neighboring devices
contain Type, Length, Value (TLV) information including port description, system description,
and management address. LLDP is disabled by default on Cisco switches.</p>

<p>By default, all interfaces are configured to transmit and receive LLDP packets when LLDP is
globally enabled. However, you can issue the Ildp transmit and Ildp receive commands
from interface configuration mode to control the sending and receiving of LLDP packets for a
specific interface. For example, the no Ildp transmit command configures an interface not to
send LLDP packets, whereas the Ildp receive command configures an interface that was
previously configured not to receive LLDP packets to resume listening for LLDP packets.
Issuing the no Ildp transmit and no Ildp receive commands from interface configuration
mode will effectively disable LLDP on an interface, but it will not globally disable LLDP.</p>

<p>By default, a Cisco switch will send LLDP advertisements every 30 seconds when LLDP is
enabled on an interface. These advertisements are used by neighboring devices to update the
LLDP information learned about each neighbor. They are also used as keepalive messages to
ensure that a discovered neighbor continues to be available on the network. You can issue the
Ildp timer rate command from global configuration mode to configure the frequency at which
LLDP advertisements are sent by a switch. The default rate value is 30 seconds; however, the
rate can be configured to any integer value from 5 through 65534 seconds. A Cisco switch will
retain LLDP information for 120 seconds when LLDP is enabled on an interface. This time
interval is known as the LLDP holdtime. You can issue the Ildp holdtime seconds command
from global configuration mode to configure the LLDP holdtime to any integer value from 0
through 65535 seconds. Whenever a new LLDP advertisement is received, the hold timer is
reset and the LLDP information is considered current. When the hold timer expires for a
particular neighbor, the LLDP information regarding that neighbor is considered stale and is
discarded. Issuing the Ildp holdtime 0 command configures the hold timer to expire
immediately; however, it will not globally disable LLDP.</p>`,  // Explanation (wrap paragraphs in <p></p> tags)
  reference: [
    {
      title: "Cisco: Configuring CDP: Default CDP Configuration ,Cisco: Configuring LLDP, LLDP-MED, and Wired Location Service: Default LLDP Configuration",
      description: "Boson CCNA Curriculum 200-301, Module 5: Switching and Network Access, Disabling and Enabling LLDP ;CCNA 200-301 Official Cert Guide, Volume 2, Chapter 9: Device Management Protocols,Configuring and Verifying LLDP"
    }
    // Add more references if needed with a comma before this
  ]
},

{
  id: 442,  // Question ID number
  category: "Security Fundamentals",  // Category name
  questionType: "Single-select",
  question: `Which of the following is most likely to be considered a form of accounting? (Select the best
answer.)`,  // Question text (use `` for multi-line, add <p> tags if needed)
  options: [
    "verifying a user's fingerprint pattern",  // Option A (index 0)
    "logging a verified user's file access",  // Option B (index 1)
    "allowing a user to access a specific file",  // Option C (index 2)
    "assigning a role to a verified user" ,  // Option D (index 3)
    "verifying a user's password"   // Option E (index 4)
  ],
  correctAnswer: 1,  // Index of correct answer (0, 1, 2, or 3)
  explanation: `<p>Logging a verified user's file access is a form of accounting. Authentication, Authorization, and
Accounting (AAA) systems manage user activity. Accounting is a feature of AAA systems that
enables administrators to track resource usage across a network. If a security incident occurs,
accounting can aid the effort to track the incident back to its source. AAA systems are typically
more sophisticated than simple password authentication systems, such as a local password
database. Two common AAA systems are Remote Authentication Dial-In User Server (RADIUS)
and Terminal Access Controller Access-Control System Plus (TACACS+).</p>

<p>RADIUS is a standard AAA protocol created by the Internet Engineering Task Force (IETF).
Compared to TACACS+, RADIUS has several limitations. For example, RADIUS encrypts only
the password in Access-Request packets; it does not encrypt the entire contents of the packet
like TACACS+ does.</p>

<p>TACACS+ is a Cisco-proprietary protocol used during AAA operations. TACACS+ provides more
granular and flexible control over user access privileges. For example, the AAA operations are
separated by TACACS+, whereas RADIUS combines the authentication and authorization
services into a single function. Because TACACS+ separates these functions, administrators
have more control over access to configuration commands. In addition, TACACS+ encrypts the
entire contents of packets, thus providing additional security.</p>

<p>The following list defines the three phases of the AAA process:</p>

<p>. Authentication - the process of verifying a user's identity</p>
<p>. Authorization - the process of verifying the level of access configured for a user</p>
<p>. Accounting - the process of recording the use of resources</p>

<p>Verifying a user's fingerprint pattern and verifying a user's password are both likely to be
considered authentication, not accounting. Authentication is the process of verifying a user's
identity. Authentication by itself does not grant access to a given resource.</p>

<p>Allowing a user to access a specific file is a form of authorization, not accounting. Similarly,
assigning a role to a verified user is a form of authorization. Allowing access to a specific file
can involve assigning specific user or group permissions directly to the file, matching a rule, such as an access control list (ACL) that associates a specific user with a file, or assigning a
user to a specific role that has permission to access the file.</p>`,  // Explanation (wrap paragraphs in <p></p> tags)
  reference: [
    {
      title: "Boson CCNA Curriculum 200-301, Module 8: Security Fundamentals, AAA ;CCNA 200-301 Official Cert Guide, Volume 2, Chapter 4: Security Architectures, Controlling and Monitoring User Access",
      description: "Cisco: AAA Overview"
    }
    // Add more references if needed with a comma before this
  ]
},

{
    id: 673,
    category: "Switching Concepts",
    questionType: "Single-select",
    question: `<p>You issue the following commands on SwitchA:</p>
<pre>SwitchA(config)#interface port-channel 1
SwitchA(config-if)#interface range fastethernet 0/5 - 6
SwitchA(config-if-range)#channel-protocol lacp
SwitchA(config-if-range)#channel-group 1 mode on</pre>

<p>You then issue the following commands on SwitchB:</p>
<pre>SwitchB(config)#interface port-channel 1
SwitchB(config-if)#interface range fastethernet 0/5 - 6
SwitchB(config-if-range)#channel-protocol pagp
SwitchB(config-if-range)#channel-group 1 mode on</pre>

<p>Which of the following statements is true about the resulting EtherChannel link between SwitchA and SwitchB?  (Select the best answer. )</p>`,
    options: [
      "A link is formed without an aggregation protocol.",
      "A link is formed using PAgP because it was configured last and has priority.",
      "A link is formed using LACP because it was configured first and has priority.",
      "No link is formed."
    ],
    correctAnswer: 3,
    explanation: `<p>An EtherChannel link is not formed in this scenario. EtherChannel is used to bundle two or more identical, physical interfaces into a single logical link between switches. An EtherChannel can be permanently established between switches, or it can be negotiated by using one of two aggregation protocols: the Cisco-proprietary Port Aggregation Protocol (PAgP) or the open-standard Institute of Electrical and Electronics Engineers (IEEE) 802.3ad protocol, which is also known as Link Aggregation Control Protocol (LACP). An EtherChannel can have up to eight active switch ports in the bundle that forms the logical link between switches.  Every switch port in the bundle, which is also referred to as a channel group, must be configured with the same speed and duplex settings.</p>

<p>To configure a switch port to use an aggregation protocol, you should use the <strong>channel-protocol {lacp | pagp}</strong> command. The EtherChannel aggregation protocol must match on each switch, or they will be unable to dynamically establish an EtherChannel link between them. In addition, if a channel protocol is explicitly configured, each local switch port in the EtherChannel bundle must be configured to operate in a mode that is compatible with the channel protocol or the switch will display an error message and refuse to bundle the offending interface. In this scenario, the <strong>channel-protocol</strong> command on SwitchA specifies that LACP should be used to dynamically establish an EtherChannel; however, the <strong>channel-group</strong> command attempts to configure an incompatible operating mode.  Because the <strong>channel-protocol</strong> command cannot override the configuration specified by the <strong>channel-protocol</strong> command, the <strong>channel-group</strong> command issued on SwitchA will produce an error message similar to the following sample output:</p>

<pre>Command rejected (Channel protocol mismatch for interface Fa0/5 in group 1): the interface can not be added to the channel group
% Range command terminated because it failed on FastEthernet0/5</pre>

<p>To configure a switch port to be a member of a particular channel group, you should issue the <strong>channel-group <em>number</em> mode {on | active | passive | {auto | desirable} [non-silent]}</strong> command.  This command uses a <em>number</em> parameter to specify a particular channel group; the <em>number</em> value should correspond to the PortChannel interface being configured.  The supported values for the <em>number</em> parameter vary depending on hardware platform and IOS revision. </p>

<p>The following table displays the channel-group configurations that will establish an EtherChannel: </p>

<table border="1" cellpadding="8" cellspacing="0" style="border-collapse: collapse; text-align: center;">
  <thead>
    <tr>
      <th>SwitchA \ SwitchB</th>
      <th>off</th>
      <th>auto</th>
      <th>desirable</th>
      <th>passive</th>
      <th>active</th>
      <th>on</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><strong>off</strong></td>
      <td style="background-color: #ff0000; color: white;"><strong>NO</strong></td>
      <td style="background-color: #ff0000; color: white;"><strong>NO</strong></td>
      <td style="background-color: #ff0000; color: white;"><strong>NO</strong></td>
      <td style="background-color: #ff0000; color: white;"><strong>NO</strong></td>
      <td style="background-color: #ff0000; color: white;"><strong>NO</strong></td>
      <td style="background-color: #ff0000; color: white;"><strong>NO</strong></td>
    </tr>
    <tr>
      <td><strong>auto</strong></td>
      <td style="background-color: #ff0000; color: white;"><strong>NO</strong></td>
      <td style="background-color: #ff0000; color:  white;"><strong>NO</strong></td>
      <td style="background-color: #0066cc; color: white;"><strong>PAgP</strong></td>
      <td style="background-color: #ff0000; color: white;"><strong>NO</strong></td>
      <td style="background-color: #ff0000; color: white;"><strong>NO</strong></td>
      <td style="background-color: #ff0000; color: white;"><strong>NO</strong></td>
    </tr>
    <tr>
      <td><strong>desirable</strong></td>
      <td style="background-color: #ff0000; color: white;"><strong>NO</strong></td>
      <td style="background-color: #0066cc; color: white;"><strong>PAgP</strong></td>
      <td style="background-color: #0066cc; color: white;"><strong>PAgP</strong></td>
      <td style="background-color: #ff0000; color: white;"><strong>NO</strong></td>
      <td style="background-color: #ff0000; color: white;"><strong>NO</strong></td>
      <td style="background-color: #ff0000; color: white;"><strong>NO</strong></td>
    </tr>
    <tr>
      <td><strong>passive</strong></td>
      <td style="background-color: #ff0000; color: white;"><strong>NO</strong></td>
      <td style="background-color: #ff0000; color: white;"><strong>NO</strong></td>
      <td style="background-color: #ff0000; color: white;"><strong>NO</strong></td>
      <td style="background-color: #ff0000; color: white;"><strong>NO</strong></td>
      <td style="background-color: #6600cc; color: white;"><strong>LACP</strong></td>
      <td style="background-color: #ff0000; color: white;"><strong>NO</strong></td>
    </tr>
    <tr>
      <td><strong>active</strong></td>
      <td style="background-color: #ff0000; color: white;"><strong>NO</strong></td>
      <td style="background-color: #ff0000; color: white;"><strong>NO</strong></td>
      <td style="background-color: #ff0000; color: white;"><strong>NO</strong></td>
      <td style="background-color: #6600cc; color: white;"><strong>LACP</strong></td>
      <td style="background-color: #6600cc; color: white;"><strong>LACP</strong></td>
      <td style="background-color: #ff0000; color: white;"><strong>NO</strong></td>
    </tr>
    <tr>
      <td><strong>on</strong></td>
      <td style="background-color: #ff0000; color: white;"><strong>NO</strong></td>
      <td style="background-color: #ff0000; color: white;"><strong>NO</strong></td>
      <td style="background-color: #ff0000; color: white;"><strong>NO</strong></td>
      <td style="background-color: #ff0000; color: white;"><strong>NO</strong></td>
      <td style="background-color: #ff0000; color: white;"><strong>NO</strong></td>
      <td style="background-color: #00cc00; color: white;"><strong>ON</strong></td>
    </tr>
  </tbody>
</table>

<p>The <strong>on</strong> keyword configures the channel group to unconditionally create the channel with no LACP or PAgP negotiation. In the <strong>on</strong> mode, a functional EtherChannel exists only if a channel group that is in the <strong>on</strong> mode is connected to another channel group that is also in the <strong>on</strong> mode. If either side of the link is not in <strong>on</strong> mode, packet loss can occur.  You can issue the <strong>show etherchannel summary</strong> command to verify the status of an EtherChannel link and to determine which aggregation protocol, if any, was used to establish the link.  The following sample output indicates that no aggregation protocol was used: </p>

<pre>SwitchA#show etherchannel summary
Flags:   D - down        P - bundled in port-channel
        I - stand-alone s - suspended
        H - Hot-standby (LACP only)
        R - Layer3      S - Layer2
        U - in use      f - failed to allocate aggregator
        M - not in use, minimum links not met
        u - unsuitable for bundling
        w - waiting to be aggregated
        d - default port

Number of channel-groups in use: 1
Number of aggregators:            1

Group  Port-channel  Protocol    Ports
------+-------------+-----------+-----------------------------------------------
1      Po1(SU)       -           Fa0/5(P)    Fa0/6(P)</pre>

<p>The <strong>auto</strong>, <strong>desirable</strong>, and <strong>non-silent</strong> keywords can be used only with PAgP. The <strong>desirable</strong> keyword configures the channel group to actively negotiate PAgP, and the <strong>auto</strong> keyword configures the channel group to listen for PAgP negotiation to be offered.  Either or both sides of the link must be set to <strong>desirable</strong> to establish an EtherChannel over PAgP; setting both sides to <strong>auto</strong> will not establish an EtherChannel over PAgP. The optional <strong>non-silent</strong> keyword requires that a port receive PAgP packets before the port is added to the channel. </p>

<p>The <strong>active</strong> and <strong>passive</strong> keywords can be used only with LACP. The <strong>active</strong> keyword configures the channel group to actively negotiate LACP, and the <strong>passive</strong> keyword configures the channel group to listen for LACP negotiation to be offered. Either or both sides of the link must be set to <strong>active</strong> to establish an EtherChannel over LACP; setting both sides to <strong>passive</strong> will not establish an EtherChannel over LACP. </p>`,
    reference: [
      {
        title: "Boson CCNA Curriculum 200-301",
        description: "Module 5: Switching and Network Access, Understanding PAgP and LACP" },
      {
        title: "CCNA 200-301 Official Cert Guide",
        description: "Volume 1, Chapter 10: RSTP and EtherChannel Configuration, Configuring Layer 2 EtherChannel"
      }
    ]
},

{
  id: 54,  // Unique question ID number
  category: "IP Connectivity",  // e.g., "Network Fundamentals", "IP Connectivity", "Security Fundamentals", etc.
  questionType: "Single-select",
  question: `<p>You issue the <strong>ip ospf network non-broadcast</strong> command on an interface.</p>

<p>Which of the following statements is correct regarding how OSPF operates on the
interface? (Select the best answer.)</p>`,  // Question text (use <p></p> tags for paragraphs, <pre></pre> for code blocks)
  options: [
    "The Hello timer is set to 10 seconds, and the dead timer is set to 40 seconds.",  // Option A (index 0)
    "DR and BDR elections are not performed.",  // Option B (index 1)
    "Multicast updates are sent.",  // Option C (index 2)
    "The neighbor command is required to establish adjacencies."   // Option D (index 3)
  ],
  correctAnswer: 3,  // Index of correct answer (0 for A, 1 for B, 2 for C, 3 for D)
  explanation: `<p>The <strong>neighbor</strong> command is required to establish adjacencies on Open Shortest Path First (OSPF) nonbroadcast networks. There are five OSPF network types:</p>

<ul>
  <li>Broadcast</li>
  <li>Nonbroadcast</li>
  <li>Point-to-point</li>
  <li>Point-to-multipoint broadcast</li>
  <li>Point-to-multipoint nonbroadcast</li>
</ul>

<p>Nonbroadcast and point-to-multipoint nonbroadcast networks do not allow multicast packets.  To configure OSPF to send unicast updates, you must configure neighbor routers with the <strong>neighbor</strong> command.  Broadcast, point-to-point, and point-to-multipoint broadcast networks allow multicast packets, so manual configuration of neighbor routers with the <strong>neighbor</strong> command is not required.</p>

<p>On broadcast networks, designated router (DR) and backup designated router (BDR) elections are performed.  By default, the Hello timer is set to 10 seconds and the dead timer is set to 40 seconds. To configure an OSPF broadcast network, you should issue the <strong><code>ip ospf network broadcast</code></strong> command. The OSPF broadcast network type is enabled by default on Fiber Distributed Data Interface (FDDI) and Ethernet interfaces, including Fast Ethernet and Gigabit Ethernet interfaces.</p>

<p>On nonbroadcast networks, DR and BDR elections are performed. By default, the Hello timer is set to 30 seconds and the dead timer is set to 120 seconds. To configure an OSPF nonbroadcast network, which is also called a nonbroadcast multiaccess (NBMA) network, you should issue the <strong><code>ip ospf network non-broadcast</code></strong> command.</p>

<p>On point-to-point networks, DR and BDR elections are not performed. By default, the Hello timer is set to 10 seconds and the dead timer is set to 40 seconds. To configure an OSPF point-to-point network, you should issue the <strong><code>ip ospf network point-to-point</code></strong> command. The OSPF point-to-point network type is enabled by default on High-Level Data Link Control (HDLC) and Point-to-Point Protocol (PPP) serial interfaces.</p>

<p>OSPF point-to-multipoint broadcast networks operate just like OSPF point-to-point networks except the Hello timer is set to 30 seconds and the dead timer is set to 120 seconds by default. To configure an OSPF point-to-multipoint broadcast network, you should issue the <strong><code>ip ospf network point-to-multipoint</code></strong> command.</p>

<p>OSPF point-to-multipoint nonbroadcast networks operate just like OSPF point-to-multipoint broadcast networks except that multicasts cannot be sent; therefore, manual configuration of neighbor routers with the <strong>neighbor</strong> command is required so that OSPF sends unicast updates. To configure an OSPF point-to-multipoint nonbroadcast network, you should issue the <strong><code>ip ospf network point-to-multipoint non-broadcast</code></strong> command. </p>`,  // Detailed explanation (wrap paragraphs in <p></p> tags)
  reference: [
    {
      title: "Cisco: Initial Configurations for OSPF over a Point-to-Point Link ,Cisco: OSPF Design Guide: Adjacencies on Non-Broadcast Multi-Access (NBMA) Networks ,Cisco: OSPF Command Reference: ip ospf network ,Cisco: Configuring OSPF",
      description: "Cisco: Initial Configurations for OSPF over a Point-to-Point Link ,Cisco: OSPF Design Guide: Adjacencies on Non-Broadcast Multi-Access (NBMA) Networks ,Cisco: OSPF Command Reference: ip ospf network ,Cisco: Configuring OSPF"
    }
  ]
},

{
  id:31 ,  // Unique question ID number
  category: "IP Connectivity",  // e.g., "Network Fundamentals", "IP Connectivity", "Security Fundamentals", etc.
  questionType: "Single-select",
  question: `Which HSRP router or routers will use the HSRP virtual IP address and will respond to ARP requests
with the HSRP virtual MAC address? (Select the best answer.)`,  // Question text (use <p></p> tags for paragraphs, <pre></pre> for code blocks)
  options: [
    "only the active router",  // Option A (index 0)
    "only the active router and the standby router",  // Option B (index 1)
    "all HSRP routers in a group",  // Option C (index 2)
    "only the standby router"   // Option D (index 3)
  ],
  correctAnswer: 0,  // Index of correct answer (0 for A, 1 for B, 2 for C, 3 for D)
  explanation: `<p>Only the active router will use the Hot Standby Router Protocol (HSRP) virtual Internet Protocol (IP)
address and will respond to Address Resolution Protocol (ARP) requests with the HSRP virtual Media
Access Control (MAC) address. HSRP is a Cisco-proprietary protocol that enables two or more routers
to act as a single virtual router. Multiple routers are assigned to an HSRP group, and the routers
function as a single gateway. The HSRP virtual IP address can then be configured as the default
gateway address for client devices.</p>

<p>Each HSRP group is identified by a group number from 0 through 255. The default HSRP group value
is 0. Based on priority value, HSRP elects a single active router and a standby router for each group.
To participate in the active and standby router election process, each HSRP router must be a member
of the same group. The active router is the router with the highest priority; it forwards packets,
responds to ARP requests with a virtual MAC address, and can be the only router that is explicitly
configured with the virtual IP address. The standby router is the router with the second-highest
priority. If multiple HSRP routers have the same priority, the router with the highest IP address is
elected as the active router. The router with the second-highest IP address is elected as the standby
router, which will assume the role of the active router if the active router fails. Other routers in the
HSRP group are in the listen state.</p>

<p>By default, Hello packets are sent by the active router every three seconds. Only the standby router
monitors the active router's Hello packets. If the standby router does not receive a Hello packet from
the active router for the duration configured in the holdtime, the standby router will take over the role
of the active router. By default, the holdtime is set to 10 seconds.</p>

<p>To differentiate the virtual MAC addresses of the various groups, HSRP uses a special format for the
virtual MAC address that uses the well-known virtual MAC address 0000.0c07.acxx, where xx is the
group number in hexadecimal format. For example, the virtual MAC address for HSRP group 11 is
0000.0c07.ac0b; Ob is the hexadecimal equivalent of 11 in decimal notation.</p>`,  // Detailed explanation (wrap paragraphs in <p></p> tags)
  reference: [
    {
      title: "Cisco: Configuring HSRP and VRRP: Understanding HSRP",
      description: "Boson CCNA Curriculum 200-301, Module 6: IP Routing, Understanding HSRP"
    }
  ]
},

{
  id: 686,  // Unique question ID number
  category: "Network Fundamentals",  // e.g., "Network Fundamentals", "IP Connectivity", "Security Fundamentals", etc.
  questionType: "Single-select",
  question: `Which of the following tables is used by a switch to discover the relationship between the
Layer 2 address of a device and the physical port used to reach the device? (Select the best
answer.)`,  // Question text (use <p></p> tags for paragraphs, <pre></pre> for code blocks)
  options: [
    "the ARP table",  // Option A (index 0)
    "the VLAN table",  // Option B (index 1)
    "the CAM table",  // Option C (index 2)
    "the FIB table" ,  // Option D (index 3)
    "the adjacency table"   // Option E (index 4)
  ],
  correctAnswer: 2 ,  // Index of correct answer (0 for A, 1 for B, 2 for C, 3 for D)
  explanation: `<p>The Content Addressable Memory (CAM) table is used by a switch to discover the relationship
between the Open Systems Interconnection (OSI) Layer 2 address of a device and the physical
port used to reach the device. Switches make forwarding decisions based on the destination
MAC address contained in a frame's header. The switch first searches the CAM table for an
entry that matches the frame's destination MAC address. If the frame's destination MAC
address is not found in the table, the switch forwards the frame to all its ports, except the port
from which it received the frame. If the destination MAC address is found in the table, the
switch forwards the frame to the appropriate port. The source MAC address is also recorded if
it did not previously exist in the CAM table.</p>

<p>The Forwarding Information Base (FIB) is a table that contains all the prefixes from the
Internet Protocol (IP) routing table and is structured in a way that is optimized for forwarding.
The FIB and the adjacency table are the two main components of Cisco Express Forwarding
(CEF), which is a hardware-based switching method that is implemented in all OSI Layer 3-
capable Catalyst switches. The FIB is synchronized with the IP routing table and therefore
contains an entry for every IP prefix in the routing table. The IP prefixes are ordered so that
when a Layer 3 address is compared against the FIB, the longest, most specific match will be
found first; therefore, prefix lookup times are minimized.</p>

<p>The adjacency table maintains the Layer 2 addressing information for the FIB. Each network
prefix in the FIB is associated with a next-hop address and an outbound interface. The
adjacency table contains the Layer 2 addressing information for each next-hop address listed
in the FIB and is used to rewrite the Layer 2 header of each forwarded IP packet. You can
issue the <strong>show adjacency</strong> command to display the contents of the adjacency table.</p>

<p>The Address Resolution Protocol (ARP) table contains Layer 3 to Layer 2 address translations.
Whenever the switch encounters a packet destined for a Layer 3 address that does not have
an entry in the ARP table, the switch broadcasts an ARP request to query the network for the
Layer 2 address. When the ARP reply is received, the switch enters the address pair into the
ARP table for future reference. You can issue the <strong>show ip arp</strong> command to display the
contents of the ARP table.</p>

<p> The virtual local area network (VLAN) table contains a record of the VLAN definitions on the
switch and a list of the interfaces associated with each VLAN. The VLAN table does not contain
any Layer 3 information. You can issue the show vlan command to display the contents of
the VLAN table.</p>`,  // Detailed explanation (wrap paragraphs in <p></p> tags)
  reference: [
    {
      title: "Cisco: Catalyst 6500/6000 Switches ARP or CAM Table Issues Troubleshooting: Background Information",
      description: "Boson CCNA Curriculum 200-301, Module 5: Switching and Network Access, Using the CAM Table ;CCNA 200-301 Official Cert Guide, Volume 1, Chapter 5: Analyzing Ethernet LAN Switching, Learning MAC Addresses"
    }
  ]
},

{
  id: 621,  // Unique question ID number
  category: "Network Fundamentals",  // e.g., "Network Fundamentals", "IP Connectivity", "Security Fundamentals", etc.
  questionType: "Single-select",
  question: `<p>Examine the network diagram below: </p>

<img src="/images/network-diagram-621.png" alt="Network Diagram" style="max-width: 100%; height:  auto; margin: 20px 0;" />

<p>You have been given the task of configuring the IP properties of all the hosts on the LAN attached to RouterB.  Addresses should be assigned from the 172.16.12.0/28 subnet. The first valid host address has been assigned to the Fast Ethernet interface of RouterB. </p>

<p>Which of the following is a valid configuration for a host on this subnet?  (Select the best answer. )</p>`,  // Question text (use <p></p> tags for paragraphs, <pre></pre> for code blocks)
  options: [
  "IP address: 172.16.12.2<br>Subnet Mask: 255.255.255.248<br>Default Gateway: 172.16.12.9",
  "IP address: 172.16.12.17<br>Subnet Mask: 255.255.255.240<br>Default Gateway: 172.16.12.1",
  "IP address: 172.16.12.30<br>Subnet Mask: 255.255.255.224<br>Default Gateway: 172.16.12.1",
  "IP address: 172.16.12.15<br>Subnet Mask: 255.255.255.240<br>Default Gateway: 172.16.12.1",
  "IP address: 172.16.12.10<br>Subnet Mask: 255.255.255.240<br>Default Gateway: 172.16.12.1",
  "IP address:  172.16.12.6<br>Subnet Mask:  255.255.255.248<br>Default Gateway: 172.16.12.1"
],
  correctAnswer:4 ,  // Index of correct answer (0 for A, 1 for B, 2 for C, 3 for D)
  explanation: `<p>A host configuration with the Internet Protocol (IP) address 172.16.12.10, the subnet mask
255.255.255.240, and the default gateway address 172.16.12.1 is valid for hosts on the
172.16.12.0/28 subnet. In the scenario, the /28: following the 172.16.12.0 IP address is
Classless Inter-Domain Routing (CIDR) notation for a 255.255.255.240 subnet mask. The /28
notation means that 28 bits are used for the network portion of the IP address. Because 4 bits
remain for host address allocation, 16 addresses (24) are available on the subnet. The first
address is the network address, the last address is the broadcast address, and the other 14
addresses (24- 2) are usable host addresses. The first valid host address is 172.16.12.1, and
the last valid host address is 172.16.12.14. Therefore, 172.16.12.10 is in the valid host
address range, so it may be assigned to a host. Because the scenario states that the first valid
host address is used by RouterB and RouterB is the default gateway for hosts on that local
area network (LAN), the IP address of the default gateway should be 172.16.12.1.</p>

<p>The last address in the 172.16.12.0/28 subnet is 172.16.12.15. Because the last address in a
subnet range is the broadcast address, the IP address 172.16.12.15 cannot be used for hosts
on the 172.16.12.0/28 subnet.</p>

<p>The IP address 172.16.12.17 is not within the 172.16.12.0/28 subnet; it is the first valid host
address in the 172.16.12.16/28 subnet. Therefore, 172.16.12.17 is not a valid host address for
hosts on the 172.16.12.0/28 subnet.</p>

<p>The 255.255.255.224 subnet mask cannot be used for hosts on this subnet. The
255.255.255.224 subnet mask corresponds to /27 in CIDR notation, which allows for 30 hosts
(25 - 2) per subnet. If the subnet in the scenario were assigned the 172.16.12.0/27 address
range, 172.16.12.30 would have been a valid host address for the subnet.</p>

<p>The 255.255.255.248 subnet mask cannot be used for hosts on this subnet. The
255.255.255.248 subnet mask corresponds to /29 in CIDR notation, which allows for six hosts
(23 - 2) per subnet. If the subnet in the scenario were using the 172.16.12.0/29 address
range, 172.16.12.2 and 172.16.12.6 would be valid host addresses for the subnet. However,
you would not be able to use 172.16.12.9 for the default gateway, because RouterB is
configured with the first host address in the subnet, which is 172.16.12.1.</p>`,  // Detailed explanation (wrap paragraphs in <p></p> tags)
  reference: [
    {
      title: "Cisco: IP Addressing and Subnetting for New Users",
      description: "Boson CCNA Curriculum 200-301, Module 2: Network Addressing and Transport, Subnetting; CCNA 200-301 Official Cert Guide, Volume 1, Chapter 14: Analyzing Existing Subnets, Analyzing Existing Subnets: Binary"
    }
  ]
},

{
  id: 407,
  category: "Security Fundamentals",
  questionType: "Single-select",
  question:  `<p>An administrator has generated the following MD5 hash from a plain-text password: </p>

<pre>$1$cf6N$Ugo.y0CXMLffTfQtyO/Xt.</pre>

<p>The administrator wants to configure the password so that it will be used to access enable mode on a Cisco router. The <strong>no service password-encryption</strong> command has been issued on the router. </p>

<p>Which of the following commands should the administrator issue?  (Select the best answer.)</p>`,
  
  options: [
    "enable password 5 $1$cf6N$Ugo.y0CXMLffTfQtyO/Xt.",
    "password 7 $1$cf6N$Ugo.y0CXMLffTfQtyO/Xt.",
    "password 0 $1$cf6N$Ugo. y0CXMLffTfQtyO/Xt.",
    "enable secret 5 $1$cf6N$Ugo.y0CXMLffTfQtyO/Xt.",
    "enable secret 0 $1$cf6N$Ugo.y0CXMLffTfQtyO/Xt."
  ],
  
  correctAnswer:  3,
  
  explanation: `<p>The administrator should issue the <strong>enable secret 5 $1$cf6N$Ugo. y0CXMLffTfQtyO/Xt. </strong> command to configure the Message Digest 5 (MD5) hash generated from a plain-text password so that it will be used to access enable mode on a Cisco router in this scenario. The <strong>no service password-encryption</strong> command has been issued in this scenario. This command disables the automatic encryption of new passwords when they are created by an administrator.  If the <strong>service password-encryption</strong> command had been issued in this scenario, all current and future passwords in the running configuration would be encrypted automatically. Thus, of the available choices, the <strong>enable secret 5 $1$cf6N$Ugo.y0CXMLffTfQtyO/Xt.</strong> command is the only option in this scenario that enables the administrator to store a previously encrypted password that allows access to enable mode on a Cisco router.</p>

<p>In some Cisco IOS versions prior to 15.3(3), the <strong>enable secret</strong> command by default stores an encrypted password in the device's configuration file by using a Secure Hash Algorithm (SHA) 256-bit hash. As of Cisco IOS 15.3(3), Type 4 passwords have been deprecated because of a security flaw in their implementation.  The syntax for the <strong>enable secret</strong> command is <strong>enable secret</strong> [<em>level level</em>] {<em>password</em> | [<em>encryption-type</em>] <em>encrypted-password</em>}, where <em>password</em> is a string of characters that represents the clear-text password. Instead of supplying a clear-text password, you can specify an <em>encryption-type</em> value of 0, 4, or 5 and an <em>encrypted-password</em> value of either a clear-text password, a SHA-256 hash, or an MD5 hash, respectively.</p>

<p>Supplying a hash value requires that you have previously encrypted the value by using a hashing algorithm in the same fashion that IOS uses the algorithm. This command configures a password that is required in order to place the device into enable mode, which is also known as privileged EXEC mode.  The device must, at a minimum, be placed into enable mode for the user to be able to display the running configuration.</p>

<p>The administrator should not issue the <strong>enable secret 0 $1$cf6N$Ugo. y0CXMLffTfQtyO/Xt. </strong> command in this scenario.  Specifying an <em>encryption-type</em> value of 0 when you issue the <strong>enable secret</strong> command indicates that the string following the command is in clear-text format, not encrypted format.  Because the router assumes the string is a clear-text password and the length of the hash is greater than 25 characters, issuing the <strong>enable secret 0 $1$cf6N$Ugo. y0CXMLffTfQtyO/Xt. </strong> command would cause the router to generate an error similar to the following: </p>

<pre>% Invalid Password length - must contain 1 to 25 characters. Password
configuration failed</pre>

<p>If the already encrypted <strong>$1$cf6N$Ugo.y0CXMLffTfQtyO/Xt.</strong> string was shorter than 25 characters, the command would encrypt that string and require anyone who is attempting to access enable mode to issue <strong>$1$cf6N$Ugo.y0CXMLffTfQtyO/Xt.</strong> as the password instead of the original unencrypted value that the MD5 hash <strong>$1$cf6N$Ugo. y0CXMLffTfQtyO/Xt. </strong> represents.</p>

<p>The administrator should not issue the <strong>enable password 5 $1$cf6N$Ugo.y0CXMLffTfQtyO/Xt.</strong> command in this scenario. You can issue the <strong>enable password</strong> command to create a password that must be used to gain access to enable mode. The syntax of the <strong>enable password</strong> command is <strong>enable password</strong> [<em>level level</em>] {<em>password</em> | [<em>encryption-type</em>] <em>encrypted-password</em>}. The <strong>enable password</strong> command supports the <em>encryption-type</em> values of 0 and 7, not 5. The <em>encryption-level</em> value of 0 indicates that a clear-text password of 1 to 25 characters will follow. The MD5 hash in this scenario is longer than 25 characters. An <em>encryption-level</em> value of 7 indicates that a hidden password consisting of a Cisco-proprietary form of encryption will follow. Issuing the <strong>enable password 5 $1$cf6N$Ugo.y0CXMLffTfQtyO/Xt.</strong> command would result in the following error:</p>

<pre>% Invalid encryption type: 5</pre>

<p>In this scenario, the administrator should not issue the <strong>password 7 $1$cf6N$Ugo.y0CXMLffTfQtyO/Xt.</strong> command or the <strong>password 0 $1$cf6N$Ugo.y0CXMLffTfQtyO/Xt.</strong> command. The <strong>line console 0</strong> command followed by the <strong>password</strong> command configures a password for accessing the router by using the console. Typically, the console is accessed by physically connecting a console cable between the router and a device that is running terminal software. Issuing the password for the console places the device into user EXEC mode. Both password commands in this scenario contain invalid syntax. The <em>encryption-level</em> value of 0 indicates that a clear-text password of 1 to 25 characters will follow. The MD5 hash in this scenario is longer than 25 characters. An <em>encryption-level</em> value of 7 indicates that a hidden password consisting of a Cisco-proprietary form of encryption will follow.</p>`,
  
  reference: [
    {
      title: "Boson CCNA Curriculum 200-301",
      description: "Module 8: Security Fundamentals, Creating a Secure Password for Privileged EXEC Mode Access"
    },
    {
      title:  "CCNA 200-301 Official Cert Guide",
      description: "Volume 2, Chapter 5: Securing Network Devices, Encoding"
    },
    {
      title: "Cisco: Configuring Security with Passwords, Privileges, and Logins",
      description: "Cisco IOS CLI Modes"
    },
    {
      title: "Cisco: Configuring Security with Passwords, Privileges, and Logins",
      description: "Cisco IOS Password Encryption Levels"
    }
  ]
},

{
  id:39 ,  // Unique question ID number
  category: "IP Services",
  questionType: "Multi-select",  // Changed from "Single-select"
  question: `<p>Which of the following statements best describe why WRED is useful for networks where the majority of traffic uses TCP?  (Select 2 choices.)</p>`,
  
  options: [
    "TCP sources reduce traffic flow when congestion occurs.",
    "TCP packets that are dropped must be retransmitted.",
    "TCP packets cannot arrive out of sequence.",
    "TCP packets must have priority over UDP packets.",
    "TCP packets have large header sizes."
  ],
  
  correctAnswer: [0, 1],  // Array with multiple correct answers (indices 0 and 1)
  
  explanation: `<p>Weighted random early detection (WRED) is useful for networks where the majority of traffic uses Transmission Control Protocol (TCP) because <strong>TCP packets that are dropped must be retransmitted</strong>. Additionally, <strong>TCP sources reduce traffic flow when congestion occurs</strong>, thereby further slowing down the network.</p>

      <p>WRED is a congestion avoidance mechanism that addresses packet loss caused by tail drop, which occurs when new incoming packets are dropped because a router's queues are too full to accept them. Tail drop causes a problem called global TCP synchronization, whereby all of the TCP sources on a network reduce traffic flow during periods of congestion and then the TCP sources increase traffic flow when the congestion is reduced, which again causes congestion and dropped packets. When WRED is implemented, you can configure different tail drop thresholds for each IP precedence or Differentiated Services Code Point (DSCP) value so that lower-priority traffic is more likely to be dropped than higher-priority traffic, thereby avoiding global TCP synchronization.</p>

    <p>WRED does not address header size. To compress the header of TCP packets, you should implement TCP header compression. Because TCP header compression compresses only the header, not the entire packet, TCP header compression works best for packets with small payloads, such as those carrying interactive data.</p>

    <p>WRED does not address the order in which TCP packets arrive. TCP packets can arrive in any order because each packet is numbered with a sequence number. When the TCP packets arrive at their destination, TCP rearranges the packets into the correct order.</p>

    <p>Although it is possible for TCP packets to require a higher priority than User Datagram Protocol (UDP) packets, it is also possible for UDP packets to require a higher priority than TCP packets. UDP traffic that requires a high priority includes Voice over IP (VoIP) traffic and real-time multimedia traffic. You should avoid placing TCP and UDP traffic in the same traffic class, because doing so can cause TCP starvation. UDP traffic is not aware of packet loss due to congestion control mechanisms, so devices sending UDP traffic might not reduce their transmission rates. This behavior causes the UDP traffic to dominate the queue and prevent TCP traffic from resuming a normal flow.</p>`,
  
  reference: [
    {
      title:  "Boson CCNA Curriculum 200-301",
      description: "Module 7: IP Services, Congestion Avoidance"
    },
    {
      title:  "Cisco",
      description: "Congestion Avoidance Overview"
    }
  ]
},

{
  id: 666,
  category: "Network Access",
  questionType: "Single-select",
  question: `<p>You issue the <strong>show cdp neighbors</strong> command on RouterB and receive the following output:</p>

<pre>RouterB#show cdp neighbors
Capability Codes: R - Router, T - Trans Bridge, B - Source Route
Bridge
              S - Switch, H - Host, I - IGMP, r - Repeater

Device ID  Local Intrfce  Holdtime Capability  Platform     Port ID
Boson-1    Gi0 0/1        117         S I      WS-C2960-2  Gi0 0/2
Boson-2    Fa0 0/1        102       R S I      1841        Fa0 0/2</pre>

<p>Which of the following interfaces on RouterB is connected to another router?  (Select the best answer.)</p>`,
  
  options: [
    "Gi0/2",
    "Fa0/1",
    "Fa0/2",
    "Gi0/1"
  ],
  
  correctAnswer: 1,
  
  explanation: `<p>The Fa0/1 interface on RouterB is connected to another router.  In the output of the <strong>show cdp neighbors</strong> command, the <strong>Local Intrfce</strong> field indicates the interface on the local device.  The device named Boson-2 is a router, as indicated by the <strong>Capability</strong> field, and it is a Cisco 1841 router, as indicated by the <strong>Platform</strong> field.  Therefore, the Fa0/1 interface of RouterB is connected to Boson-2.</p>

<p>The Fa0/2 interface on RouterB is not connected to another router.  In the output of the <strong>show cdp neighbors</strong> command, the <strong>Port ID</strong> field indicates an interface on the neighboring device, not an interface on the local device. Therefore, the Fa0/1 interface of RouterB is connected to the Fa0/2 interface of Boson-2.</p>

<p>The Gi0/1 interface of RouterB is not connected to a router; it is connected to a switch. The device named Boson-1 is a switch, as indicated by the <strong>Capability</strong> field, and it is a Cisco 2960 switch, as indicated by the <strong>Platform</strong> field. The <strong>Local Intrfce</strong> field indicates that the Gi0/1 interface of RouterB is connected to Boson-1, and the <strong>Port ID</strong> field indicates that the Gi0/2 interface of Boson-1 is connected to RouterB.</p>`,
  
  reference: [
    {
      title:  "Boson CCNA Curriculum 200-301",
      description: "Module 5:  Switching and Network Access, Displaying CDP and LLDP Neighbors"
    },
    {
      title: "CCNA 200-301 Official Cert Guide",
      description: "Volume 2, Chapter 9: Device Management Protocols, Examining Information Learned by CDP"
    },
    {
      title: "Cisco:  Cisco IOS Cisco Discovery Protocol Command Reference",
      description: "show cdp neighbors"
    },
    {
      title: "Cisco: Configuring CDP",
      description: "Monitoring and Maintaining CDP"
    }
  ]
},

{
  id: 638,
  category: "Network Fundamentals",
  questionType: "Single-select",
  question: `<p>You issue the following commands on a Cisco router's FastEthernet 0/0 interface:</p>

<pre>ipv6 enable
no shutdown</pre>

<p>The interface on the other side of the link is not yet configured. In addition, there is no DHCPv6 server on the network. </p>

<p>How many IPv6 addresses are configured on the interface?  (Select the best answer. )</p>`,
  
  options: [
    "two",
    "none",
    "three",
    "one"
  ],
  
  correctAnswer: 0,
  
  explanation: `<p>One Internet Protocol version 6 (IPv6) address is configured on the interface after you issue the <strong>ipv6 enable</strong> command on the Cisco router's FastEthernet 0/0 interface.  There are three ways to enable IPv6 on an interface:  by manually assigning an IPv6 address to the interface, by automatically assigning an IPv6 address to the interface, or by issuing the <strong>ipv6 enable</strong> command on the interface. Once IPv6 is enabled on an interface, it can use its automatically derived, link-local IPv6 address to communicate with other IPv6 enabled devices on directly connected networks.</p>

<p>IPv6 link-local unicast addresses are used for communication over a single link.  Routers do not forward traffic sent to a link-local address; the traffic stays on the local link. IPv6 link-local unicast addresses are often used for neighbor discovery.  These addresses usually begin with FE8, as specified in Request for Comments (RFC) 4291.</p>

<p>To manually assign an IPv6 address to an interface, you can issue the <strong>ipv6 address <em>address prefix-length</em> [eui-64]</strong> command.  The <strong>eui-64</strong> keyword configures a static IPv6 prefix but allows the router to automatically generate a 64-bit interface ID known as an extended unique identifier (EUI)-64 interface ID; the EUI-64 interface ID is based on the interface's Media Access Control (MAC) address.</p>

<p>To automatically assign an IPv6 address to an interface, you can implement Stateless Address Automatic Configuration (SLAAC), Dynamic Host Configuration Protocol version 6 (DHCPv6), or a combination of the two.  SLAAC configurations occur based on information that is sent in router advertisements from an IPv6 gateway operating on the same network segment.  When the link-local interface is active on the segment, it can announce itself and receive router advertisements from an IPv6 router that is operating on the same segment.  If an IPv6 router exists and can function as an IPv6 gateway, it will advertise that functionality as well as the globally unique prefix with which it is configured and with which connected nodes should be used.  The <strong>ipv6 address autoconfig</strong> command configures an interface to automatically assign itself a global unicast IPv6 address by using SLAAC.</p>

<p>The same <strong>ipv6 address autoconfig</strong> command that enables SLAAC on an interface will enable the interface to obtain additional information from a DHCPv6 server if a DHCPv6 server exists on the network and is configured to send nonaddrss information. The <strong>ipv6 address dhcp</strong> command configures a DHCPv6 client interface to use stateful DHCPv6 addressing, which configures addressing information and extra information from the DHCPv6 server. </p>

<p>Unlike with IP version 4 (IPv4), it is possible to configure more than one IPv6 address on an interface without defining the addresses as primary or secondary. IPv4-only interfaces can be configured with only one primary IPv4 address.  However, in this scenario, the <strong>ipv6 enable</strong> command only configures a link-local IPv6 address.  Although it is possible for an interface to have more than two IPv6 addresses, that is not the case in this scenario.</p>`,
  
  reference: [
    {
      title: "CCNA 200-301 Official Cert Guide",
      description: "Volume 1, Chapter 24:  Implementing IPv6 Addressing on Routers, Routing IPv6 with Only Link-Local Addresses on an Interface"
    },
    {
      title: "Cisco:  Configuring IPv6 Routing",
      description: "Configuring IPv6 Addressing and Enabling IPv6 Routing"
    }
  ]
},

{
  id: 432,
  category: "Security Fundamentals",
  questionType: "Multi-select",
  question: `<p>You are implementing common Layer 2 security measures on a Cisco switch. You create a new VLAN with an ID of 4.  No devices operate on VLAN 4. Next, you issue the following commands on a switch interface:</p>

<pre>switchport access vlan 4
switchport nonegotiate</pre>

<p>Which of the following Layer 2 security measures are you implementing?  (Select 2 choices. )</p>`,
  
  options: [
    "disabling port security on an access port",
    "disabling DTP on a port",
    "configuring the port mode manually",
    "moving the port to an unused VLAN",
    "disabling an unused port"
  ],
  
  correctAnswer: [1, 3],
  
  explanation: `<p>You are disabling Dynamic Trunking Protocol (DTP) on a port when you issue the <strong>switchport nonegotiate</strong> command while you are implementing common Layer 2 security measures on a Cisco switch. In addition, you are moving the port to an unused virtual local area network (VLAN). You should disable or limit the use of certain protocols and features when an interface on a Cisco switch is an active port. Before you deploy a switch on a network, you should take steps to ensure that every trunk port and access port on the switch is secured and that every unused port on the switch is disabled.</p>

<p>By default, all interfaces on a Cisco switch will use DTP, a dynamic-trunking-negotiation protocol.  When you deploy a switch on a network, you should ensure that every active interface should be a trunk port or an access port. The transmission of DTP packets over an interface can be exploited by a malicious user to obtain information about the network or to convert an interface that should be an access port into a trunked port.  You should issue the <strong>switchport nonegotiate</strong> command on a manually configured port to prevent any attempts by the switch to negotiate by using DTP.</p>

<p>Moving an unused port to an unused VLAN creates a logical barrier that prevents rogue devices from communicating on the network should such a device connect to the port. To move an access port to an unused VLAN, you should issue the <strong>switchport access vlan <em>vlan-id</em></strong> command on the port, where <em>vlan-id</em> is the ID of the unused VLAN.  When you move an unused port to an unused VLAN, you should also manually configure the port as an access port by issuing the <strong>switchport mode access</strong> command and shut down the port by issuing the <strong>shutdown</strong> command.</p>

<p>You are not configuring the port mode manually by issuing the commands in this scenario. To manually configure a trunk port, you should first issue the <strong>switchport trunk encapsulation <em>protocol</em></strong> command in interface configuration mode, where <em>protocol</em> is the trunk encapsulation protocol you want to use, and then issue the <strong>switchport mode trunk</strong> command in interface configuration mode. To manually configure an access port, you should issue the <strong>switchport mode access</strong> command in interface configuration mode.  Manually configuring interfaces to use either trunk mode or access mode effectively disables DTP and ensures that the traffic on the port matches the interface type.  In this scenario, you have issued the <strong>switchport nonegotiate</strong> command on a manually configured trunk port to prevent any attempts by the switch to negotiate by using DTP, because a manually configured trunk port will continue to send DTP frames. </p>

<p>You are not disabling an unused port by issuing the commands in this scenario.  Disabling an unused port creates a barrier that prevents rogue devices from communicating on the network should such a device connect to the port. To disable an unused port on a switch, you should issue the <strong>shutdown</strong> command on that port. To verify that a port is in the shutdown state, you should issue the <strong>show interfaces <em>type-number</em></strong> command, where <em>type</em> and <em>number</em> specify the interface you want to show.  A port that has been shut down will be reported as administratively down by the <strong>show interfaces <em>type number</em></strong> command.</p>

<p>You are not enabling port security on an access port by issuing the commands in this scenario. To protect a switch interface against Media Access Control (MAC) flooding attacks, you should enable port security on all access mode interfaces on the switch.  Issuing the <strong>switchport port-security</strong> command in interface configuration mode enables port security with default settings. Port security can be further configured by issuing the <strong>switchport port-security mac-address <em>mac-address</em></strong> command, the <strong>switchport port-security maximum <em>maximum-number-of-mac-addresses</em></strong> command, and the <strong>switchport port-security violation {protect | restrict | shutdown}</strong> command.</p>

<p>When enabled with its default settings, port security will shut down a port on which a violation occurs. In addition, port security will allow only the first MAC address to connect to the port to communicate on it. </p>`,
  
  reference: [
    {
      title: "Boson CCNA Curriculum 200-301",
      description: "Module 5: Switching and Network Access, Understanding and Preventing VLAN Attacks"
    },
    {
      title: "Cisco:  Implementation of Security",
      description: "Layer 2 Security Design"
    }
  ]
},

{
  id:24,
  category: "IP Connectivity",
  questionType: "Single-select",
  question: `<p>You issue the <strong>show ip ospf neighbor</strong> command on Router1 and see that Router2 is in the <strong>INIT/</strong> - state. </p>

<p>Which of the following statements is true regarding Router2?  (Select the best answer. )</p>`,
  
  options: [
    "Router1 and Router2 are normal neighbor routers that are operating correctly.",
    "The MTU settings are mismatched between Router1 and Router2.",
    "Router2 is the DR for the segment.",
    "Router1 is the DR for the segment."
  ],
  
  correctAnswer: 0,
  
  explanation:  `<p>Router1 and Router2 are normal neighbor routers that are operating correctly.  Neighbor routers that are neither the designated router (DR) nor the backup designated router (BDR) remain in the 2-Way state. The DR and BDR are elected for broadcast and nonbroadcast multiaccess (NBMA) networks. </p>

<p>Neither Router1 nor Router2 is the DR for the segment. If Router1 were the DR, the output of the <strong>show ip ospf neighbor</strong> command would show Router2 in the <strong>FULL/-</strong> state. If Router2 were the DR, the output of the <strong>show ip ospf neighbor</strong> command would show Router2 in the <strong>FULL/DR</strong> state.</p>

<p>The maximum transmission unit (MTU) settings are not mismatched between Router1 and Router2. If the MTU settings were mismatched, the routers would be stuck in the Exstart, Exchange, or Loading states. </p>

<p>When an OSPF neighbor router is powered on, it transitions through the following neighbor states: </p>

<ul>
  <li>Down</li>
  <li>Init</li>
  <li>2-Way</li>
  <li>Exstart</li>
  <li>Exchange</li>
  <li>Loading</li>
  <li>Full</li>
</ul>

<p>An OSPF neighbor router begins in the Down state. A neighbor in the Down state has not yet sent a Hello packet. </p>

<p>When a Hello packet is received from the neighbor router but the Hello packet does not contain the receiving router's ID, the neighbor router is in the Init state. The receiving router replies to the neighbor router with a Hello packet that contains the neighbor router's ID as an acknowledgment that the receiving router received the neighbor's Hello packet.  If a router is stuck in the Init state, the problem is most likely caused by a misconfigured or missing <strong>neighbor</strong> statement.  In addition, a router stuck in the Init state could have Hello packets but has not received any from the neighbor router.</p>

<p>The neighbor router replies with a Hello packet that contains the receiving router's ID.  When this occurs, the neighbor router is in the 2-Way state. At the end of the 2-Way state, the DR and BDR are elected for broadcast and nonbroadcast multiaccess (NBMA) networks. On broadcast and NBMA networks, neighbor routers will proceed to the Full state only with the DR and BDR; other neighbor adjacencies will remain in the 2-Way state.  If all routers on a segment have a router priority set to 0, neighbor routers will remain in the 2-Way state because a DR cannot be elected.  The DR and BDR are elected based on router priority.  Routers that have a priority set to 0, which prevents any of them from becoming the DR or BDR. </p>

<p>After the DR and BDR are elected, neighbor routers form master-slave relationships in order to establish the method for exchanging link-state information.  Routers in this state are in the Exstart state. The router with the higher router ID becomes the master.  If a router is stuck in the Exstart state, the problem with mismatched maximum transmission unit (MTU) settings or duplicate router IDs. </p>

<p>Routers then exchange database description (DBD) packets.  DBD packets are link-state advertisement (LSA) headers that describe the contents of the link-state database (LSDB). Routers in this state are in the Exchange state. If a router is stuck in the Exchange state, you should verify whether there is a problem with mismatched MTU settings or duplicate router IDs.</p>

<p>Routers then send link-state request (LSR) packets to request the contents of the neighbor router's OSPF databases. The neighbor router replies with link-state update (LSU) packets that contain the routing database information. Routers in this state are in the Loading state. If a router is stuck in the Loading state, you should verify whether there is a problem with mismatched MTU settings or duplicate router IDs.</p>

<p>After the OSPF databases of neighbor routers are fully synchronized, the routers transition to the Full state.  Routers in the Full state are fully adjacent with each other.  OSPF routers periodically send Hello packets to its neighbors to indicate that it is still functional.  If a router does not receive a Hello packet from a neighbor within the dead timer interval, the neighbor router will transition back to the Down state. </p>`,
  
  reference: [
    {
      title: "Boson CCNA Curriculum 200-301",
      description:  "Module 6: IP Routing, Understanding OSPF Adjacencies"
    },
    {
      title: "Cisco:  OSPF Neighbor States",
      description: ""
    }
  ]
},

{
  id: 448278444,
  category: "Security Fundamentals",
  questionType:  "Single-select",
  question: `<p>You are configuring security on a new WLAN by using the WLC GUI. </p>

<p>Which of the following security settings are you most likely to configure by using the <strong>Layer 3 Security</strong> drop-down list box on the <strong>Layer 3</strong> tab?   (Select the best answer. )</p>`,
  
  options: [
    "VPN Pass-Through",
    "Web Passthrough",
    "Web Authentication",
    "WPA+WPA2"
  ],
  
  correctAnswer: 0,
  
  explanation:  `<p>When you are configuring a new wireless local area network (WLAN), you are most likely to configure the <strong>VPN Pass-Through</strong> setting by using the <strong>Layer 3 Security</strong> drop-down list box on the <strong>Layer 3</strong> tab of the Cisco Wireless LAN Controller (WLC) graphical user interface (GUI). There are two types of WLANs that you can configure by using the WLC GUI: a WLAN and a Guest LAN. The <strong>VPN Pass-Through</strong> setting is only available when you are configuring a WLAN. </p>

<p>When you configure a new WLAN by using the WLC GUI, you can configure security settings by clicking the new WLAN's <strong>Security</strong> tab. By default, the <strong>Layer 2</strong> tab is selected when you click the <strong>Security</strong> tab.   However, it is not possible to configure Layer 2 security on a Guest LAN. </p>

<p>On the <strong>Layer 2</strong> tab of the <strong>Security</strong> tab, you can select one of the following Layer 2 wireless security features from the <strong>Layer 2 Security</strong> drop-down list box: </p>

<ul>
  <li><strong>None</strong>, which disables Layer 2 security and allows open authentication to the WLAN</li>
  <li><strong>WPA+WPA2</strong>, which enables Layer 2 security by using Wi-Fi Protected Access (WPA) or the more secure WPA2</li>
  <li><strong>802.1X</strong>, which enables Layer 2 security by using Extensible Authentication Protocol (EAP) authentication combined with a dynamic Wired Equivalent Privacy (WEP) key</li>
  <li><strong>Static WEP</strong>, which enables Layer 2 security by using a static shared WEP key</li>
  <li><strong>Static WEP + 802.1X</strong>, which enables Layer 2 security by using either a static shared WEP key or EAP authentication</li>
  <li><strong>CKIP</strong>, which enables Layer 2 security by using the Cisco Key Integrity Protocol (CKIP)</li>
  <li><strong>None + EAP Passthrough</strong>, which enables Layer 2 security by using open authentication combined with remote EAP authentication</li>
</ul>

<p>There are two different sets of Layer 3 security features that you can configure on a Cisco WLC:  one set for a WLAN and one set for a Guest LAN.  Depending on which type of WLAN you create and which Layer 2 security options you have selected, you can select one of the following Layer 3 wireless security features from the <strong>Layer 3 Security</strong> drop-down list box on the <strong>Layer 3</strong> tab of the <strong>Security</strong> tab in the WLC GUI: </p>

<ul>
  <li><strong>None</strong>, which disables Layer 3 security no matter which Layer 2 security option is configured and regardless of whether you are configuring a WLAN or a Guest LAN</li>
  <li><strong>IPSec</strong>, which enables Layer 3 security for WLANs by using Internet Protocol Security (IPSec)</li>
  <li><strong>VPN Pass-Through</strong>, which enables Layer 3 security for WLANs by allowing a client to establish a connection with a specific virtual private network without prompting for a user name and password</li>
  <li><strong>Web Authentication</strong>, which enables Layer 3 security for Guest LANs by prompting for a user name and password when a client connects to the network</li>
  <li><strong>Web Passthrough</strong>, which enables direct access to the network for Guest LANs without prompting for a user name and password</li>
</ul>

<p>Not every Layer 3 security mechanism is compatible with every Layer 2 security mechanism. It is therefore important to first configure Layer 2 security options before you attempt to configure Layer 3 security options.</p>`,
  
  reference: [
    {
      title: "Boson CCNA Curriculum 200-301",
      description:  "Module 8: Security Fundamentals, Configuring Cisco WLAN Layer 3 Security"
    },
    {
      title: "CCNA 200-301 Official Cert Guide",
      description: "Volume 1, Chapter 29: Building a Wireless LAN, Configuring WLAN Security"
    },
    {
      title: "Cisco:  Wireless LAN Controller Layer 2 Layer 3 Security Compatibility Matrix",
      description: "Wireless LAN Controller Layer 2 – Layer 3 Security Compatibility Matrix"
    },
    {
      title: "Cisco: WLANs Tab",
      description: ""
    }
  ]
},

{
  id: 642,
  category: "Network Fundamentals",
  questionType:  "Multi-select",
  question: `<p>Which of the following statements about unique local unicast IPv6 addresses are true?  (Select 2 choices. )</p>`,
  
  options: [
    "They are assigned by ICANN.",
    "They are unique only within an organization.",
    "They can communicate only over a single link.",
    "They are equivalent to IPv4 multicast addresses.",
    "The first 7 bits of the prefix are always 1111110."
  ],
  
  correctAnswer: [1, 4],
  
  explanation: `<p>Internet Protocol version 6 (IPv6) unique local unicast addresses are unique only within an organization. They are similar to IP version 4 (IPv4) Request for Comments (RFC) 1918 addresses in that they are assigned by a local administrator and must be unique only within an organization. These addresses always begin with FC or FD because the first 7 bits of an IPv6 unique local unicast address are always 1111110. Unique local unicast addresses require a randomly generated prefix to ensure that they are unique.  Because of the random nature of the network prefix, unique local unicast addresses are not aggregatable and cannot be summarized.</p>

<p>IPv6 global unicast addresses, not unique local addresses, are assigned by the Internet Corporation for Assigned Names and Numbers (ICANN). The IPv6 prefix of 2000::/3 is the global unicast IPv6 prefix.  IPv6 global unicast addresses are similar to IPv4 global unicast addresses in that they are globally routable.  These addresses are assigned by ICANN to the Regional Internet Registries (RIRs), which distribute the addresses to Internet service providers (ISPs). The ISPs then distribute address ranges to organizations.  IPv6 global unicast addresses always begin with a 2 or a 3 because the first 3 bits of an IPv6 global unicast address are always 001. </p>

<p>IPv6 multicast addresses are similar to IPv4 multicast addresses.  The IPv6 prefix FF00::/8 is used for multicast addresses, which are used for one-to-many communication. IPv6 addresses in the FF00::/8 range begin with the characters FF00 through FFFF. However, certain address ranges are used to indicate the scope of the multicast address. The following IPv6 multicast scopes are defined: </p>

<ul>
  <li>FF01::/16 – node-local</li>
  <li>FF02::/16 – link-local</li>
  <li>FF05::/16 – site-local</li>
  <li>FF08::/16 – organization-local</li>
  <li>FF0E: :/16 – global</li>
</ul>

<p>These addresses always begin with FF because the first 8 bits of an IPv6 multicast address are always 11111111.</p>

<p>IPv6 link-local unicast addresses, not unique local addresses, are used for communication over a single link. IPv6 link-local unicast addresses have a prefix that begins with FE80 because the first 10 bits of an IPv6 link-local unicast address are traffic on the local link. IPv6 link-local unicast addresses are often used for neighbor discovery.  These addresses usually begin with FE8, as specified in RFC 4291. Technically, these addresses could begin with FE9, FEA, or FEB because there are four possible combinations of the first 12 bits of the address. The first 10 bits of an IPv6 link-local unicast address are always 1111111010, or FE, which means that link-local IPv6 addresses could technically begin with any of the following: </p>

<ul>
  <li>1111 1110 1000, which is equal to FE8</li>
  <li>1111 1110 1001, which is equal to FE9</li>
  <li>1111 1110 1010, which is equal to FEA</li>
  <li>1111 1110 1011, which is equal to FEB</li>
</ul>`,
  
  reference: [
    {
      title: "Boson CCNA Curriculum 200-301",
      description:  "Module 2: Network Addressing and Transport, Understanding IPv6 Address Types"
    },
    {
      title: "CCNA 200-301 Official Cert Guide",
      description:  "Volume 1, Chapter 23: IPv6 Addressing and Subnetting, Unique Local Unicast Addresses"
    },
    {
      title: "RfPE: IPv6 Address Types (PDF)",
      description: ""
    }
  ]
},

{
  id: 642,
  category: "Network Fundamentals",
  questionType:  "Multi-select",
  question: `<p>Which of the following statements about unique local unicast IPv6 addresses are true?  (Select 2 choices. )</p>`,
  
  options: [
    "They are assigned by ICANN.",
    "They are unique only within an organization.",
    "They can communicate only over a single link.",
    "They are equivalent to IPv4 multicast addresses.",
    "The first 7 bits of the prefix are always 1111110."
  ],
  
  correctAnswer: [1, 4],
  
  explanation: `<p>Internet Protocol version 6 (IPv6) unique local unicast addresses are unique only within an organization. They are similar to IP version 4 (IPv4) Request for Comments (RFC) 1918 addresses in that they are assigned by a local administrator and must be unique only within an organization. These addresses always begin with FC or FD because the first 7 bits of an IPv6 unique local unicast address are always 1111110. Unique local unicast addresses require a randomly generated prefix to ensure that they are unique.  Because of the random nature of the network prefix, unique local unicast addresses are not aggregatable and cannot be summarized.</p>

<p>IPv6 global unicast addresses, not unique local addresses, are assigned by the Internet Corporation for Assigned Names and Numbers (ICANN). The IPv6 prefix of 2000::/3 is the global unicast IPv6 prefix.  IPv6 global unicast addresses are similar to IPv4 global unicast addresses in that they are globally routable.  These addresses are assigned by ICANN to the Regional Internet Registries (RIRs), which distribute the addresses to Internet service providers (ISPs). The ISPs then distribute address ranges to organizations.  IPv6 global unicast addresses always begin with a 2 or a 3 because the first 3 bits of an IPv6 global unicast address are always 001. </p>

<p>IPv6 multicast addresses are similar to IPv4 multicast addresses.  The IPv6 prefix FF00::/8 is used for multicast addresses, which are used for one-to-many communication. IPv6 addresses in the FF00::/8 range begin with the characters FF00 through FFFF. However, certain address ranges are used to indicate the scope of the multicast address. The following IPv6 multicast scopes are defined: </p>

<ul>
  <li>FF01::/16 – node-local</li>
  <li>FF02::/16 – link-local</li>
  <li>FF05::/16 – site-local</li>
  <li>FF08::/16 – organization-local</li>
  <li>FF0E: :/16 – global</li>
</ul>

<p>These addresses always begin with FF because the first 8 bits of an IPv6 multicast address are always 11111111.</p>

<p>IPv6 link-local unicast addresses, not unique local addresses, are used for communication over a single link. IPv6 link-local unicast addresses have a prefix that begins with FE80 because the first 10 bits of an IPv6 link-local unicast address are traffic on the local link. IPv6 link-local unicast addresses are often used for neighbor discovery.  These addresses usually begin with FE8, as specified in RFC 4291. Technically, these addresses could begin with FE9, FEA, or FEB because there are four possible combinations of the first 12 bits of the address. The first 10 bits of an IPv6 link-local unicast address are always 1111111010, or FE, which means that link-local IPv6 addresses could technically begin with any of the following: </p>

<ul>
  <li>1111 1110 1000, which is equal to FE8</li>
  <li>1111 1110 1001, which is equal to FE9</li>
  <li>1111 1110 1010, which is equal to FEA</li>
  <li>1111 1110 1011, which is equal to FEB</li>
</ul>`,
  
  reference: [
    {
      title: "Boson CCNA Curriculum 200-301",
      description:  "Module 2: Network Addressing and Transport, Understanding IPv6 Address Types"
    },
    {
      title: "CCNA 200-301 Official Cert Guide",
      description:  "Volume 1, Chapter 23: IPv6 Addressing and Subnetting, Unique Local Unicast Addresses"
    },
    {
      title: "RfPE: IPv6 Address Types (PDF)",
      description: ""
    }
  ]
},

{
  id: 458,
  category:  "Automation and Programmability",
  questionType: "Matching",
  question: `<p>To complete this question, click <strong>Launch Simulator</strong> and follow the on-screen instructions. </p>

<p>Match each term on the left with its correct definition on the right.</p>`,
  
  // For matching questions, we structure data differently
  matchingPairs: {
    terms: [
      { id: "overlay", text: "overlay" },
      { id: "underlay", text: "underlay" },
      { id: "northbound", text: "northbound API" },
      { id: "fabric", text: "fabric" },
      { id: "southbound", text: "southbound API" }
    ],
    definitions: [
      { id: "def1", text: "creates VXLAN tunnels between SDA switches", correctMatch: "overlay" },
      { id:  "def2", text: "is a collection of devices that comprises the IP network that connects to each fabric node", correctMatch: "underlay" },
      { id: "def3", text: "enables an SDN controller to communicate with applications in the application plane", correctMatch: "northbound" },
      { id: "def4", text: "is the entirety of the overlay network and the underlay network", correctMatch: "fabric" },
      { id:  "def5", text: "enables an SDN controller to communicate with devices in the data plane", correctMatch:  "southbound" }
    ]
  },
  
  correctAnswer: {
    overlay: "def1",
    underlay: "def2",
    northbound:  "def3",
    fabric:  "def4",
    southbound: "def5"
  },
  
  explanation: `<p>A Software-Defined Networking (SDN) controller uses two different sets of Application Programming Interfaces (APIs): one set to communicate with applications and another set to communicate with devices in the data plane.  <strong>Northbound APIs</strong> enable an SDN controller to communicate with applications in the application plane.  Applications use northbound APIs to send requests or instructions to the SDN controller, which uses that information to modify and manage network flow.</p>

<p><strong>Southbound APIs</strong> enable an SDN controller to communicate with devices in the data plane.  In both Software-Defined Access (SDA) and SDN deployments, the controller communicates with devices by using a southbound API. Communication with applications and user interfaces is accomplished by using a northbound API.</p>

<p>Cisco SDA is a Cisco-developed SDN for building local area networks (LANs) by using policies and automation. The Cisco Digital Network Architecture (DNA) controller, which is similar to an SDN controller, is the central component of a Cisco SDA network.  Cisco DNA is a software-centric network architecture that uses a combination of APIs and a graphical user interface (GUI) to simplify network operations.</p>

<p>The <strong>overlay network</strong> creates Virtual Extensible LAN (VXLAN) tunnels between Cisco SDA switches. The tunnels send and receive traffic between fabric endpoints. The <strong>underlay network</strong>, on the other hand, is a more traditional network configuration of switches. It is a collection of devices, interfaces, and media that comprises the Internet Protocol (IP) network that connects each fabric node. The underlay network is part of a dynamic discovery process involved in creating the overlay network's VXLAN tunnels. When an endpoint in a Cisco SDA network sends traffic to another endpoint, the traffic flows from the endpoint through the overlay network's VXLAN tunnels.</p>

<p>The <strong>fabric</strong> is the entirety of the overlay network and the underlay network in a Cisco SDA network.</p>`,
  
  reference: [
    {
      title:  "Boson CCNA Curriculum 200-301",
      description: "Module 9: Automation and Programming, SDN and Cisco SDA"
    },
    {
      title: "Boson CCNA Curriculum 200-301",
      description:  "Module 9: Automation and Programming, Northbound APIs"
    },
    {
      title: "Boson CCNA Curriculum 200-301",
      description: "Module 9: Automation and Programming, Southbound APIs"
    },
    {
      title: "CCNA 200-301 Official Cert Guide",
      description: "Volume 2, Chapter 16: Introduction to Controller-Based Networking, Controllers and Software-Defined Architecture"
    },
    {
      title: "CCNA 200-301 Official Cert Guide",
      description: "Volume 2, Chapter 17: Cisco Software-Defined Access (SDA), SDA Fabric, Underlay, and Overlay"
    }
  ]
},

{
  id: 47,
  category: "IP Services",
  questionType: "Single-select",
  question: `<p>You want to configure SSH for incoming VTY connections on a new router. The router is running a K9 IOS image but has not yet been configured with a host name, a domain name, or an RSA key pair. In addition, the VTY lines are not yet configured to accept incoming SSH connections. </p>

<p>You issue the <strong>crypto key generate rsa</strong> command from global configuration mode. </p>

<p>Which of the following messages will you most likely receive?   (Select the best answer. )</p>`,
  
  options: [
    "Please enable SSH as a transport mode.",
    "The name for the keys will be.",
    "Please define a domain-name first.",
    "Please define a hostname other than Router.",
    "Please create RSA keys to enable SSH."
  ],
  
  correctAnswer: 3,
  
  explanation: `<p>You will most likely receive the <strong>Please define a hostname other than Router</strong> message when you issue the <strong>crypto key generate rsa</strong> command, because you have not configured the router with a host name other than the default name of Router.  To configure a router with a host name other than the default, you should issue the <strong>hostname <em>host-name</em></strong> command from global configuration mode.</p>

<p>To enable Secure Shell (SSH) for virtual terminal (VTY) lines on a Cisco router, you should complete the following steps:</p>

<ol>
  <li>Configure the router with a host name other than Router by issuing the <strong>hostname</strong> command. </li>
  <li>Configure the router with a domain name by issuing the <strong>ip domain-name</strong> command. </li>
  <li>Generate an RSA key pair for the router by issuing the <strong>crypto key generate rsa</strong> command.</li>
  <li>Configure the VTY lines to use SSH by issuing the <strong>transport input ssh</strong> command from line configuration mode.</li>
</ol>

<p>SSH is often used as a secure replacement for Telnet to manage network devices. In order for SSH to be enabled on a Cisco device, the device must be running a K9 IOS image, which provides cryptographic functionality.</p>

<p>You will not receive the <strong>The name for the keys will be: </strong> message when you issue the <strong>crypto key generate rsa</strong> command in this scenario.  However, if you had already configured the router with a valid host name and a domain name, you would have received the <strong>The name for the keys will be:</strong> message after issuing the <strong>crypto key generate rsa</strong> command.  After you specify the name for the keys, you will be prompted for the modulus length. </p>

<p>You will not receive the <strong>Please define a domain-name first</strong> message when you issue the <strong>crypto key generate rsa</strong> command in this scenario. However, if you had configured the router with a valid host name but had not configured the router with a domain name, you would have received the <strong>Please define a domain-name first</strong> message after issuing the <strong>crypto key generate rsa</strong> command. In this scenario, you have configured neither the domain name nor the host name.  To configure a router with a domain name, you should issue the <strong>ip domain-name <em>domain-name</em></strong> command from global configuration mode. </p>

<p>You will not receive the <strong>Please create RSA keys to enable</strong> SSH message when you issue the <strong>crypto key generate rsa</strong> command in this scenario. However, if you had issued another command related to SSH, such as the <strong>ip ssh time-out 60</strong> command, but had not yet enabled SSH on the router, you would have received the <strong>Please create RSA keys to enable</strong> SSH message. </p>

<p>You will not receive the <strong>Please enable SSH as a transport mode</strong> message when you issue the <strong>crypto key generate rsa</strong> command in this scenario. The <strong>Please enable SSH as a transport mode</strong> message is not a warning message that is displayed on Cisco routers. You can issue the <strong>transport input ssh</strong> command to configure SSH as the transport mode for VTY lines. </p>`,
  
  reference: [
    {
      title: "Boson CCNA Curriculum 200-301",
      description: "Module 7: IP Services, SSH Configuration"
    },
    {
      title: "CCNA 200-301 Official Cert Guide",
      description: "Volume 1, Chapter 6: Configuring Basic Switch Management, Securing Remote Access with Secure Shell"
    },
    {
      title: "Cisco:  Configure SSH on Routers and Switches",
      description: "Set Up an IOS Router or Switch as SSH Client",
      link: "https://www.cisco.com/c/en/us/support/docs/security-vpn/secure-shell-ssh/4145-ssh. html"
    }
  ]
},

{
  id: 450,
  category: "Security Fundamentals",
  questionType: "Single-select",
  question:  `<p>You are configuring Layer 2 security on a WLAN by using the WLC GUI. You select <strong>WPA+WPA2</strong> from the <strong>Layer 2 Security</strong> drop-down list box. You want to configure the WPA2 key in hexadecimal format. </p>

<p>Which of the following WPA2 key management methods should you select from the <strong>Auth Key Mgmt</strong> drop-down list box?  (Select the best answer. )</p>`,
  
  options: [
    "PSK",
    "CCKM",
    "802.1X+CCKM",
    "802.1X"
  ],
  
  correctAnswer: 0,
  
  explanation: `<p>You should select the <strong>PSK</strong> Wi-Fi Protected Access 2 (WPA2) key management method from the <strong>Auth Key Mgmt</strong> drop-down list box if you want to configure the WPA2 key in hexadecimal format. The <strong>PSK</strong> method configures WPA or WPA2 to use the Pre-Shared Key (PSK) key management method. This method requires that an administrator configure each wireless client that will connect to the network with the key that is configured on the Cisco Wireless LAN Controller (WLC). The PSK option supports key entry as either an ASCII passphrase from 8 through 63 characters in length or a key of 64 hexadecimal values.  Combining WPA or WPA2 with a PSK key management method is often known as WPA-PSK, or WPA Personal.</p>

<p>You should not select the <strong>802.1X</strong> key management method in this scenario. The Institute of Electrical and Electronics Engineers (IEEE) 802.1X standard defines a method of port-based network access control.  On Cisco wireless local area networks (WLANs), the 802.1X key management method is the default method for both WPA and WPA2. It typically requires a Remote Authentication Dial-In User Service (RADIUS) server and uses various Extensible Authentication Protocol (EAP) implementations to authenticate users.  Combining WPA or WPA2 with an 802.1X key management method is often known as WPA-8021X mode, or WPA Enterprise.</p>

<p>You should not select the <strong>CCKM</strong> key management method in this scenario. This option enables the Cisco Centralized Key Management (CCKM) key management method.  CCKM is a Cisco-proprietary fast-rekeying method that enables a wireless client to roam from one access point to another without requiring intervention from the WLC. CCKM is typically used to reduce delay when wireless clients transition between access points so that delay sensitive services, such as Voice over Internet Protocol (VoIP), operate smoothly. </p>

<p>You should not select the <strong>802.1X+CCKM</strong> key management method in this scenario. This option enables 802.1X clients to use the CCKM key management method to roam between access points without performing the complete authentication process again.  Normally, 802.1X clients mutually authenticate to a new access point.  This process likewise involves reauthenticating with the RADIUS server.  The 802.1X+CCKM key management method removes the need to reauthenticate with the RADIUS server, thus reducing the amount of time it takes for an 802.1X client to roam between access points.</p>`,
  
  reference: [
    {
      title: "Boson CCNA Curriculum 200-301",
      description:  "Module 8: Security Fundamentals, Configuring Cisco WLAN Layer 2 Security"
    },
    {
      title: "Cisco:  WLAN Security",
      description: "Configuring WPA1+WPA2 (GUI)",
      link: "https://www.cisco.com/c/en/us/td/docs/wireless/controller/8-5/config-guide/b_cg85/wlan_security. html"
    }
  ]
},

{
  id: 435,
  category: "Security Fundamentals",
  questionType: "Single-select",
  question:  `<p>Which of the following Layer 2 attacks uses the MAC address of another known host on the network in order to bypass port security measures?  (Select the best answer. )</p>`,
  
  options: [
    "MAC spoofing",
    "MAC flooding",
    "ARP poisoning",
    "DHCP spoofing",
    "VLAN hopping"
  ],
  
  correctAnswer: 0,
  
  explanation: `<p>In a Media Access Control (MAC) spoofing attack, an attacker uses the MAC address of another known host on the network in order to bypass port security measures. MAC spoofing can also be used to impersonate another host on the network.  Implementing port security with sticky secure MAC addresses can help mitigate MAC spoofing attacks. </p>

<p>In a MAC flooding attack, an attacker generates thousands of forged frames every minute with the intention of overwhelming the switch's MAC address table. Once this table is flooded, the switch can no longer make intelligent forwarding decisions and all traffic is flooded.  This allows the attacker to view all data sent through the switch because all traffic will be sent out each port.  Implementing port security can help mitigate MAC flooding attacks by limiting the number of MAC addresses that can be learned on each interface to a maximum of 128.  A MAC flooding attack is also known as a Content Addressable Memory (CAM) table overflow attack.</p>

<p>In an Address Resolution Protocol (ARP) poisoning attack, which is also known as an ARP spoofing attack, the attacker sends a gratuitous ARP (GARP) message to a host.  The GARP message associates the attacker's MAC address with the Internet Protocol (IP) address of a valid host on the network. Subsequently, traffic sent to the valid host address will go through the attacker's computer rather than directly to the intended recipient. Implementing Dynamic ARP Inspection (DAI) can help mitigate ARP poisoning attacks. </p>

<p>In a virtual local area network (VLAN) hopping attack, an attacker attempts to inject packets into other VLANs by accessing the VLAN trunk and double-tagging 802.1Q frames. A successful VLAN hopping attack enables an attacker to send traffic to other VLANs without the use of a router. You can prevent VLAN hopping by disabling Dynamic Trunking Protocol (DTP) on trunk ports, by changing the native VLAN, and by configuring user-facing ports as access ports. </p>

<p>In a Dynamic Host Configuration Protocol (DHCP) spoofing attack, an attacker installs a rogue DHCP server on the network in an attempt to intercept DHCP requests. The rogue DHCP server can then respond to the DHCP requests with its own IP address as the default gateway address; hence all traffic is routed through the rogue DHCP server. You should enable DHCP snooping to help prevent DHCP spoofing attacks. </p>`,
  
  reference: [
    {
      title: "Cisco:  Layer 2 Security Features on Cisco Catalyst Layer 3 Fixed Configuration Switches",
      description: "Configuration Example: Background Information",
      link: "https://www.cisco.com/c/en/us/support/docs/switches/catalyst-3750-series-switches/72846-layer2-secftrs-catl3fixed. html"
    },
    {
      title: "Cisco:  Implementation of Security",
      description: "Layer 2 Security Design",
      link: "https://www.cisco.com/c/en/us/td/docs/solutions/Enterprise/Security/TrustSec_1-99/L2_Sec/L2_Sec. html"
    }
  ]
},

{
  id: 85,
  category: "IP Services",
  questionType: "Multi-select",
  question: `<p>You want to configure your Cisco router to provide IP addresses to the computers on your network. The IP addresses should be assigned from the 192.168.1.0/26 address range. </p>

<p>Which of the following commands should you issue?   (Select 2 choices. )</p>`,
  
  options: [
    "network 192.168.1.0 255.255.255.192",
    "ip dhcp pool 1",
    "dhcp pool 1",
    "host 192.168.1.0 255.255.255.192",
    "ip address dhcp",
    "network 192.168.1.0 0.0.0.63"
  ],
  
  correctAnswer: [0, 1],
  
  explanation: `<p>To configure your Cisco router to provide Internet Protocol (IP) addresses to the computers on your network over Dynamic Host Configuration Protocol (DHCP), you should issue the <strong>ip dhcp pool 1</strong> command from global configuration mode and then issue the <strong>network 192.168.1.0 255.255.255.192</strong> command from DHCP pool configuration mode. The router will then provide IP addresses to hosts connected to the router interface that belongs to that subnet.  The syntax of the <strong>ip dhcp pool</strong> command is <strong>ip dhcp pool <em>name</em></strong> where <em>name</em> is the name of your DHCP pool.  The syntax of the <strong>network</strong> command is <strong>network <em>address</em> [<em>mask</em> | /<em>prefix</em>]</strong> where <em>address</em> is the network address, <em>mask</em> is the subnet mask, and <em>prefix</em> is the prefix length in Classless Inter-Domain Routing (CIDR) notation.</p>

<p>You should not issue the <strong>dhcp pool 1</strong> command, because it contains invalid syntax. To configure a Cisco router to become a DHCP server, you must issue the <strong>ip dhcp pool <em>name</em></strong> command. </p>

<p>You should not issue the <strong>network 192.168.1.0 0.0.0.63</strong> command, because the subnet mask is incorrectly specified as a wildcard mask. To configure your DHCP pool with addresses from the 192.168.1.0/26 range, you should issue the <strong>network 192.168.1.0 255.255.255.192</strong> command.  Alternatively, you can configure the DHCP pool using Classless Inter-Domain Routing (CIDR) notation by issuing the <strong>network 192.168.1.0 /26</strong> command.</p>

<p>You should not issue the <strong>host 192.168.1.0 255.255.255.192</strong> command.  The <strong>host</strong> command, when issued from DHCP pool configuration mode, is used to configure an IP address for a manual binding. A manual binding enables a device to always receive the same IP address from DHCP by associating a static IP address with the device's Media Access Control (MAC) address. To configure a manual binding, you should issue the <strong>host <em>address [mask | /prefix]</em></strong> command from DHCP pool configuration mode, where <em>address</em> is the address of the device, <em>mask</em> is the subnet mask, and <em>prefix</em> is the prefix length in CIDR notation.  Then you should issue the <strong>client-identifier <em>MAC</em></strong> command, where <em>MAC</em> is the client's MAC address in dotted hexadecimal notation.  For example, to create a manual binding so that the computer with MAC address 0000.0c12.3456 always receives the IP address 192.168.1.20/26, you should issue the following commands:</p>

<pre>host 192.168.1.20 /26
client-identifier 0000.0c12.3456</pre>

<p>Alternatively, you can issue the <strong>host 192.168.1.20 255.255.255.192</strong> command to specify the IP address for the static mapping.  You cannot use the same DHCP pool for manual bindings and for dynamic IP address allocation.</p>

<p>You should not issue the <strong>ip address dhcp</strong> command. The <strong>ip address dhcp</strong> command configures an interface to become a DHCP client so that it can receive IP configuration information from a DHCP server.  A DHCP client can receive an IP address, a subnet mask, a domain name, a Domain Name System (DNS) server, and more from a DHCP server. </p>`,
  
  reference: [
    {
      title: "Boson CCNA Curriculum 200-301",
      description: "Module 7:  IP Services, DHCP Server Configuration"
    },
    {
      title: "Cisco:  Configuring the Cisco IOS DHCP Server",
      description: "",
      link: "https://www.cisco.com/c/en/us/td/docs/ios-xml/ios/ipaddr_dhcp/configuration/15-sy/dhcp-15-sy-book/config-dhcp-server.html"
    }
  ]
},

{
  id: 661,
  category: "Network Access",
  questionType: "Single-select",
  question: `<p>Which of the following is the default frequency that a Cisco switch will send LLDP advertisements when LLDP is enabled on an interface?  (Select the best answer. )</p>`,
  
  options: [
    "90 seconds",
    "65534 seconds",
    "60 seconds",
    "30 seconds",
    "120 seconds"
  ],
  
  correctAnswer: 3,
  
  explanation:  `<p>By default, a Cisco switch will send Link Layer Discovery Protocol (LLDP) advertisements every 30 seconds when LLDP is enabled on an interface.  LLDP is an Open Systems Interconnection (OSI) Layer 2 open-standard discovery protocol that is used to facilitate interoperability between Cisco devices and non-Cisco devices.  Attributes that can be learned from neighboring devices contain Type, Length, Value (TLV) information including port description, system description, and management address. You can issue the <strong>lldp timer <em>rate</em></strong> command from global configuration mode to configure the frequency at which LLDP advertisements are sent. The <em>rate</em> parameter represents the rate in seconds that LLDP updates are sent and is an integer value from 5 through 65534 seconds.  You can issue the <strong>show lldp</strong> command from privileged EXEC mode to display the current LLDP configuration.  The following sample output shows the default settings for a Cisco 3560 series switch after LLDP has been enabled globally:</p>

<pre>Switch#show lldp

Global LLDP Information:
    Status:  ACTIVE
    LLDP advertisements are sent every 30 seconds
    LLDP hold time advertised is 120 seconds
    LLDP interface reinitialisation delay is 2 seconds</pre>

<p>LLDP is disabled by default on Cisco switches. You can issue the <strong>lldp run</strong> command from global configuration mode to enable LLDP globally on a switch. By default, all interfaces are configured to transmit and receive LLDP packets when LLDP is globally enabled.  However, you can issue the <strong>lldp transmit</strong> and <strong>lldp receive</strong> commands from interface configuration mode to control the sending and receiving of LLDP packets for a specific interface.  For example, the <strong>no lldp transmit</strong> command configures an interface not to send LLDP packets, whereas the <strong>no lldp receive</strong> command configures an interface to ignore incoming LLDP packets. To enable LLDP packets to resume listening for LLDP packets, you can issue the <strong>show lldp interface</strong> command to examine the LLDP status of a particular interface.  For example, the following sample output indicates that the FastEthernet 0/4 interface is configured to receive LLDP updates but not to send them:</p>

<pre>Switch#show lldp interface fastethernet 0/4

FastEthernet0/4:
    Tx:  disabled
    Rx: enabled
    Tx state: INIT
    Rx state: WAIT PORT OPER</pre>

<p>By default, a Cisco switch will not send LLDP advertisements every 120 seconds.  However, a Cisco switch will retain LLDP information for a default interval of 120 seconds before discarding the information. You can issue the <strong>lldp holdtime <em>seconds</em></strong> command or the <strong>lldp holdtime <em>seconds</em></strong> command from global configuration mode to configure the LLDP holdtime to any integer value from 0 through 65535 seconds. </p>

<p>Cisco Discovery Protocol (CDP) sends advertisements every 60 seconds by default. Like LLDP, CDP is an OSI Layer 2 protocol that is used to advertise and discover only directly connected Cisco devices on a local network. However, unlike LLDP, CDP is a Cisco-proprietary protocol that is enabled by default on all Cisco devices; additionally, CDP cannot be selectively disabled for security purposes. An advantage of using CDP rather than LLDP on a network containing only Cisco devices is that CDP can also provide VLAN Trunking Protocol (VTP) information, whereas LLDP cannot. VTP is a protocol that is used to centrally manage virtual local area network (VLAN) changes and to propagate those changes across a network to all devices in the VTP domain. </p>`,
  
  reference: [
    {
      title: "CCNA 200-301 Official Cert Guide",
      description: "Volume 2, Chapter 9: Device Management Protocols, Configuring and Verifying LLDP"
    },
    {
      title:  "Cisco:  Configuring CDP",
      description: "Default CDP Configuration",
      link: "https://www.cisco.com/c/en/us/td/docs/switches/lan/catalyst3750/software/release/12-2_55_se/configuration/guide/scg3750/swcdp. html"
    },
    {
      title: "Cisco: Configuring LLDP, LLDP-MED, and Wired Location Service",
      description: "Default LLDP Configuration",
      link:  "https://www.cisco.com/c/en/us/td/docs/switches/lan/catalyst3750/software/release/12-2_55_se/configuration/guide/scg3750/swlldp.html"
    }
  ]
},

{
  id: 679,
  category: "Network Access",
  questionType: "Single-select",
  question: `<p>You want to decrease the amount of time that it takes for switch ports on SwitchA to begin forwarding.  PortFast is not configured on any of the switch ports on SwitchA. You issue the <strong>spanning-tree portfast default</strong> command from global configuration mode.  </p>

<p>Which of the ports on SwitchA will use PortFast?   (Select the best answer. )</p>`,
  
  options: [
    "all trunk ports",
    "all ports",
    "all access ports",
    "no ports, because PortFast cannot be enabled globally"
  ],
  
  correctAnswer: 2,
  
  explanation: `<p>All access ports on SwitchA will use PortFast.  PortFast enables faster connectivity for hosts connected to an access-layer switch port. If PortFast is not enabled, a switch port transitions through the Spanning Tree Protocol (STP) listening and learning states before it enters the forwarding state. This process can take as long as 30 seconds if the default STP timers are used. In addition, port initialization could take as long as 50 seconds if Port Aggregation Protocol (PAgP) is enabled. PortFast transitions the port into the STP forwarding state without going through the STP listening and learning states. </p>

<p>PortFast is a feature that should be used only on switch ports that are connected to end devices, such as user workstations or print devices. Because PortFast immediately transitions a port to the STP forwarding state, skipping over the listening and learning states, steps should be taken to ensure that a switch that is inadvertently or intentionally connected to the port cannot influence the STP topology or cause switching loops.  Cisco recommends that switches should not be connected to access ports that are configured with PortFast; switches should always be connected by trunk ports. </p>

<p>You can enable PortFast for specific ports by issuing the <strong>spanning-tree portfast</strong> command in interface configuration mode. However, you can also enable PortFast for all access ports on the switch by issuing the <strong>spanning-tree portfast default</strong> command in global configuration mode; trunk ports are not affected by the <strong>spanning-tree portfast default</strong> command. </p>`,
  
  reference: [
    {
      title: "Boson CCNA Curriculum 200-301",
      description: "Module 5: Switching and Network Access, PortFast"
    },
    {
      title: "CCNA 200-301 Official Cert Guide",
      description:  "Volume 1, Chapter 9: Spanning Tree Protocol Concepts, Optional STP Features"
    },
    {
      title: "Cisco:  Configuring Optional Spanning-Tree Features",
      description: "Understanding Optional Spanning-Tree Features",
      link: "https://www.cisco.com/c/en/us/td/docs/switches/lan/catalyst3750x_3560x/software/release/12-2_55_se/configuration/guide/3750xscg/swstp.html#wp1038608"
    },
    {
      title: "Cisco: Cisco IOS LAN Switching Command Reference",
      description: "spanning-tree portfast default",
      link: "https://www.cisco.com/c/en/us/td/docs/ios-xml/ios/lanswitch/command/lsw-cr-book/lsw-s1. html#wp2955656883"
    }
  ]
},

{
  id: 691,
  category: "Network Fundamentals",
  questionType:  "Single-select",
  question: `<p>You are analyzing an 802.11 wireless packet capture. You need to identify the fields in the MAC frame format. </p>

<p>Which of the following correctly identifies all nine fields of an 802.11 MAC frame in the correct order?</p>`,
  
  options: [
    "FC, DUR, ADD1, ADD2, ADD3, SEQ, ADD4, DATA, FCS",
    "FC, ADD1, ADD2, ADD3, ADD4, DUR, SEQ, DATA, FCS",
    "DUR, FC, ADD1, ADD2, ADD3, SEQ, DATA, ADD4, FCS",
    "FC, SEQ, ADD1, ADD2, ADD3, ADD4, DUR, DATA, FCS"
  ],
  
  correctAnswer: 0,
  
  explanation: `<p>An Institute of Electrical and Electronics Engineers (IEEE) 802.11 Media Access Control (MAC) frame is generally comprised of nine fields, as shown in the following diagram:</p>

<table border="1" cellpadding="10" cellspacing="0" style="border-collapse:  collapse; margin: 20px 0; width: 100%;">
  <thead>
    <tr style="background-color: #f0f0f0;">
      <th>FC</th>
      <th>DUR</th>
      <th>ADD1</th>
      <th>ADD2</th>
      <th>ADD3</th>
      <th>SEQ</th>
      <th>ADD4</th>
      <th>DATA</th>
      <th>FCS</th>
    </tr>
  </thead>
  <tbody>
    <tr style="text-align: center;">
      <td>2</td>
      <td>2</td>
      <td>6</td>
      <td>6</td>
      <td>6</td>
      <td>2</td>
      <td>6</td>
      <td>Var</td>
      <td>4</td>
    </tr>
  </tbody>
</table>

<p>The Frame Control (FC) field is used to identify the type of 802.11 frame, and its 2 bytes of data are subdivided into 11 related fields of information, such as wireless protocol, frame type, and frame subtype.</p>

<p>The Duration (DUR) field is a 2-byte field that is used mainly by control frames to indicate transmission timers. However, this field is also used by the Power Save (PS) Poll control frame to indicate the association identity (AID) of a client.</p>

<p>The address fields, Address 1 (ADD1), Address 2 (ADD2), Address 3 (ADD3), and Address 4 (ADD4), are 6-byte fields used to convey MAC address and Basic Service Set Identifier (BSSID) information.  What information resides in which address field is entirely dependent on the type of frame.  However, ADD1, ADD2, and ADD3 typically contain a source MAC address, destination MAC address, and BSSID with the order being dependent on whether the frame is entering the distribution system (DS), leaving the DS, or passing directly between ad-hoc wireless devices.  The ADD4 field is only present for frames passing between devices in the DS, such as from one access point (AP) to another AP.</p>

<p>The Sequence (SEQ) field is a 2-byte field that is subdivided to store two related pieces of information: the fragment number and sequence number of each frame. </p>

<p>The DATA portion of a frame varies in size and contains the frame's payload. For data frames, the payload is user data.  However, for other frames, such as management frames, this portion of the frame might contain information such as supported data rates and cipher suites.</p>

<p>Finally, the Frame Check Sequence (FCS) field contains a 4-byte cyclic redundancy check (CRC) value calculated from all the 802.11 header fields, including the data portion of the frame. This value is used by the receiving station to determine whether the frame was corrupted during transit.</p>`,
  
  reference: [
    {
      title: "Boson CCNA Curriculum 200-301",
      description: "Module 3: Wireless Networking Fundamentals, 802.11 MAC Frames"
    },
    {
      title: "SANS Institute:  IEEE 802.11 Pocket Reference Guide (PDF)",
      description: "",
      link: "https://www.sans.org/reading-room/whitepapers/wireless/ieee-802-11-pocket-reference-guide-36207"
    },
    {
      title: "Microsoft Docs: How 802.11 Wireless Works",
      description: "802.11 MAC Frame",
      link:  "https://docs.microsoft.com/en-us/previous-versions/windows/it-pro/windows-server-2003/cc757419(v=ws. 10)"
    }
  ]
},

{
  id: 437,
  category: "Security Fundamentals",
  questionType:  "Single-select",
  question: `<p>Which of the following commands should you issue on a switch port so that no more than two devices can send traffic into the port?   (Select the best answer. )</p>`,
  
  options: [
    "switchport port-security mac-address 2",
    "switchport port-security maximum 2",
    "switchport port-security mac-address sticky",
    "switchport port-security",
    "switchport port-security 2"
  ],
  
  correctAnswer: 1,
  
  explanation: `<p>You should issue the <strong>switchport port-security maximum 2</strong> command from interface configuration mode so that only two devices can send traffic into the port.  The <strong>switchport port-security maximum 2</strong> command configures the switch port to allow no more than two devices, each with a unique Media Access Control (MAC) address, to send traffic into the port. </p>

<p>Port security allows traffic into a switch port from authorized MAC addresses.  If traffic arrives from a MAC address that is authorized, the traffic will be forwarded to its destination. If traffic arrives from a MAC address that is not authorized, the traffic will be discarded, and on some switch configurations, the switch port will also be disabled.  By itself, the <strong>switchport port-security</strong> command enables port security and authorizes a maximum of one MAC address to send traffic into the port.  The <strong>2</strong> parameter in the <strong>switchport port-security 2</strong> command is an invalid parameter; thus this command will not allow two devices to communicate on a switch port.</p>

<p>Authorized MAC addresses can be statically configured or dynamically learned. To statically configure a switch port to allow traffic from a MAC address, you should issue the <strong>switchport port-security mac-address <em>mac-address</em></strong> command in interface configuration mode. The <strong>2</strong> parameter in the <strong>switchport port-security mac-address 2</strong> command is an invalid parameter; thus this command will not allow two devices to communicate on a switch port.</p>

<p>Any MAC addresses that are not configured statically will be learned dynamically from incoming traffic, up to the maximum number of MAC addresses configured in the <strong>switchport port-security maximum <em>number</em></strong> command. The <strong>switchport port-security mac-address sticky</strong> command converts dynamically learned MAC addresses to sticky MAC addresses.  Sticky MAC addresses are stored in the running configuration.  To ensure that the sticky MAC addresses are not lost during a reboot, you should issue the <strong>write memory</strong> or <strong>copy running-config startup-config</strong> commands.  You cannot use the <strong>switchport port-security mac-address sticky</strong> command by itself to authorize a maximum of two devices to send traffic into a switch port; you must also issue the <strong>switchport port-security maximum 2</strong> command.</p>`,
  
  reference: [
    {
      title: "Boson CCNA Curriculum 200-301",
      description: "Module 8: Security Fundamentals, Restricting Ports by Client MAC Address"
    },
    {
      title: "Cisco:  Configuring Port-Based Traffic Control",
      description: "Configuring Port Security",
      link: "https://www.cisco.com/c/en/us/td/docs/switches/lan/catalyst3750/software/release/12-2_55_se/configuration/guide/scg3750/swtrafc.html"
    }
  ]
},

{
  id: 90,
  category: "IP Services",
  questionType:  "Matching",
  question: `<p>To complete this question, click <strong>Launch Simulator</strong> and follow the on-screen instructions.</p>

<p>Match each Cisco debug/log severity level with its corresponding number. </p>`,
  
  matchingPairs: {
    terms: [
      { id: "emergencies", text: "emergencies" },
      { id:  "alerts", text: "alerts" },
      { id: "critical", text: "critical" },
      { id: "errors", text: "errors" },
      { id: "warnings", text: "warnings" },
      { id:  "notifications", text: "notifications" },
      { id: "informational", text: "informational" },
      { id: "debugging", text: "debugging" }
    ],
    definitions: [
      { id: "def0", text: "0", correctMatch: "emergencies" },
      { id:  "def1", text: "1", correctMatch: "alerts" },
      { id: "def2", text: "2", correctMatch: "critical" },
      { id: "def3", text:  "3", correctMatch: "errors" },
      { id: "def4", text: "4", correctMatch: "warnings" },
      { id: "def5", text: "5", correctMatch:  "notifications" },
      { id: "def6", text: "6", correctMatch: "informational" },
      { id: "def7", text: "7", correctMatch: "debugging" }
    ]
  },
  
  correctAnswer: {
    emergencies: "def0",
    alerts: "def1",
    critical: "def2",
    errors: "def3",
    warnings: "def4",
    notifications: "def5",
    informational: "def6",
    debugging: "def7"
  },
  
  explanation:  `<p>Cisco debug messages and log messages are divided into the following severity levels:</p>

<ul>
  <li><strong>0</strong> – emergencies</li>
  <li><strong>1</strong> – alerts</li>
  <li><strong>2</strong> – critical</li>
  <li><strong>3</strong> – errors</li>
  <li><strong>4</strong> – warnings</li>
  <li><strong>5</strong> – notifications</li>
  <li><strong>6</strong> – informational</li>
  <li><strong>7</strong> – debugging</li>
</ul>

<p>You can filter log messages on the console by severity level by issuing the <strong>logging console <em>severity-level</em></strong> command, or you can filter log messages to a Syslog server by issuing the <strong>logging trap <em>severity-level</em></strong> command.  When the <strong>logging console</strong> or <strong>logging trap</strong> command is issued with a <em>severity-level</em> parameter, messages with the specified severity level and all lower-numbered severity levels will be displayed or sent, respectively. </p>

<p>Messages are formatted in the Berkeley Software Distribution (BSD) Syslog format, which is a percent sign (%) followed by a facility code, a severity code, and a mnemonic code. The three codes are separated by dashes.  Consider the following message:</p>

<pre>*Dec  1 14:20:07.055:  %DUAL-5-NBRCHANGE: IP-EIGRP(0) 1:  Neighbor
192.168.1.2 (FastEthernet0/0) is down: interface down</pre>

<p>In this Syslog message, the facility code is DUAL, the severity code is 5, which is equivalent to notifications, and the mnemonic code is NBRCHANGE. The dash-separated code is followed by a colon and the human-readable text of the log message.</p>

<p>Emergencies and alerts indicate a severe hardware or software problem with the device.   These messages need to be addressed immediately. </p>

<p>Critical, error, and warning messages indicate something that might impact the device.  For example, interface up/down state changes are displayed as errors at level 3.</p>

<p>Notifications and informational messages are routine messages but still might indicate a problem. Route flaps, neighbor adjacencies, and interface protocol up/down transitions are displayed as notifications at level 5.</p>

<p>Debugging messages appear only as the result of issuing the <strong>debug</strong> command. After debugging, always remember to issue the <strong>no debug all</strong> command to stop collecting data. </p>`,
  
  reference: [
    {
      title: "Boson CCNA Curriculum 200-301",
      description:  "Module 7: IP Services, Log Severity Levels"
    },
    {
      title:  "Cisco:  System Message Logging",
      description: "Table 3 Message Logging Level Keywords",
      link: "https://www.cisco.com/c/en/us/td/docs/routers/access/wireless/software/guide/SysMsgLogging.html"
    }
  ]
},

{
  id: 481,
  category: "Automation and Programmability",
  questionType: "Multi-select",
  question: `<p>In a controller-based network, the functions of which of the following protocols are most likely to be moved to a centralized controller?   (Select 2 choices.  )</p>`,
  
  options: [
    "SNMP",
    "EIGRP",
    "SSH",
    "OSPF",
    "Syslog"
  ],
  
  correctAnswer: [1, 3],
  
  explanation: `<p>In a controller-based network, the functions of Enhanced Interior Gateway Routing Protocol (EIGRP) and Open Shortest Path First (OSPF) are most likely to be moved to a centralized controller.   Routing protocols like EIGRP and OSPF operate in the control plane of a traditional distributed network.   These protocols make routing decisions for packets that require routing among Layer 3 devices.   In a controller-based network, such as a Software-Defined Networking (SDN) network, the control plane is centralized.   Therefore, the decision-making logic is either moved to a central controller or monitored by a central controller. </p>

<p>In a controller-based network, none of the functions of Secure Shell (SSH), Syslog, or Simple Network Management Protocol (SNMP) are likely to be moved to a centralized controller.   All of these protocols operate in the management plane in both a traditional network and a controller-based network.  Another network management protocol that operates in this plane includes Telnet.   All of these protocols enable an administrator to connect to and manage a network device.  </p>

<p>Layer 2 switches, Layer 3 switches, and end devices typically operate in the data plane.   In a controller-based network, the controller communicates with the data plane by using a southbound Application Programming Interface (API), such as NETCONF, OpenFlow, OpFlex, or OnePK.  Network tasks that are typically performed in the data plane include the encapsulation and decapsulation of packets, the adding or removing of trunk headers, the matching of Media Access Control (MAC) addresses to a MAC address table, the matching of Internet Protocol (IP) addresses to paths in a routing table, the encryption of data, Network Address Translation (NAT), and filtering by using either access control lists (ACLs) or port security. </p>`,
  
  reference: [
    {
      title: "Boson CCNA Curriculum 200-301",
      description:  "Module 9: Automation and Programming, Control Plane"
    },
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
      description:  "Volume 2, Chapter 16: Introduction to Controller-Based Networking, Controllers and Software-Defined Architecture"
    }
  ]
},

{
  id: 607,
  category: "Network Fundamentals",
  questionType: "Single-select",
  question: `<p>You have issued the <strong>power inline police action log</strong> command from interface configuration mode on a Cisco switch. </p>

<p>Which of the following best describes what will occur when an attached PD attempts to draw more than its allocated amount of power from the configured interface?   (Select the best answer.)</p>`,
  
  options: [
    "The port will enter an error-disabled state.",
    "A log message will appear on the console.",
    "The port will enter an error-disabled state, and a log message will appear on the console.",
    "The port will restart, and a log message will appear on the console."
  ],
  
  correctAnswer: 3,
  
  explanation: `<p>In this scenario, the port will restart and a log message will appear on the console when an attached powered device (PD) attempts to draw more than its allocated amount of power from the configured interface.  Because sending an electrical current to a device that does not support Power over Ethernet (PoE) could potentially damage the receiving device, power-sourcing equipment (PSE), such as a PoE-capable switch, will first apply a small voltage to a PoE-enabled port to determine whether a PD is attached to the port. The Institute of Electrical and Electronics Engineers (IEEE) PoE standards require a PD to provide a measurable resistance of approximately 25 kilo Ohms (kohms) when it is probed by a PSE. If the PSE detects a PD, the PSE can then send out a signal with a higher voltage to determine the class of the PD. When an IEEE standards-compliant PD receives this higher-voltage signal from a PSE, its response will inform the PSE about the PD's power requirements. The PSE will categorize the PD into an appropriate class, if possible, and will then guarantee a minimum amount of power relative to the class of the PD. If the PSE cannot identify the appropriate class for a PD, the PD will be categorized into the default class and will receive the default amount of power. </p>

<p>Power policing is a Cisco feature that enables a switch to monitor the current draw of connected devices and to take action if the draw exceeds the amount allocated to the PD in accordance with its negotiated power class.  The allocated maximum power draw is referred to as the cutoff power value.  You can issue the <strong>power inline police</strong> command from interface configuration mode to enable power policing with the default settings. When power policing is enabled with the default settings for a PoE-capable interface, the interface will enter an error-disabled state, effectively shutting down the port, when an attached PD attempts to draw more than the cutoff power from the configured interface. A log message describing the event will also be sent to the console.</p>

<p>An interface in an error-disabled state will remain shut down until it is manually reset (by an administrator issuing the <strong>shutdown</strong> and <strong>no shutdown</strong> commands in sequence for the interface) or until the error-disabled auto recovery mechanism timer expires and the port is automatically reset. Although error-disable detection for inline power is enabled by default on Cisco PoE-capable switches, error-disable auto recovery for inline power is not enabled by default. Therefore, a port that has been placed into an error-disabled state by an inline power event will not automatically reset by default. You can issue the <strong>errdisable recovery cause inline-power</strong> command from global configuration mode to enable error-disable auto recovery for inline power. </p>

<p>You can issue the <strong>power inline police action log</strong> command to change the default power policing behavior.  When the <strong>log</strong> action is configured, a PoE-enabled interface will restart and send a log message to the console when an attached PD attempts to draw more than the cutoff power from the configured interface.  This will typically cause the PD to reboot and to renegotiate its power requirements. </p>`,
  
  reference: [
    {
      title: "CCNA 200-301 Official Cert Guide",
      description:  "Volume 2, Chapter 13: LAN Architecture, Power over Ethernet (PoE)"
    },
    {
      title: "Cisco:  Configuring Power over Ethernet",
      description: "PoE Policing Modes",
      link: "https://www.cisco.com/c/en/us/td/docs/switches/lan/catalyst3750x_3560x/software/release/12-2_55_se/configuration/guide/3750xscg/swpoe.html"
    }
  ]
},

{
  id: 634,
  category: "Network Fundamentals",
  questionType:  "Single-select",
  question: `<p>Which of the following networks is not defined by RFC 1918?   (Select the best answer.  )</p>`,
  
  options: [
    "192.168.1.0",
    "172.172.1.0",
    "192.168.111.0",
    "10.1.1.0",
    "172.20.1.0",
    "10.16.1.0"
  ],
  
  correctAnswer: 1,
  
  explanation: `<p>The Internet Protocol (IP) address 172.172.1.0 is a public IP address and is not defined by Request for Comments (RFC) 1918.   Three network address ranges are defined as private address ranges by RFC 1918.  These network ranges are intended for private local area network (LAN) use and are not routed across the Internet.  RFC 1918 defines these private address ranges and provides guidelines for their use.  The following list indicates the IP address ranges that are reserved for private, internal use: </p>

<ul>
  <li>Class A – 10.0.0.0 to 10.255.255.255</li>
  <li>Class B – 172.16.0.0 to 172.31.255.255</li>
  <li>Class C – 192.168.0.0 to 192.168.255.255</li>
</ul>

<p>Public IP addresses are maintained by the Internet Assigned Numbers Authority (IANA).  In order to use a public, routable IP address, you must obtain an available range of IP addresses from IANA or from a third party that has obtained valid IP addresses from IANA.  You can limit the number of public IP addresses required for your network by using private IP addresses that have been defined in RFC 1918 for internal use.   This enables you to configure private IP addresses for your network's internal host computers.   You can then implement Network Address Translation (NAT) to translate these private addresses to a minimal number of public addresses for transmission across public networks such as the Internet.  </p>

<p>The IP addresses 10.16.1.0 and 10.1.1.0 are examples of a Class A internal, private address defined by RFC 1918.  The IP address 172.20.1.0 is an example of a Class B internal, private address defined by RFC 1918.  The IP addresses 192.168.111.0 and 192.168.1.0 are examples of Class C internal, private addresses defined by RFC 1918. </p>`,
  
  reference: [
    {
      title: "Boson CCNA Curriculum 200-301",
      description: "Module 2:  Network Addressing and Transport, Classful Networks"
    },
    {
      title: "CCNA 200-301 Official Cert Guide",
      description:   "Volume 1, Chapter 11: Perspectives on IPv4 Subnetting, Private IP Networks"
    },
    {
      title: "IETF:   RFC 1918",
      description: "Address Allocation for Private Internets",
      link: "https://tools.ietf.org/html/rfc1918"
    }
  ]
},

{
  id: 419,
  category: "Security Fundamentals",
  questionType: "Single-select",
  question: `<div style="text-align: center; margin:  20px 0;">
  <img src="/images/question-419-network-diagram.png" alt="Network diagram showing Router1 connected to Public Internet via S0/0, and connected to a switch via Fa0/0. The switch connects to Music Server1 (10.10.10.1), Music Server2 (10.10.10.2), and Web Server (10.10.10.20)" style="max-width: 100%; height: auto;" />
</div>

<p>You have been hired as a consultant for Music World Corp. You need to limit access from the Internet to the music download servers, Music Server1 and Music Server2. These two servers should allow only FTP connections from the Internet. The web server is not subject to this policy and should not be restricted.  Other servers on the 10.10.10.0/24 subnet should not allow any connections from the Internet.  You have already issued the <strong>access-list 101 permit tcp any host 10.10.10.20</strong> command and applied the access list outbound on the Fa0/0 interface. </p>

<p>Which of the following access lists should you use?    (Select the best answer. )</p>`,
  
  options: [
    "access-list 101 permit tcp any 10.10.10.0 0.0.0.3 eq ftp",
    "access-list 101 permit tcp any 10.10.10.0 0.0.0.252 eq ftp",
    "access-list 101 deny tcp any 10.10.10.0 0.0.0.255 eq ftp",
    "access-list 101 permit tcp any 10.10.10.1 0.0.0.0 eq ftp"
  ],
  
  correctAnswer: 0,
  
  explanation: `<p>You should issue the <strong>access-list 101 permit tcp any 10.10.10.0 0.0.0.3 eq ftp</strong> command. In this scenario, you need to limit access to Music Server1 and Music Server2 via File Transfer Protocol (FTP) from the Internet. The proper use of the destination wildcard mask is the key to accomplishing this task.</p>

<p>Access control lists (ACLs) are applied to a single protocol per interface and per direction. In this scenario, the ACL is applied outbound on the Fa0/0 interface. </p>

<p>ACLs are constructed by using the following syntax:</p>

<p>Standard:  <strong>access-list</strong> <em>access-list-number</em> [<strong>permit</strong> | <strong>deny</strong>] [<strong>host</strong> | <em>source source-wildcard</em> | <strong>any</strong>]</p>

<p>Extended: <strong>access-list</strong> <em>access-list-number</em> [<strong>dynamic</strong> <em>dynamic-name</em> [<strong>timeout</strong> <em>minutes</em>]] {<strong>deny</strong> | <strong>permit</strong>} <em>protocol source source-wildcard</em> [<em>operator</em> [<em>port</em>]] <em>destination destination-wildcard</em> [<em>operator</em> [<em>port</em>]] [<strong>established</strong>] [<strong>precedence</strong> <em>precedence</em>] [<strong>tos</strong> <em>tos</em>] [<strong>log</strong> | <strong>log-input</strong>] [<strong>time-range</strong> <em>time-range-name</em>]</p>

<p>Named: <strong>ip access-list</strong> {<strong>extended</strong> | <strong>standard</strong>} <em>name</em></p>

<p>After you issue the <strong>ip access-list standard</strong> <em>name</em> command, the device will be placed in standard ACL configuration mode, where you can issue one or more statements to configure the named ACL. Similarly, issuing the <strong>ip access-list extended</strong> <em>name</em> command will place the device into extended ACL configuration mode. </p>

<p>Because you must limit access to a specific protocol, you should use an extended access list with a number from 100 through 199. You should then specify the <strong>permit</strong> keyword in order to allow access from any host on the Internet to the destination subnet.  FTP is a Transmission Control Protocol (TCP), so you should specify the <strong>tcp</strong> keyword after the <strong>permit</strong> keyword.  The <strong>any</strong> keyword is used to indicate 0.0.0.0 255.255.255.255, which indicates any source Internet Protocol (IP) address. Next, you should specify the destination subnet of <strong>10.10.10.0</strong> and use the <strong>0.0.0.3</strong> wildcard mask to limit access to the destination addresses of 10.10.10.1 and 10.10.10.2. The last component in the ACL is the protocol that you are filtering, which in this case is FTP.</p>

<p>Named ACLs are different from standard or extended ACLs because they are identified by a string of characters instead of a number. In addition, a named ACL can be configured as either a standard ACL or an extended ACL.  Although you could configure a named ACL to satisfy the requirements in this scenario, none of the choices includes a named ACL configuration. All access lists contain an implicit deny rule, which denies traffic that has not been explicitly allowed.  Therefore, you do not need to issue any other commands to deny Internet communications.</p>

<p>Issuing the <strong>access-list 101 permit tcp any 10.10.10.0 0.0.0.252 eq ftp</strong> command incorrectly specifies the subnet mask instead of the wildcard mask. Similar to a subnet mask, a wildcard mask is used to selectively span an address space. The wildcard mask is simply the inverse of the subnet mask.  The FTP servers have IP addresses on the 10.10.10.0 network.  A subnet mask of 255.255.255.252 allows for a range of network hosts from 10.10.10.1 through 10.10.10.2. The inverse of this subnet mask yields a wildcard mask of 0.0.0.3.</p>

<p>Issuing the <strong>access-list 101 permit tcp any 10.10.10.1 0.0.0.0 eq ftp</strong> command would limit connections to the single destination address of <strong>10.10.10.1</strong>. The wildcard mask <strong>0.0.0.0</strong> indicates a single host. Thus FTP connections to Music Server1 would be allowed, but FTP connections to Music Server2 would not be allowed. </p>

<p>Issuing the <strong>access-list 101 deny tcp any 10.10.10.0 0.0.0.255 eq ftp</strong> command would deny FTP communications to all hosts on the subnet, including Music Server1 and Music Server2. Because the <strong>access-list 101 permit tcp any host 10.10.10.20</strong> command was issued before the <strong>access-list 101 deny tcp any 10.10.10.0 0.0.0.255 eq ftp</strong> command, only FTP connections to the web server would be allowed; all the other hosts on the subnet would be denied.</p>`,
  
  reference: [
    {
      title: "Boson CCNA Curriculum 200-301",
      description: "Module 8: Security Fundamentals, Extended ACLs"
    },
    {
      title: "CCNA 200-301 Official Cert Guide",
      description: "Volume 2, Chapter 3: Advanced IPv4 Access Control Lists, Extended Numbered IP Access Control Lists"
    },
    {
      title: "Cisco:  Configuring IP Access Lists",
      description: "",
      link: "https://www.cisco.com/c/en/us/support/docs/security/ios-firewall/23602-confaccesslists.html"
    }
  ]
},

{
  id: 517,
  category: "Network Fundamentals",
  questionType: "Single-select",
  question: `<p>In a two-tier network design, which layers are combined together?    (Select the best answer. )</p>`,
  
  options: [
    "core and access",
    "distribution and access",
    "aggregation and access",
    "core, distribution, and access",
    "core and distribution",
    "core, aggregation, and access"
  ],
  
  correctAnswer: 4,
  
  explanation: `<p>In a two-tier network design, the core and distribution layers are combined together into a single layer; this two-tier network design is often called the collapsed core design.  The functionality of the core layer can be collapsed into the distribution layer if the distribution layer infrastructure is sufficient to meet the design requirements.  The collapsed core in a two-tier network design provides physical and logical paths as well as a Layer 2 aggregation and demarcation point.  In addition, a collapsed core defines routing polices and network access policies and provides intelligent network services.</p>

<p>The Cisco hierarchical network model divides the network into three distinct layers: </p>

<ul>
  <li>Core layer</li>
  <li>Distribution layer, sometimes called the aggregation layer</li>
  <li>Access layer</li>
</ul>

<p>The core layer of the hierarchical model is primarily associated with low latency and high reliability.  As the network backbone, the core layer provides fast convergence and typically provides the fastest switching path in the network. </p>

<p>The distribution layer provides route filtering and interVLAN routing.  The distribution layer serves as an aggregation point for access layer network links.  Because the distribution layer is the intermediary between the access layer and the core layer, the distribution layer is the ideal place to enforce security policies, to provide Quality of Service (QoS), and to perform tasks that involve packet manipulation, such as routing.  Summarization and next-hop redundancy are also performed in the distribution layer.</p>

<p>The access layer serves as a media termination point for endpoints such as servers and hosts. Because access layer devices provide access to the network, the access layer is the ideal place to perform user authentication. </p>`,
  
  reference: [
    {
      title: "Boson CCNA Curriculum 200-301",
      description: "Module 1: Network Fundamentals, Cisco Two-Tier Network Design Model"
    },
    {
      title: "Cisco:  Small Enterprise Design Profile(SEDP)–Network Foundation Design",
      description: "Collapsed Core Network Design",
      link: "https://www.cisco.com/c/en/us/td/docs/solutions/Enterprise/Campus/SEDP/SEDP_DG/SEDPdg3.html"
    }
  ]
},

{
    id: 43,
    category: "IP Services",
    questionType: "Single-select",
    question: `<p>Which of the following commands will automatically enable SSH on a router?  (Select the best answer. )</p>`,
    options: [
      "enable secret",
      "crypto key generate rsa",
      "transport input ssh",
      "no transport input telnet",
      "crypto key zeroize rsa"
    ],
    correctAnswer: 1,
    explanation: `<p>The <strong>crypto key generate rsa</strong> command will automatically enable Secure Shell (SSH) on a router. This command creates a set of RSA security keys that can be used for SSH sessions.  RSA is an asymmetric encryption algorithm that can be used to create a public/private key pair.  SSH is a cryptographic protocol that provides a secure connection between two devices.  A router uses the security keys generated by RSA to secure SSH connections.  Information sent by using SSH is encrypted and, thus, is not viewable by using packet sniffing applications.</p>

<p>SSH is often used as a secure replacement for Telnet to manage network devices. In order for SSH to be enabled on a Cisco device, the device must be running a K9 IOS image, which provides cryptographic functionality. To enable SSH for virtual terminal (VTY) lines on a Cisco router, you should complete the following steps:</p>

<ol>
  <li>Configure the router with a host name other than Router by issuing the <strong>hostname</strong> command. </li>
  <li>Configure the router with a domain name by issuing the <strong>ip domain-name</strong> command. </li>
  <li>Generate an RSA key pair for the router by issuing the <strong>crypto key generate rsa</strong> command.</li>
  <li>Configure the VTY lines to use SSH by issuing the <strong>transport input ssh</strong> command from line configuration mode.</li>
</ol>

<p>The <strong>transport input ssh</strong> command does not enable SSH on the router. The <strong>transport input ssh</strong> command only configures the VTY lines to use SSH if SSH has already been configured. </p>

<p>The <strong>crypto key zeroize rsa</strong> command removes RSA keys from a router. You may want to remove RSA keys in order to generate new keys.  However, removing RSA keys does not automatically enable SSH on a router. </p>

<p>The <strong>enable secret</strong> command can be used to help prevent unauthorized access to privileged EXEC mode. Using the <strong>enable secret</strong> command is more secure than using the <strong>enable password</strong> command because the <strong>enable secret</strong> command configures the enable password to be stored as a Message Digest 5 (MD5) hash, whereas the <strong>enable password</strong> command configures the enable password to be stored as plain text.  However, the <strong>enable secret</strong> command does not automatically enable SSH on a router.</p>

<p>The <strong>no transport input telnet</strong> command can be used to prevent Telnet access to a router. Because Telnet information is sent unencrypted as plain text, Telnet is not as secure as SSH. Therefore, to ensure that remote management connections to the router are encrypted, you can issue the <strong>no transport input telnet</strong> command after enabling SSH.  Although the <strong>no transport input telnet</strong> command disables Telnet access, this command does not automatically enable SSH. </p>`,
    reference: [
      {
        title: "Boson CCNA Curriculum 200-301",
        description: "Module 7:  IP Services, SSH Configuration"
      },
      {
        title: "Cisco:  Configure SSH on Routers and Switches:  Set Up an IOS Router or Switch as SSH Client",
        description: ""
      }
    ]
  },

  {
    id: 94,
    category: "IP Services",
    questionType: "Single-select",
    question: `<p>Which of the following is enabled on a Cisco router when you issue the <strong>ntp server</strong> command from global configuration mode?  (Select the best answer.  )</p>`,
    options: [
      "static client mode",
      "server mode",
      "symmetric active mode",
      "broadcast client mode",
      "authentication"
    ],
    correctAnswer: 0,
    explanation: `<p>Network Time Protocol (NTP) static client mode is enabled on a Cisco router when you issue the <strong>ntp server</strong> command from global configuration mode.  NTP is used to synchronize the time on network devices.  An NTP static client receives its time from an NTP server.  The syntax of the <strong>ntp server</strong> command is <strong>ntp server <em>ip-address</em></strong>, where <em>ip-address</em> is the Internet Protocol (IP) address of the NTP server that the client will use to receive its time.</p>

<p>NTP broadcast client mode is enabled on a Cisco router when you issue the <strong>ntp broadcast client</strong> command from interface configuration mode. An NTP broadcast client listens on the configured interface for NTP broadcasts from an NTP server, which the NTP client uses to adjust its time. The difference between a broadcast client and a static client is that a broadcast client can receive its time from any NTP server.  By contrast, a static client receives its time from the NTP server specified in the <strong>ntp server</strong> command.</p>

<p>NTP authentication is enabled on a Cisco router when you issue the <strong>ntp authenticate</strong> command from global configuration mode.  Authentication can be used with NTP to provide source verification for NTP synchronization. NTP authentication supports only Message Digest 5 (MD5) keys.  To enable authentication on an NTP client, you should issue the following command set: </p>

<pre><strong>ntp authenticate
ntp authentication-key</strong> <em>key-number</em> <strong>md5</strong> <em>key</em>
<strong>ntp trusted-key</strong> <em>key-number</em>
<strong>ntp server</strong> <em>ip-address</em> <strong>key</strong> <em>key-number</em></pre>

<p>To enable authentication on an NTP server, you should issue the following command set:</p>

<pre><strong>ntp authenticate
ntp authentication-key</strong> <em>key-number</em> <strong>md5</strong> <em>key</em></pre>

<p>NTP server mode is enabled on a Cisco router when you issue the <strong>ntp master</strong> command from global configuration mode. The syntax of the <strong>ntp master</strong> command is <strong>ntp master [<em>stratum</em>]</strong>, where <em>stratum</em> is an NTP stratum value from 1 through 15; if the stratum value is not specified, the NTP server uses the default stratum value of 8. NTP servers not only synchronize time with NTP clients but also synchronize time with each other.  Devices with higher stratum numbers receive time from devices with lower stratum numbers.  For example, a stratum 2 device typically receives its time from a stratum 1 device, a stratum 3 device typically receives its time from a stratum 2 device, and so on.</p>

<p>NTP symmetric active mode is enabled on a Cisco router when you issue the <strong>ntp peer</strong> command from global configuration mode. A device in symmetric active mode attempts to mutually synchronize with another NTP host; the host might synchronize the peer, or it might be synchronized by the peer. The syntax of the <strong>ntp peer</strong> command is <strong>ntp peer <em>ip-address</em></strong>, where <em>ip-address</em> is the IP address of the NTP host. </p>`,
    reference: [
      {
        title: "Boson CCNA Curriculum 200-301",
        description: "Module 7: IP Services, NTP Server Configuration"
      },
      {
        title: "Cisco:  Cisco IOS Basic System Management Command Reference:  ntp server",
        description: ""
      }
    ]
  },

  {
    id: 520,
    category: "Network Fundamentals",
    questionType: "Single-select",
    question: `<p>You are creating a Puppet DSL resource declaration for code that will ensure that members of a group named CoAdmins will be able to issue commands by using the <strong>sudo</strong> command. </p>

<p>Which of the following code segments have you most likely written?  (Select the best answer. )</p>`,
    options: [
      `{
    sudo :  {
        "group"    : "CoAdmins",
        "content" : "%admin ALL=(ALL) ALL"
    }
}`,
      `sudo "CoAdmins"
    group "CoAdmins"
    nopasswd true`,
      `sudo = {
    "group" : "CoAdmins",
    "content" : "%admin ALL=(ALL) ALL"
}`,
      `sudo::conf { 'CoAdmins':
    ensure  => present,
    content => '%admin ALL=(ALL) ALL',
}`
    ],
    correctAnswer:  3,
    explanation: `<p>Of the available choices, you have most likely written the following code segment while creating a Puppet Domain Specific Language (DSL) resource declaration for code that will ensure that members of a group named CoAdmins will be able to issue commands by using the <strong>sudo</strong> command: </p>

<pre>sudo:: conf { 'CoAdmins':
    ensure  => present,
    content => '%admin ALL=(ALL) ALL',
}</pre>

<p>The code above is a Puppet resource declaration.  Puppet is a configuration management tool that is written in Ruby.  Of the four major configuration management tools, Puppet is the most mature and widely used. Puppet modules are written in Ruby DSL or in a Ruby-like Puppet language known as Puppet DSL, as shown in the output above.  The <strong>sudo</strong> command is a Linux, UNIX, or macOS command that enables a user to issue a command from a normal user account but with administrative, or super user, privileges.</p>

<p>The following code is part of a Chef recipe, not a Puppet resource declaration, that enables members of the CoAdmins group to issue commands by using the <strong>sudo</strong> command:</p>

<pre>sudo "CoAdmins"
    group "CoAdmins"
    nopasswd true</pre>

<p>Like Puppet, Chef is a configuration management tool that is written in Ruby. Chef can use a client/server architecture or a standalone client configuration.  Chef communicates by using Hypertext Transfer Protocol Secure (HTTPS) on the traditional Transmission Control Protocol (TCP) port 443. Configuration information is contained within cookbooks that are written in Ruby DSL and are stored on a Chef Server.  Managed nodes that are running the Chef Client can pull cookbooks from the server.  Standalone clients that do not have access to a server can run chef-solo and pull cookbooks from a local directory or from a tar. gz archive on the Internet.</p>

<p>The following code is part of a Python script that defines a Python dictionary, not a Puppet resource declaration: </p>

<pre>sudo = {
    "group" :  "CoAdmins",
    "content" : "%admin ALL=(ALL) ALL"
}</pre>

<p>Python is a scripting language that can be used for a wide variety of purposes.  The configuration management tools Ansible and Salt are both written in Python. Ansible is an agentless solution.  Salt can be configured to use a client/server architecture or to use Secure Shell (SSH). Configuration information for each solution is stored primarily in state modules that are typically written in YAML Ain't Markup Language (YAML). A Python dictionary is a construct that is comprised of key and value pairs separated by a colon.  In addition, the entire collection of pairs is contained within curly brackets.</p>

<p>The following code is a JavaScript Object Notation (JSON) object, not a Puppet resource declaration:</p>

<pre>{
    sudo : {
        "group"    : "CoAdmins",
        "content" : "%admin ALL=(ALL) ALL"
    }
}</pre>

<p>JSON is a human-readable data format that is often delivered by Representational State Transfer (REST) Application Programming Interfaces (APIs). Like Python dictionaries, JSON objects are comprised of key and value pairs separated by a colon. The entirety of an object is contained within curly brackets.  A JSON object can also contain other JSON objects. </p>`,
    reference: [
      {
        title: "Boson CCNA Curriculum 200-301",
        description: "Module 9:  Automation and Programming, Puppet"
      },
      {
        title: "Puppet:  Manage sudo privileges",
        description: ""
      }
    ]
  },

  {
  id: 19,
  category: "IP Connectivity",
  questionType: "Matching",
  question: `<p>To complete this question, click <strong>Launch Simulator</strong> and follow the on-screen instructions.</p>

<p>Match each EIGRP term with its correct definition. </p>`,
  
  matchingPairs: {
    terms: [
      { id: "feasible-distance", text: "Feasible Distance" },
      { id: "successor", text: "Successor" },
      { id: "feasible-successor", text: "Feasible Successor" },
      { id: "advertised-distance", text: "Advertised Distance" }
    ],
    definitions: [
      { id: "def1", text: "The best metric along a path", correctMatch: "feasible-distance" },
      { id: "def2", text: "The best path to a destination network", correctMatch: "successor" },
      { id: "def3", text:  "A backup path that is guaranteed to be loop-free", correctMatch:  "feasible-successor" },
      { id: "def4", text: "The metric that the next-hop router has calculated", correctMatch: "advertised-distance" }
    ]
  },
  
  correctAnswer: {
    "feasible-distance": "def1",
    "successor": "def2",
    "feasible-successor": "def3",
    "advertised-distance": "def4"
  },
  
  explanation:  `<p>Feasible distance (FD) is the Enhanced Interior Gateway Routing Protocol (EIGRP) term for the best metric along a path to a destination.  The FD includes the metric to a neighbor router plus that neighbor router's advertised distance (AD) to the destination network. The AD, which is also called the reported distance (RD), is the metric that has been calculated by the next-hop router.</p>

<p>The successor is the best path to a destination network. The route with the lowest FD is chosen as the successor. The successor route is placed in the routing table and is used to route packets to the destination network. </p>

<p>A feasible successor is a backup path that is guaranteed to be loop-free and can be used if the successor route goes down. If the AD for a nonsuccessor route is less than the FD of the successor, the route is a feasible successor. If the AD of a route is greater than the FD of the successor, the route cannot be guaranteed to be free of loops and cannot be chosen as a feasible successor.</p>`,
  
  reference: [
    {
      title: "Cisco:  Introduction to EIGRP",
      description: ""
    }
  ]
},

{
    id: 57,
    category: "IP Connectivity",
    questionType: "Single-select",
    question: `<p>You issue the <strong>show ip ospf interface fastethernet 0/1</strong> command on Router1 and receive the following output:</p>

<pre>Router1#show ip ospf interface fastethernet 0/1
FastEthernet0/1 is up, line protocol is up
  Internet Address 10.2.16.43/24, Area 0
  Process ID 1, Router ID 10.0.0.4, Network Type BROADCAST, Cost:  1
  Transmit Delay is 1 sec, State DROTHER, Priority 50
  Designated Router (ID) 10.0.0.7, Interface Address 10.2.16.1
  Backup Designated router (ID) 10.0.0.11, Interface Address
10.2.16.17
    Timer intervals configured, Hello 10, Dead 40, Wait 40, Retransmit 5
    Hello due in 00:00:04
  Neighbor Count is 5, Adjacent neighbor count is 2
    Adjacent with neighbor 10.0.0.7  (Designated Router)
    Adjacent with neighbor 10.0.0.11  (Backup Designated Router)
  Suppress hello for 0 neighbor(s)</pre>

<p>Which of the following statements is correct?   (Select the best answer.  )</p>`,
    options: [
      "The BDR has a priority higher than 50.",
      "Router1 is connected to a point-to-multipoint network.",
      "Router1 can establish adjacencies with only two routers on this interface.",
      "Router1 is the DR for the segment.",
      "Router1 is configured with incorrect timer settings."
    ],
    correctAnswer: 2,
    explanation: `<p>Router1 can establish adjacencies with only two routers on this interface.  The output of the <strong>show ip ospf interface fastethernet 0/1</strong> command shows that Router1 is in the DROTHER state.  A router in the DROTHER state can only establish adjacencies with the designated router (DR) and the backup designated router (BDR). Therefore, Router1 is neither the DR nor the BDR.  The DR has a router ID of 10.0.0.7 and an IP address of 10.2.16.1, and the BDR has a router ID of 10.0.0.11 and an IP address of 10.2.16.17.</p>

<p>Router1 is not connected to a point-to-multipoint network, because the network segment contains a DR and a BDR.  A DR and a BDR are not elected on point-to-multipoint or point-to-point networks; they are elected only on multiaccess networks. </p>

<p>The BDR might or might not have a priority higher than 50. If Router1 were started after the DR and BDR were elected, Router1 would not be eligible to become the DR or the BDR, regardless of the priority value of Router1, until the existing DR and BDR failed or were powered off.  If Router1 were started at the same time as the existing DR and BDR, the BDR would have a priority of at least 50 because Router1 has a priority of 50. If the BDR and Router1 have the same priority, the BDR will be elected before Router1 because it has a higher router ID than Router1.</p>

<p>Router1 is not configured with incorrect timer settings.  The Hello timers and dead timers between two routers must match for the routers to establish a neighbor adjacency. Therefore, if Router1 were configured with incorrect timer settings, Router1 would not be able to establish adjacencies with the DR and the BDR. By default, the Hello timer is set to 10 seconds and the dead timer is set to 40 seconds on point-to-point and broadcast links. </p>`,
    reference: [
      {
        title: "Boson CCNA Curriculum 200-301",
        description: "Module 6: IP Routing, Understanding OSPF Adjacencies"
      },
      {
        title: "Boson CCNA Curriculum 200-301",
        description: "Module 6: IP Routing, Troubleshooting OSPF Adjacencies"
      },
      {
        title: "Cisco:  What Does the show ip ospf interface Command Reveal? ",
        description: ""
      }
    ]
  },

  {
    id: 493,
    category: "Network Access",
    questionType: "Single-select",
    question: `<p>Which of the following statements about FlexConnect ACLs is true?  (Select the best answer.  )</p>`,
    options: [
      "They are supported on the native VLAN.",
      "They are applied per AP and per interface.",
      "They can be configured with a per-rule direction.",
      "They do not support the implicit deny rule."
    ],
    correctAnswer:  0,
    explanation: `<p>FlexConnect access control lists (ACLs) are supported on the native virtual local area network (VLAN). FlexConnect ACLs are similar to traditional Cisco IOS ACLs in that they are rules that permit or deny traffic from a given source to a given destination. However, FlexConnect ACLs are configured on Cisco wireless lightweight access point (AP) VLAN interfaces if the lightweight AP is operating in FlexConnect mode. Although it is possible to configure FlexConnect ACLs for the native VLAN, it is not possible to configure FlexConnect ACLs for the native VLAN if the VLAN configuration is inherited from a FlexConnect group. </p>

<p>FlexConnect ACLs are applied per AP and per VLAN, not per AP and per interface. One possible application of FlexConnect ACLs is to prevent administration of the wireless local area network (WLAN) from a particular VLAN.  Even though FlexConnect ACLs are applied differently than traditional ACLs, it is important to name FlexConnect ACLs differently from any traditional ACLs that might be configured on the WLAN.</p>

<p>FlexConnect ACLs cannot be configured with a per-rule direction. This is in contrast to a traditional ACL, which can be configured with inbound rules or outbound rules. A FlexConnect ACL is applied in the ingress direction or the egress direction as an entire set of rules, not on a per-rule basis.</p>

<p>FlexConnect ACLs support the implicit deny rule. In this way, FlexConnect ACLs work similarly to traditional ACLs.  The implicit deny rule is an invisible rule that is applied to the end of an ACL.  It ensures that traffic that is not explicitly matched by a previous rule in the ACL is denied by the ACL.</p>`,
    reference: [
      {
        title: "Cisco:  Configuring FlexConnect ACLs:   Restrictions for FlexConnect Access Control Lists",
        description: ""
      }
    ]
  },

  {
    id: 624,
    category: "Network Fundamentals",
    questionType: "Single-select",
    question: `<p>Which of the following MAC addresses represents an IP multicast address?  (Select the best answer.  )</p>`,
    options: [
      "00-00-0C-F0-F0-F0",
      "01-00-5E-0F-0F-0F",
      "CF-00-00-00-00-00",
      "FF-FF-FF-FF-FF-FF"
    ],
    correctAnswer:  1,
    explanation: `<p>The Media Access Control (MAC) address 01-00-5E-0F-0F-0F represents an Internet Protocol (IP) multicast address. The Ethernet multicast range of 01-00-5E-00-00-00 through 01-00-5E-7F-FF-FF has been allocated for IP multicast use. This means that the first 24 bits of a 48-bit multicast MAC address are always 01-00-5E, and the twenty-fifth bit is always set to 0. The remaining 23 bits are created from the last 23 bits of the multicast IP address.   Because IP addresses are 32 bits long, several multicast IP addresses correspond to each multicast MAC address. For example, the IP addresses 224.15.15.15 and 225.143.15.15 share the same last 23 bits, as shown below: </p>

<pre>224.15.15.15:  11100000 <strong>00001111 00001111 00001111</strong>
225.143.15.15: 11100001 <strong>10001111 00001111 00001111</strong></pre>

<p>The last 23 bits of each address is bold for emphasis. </p>

<p>MAC addresses are written in hexadecimal format.  With MAC addresses, numbers have a lower value than letters and the hexadecimal value A is lower than the hexadecimal value F. A MAC address is composed of six 8-bit octets for a total of 6 bytes of data in the entire address, as shown in the following diagram:</p>

<img src="/images/mac-address-structure.png" alt="MAC Address Structure showing 6 bytes divided into OUI (first 3 octets) and NIC-specific identifier (last 3 octets)" style="max-width: 500px; margin: 20px 0;" />

<p>The most significant bytes are at the beginning, or leftmost octet, and are transmitted first.   Bytes decrease in significance as you move to the right through the address to the least significant octet appearing at the end, or rightmost octet. The first three octets represent the organizationally unique identifier (OUI), which is assigned by the Institute of Electrical and Electronics Engineers (IEEE) to identify the manufacturer of the device, and the last three octets make up the unique network interface card (NIC)-specific identifier assigned to the device by the manufacturer.  For example, the MAC address 00-00-0C-F0-F0-F0 represents a unicast MAC address which indicates that the device was manufactured by Cisco. </p>

<p>The significance of each octet follows the same rule of the overall address: the most significant bit is on the left, and the least significant bit is on the right. However, when transmitted, a bit differs from a byte in that the least significant bit of a byte is transmitted first. The two least significant bits of the most significant byte of a MAC address are used as indicator flags; these two bits are bit 2 and bit 1 in the example below: </p>

<img src="/images/mac-address-bits.png" alt="MAC Address bit structure showing bit 1 for unicast/multicast and bit 2 for global/local admin" style="max-width: 500px; margin: 20px 0;" />

<p>The least significant bit, or bit 1, of the most significant byte is where a MAC address is designated as a unicast address or a multicast address; a 0 equates to unicast, and a 1 equates to multicast. The second least significant bit, or bit 2, is used to designate whether the MAC address is globally administered by the IEEE and carries an OUI or whether the MAC address is locally administered; a 0 indicates the presence of an OUI, and a 1 indicates a locally administered MAC address.</p>

<p>There are several MAC addresses that have been given special definitions by the IEEE. For example, the FF-FF-FF-FF-FF-FF address is reserved for use as the Ethernet broadcast address and the CF-00-00-00-00-00 address is reserved for Ethernet loopback testing. </p>`,
    reference: [
      {
        title: "CCNA 200-301 Official Cert Guide",
        description: "Volume 1, Chapter 2:  Fundamentals of Ethernet LANs, Ethernet Addressing"
      },
      {
        title: "IANA:  Ethernet Numbers",
        description: ""
      },
      {
        title: "IETF:   RFC 7042:  IANA Considerations and IETF Protocol and Documentation Usage for IEEE 802 Parameters",
        description: ""
      }
    ]
  },

  {
    id: 69,
    category: "IP Connectivity",
    questionType: "Single-select",
    question: `<img src="/images/ospf-area0-network.png" alt="Network diagram showing RouterA and RouterB connected via FastEthernet interfaces in OSPF Area 0. RouterA Fa1/0: 10.10.10.1/30, RouterB Fa1/0: 10.10.10.2/30" style="max-width: 600px; margin: 20px 0;" />

<p>You administer the OSPF network in the above exhibit. </p>

<p>RouterA has been configured with a default route to the ISP through the Serial 0/0 interface.    RouterB is not configured with a gateway of last resort.   OSPF has been properly configured on both routers and is converged. You want RouterB to forward traffic that is destined for the Internet to RouterA. </p>

<p>Which of the following commands could you issue on RouterA to accomplish your goal?   (Select the best answer.   )</p>`,
    options: [
      "RouterA(config)#ip route 0.0.0.0 0.0.0.0 FastEthernet 1/0",
      "RouterA(config-router)#default-information originate",
      "RouterA(config-router)#network 10.10.10.2 0.0.0.3 area 0",
      "RouterA(config)#ip route 0.0.0.0 0.0.0.0 10.10.10.2",
      "RouterA(config)#ip route 0.0.0.0 0.0.0.0 Serial 0/0"
    ],
    correctAnswer: 1,
    explanation: `<p>You could issue the following command to configure RouterB with a gateway of last resort that would cause RouterB to forward traffic that is destined for the Internet to RouterA:  </p>

<pre>RouterA(config-router)#default-information originate</pre>

<p>By default, Open Shortest Path First (OSPF) does not advertise a default route to neighboring routers.   The <strong>default-information originate</strong> command configures an OSPF router to inject its default route into OSPF as an external route, thereby advertising its default route to neighboring routers and causing the neighbor routers to become configured with a gateway of last resort.</p>

<p>You should not issue the <strong>ip route 0.0.0.0 0.0.0.0 FastEthernet 1/0</strong> command or the <strong>ip route 0.0.0.0 0.0.0.0 10.10.10.2</strong> command on RouterA.   Both of those commands would configure RouterA to use RouterB's FastEthernet 1/0 interface as a gateway of last resort.  </p>

<p>You do not need to issue the <strong>ip route 0.0.0.0 0.0.0.0 Serial 0/0</strong> command on RouterA.  In this scenario, RouterA has already been configured with a default route to the Internet service provider (ISP) through the Serial 0/0 interface.</p>

<p>You do not need to issue the <strong>network 10.10.10.2 0.0.0.3 area 0</strong> command on RouterA. In this scenario, OSPF has already been properly configured on RouterA and RouterB and is fully converged.   Therefore, all <strong>network</strong> commands have already been issued.  </p>`,
    reference: [
      {
        title: "Boson CCNA Curriculum 200-301",
        description: "Module 6:  IP Routing, Configuring Multiarea OSPFv2"
      },
      {
        title: "Cisco:   How OSPF Injects a Default Route into a Normal Area",
        description: ""
      }
    ]
  },

  {
    id: 50,
    category: "IP Connectivity",
    questionType: "Multi-select",
    question: `<p>On which interfaces is the OSPF broadcast network type enabled by default?  (Select 2 choices.   )</p>`,
    options: [
      "X.25",
      "Ethernet",
      "HDLC",
      "PPP",
      "FDDI",
      "Frame Relay"
    ],
    correctAnswers: [1, 4],
    explanation: `<p>The Open Shortest Path First (OSPF) broadcast network type is enabled by default on Fiber Distributed Data Interface (FDDI) and Ethernet interfaces, including Fast Ethernet and Gigabit Ethernet interfaces.   If the <strong>ip ospf network</strong> command has not been issued for an OSPF interface, the default network type is used.    The default OSPF network type depends upon the type of network to which the interface is connected.</p>

<p>There are five OSPF network types:  </p>

<ul>
  <li>Broadcast</li>
  <li>Nonbroadcast</li>
  <li>Point-to-point</li>
  <li>Point-to-multipoint broadcast</li>
  <li>Point-to-multipoint nonbroadcast</li>
</ul>

<p>On broadcast networks, designated router (DR) and backup designated router (BDR) elections are performed.   Multicast updates are sent, so manual configuration of neighbor routers with the <strong>neighbor</strong> command is not required.    By default, the Hello timer is set to 10 seconds and the dead timer is set to 40 seconds.   To configure an OSPF broadcast network, you should issue the <strong>ip ospf network broadcast</strong> command.</p>

<p>The OSPF nonbroadcast network type is enabled by default on Frame Relay and X.25 interfaces.  On nonbroadcast networks, DR and BDR elections are performed.    Nonbroadcast networks do not allow multicasts; therefore, manual configuration of neighbor routers with the <strong>neighbor</strong> command is required so that OSPF sends unicast updates.   By default, the Hello timer is set to 30 seconds and the dead timer is set to 120 seconds.  To configure an OSPF nonbroadcast network, which is also called a nonbroadcast multiaccess (NBMA) network, you should issue the <strong>ip ospf network non-broadcast</strong> command.</p>

<p>The OSPF point-to-point network type is enabled by default on High-Level Data Link Control (HDLC) and Point-to-Point Protocol (PPP) serial interfaces.  On point-to-point networks, DR and BDR elections are not performed.  Multicast updates are sent, so manual configuration of neighbor routers with the <strong>neighbor</strong> command is not required.   By default, the Hello timer is set to 10 seconds and the dead timer is set to 40 seconds.  To configure an OSPF point-to-point network, you should issue the <strong>ip ospf network point-to-point</strong> command. </p>

<p>On OSPF point-to-multipoint networks, DR and BDR elections are not performed.  Multicast updates are sent, so manual configuration of neighbor routers with the <strong>neighbor</strong> command is not required.  By default, the Hello timer is set to 30 seconds and the dead timer is set to 120 seconds.   To configure an OSPF point-to-multipoint broadcast network, you should issue the <strong>ip ospf network point-to-multipoint</strong> command.</p>

<p>On OSPF point-to-multipoint nonbroadcast networks, DR and BDR elections are not performed. Nonbroadcast networks do not allow multicasts; therefore, manual configuration of neighbor routers with the <strong>neighbor</strong> command is required so that OSPF sends unicast updates.   By default, the Hello timer is set to 30 seconds and the dead timer is set to 120 seconds.   To configure an OSPF point-to-multipoint nonbroadcast network, you should issue the <strong>ip ospf network point-to-multipoint non-broadcast</strong> command. </p>`,
    reference: [
      {
        title: "Boson CCNA Curriculum 200-301",
        description: "Module 6:   IP Routing, OSPF Interface Types"
      },
      {
        title: "Cisco:   Initial Configurations for OSPF over a Point-to-Point Link",
        description: ""
      },
      {
        title: "Cisco:  OSPF Design Guide:   Adjacencies on Non-Broadcast Multi-Access (NBMA) Networks",
        description: ""
      },
      {
        title: "Cisco:  Cisco IOS IP Routing:   OSPF Command Reference:   ip ospf network",
        description:  ""
      },
      {
        title: "Cisco:  Configuring OSPF",
        description: ""
      }
    ]
  },

  {
    id: 684,
    category: "Network Access",
    questionType: "Single-select",
    question: `<p>Which of the following standards natively includes PortFast, UplinkFast, and BackboneFast?  (Select the best answer.)</p>`,
    options: [
      "802.1D",
      "802.1w",
      "802.1s",
      "802.1D and 802.1w",
      "802.1D and 802.1s"
    ],
    correctAnswer: 1,
    explanation: `<p>The 802.1w Rapid Spanning Tree Protocol (RSTP) standard natively includes PortFast, UplinkFast, and BackboneFast.  PortFast enables a port to immediately access the network by transitioning the port into the Spanning Tree Protocol (STP) forwarding state without passing through the listening and learning states. UplinkFast increases convergence speed for an access layer switch that detects a failure on the root port with backup root port selection by immediately replacing the root port with an alternative root port. BackboneFast increases convergence speed for switches that detect a failure on links that are not directly connected to the switch.</p>

<p>The 802.1D standard is traditional STP, which prevents switching loops on a network.  Although PortFast, UplinkFast, and BackboneFast can be used with the 802.1D standard, it does not contain those features natively.  Traditional STP converges slowly, so the 802.1w RSTP standard was developed by the Institute of Electrical and Electronics Engineers (IEEE) to address the slow transition of an 802.1D port to the forwarding state.  RSTP is backward compatible with STP, but the convergence benefits provided by RSTP are lost when RSTP interacts with STP devices.</p>

<p>The 802.1s Multiple Spanning Tree (MST) standard is used to create multiple spanning tree instances on a network.  Implementing MST on a switch also implements RSTP. However, the 802.1s standard does not natively include PortFast, UplinkFast, and BackboneFast within the specification. </p>`,
    reference: [
      {
        title: "Boson CCNA Curriculum 200-301",
        description: "Module 5:  Switching and Network Access, Understanding RSTP"
      },
      {
        title: "CCNA 200-301 Official Cert Guide",
        description: "Volume 1, Chapter 9: Spanning Tree Protocol Concepts, Optional STP Features"
      },
      {
        title: "Cisco:  Understanding Rapid Spanning Tree Protocol (802.1w): Conclusion",
        description: ""
      }
    ]
  },

  {
    id: 678,
    category: "Network Access",
    questionType: "Single-select",
    question: `<p>You issue the <strong>spanning-tree guard root</strong> command on a switch port that you are connecting to a new, unconfigured switch. </p>

<p>Which of the following are you most likely attempting to do?  (Select the best answer. )</p>`,
    options: [
      "prevent a port from transitioning through all of the STP states",
      "prevent the new switch from being elected root",
      "prevent loops on a port that could erroneously receive BPDUs",
      "prevent loops from an interruption of BPDU flow"
    ],
    correctAnswer: 1,
    explanation: `<p>Most likely, you are attempting to prevent the new switch from being elected root if you issue the <strong>spanning-tree guard root</strong> command on a switch port that you are connecting to a new, unconfigured switch.  The <strong>spanning-tree guard root</strong> command configures the Spanning Tree Protocol (STP) root guard feature. </p>

<p>Root guard is used to prevent newly introduced switches from being elected as the new root switch.  This allows administrators to maintain control over which switch is the root.  When STP is used, the device with the lowest switch priority is elected the root.  If a new device is added to the network with a lower priority than the current root, it will become the new root.  However, this could cause the network to reconfigure in unintended ways.  To prevent this, root guard can be applied.  Root guard is applied on a per-port basis by issuing the <strong>spanning-tree guard root</strong> command.  If root guard is enabled on a loop guard–enabled port, loop guard will be automatically disabled. </p>

<p>You are not attempting to prevent a port from transitioning through all of the STP states. If you want to ensure that a port immediately transitions to the STP forwarding state, you should enable PortFast on the port.  PortFast is a feature that provides immediate accessibility to the network for edge ports, such as access ports that are connected to end-user workstations.  PortFast transitions the port into the STP forwarding state without going through the STP listening and learning states.  Because the ports are not expected to receive bridge protocol data units (BPDUs), they are not required to listen for BPDUs and learn the network topology.  It is important to note that if PortFast is enabled on a port that is connected to another switch, the potential for creating spanning tree loops significantly increases.</p>

<p>You are not attempting to prevent loops from an interruption of BPDU flow. The loop guard feature prevents nondesignated ports from inadvertently forming bridging loops if the steady flow of BPDUs is interrupted.  When the port stops receiving BPDUs, loop guard puts the port into the loop-inconsistent state, which keeps the port in a blocking state. After the port starts receiving BPDUs again, loop guard automatically re-enables the port so that it transitions through the normal STP states.  You can enable loop guard for the entire switch by issuing the <strong>spanning-tree loopguard default</strong> command in global configuration mode, or you can enable loop guard for specific ports by issuing the <strong>spanning-tree guard loop</strong> command in interface configuration mode.</p>

<p>You are not attempting to prevent loops on a port that could erroneously receive BPDUs.  BPDU guard is used to disable ports that erroneously receive BPDUs.  BPDU guard is typically applied to edge ports that have PortFast enabled. Because PortFast automatically places ports into a forwarding state, a switch that has been connected to a PortFast-enabled port could cause switching loops.  However, when BPDU guard is applied, the receipt of a BPDU on a port will result in the port being placed into the error-disabled state, which prevents loops from occurring.  BPDU guard should be enabled on ports that have been enabled with PortFast so that BPDU guard can prevent a rogue switch from modifying the STP topology.  When such a port receives a BPDU, BPDU guard immediately puts that port into the error-disabled state and shuts down the port.  The port must then be manually re-enabled, or it can be recovered automatically by configuring the <strong>errdisable recovery cause bpduguard</strong> command and the <strong>errdisable recovery interval <em>interval</em></strong> command.</p>`,
    reference: [
      {
        title: "Boson CCNA Curriculum 200-301",
        description: "Module 5:  Switching and Network Access, Cisco Enhancements to STP"
      },
      {
        title: "CCNA 200-301 Official Cert Guide",
        description: "Volume 1, Chapter 9: Spanning Tree Protocol Concepts, Optional STP Features"
      },
      {
        title: "Cisco:  Configuring Optional Spanning-Tree Features:  Understanding Optional Spanning-Tree Features",
        url: "https://www.cisco.com/c/en/us/td/docs/switches/lan/catalyst4500/12-2/25ew/configuration/guide/conf/spantree. html"
      },
      {
        title: "Cisco: Spanning Tree Protocol Root Guard Enhancement:  Feature Description",
        url: "https://www.cisco.com/c/en/us/support/docs/lan-switching/spanning-tree-protocol/10588-74.html"
      }
    ]
  },

  {
    id: 618,
    category:  "Network Fundamentals",
    questionType: "Matching",
    question: `For each protocol instance, match it to its transport protocol category.`,
    matchingPairs: {
      terms: [
    { id: "udp1", text: "UDP" },
    { id: "tcp2", text: "TCP" },
    { id: "both1", text: "TCP & UDP" },
    { id: "tcp1", text: "TCP" },
    { id: "udp2", text: "UDP" },
    { id: "tcp3", text: "TCP" },
    { id: "udp3", text: "UDP" }
  ],
  definitions: [
    { id: "d1", text: "FTP" },
    { id: "d2", text: "HTTP" },
    { id: "d3", text: "SMTP" },
    { id: "d4", text: "DHCP" },
    { id: "d5", text: "SNMP" },
    { id: "d6", text: "TFTP" },
    { id: "d7", text: "DNS" }
  ]
},
correctAnswer: {
  udp1: "d4",    // UDP → DHCP
  tcp2: "d2",    // TCP → HTTP
  both1: "d7",   // TCP & UDP → DNS
  tcp1: "d1",    // TCP → FTP
  udp2: "d5",    // UDP → SNMP
  tcp3: "d3",    // TCP → SMTP
  udp3: "d6"     // UDP → TFTP
},
    explanation: `<p><strong>Transmission Control Protocol (TCP)</strong> is a Transport layer protocol that is used for reliable, connection-oriented transfer of data.  Data sent by TCP is ordered and checked for errors, and any lost packets are retransmitted. File Transfer Protocol (FTP), which is used to transfer files over a network, uses TCP ports 20 and 21. Hypertext Transfer Protocol (HTTP), which is used to transfer webpages over the Internet, uses TCP port 80. Simple Mail Transfer Protocol (SMTP), which is used to send email messages, uses TCP port 25.  Other Application layer protocols that use TCP include Post Office Protocol 3 (POP3), which uses TCP port 110, and Telnet, which uses TCP port 23.</p>

<p><strong>User Datagram Protocol (UDP)</strong> is a Transport layer protocol that is used for unreliable, connectionless datagram transfer.  Transmitted datagrams can appear out of sequence or can be dropped without notice. Dynamic Host Configuration Protocol (DHCP), which is used to assign Internet Protocol (IP) addressing information to clients, uses UDP ports 67 and 68. Simple Network Management Protocol (SNMP), which is used to monitor and manage network devices, uses UDP ports 161 and 162. Trivial File Transfer Protocol (TFTP), which is used to transfer files over a network, uses UDP port 69. Other Application layer protocols that use UDP include Network Time Protocol (NTP), which uses UDP port 123, and Remote Authentication Dial-In User Service (RADIUS), which uses UDP ports 1812 and 1813.</p>

<p><strong>Domain Name System (DNS)</strong> uses both TCP and UDP for Transport layer communication over port 53. DNS is used to translate host names to IP addresses. </p>`,
    reference: [
      {
        title: "Boson CCNA Curriculum 200-301",
        description: "Module 2:  Network Addressing and Transport, UDP"
      },
      {
        title: "Boson CCNA Curriculum 200-301",
        description: "Module 2: Network Addressing and Transport, TCP"
      },
      {
        title: "CCNA 200-301 Official Cert Guide",
        description: "Volume 2, Chapter 1: Introduction to TCP/IP Transport and Applications, Connection Establishment and Termination"
      },
      {
        title: "IANA:  Service Name and Transport Protocol Port Number Registry",
        url: "https://www.iana.org/assignments/service-names-port-numbers/service-names-port-numbers.xhtml"
      }
    ]
  },
  {
    id: 618,
    category: "Network Fundamentals",
    questionType: "Single-select",
    question: "Categorize the following Application layer protocols by their transport protocol.  Which of the following correctly categorizes these protocols? <br><br><strong>Protocols:</strong> FTP, HTTP, SMTP, DHCP, SNMP, TFTP, DNS<br><br><strong>Categories:</strong> TCP, UDP, or TCP & UDP",
    options: [
      "TCP:  FTP, HTTP, SMTP | UDP:  DHCP, SNMP, TFTP | TCP & UDP: DNS",
      "TCP: FTP, SMTP, DNS | UDP: HTTP, DHCP, SNMP | TCP & UDP: TFTP",
      "TCP: HTTP, SMTP, DHCP | UDP: FTP, SNMP, TFTP | TCP & UDP: DNS",
      "TCP: FTP, HTTP, DNS | UDP: DHCP, SNMP, TFTP | TCP & UDP: SMTP"
    ],
    correctAnswer: 0,
    explanation: `<p><strong>Correct Answer:</strong></p>
<ul>
  <li><strong>TCP: </strong> FTP, HTTP, SMTP</li>
  <li><strong>UDP:</strong> DHCP, SNMP, TFTP</li>
  <li><strong>TCP & UDP:</strong> DNS</li>
</ul>

<p><strong>Transmission Control Protocol (TCP)</strong> is a Transport layer protocol that is used for reliable, connection-oriented transfer of data.  Data sent by TCP is ordered and checked for errors, and any lost packets are retransmitted.  File Transfer Protocol (FTP), which is used to transfer files over a network, uses TCP ports 20 and 21. Hypertext Transfer Protocol (HTTP), which is used to transfer webpages over the Internet, uses TCP port 80. Simple Mail Transfer Protocol (SMTP), which is used to send email messages, uses TCP port 25. Other Application layer protocols that use TCP include Post Office Protocol 3 (POP3), which uses TCP port 110, and Telnet, which uses TCP port 23.</p>

<p><strong>User Datagram Protocol (UDP)</strong> is a Transport layer protocol that is used for unreliable, connectionless datagram transfer.  Transmitted datagrams can appear out of sequence or can be dropped without notice. Dynamic Host Configuration Protocol (DHCP), which is used to assign Internet Protocol (IP) addressing information to clients, uses UDP ports 67 and 68. Simple Network Management Protocol (SNMP), which is used to monitor and manage network devices, uses UDP ports 161 and 162. Trivial File Transfer Protocol (TFTP), which is used to transfer files over a network, uses UDP port 69.  Other Application layer protocols that use UDP include Network Time Protocol (NTP), which uses UDP port 123, and Remote Authentication Dial-In User Service (RADIUS), which uses UDP ports 1812 and 1813.</p>

<p><strong>Domain Name System (DNS)</strong> uses both TCP and UDP for Transport layer communication over port 53. DNS is used to translate host names to IP addresses. </p>`,
    reference: [
      {
        title: "Boson CCNA Curriculum 200-301",
        description: "Module 2: Network Addressing and Transport, UDP"
      },
      {
        title: "Boson CCNA Curriculum 200-301",
        description:  "Module 2: Network Addressing and Transport, TCP"
      },
      {
        title: "CCNA 200-301 Official Cert Guide",
        description: "Volume 2, Chapter 1: Introduction to TCP/IP Transport and Applications, Connection Establishment and Termination"
      },
      {
        title: "IANA:  Service Name and Transport Protocol Port Number Registry",
        url: "https://www.iana.org/assignments/service-names-port-numbers/service-names-port-numbers.xhtml"
      }
    ]
  },

  {
    id: 671,
    category: "Network Access",
    questionType: "Multiple-select",
    question: `<div style="text-align:  center; margin-bottom: 20px;">
  <img src="/images/671.png" alt="SwitchA connected to SwitchB EtherChannel diagram" style="max-width: 100%; height: auto;" />
</div>

<p>You want to establish an EtherChannel between SwitchA and SwitchB by using a Cisco-proprietary protocol.  After you configure the ports on SwitchA with the correct channel protocol, you issue the <strong>channel-group 1 mode auto</strong> command on those ports.  </p>

<p>Which of the following commands should you issue on SwitchB?   (Select 2 choices. )</p>`,
    options: [
      "channel-group 1 mode passive",
      "channel-group 1 mode active",
      "channel-protocol lacp",
      "channel-group 1 mode desirable",
      "channel-group 1 mode auto",
      "channel-protocol pagp"
    ],
    correctAnswer:  [3, 5], // Multiple correct answers:  indices 3 and 5
    explanation: `<p>You should issue the <strong>channel-protocol pagp</strong> command and the <strong>channel-group 1 mode desirable</strong> command on SwitchB.  EtherChannel is used to bundle two or more identical, physical interfaces into a single logical link between switches. An EtherChannel can be permanently established between switches, or it can be negotiated by using one of two aggregation protocols: the Cisco-proprietary Port Aggregation Protocol (PAgP) or the open-standard Institute of Electrical and Electronics Engineers (IEEE) 802.3ad protocol, which is also known as Link Aggregation Control Protocol (LACP). To configure a switch port to use a particular aggregation protocol, you should use the <strong>channel-protocol {lacp | pagp}</strong> command. </p>

<p>You can issue the <strong>show etherchannel summary</strong> command to verify the status of an EtherChannel link and to determine which aggregation protocol, if any, was used to establish the link.  The following sample output indicates that the PAgP protocol was used to successfully establish an EtherChannel link: </p>

<pre>SwitchA#show etherchannel summary
Flags:    D - down        P - bundled in port-channel
        I - stand-alone s - suspended
        H - Hot-standby (LACP only)
        R - Layer3      S - Layer2
        U - in use      f - failed to allocate aggregator
        M - not in use, minimum links not met
        u - unsuitable for bundling
        w - waiting to be aggregated
        d - default port

Number of channel-groups in use: 1
Number of aggregators:             1

Group  Port-channel  Protocol    Ports
------+-------------+-----------+-----------------------------------------------
1      Po1(US)       PAgP        Fa0/5(P)    Fa0/6(P)</pre>

<p>An EtherChannel can have up to eight active switch ports in the bundle that forms the logical link between switches. Every switch port in the bundle, which is also referred to as a channel group, must be configured with the same speed and duplex settings.  To configure a switch port to be a member of a particular channel group, you should issue the <strong>channel-group <em>number</em> mode {on | active | passive | {auto | desirable} [non-silent]}</strong> command.   This command uses the <em>number</em> keyword to specify a particular channel group. The supported values for the <em>number</em> keyword vary depending on hardware platform and IOS revision.</p>

<p>The following table displays the channel-group configurations that will establish an EtherChannel: </p>

<table border="1" cellpadding="8" cellspacing="0" style="border-collapse: collapse; text-align: center; margin:  20px auto;">
  <thead>
    <tr>
      <th>SwitchA \ SwitchB</th>
      <th>off</th>
      <th>auto</th>
      <th>desirable</th>
      <th>passive</th>
      <th>active</th>
      <th>on</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><strong>off</strong></td>
      <td style="background-color: #ff0000; color: white;"><strong>NO</strong></td>
      <td style="background-color: #ff0000; color: white;"><strong>NO</strong></td>
      <td style="background-color: #ff0000; color: white;"><strong>NO</strong></td>
      <td style="background-color: #ff0000; color: white;"><strong>NO</strong></td>
      <td style="background-color: #ff0000; color: white;"><strong>NO</strong></td>
      <td style="background-color: #ff0000; color: white;"><strong>NO</strong></td>
    </tr>
    <tr>
      <td><strong>auto</strong></td>
      <td style="background-color: #ff0000; color:  white;"><strong>NO</strong></td>
      <td style="background-color: #ff0000; color:  white;"><strong>NO</strong></td>
      <td style="background-color: #0066cc; color: white;"><strong>PAgP</strong></td>
      <td style="background-color: #ff0000; color: white;"><strong>NO</strong></td>
      <td style="background-color:  #ff0000; color: white;"><strong>NO</strong></td>
      <td style="background-color: #ff0000; color: white;"><strong>NO</strong></td>
    </tr>
    <tr>
      <td><strong>desirable</strong></td>
      <td style="background-color:  #ff0000; color: white;"><strong>NO</strong></td>
      <td style="background-color: #0066cc; color: white;"><strong>PAgP</strong></td>
      <td style="background-color: #0066cc; color: white;"><strong>PAgP</strong></td>
      <td style="background-color: #ff0000; color: white;"><strong>NO</strong></td>
      <td style="background-color:  #ff0000; color: white;"><strong>NO</strong></td>
      <td style="background-color: #ff0000; color: white;"><strong>NO</strong></td>
    </tr>
    <tr>
      <td><strong>passive</strong></td>
      <td style="background-color: #ff0000; color: white;"><strong>NO</strong></td>
      <td style="background-color: #ff0000; color: white;"><strong>NO</strong></td>
      <td style="background-color: #ff0000; color: white;"><strong>NO</strong></td>
      <td style="background-color: #ff0000; color: white;"><strong>NO</strong></td>
      <td style="background-color: #6600cc; color: white;"><strong>LACP</strong></td>
      <td style="background-color: #ff0000; color: white;"><strong>NO</strong></td>
    </tr>
    <tr>
      <td><strong>active</strong></td>
      <td style="background-color:  #ff0000; color: white;"><strong>NO</strong></td>
      <td style="background-color: #ff0000; color: white;"><strong>NO</strong></td>
      <td style="background-color:  #ff0000; color: white;"><strong>NO</strong></td>
      <td style="background-color: #6600cc; color: white;"><strong>LACP</strong></td>
      <td style="background-color: #6600cc; color: white;"><strong>LACP</strong></td>
      <td style="background-color:  #ff0000; color: white;"><strong>NO</strong></td>
    </tr>
    <tr>
      <td><strong>on</strong></td>
      <td style="background-color: #ff0000; color: white;"><strong>NO</strong></td>
      <td style="background-color: #ff0000; color: white;"><strong>NO</strong></td>
      <td style="background-color: #ff0000; color: white;"><strong>NO</strong></td>
      <td style="background-color: #ff0000; color: white;"><strong>NO</strong></td>
      <td style="background-color: #ff0000; color: white;"><strong>NO</strong></td>
      <td style="background-color: #00cc00; color: white;"><strong>ON</strong></td>
    </tr>
  </tbody>
</table>

<p>The <strong>on</strong> keyword configures the channel group to unconditionally create the channel with no LACP or PAgP negotiation. In the <strong>on</strong> mode, an EtherChannel exists only if a channel group that is in the <strong>on</strong> mode is connected to another channel group that is also in the <strong>on</strong> mode. </p>

<p>The <strong>auto</strong>, <strong>desirable</strong>, and <strong>non-silent</strong> keywords can be used only with PAgP.  The <strong>desirable</strong> keyword configures the channel group to actively negotiate PAgP, and the <strong>auto</strong> keyword configures the channel group to listen for PAgP negotiation to be offered.  Either or both sides of the link must be set to <strong>desirable</strong> to establish an EtherChannel over PAgP; setting both sides to <strong>auto</strong> will not establish an EtherChannel over PAgP.   The optional <strong>non-silent</strong> keyword requires that a port receive PAgP packets before the port is added to the channel. </p>

<p>The <strong>active</strong> and <strong>passive</strong> keywords can be used only with LACP. The <strong>active</strong> keyword configures the channel group to actively negotiate LACP, and the <strong>passive</strong> keyword configures the channel group to listen for LACP negotiation to be offered. Either or both sides of the link must be set to <strong>active</strong> to establish an EtherChannel over LACP; setting both sides to <strong>passive</strong> will not establish an EtherChannel over LACP. </p>`,
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
        title:  "Cisco:  Catalyst 3750 Switch Cisco IOS Commands: channel-group",
        url: "https://www.cisco.com/c/en/us/td/docs/switches/lan/catalyst3750/software/release/12-2_55_se/command/reference/cr3750/cli1.html#wp1486659"
      },
      {
        title:  "Cisco: Catalyst 3750 Switch Cisco IOS Commands: channel-protocol",
        url: "https://www.cisco.com/c/en/us/support/docs/lan-switching/etherchannel/12025-4.html"
      }
    ]
  },

  {
    id: 489,
    category: "Network Access",
    questionType: "Single-select",
    question: `<p>You have enabled LAG on a WLC that contains eight distribution system ports. </p>

<p>How many ports will be included in the LAG bundle by default?  (Select the best answer.)</p>`,
    options: [
      "four",
      "one",
      "none",
      "eight"
    ],
    correctAnswer: 3,
    explanation: `<p>By default, all eight ports will be included in the link aggregation (LAG) bundle if you have enabled LAG on a Cisco wireless LAN controller (WLC) that contains eight distribution system ports.  A distribution system port is a data port that typically connects to a switch in Institute of Electrical and Electronics Engineers (IEEE) 802.1Q trunk mode.  Similar to EtherChannel on switches, LAG enables multiple physical ports on a WLC to operate as one logical group.  Thus, LAG enables load balancing across links between devices and redundancy.  If one link fails, the other links in the LAG bundle will continue to function. </p>

<p>LAG will bundle all eight ports in this scenario.  However, LAG requires only one functional physical port in order to pass client traffic. Similar to EtherChannel, LAG enables redundancy.  If one physical port fails in a LAG bundle, the other ports are capable of passing client traffic in that port's place.  If all but one port in a LAG bundle fails, that port will pass client traffic for all of the failed ports.</p>

<p>Distribution system ports can be configured to work in pairs or independently of each other if LAG is disabled. By default, a Cisco WLC's distribution system ports operate in 802.1Q trunk mode, forming a trunk link between each WLC distribution system port and the switch to which it is connected. When enabled, LAG modifies this configuration so that the ports are bundled and no longer operate as independent trunk links.</p>`,
    reference: [
      {
        title: "CCNA 200-301 Official Cert Guide",
        description:  "Volume 1, Chapter 29: Building a Wireless LAN, Using WLC Ports"
      },
      {
        title: "Cisco:  Configuring Link Aggregation:  Restrictions on Link Aggregation",
        url:  "https://www.cisco.com/c/en/us/td/docs/wireless/controller/8-5/config-guide/b_cg85/link_aggregation.html"
      }
    ]
  },

  {
    id: 58,
    category: "IP Connectivity",
    questionType: "Multiple-select",
    question: `<p>You are attempting to configure OSPF between RouterA and RouterB on your network. However, the routers are unable to form an OSPF adjacency.   You issue the <strong>show ip ospf interface fastethernet 0/0</strong> command on each router and receive the following output:</p>

<pre>RouterA#show ip ospf interface fastethernet 0/0
FastEthernet 0/0 is up, line protocol is up
  Internet Address 10.1.1.13/30, Area 0
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
  Internet Address 10.1.1.14/30, Area 1
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
  Suppress hello for 0 neighbor(s)</pre>

<p>Why are the routers unable to form an adjacency?   (Select 2 choices. )</p>`,
    options: [
      "The OSPF areas must match.",
      "The cost must be higher than 1.",
      "The IP addresses are configured with the wrong subnet mask.",
      "The router IDs must not match.",
      "The OSPF process IDs must match.",
      "The dead timer value must match the Hello timer value."
    ],
    correctAnswer: [0, 3], // Indices 0 and 3
    explanation: `<p>The routers are unable to form an adjacency for two reasons:  the Open Shortest Path First (OSPF) areas must match, and the router IDs must not match.   Only OSPF routers in the same hierarchical area form adjacencies.   To configure an OSPF area, you should issue the <strong>network <em>address mask</em> area <em>area</em></strong> command in OSPF router configuration mode.</p>

<p>Although you can configure a multiarea OSPF topology, the OSPF areas on neighboring interfaces must match in order for two OSPF routers to form an adjacency.  In this scenario, RouterB's FastEthernet 0/0 interface is operating in Area 1 and is directly connected to RouterA's FastEthernet 0/0 interface, which is operating in Area 0.  Area 0 is also known as the backbone area.   If you are not using virtual links, any nonbackbone OSPF areas you configure must border Area 0.  On smaller networks, single-area OSPF configurations also offer the benefit of generating fewer link-state advertisements (LSAs).</p>

<p>Router IDs must be unique; a router will ignore Hello packets that are marked with its own router ID.  To manually configure the router ID, you should issue the <strong>router-id <em>ip-address</em></strong> command in router configuration mode, where <em>ip-address</em> is a 32-bit value in dotted decimal notation.   If the router ID is not manually configured, the router ID will be the highest loopback Internet Protocol (IP) address configured on a router.   If a loopback IP address is not configured, then the router ID will be the highest IP address among the configured interfaces on the router.</p>

<p>Whereas Enhanced Interior Gateway Routing Protocol (EIGRP) process IDs must match when EIGRP is used, OSPF process IDs do not have to match when OSPF is used.  The OSPF process ID is locally significant to the router and can be any positive integer in the range from 1 through 65535.  You can specify the OSPF process ID by issuing the <strong>router ospf <em>process-id</em></strong> command when you configure a router for OSPF.</p>

<p>The cost does not have to be higher than 1.   By default, OSPF uses the bandwidth of a link to determine the cost.   The higher the bandwidth, the lower the cost.  To calculate the cost, divide 100,000,000 by the bandwidth in bits per second (bps).  The FastEthernet 100-megabits per seconds (Mbps) link between RouterA and RouterB would have a default cost of 1, because 100,000,000 ÷ 100,000,000 = 1.  To manually configure the OSPF cost of a link, you should issue the <strong>ip ospf cost <em>cost</em></strong> command in interface configuration mode. </p>

<p>The IP addresses for RouterA and RouterB are within the same subnet.   Therefore, the subnet mask is correct, and the two routers should be able to communicate.   A /30 subnet mask allows for two hosts per subnet.  In this example, 10.1.1.12/30 is the network address, 10.1.1.13/30 and 10.1.1.14/30 are valid host addresses, and 10.1.1.15/30 is the broadcast address. </p>

<p>The dead timer value should not match the Hello timer value.  In order for OSPF routers to establish an adjacency, the dead timer on one router should match the dead timer on the other router and the Hello timer on one router should match the Hello timer on the other router.  Both RouterA and RouterB are set to a hello interval of 10 seconds and a dead interval of 40 seconds, so the OSPF timers are configured correctly.   The Hello timer is used to specify the amount of time between sending Hello packets, and the dead timer is used to specify the amount of time to wait for Hello packets before declaring a neighbor to be down.   By default, the Hello timer is set to 10 seconds on point-to-point and broadcast links and 30 seconds on nonbroadcast multiaccess (NBMA) links.   The dead timer is set to four times the Hello timer value by default.   To manually configure the Hello timer interval, you should issue the <strong>ip ospf hello-interval <em>seconds</em></strong> command in interface configuration mode.   To manually configure the dead timer interval, you should issue the <strong>ip ospf dead-interval <em>seconds</em></strong> command in interface configuration mode.</p>`,
    reference: [
      {
        title: "Boson CCNA Curriculum 200-301",
        description: "Module 6:  IP Routing, Troubleshooting OSPF Adjacencies"
      },
      {
        title: "Cisco:  OSPF Neighbor Problems Explained",
        url: "https://www.cisco.com/c/en/us/support/docs/ip/open-shortest-path-first-ospf/13685-13. html"
      },
      {
        title: "Cisco: OSPF Design Guide",
        url: "https://www.cisco.com/c/en/us/support/docs/ip/open-shortest-path-first-ospf/7039-1.html"
      },
      {
        title: "Cisco: What Does the show ip ospf interface Command Reveal?",
        url: "https://www.cisco.com/c/en/us/support/docs/ip/open-shortest-path-first-ospf/13688-show-ip-ospf. html"
      }
    ]
  },

  {
    id: 76,
    category: "IP Connectivity",
    questionType: "Single-select",
    question: `<p>You issue the following command on a Cisco router in global configuration mode: </p>

<pre><strong>ipv6 route 2001:db8:a: :/32 fastethernet 0/1 2001:db8:b:: 1</strong></pre>

<p>Which of the following have you created?  (Select the best answer. )</p>`,
    options: [
      "a directly attached static route",
      "a recursive static route",
      "a floating static route",
      "a fully specified static route"
    ],
    correctAnswer: 3,
    explanation: `<p>You have created a fully specified Internet Protocol version 6 (IPv6) static route if you issue the <strong>ipv6 route 2001:db8:a: :/32 fastethernet 0/1 2001:db8:b::1</strong> command on a Cisco router in global configuration mode.   A fully specified static route is an IPv6 static route in which the destination network, outbound interface, and next-hop IPv6 address are all configured directly.   In this scenario, the IPv6 prefix of 2001:db8:a: :/32 represents the destination network.   The router's FastEthernet 0/1 interface is the outbound interface.   The IPv6 address of 2001:db8:b::1 is the next-hop IPv6 address.   Fully specified static routes are most often used when the outbound interface is multiaccess and could therefore be configured with multiple next-hop addresses.   The next-hop address that is specified in the command must be directly connected to the outbound interface. </p>

<p>There are three other types of IPv6 static routes:   directly attached static routes, recursive static routes, and floating static routes.   A directly attached static route specifies the destination IPv6 network and the outbound interface.  For example, the <strong>ipv6 route 2001:db8:a: :/32 fastethernet 0/1</strong> command configures a directly attached static route.   When a directly connected static route is configured, the router assumes that any packet that matches the destination network is reachable through the specified outbound interface.  Therefore, the packet's full destination address is used as the IPv6 next-hop address.</p>

<p>A recursive static route specifies the destination IPv6 network and the IPv6 next-hop address only.  For example, the <strong>ipv6 route 2001:db8:a::/32 2001:db8:a::1</strong> command configures the router to resolve all IPv6 addresses in the 2001:db8:a::/32 prefix through the next hop that has been assigned the IPv6 address of 2001:db8:a::1.  The router assumes the outbound interface to be the interface to which the next hop is either directly or indirectly connected.   In other words, the next-hop IPv6 address must be resolvable through the outbound interface. </p>

<p>A floating static route can be comprised of any of the other three types of IPv6 static routes.  A floating static route is typically used as a backup route when the primary route goes down.  Floating static routes are typically configured with an administrative distance (AD) value that is numerically higher than the AD of the primary route.  For example, the <strong>ipv6 route 2001:db8:a::/32 2001:db8:a::1 5</strong> command will install a static route with an AD of 5.  If a static route with the default AD of 1 were to go down, the floating static route could be used as a backup route to the destination network.</p>`,
    reference: [
      {
        title: "Boson CCNA Curriculum 200-301",
        description: "Module 6: IP Routing, IPv6 Static Routes"
      },
      {
        title: "Cisco:  IPv6 Routing:  Static Routing:  Information About IPv6 Routing:  Static Routing",
        url: "https://www.cisco.com/c/en/us/td/docs/ios-xml/ios/ipv6_basic/configuration/xe-16/ip6b-xe-16-book/ip6-route-static-xe. html"
      }
    ]
  },

  {
    id: 93,
    category: "IP Services",
    questionType: "Single-select",
    question: `<p>You connect a new Cisco Catalyst 3750-X switch to the LAN that is configured to use an NTP server.   You want the new switch to automatically obtain its time from the NTP server.  </p>

<p>You manually configure the system clock and then issue the <strong>ntp server 1.1.1.1</strong> command on the new switch.  </p>

<p>Which of the following should you do to complete a basic NTP client configuration?   (Select the best answer.  )</p>`,
    options: [
      "Disable NTP authentication.",
      "Reconfigure NTP access restrictions.",
      "Nothing; the basic configuration is complete.",
      "Reconfigure the NTP packet source IP address.",
      "Disable the NTP broadcast service."
    ],
    correctAnswer: 2,
    explanation: `<p>The basic configuration is already complete in this scenario.   Therefore, nothing else needs to be done.   In this scenario, you have manually configured the Cisco switch's system clock.   In addition, you have issued the <strong>ntp server 1.1.1.1</strong> command, which configures Network Time Protocol (NTP) on the switch to synchronize its time with the time on the device that has been assigned the Internet Protocol (IP) address of 1.1.1.1.</p>

<p>By default, NTP is enabled on all interfaces on a Cisco switch.  Therefore, all interfaces on a switch can receive NTP packets.  However, the following conditions apply to a default NTP configuration:  </p>

<ul>
  <li>NTP associations, such as peer or server associations, are not yet configured.</li>
  <li>NTP authentication is disabled.</li>
  <li>NTP access restrictions are not configured. </li>
  <li>NTP broadcast service is disabled.</li>
  <li>NTP packet source IP address is configured by the outgoing interface.</li>
</ul>

<p>Although you could also configure NTP authentication, access restrictions, and a packet source IP address in this scenario, those configurations are not necessary to complete a basic NTP client configuration on the switch.</p>

<p>You do not need to configure the NTP packet source IP address as long as the address of the outgoing interface can be used as a destination address for NTP replies.   If for some reason the outgoing interface IP address cannot be used as a destination IP address, you can configure an alternate source address to which replies can be sent.   To configure a specific source interface, issue the <strong>ntp source <em>interface-type interface-number</em></strong> command from global configuration mode.</p>

<p>The NTP broadcast service enables interfaces to send or receive NTP broadcast packets.  It can be enabled if you do not want to statically configure NTP associations.   NTP broadcast messages enable an NTP client to configure its time based on NTP broadcast messages from any NTP server on the local area network (LAN).  You can configure an interface to either send NTP broadcast messages or receive NTP broadcast messages, but not both.   To configure a Cisco device to listen for NTP broadcasts on an interface, issue the <strong>ntp broadcast client</strong> command from interface configuration mode.</p>

<p>NTP authentication ensures that the server from which NTP packets are being received is the correct server.  NTP authentication supports only Message Digest 5 (MD5) keys.  To enable authentication on an NTP client, you should issue the following command set: </p>

<pre><strong>ntp authenticate
ntp authentication-key <em>key-number</em> md5 <em>key</em>
ntp trusted-key <em>key-number</em>
ntp server <em>ip-address</em> key <em>key-number</em></strong></pre>

<p>To enable authentication on an NTP server, you should issue the following command set: </p>

<pre><strong>ntp authenticate
ntp authentication-key <em>key-number</em> md5 <em>key</em></strong></pre>

<p>NTP access restrictions can be used to prevent unauthorized servers from configuring the time on an NTP client.  To create access restrictions, create an access control list (ACL) to specify the devices with which the NTP client will synchronize, then apply the ACL to NTP by issuing the <strong>ntp access-group {peer | serve | serve-only | query-only} {<em>acl-number</em> | <em>acl-name</em>}</strong> command from global configuration mode.   NTP access group support standard, extended, and named ACLs. </p>`,
    reference: [
      {
        title: "Boson CCNA Curriculum 200-301",
        description: "Module 7:  IP Services, NTP Server Configuration"
      },
      {
        title: "Cisco:  Administering the Switch:  Default NTP Configuration",
        url: "https://www.cisco.com/c/en/us/td/docs/switches/lan/catalyst3750x_3560x/software/release/12-2_55_se/configuration/guide/3750xscg/swntp.html"
      }
    ]
  },

  {
    id: 630,
    category:  "Network Fundamentals",
    questionType: "Single-select",
    question: `<p>Which of the following IPv6 prefixes is used for unicast link-local addresses?  (Select the best answer. )</p>`,
    options: [
      "FE80::/10",
      "2000::/3",
      "FD00::/8",
      "FF00::/8",
      "FC00::/8"
    ],
    correctAnswer: 0,
    explanation: `<p>The Internet Protocol version 6 (IPv6) prefix FE80::/10 is used for unicast link-local addresses.   IPv6 addresses in the FE80::/10 range begin with the characters FE80 through FEBF.   Unicast packets are used for one-to-one communication.   Link-local addresses are unique only on the local segment.   Therefore, link-local addresses are not routable.   An IPv6-capable host typically creates a unicast link-local address automatically at startup.   Unicast link-local addresses are used for neighbor discovery and for environments in which no router is present to provide a routable IPv6 prefix.   You can issue the <strong>ipv6 enable</strong> command from interface configuration mode on a Cisco router to enable IPv6 on the interface and to automatically generate a link-local IPv6 address.   Alternatively, you can issue the <strong>ipv6 address</strong> command from interface configuration mode to configure a link-local IPv6 address and enable IPv6 on the interface.   The <strong>ipv6 address</strong> command can also be used to assign a global IPv6 unicast address to an interface, in which case IPv6 is automatically enabled and a link-local IPv6 address is automatically generated. </p>

<p>The IPv6 prefix 2000::/3 is used for global aggregatable unicast addresses.  IPv6 addresses in the 2000::/3 range begin with the characters 2000 through 3FFF.  Global aggregatable unicast address prefixes are distributed by the Internet Assigned Numbers Authority (IANA) and are globally routable over the Internet. </p>

<p>The IPv6 prefixes FC00::/8 and FD00::/8 are used for unicast site-local addresses.  IPv6 addresses in these ranges begin with the characters FC00 through FDFF.   Site-local addresses are not globally routable, but they are routable within an organization. </p>

<p>The IPv6 prefix FF00::/8 is used for multicast addresses, which are used for one-to-many communication.  IPv6 addresses in the FF00::/8 range begin with the characters FF00 through FFFF.   However, certain address ranges are used to indicate the scope of the multicast address.   The following IPv6 multicast scopes are defined:</p>

<ul>
  <li>FF01::/16 – node-local</li>
  <li>FF02::/16 – link-local</li>
  <li>FF05::/16 – site-local</li>
  <li>FF08::/16 – organization-local</li>
  <li>FF0E::/16 – global</li>
</ul>

<p>IPv6 hosts use the multicasting capabilities of the Neighbor Discovery (ND) protocol to discover the link layer addresses of neighbor hosts.  The Hop Limit field is typically set to 255 in ND packets that are sent to neighbors.   Routers decrement the Hop Limit value as a packet is forwarded from hop to hop.  Therefore, a router that receives an ND packet with a Hop Limit value of 255 considers the source of the ND packet to be a neighbor.  If a router receives an ND packet with a Hop Limit value that is less than 255, the packet is ignored, thereby protecting the router from threats that could result from the ND protocol's lack of neighbor authentication.</p>`,
    reference: [
      {
        title: "Boson CCNA Curriculum 200-301",
        description: "Module 2: Network Addressing and Transport, Review Question 3"
      },
      {
        title: "CCNA 200-301 Official Cert Guide",
        description: "Volume 1, Chapter 24: Implementing IPv6 Addressing on Routers, Link-Local Addresses"
      },
      {
        title: "RIPE:  IPv6 Address Types (PDF)",
        url: "https://www.ripe.net/participate/member-support/lir-basics/ipv6_reference_card. pdf"
      }
    ]
  },

  {
    id: 473,
    category: "Automation and Programmability",
    questionType: "Single-select",
    question: `<p>A REST API query returns the following output:</p>

<pre>{
  "id": 12345,
  "fname": "John",
  "lname": "Doe",
  "group": {
    "role": "Receivables",
    "read-only": [
      "Accounting Folder",
      "Sales Folder"
    ]
  }
}</pre>

<p>Which of the following statements is true?   (Select the best answer. )</p>`,
    options: [
      "The value of the lname key is a text value.",
      "The value of the id key is an array.",
      "The value of the fname key is equal to the lname key and its value.",
      "The value of the group key is an array.",
      "The value of the role key is an object.",
      "The value of the read-only key is a text value."
    ],
    correctAnswer:  0,
    explanation: `<p>Of the available choices, it is true that the value of the <strong>lname</strong> key in the Representational State Transfer (REST) Application Programming Interface (API) output above is a text value.   REST is an API architecture that uses Hypertext Transfer Protocol (HTTP) or HTTP Secure (HTTPS) to enable external resources to access and make use of programmatic methods that are exposed by the API.   The REST API that is being queried in this scenario has returned output in JavaScript Object Notation (JSON) format.  JSON is a data modeling language that is commonly used by REST APIs.   The JSON data modeling language returns data in the form of an object that contains key and value pairs.</p>

<p>A single JSON object can contain multiple key and value pairs.  Each key and value pair inside a JSON object is separated from the others by a comma (,).  Furthermore, each pair's key is separated from its value by a colon (:).  The element in quotation marks on the left side of each colon is the key.   The element on the right side of each colon is the value, which might or might not be enclosed in quotation marks.  There are several data value types that can be returned in JSON output:  text, numeric, array, object, Boolean, and null. </p>

<p>The value of the <strong>lname</strong> key, the value of the <strong>fname</strong> key, and the value of the <strong>role</strong> key are all text values in the JSON object in this scenario.  JSON keys and JSON text values are always enclosed in quotation marks.  Text values typically contain alphanumeric or Unicode characters. </p>

<p>The value of the <strong>id</strong> key is numeric in the JSON object in this scenario.  Numeric data is defined by digits that are not enclosed in quotation marks.  If a string of digits is enclosed in quotation marks, it will be treated as text even if it contains only numeric characters.   The numeric value of the <strong>id</strong> key in this scenario is <strong>12345</strong>.</p>

<p>The value of the <strong>group</strong> key in this scenario is another JSON object.  A JSON object can be identified by the curly brackets that mark the beginning and the end of the object.  A left curly bracket ({) marks the beginning of a JSON object.   A right curly bracket (}) marks the end of a JSON object.   JSON objects can be nested as values inside other JSON objects.  In addition, JSON objects can be specified as values inside other JSON objects.   In this scenario, the value of the <strong>group</strong> key in the primary JSON object is shown in the following JSON object:</p>

<pre>{
  "role": "Receivables",
  "read-only": [
    "Accounting Folder",
    "Sales Folder"
  ]
}</pre>

<p>As previously mentioned, a JSON object is a group of key and value pairs.  The JSON object above contains two key and value pairs.  The <strong>role</strong> key contains a text value of <strong>Receivables</strong>.   The <strong>read-only</strong> key, on the other hand, contains an array. </p>

<p>The value of the <strong>read-only</strong> key in this scenario is an array that contains two text values:  <strong>Accounting Folder</strong> and <strong>Sales Folder</strong>.  Unlike JSON objects, arrays contain values only.   They do not contain key and value pairs.   Arrays are typically contained within square brackets.   A left square bracket ([) indicates the beginning of the array.  A right square bracket (]) indicates the end of the array.   Each value inside an array is separated from the others by a comma (,).  Although the array in this scenario contains two text values enclosed in quotation marks, an array can contain any of the other JSON data types.   For example, an array can include JSON objects or other arrays as values.   In addition, a given array need not contain only a single data type. </p>

<p>There are no Boolean or null values in the JSON output in this scenario.   A given JSON key can be assigned a Boolean value of either <strong>true</strong> or <strong>false</strong>.  Because these are Boolean values, not text values, they are typically not placed inside quotation marks.  Null values technically have no value at all, although it is not exactly the same as a numeric value of 0.  A given JSON key can be assigned a null value by specifying <strong>null</strong> without quotation marks.</p>`,
    reference: [
      {
        title: "Boson CCNA Curriculum 200-301",
        description: "Module 9: Automation and Programming, JSON"
      },
      {
        title: "CCNA 200-301 Official Cert Guide",
        description: "Volume 2, Chapter 18: Understanding REST and JSON, Interpreting JSON"
      }
    ]
  },

  {
    id: 83,
    category: "IP Connectivity",
    questionType: "Single-select",
    question: `<p>Which of the following statements is true regarding a floating static route?  (Select the best answer. )</p>`,
    options: [
      "A floating static route is used to provide link redundancy.",
      "A floating static route is used to provide link load balancing.",
      "A router always prefers a floating static route to a dynamically learned route.",
      "A floating static route has a lower AD than a normal static route."
    ],
    correctAnswer: 0,
    explanation: `<p>A floating static route is used to provide link redundancy.  When multiple routes to a network exist and a more specific route is not available, a router will choose the route with the lowest administrative distance (AD). Because a normal static route has a default AD of 1, a router will always prefer a normal static route over any other type of route.  You can manually assign a static route a higher AD than 1 to prevent a router from always choosing the normal static route as the best path to a destination network.  By assigning a floating static route a higher AD than another route, you are able to create a static route that will be used only when routes with a lower AD are no longer available.  For example, if a router's primary path to a remote office is a dynamically learned route and a floating static route with a higher AD is configured to use a specified exit interface as a backup path, the router will use only the primary route to reach the remote office.  The dynamically learned route is preferred over the floating static route because the floating static route has a higher AD than the dynamically learned route.  However, if the dynamically learned route becomes unavailable, the router will search its routing table for an available path with the lowest AD.  In this example, the router will use the floating static route to forward packets destined to the remote office to the exit interface specified in the floating static route when the dynamically learned route becomes unavailable.</p>

<p>A router will not always prefer a floating static route to a dynamically learned route. Because an administrator can arbitrarily assign an AD to a floating static route, a router will prefer a floating static route only if it has a lower AD than a dynamically learned route to the same destination network.  Likewise, a router will not always prefer a dynamically learned route to a floating static route unless the dynamically learned route has an AD lower than a floating static route to the same destination network.</p>

<p>A floating static route is not used for link load balancing. Load balancing is possible if multiple paths to a destination network exist with equal ADs and if cost values exist.  Because a floating static route has a higher AD than the primary path to a destination network, a router will not use a floating static route unless the primary path becomes unavailable. </p>`,
    reference: [
      {
        title: "Boson CCNA Curriculum 200-301",
        description: "Module 6: IP Routing, Configuring a Floating Static Route"
      },
      {
        title: "Cisco:  Evaluating Backup Interfaces, Floating Static Routes, and Dialer Watch for DDR Backup",
        url: "https://www.cisco.com/c/en/us/support/docs/dial-access/floating-static-route/23524-backup-1.html"
      },
      {
        title: "Cisco: IPv6 Routing:  Static Routing:  Information About IPv6 Routing:  Static Routing",
        url:  "https://www.cisco.com/c/en/us/td/docs/ios-xml/ios/ipv6/configuration/15-2mt/ip6-15-2mt-book/ip6-static-route. html"
      }
    ]
  },

  {
    id: 697,
    category: "Network Access",
    questionType: "Multi-select",
    question: `<p>Which of the following statements are true regarding dynamic interfaces on WLCs?  (Select 2 choices.  )</p>`,
    options: [
      "Dynamic interfaces are typically used for client data.",
      "Dynamic interfaces are often used for maintenance purposes.",
      "Dynamic interfaces are typically used for management information.",
      "Dynamic interfaces must be reachable by other WLCs.",
      "Dynamic interfaces are user-defined."
    ],
    correctAnswer:  [0, 4],
    explanation: `<p>Dynamic interfaces are user-defined and are typically used for client data.  A wireless LAN controller (WLC) contains both static and dynamic interfaces.   A WLC can contain up to four types of static interfaces: the management interface, the AP-manager interface, a virtual interface, and the service port interface.  A WLC can contain up to 512 dynamic interfaces.  The dynamic interfaces function similarly to virtual local area networks (VLANs).  For example, you can create a dynamic interface to segment traffic on the WLC. </p>

<p>The management interface, which is a static interface, is used for management information.   This interface is used for all Layer 2 Lightweight Access Point Protocol (LWAPP) communications between the controller and the lightweight access points (APs).  In addition, the management interface is used to communicate with other WLCs on the wireless network. </p>

<p>The service port interface, which is a static interface, is used for maintenance purposes on a WLC.  This interface is a physical interface on the WLC that can be used to recover the WLC in the event that the WLC fails.  The service port interface is the only interface that is available while the WLC is booting. </p>

<p>It is not necessary for a dynamic interface to be reachable by all other WLCs.  The WLCs will use the management interface, not a dynamic interface, to exchange information. </p>`,
    reference: [
      {
        title: "CCNA 200-301 Official Cert Guide",
        description: "Volume 1, Chapter 29: Building a Wireless LAN, Using WLC Interfaces"
      },
      {
        title: "Cisco: Overview of Ports and Interfaces:  Interfaces",
        url: "https://www.cisco.com/c/en/us/td/docs/wireless/controller/8-5/config-guide/b_cg85/ports_and_interfaces.html"
      }
    ]
  },

  {
    id: 8,
    category: "IP Connectivity",
    questionType: "Single-select",
    question: `<p>You issue the <strong>show ip route</strong> command on RouterA and receive the following partial output:</p>
<pre>S 10.20.0.0/16 [1/0] via 192.168.10.2
D 10.20.0.0/20 [90/2809856] via 192.168.10.4, 00:02:14, Serial0/4
R 10.20.0.0/24 [120/3] via 192.168.10.3, 00:33:38, Serial0/3
O 10.20.0.0/28 [110/64] via 192.168.10.1, 00:02:38, Serial0/1</pre>

<p>RouterA receives a packet that is destined for 10.20.0.17. </p>

<p>To which next-hop IP address will RouterA send the packet?  (Select the best answer. )</p>`,
    options: [
      "192.168.10.2",
      "192.168.10.1",
      "192.168.10.3",
      "192.168.10.4"
    ],
    correctAnswer: 2,
    explanation: `<p>RouterA will send the packet to the next-hop address 192.168.10.3.  RouterA will use the Routing Information Protocol (RIP) route, because it is the route with the longest prefix match. When a packet is sent to a router, the router checks the routing table to see if the next-hop address for the destination network is known. If multiple routes to a destination are known, the most specific route is used. Therefore, the following rules apply on RouterA:</p>

<ul>
  <li>Packets sent to the 10.20.0.0/28 network use the Open Shortest Path First (OSPF) route. This includes destination addresses from 10.20.0.0 through 10.20.0.15.</li>
  <li>Packets sent to the 10.20.0/24 network, <em>except those sent to the 10.20.0.0/28 network</em>, use the RIP route. This includes destination addresses from 10.20.0.16 through 10.20.0.255.</li>
  <li>Packets sent to the 10.20.0.0/20 network, <em>except those sent to the 10.20.0.0/24 network</em>, use the Enhanced Interior Gateway Routing Protocol (EIGRP) route. This includes destination addresses from 10.20.1.0 through 10.20.15.255.</li>
  <li>Packets sent to the 10.20.0.0/16 network, <em>except those sent to the 10.20.0.0/20 network</em>, use the static route. This includes destination addresses from 10.20.16.0 through 10.20.255.255.</li>
  <li>Packets sent to any destination not listed in the routing table are forwarded to the default gateway, if one is configured.</li>
</ul>

<p>Because the most specific route to 10.20.0.17 is the route toward the 10.20.0.0/24 network, RouterA will forward a packet destined for 10.20.0.17 to the next-hop address 192.168.10.3 through the Serial0/3 interface.</p>

<p>RouterA will not use the OSPF route to send a packet destined for 10.20.0.17 to the next-hop address 192.168.10.1, because 10.20.0.17 is outside the 10.20.0.0/28 address range.  Packets destined to addresses within the 10.20.0.0/28 subnet will be sent by using the OSPF route to the next-hop address 192.168.10.1.</p>

<p>RouterA will not use the static route to send a packet destined for 10.20.0.17 to the next-hop address 192.168.10.2.  Although the static route has the lowest AD, AD values are used only to determine which route is placed in the routing table when multiple routes to a destination are known.  A router considers routes with different prefix lengths as separate routes.  If the static route were configured so that the destination network were 10.20.0.0/24, the static route would be preferred over the RIP route. </p>

<p>RouterA will not use the EIGRP route to send a packet destined for 10.20.0.17 to the next-hop address 192.168.10.4.  If OSPF, EIGRP, and RIP had all advertised routes to 10.20.0.0/24, the EIGRP route would have been selected because EIGRP has the lowest AD of the three dynamic routing protocols.  The following list contains the most commonly used ADs: </p>

<table border="1" cellpadding="8" cellspacing="0" style="border-collapse: collapse;">
  <thead>
    <tr>
      <th>Route Source</th>
      <th>AD</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Directly connected route</td>
      <td>0</td>
    </tr>
    <tr>
      <td>Static route</td>
      <td>1</td>
    </tr>
    <tr>
      <td>EIGRP summary route</td>
      <td>5</td>
    </tr>
    <tr>
      <td>eBGP</td>
      <td>20</td>
    </tr>
    <tr>
      <td>Internal EIGRP</td>
      <td>90</td>
    </tr>
    <tr>
      <td>IGRP</td>
      <td>100</td>
    </tr>
    <tr>
      <td>OSPF</td>
      <td>110</td>
    </tr>
    <tr>
      <td>IS-IS</td>
      <td>115</td>
    </tr>
    <tr>
      <td>RIP</td>
      <td>120</td>
    </tr>
    <tr>
      <td>External EIGRP</td>
      <td>170</td>
    </tr>
    <tr>
      <td>iBGP</td>
      <td>200</td>
    </tr>
    <tr>
      <td>Unknown</td>
      <td>255</td>
    </tr>
  </tbody>
</table>`,
    reference: [
      {
        title: "Boson CCNA Curriculum 200-301",
        description: "Module 6: IP Routing, Understanding AD"
      },
      {
        title: "Cisco:  Route Selection in Cisco Routers",
        url: "https://www.cisco.com/c/en/us/support/docs/ip/enhanced-interior-gateway-routing-protocol-eigrp/8651-21. html"
      }
    ]
  },

  {
    id: 414,
    category: "Security Fundamentals",
    questionType: "Multi-select",
    question: `<p>Which of the following features are provided by IPSec?  (Select 2 choices.  )</p>`,
    options: [
      "data integrity",
      "data confidentiality",
      "broadcast packet encapsulation",
      "multicast packet encapsulation"
    ],
    correctAnswer: [0, 1],
    explanation:  `<p>Internet Protocol Security (IPSec) can provide data confidentiality and data integrity.   In addition, IPSec can provide origin authentication.   IPSec uses Encapsulating Security Protocol (ESP) to provide data confidentiality.   ESP encrypts an entire Internet Protocol (IP) packet and encapsulates it as the payload of a new IP packet.  Because the entire IP packet is encrypted, the data payload and header information remain confidential.  In addition, IPSec uses Authentication Header (AH) to ensure the integrity of a packet and to authenticate the origin of a packet.   AH does not authenticate the identity of an IPSec peer; instead, AH verifies only that the source address in the packet has not been modified during transit.  </p>

<p>Generic Routing Encapsulation (GRE), not IPSec, provides broadcast and multicast packet encapsulation.  GRE is a Cisco-proprietary protocol that can tunnel traffic from one network to another without requiring the transport network to support the network protocols in use at the tunnel source or tunnel destination.   For example, a GRE tunnel can be used to connect two AppleTalk networks through an IP-only network.   Because the focus of GRE is to transport many different protocols, it has very limited security features.  By contrast, IPSec has strong data confidentiality and data integrity features but it can transport only IP traffic.   GRE over IPSec combines the best features of both protocols to securely transport any protocol over an IP network.  </p>`,
    reference: [
      {
        title:  "Boson CCNA Curriculum 200-301",
        description: "Module 8: Security Fundamentals, The IPSec Protocol"
      },
      {
        title: "Cisco:  Configuring Security for VPNs with IPsec:   IPsec Functionality Overview",
        url: "https://www.cisco.com/c/en/us/td/docs/ios-xml/ios/sec_conn_ipsec/configuration/15-mt/sec-ipsec-15-mt-book/sec-cfg-vpn-ipsec.html"
      },
      {
        title: "Cisco: IPsec VPN WAN Design Overview:   Tunneling Protocols (PDF)",
        url: "https://www.cisco.com/c/dam/en/us/td/docs/solutions/CVD/Aug2014/CVD-IPsecVPNWANDesignOverview-AUG14.pdf"
      }
    ]
  },

  {
    id: 417,
    category: "Security Fundamentals",
    questionType: "Single-select",
    question: `<p>A site-to-site VPN uses IPSec to transport information across a tunnel.   Which of the following represents the correct order of the IPSec encryption process?  (Select the best answer. )</p>`,
    options: [
      "1. The sending device encrypts the original packet and the session key.  2. The sending device encapsulates the encrypted data with new headers. 3. The sending device sends the encrypted packet to the destination device. 4. The destination device decrypts the data and the session key.",
      "1. The sending device encapsulates the original packet with new headers. 2. The sending device encrypts the encapsulated packet and the session key. 3. The sending device sends the encrypted packet to the destination device. 4. The destination device decrypts the data and the session key.",
      "1. The sending device encrypts the original packet and the session key. 2. The sending device sends the encrypted packet to the destination device.  3. The sending device encapsulates the encrypted data with new headers. 4. The destination device decrypts the data and the session key.",
      "1. The destination device generates the session key.  2. The sending device encrypts the original packet with the session key. 3. The sending device encapsulates the encrypted data with new headers. 4. The sending device sends the encrypted packet to the destination device."
    ],
    correctAnswer: 0,
    explanation: `<p>A site-to-site virtual private network (VPN) uses Internet Protocol Security (IPSec) to transport information across a tunnel that is established between two hosts.  A typical site-to-site VPN uses Generic Routing Encapsulation (GRE) with confidentiality, integrity, and antireplay protection provided by IPSec.  There are four steps in the site-to-site VPN IPSec encryption process.  </p>

<p>First, the sending device combines a session key, which is also known as an encryption key or a shared key, with the data that is to be transported over the tunnel.  It then uses the session key to encrypt both the data and the key.  </p>

<p>Second, the sending device encapsulates the encrypted data and session key into a packet with a VPN header and a new Internet Protocol (IP) header.  These headers contain the source and destination information that is used to transport the encrypted data and session key over the tunnel.  </p>

<p>Third, the sending device sends the completed packet to the destination device at the other end of the tunnel, or site-to-site VPN.   </p>

<p>Fourth and finally, the destination device, or receiving device, uses the same session key that the sending device used for encryption to decrypt the encrypted packet and session key.  </p>`,
    reference: [
      {
        title: "Boson CCNA Curriculum 200-301",
        description: "Module 8: Security Fundamentals, The IPSec Protocol"
      },
      {
        title: "CCNA 200-301 Official Cert Guide",
        description: "Volume 2, Chapter 14: WAN Architecture, Internet VPN Fundamentals"
      }
    ]
  },

  {
    id: 648,
    category: "Network Access",
    questionType: "Single-select",
    question: `<p>Which of the following VLANs is used by DTP to negotiate a trunk link when 802.1Q encapsulation is configured on the interface?  (Select the best answer.)</p>`,
    options: [
      "4094",
      "the native VLAN",
      "0",
      "1"
    ],
    correctAnswer: 1,
    explanation: `<p>Dynamic Trunking Protocol (DTP) uses the native virtual local area network (VLAN) to negotiate a trunk link when Institute of Electrical and Electronics Engineers (IEEE) 802.1Q encapsulation is configured on the interface.  Because DTP frames are always transmitted on the native VLAN, changing the native VLAN can have unexpected consequences.  For example, if the native VLAN is not configured identically on both ends of a link, a trunk will not dynamically form. </p>

<p>By default, all interfaces on a Cisco switch will use DTP to automatically negotiate whether an interface should be an IEEE 802.1Q trunk port or an access port.  There are two dynamic modes of operation for a switch port: </p>

<ul>
  <li><strong>auto</strong> – operates in access mode unless the neighboring interface actively negotiates to operate as a trunk</li>
  <li><strong>desirable</strong> – operates in access mode unless it can actively negotiate a trunk connection with a neighboring interface</li>
</ul>

<p>The default dynamic mode is dependent on the hardware platform.   In general, departmental-level or wiring closet–level switches default to auto mode, whereas backbone-level switches default to desirable mode.   Because a switch port in auto mode does not actively negotiate to operate in trunk mode, it will form a trunk link only if negotiations are initiated by the neighboring interface.   A neighboring interface will initiate negotiations only if it is configured to operate in trunk mode or desirable mode.   By contrast, a switch port in desirable mode will actively negotiate to operate in trunk mode and will form a trunk link with a neighboring port that is configured to operate in trunk, desirable, or auto mode.</p>

<p>Although VLAN 1 is the default native VLAN on a Cisco switch, the native VLAN can be changed by issuing the <strong>switchport trunk native vlan <em>vlan-id</em></strong> command from interface configuration mode.  Because the configuration of the native VLAN in this scenario is not specified, you cannot be certain that VLAN 1 is still configured as the native VLAN. </p>

<p>VLAN 0 is a special VLAN used by Internet Protocol (IP) phones to indicate to an upstream switch that it is sending frames that have a configured 802.1p priority but that should reside in the native VLAN.  This VLAN is used if voice traffic and data traffic should be separated but do not require that a unique voice virtual VLAN be created. </p>

<p>VLAN 4094 is an extended VLAN and is not used for DTP frames unless it has been configured as the native VLAN.  VLAN IDs in the number range from 1006 through 4094 are available only on extended IOS images.   A VLAN ID can be a value from 1 through 1005 or from 1 through 4094, depending on the IOS image and switch model.   VLANs 1002 through 1005 are reserved for Token Ring and Fiber Distributed Data Interface (FDDI) VLANs.   VLANs in this reserved range, as well as the switch's native VLAN, can be modified but not deleted.</p>`,
    reference: [
      {
        title: "CCNA 200-301 Official Cert Guide",
        description: "Volume 1, Chapter 8:  Implementing Ethernet Virtual LANs, VLAN Trunking Configuration"
      },
      {
        title: "Cisco:  Configuring VLANs:  Configuring VLAN Trunks",
        url: "https://www.cisco.com/c/en/us/td/docs/switches/lan/catalyst2960/software/release/12-2_55_se/configuration/guide/scg_2960/swvlan. html#wpxref53881"
      },
      {
        title: "Cisco: IEEE 802.1Q Tunneling:  802.1Q Tunneling Configuration Guidelines and Restrictions",
        url: "https://www.cisco.com/c/en/us/td/docs/switches/lan/catalyst3750/software/release/12-2_55_se/configuration/guide/scg3750/swl2tun.html"
      }
    ]
  },

  {
    id: 695,
    category: "Network Fundamentals",
    questionType: "Single-select",
    question:  `<p>What percentage of wireless coverage overlap is considered appropriate to ensure that wireless clients do not lose connectivity when roaming from one AP to another?  (Select the best answer.)</p>`,
    options: [
      "40 to 50 percent",
      "10 to 15 percent",
      "0 to 5 percent",
      "20 to 35 percent",
      "more than 50 percent"
    ],
    correctAnswer: 1,
    explanation: `<p>A wireless coverage overlap area of 10 to 15 percent is considered appropriate to ensure that wireless clients do not lose connectivity when roaming from one access point (AP) to another.  Too little wireless coverage overlap often causes gaps in wireless coverage, which prevents roaming clients from being able to seamlessly transition from one AP to another.  Providing more than 10 to 15 percent wireless coverage overlap would require you to purchase more APs than are necessary for adequate wireless coverage.   In addition, too much wireless coverage overlap could introduce radio interference from neighboring APs.   You should ensure that the APs on the network use nonoverlapping channels to avoid radio interference from neighboring APs.   For example, although 802.11b can be configured to use 11 different channels in the United States and Canada, only three nonoverlapping channels can be used:  1, 6, and 11.</p>

<p>Using two or more APs with overlapping wireless coverage areas creates an Extended Service Set (ESS) topology.   A single AP creates a Basic Service Set (BSS) topology.  A wireless network created by wireless clients communicating without the use of an AP is called an Independent Basic Service Set (IBSS) topology. </p>`,
    reference: [
      {
        title: "Boson CCNA Curriculum 200-301",
        description: "Module 3:  Wireless Networking Fundamentals, ESS"
      },
      {
        title: "CCNA 200-301 Official Cert Guide",
        description:  "Volume 1, Chapter 26: Fundamentals of Wireless Networks, Wireless Bands and Channels"
      },
      {
        title: "Cisco:  Deployment",
        url: "https://www.cisco.com/c/en/us/td/docs/wireless/controller/8-5/config-guide/b_cg85/deployment. html"
      }
    ]
  },

  {
    id: 471,
    category: "Automation and Programmability",
    questionType: "Single-select",
    question: `<p>Which of the following configuration management tools accepts inbound requests from agents by using HTTPS on TCP port 8140?  (Select the best answer.)</p>`,
    options: [
      "Chef",
      "Puppet",
      "Salt",
      "Ansible"
    ],
    correctAnswer:  1,
    explanation: `<p>Puppet is the configuration management tool that accepts inbound requests from agents by using Hypertext Transfer Protocol Secure (HTTPS) on Transmission Control Protocol (TCP) port 8140.  Of the four major configuration management tools, Puppet is the most mature and the most widely used.  Puppet operates on Linux distributions, UNIX-like systems, and Microsoft Windows.  Puppet uses a client/server architecture; managed nodes that are running the Puppet Agent application can receive configurations from a master server that is running Puppet Server.  Modules are written in Ruby Domain Specific Language (DSL) or in a Ruby-like Puppet language known as Puppet DSL. </p>

<p>Like Puppet, Chef operates on Linux distributions, UNIX-like systems, and Microsoft Windows.  Chef can use a client/server architecture or a standalone client configuration.   Chef communicates by using HTTPS on the traditional TCP port 443.  Configuration information is contained within cookbooks that are written in Ruby DSL and are stored on a Chef Server.   Managed nodes that are running the Chef Client can pull cookbooks from the server.   Standalone clients that do not have access to a server can run chef-solo and pull cookbooks from a local directory or from a tar. gz archive on the Internet.</p>

<p>Like the other configuration management software packages, Ansible also operates on Linux distributions, UNIX-like systems, and Microsoft Windows.  However, unlike the other configuration management software packages, Ansible does not use agent software on managed nodes.  Ansible uses Secure Shell (SSH) to connect to remote nodes.   By default, SSH operates on TCP port 22.  Configurations are stored on the Ansible server in playbooks that are written in YAML Ain't Markup Language (YAML).  Managed nodes can download scripted modules from an Ansible server by using SSH.</p>

<p>Salt also operates on Linux distributions, UNIX-like systems, and Microsoft Windows.  Salt can use a client/server architecture by installing Salt master software on the server and Salt minion software on managed nodes.  Masters and minions communicate by using ZeroMQ.   To communicate, Salt requires TCP ports 4505 and 4506.  Salt can also be used without client agent software by using Salt SSH.   However, Salt SSH is much slower than ZeroMQ.   Salt configuration information is stored primarily in state modules that are typically written in YAML; however, Python or Python Domain Specific Language (PyDSL) can also be used for complex configuration scripts.</p>`,
    reference: [
      {
        title: "Boson CCNA Curriculum 200-301",
        description: "Module 9:  Automation and Programming, Configuration Management Mechanisms"
      },
      {
        title: "CCNA 200-301 Official Cert Guide",
        description: "Volume 2, Chapter 19: Understanding Ansible, Puppet, and Chef, Ansible, Puppet, and Chef Basics"
      },
      {
        title: "Puppet:  System configuration",
        url: "https://puppet.com/docs/puppet/latest/config_important_settings.html"
      },
      {
        title: "InfoWorld: Review:  Puppet vs. Chef vs. Ansible vs. Salt",
        url: "https://www.infoworld.com/article/2614204/data-center/puppet-or-chef--the-configuration-management-dilemma.html"
      }
    ]
  },

  {
    id: 463,
    category: "Automation and Programmability",
    questionType: "Multi-select",
    question: `<p>Which of the following APIs are typically used to enable communication between an SDN controller and the application plane?  (Select 2 choices. )</p>`,
    options: [
      "OnePK",
      "OpFlex",
      "REST",
      "OSGi",
      "OpenFlow",
      "NETCONF"
    ],
    correctAnswer:  [2, 3],
    explanation: `<p>Of the available choices, only Representational State Transfer (REST) and Java Open Services Gateway initiative (OSGi) are the Application Programming Interfaces (APIs) typically used to enable communication between a Software-Defined Networking (SDN) controller and the application plane.   SDN is an intelligent network architecture in which a software controller assumes the control plane functionality for all network devices.   A northbound API, which is sometimes called a northbound interface (NBI), enables an SDN controller to communicate with applications in the application plane.</p>

<p>REST is a northbound API architecture that uses Hypertext Transfer Protocol (HTTP) or HTTP Secure (HTTPS) to enable external resources to access and make use of programmatic methods that are exposed by the API.    REST APIs typically return data in either Extensible Markup Language (XML) or JavaScript Object Notation (JSON) format.</p>

<p>OSGi is a Java-based northbound API framework that is intended to enable the development of modular programs.    OSGi also allows the use of the Python programming language as a means of extended controller functions.   For transport, OSGi deployments often rely on HTTP. </p>

<p>A southbound API, which is sometimes called a southbound interface (SBI), enables an SDN controller to communicate with devices on the network data plane.   NETCONF, OnePK, OpenFlow, and OpFlex are all examples of southbound APIs.</p>

<p>NETCONF uses Extensible Markup Language (XML) and Remote Procedure Calls (RPCs) to configure network devices.   XML is used for both data encoding and protocol messages.    NETCONF typically relies on Secure Shell (SSH) for transport.</p>

<p>OpFlex uses a declarative SDN model in which the instructions that are sent to the controller are not so detailed.   The controller allows the devices in the data plane to make more network decisions about how to implement the policy.</p>

<p>OpenFlow uses an imperative SDN model in which detailed instructions are sent to the SDN controller when a new policy is to be configured.   The SDN controller manages both the network and the policies applied to the devices.</p>

<p>The OnePK API is a Cisco-proprietary API.    It uses Java, C, or Python to configure network devices.   It can use either Secure Sockets Layer (SSL) or Transport Layer Security (TLS) to encrypt data in transit.</p>`,
    reference: [
      {
        title: "Boson CCNA Curriculum 200-301",
        description: "Module 9:   Automation and Programming, Northbound APIs"
      },
      {
        title: "Cisco:  NETCONF Protocol:   Information About the NETCONF Protocol (PDF)",
        url: "https://www.cisco.com/c/en/us/td/docs/ios-xml/ios/prog/configuration/1612/b_1612_programmability_cg/netconf_protocol. pdf"
      },
      {
        title: "Cisco:  Cisco Application Policy Infrastructure Controller (APIC)",
        url: "https://www.cisco.com/c/en/us/products/cloud-systems-management/application-policy-infrastructure-controller-apic/index.html"
      },
      {
        title:  "Cisco: OpenFlow:   Information About OpenFlow",
        url: "https://www.cisco.com/c/en/us/td/docs/switches/datacenter/nexus9000/sw/6-x/programmability/guide/b_Cisco_Nexus_9000_Series_NX-OS_Programmability_Guide/b_Cisco_Nexus_9000_Series_NX-OS_Programmability_Guide_chapter_01000.html"
      },
      {
        title: "Cisco:  Implementing OnePK:   Information About onePK",
        url: "https://www.cisco.com/c/en/us/td/docs/ios-xml/ios/onepk/configuration/xe-3s/onepk-xe-3s-book/onepk-implement.html"
      },
      {
        title: "Cisco:  Cisco Extensible Network Controller:   Product Architecture and Functions (PDF)",
        url: "https://www.cisco.com/c/dam/en/us/products/collateral/cloud-systems-management/extensible-network-controller/white-paper-c11-734298.pdf"
      }
    ]
  },


  {
    id: 650,
    category: "Network Access",
    questionType: "Single-select",
    question: `<p><img src="/images/question-650-vlan-trunk. png" alt="Network diagram showing SwitchA and SwitchB connected via 802.1Q trunk" style="max-width: 600px; display: block; margin: 20px auto;" /></p>

<p>SwitchA and SwitchB are connected over an 802.1Q trunk link.   The native VLAN for the trunk link is configured as VLAN 11 on SwitchA and VLAN 111 on SwitchB.  All of the hosts reside in the same IP subnet.  </p>

<p>What of the following is true regarding the connectivity between the hosts in this scenario?  (Select the best answer.  )</p>`,
    options: [
      "None of the hosts can ping each other.",
      "HostD can ping HostA.",
      "HostC can ping HostD.",
      "HostA can ping HostB.",
      "HostB can ping HostC."
    ],
    correctAnswer: 1,
    explanation: `<p>In this scenario, HostD can ping HostA.   One virtual local area network (VLAN) is considered the native VLAN when 802.1Q encapsulation is configured on a trunk link.  Traffic over the native VLAN is not tagged; that is, an 802.1Q header is not added to the frame.  When a switch receives a frame without an 802.1Q header, the switch knows that the frame is part of the native VLAN.    By default, VLAN 1 is identified as the native VLAN.   In this scenario, the native VLAN for the trunk link on SwitchB is configured as VLAN 111.   When HostD sends a ping message to HostA, SwitchB recognizes that HostD is a member of VLAN 111.  Therefore, the traffic from HostD is sent untagged across the trunk link to SwitchA.  When SwitchA receives the untagged frames from SwitchB, it forwards them to the native VLAN configured for its side of the link, which in this scenario is VLAN 11.  Because HostA is a member of VLAN 11, it will receive the ping messages from HostD and will be able to reply by using the same process in reverse.</p>

<p>HostB cannot ping HostC.    When HostB attempts to send a ping message to HostC, SwitchA will recognize that HostB is a member of VLAN 111 and will add an 802.1Q header to tag the traffic as it crosses the trunk link.  However, when SwitchB receives the tagged traffic from HostB, it will recognize the VLAN ID in the 802.1Q header as its locally configured native VLAN.   Because traffic from the native VLAN should not be tagged on the trunk link by default, SwitchB will consider the traffic from HostB to be erroneous and will discard it. </p>

<p>HostA cannot ping HostB and HostC cannot ping HostD because each pair resides in different VLANs on the same switch.  In addition, because all hosts in this scenario are configured to reside in the same Internet Protocol (IP) subnet, neither switch could be configured to route traffic between its different VLANs even if the switches were capable of Layer 3 forwarding.</p>`,
    reference: [
      {
        title: "Boson CCNA Curriculum 200-301",
        description: "Module 5: Switching and Network Access, Configuring Trunk Ports"
      },
      {
        title: "CCNA 200-301 Official Cert Guide",
        description: "Volume 1, Chapter 8:   Implementing Ethernet Virtual LANs, Mismatched Native VLAN on a Trunk"
      },
      {
        title:  "Cisco:   Configuring VLANs:   Configuring VLAN Trunks",
        url: "https://www.cisco.com/c/en/us/td/docs/switches/lan/catalyst2960/software/release/12-2_55_se/configuration/guide/scg_2960/swvlan.html#wpxref53881"
      },
      {
        title: "Cisco:  IEEE 802.1Q Tunneling:   802.1Q Tunneling Configuration Guidelines and Restrictions",
        url: "https://www.cisco.com/c/en/us/td/docs/switches/lan/catalyst3750/software/release/12-2_55_se/configuration/guide/scg3750/swl2tun.html"
      }
    ]
  },


  {
    id: 496,
    category: "Network Access",
    questionType: "Single-select",
    question: `<p>Which of the following best describes a lightweight AP in bridge mode?  (Select the best answer. )</p>`,
    options: [
      "It is the default operating mode for a lightweight AP.",
      "It enables a failsafe if the CAPWAP connection goes down.",
      "It captures wireless traffic for analysis.",
      "It acts as a dedicated connection between two networks."
    ],
    correctAnswer: 3,
    explanation: `<p>A Cisco lightweight access point (AP) operating in bridge mode acts as a dedicated connection between two networks.  A lightweight AP provides an interface for wireless clients to connect to the wireless local area network (WLAN). However, unlike autonomous APs, a lightweight AP relies on a Cisco wireless LAN controller (WLC) for management and configuration.  Lightweight APs operating in bridge mode can connect to other networks in either a point-to-point or point-to-multipoint fashion.  When multiple APs are configured in bridge mode, the collection of lightweight APs can be used to form a mesh network.</p>

<p>Local mode is the default operating mode for a lightweight AP.  A Cisco lightweight AP operating in local mode is capable of providing multiple basic service sets (BSSs) on a single channel. In this mode, the AP can connect to a WLC and can provide client connectivity.  In addition, an AP operating in local mode scans all wireless channels as a means of monitoring wireless quality and security. The connection between a lightweight AP and a WLC is created by using two tunnels established by the Control and Provisioning of Wireless Access Points (CAPWAP) tunneling protocol.  Information sent between lightweight APs and the WLC is encapsulated in Internet Protocol (IP) packets. This process enables a lightweight AP and WLC to manage connectivity to the same WLAN yet be separated by both physical and logical means.</p>

<p>A Cisco lightweight AP operating in sniffer mode, not bridge mode, captures wireless traffic for analysis. When traffic is captured, a lightweight AP that is operating in sniffer mode will send the traffic to an analyzer, which is typically software that is installed on a PC or other host. </p>

<p>A Cisco lightweight AP operating in FlexConnect mode, not bridge mode, enables a failsafe if the CAPWAP connection goes down. FlexConnect mode does not provide BSSs.  When configured, FlexConnect mode enables a lightweight AP to switch traffic between a given Service Set Identifier (SSID) and a given virtual LAN (VLAN).</p>`,
    reference: [
      {
        title: "CCNA 200-301 Official Cert Guide",
        description:  "Volume 1, Chapter 27: Analyzing Cisco Wireless Architectures, Cisco AP Modes"
      }
    ]
  },


  {
    id: 61,
    category: "IP Connectivity",
    questionType: "Single-select",
    question: `<div style="text-align: center; margin-bottom: 20px;">
  <img src="/images/ospf-three-routers-topology.png" alt="Network topology showing RouterA connected to RouterB via FastEthernet, and RouterB connected to RouterC via Ethernet" style="max-width: 600px;" />
</div>

<p>You are configuring OSPF Area 0 on all three routers in the exhibit above. The link between RouterA and RouterB is a FastEthernet link.  The link between RouterB and RouterC is an Ethernet link. </p>

<p>You have not yet modified any of the OSPF default settings. </p>

<p>Which of the following will most likely be the cost of the OSPF path from RouterA to RouterC?  (Select the best answer. )</p>`,
    options: [
      "30",
      "1",
      "20",
      "11",
      "64",
      "24"
    ],
    correctAnswer: 3,
    explanation: `<p>Most likely, the cost of the Open Shortest Path First (OSPF) path from RouterA to RouterC will be 11.  OSPF is an open-standard protocol that uses cost as a metric.   The cost of a link is based on the interface bandwidth and the reference bandwidth, as indicated by the following formula: </p>

<p><strong>cost = reference bandwidth / interface bandwidth</strong></p>

<p>The higher the bandwidth, the lower the cost.  By default, the reference bandwidth is 100,000,000. Therefore, to calculate path cost, divide 100,000,000 by the bandwidth in bits per second, and then round down. </p>

<p>The cost of the 100-megabits per second (Mbps) FastEthernet link between RouterA and RouterB in this scenario is 100,000,000 / 100,000,000, or 1. The cost of the 10-Mbps Ethernet link between RouterB and RouterC in this scenario is 100,000,000 / 10,000,000, or 10. As the hops between a router and a destination increase, the total cost of the path from the source to the destination increases by the bandwidth calculation of the additional links.  Therefore, the cost of the path from RouterA to RouterC in this scenario is 1 + 10, or 11.</p>

<p>You can manually configure the OSPF cost of a path through an interface by issuing the <strong>ip ospf cost <em>value</em></strong> command in interface configuration mode, where <em>value</em> is the path cost that you want to assign.  You can manually configure cost if the router has multiple OSPF paths to the same destination and you want the OSPF router to perform equal-cost load balancing. </p>`,
    reference: [
      {
        title: "Boson CCNA Curriculum 200-301",
        description: "Module 6:  IP Routing, OSPF Route Processing"
      },
      {
        title: "Cisco:  OSPF Design Guide:  OSPF Cost",
        url: "https://www.cisco.com/c/en/us/support/docs/ip/open-shortest-path-first-ospf/7039-1.html"
      }
    ]
  },

  // Question 657a
{
    id: 657,
    category:  "Network Access",
    questionType: "Multiple-Select",
    question: `<p>Which VTP mode(s) can create/modify/delete VLANs?  (Select all that apply. )</p>`,
    options: [
      "Server",
      "Client",
      "Transparent"
    ],
    correctAnswer:  [0, 2], // Server and Transparent
    explanation: `<p>You can configure a switch for one of three VLAN Trunking Protocol (VTP) modes: server, client, or transparent.  To configure the VTP mode for a switch, you should issue the <strong>vtp mode {server | client | transparent}</strong> command from global configuration mode.</p>

<p>By default, Cisco switches are configured for VTP server mode. VTP server mode allows you to create, modify, and delete virtual local area networks (VLANs) in the VTP domain. These changes are then advertised to other switches participating in the same VTP domain.  However, a switch in VTP server mode will not originate VTP advertisements until a VTP domain name is set.  VTP servers store VLAN configuration information in non-volatile random-access memory (NVRAM), so if the switch is powered off, the VLAN configuration will be retained.</p>

<p>You cannot create, modify, or delete VLANs on a switch that is operating in VTP client mode.  However, a switch in VTP client mode can send its VLAN configuration information to other switches.  In VTP version 1 (VTP V1) and VTP version 2 (VTP V2), VTP clients do not store the VLAN configuration information in NVRAM. In VTP version 3 (VTP v3), VTP clients do store VLAN configuration information in NVRAM.</p>

<p>A switch that is operating in VTP transparent mode does not participate in VTP.  Any VLAN additions, changes, or deletions made to a switch in VTP transparent mode remain on the local switch and are not propagated to other switches.  However, a switch in VTP transparent mode can forward VTP advertisements received from other switches. Switches in VTP V2 transparent mode forward all VTP advertisements; switches in VTP V1 transparent mode will forward a VTP advertisement only if the VTP domain and VTP version number on the switch match that of the VTP advertisement.  Like VTP servers, VTP transparent mode switches store VLAN configuration information in NVRAM.</p>`,
    reference: [
      {
        title: "Boson CCNA Curriculum 200-301",
        description: "Module 5: Switching and Network Access, Understanding and Configuring VTP"
      },
      {
        title: "CCNA 200-301 Official Cert Guide",
        description: "Volume 1, Chapter 8: Implementing Ethernet Virtual LANs, VLAN Trunking Protocol"
      }
    ]
  },

// Question 657b
{
    id: 658,
    category: "Network Access",
    questionType: "Multiple-Select",
    question: `<p>Which VTP mode(s) synchronize VTP information?  (Select all that apply.)</p>`,
    options: [
      "Server",
      "Client",
      "Transparent"
    ],
    correctAnswer: [0, 1], // Server and Client
    explanation: `<p>You can configure a switch for one of three VLAN Trunking Protocol (VTP) modes: server, client, or transparent. To configure the VTP mode for a switch, you should issue the <strong>vtp mode {server | client | transparent}</strong> command from global configuration mode. </p>

<p>By default, Cisco switches are configured for VTP server mode. VTP server mode allows you to create, modify, and delete virtual local area networks (VLANs) in the VTP domain. These changes are then advertised to other switches participating in the same VTP domain. However, a switch in VTP server mode will not originate VTP advertisements until a VTP domain name is set. VTP servers store VLAN configuration information in non-volatile random-access memory (NVRAM), so if the switch is powered off, the VLAN configuration will be retained.</p>

<p>You cannot create, modify, or delete VLANs on a switch that is operating in VTP client mode. However, a switch in VTP client mode can send its VLAN configuration information to other switches. In VTP version 1 (VTP V1) and VTP version 2 (VTP V2), VTP clients do not store the VLAN configuration information in NVRAM. In VTP version 3 (VTP v3), VTP clients do store VLAN configuration information in NVRAM.</p>

<p>A switch that is operating in VTP transparent mode does not participate in VTP. Any VLAN additions, changes, or deletions made to a switch in VTP transparent mode remain on the local switch and are not propagated to other switches. However, a switch in VTP transparent mode can forward VTP advertisements received from other switches. Switches in VTP V2 transparent mode forward all VTP advertisements; switches in VTP V1 transparent mode will forward a VTP advertisement only if the VTP domain and VTP version number on the switch match that of the VTP advertisement.  Like VTP servers, VTP transparent mode switches store VLAN configuration information in NVRAM.</p>`,
    reference: [
      {
        title: "Boson CCNA Curriculum 200-301",
        description: "Module 5: Switching and Network Access, Understanding and Configuring VTP"
      },
      {
        title: "CCNA 200-301 Official Cert Guide",
        description: "Volume 1, Chapter 8: Implementing Ethernet Virtual LANs, VLAN Trunking Protocol"
      }
    ]
  },

// Question 657c
{
    id: 659,
    category: "Network Access",
    questionType: "Multiple-Select",
    question: `<p>Which VTP mode(s) originate VTP advertisements? (Select all that apply.)</p>`,
    options: [
      "Server",
      "Client",
      "Transparent"
    ],
    correctAnswer: [0, 1], // Server and Client
    explanation: `<p>You can configure a switch for one of three VLAN Trunking Protocol (VTP) modes: server, client, or transparent. To configure the VTP mode for a switch, you should issue the <strong>vtp mode {server | client | transparent}</strong> command from global configuration mode.</p>

<p>By default, Cisco switches are configured for VTP server mode. VTP server mode allows you to create, modify, and delete virtual local area networks (VLANs) in the VTP domain. These changes are then advertised to other switches participating in the same VTP domain. However, a switch in VTP server mode will not originate VTP advertisements until a VTP domain name is set. VTP servers store VLAN configuration information in non-volatile random-access memory (NVRAM), so if the switch is powered off, the VLAN configuration will be retained.</p>

<p>You cannot create, modify, or delete VLANs on a switch that is operating in VTP client mode.  However, a switch in VTP client mode can send its VLAN configuration information to other switches. In VTP version 1 (VTP V1) and VTP version 2 (VTP V2), VTP clients do not store the VLAN configuration information in NVRAM.  In VTP version 3 (VTP v3), VTP clients do store VLAN configuration information in NVRAM.</p>

<p>A switch that is operating in VTP transparent mode does not participate in VTP. Any VLAN additions, changes, or deletions made to a switch in VTP transparent mode remain on the local switch and are not propagated to other switches. However, a switch in VTP transparent mode can forward VTP advertisements received from other switches.  Switches in VTP V2 transparent mode forward all VTP advertisements; switches in VTP V1 transparent mode will forward a VTP advertisement only if the VTP domain and VTP version number on the switch match that of the VTP advertisement. Like VTP servers, VTP transparent mode switches store VLAN configuration information in NVRAM.</p>`,
    reference: [
      {
        title: "Boson CCNA Curriculum 200-301",
        description: "Module 5: Switching and Network Access, Understanding and Configuring VTP"
      },
      {
        title:  "CCNA 200-301 Official Cert Guide",
        description: "Volume 1, Chapter 8: Implementing Ethernet Virtual LANs, VLAN Trunking Protocol"
      }
    ]
  },

// Question 657d
{
    id: 660,
    category: "Network Access",
    questionType: "Multiple-Select",
    question: `<p>Which VTP mode(s) forward VTP advertisements?  (Select all that apply.)</p>`,
    options: [
      "Server",
      "Client",
      "Transparent"
    ],
    correctAnswer: [1, 2], // Client and Transparent
    explanation: `<p>You can configure a switch for one of three VLAN Trunking Protocol (VTP) modes: server, client, or transparent. To configure the VTP mode for a switch, you should issue the <strong>vtp mode {server | client | transparent}</strong> command from global configuration mode.</p>

<p>By default, Cisco switches are configured for VTP server mode. VTP server mode allows you to create, modify, and delete virtual local area networks (VLANs) in the VTP domain. These changes are then advertised to other switches participating in the same VTP domain. However, a switch in VTP server mode will not originate VTP advertisements until a VTP domain name is set. VTP servers store VLAN configuration information in non-volatile random-access memory (NVRAM), so if the switch is powered off, the VLAN configuration will be retained.</p>

<p>You cannot create, modify, or delete VLANs on a switch that is operating in VTP client mode. However, a switch in VTP client mode can send its VLAN configuration information to other switches. In VTP version 1 (VTP V1) and VTP version 2 (VTP V2), VTP clients do not store the VLAN configuration information in NVRAM. In VTP version 3 (VTP v3), VTP clients do store VLAN configuration information in NVRAM. </p>

<p>A switch that is operating in VTP transparent mode does not participate in VTP. Any VLAN additions, changes, or deletions made to a switch in VTP transparent mode remain on the local switch and are not propagated to other switches. However, a switch in VTP transparent mode can forward VTP advertisements received from other switches. Switches in VTP V2 transparent mode forward all VTP advertisements; switches in VTP V1 transparent mode will forward a VTP advertisement only if the VTP domain and VTP version number on the switch match that of the VTP advertisement. Like VTP servers, VTP transparent mode switches store VLAN configuration information in NVRAM.</p>`,
    reference: [
      {
        title: "Boson CCNA Curriculum 200-301",
        description: "Module 5: Switching and Network Access, Understanding and Configuring VTP"
      },
      {
        title: "CCNA 200-301 Official Cert Guide",
        description: "Volume 1, Chapter 8: Implementing Ethernet Virtual LANs, VLAN Trunking Protocol"
      }
    ]
  },

// Question 657e
{
    id: 661,
    category: "Network Access",
    questionType: "Multiple-Select",
    question: `<p>Which VTP mode(s) store VLAN information in NVRAM? (Select all that apply.)</p>`,
    options: [
      "Server",
      "Client",
      "Transparent"
    ],
    correctAnswer: [0, 2], // Server and Transparent
    explanation: `<p>You can configure a switch for one of three VLAN Trunking Protocol (VTP) modes: server, client, or transparent. To configure the VTP mode for a switch, you should issue the <strong>vtp mode {server | client | transparent}</strong> command from global configuration mode.</p>

<p>By default, Cisco switches are configured for VTP server mode. VTP server mode allows you to create, modify, and delete virtual local area networks (VLANs) in the VTP domain. These changes are then advertised to other switches participating in the same VTP domain. However, a switch in VTP server mode will not originate VTP advertisements until a VTP domain name is set. VTP servers store VLAN configuration information in non-volatile random-access memory (NVRAM), so if the switch is powered off, the VLAN configuration will be retained.</p>

<p>You cannot create, modify, or delete VLANs on a switch that is operating in VTP client mode. However, a switch in VTP client mode can send its VLAN configuration information to other switches. In VTP version 1 (VTP V1) and VTP version 2 (VTP V2), VTP clients do not store the VLAN configuration information in NVRAM. In VTP version 3 (VTP v3), VTP clients do store VLAN configuration information in NVRAM.</p>

<p>A switch that is operating in VTP transparent mode does not participate in VTP. Any VLAN additions, changes, or deletions made to a switch in VTP transparent mode remain on the local switch and are not propagated to other switches. However, a switch in VTP transparent mode can forward VTP advertisements received from other switches. Switches in VTP V2 transparent mode forward all VTP advertisements; switches in VTP V1 transparent mode will forward a VTP advertisement only if the VTP domain and VTP version number on the switch match that of the VTP advertisement. Like VTP servers, VTP transparent mode switches store VLAN configuration information in NVRAM.</p>`,
    reference: [
      {
        title: "Boson CCNA Curriculum 200-301",
        description: "Module 5: Switching and Network Access, Understanding and Configuring VTP"
      },
      {
        title: "CCNA 200-301 Official Cert Guide",
        description: "Volume 1, Chapter 8: Implementing Ethernet Virtual LANs, VLAN Trunking Protocol"
      }
    ]
  },

  {
    id: 659,
    category: "Network Access",
    questionType: "Single-select",
    question: `<p>Which of the following DTP modes actively negotiates a trunk connection with a neighboring
interface? (Select the best answer.)</p>`,
    options: [
      "off",
      "auto",
      "desirable",
      "on"
    ],
    correctAnswer: 2, 
    explanation: `<p>Dynamic Trunking Protocol (DTP) desirable mode actively negotiates a trunk connection with a
neighboring interface. There are two dynamic modes of operation for a switch port:</p>
<p>. auto - operates in access mode unless the neighboring interface actively negotiates to
operate as a trunk </p>
<p>. desirable - operates in access mode unless it can actively negotiate a trunk connection
with a neighboring interface </p>
<p>The default dynamic mode is dependent on the hardware platform. In general, departmental-
level or wiring closet-level switches default to auto mode, whereas backbone-level switches
default to desirable mode. Because a switch port in auto mode does not actively negotiate to
operate in trunk mode, it will form a trunk link only if negotiations are initiated by the
neighboring interface. A neighboring interface will initiate negotiations only if it is configured to
operate in trunk mode or desirable mode. By contrast, a switch port in desirable mode will
actively negotiate to operate in trunk mode and will form a trunk link with a neighboring port
that is configured to operate in trunk, desirable, or auto mode. </p>
<p>Off and on are not DTP modes. They are static operating modes. The Mode column in the
output of the show interfaces interface slot| number trunk command indicates the
switchport mode configured for a particular interface. The possible values of the Mode column
are the following: </p>
. off - indicates that the port has been statically configured to operate in access mode
. on - indicates that the port has been statically configured to operate in trunk mode
. auto - indicates that the port will dynamically determine its operating mode; the port
operates in access mode unless the neighboring interface actively negotiates to operate
as a trunk
. desirable - indicates that the port will dynamically determine its operating mode; the
port operates in access mode unless it can actively negotiate a trunk connection with a
neighboring interface`,
    reference: [
      {
        title: "Boson CCNA Curriculum 200-301",
        description: "Module 5: Switching and Network Access, Understanding and Configuring DTP"
      }
    ]
  },

  {
  id: 443,  // Question ID number
  category: "Security Fundamentals",  // Category name
  questionType: "Single-select",
  question: `Which of the following best describes authentication? (Select the best answer.)`,  // Question text (use `` for multi-line, add <p> tags if needed)
  options: [
    "the process of verifying a user's identity",  // Option A (index 0)
    "the process of establishing a user's accounts upon hire",  // Option B (index 1)
    "the process of verifying the level of access configured for a user",  // Option C (index 2)
    "the process of recording the use of resources"   // Option D (index 3)
  ],
  correctAnswer: 0,  // Index of correct answer (0, 1, 2, or 3)
  explanation: `<p>Authentication is the process of verifying a user's identity. The following list defines the three
phases of the Authentication, Authorization, and Accounting (AAA) process:</p>

<p>· Authentication - the process of verifying a user's identity</p>
<p>. Authorization - the process of verifying the level of access configured for a user</p>
<p>. Accounting - the process of recording the use of resources</p>

<p>AAA systems manage user activity. AAA systems are typically more sophisticated than simple
password authentication systems, such as a local password database. Two common AAA
systems are Remote Authentication Dial-In User Server (RADIUS) and Terminal Access
Controller Access-Control System Plus (TACACS+).</p>

<p>RADIUS is a standard AAA protocol created by the Internet Engineering Task Force (IETF).
Compared to TACACS+, RADIUS has several limitations. For example, RADIUS encrypts only
the password in Access-Request packets; it does not encrypt the entire contents of the packet
like TACACS+ does.</p>

<p>TACACS+ is a Cisco-proprietary protocol used during AAA operations. TACACS+ provides more
granular and flexible control over user access privileges. For example, the AAA operations are
separated by TACACS+, whereas RADIUS combines the authentication and authorization
services into a single function. Because TACACS+ separates these functions, administrators
have more control over access to configuration commands. In addition, TACACS+ encrypts the
entire contents of packets, thus providing additional security.</p>`,  // Explanation (wrap paragraphs in <p></p> tags)
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
  id: 524,  // Question ID number
  category: "Network Fundamentals",  // Category name
  questionType: "Single-select",
  question: `Which of the following is not information provided from an IP phone to a Catalyst switch by
using CDP? (Select the best answer.)`,  // Question text (use `` for multi-line, add <p> tags if needed)
  options: [
    "device PoE requirements",  // Option A (index 0)
    "device IP address",  // Option B (index 1)
    "device platform",  // Option C (index 2)
    "device voice VLAN ID"   // Option D (index 3)
  ],
  correctAnswer: 3,  // Index of correct answer (0, 1, 2, or 3)
  explanation: `<p>Explanation:
An IP phone's voice virtual local area network (VLAN) ID is not information provided from an
IP phone to a Catalyst switch by using Cisco Discovery Protocol (CDP). A VLAN is a logical
segmentation of broadcast domains on a network. Although VLAN IDs are sent using CDP to
devices on an IP network, it is the switch that sends voice VLAN ID information to IP phones
and not vice versa. A CDP-enabled IP phone also receives configuration information from a
Cisco switch, indluding information about automatic Quality of Service (AutoQoS) settings.</p>

<p>CDP is a Cisco-proprietary protocol used to gather information about other Cisco devices on a
network. CDP packets are broadcast from a CDP-enabled device on a multicast address. Each
directly connected CDP-enabled device receives the broadcast and uses that information to
build a CDP table. Detailed information about neighboring CDP devices can be viewed in IOS
by issuing the show odp neighbors detail command in privileged EXEC mode. The following
abbreviated sample output shows information obtained from CDP about the IP phone named
SEP00123456789A:</p>
<pre>Device ID: SEP00123456789A
Entry address (es) :
IP address: 10.11.12.13
Platform: Cisco IP Phone 7961, Capabilities: Host Phone
Interface: FastEthernet 0/8, Port ID (outgoing port) : Port 1
Holdtime : 166 sec

Version : SCCP41.8-0-45R3AS
advertisement version: 2
Duplex: full
Power drawn: 6.300 Watts
Power request id: 27263, Power management id: 3
Power request levels are: 6300 0 0 0 0</pre>
<p> An IP phone can provide Power over Ethernet (PoE) requirements to a Catalyst switch using
CDP. In the sample output above, the device identified as SEP00123456789A is drawing 6.3
watts of power. A Catalyst switch can provide power to both Cisco and non-Cisco IP phones
that support either the 802.3af standard method or the Cisco prestandard method of PoE. For
a Catalyst switch to successfully power an IP phone, both the switch and the IP phone must support the same PoE method. After a common PoE method is determined, CDP messages
sent between Catalyst switches and Cisco IP phones can further refine the amount of power
allocated to each device.</p>
<p>An IP phone can provide IP address information to a Catalyst switch using CDP. In the sample
output above, the device identified as SEP00123456789A has an IP address of 10.11.12.13.
CDP can also deliver address information for other protocols, such as Connectionless Network
Service (CLNS) and DECnet.</p>

<p>An IP phone can provide device platform information to a Catalyst switch using CDP. In the
sample output above, the device identified as SEP00123456789A is further identified as a
Cisco IP Phone 7961.</p>`,  // Explanation (wrap paragraphs in <p></p> tags)
  reference: [
    {
      title: "Boson CCNA Curriculum 200-301",
      description: "Module 1: Network Fundamentals, PoE"
    }
    // Add more references if needed with a comma before this
  ]
},

{
  id: 430,  // Question ID number
  category: "Security Fundamentals",  // Category name
  questionType: "Single-select",
  question: `<p>You issue the show vlan brief command on Switch1 and receive the following partial output:</p>
  <img src="/images/id_430.png" alt="code" style="max-width: 100%; height:  auto; margin: 20px 0;" />
<p>Which of the following statements is true? (Select the best answer.)</p>`,  // Question text (use `` for multi-line, add <p> tags if needed)
  options: [
    "DAI is configured on only GigabitEthernet 0/1 and GigabitEthernet 0/2.",  // Option A (index 0)
    "Only GigabitEthernet 0/1 and GigabitEthernet: 0/2 ports are untrusted ports.",  // Option B (index 1)
    "Only GigabitEthernet 0/1 and GigabitEthernet: 0/2 are trusted ports.",  // Option C (index 2)
    "DAI is not configured on GigabitEthernet 0/1 and GigabitEthernet 0/2."   // Option D (index 3)
  ],
  correctAnswer: 3,  // Index of correct answer (0, 1, 2, or 3)
  explanation: `<p>Dynamic ARP Inspection (DAI) is not configured on GigabitEthernet 0/1 and GigabitEthernet
0/2 in this scenario. The <strong> ip arp inspection vlan 11-12,14 </strong> command does not include virtual
local area network (VLAN) 1. In addition, neither the <strong> ip arp inspection </strong> command nor the <strong> ip
arp inspection trust <strong> command has been issued on the GigabitEthernet interfaces. Therefore,
DAI is not enabled on VLAN 1. The <strong> switchport access vlan 1 </strong> command that has been
issued on both the GigabitEthernet 0/1 interface and the GigabitEthernet 0/2 interface in this
scenario configures those ports to reside on VLAN 1 if the ports are operating access mode.
The <strong> switchport mode access </strong> command configures the ports to operate in access mode.</p>

<p> DAI can be enabled on a single VLAN or on multiple VLANs. To enable DAI, you should use the
<strong>ip arp inspection vlan </strong> global configuration command. The syntax of the ip arp inspection
vlan command is <strong> ip arp inspection vlan </strong>{vlan-ID | vlan-range}. A range of VLANs can be
entered by using a comma-separated list and/or a dash-separated pair of VLAN numbers
indicating the range of VLANs to include. For example, each of the following commands
enables DAI on VLANs 2 through 4:<strong> ip arp inspection vlan 2,3,4 and ip arp inspection
vlan 2-4. Configuring DAI on each VLAN ensures that traffic sent from each host is inspected.
In addition, each port is by default an untrusted port.</p>

<p>By default, a port is configured as an untrusted port when DAI is enabled on that port.
Therefore, configuring VLANs 11, 12, and 14 with DAI by issuing the ip arp inspection vlan
11-12,14 command ensures that any port operating in those VLANs is automatically an
untrusted port.</p>

<p>When DAI is configured for an entire VLAN, you can override the default configuration for a
given port by issuing the ip arp inspection trust command in interface configuration mode.
In this scenario, however, VLAN 1 has not been globally configured to use DAI.</p>`,  // Explanation (wrap paragraphs in <p></p> tags)
  reference: [
    {
      title: "Boson CCNA Curriculum 200-301,",
      description: "Module 8: Security Fundamentals, DAI"
    },
    {
      title: "CCNA 200-301 Official Cert Guide,",
      description: "Volume 2, Chapter 8: DHCP Snooping and ARP Inspection, Dynamic ARP Inspection Configuration"
    }
    // Add more references if needed with a comma before this
  ]
},

{
  id: 521,  // Question ID number
  category:  "Network Fundamentals",  // Category name
  questionType: "Single-select",
  question:  `Which of the following is a type of connection that uses the copper wire infrastructure of the PSTN to provide a maximum throughput of 1.544 Mbps? (Select the best answer.)`,
  options: [
    "DSL",  // Option A (index 0)
    "T1",  // Option B (index 1)
    "satellite",  // Option C (index 2)
    "cable"   // Option D (index 3)
  ],
  correctAnswer:  1,  // Index of correct answer (B.  T1)
  explanation: `<p>T1 connections use the copper wire infrastructure of the public switched telephone network (PSTN) to provide a maximum throughput of 1.544 megabits per second (Mbps). To achieve the 1.544-Mbps rate, T1 connections encapsulate data in DS1 signaling frames.  DS1 signaling frames comprise 24 DS0 channels and one framing bit. Each of the 24 DS0 channels transfers eight bits of data at a time. The inclusion of the framing bit raises the total amount of data in a single DS1 frame to 193 bits. T1 connections transmit 8,000 DS1 frames per second, which brings the total throughput to 1,544,000 bits per second (bps), or 1.544 Mbps.  T1 connections typically transfer data across two pairs of shielded copper wires, which extend from the service provider to the customer. One pair of wires within the T1 line is used to send data, and the other pair is used to receive data.</p>

<p>Cable connections use a coaxial line from the service provider to the customer to provide Internet access. Originally, cable providers offered only television service.  Providers realized that coaxial lines offered enough bandwidth to support simultaneous television and Internet service. However, before cable providers could start offering Internet service, they had to redesign their infrastructure to allow for two-way communications. One of the infrastructure changes was the introduction of the cable modem.  Cable modems are used to convert an analog signal from the provider into a digital signal that can be used by a computer and vice versa. Cable modems provide speeds of up to 27 Mbps, making cable one of the fastest options for home Internet service.</p>

<p>Digital Subscriber Line (DSL) uses the copper wire infrastructure of the PSTN.  However, DSL solutions can provide a maximum throughput that is higher than 1.544 Mbps.  Filters must be installed on each telephone outlet in order to segregate a DSL Internet signal and a telephone voice signal. In order to receive DSL service, the subscriber must have a DSL modem installed at their home or office. The DSL modem is used to convert signals originating from a computer into a frequency that can be transmitted over the DSL line without interfering with other types of transmissions. DSL upload speeds are typically slower than DSL download speeds.  DSL service is available in a variety of forms including Asynchronous DSL (ADSL), Synchronous DSL (SDSL), and Very-high-data-rate DSL (VDSL).</p>

<p>Satellite-based Internet service downloads are received wirelessly through the use of a dish antenna.  Satellite Internet service is typically slower than cable, DSL, or T1 connections.  In addition, because satellite transmissions do not transmit over a physical medium, they are highly susceptible to latency and interference. However, satellite is a long-distance option for areas where the necessary infrastructure for other types of Internet service is absent, such as rural areas.  Cellular Internet service has become a less expensive alternative for some in rural areas who are capable of receiving 3G, 4G, or 4G LTE signals.  In addition, cellular Internet is a common means of Internet access for people who travel frequently. </p>`,
  reference: [
    {
      title: "Techopedia: T1 Line",
      description: "Network Fundamentals"
    }
  ]
},

{
  id: 702,  // Question ID number (first 3 digits)
  category:  "Network Access",  // Category name
  questionType: "Single-select",
  question: `In a split-MAC deployment, which device is responsible for prioritizing packets and responding to beacon and probe requests? (Select the best answer.)`,
  options: [
    "a switch",  // Option A (index 0)
    "a WLC",  // Option B (index 1)
    "a lightweight AP",  // Option C (index 2)
    "a router"   // Option D (index 3)
  ],
  correctAnswer:  2,  // Index of correct answer (C.  a lightweight AP)
  explanation: `<p>In a split-MAC deployment, a lightweight access point (AP) is responsible for prioritizing packets and responding to beacon and probe requests. In a Cisco Unified Wireless Network deployment, the Media Access Control (MAC) functions that are normally handled by a single device in an autonomous wireless network are distributed between lightweight APs and wireless LAN controllers (WLCs). The functionality provided by the lightweight AP includes handling the real-time processing of data, such as sending and receiving 802.11 traffic, responding to beacons and probe messages, encryption, and packet prioritization.  In addition, the lightweight AP must send management information to the WLC so that the WLC can forward the information to a management station. </p>

<p>By contrast, a WLC handles tasks that are not time-sensitive, such as security management, lightweight AP configuration management, and client load balancing. The WLC is also responsible for client association requests, data encapsulation, client authentication, key exchange, security policy enforcement, and radio frequency (RF) management.</p>`,
  reference: [
    {
      title: "CCNA 200-301 Official Cert Guide",
      description: "Volume 1, Chapter 27: Analyzing Cisco Wireless Architectures, Split-MAC Architectures"
    },
    {
      title: "Cisco: Cisco Unified Wireless Technology and Architecture",
      description: "Split MAC Architecture"
    }
  ]
},

{
  id: 66,  // Question ID number (first 3 digits)
  category: "IP Connectivity",
  questionType: "Single-select",
  question: `<p>Examine the network diagram below: </p>

<img src="/images/ospf-network-066.png" alt="OSPF Network Topology" style="max-width: 100%; height:  auto; margin: 20px 0;" />

<p>You administer the network in the above exhibit.  OSPF is configured with default settings.  RouterB is configured to use 192.51.100.1 as a default route. </p>

<p>You issue the <strong>default-information originate</strong> command on RouterB. </p>

<p>How many OSPF routes will be inserted into the routing table on RouterD?  (Select the best answer. )</p>`,
  options: [
    "three",  // Option A (index 0)
    "11",  // Option B (index 1)
    "two",  // Option C (index 2)
    "six",  // Option D (index 3)
    "eight",  // Option E (index 4)
    "four"  // Option F (index 5)
  ],
  correctAnswer:  3,  // Index of correct answer (D.  six)
  explanation: `<p>A total of six Open Shortest Path First (OSPF) routes will be inserted into the routing table on RouterD.  By default, a router prefers directly connected routes over routes that are learned by a routing protocol. Therefore, any OSPF route that is not directly connected to RouterD will be inserted into the routing table by OSPF.  In the topology above, there are four different networks that are directly connected to RouterD: the network that is assigned to the interface connecting RouterD to RouterB, the network that is assigned to the interface connecting RouterD to RouterC, the network that is assigned to the interface connecting RouterD to RouterE, and the 192.0.5.0/24 network.  If you eliminate the directly connected networks and the networks that are not contained within OSPF Area 0, you are left with the following five networks: </p>

<ul>
  <li>The network connecting the interfaces of RouterB and RouterC</li>
  <li>The network connecting the interfaces of RouterC and RouterE</li>
  <li>The 192.0.3.0 network connected to RouterB</li>
  <li>The 192.0.4.0 network connected to RouterC</li>
  <li>The 192.0.6.0 network connected to RouterE</li>
</ul>

<p>However, RouterB is configured to use 192.51.100.1 as a default route in this scenario. The Internet Protocol (IP) address 192.51.100.1 has been assigned to the Serial 0/1 interface on RouterA, which is not contained within the OSPF network. Additionally, the <strong>default-information originate</strong> command has been issued on RouterB.  The <strong>default-information originate</strong> command configures an OSPF router to inject its default route into OSPF as an external route, thereby advertising its default route to neighboring routers. As a result, an OSPF route to 192.51.100.1 will be learned as a sixth route, and a default route, in the routing table on RouterD.</p>`,
  reference: [
    {
      title: "Boson CCNA Curriculum 200-301",
      description: "Module 6: IP Routing, Configuring Multiarea OSPFv2"
    },
    {
      title: "Cisco:  How OSPF Injects a Default Route into a Normal Area",
      description: ""
    },
    {
      title: "Cisco: IP Routing Protocol-Independent Commands",
      description: "show ip route"
    }
  ]
},

{
  id: 42,  // Question ID number (first 3 digits)
  category: "IP Services",
  questionType: "Multi-select",
  question: `Which of the following Application layer protocols use UDP for unsynchronized, connectionless data transfer?  (Select 2 choices.)`,
  options: [
    "SNMP",  // Option A (index 0)
    "FTP",  // Option B (index 1)
    "SMTP",  // Option C (index 2)
    "HTTP",  // Option D (index 3)
    "TFTP"  // Option E (index 4)
  ],
  correctAnswer:  [0, 4],  // Multiple correct answers:  SNMP and TFTP
  explanation: `<p>Simple Network Management Protocol (SNMP) and Trivial File Transfer Protocol (TFTP) use User Datagram Protocol (UDP) for unsynchronized, connectionless data transfer. UDP is a Transport layer protocol that does not use sequence numbers or establish synchronized connections.  Because of UDP's connectionless nature, transmitted datagrams can appear out of sequence or can be dropped without notice; thus it is the responsibility of the Application layer protocol to reorder packets or request the transmission of lost datagrams.  SNMP is used to monitor and manage network devices.  TFTP uses UDP port 69 to transfer files unreliably and without authentication over a network.  Administrators can use TFTP to transfer Cisco IOS images from a server to a device to perform firmware upgrades.  Other common Application layer protocols that use UDP include Dynamic Host Configuration Protocol (DHCP), which is used to assign Internet Protocol (IP) addressing information to clients, Network Time Protocol (NTP), which is used to coordinate time on a network, and Remote Authentication Dial-In User Service (RADIUS), which is used to authenticate users. </p>

<p>Hypertext Transfer Protocol (HTTP) and File Transfer Protocol (FTP) use Transmission Control Protocol (TCP) for reliable, connection-oriented data transfer. TCP is a Transport layer protocol that uses sequencing and error-checking to ensure that transmitted data can be easily reordered if packets arrive out of sequence and can be retransmitted if any packets are lost. Because TCP handles data sequencing and the retransmission of lost data, the Application layer protocols that rely on TCP do not need to handle those tasks and can rely on receiving reliable, ordered data.  FTP, which is used to transfer files over a network, uses TCP ports 20 and 21. Cisco devices can reliably transfer IOS images by using FTP. FTP requires the transmission of authentication credentials, even if anonymous FTP is in use, but those credentials are transmitted in plain text. Other common TCP protocols are HTTP, which is used to transfer webpages over the Internet, Simple Mail Transfer Protocol (SMTP), which is used to send email messages, Post Office Protocol 3 (POP3), which is used to retrieve email messages, and Telnet, which is used to manage network devices.</p>`,
  reference: [
    {
      title: "Boson CCNA Curriculum 200-301",
      description: "Module 7:  IP Services, TFTP"
    },
    {
      title: "Boson CCNA Curriculum 200-301",
      description: "Module 7: IP Services, SNMP"
    },
    {
      title: "IANA:  Service Name and Transport Protocol Port Number Registry",
      description: ""
    }
  ]
},

{
  id: 514,  // Question ID number (first 3 digits)
  category: "Security Fundamentals",
  questionType: "Single-select",
  question: `<p>You want to create a user account named boson with the password eX$1mM@x on a router. The password should be converted to an MD5 hash and stored on the router. </p>

<p>Which of the following commands should you issue on the router?  (Select the best answer. )</p>`,
  options: [
    "username boson password eX$1mM@x",  // Option A (index 0)
    "username boson secret eX$1mM@x",  // Option B (index 1)
    "username boson eX$1mM@x",  // Option C (index 2)
    "username boson secret 5 eX$1mM@x"  // Option D (index 3)
  ],
  correctAnswer:   1,  // Index of correct answer (B.  username boson secret eX$1mM@x)
  explanation: `<p>To create a user account named boson with a Message Digest 5 (MD5)-hashed password of eX$1mM@x, you should issue the <strong>username boson secret eX$1mM@x</strong> command on the router.   The <strong>username</strong> command creates a new user and adds the user to the local user database on a router.  The local user database on a router contains a list of users that have been added to the router; these users can access the router.  When using the <strong>username</strong> command to create a new user on a router, you can configure the user's password to be stored as plain text or as an MD5 hash. To configure a user name with a plain-text password, you should use the <strong>username</strong> <em>user-name</em> <strong>password</strong> <em>password</em> command.  Using the <strong>secret</strong> keyword instead of the <strong>password</strong> keyword ensures that the password is stored as an MD5 hash.  Thus the command <strong>username boson secret eX$1mM@x</strong> creates a user named boson and stores the password as an MD5 hash value.  In the output of the <strong>show running-config</strong> command, the hash value of the password rather than the actual password would be displayed, similar to the following: </p>

<pre>username boson secret 5 $%A*mNXYz0@1976gtr</pre>

<p>The 5 indicates that the password was encrypted with MD5.</p>

<p>Issuing the <strong>username boson password eX$1mM@x</strong> command creates the boson user account and adds the user account to the local user database.  However, the password is stored as plain text instead of an MD5 hash because the <strong>password</strong> keyword is used instead of the <strong>secret</strong> keyword.</p>

<p>If you know the hash value of the password, you can use the MD5 hash value of a password manually instead of assigning a plain-text password to be converted into a hash by the IOS.  This is accomplished by issuing the <strong>username</strong> <em>user-name</em> <strong>secret 5</strong> <em>hash-value</em> command.  The <strong>5</strong> parameter indicates that the assigned value is already in MD5 hash form.  The scenario indicates that the password should be converted to an MD5 hash, so you should not issue the <strong>username boson secret 5 eX$1mM@x</strong> command.</p>

<p>The <strong>username boson eX$1mM@x</strong> command is an invalid Cisco command because it does not contain the <strong>password</strong> keyword.  Either <strong>password</strong> or <strong>secret</strong> is required when the <strong>username</strong> command is issued.</p>`,
  reference: [
    {
      title: "Boson CCNA Curriculum 200-301",
      description: "Module 8: Security Fundamentals, Configuring User Names and Passwords"
    },
    {
      title: "Cisco: Configuring Security with Passwords, Privileges, and Logins",
      description: "Configuring a Device to Require a Username for the First-Line Technical Support Staff"
    }
  ]
},

{
  id: 643,  // Question ID number (first 3 digits)
  category: "Network Fundamentals",
  questionType: "Single-select",
  question: `Which of the following prefixes will an IPv6-enabled computer use to automatically configure an IPv6 address for itself?  (Select the best answer.)`,
  options: [
    "2000::/3",  // Option A (index 0)
    "FC00::/7",  // Option B (index 1)
    "FE80::/10",  // Option C (index 2)
    "FF00::/8"  // Option D (index 3)
  ],
  correctAnswer:   2,  // Index of correct answer (C.   FE80::/10)
  explanation: `<p>An Internet Protocol version 6 (IPv6)-enabled computer will use the prefix FE80::/10 to automatically configure an IPv6 address for itself. The IPv6 prefix FE80::/10 is used for unicast link-local addresses.  IPv6 addresses in the FE80::/10 range begin with the characters FE80 through FEBF.  Unicast packets are used for one-to-one communication.  Link-local addresses are unique only on the local segment.  Therefore, link-local addresses are not routable.  Unicast link-local addresses are used for neighbor discovery and for environments in which no router is present to provide a routable IPv6 prefix.</p>

<p>IPv6 was developed to address the lack of available address space with IP version 4 (IPv4). An IPv6 address is a 128-bit (16-byte) address that is typically written as eight groups of four hexadecimal characters, including numbers from 0 through 9 and letters from A through F. Each group of four characters is separated by colons. Leading zeros in each group can be dropped. A double colon can be used at the beginning, middle, or end of an IPv6 address in place of one or more contiguous four-character groups consisting of all zeros.  However, only one double colon can be used in an IPv6 address. Therefore, the following IPv6 addresses are equivalent: </p>

<ul>
  <li>FE80:0000:0000:070D:0000:50A0:0001: 0024</li>
  <li>FE80:: 070D:0000:50A0:0001:0024</li>
  <li>FE80:0:0:70D:0:50A0:1:24</li>
  <li>FE80::70D:0:50A0:1:24</li>
</ul>

<p>An IPv6-enabled computer will not use the prefix 2000::/3 to automatically configure an IPv6 address for itself. The IPv6 prefix 2000::/3 is used for global aggregatable unicast addresses. IPv6 addresses in the 2000::/3 range begin with the characters 2000 through 3FFF. Global aggregatable unicast address prefixes are distributed by the Internet Assigned Numbers Authority (IANA) and are globally routable over the Internet. </p>

<p>An IPv6-enabled computer will not use the prefix FC00::/7 to automatically configure an IPv6 address for itself. The IPv6 prefix FC00::/7 is used for unicast unique-local addresses. IPv6 addresses in this range begin with the characters FC00 through FDFF. Unique-local addresses are not globally routable, but they are routable within an organization. </p>

<p>An IPv6-enabled computer will not use the prefix FF00::/8 to automatically configure an IPv6 address for itself. The IPv6 prefix FF00::/8 is used for multicast addresses, which are used for one-to-many communication. IPv6 addresses in the FF00::/8 range begin with the characters FF00 through FFFF. However, certain address ranges are used to indicate the scope of the multicast address. The following IPv6 multicast scopes are defined:</p>

<ul>
  <li>FF01::/16 – node-local</li>
  <li>FF02::/16 – link-local</li>
  <li>FF05::/16 – unique-local</li>
  <li>FF08::/16 – organization-local</li>
  <li>FF0E::/16 – global</li>
</ul>`,
  reference: [
    {
      title: "CCNA 200-301 Official Cert Guide",
      description: "Volume 1, Chapter 24: Implementing IPv6 Addressing on Routers, Link-Local Addresses"
    },
    {
      title: "RIPE: IPv6 Address Types",
      description: "(PDF)"
    }
  ]
},

{
  id: 81,  // Question ID number (first 3 digits)
  category: "IP Connectivity",
  questionType: "Multi-select",
  question: `<p>Examine the network diagram below:  </p>

<img src="/images/ipv6-routing-081.png" alt="IPv6 Network Topology" style="max-width: 100%; height:   auto; margin: 20px 0;" />

<p>You have connected the GigabitEthernet 0/1 interface of RouterC to RouterB and configured the appropriate interface addresses on both routers. </p>

<p>Which of the following commands could you issue on RouterC to enable communication between RouterC and RouterA?   (Select 2 choices. )</p>`,
  options: [
    "ipv6 route ::/0 GigabitEthernet 0/1",  // Option A (index 0)
    "ipv6 route 2001:DB8:2::/64 2001:DB8:1::2",  // Option B (index 1)
    "ipv6 route 2001:DB8:1:: 2 2001:DB8:2::/64",  // Option C (index 2)
    "ipv6 route 2001:DB8:1: :/64 2001:DB8:2::1",  // Option D (index 3)
    "ipv6 route 2001:DB8:2:: 1 2001:DB8:1::/64"  // Option E (index 4)
  ],
  correctAnswer:   [0, 3],  // Multiple correct answers:   A and D
  explanation: `<p>You could issue either the <strong>ipv6 route : :/0 GigabitEthernet 0/1</strong> command or the <strong>ipv6 route 2001:DB8:1::/64 2001:DB8:2::1</strong> command on RouterC to enable communication between RouterC and RouterA. However, RouterA also needs to be configured with a route to RouterC before communication will occur. </p>

<p>The basic syntax of the <strong>ipv6 route</strong> command is <strong>ipv6 route</strong> <em>prefix/length</em> {<em>interface</em> | <em>next-hop</em>} [<em>administrative-distance</em>], where <em>prefix/length</em> is the destination network, <em>interface</em> is the output interface on the local router, <em>next-hop</em> is the next-hop Internet Protocol version 6 (IPv6) address, and <em>administrative-distance</em> is an optional administrative distance (AD).</p>

<p>You should not issue the <strong>ipv6 route 2001:DB8:2: :/64 2001:DB8:1::2</strong> command on RouterC.   This command should be issued on RouterA to create a static route to RouterC.  Alternatively, you can create a default gateway on RouterA by issuing the <strong>ipv6 route : :/0 GigabitEthernet 0/1</strong> command. </p>

<p>You should not issue the <strong>ipv6 route 2001:DB8:2::1 2001:DB8:1::/64</strong> command or the <strong>ipv6 route 2001:DB8:1::2 2001:DB8:2::/64</strong> command.   These commands have the destination network and next-hop IPv6 addresses swapped and are therefore invalid.</p>`,
  reference: [
    {
      title: "Boson CCNA Curriculum 200-301",
      description: "Module 6: IP Routing, IPv6 Static Routes"
    },
    {
      title: "Cisco:  Cisco IOS IPv6 Command Reference",
      description: "IPv6 Commands:  ipv6 route"
    },
    {
      title: "Cisco:   IPv6 Routing:   Static Routing",
      description: "Information About IPv6 Routing:  Static Routing"
    }
  ]
},

{
  id: 452,  // Question ID number (first 3 digits)
  category: "Security Fundamentals",
  questionType: "Multi-select",
  question: `Which of the following are used by WPA2 to provide MICs and encryption?  (Select 2 choices.)`,
  options: [
    "CCMP",  // Option A (index 0)
    "RC4",  // Option B (index 1)
    "GCMP",  // Option C (index 2)
    "TKIP",  // Option D (index 3)
    "AES"  // Option E (index 4)
  ],
  correctAnswer:    [0, 4],  // Multiple correct answers:    CCMP and AES
  explanation: `<p>Advanced Encryption Standard (AES) and Counter Mode with Cipher Block Chaining Message Authentication Code Protocol (CCMP) are used by Wi-Fi Protected Access 2 (WPA2) to provide message integrity checks (MICs) and encryption.  Wireless security protocols use MICs to prevent data tampering.   Encryption is used to protect confidentiality. </p>

<p>WPA2, which implements the 802.11i wireless standard, was developed to address the security vulnerabilities in the original WPA standard.  One enhancement over WPA included in WPA2 is the encryption algorithm.   AES is a stronger encryption algorithm than the RC4 algorithm used by earlier wireless standards.   When AES is implemented, a 128-bit block cipher is used to encrypt data and a security key of 128, 192, or 256 bits can be used.   This is a processor-intensive operation, and implementing WPA2 and AES often requires new hardware, such as new wireless access points (WAPs) and new client wireless network adapters.</p>

<p>In addition to AES, WPA2 also uses CCMP to provide encryption.   CCMP is an encryption mechanism that uses block ciphers.   In WPA2, CCMP is used by AES during the encryption process.  The WPA2 encryption process is thus sometimes known as AES-CCMP. </p>

<p>RC4 is a stream cipher encryption algorithm used in the Wired Equivalent Privacy (WEP) protocol.  Unlike AES, which supports an encryption key length of 256 bits, RC4 supports an encryption key length of up to 128 bits.  Consequently, RC4 is not as secure as AES.  Furthermore, RC4 uses a stream cipher, which is a less secure encryption method.   RC4 is not used with WPA2.</p>

<p>Temporal Key Integrity Protocol (TKIP) is used to provide MICs and encryption in the WPA protocol.  WPA is the successor to WEP and the predecessor of WPA2.  The WPA TKIP implementation provides improvements over WEP but uses RC4 as the encryption algorithm.  TKIP supports an encryption key of up to 128 bits, whereas AES supports an encryption key of 256 bits.  Consequently, TKIP is not specified as the encryption method in the 802.11i standard.</p>

<p>Galois/Counter Mode Protocol (GCMP) is used along with AES to provide MICs and encryption in the WPA3 protocol.  The WPA3 protocol was introduced in 2018 as a future replacement for WPA2.  GCMP is considered to be stronger and more efficient than CCMP.  GCMP uses AES to provide encryption and Galois Message Authentication Code (GMAC) to provide MICs.</p>`,
  reference: [
    {
      title: "Boson CCNA Curriculum 200-301",
      description: "Module 8:  Security Fundamentals, WPA2"
    },
    {
      title: "CCNA 200-301 Official Cert Guide",
      description: "Volume 1, Chapter 28: Securing Wireless Networks, WPA, WPA2, and WPA3"
    }
  ]
},

{
  id: 74,  // Question ID number (first 3 digits)
  category: "IP Services",
  questionType: "Single-select",
  question: `<p>HostA is attempting to initiate an HTTP connection to HostB through a NAT router named RouterA.</p>

<p>The devices use the following IP addresses:  </p>

<ul>
  <li>HostA:   10.1.7.7</li>
  <li>HostB:  192.0.2.28</li>
  <li>RouterA internal interface:  10.1.7.1</li>
  <li>RouterA external interface:  203.0.113.62</li>
</ul>

<p>Which of the following lines of output would you expect to be displayed when you issue the <strong>show ip nat translations</strong> command on RouterA?  (Select the best answer.  )</p>`,
  options: [
    `Pro Inside global        Inside local      Outside local   Outside global
tcp 10.1.7.7:49912       10.1.7.1:49912    192.0.2.28:80   
192.0.2.28:80`,  // Option A (index 0)
    `Pro Inside global        Inside local      Outside local   Outside global
tcp 203.0.113.62:49912   10.1.7.1:49912    192.0.2.28:80   
192.0.2.28:80`,  // Option B (index 1)
    `Pro Inside global        Inside local      Outside local   Outside global
tcp 10.1.7.1:49912       10.1.7.7:49912    192.0.2.28:80   
192.0.2.28:80`,  // Option C (index 2)
    `Pro Inside global        Inside local      Outside local   Outside global
tcp 203.0.113.62:49912   10.1.7.7:49912    192.0.2.28:80   
192.0.2.28:80`  // Option D (index 3)
  ],
  correctAnswer:     3,  // Index of correct answer (D)
  explanation: `<p>You would expect to the following lines of output to be displayed when you issue the <strong>show ip nat translations</strong> command on RouterA:  </p>

<pre>Pro Inside global        Inside local      Outside local   Outside global
tcp 203.0.113.62:49912   10.1.7.7:49912    192.0.2.28:80   192.0.2.28:80</pre>

<p>The <strong>show ip nat translations</strong> command displays the mapping between internal and external Internet Protocol (IP) addresses when Network Address Translation (NAT) is configured on a router.   NAT translates between public and private IP addresses to enable hosts on a privately addressed network to access a public network, such as the Internet.   By default, NAT provides only a one-to-one mapping of addresses.  If multiple hosts require simultaneous access to the public network, NAT must be configured to use either a pool of public IP addresses or NAT overloading.</p>

<p>The <strong>show ip nat translations</strong> command displays five fields of information for each NAT translation session:  </p>

<ul>
  <li><strong>Protocol</strong> – displays the type of protocol in the translated session, such as Internet Control Message Protocol (ICMP), Transmission Control Protocol (TCP), or User Datagram Protocol (UDP)</li>
  <li><strong>Inside global address</strong> – displays an IP address that represents an inside host as seen by hosts on the outside network</li>
  <li><strong>Inside local address</strong> – displays the IP address configured on a host on the local network</li>
  <li><strong>Outside local address</strong> – displays the IP address of a host on the outside network as seen from a host on the inside network</li>
  <li><strong>Outside global address</strong> – displays the IP address configured on a host on the outside network</li>
</ul>

<p>Typically, NAT is configured only for addresses on the inside network; therefore, the outside local and outside global address are often identical, as seen in this example.   The following graphic depicts the relationship between inside local, inside global, outside local, and outside global addresses:  </p>

<img src="/images/nat-diagram-074.png" alt="NAT Address Translation Diagram" style="max-width: 100%; height:    auto; margin:  20px 0;" />

<p>The inside local address is the IP address of HostA, 10.1.7.7.  The inside global address is the IP address of the external interface on RouterA, 203.0.113.62.  The outside local and outside global address is the IP address of HostB, 192.0.2.28.  The IP address of the internal interface on RouterA, 10.1.7.1, will not be displayed in the output of the <strong>show ip nat translations</strong> command.</p>

<p>When HostA initiates a Hypertext Transfer Protocol (HTTP) connection with HostB, it sends packets to 192.0.2.28 on TCP port 80.  HostA also chooses an ephemeral port number that HostB will use when communicating back to HostA.   Ephemeral ports are generally numbered from 49152 through 65535.  When HostB at 192.0.2.28 responds to HostA, it will send packets to 203.0.113.62 on TCP port 49912.</p>`,
  reference: [
    {
      title: "Boson CCNA Curriculum 200-301",
      description: "Module 7:   IP Services, PAT Configuration"
    },
    {
      title: "Cisco:    Cisco IOS IP Addressing Services Command Reference",
      description: "show ip nat translations"
    },
    {
      title: "Cisco:  NAT",
      description: "Local and Global Definitions"
    }
  ]
},

{
  id: 18,  // Question ID number (first 3 digits)
  category: "IP Connectivity",
  questionType: "Single-select",
  question: `<p>You are trying to configure OSPF to perform equal-cost load balancing.  Router1 should have eight equal-cost OSPF routes to the 192.168.102.0/24 network. However, only four OSPF routes exist. </p>

<p>Which of the following should you do to perform equal-cost load balancing over all eight routes?  (Select the best answer.)</p>`,
  options: [
    "Issue <strong>the maximum-paths 8</strong> command.",  // Option A (index 0)
    "Issue <strong>the ip ospf cost 1</strong> command on all interfaces.",  // Option B (index 1)
    "Configure EIGRP throughout the network.",  // Option C (index 2)
    "Configure the variance to a value of 8."  // Option D (index 3)
  ],
  correctAnswer:  0,  // Index of correct answer (A.  maximum-paths 8)
  explanation: `<p>You should issue the <strong>maximum-paths 8</strong> command.  Many Open Shortest Path First (OSPF) routers can insert a maximum of four equal-cost paths into the routing table by default. You can override the default maximum by issuing the <strong>maximum-paths</strong> <em>maximum</em> command in OSPF router configuration mode, where <em>maximum</em> indicates the maximum number of equal-cost paths to insert into the routing table.</p>

<p>You need not configure Enhanced Interior Gateway Routing Protocol (EIGRP) throughout the network.  OSPF supports equal-cost load balancing; if multiple OSPF paths to a destination exist and each path has the same bandwidth, OSPF will load balance between the paths.  By contrast, EIGRP supports load balancing over equal-cost and unequal-cost paths. </p>

<p>OSPF does not use variance; therefore, configuring variance to a value of 8 will not enable Router1 to perform equal-cost load balancing over eight paths.  The <strong>variance</strong> command is used to determine whether EIGRP feasible successors can be used for unequal-cost load balancing. </p>

<p>You need not issue the <strong>ip ospf cost 1</strong> command on all interfaces, because the routes already have the same cost. You can manually configure the OSPF cost of a path through an interface by issuing the <strong>ip ospf cost</strong> <em>cost</em> command in interface configuration mode, where <em>cost</em> is the path cost that you want to assign.  OSPF uses cost, which is based on bandwidth, as its metric. The higher the bandwidth, the lower the cost.  OSPF selects the lowest-cost path, which is the path with the highest bandwidth, to a destination.</p>`,
  reference: [
    {
      title: "Boson CCNA Curriculum 200-301",
      description: "Module 6: IP Routing, Using Cost to Load Balance OSPF"
    },
    {
      title: "Cisco:  OSPF Design Guide",
      description: "OSPF Cost"
    },
    {
      title: "Cisco: How Does Unequal Cost Path Load Balancing (Variance) Work in IGRP and EIGRP?",
      description:  ""
    }
  ]
},

{
  id: 652,  // Question ID number
  category: "Network Access",
  questionType: "Single-select",
  question: `<p>Refer to the exhibit below: </p>

<img src="/images/ip-phone-qos-652.png" alt="Network diagram showing Switch, IP Phone, and Host connected" style="max-width: 100%; height:  auto; margin: 20px 0;" />

<p>Which of the following commands should you issue in interface configuration mode on the Catalyst 2950 switch to make the IP phone trust the CoS priority of incoming data packets generated by the attached host?  (Select the best answer.)</p>`,
  options: [
    "switchport priority extend cos",  // Option A (index 0)
    "mls qos trust cos",  // Option B (index 1)
    "mls qos trust extend",  // Option C (index 2)
    "switchport priority extend trust"  // Option D (index 3)
  ],
  correctAnswer: 3,  // Index of correct answer (D)
  explanation: `<p>You should issue the switchport priority extend trust command in interface configuration mode to cause the switch to instruct the Internet Protocol (IP) phone to trust the Class of Service (CoS) priority of incoming data packets.  Because voice traffic is vulnerable to degradation and deterioration if the traffic is sent unevenly, IP phones support Quality of Service (QoS) that is based on the Institute of Electrical and Electronics Engineers (IEEE) 802.1p CoS standard. QoS uses the CoS priority value to prioritize the forwarding of voice and data packets in a predictable fashion. Because data packets from the host computer and voice packets from the IP phone share a physical link to the switch, a method to prioritize the transmission of the voice packets over the data packets is required. A problem occurs when the data packets that are transmitted by the host have a higher CoS priority value than the voice packets that are generated by the IP phone. If this happens, the data packets could take precedence over the voice packets and cause unacceptable degradation of the voice call.  By default, an IP phone is configured to override the CoS priority value assigned by the host and reassign the lowest CoS priority value of 0 to the data packets. Under certain circumstances, such as when the data that is transmitted by the host is mission-critical, you might want the IP phone to trust the host-generated CoS priority value that is assigned to the data packets. If you issue the switchport priority extend trust command, the IP phone will not override the CoS values from the host but will accept the existing CoS value as valid and will forward unchanged data packets to the switch.</p>

<p>You can also configure the switch to instruct the IP phone to reclassify the CoS priority value that the host assigns to its data packets. To do this, you should issue the switchport priority extend cos value command. The CoS value ranges from 0 through 7, with 7 being the highest priority.  If you issue the switchport priority extend cos value command, the value overrides the CoS priority value assigned by the host and tags the data packet with a CoS of 0, which is the default value and is lower than the CoS value of 5 that the IP phone tags its voice packets with.  Overriding the CoS priority value ensures that voice packets will have a higher priority than the data packets and the voice packets will be given preference over the data packets as they are processed by the switch.</p>

<p>The mls qos trust cos command moves the trust boundary from the switch to the IP phone, which lets the switch accept the IP phone voice traffic as having come from a trusted source. The mls qos trust cos command does not instruct the IP phone to trust or override the CoS priority value of the data packets received from the attached host. The mls qos trust extend command does not cause the switch to instruct the IP phone to trust the CoS priority of incoming data packets, because it is a valid command for Catalyst 6500 series switches only.</p>`,
  reference: [
    {
      title: "CCNA 200-301 Official Cert Guide",
      description: "Volume 1, Chapter 8: Implementing Ethernet Virtual LANs, Implementing Interfaces Connected to Phones"
    },
    {
      title: "Cisco: Configuring Voice VLAN",
      description: "Understanding Voice VLAN"
    }
  ]
},

{
  id: 424,  // Question ID number
  category: "Security Fundamentals",
  questionType: "Single-select",
  question: `<p>You administer the network shown in the following exhibit:  </p>

<img src="/images/network-acl-424.png" alt="Network topology showing RouterA, RouterB, RouterC, RouterD and hosts HostA, HostB, HostC, HostD" style="max-width: 100%; height:  auto; margin: 20px 0;" />

<p>You issue the show running-config | section line command on RouterB and receive the following output:  </p>

<pre>RouterB#show running-config | section line
line con 0
line aux 0
line vty 0 4
 access-class 10 in
 login
 password cisco</pre>

<p>Which of the following ACL types is applied to the VTY lines on RouterB?  (Select the best answer. )</p>`,
  options: [
    "standard",  // Option A (index 0)
    "extended",  // Option B (index 1)
    "dynamic",  // Option C (index 2)
    "named"  // Option D (index 3)
  ],
  correctAnswer: 0,  // Index of correct answer (A.  standard)
  explanation: `<p>A standard access control list (ACL) is applied to the virtual terminal (VTY) lines on RouterB, as shown in the following output:  </p>

<pre>RouterB#show running-config | section line
line con 0
line aux 0
line vty 0 4
 access-class 10 in
 login
 password cisco</pre>

<p>In the output above, the access-class 10 in command configures VTY lines from 0 through 4 to apply ACL 10 in the inbound direction. To configure a standard ACL on a Cisco router, you should use the following command syntax:  </p>

<p>access-list acl-number {deny | permit} {host ip-address | source source-wildcard | any}</p>

<p>Issuing the show access-lists command in this scenario reveals that ACL 10 has been configured to permit traffic from a host with a source Internet Protocol (IP) address of 192.168.1.34, as shown in the following output: </p>

<pre>RouterB#show access-lists
Standard IP access list 10
 10 permit host 192.168.1.34 (0 matches)
 20 permit host 192.168.1.50 (5 matches)
Extended IP access list 101
 10 permit tcp host 192.168.1.33 any eq telnet  (0 matches)
 20 permit tcp host 192.168.1 50 any eq telnet  (0 matches)</pre>

<p>A Cisco router can identify the type of ACL by the acl-number value. An ACL is a standard access list when the acl-number value is from 1 through 99 or from 1300 through 1999. </p>

<p>No extended ACL is applied to the VTY lines on RouterB, although an extended ACL has been configured on RouterB.  An access list is an extended access list when the acl-number value is from 100 through 199 or from 2000 through 2699. Extended ACLs can permit or deny packets based on source IP address, destination IP address, protocol, and port.  Because of how extended access lists filter traffic, Cisco recommends that you apply extended ACLs as close to the source of the packets being filtered as possible.  Placing an extended ACL as close as possible to the source of the traffic prevents traffic from unnecessarily traversing the network, thereby consuming bandwidth and router resources.  The output of the show access-lists command on RouterB reveals that RouterB is configured with extended ACL 101, which permits Transmission Control Protocol (TCP) traffic from a host with a source IP address of 192.168.1.33 to any destination as long as the traffic is on the Telnet port, which is TCP port 23.</p>

<p>No named ACL is applied to the VTY lines on RouterB, nor is a named ACL configured on RouterB. A named ACL is an ACL that is identified by a name instead of an ACL number. Named ACLs can be either standard ACLs or extended ACLs depending on the keyword issued when the ACL is created. </p>

<p>To configure a standard access list by name instead of number, you should issue the ip access-list standard name command, where name is a unique identifier consisting of any alphanumeric character except the space character. After you issue the ip access-list standard name command, the device will be placed in standard ACL configuration mode, where you can issue one or more statements to configure the named ACL. To create these ACL statements, you should use the syntax [sequence-number] {deny | permit} {host ip-address | source source-wildcard | any}, where sequence-number is an optional sequence number that indicates the order in which the ACL statements will be evaluated. If you do not issue a sequence number, the statements will be processed in the order in which they are issued.</p>

<p>To configure an extended access list by name instead of number, you should issue the ip access-list extended name command, where name is a unique identifier consisting of any alphanumeric character except the space character. After you issue the ip access-list extended name command, the router will be placed in extended ACL configuration mode, where you can issue one or more statements to configure the named ACL. To create these ACL statements, you should use the syntax [sequence-number] {deny | permit} protocol source source-wildcard [operator port] destination destination-wildcard [operator port], where sequence-number is an optional sequence number that indicates the order in which the ACL statements will be evaluated. If you do not issue a sequence number, the statements will be processed in the order in which they are issued.</p>

<p>No dynamic ACL is applied to the VTY lines on RouterB, nor is a dynamic ACL configured on RouterB. Dynamic ACLs offer additional security by forcing users to authenticate before permission to send packets over a network is granted. Dynamic ACL-enabled interfaces initially use an extended ACL to deny all traffic.  Users who want to send packets beyond the protected interface are first required to establish a Telnet connection to the router and provide credentials to authenticate. If authentication is verified, an ACL will be automatically generated to allow the authenticated user access and the Telnet connection will be disconnected. </p>`,
  reference: [
    {
      title: "Boson CCNA Curriculum 200-301",
      description: "Module 8: Security Fundamentals, Configuring IPv4 ACLs to Control Access"
    },
    {
      title: "Cisco:  Configuring IP Access Lists",
      description: "Standard ACLs"
    }
  ]
},

{
  id: 35,  // Question ID number
  category: "IP Connectivity",
  questionType: "Matching",
  question: `<p>To complete this question, click <strong>Launch Simulator</strong> and follow the on-screen instructions.</p>

<p>Match each First-Hop Redundancy Protocol (FHRP) characteristic on the left with its correct protocol on the right.</p>`,
  
  matchingPairs: {
    terms: [
      { id: "glbp", text: "has one active virtual gateway and multiple active virtual forwarders" },
      { id: "hsrp", text: "has one active router and one standby router" },
      { id: "vrrp", text: "has one master router and multiple backup routers" }
    ],
    definitions: [
      { id: "def1", text: "GLBP", correctMatch: "glbp" },
      { id: "def2", text: "HSRP", correctMatch: "hsrp" },
      { id: "def3", text: "VRRP", correctMatch: "vrrp" }
    ]
  },
  
  correctAnswer: {
    glbp: "def1",
    hsrp:  "def2",
    vrrp: "def3"
  },
  
  explanation: `<p>Gateway Load Balancing Protocol (GLBP) is a First-Hop Redundancy Protocol (FHRP) that also provides load balancing.  GLBP enables you to configure multiple routers as a GLBP group; the routers in the group receive traffic sent to a virtual IP address that is configured for the group. Each GLBP group contains an active virtual gateway (AVG) that is elected based on which router is configured with the highest priority value, or with the highest IP address if multiple routers are configured with the highest priority value. The other routers in the GLBP group are configured as primary or secondary active virtual forwarders (AVFs). Up to four primary AVFs can be configured in a GLBP group, and the primary AVFs can participate in forwarding traffic.  Consequently, multiple routers can be used simultaneously to provide load balancing for the GLBP group.</p>

<p>Hot Standby Router Protocol (HSRP) is an FHRP that is defined in Request for Comments (RFC) 2281. Similar to GLBP, HSRP can be used to provide backup router coverage if the primary gateway becomes unavailable. Multiple routers are assigned to an HSRP group, and the routers function as a single gateway.  An HSRP group contains one active router and one standby router. The active router is the router with the highest priority value, and the standby router is the router with the second-highest priority value. Other routers in the HSRP group are in the listen state.  If the active router fails, the standby router will assume the active router role and a new standby router will be elected.</p>

<p>Virtual Router Redundancy Protocol (VRRP) is also an FHRP.  Routers are assigned to a VRRP group, and the group functions as a single gateway for clients. A VRRP group has one master router, which is the router with the highest priority value.  All other routers in the VRRP group are backup routers. A virtual Media Access Control (MAC) address is used to identify the VRRP group to clients. The virtual MAC address for VRRP groups is in the form of 0000.5e00.01xx, where xx is a hexadecimal value identifying the VRRP group number.  For example, VRRP Group 1 would be identified by the virtual MAC address 0000.5e00.0101.</p>`,
  
  reference: [
    {
      title: "Boson CCNA Curriculum 200-301",
      description: "Module 6: IP Routing, Understanding FHRPs"
    },
    {
      title: "Cisco:  GLBP - Gateway Load Balancing Protocol",
      description: ""
    },
    {
      title: "Cisco: Hot Standby Router Protocol Features and Functionality",
      description: "HSRP Operation"
    },
    {
      title: "Cisco:  Configuring VRRP",
      description: ""
    }
  ]
},

{
  id: 1,  // Question ID number
  category: "IP Connectivity",
  questionType: "Matching",
  question: `<p>To complete this question, click <strong>Launch Simulator</strong> and follow the on-screen instructions.</p>

<p>Match each route type on the left with its preference level based on administrative distance (AD). </p>`,
  
  matchingPairs: {
    terms: [
      { id: "directly-connected", text: "directly connected route" },
      { id: "static", text: "static route" },
      { id: "eigrp-internal", text: "internal EIGRP route" },
      { id: "ospf", text: "OSPF route" },
      { id: "isis", text: "IS-IS route" },
      { id: "rip", text: "RIP route" }
    ],
    definitions: [
      { id:  "def1", text: "Most Preferred", correctMatch: "directly-connected" },
      { id: "def2", text: "Second Most Preferred", correctMatch:  "static" },
      { id: "def3", text: "Third Most Preferred", correctMatch:  "eigrp-internal" },
      { id: "def4", text: "Fourth Most Preferred", correctMatch: "ospf" },
      { id: "def5", text: "Fifth Most Preferred", correctMatch: "isis" },
      { id: "def6", text: "Least Preferred", correctMatch: "rip" }
    ]
  },
  
  correctAnswer: {
    "directly-connected": "def1",
    "static":  "def2",
    "eigrp-internal": "def3",
    "ospf": "def4",
    "isis":  "def5",
    "rip": "def6"
  },
  
  explanation: `<p>Route preference is based on the administrative distance (AD) of the connectivity method or the routing protocol used.  When multiple routes to a network exist, a router prefers the routing protocol with the lowest AD.  The following list contains the most commonly used ADs:  </p>

<table border="1" cellpadding="8" cellspacing="0" style="border-collapse: collapse; margin:   20px 0;">
  <thead>
    <tr>
      <th>Route Source</th>
      <th>AD</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Directly connected route</td>
      <td>0</td>
    </tr>
    <tr>
      <td>Static route</td>
      <td>1</td>
    </tr>
    <tr>
      <td>EIGRP summary route</td>
      <td>5</td>
    </tr>
    <tr>
      <td>eBGP</td>
      <td>20</td>
    </tr>
    <tr>
      <td>Internal EIGRP</td>
      <td>90</td>
    </tr>
    <tr>
      <td>IGRP</td>
      <td>100</td>
    </tr>
    <tr>
      <td>OSPF</td>
      <td>110</td>
    </tr>
    <tr>
      <td>IS-IS</td>
      <td>115</td>
    </tr>
    <tr>
      <td>RIP</td>
      <td>120</td>
    </tr>
    <tr>
      <td>External EIGRP</td>
      <td>170</td>
    </tr>
    <tr>
      <td>iBGP</td>
      <td>200</td>
    </tr>
    <tr>
      <td>Unknown</td>
      <td>255</td>
    </tr>
  </tbody>
</table>

<p>A directly connected route, which has an AD of 0, is preferred over any other route to the same network. If a link to a directly connected network goes down, the route with the next lowest AD will be used. </p>

<p>Static routes, which have an AD of 1, are preferred after directly connected routes.  You can create a static route to a network by issuing the <strong>ip route</strong> command.  The basic syntax of the <strong>ip route</strong> command is <strong>ip route</strong> <em>prefix mask</em> {<em>ip-address</em> | <em>interface</em>}, where <em>prefix</em> is the network address, <em>mask</em> is the subnet mask of the destination network, <em>ip-address</em> is the Internet Protocol (IP) address of the next-hop router, and <em>interface</em> is the local interface to which the packets should be sent.</p>

<p>Of the available choices, an internal Enhanced Interior Gateway Routing Protocol (EIGRP) route is the next most preferred route.  Internal EIGRP routes have an AD of 90.</p>

<p>Of the remaining choices, an Open Shortest Path First (OSPF) route is the next most preferred route. OSPF routes have an AD of 110.</p>

<p>Of the remaining choices, an Intermediate System-to-Intermediate System (IS-IS) route is the next most preferred route.  IS-IS routes have an AD of 115.</p>

<p>Of the available choices, a Routing Information Protocol (RIP) route is the least preferred route. RIP routes have an AD of 120.</p>

<p>You can configure the AD of routing protocols by issuing the <strong>distance</strong> command in router configuration mode. For example, to change the AD of OSPF from 110 to 80, you should issue the following commands:</p>

<pre>RouterA(config)#router ospf 1
RouterA(config-router)#distance 80</pre>

<p>You can view the AD of the best route to a network by issuing the <strong>show ip route</strong> command.  The AD is the first number inside the brackets in the output.  For example, the following router output shows an OSPF route with an AD of 110:</p>

<pre>Router#show ip route
&lt;output omitted&gt;

Gateway of last resort is 10.19.54.20 to network 10.140.0.0

O E2 172.150.0.0 [110/5] via 10.19.54.6, 0: 01:00, Ethernet2</pre>

<p>The 5 in brackets in the output above indicates the OSPF metric.   OSPF uses cost as a metric and calculates cost based on the bandwidth of an interface:  the higher the bandwidth, the lower the cost.  When two OSPF paths exist to the same destination, the router will choose the OSPF path with the lowest cost.</p>`,
  
  reference: [
    {
      title: "Boson CCNA Curriculum 200-301",
      description: "Module 6: IP Routing, Understanding AD"
    },
    {
      title: "Cisco:   What Is Administrative Distance? ",
      description: ""
    }
  ]
},

{
  id: 403,  // Question ID number
  category: "Security Fundamentals",
  questionType: "Matching",
  question: `<p>To complete this question, click <strong>Launch Simulator</strong> and follow the on-screen instructions.</p>

<p>Match each security threat on the right with its most appropriate mitigation method on the left.</p>`,
  
  matchingPairs: {
    terms: [
      { id: "user-awareness", text: "user awareness or training" },
      { id: "physical-access", text: "physical access control" }
    ],
    definitions: [
      { id: "def1", text: "brute-force attack", correctMatch: "user-awareness" },
      { id: "def2", text: "social engineering", correctMatch: "user-awareness" },
      { id: "def3", text: "burglary", correctMatch: "physical-access" },
      { id: "def4", text: "pharming", correctMatch: "user-awareness" },
      { id: "def5", text: "tailgating", correctMatch: "physical-access" }
    ]
  },
  
  correctAnswer: {
    "user-awareness": ["def1", "def2", "def4"],
    "physical-access":  ["def3", "def5"]
  },
  
  explanation: `<p>Brute-force attacks, pharming, and social engineering can all be mitigated by using user awareness or training.  Burglary and tailgating, on the other hand, are more likely to be mitigated by using physical access controls.</p>

<p>User awareness is a security program element that provides employees with information about protecting confidential data.  User training is a security program element that familiarizes users with corporate security policies in a formal and mandatory fashion.  Physical access control is a security program element that protects infrastructure locations such as network closets. </p>

<p>Educating users about enterprise security is an important step in ensuring the confidentiality and integrity of data. Through education, users without a technological background can learn to identify and thus avoid falling prey to common attacks. For example, users who have been educated on the dangers of phishing emails, pharming, and social engineering attacks will be less likely to click malicious links in emails than those who have not been educated on such tactics.  Phishing is an attempt to compromise user information by disguising a malicious email as a legitimate email.  Pharming is the use of a legitimate service to redirect users to a malicious or compromised site. Social engineering is the simple exploitation of human trust and instinctive behavior.  The goal of both user awareness and user training is to minimize the likelihood of users becoming victims of their own instincts.</p>

<p>User awareness is different from user training in that user training is a more formal and mandatory process.  Making users aware of potential threats might involve little more than sending emails or making announcements that describe the threat. User training, on the other hand, is formally instructing users by using a published company security policy that outlines how to identify a given threat and how to respond to it. An example of user training might be guiding users through a company's password complexity policy. In this case, users would be taught how to create secure passwords in order to mitigate common password attacks, such as a brute-force attack.  A brute-force attack occurs when an attacker uses every possible combination of characters in an attempt to guess a password. </p>

<p>Although not specific to users, physical access control allows administrators to protect sensitive equipment and data from accidental or malicious compromise by users. For example, locking the door to a network closet prevents users, visitors, or malicious actors from accessing, corrupting, or stealing the hardware that keeps the local area network (LAN) running. Physical access controls can be as simple as a padlock or as elaborate as a mantrap, which is a system that is intended to prevent unauthorized people from following an authorized person into a secured location.  A mantrap consists of a set of two locked doors that operate in a manner that prevents both doors from being opened at the same time.  People who enter the mantrap must be identified before they are allowed to exit the mantrap into the secure area.  Security guards can use facial recognition to verify the identity of proximity badge holders. </p>`,
  
  reference: [
    {
      title: "Boson CCNA Curriculum 200-301",
      description: "Module 8: Security Fundamentals, Access Controls"
    },
    {
      title: "Boson CCNA Curriculum 200-301",
      description: "Module 8: Security Fundamentals, Password Attacks"
    },
    {
      title: "CCNA 200-301 Official Cert Guide",
      description: "Volume 2, Chapter 4: Security Architectures, Developing a Security Program to Educate Users"
    }
  ]
},

{
  id: 632,  // Question ID number
  category: "Network Fundamentals",
  questionType: "Single-select",
  question: `<div style="text-align: center; margin-bottom: 20px;">
  <img src="/images/632-router-topology.png" alt="Network topology showing RouterA and RouterB connected via point-to-point link, with 192.168.0.0/25 network shown above RouterB" style="max-width: 600px;" />
</div>

<p>Which of the following subnet addresses is most appropriate for the point-to-point link between RouterA and RouterB?  (Select the best answer. )</p>`,
  options: [
    "192.168.0.128/30",  // Option A (index 0)
    "192.168.0.0/30",  // Option B (index 1)
    "192.168.0.130/30",  // Option C (index 2)
    "192.168.0.128/25",  // Option D (index 3)
    "192.168.0.192/26",  // Option E (index 4)
    "192.168.0.0/25"  // Option F (index 5)
  ],
  correctAnswer: 0,  // Index of correct answer (A.  192.168.0.128/30)
  explanation: `<p>The 192.168.0.128/30 subnet address is most appropriate for the point-to-point link between RouterA and RouterB.  To conserve IP addresses, you should always use a /30 subnet mask for point-to-point links.  A /30 subnet mask, which is equivalent to 255.255.255.252, indicates that 30 bits are used for the network portion of the address and that 2 bits remain for the host portion of the address, which allows for 2, or 2<sup>2</sup> − 2, host addresses. The address 192.168.0.128 is the network address, 192.168.0.129 can be used for one end of the link, 192.168.0.130 can be used for the other end of the link, and 192.168.0.131 is the broadcast address.</p>

<p>You should not use the 192.168.0.0/25 subnet address, because that subnet is already used by the network attached to the other interface of RouterB.  The 192.168.0.0/25 subnet includes addresses from 192.168.0.0 through 192.168.0.127.  A /25 subnet mask indicates that 25 bits are used for the network portion of the address and that 7 bits remain for the host portion of the address, which allows for 126, or 2<sup>7</sup> − 2, usable host addresses. </p>

<p>You should not use the 192.168.0.0/30 subnet address, because the addresses within this subnet are used by the network attached to the other interface of RouterB. The 192.168.0.0/30 subnet includes addresses from 192.168.0.0 through 192.168.0.4. </p>

<p>You should not use the 192.168.0.128/25 subnet address, because that subnet range allows for 126, or 2<sup>7</sup> − 2, host addresses from 192.168.0.129 through 192.168.0.254.  Only two addresses are required for a point-to-point link, so using a /25 subnet mask would waste the other 124 addresses.</p>

<p>You should not use the 192.168.0.130/30 subnet address, because the 192.168.0.130 IP address is not the start of a /30 subnet.  Networks that are subnetted by using /30 masks are separated into groups of four addresses each; therefore, subnet addresses must be divisible by 4. The address 192.168.0.130 is a host address within the 192.168.0.128/30 subnet. </p>

<p>You should not use the 192.168.0.192/26 subnet address, because that subnet range allows for 62, or 2<sup>6</sup> − 2, host addresses from 192.168.0.193 through 192.168.0.254. Only two addresses are required for a point-to-point link, so using a /26 subnet mask would waste the other 60 addresses.</p>`,
  reference: [
    {
      title: "Boson CCNA Curriculum 200-301",
      description: "Module 2:  Network Addressing and Transport, Subnetting"
    },
    {
      title: "CCNA 200-301 Official Cert Guide",
      description: "Volume 1, Chapter 13: Analyzing Subnet Masks, Calculations Based on the IPv4 Address Format"
    },
    {
      title: "Cisco:  IP Addressing and Subnetting for New Users",
      description: ""
    }
  ]
},

{
  id: 477,  // Question ID number
  category: "Automation and Programmability",
  questionType: "Single-select",
  question: `<p>To which of the following planes does a centralized controller connect by using a northbound API?  (Select the best answer. )</p>`,
  options: [
    "the application plane",  // Option A (index 0)
    "the control plane",  // Option B (index 1)
    "the data plane",  // Option C (index 2)
    "the management plane"   // Option D (index 3)
  ],
  correctAnswer: 0,  // Index of correct answer (0 = the application plane)
  explanation: `<p>In a controller-based network, a centralized controller connects to the application plane by using a northbound Application Programming Interface (API).  The application plane is the component of a controller-based network in which applications that are written to allow interaction with the centralized controller reside.   These applications are typically designed to improve network management efficiency through network automation.   A controller communicates with applications in the application plane by using a northbound API such as Representational State Transfer (REST) or Java Open Services Gateway initiative (OSGi).</p>

<p>In a controller-based network, such as a Software-Defined Networking (SDN) network, the control plane is centralized.   The control plane is responsible for network decision making in both a controller-based network and a traditional network.  However, the control plane in a traditional network is typically distributed among many devices.   The Open Shortest Path First (OSPF) routing protocol running on a series of routers on a traditional network is one example of a traditional control plane.  OSPF makes routing decisions for packets that require routing among Layer 3 devices.  In a controller-based network, the decision-making logic is either moved to a central controller or monitored by a central controller.</p>

<p>In a controller-based network, a centralized controller connects to the data plane by using a southbound API, such as NETCONF, OpenFlow, OpFlex, or OnePK.  Layer 2 switches, Layer 3 switches, and end devices typically operate in the data plane.  Network tasks that are typically performed in the data plane include the encapsulation and decapsulation of packets, the adding or removing of trunk headers, the matching of Media Access Control (MAC) addresses to a MAC address table, the matching of Internet Protocol (IP) addresses to paths in a routing table, the encryption of data, Network Address Translation (NAT), and filtering by using either access control lists (ACLs) or port security.</p>

<p>In both a controller-based network and a traditional network, the management plane consists of network management protocols, such as Telnet, Secure Shell (SSH), Simple Network Management Protocol (SNMP), and Syslog.  All of these protocols enable an administrator to connect to and manage a network device. </p>`,
  reference: [
    {
      title: "Boson CCNA Curriculum 200-301",
      description: "Module 9: Automation and Programming, Application Plane"
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
  id: 14,  // Question ID number
  category: "IP Connectivity",
  questionType: "Single-select",
  question: `<p>Which of the following entries from the <strong>show ip route</strong> command indicates a host route?  (Select the best answer. )</p>`,
  options: [
    "S* 0.0.0.0/0 [1/0] via FastEthernet0/0",  // Option A (index 0)
    "O  192.168.1.0/24 [110/2] via 10.1.1.13, 00:00:08, FastEthernet0/0",  // Option B (index 1)
    "L  192.168.1.1/32 is directly connected, FastEthernet0/0",  // Option C (index 2)
    "S  192.168.1.0/24 [5/0] via 10.1.2.3",  // Option D (index 3)
    "C  192.168.1.0/30 is directly connected, FastEthernet0/0",  // Option E (index 4)
    "D  192.168.0.4/30 [90/2195456] via 192.168.0.18, 00:03:31, FastEthernet0/0"  // Option F (index 5)
  ],
  correctAnswer: 2,  // Index of correct answer (C.  L  192.168.1.1/32)
  explanation: `<p>The <strong>L  192.168.1.1/32 is directly connected, FastEthernet0/0</strong> entry from the <strong>show ip route</strong> command indicates a host route.   Local host routes are marked with an <strong>L</strong> in the output of the <strong>show ip route</strong> command or the <strong>show ipv6 route</strong> command.  Internet Protocol version 4 (IPv4) host routes have a /32 mask, and IP version 6 (IPv6) host routes have a /128 mask. </p>

<p>Not all IPv4 routes with a /32 mask are considered host routes.   IPv4 addresses that are manually configured with a /32 mask are considered to be connected addresses and are marked with a <strong>C</strong> in the output of the <strong>show ip route</strong> command.   For example, the <strong>C  192.168.1.0/30 is directly connected, FastEthernet0/0</strong> entry from the <strong>show ip route</strong> command indicates a connected route. </p>

<p>Routes that are marked with an <strong>O</strong> in the output of the <strong>show ip route</strong> command are Open Shortest Path First (OSPF) routes.  Routes that are marked with a <strong>D</strong> in the output of the <strong>show ip route</strong> command are Enhanced Interior Gateway Routing Protocol (EIGRP) routes.  OSPF routes and EIGRP routes are considered network routes. </p>

<p>Routes that are marked with an <strong>S</strong> in the output of the <strong>show ip route</strong> command are static routes.  Normal static routes have an administrative distance (AD) of 1; the AD is the first number inside the brackets.  A static route with a modified AD is called a floating static route and is often used as a backup route in case the primary route goes down.   The <strong>S  192.168.1.0/24 [5/0] via 10.1.2.3</strong> entry from the <strong>show ip route</strong> command indicates a floating static route with an AD of 5.</p>

<p>Routes that are marked with an <strong>*</strong> in the output of the <strong>show ip route</strong> command are default routes.  A static default route can be configured by issuing the <strong>ip route 0.0.0.0 0.0.0.0</strong> {<em>next-hop-IP</em> | <em>interface</em>} command.  The <strong>S* 0.0.0.0/0 [1/0] via FastEthernet0/0</strong> entry from the <strong>show ip route</strong> command indicates a static default route.</p>`,
  reference: [
    {
      title: "Boson CCNA Curriculum 200-301",
      description: "Module 6: IP Routing, Directly Connected Routes"
    },
    {
      title: "Cisco:  Local Host Routes Installed in the Routing Table on Cisco IOS and Cisco IOS-XR",
      description: ""
    }
  ]
},

{
  id: 503,  // Question ID number
  category: "Network Access",
  questionType: "Single-select",
  question: `<p>You are configuring a normal WLAN by using the WLC GUI.  You want to configure the WLAN with the SSID of <strong>MyCompanyLAN</strong>. You click <strong>Create New</strong> on the <strong>WLANs</strong> page. </p>

<p>Which action are you most likely to perform first?   (Select the best answer.  )</p>`,
  options: [
    "Assign a profile name of up to 32 characters in the Profile Name field.",  // Option A (index 0)
    "Assign the SSID of MyCompanyLAN in the WLAN SSID field.",  // Option B (index 1)
    "Select Guest LAN from the Type drop-down list box.",  // Option C (index 2)
    "Assign a unique ID of 1 in the ID field."   // Option D (index 3)
  ],
  correctAnswer:  0,  // Index of correct answer (A - Profile Name field first)
  explanation: `<p>Most likely, you will assign a profile name of up to 32 characters in the <strong>Profile Name</strong> field first if you want to configure a wireless local area network (WLAN) by using the Cisco wireless LAN controller (WLC) graphical user interface (GUI).  The Cisco WLC GUI is a browser-based interface that enables you to configure various wireless network settings.   In this scenario, you want to create a normal WLAN named <strong>MyCompanyLAN</strong>.  To create a new normal WLAN, you should complete four steps on the <strong>WLANs > New</strong> page of the WLC GUI: </p>

<ol>
  <li>Select the type of WLAN you are creating from the <strong>Type</strong> drop-down list box; by default, this value is configured to <strong>WLAN</strong>.</li>
  <li>Enter a 32-character or less profile name in the <strong>Profile Name</strong> field.</li>
  <li>Enter a 32-character or less Service Set Identifier (SSID) in the <strong>SSID</strong> field.</li>
  <li>Choose a WLAN ID from the <strong>ID</strong> drop-down list box.</li>
</ol>

<p>There are three types of WLANs you can create by using the WLC GUI: </p>

<ol>
  <li>A normal WLAN, which is the WLAN to which wireless clients inside your company's walls will connect</li>
  <li>A Guest LAN, which is the WLAN to which guest wireless clients inside your company's walls will connect</li>
  <li>A Remote LAN, which is the WLAN configuration for wired ports on the WLC</li>
</ol>

<p>In this scenario, you are configuring a normal WLAN with an SSID of <strong>MyCompanyLAN</strong>. Therefore, you do not need to select <strong>WLAN</strong> from the <strong>Type</strong> drop-down list box, because <strong>WLAN</strong> is the default value for this drop-down list box.  The <strong>Type</strong> drop-down list box should be configured to <strong>WLAN</strong> in order to create a normal WLAN by using the WLC GUI.</p>

<p>After you configure the type of WLAN, you should configure a profile name for the WLAN in the <strong>Profile Name</strong> field.   The profile name can be up to 32 characters in length and should uniquely identify the WLAN that you are configuring.  The value that you enter in the <strong>Profile Name</strong> field will be used by the WLC to identify the WLAN on other configuration pages.   For simplicity, many administrators choose to use the same value for the <strong>Profile Name</strong> field as they plan to configure in the <strong>SSID</strong> field, although this is not required.</p>

<p>After you configure the <strong>Profile Name</strong> field, you should configure a value of up to 32 characters in the <strong>SSID</strong> field. The SSID is the WLAN network name that will be broadcast to wireless clients.   In general, an SSID is the name for the collection of wireless clients that are all operating with the same Institute of Electrical and Electronics Engineers (IEEE) 802.11 configuration. </p>

<p>Finally, you should configure the WLAN ID on which the WLAN will operate. By default, the <strong>ID</strong> drop-down list box on the <strong>WLANs > New</strong> page will be configured to a value of <strong>1</strong>. You can choose to configure a WLAN ID on any WLAN ID in the range from 1 through 512. Although Cisco controllers support a maximum of 512 WLANs, only 16 can be actively configured. </p>`,
  reference: [
    {
      title: "CCNA 200-301 Official Cert Guide",
      description: "Volume 1, Chapter 29: Building a Wireless LAN, Configuring a WLAN"
    },
    {
      title: "Cisco:   WLANs: Creating and Removing WLANs (GUI)",
      description: ""
    }
  ]
},

{
  id: 26,
  category: "IP Connectivity",
  questionType:  "Single-select",
  question: `You issue the <strong>show running-config | include router</strong> command on RouterA and receive the following output:

<pre>
RouterA#show running-config | include router
router ospf 100
 router-id 5.5.5.5
</pre>

You issue the <strong>show ip interface brief</strong> command on RouterA and receive the following output: 

<pre>
RouterA#show ip interface brief
Interface         IP-Address      OK?  Method Status                Protocol
FastEthernet0/0   198.51.100.1    YES manual up                    up
FastEthernet0/1   198.51.100.5    YES manual up                    up
Loopback0         10.10.10.10     YES manual up                    up
Loopback1         5.5.5.5         YES manual up                    up
</pre>

You issue the following commands on RouterA: 

<pre>
RouterA#configure terminal
RouterA(config)#router ospf 100
RouterA(config-router)#no router-id 5.5.5.5
</pre>

Which of the following will become the OSPF router ID on RouterA if the OSPF process is restarted? `,
  options: [
    "198.51.100.1",
    "198.51.100.5",
    "10.10.10.10",
    "5.5.5.5"
  ],
  correctAnswer: 2,
  explanation:  `<p>The IP address of 10.10.10.10 will become RouterA's Open Shortest Path First (OSPF) router ID when the OSPF process is restarted.  Issuing the <strong>no router-id 5.5.5.5</strong> command removes the manual router ID configuration for OSPF process 100 on RouterA. The IP address of 10.10.10.10 is the highest IP address assigned to a loopback interface on RouterA. If no manual router ID is configured on an OSPF router, the router will use the highest IP address assigned to a loopback interface as the router ID.  If no loopback interfaces have been configured with IP addresses, the router will use the highest IP address assigned to an active physical interface.</p>

<p>The <strong>router-id</strong> <em>value</em> command can be used to manually configure an OSPF router ID in OSPF router configuration mode. An OSPF router will always select a manually configured router ID over any interface IP addresses. Issuing the <strong>no router-id</strong> <em>value</em> command causes the router to calculate the OSPF router ID based on IP addresses assigned to active interfaces on the router.</p>

<p>Neither the IP address of 198.51.100.1 nor the IP address of 198.51.100.5 will become the router ID, because RouterA's loopback interfaces have been configured with IP addresses.  Had RouterA not been configured with loopback interfaces or had RouterA's loopback interfaces not been configured with IP addresses, RouterA would have selected the IP address of 198.51.100.5 as its router ID after you issued the <strong>no router-id 5.5.5.5</strong> command. The IP address of 198.51.100.5 is the highest IP address assigned to an active physical interface on RouterA.</p>

<p>The IP address of 5.5.5.5 will not become RouterA's OSPF router ID. Although RouterA was originally configured with a manual router ID of 5.5.5.5, the Loopback 1 interface's IP address of 5.5.5.5 is lower than the Loopback 0 interface's IP address of 10.10.10.10. If the 10.10.10.10 IP address had not been assigned to the Loopback 0 interface, RouterA would have kept the router ID of 5.5.5.5 after you issued the <strong>no router-id 5.5.5.5</strong> command because the IP address of 5.5.5.5 would have been the highest IP address assigned to a loopback interface.</p>`,
  reference: [
    {
      title: "Boson CCNA Curriculum 200-301",
      description: "Module 6: IP Routing, Understanding OSPF Router IDs"
    },
    {
      title: "Cisco: OSPF Design Guide",
      description: "Official documentation on OSPF design and router ID selection",
      link: "https://www.cisco.com/c/en/us/support/docs/ip/open-shortest-path-first-ospf/7039-1. html"
    },
    {
      title: "Cisco:  What Does the show ip ospf neighbor Command Reveal?",
      description: "Understanding OSPF neighbor relationships and router IDs",
      link: "https://www.cisco.com/c/en/us/support/docs/ip/open-shortest-path-first-ospf/13685-13.html"
    }
  ]
},

{
  id: 425,
  category:  "Security Fundamentals",
  questionType: "Single-select",
  question: `<img src="/images/dai-switchA-topology-425.png" alt="Switch Network Topology" style="max-width: 100%; height:  auto; margin:  20px 0;" />

Refer to the exhibit.  You want to enable DAI on SwitchA, and you want to ensure that traffic from each host is inspected before it is sent to SwitchB. 

Which of the following command sequences should you issue?`,
  options: [
    `SwitchA#configure terminal
SwitchA(config)#interface fa0/1
SwitchA(config-if)#ip arp inspection
SwitchA(config-if)#exit
SwitchA(config)#interface fa0/2
SwitchA(config-if)#ip arp inspection
SwitchA(config-if)#exit
SwitchA(config)#interface fa0/3
SwitchA(config-if)#ip arp inspection
SwitchA(config-if)#exit`,
    `SwitchA#configure terminal
SwitchA(config)#interface fa1/1
SwitchA(config-if)#ip arp inspection vlan 2-4
SwitchA(config-if)#exit`,
    `SwitchA#configure terminal
SwitchA(config)#ip arp inspection vlan 2-4
SwitchA(config)#exit`,
    `SwitchA#configure terminal
SwitchA(config)#interface fa1/1
SwitchA(config-if)#ip arp inspection
SwitchA(config-if)#exit`
  ],
  correctAnswer: 2,
  explanation: `<p>You should use the following command sequence to enable Dynamic ARP Inspection (DAI) on SwitchA:</p>

<pre>
SwitchA#configure terminal
SwitchA(config)#ip arp inspection vlan 2-4
SwitchA(config)#exit
</pre>

<p>DAI helps mitigate Address Resolution Protocol (ARP) poisoning attacks, which are also known as ARP spoofing attacks. In an ARP poisoning attack, an attacker intercepts an ARP request packet and replies with the attacker's own Media Access Control (MAC) address, rather than the address of the intended recipient. Subsequently, the attacker is able to intercept any traffic intended for the original recipient.  DAI functions by inspecting traffic on ingress ports to ensure that incoming traffic does not contain any ARP reply packets from host computers. DAI is supported on the following types of ports: access ports, trunk ports, EtherChannel ports, and private virtual local area network (PVLAN) ports. Any incoming traffic on these ports will be inspected by DAI when DAI is configured.</p>

<p>DAI can be enabled on a single virtual local area network (VLAN) or on multiple VLANs.  To enable DAI, you should use the <strong>ip arp inspection vlan</strong> global configuration command. The syntax of the <strong>ip arp inspection vlan</strong> command is <strong>ip arp inspection vlan</strong> {<em>vlan-ID</em> | <em>vlan-range</em>}. A range of VLANs can be entered by using a comma-separated list or a dash-separated pair of VLAN numbers indicating the range of VLANs to include. For example, each of the following commands enables DAI on VLANs 2 through 4: <strong>ip arp inspection vlan 2,3,4</strong> and <strong>ip arp inspection vlan 2-4</strong>.  Configuring DAI on each VLAN ensures that traffic sent from each host is inspected. </p>

<p>Entering the following commands will not enable DAI on SwitchA: </p>

<pre>
SwitchA#configure terminal
SwitchA(config)#interface fa0/1
SwitchA(config-if)#ip arp inspection
SwitchA(config-if)#exit
SwitchA(config)#interface fa0/2
SwitchA(config-if)#ip arp inspection
SwitchA(config-if)#exit
SwitchA(config)#interface fa0/3
SwitchA(config-if)#ip arp inspection
SwitchA(config-if)#exit
</pre>

<p>DAI is configured globally on a switch for specified VLANs. You cannot configure DAI on specific interfaces. Similarly, the remaining commands will not enable DAI on SwitchA, because the <strong>ip arp inspection vlan</strong> command cannot be issued in interface configuration mode. </p>`,
  reference: [
    {
      title: "Boson CCNA Curriculum 200-301",
      description: "Module 8: Security Fundamentals, DAI"
    },
    {
      title: "CCNA 200-301 Official Cert Guide",
      description: "Volume 2, Chapter 8:  DHCP Snooping and ARP Inspection, Dynamic ARP Inspection Configuration"
    },
    {
      title: "Cisco:  Dynamic ARP Inspection (DAI): DAI Configuration Guidelines and Restrictions",
      description: "Official documentation on configuring and implementing DAI",
      link: "https://www.cisco.com/c/en/us/td/docs/switches/lan/catalyst9300/software/release/16-12/configuration_guide/sec/b_1612_sec_9300_cg/configuring_dynamic_arp_inspection.html"
    }
  ]
},

{
  id: 497,
  category:  "Network Access",
  questionType: "Single-select",
  question: `Which of the following wireless QoS levels prioritizes video traffic on a Cisco WLAN? `,
  options: [
    "Silver",
    "Bronze",
    "Gold",
    "Platinum"
  ],
  correctAnswer: 2,
  explanation: `<p>The Gold wireless Quality of Service (QoS) level prioritizes video traffic on a Cisco wireless local area network (WLAN). Cisco wireless LAN controllers (WLCs) support four different QoS levels:  Platinum, Gold, Silver, and Bronze.  QoS prioritizes certain types of traffic over others and can therefore be used to ensure quality for services that are sensitive to network issues such as delay and congestion.  The Gold level is typically used to ensure that video and mission-critical real-time interactive traffic streams from source to destination without disruption. </p>

<p>The Platinum wireless QoS level prioritizes Voice over Internet Protocol (VoIP) traffic on a Cisco WLAN. VoIP is susceptible to network delay, which can create jitter and severely affect the quality of a call. To ensure that VoIP traffic is of highest quality, the Platinum level is typically applied to VoIP endpoints and to the control tunnels between lightweight access points (APs) and the WLC.</p>

<p>The Silver QoS level is the default setting when you configure a WLAN on a Cisco WLC. The Silver QoS level is also known as the best-effort level of QoS. Traffic that is delivered by using best effort is considered lower priority than mission-critical, video, and voice traffic. This is the level at which most transactional traffic is delivered.</p>

<p>The Bronze QoS level provides the lowest bandwidth and is typically used for guest services on a Cisco WLAN.  Prioritizing guest traffic at a lower level than transactional traffic on a WLAN guarantees that WLAN guests will be prevented from consuming excess bandwidth and thus interfering with normal business operations.</p>`,
  reference: [
    {
      title: "CCNA 200-301 Official Cert Guide",
      description:  "Volume 1, Chapter 29: Building a Wireless LAN, Configuring WLAN QoS"
    },
    {
      title: "Cisco:  Quality of Service: Quality of Service",
      description: "Official documentation on QoS implementation and wireless QoS levels",
      link: "https://www.cisco.com/c/en/us/tech/quality-of-service-qos/index.html"
    }
  ]
},

{
  id: 502,
  category:   "Network Access",
  questionType: "Matching",
  question:  `<p>To complete this question, click <strong>Launch Simulator</strong> and follow the on-screen instructions.</p>

<p>Match each Cisco WLC command on the left with its correct description on the right.</p>`,
  
  // For matching questions, we structure data differently
  matchingPairs: {
    terms: [
      { id: "config_global", text: "show ap config global" },
      { id: "core_dump", text: "show ap config core-dump MyLAP" },
      { id: "crash_file", text: "show ap crash-file" },
      { id: "config_general", text: "show ap config general MyLAP" }
    ],
    definitions: [
      { id: "def1", text: "displays Syslog server settings for every AP joined to the WLC", correctMatch: "config_global" },
      { id: "def2", text: "displays the memory dump for a specific lightweight AP", correctMatch: "core_dump" },
      { id:  "def3", text: "displays a list of dump files generated by lightweight APs", correctMatch: "crash_file" },
      { id: "def4", text: "displays IP addressing and other information about the specified AP", correctMatch: "config_general" }
    ]
  },
  
  correctAnswer: {
    config_global: "def1",
    core_dump:  "def2",
    crash_file: "def3",
    config_general: "def4"
  },
  
  explanation: `<p>The <strong>show ap config general MyLAP</strong> command displays Internet Protocol (IP) addressing and other information about a Cisco access point (AP) named MyLAP. Similar to a Cisco wired router or switch, you can administer a Cisco AP or wireless LAN controller (WLC) by using a command-line interface (CLI). However, the CLI interface does not support the same Cisco IOS command set as a Cisco router or switch. You can configure a Cisco WLC or a Cisco AP either by using the built-in graphical user interface (GUI) in a browser or by using the CLI. </p>

<p>Issuing the <strong>show ap config general</strong> <em>cisco-ap</em> command, where <em>cisco-ap</em> is the host name of the Cisco AP that is configured with the information you want to display, produces general AP configuration output.  This output includes information such as the AP's IP address, the default gateway IP address, and the Domain Name System (DNS) server address.  In addition, the output includes the subnet mask that is configured on the AP.  The following is sample output from a Cisco AP: </p>

<pre>
ap_console >show ap config general MyLAP
Cisco AP Identifier.. ........................ ....  77
Cisco AP Name... ................................. MyLAP
Country code..................................... US
&lt;output omitted&gt;
Switch Port Number .. ............................ 1
MAC Address...................................... 12: 34:56:ab:cd:ef
IP Address Configuration.........................  DHCP
IP Address...... ................................. 192.168.10.15
IP Netmask....................................... 255.255.255.0
Gateway IP Addr. ................................. 192.168.10.1
&lt;output omitted&gt;
DNS server IP... ................................. 192.168.10.2
</pre>

<p>The <strong>show ap config global</strong> command displays global Syslog server settings for every AP that is joined to the Cisco WLC. The following is sample output from the <strong>show ap config global</strong> command:</p>

<pre>
(Cisco Controller) >show ap config global
AP global system logging host........ .... 192.168.10.111
AP global system logging level...........  informational
AP Telnet Settings. .................. ....  Globally Configured (Disabled)
AP SSH Settings..........................  Globally Configured (Disabled)
Diminished TX power Settings............. Globally Configured (Disabled)
AP Broken Antenna Failure Detection - Status. .... Disabled
</pre>

<p>The <strong>show ap core-dump MyLAP</strong> command displays the memory dump for the AP named MyLAP. The <strong>show ap core-dump</strong> <em>cisco-ap</em> command displays the memory core dump for the lightweight AP that is specified as the <em>cisco-ap</em> parameter. Core memory dumps can be large and are typically used for troubleshooting purposes when hardware failures occur.</p>

<p>The <strong>show ap crash-file</strong> command displays a list of crash dump files and radio core dump files that have been generated by lightweight APs. This command is useful if you need to review the output of a crash file or core dump file for a specific AP.</p>`,
  
  reference: [
    {
      title: "Cisco:  Cisco Wireless Controller Command Reference:  show ap config general",
      description: "Official command reference for show ap config general",
      link: "https://www.cisco.com/c/en/us/td/docs/wireless/controller/8-5/cmd-ref/b_cr85/show_ap_commands. html"
    },
    {
      title: "Cisco:  Cisco Wireless Controller Command Reference:  show ap config global",
      description: "Official command reference for show ap config global",
      link: "https://www.cisco.com/c/en/us/td/docs/wireless/controller/8-5/cmd-ref/b_cr85/show_ap_commands.html"
    },
    {
      title: "Cisco: Cisco Wireless Controller Command Reference: show ap core-dump",
      description: "Official command reference for show ap core-dump",
      link: "https://www.cisco.com/c/en/us/td/docs/wireless/controller/8-5/cmd-ref/b_cr85/show_ap_commands.html"
    },
    {
      title: "Cisco: Cisco Wireless Controller Command Reference: show ap crash-file",
      description: "Official command reference for show ap crash-file",
      link: "https://www.cisco.com/c/en/us/td/docs/wireless/controller/8-5/cmd-ref/b_cr85/show_ap_commands. html"
    }
  ]
},

{
  id: 482,
  category: "Network Access",
  questionType: "Single-select",
  question: `Which of the following Cisco lightweight AP modes provides BSSs?`,
  options: [
    "local",
    "bridge",
    "sniffer",
    "FlexConnect"
  ],
  correctAnswer: 0,
  explanation: `<p>Of the available choices, only a Cisco lightweight access point (AP) operating in local mode provides basic service sets (BSSs). A BSS is a closed group of wireless devices that are dependent on a fixed device.  Before a wireless device can join the group, it must advertise its capabilities and obtain permission from the fixed device.  A lightweight AP provides an interface for wireless clients to connect to the wireless local area network (WLAN) but requires a wireless LAN controller (WLC) for management functions. This is in contrast to an autonomous AP, which provides BSSs without the need for a WLC.</p>

<p>A Cisco lightweight AP operating in local mode, which is the default, is capable of providing multiple BSSs on a single channel. In this mode, the AP can connect to a WLC and can provide client connectivity.  In addition, an AP operating in local mode scans all wireless channels as a means of monitoring wireless quality and security. The connection between a lightweight AP and a WLC is created by using two tunnels established by the Control and Provisioning of Wireless Access Points (CAPWAP) tunneling protocol. Information sent between lightweight APs and the WLC is encapsulated in Internet Protocol (IP) packets. This process enables a lightweight AP and WLC to manage connectivity to the same WLAN yet be separated by both physical and logical means.</p>

<p>A Cisco lightweight AP operating in FlexConnect mode does not provide BSSs. Instead, FlexConnect mode enables a failsafe for the lightweight AP if its connection to the WLC by way of CAPWAP tunnels goes down. When configured, FlexConnect mode enables a lightweight AP to switch traffic between a given Service Set Identifier (SSID) and a given virtual local area network (VLAN).</p>

<p>A Cisco lightweight AP operating in bridge mode does not provide BSSs.  Bridge mode enables a lightweight AP to act as a dedicated connection between two networks.  Lightweight APs operating in bridge mode can connect to other networks in either a point-to-point or a point-to-multipoint fashion. When multiple APs are configured in bridge mode, the collection of lightweight APs can be used to form a mesh network.</p>

<p>A Cisco lightweight AP operating in sniffer mode does not provide BSSs. Sniffer mode allows a lightweight AP to capture wireless traffic, similar to the way a wired network sniffer behaves. When traffic is captured, a lightweight AP that is operating in sniffer mode will send the traffic to an analyzer, which is typically software that is installed on a PC or other host. </p>`,
  reference: [
    {
      title: "CCNA 200-301 Official Cert Guide",
      description: "Volume 1, Chapter 27: Analyzing Cisco Wireless Architectures, Cisco AP Modes"
    }
  ]
},

{
  id: 602,
  category: "Network Fundamentals",
  questionType: "Single-select",
  question: `Which of the following devices cannot be connected to leaf nodes in the Cisco ACI architecture?`,
  options: [
    "EPGs",
    "APICs",
    "spine nodes",
    "application servers",
    "leaf nodes"
  ],
  correctAnswer: 4,
  explanation: `<p>In the Cisco Application Centric Infrastructure (ACI), leaf nodes cannot connect to each other.  Cisco ACI is a data center technology that uses switches, categorized as spine and leaf nodes, to dynamically implement network application policies in response to application-level requirements.  Network application policies are defined on a Cisco Application Policy Infrastructure Controller (APIC) and are implemented by the spine and leaf nodes.</p>

<p>The spine and leaf nodes create a scalable network fabric that is optimized for east-west data transfer, which in a data center is typically traffic between an application server and its supporting data services, such as database or file servers. Each spine node requires a connection to each leaf node; however, spine nodes do not interconnect nor do leaf nodes interconnect.  Despite its lack of fully meshed connections between spine nodes or between leaf nodes, this physical topology enables nonlocal traffic to pass from any ingress leaf interface to any egress leaf interface through a single, dynamically selected spine node.  By contrast, local traffic is passed directly from an ingress interface on a leaf node to the appropriate egress interface on the same leaf node. </p>

<p>Because a spine node has a connection to every leaf node, the scalability of the fabric is limited by the number of ports on the spine node, not by the number of ports on the leaf node. For example, if additional access ports are needed, a new leaf node can be added to the infrastructure as long as there is a sufficient number of ports remaining on the existing spine nodes to support the new leaf node.  In addition, redundant connections between a spine and leaf pair are unnecessary because the nature of the topology ensures that each leaf has multiple connections to the network fabric.  Therefore, each spine node requires only a single connection to each leaf node.</p>

<p>Redundancy is also provided by the presence of multiple APICs, which are typically deployed as a cluster of three controllers.  APICs are not directly involved in forwarding traffic and are therefore not required to connect to every spine or leaf node. Instead, the APIC cluster is connected to one or more leaf nodes in much the same manner that other endpoint groups (EPGs), such as application servers, are connected.  Because APICs are not directly involved in forwarding traffic, the failure of an APIC does not affect the ability of the fabric to forward traffic.</p>`,
  reference: [
    {
      title: "Boson CCNA Curriculum 200-301",
      description: "Module 1: Network Fundamentals, Spine-Leaf Topology"
    },
    {
      title: "CCNA 200-301 Official Cert Guide",
      description: "Volume 2, Chapter 16: Introduction to Controller-Based Networking, ACI Physical Design:  Spine and Leaf"
    },
    {
      title: "Cisco:  Cisco Application Centric Infrastructure:  Cisco Application Centric Infrastructure Fabric Overview",
      description: "Official documentation on ACI fabric architecture and design",
      link: "https://www.cisco.com/c/en/us/solutions/data-center-virtualization/application-centric-infrastructure/index.html"
    }
  ]
},

{
  id: 605,
  category: "Network Fundamentals",
  questionType: "Single-select",
  question: `Which of the following examples best describes the SaaS service model?`,
  options: [
    "A company licenses an office suite, including email service, that is delivered to the end user through a web browser.",
    "A company hires a service provider to deliver cloud-based processing and storage that will house multiple virtual hosts configured in a variety of ways.",
    "A company obtains a subscription to use a service provider's infrastructure, programming tools, and programming languages to develop and serve cloud-based applications.",
    "A company moves all company-wide policy documents to an Internet-based virtual file system hosted by a service provider."
  ],
  correctAnswer: 0,
  explanation: `<p>A company that licenses an office suite, including email service, that is delivered to the end user through a web browser is an example of the Software as a Service (SaaS) service model.  The National Institute of Standards and Technology (NIST) defines three service models in its definition of cloud computing: SaaS, Infrastructure as a Service (IaaS), and Platform as a Service (PaaS).</p>

<p>The SaaS service model enables its consumer to access applications running in the cloud infrastructure but does not enable the consumer to manage the cloud infrastructure or the configuration of the provided applications. Of the three service models, SaaS exposes the least amount of the consumer's network to the cloud and is the least likely to require changes to the consumer's network design.  A company that licenses a service provider's office suite and email service that is delivered to end users through a web browser is using SaaS.  SaaS providers use an Internet-enabled licensing function, a streaming service, or a web application to provide end users with software that they might otherwise install and activate locally.  Web-based email clients, such as Gmail and Outlook. com, are examples of SaaS.</p>

<p>The PaaS service model provides its consumer with slightly more freedom than the SaaS model by enabling the consumer to install and possibly configure provider-supported applications in the cloud infrastructure. A company that uses a service provider's infrastructure, programming tools, and programming languages to develop and serve cloud-based applications is using PaaS. PaaS enables a consumer to use the service provider's development tools or Application Programming Interface (API) to develop and deploy specific cloud-based applications or services. Another example of PaaS might be using a third party's MySQL database and Apache services to build a cloud-based customer relationship management (CRM) platform.</p>

<p>The IaaS service model provides the greatest degree of freedom by enabling its consumer to provision processing, memory, storage, and network resources within the cloud infrastructure. The IaaS service model also enables its consumer to install applications, including operating systems (OSs) and custom applications.  However, with IaaS, the cloud infrastructure remains in control of the service provider.  A company that hires a service provider to deliver cloud-based processing and storage that will house multiple physical or virtual hosts configured in a variety of ways is using IaaS. For example, a company that wanted to establish a web server farm by configuring multiple Linux Apache MySQL PHP (LAMP) servers could save hardware costs by virtualizing the farm and using a provider's cloud service to deliver the physical infrastructure and bandwidth for the virtual farm.  Control over the OS, software, and server configuration would remain the responsibility of the organization, whereas the physical infrastructure and bandwidth would be the responsibility of the service provider.  Using a third party's infrastructure to host corporate Domain Name System (DNS) and Dynamic Host Configuration Protocol (DHCP) servers is another example of IaaS.</p>

<p>A company that moves all company-wide policy documents to an Internet-based virtual file system hosted by a third party is using cloud storage. Cloud storage is a term used to describe the use of a service provider's virtual file system as a document or file repository. Cloud storage enables an organization to conserve storage space on a local network.  However, cloud storage is also a security risk in that the organization might not have ultimate control over who can access the files. </p>`,
  reference: [
    {
      title: "Boson CCNA Curriculum 200-301",
      description: "Module 1: Network Fundamentals, SaaS"
    },
    {
      title: "CCNA 200-301 Official Cert Guide",
      description: "Volume 2, Chapter 15: Cloud Architecture, Cloud and the 'As a Service' Model"
    },
    {
      title: "NIST: Special Publication 800-145: The NIST Definition of Cloud Computing (PDF)",
      description: "Official NIST definition and explanation of cloud computing service models",
      link: "https://nvlpubs.nist.gov/nistpubs/Legacy/SP/nistspecialpublication800-145.pdf"
    }
  ]
},
];