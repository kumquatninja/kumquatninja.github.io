---
title: "Call of Duty®: Black Ops 7"
year: "2025"
sort: 1
company: "Treyarch"
role: "Game Designer (Multiplayer)"
genre: "Live-Service First-Person Shooter"
mediaType: "video"
mediaSrc: "/assets/dev/bo7/bo7-trailer-clip-1.mp4"
features:
  - Game Modes (incl. <strong>"Prop Hunt"</strong>), Player Spawning Algorithm
  - Gameplay Scripting & Programming
  - Interactive Environments & Systems
  - Design and technical owner of multiple modes and cross-studio systems
logoSrc: "/assets/dev/bo7/Black-Ops-7-logo.png"
---

I shipped *Black Ops 7* only one year after the previous entry, *Black Ops 6* (2024), while still developing **post-launch multiplayer game modes**, **level mechanics**, and **gameplay systems** for *Black Ops 6*. This was an exercise in **speed and precision**. If BO6 was about laying foundations, learning, and experimenting, BO7 was about executing at full throttle with no room for error.

# Game Modes
<img src="https://imgs.callofduty.com/content/dam/atvi/callofduty/cod-touchui/blog/body/bo7/s01-announcement/BO7-SEASON-01-ANNOUNCEMENT-023.webp" width=33%>
<img src="https://imgs.callofduty.com/content/dam/atvi/callofduty/cod-touchui/blog/body/bo7/s01-announcement/BO7-SEASON-01-ANNOUNCEMENT-027.webp
" width=33%>
<img src="https://imgs.callofduty.com/content/dam/atvi/callofduty/cod-touchui/blog/body/bo7/s02-announcement/B07-SEASON-02-ANNOUNCEMENT-013.webp" width=33%>

- **Prop Hunt** (S1) -- *Game Design Owner*
- **Holiday Havoc** (S1) -- *Game Design Owner*
- **The Ghouls** (S1.5) -- *Design*
- **S.P.E.C.I.A.L. Mayhem** (S1.5) -- *Design*
- **Safeguard** (S2) -- *Design*
- **Infected** (S2.5) -- *Design*
- **Gauntlet** (S2.5) -- *Design*
- ...and more to be announced!

# Game Mode and Player Spawning Setups
For each of the following maps, I set up all **12+ game modes**, positioned **hundreds of spawn points**, and **dialed in player spawning systems**.
## **Exposure** (Launch)

<div class="container">
  <img src="https://dfpiiufxcciujugzjvgx.supabase.co/storage/v1/object/public/uploaded_files/posts/EXPOSURE%20HP-1763077897006.webp" alt="drawing" width=33%/>
  <img src="https://dfpiiufxcciujugzjvgx.supabase.co/storage/v1/object/public/uploaded_files/posts/EXPOSURE%20S&D-1763093202776.webp" alt="drawing" width=33%/>
  <img src="https://dfpiiufxcciujugzjvgx.supabase.co/storage/v1/object/public/uploaded_files/posts/EXPOSURE%20OVERLOAD-1763070220202.webp" alt="Overload setup on Exposure" width=33%/>
</div>

## **Imprint** (Launch)
<img src="https://dfpiiufxcciujugzjvgx.supabase.co/storage/v1/object/public/uploaded_files/posts/IMPRINT%20HP-1763077897006.webp" alt="drawing" width=33%/>

## **Odysseus** (S1)

## **Torment** (S2)
<!-- <img src="https://dfpiiufxcciujugzjvgx.supabase.co/storage/v1/object/public/uploaded_files/posts/IMPRINT%20HP-1763077897006.webp" alt="drawing" width=33%/> -->

# Interactive Environments
- Programming for **moving bullet train** map hazard on *Express* (another train!)
  - Designed and implemented algorithm for interpolating 3D position and rotation of each train car along authored path
  - Worked closely with audio designers to script realistic audio for the entire train sequence
- Programming for **moving inclinator** on *Imprint*
  - Created a method for attaching objectives, such as Hardpoints or Search & Destroy bombsites, to moving platforms for the Inclinator feature on this map.
- Owner of internal system for drag-and-drop dynamic level elements that can be chained

# Player Spawning
- Part of core cross-studio gameplay domain responsible for improving, maintaining, and implementing our player spawning systems.
- Worked with senior game designer to achieve signifact improvements to player spawning.