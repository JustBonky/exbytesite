"use strict";var header=document.getElementById("site-header"),Scrollbar=window.Scrollbar;Scrollbar.initAll(),document.querySelector(".scroll-wrapper").addEventListener("wheel",function(e){0<e.deltaY?(gsap.to(header,.2,{height:70,color:"#000"}),gsap.to(".header-bg",.15,{opacity:1,y:"0%",ease:Sine.easeOut})):(gsap.to(header,.3,{height:100,color:"#fff"}),gsap.to(".header-bg",{duration:.3,opacity:0,y:"-100%"}))});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUuanMiXSwibmFtZXMiOlsiaGVhZGVyIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsIlNjcm9sbGJhciIsImluaXRBbGwiLCJkZWx0YVkiLCJoZWlnaHQiLCJhZGRFdmVudExpc3RlbmVyIiwiZSIsImNvbG9yIiwiZ3NhcCIsInRvIiwib3BhY2l0eSIsImVhc2UiLCJTaW5lIiwiZWFzZU91dCIsInkiLCJkdXJhdGlvbiJdLCJtYXBwaW5ncyI6ImFBQUEsSUFBTUEsT0FBU0MsU0FBU0MsZUFBZSxlQVN2Q0MsVUFBVUMsT0FBVkQsVUFHSUEsVUFBTUUsVUFFRUMsU0FBQUEsY0FEaUIsbUJBQUFDLGlCQUFBLFFBQUEsU0FBQUMsR0FFVixFQUFQQyxFQUFBQSxRQUZKQyxLQUFBQyxHQUFBWCxPQUFBLEdBQUEsQ0FJUU0sT0FBQSxHQUNKTSxNQUR3QixTQUd4QkMsS0FBTUMsR0FBSSxhQUFDQyxJQUFBQSxDQUhmSCxRQUFBLEVBS0dJLEVBQUEsS0FDS2hCLEtBQVJjLEtBQUFDLFlBQUFMLEtBQUFDLEdBQUFYLE9BQUEsR0FBQSxDQUlRTSxPQUFBLElBQ0pXLE1BRGtCLFNBR2pCUCxLQUFFQyxHQUFBLGFBQUEsQ0FIUE0sU0FBQSxHQUtITCxRQUFBLEVBckJMSSxFQUFBIiwiZmlsZSI6ImhvbWUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2l0ZS1oZWFkZXInKTtcblxuLy8gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNjcm9sbC1jb250ZW50JykuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgZnVuY3Rpb24gKGV2ZW50KSB7XG5cbi8vICAgICBjb25zb2xlLmxvZyhldmVudClcbi8vIH0pO1xuXG52YXIgU2Nyb2xsYmFyID0gd2luZG93LlNjcm9sbGJhcjtcblxuU2Nyb2xsYmFyLmluaXRBbGwoKTtcblxuZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNjcm9sbC13cmFwcGVyJykuYWRkRXZlbnRMaXN0ZW5lcignd2hlZWwnLCBlID0+IHtcbiAgICBpZiAoZS5kZWx0YVkgPiAwKSB7XG4gICAgICAgIGdzYXAudG8oaGVhZGVyLCAwLjIsIHtcbiAgICAgICAgICAgIGhlaWdodDogNzAsXG4gICAgICAgICAgICBjb2xvcjogJyMwMDAnXG4gICAgICAgIH0pXG4gICAgICAgIGdzYXAudG8oJy5oZWFkZXItYmcnLCAwLjE1LCB7XG4gICAgICAgICAgICBvcGFjaXR5OiAxLFxuICAgICAgICAgICAgeTogJzAlJyxcbiAgICAgICAgICAgIGVhc2U6IFNpbmUuZWFzZU91dFxuICAgICAgICB9KVxuICAgIH0gZWxzZSB7XG4gICAgICAgIGdzYXAudG8oaGVhZGVyLCAwLjMsIHtcbiAgICAgICAgICAgIGhlaWdodDogMTAwLFxuICAgICAgICAgICAgY29sb3I6ICcjZmZmJ1xuICAgICAgICB9KVxuICAgICAgICBnc2FwLnRvKCcuaGVhZGVyLWJnJywge1xuICAgICAgICAgICAgZHVyYXRpb246IDAuMyxcbiAgICAgICAgICAgIG9wYWNpdHk6IDAsXG4gICAgICAgICAgICB5OiAnLTEwMCUnXG4gICAgICAgIH0pXG4gICAgfVxufSkiXX0=