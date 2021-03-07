(()=>{"use strict";const e=(()=>{let e={};const t=e=>Math.round(9*e/5+32);return{getData:async n=>{try{const o=await fetch("https://api.openweathermap.org/data/2.5/weather?APPID=3374f07f34f654b5b0cdc1faca7f5db0&units=metric&q="+n,{mode:"cors"}),r=await o.json();200===r.cod&&(e.city=r.name,e.country=r.sys.country,e.tempC=Math.round(r.main.temp),e.tempMaxC=Math.round(r.main.temp_max),e.tempMinC=Math.round(r.main.temp_min),e.tempF=t(r.main.temp),e.tempMaxF=t(r.main.temp_max),e.tempMinF=t(r.main.temp_min),e.description=r.weather[0].main,e.icon=r.weather[0].icon),e.cod=r.cod}catch(e){console.log(e)}return e}}})();(()=>{const t=document.querySelector("form"),n=document.getElementById("city-name"),o=t.querySelector(".error-messages"),r=document.querySelector(".weather"),c=r.querySelector(".location"),a=r.querySelector(".main-info"),i=a.querySelector(".icon"),m=i.querySelector("img"),s=i.querySelector(".description"),l=a.querySelector(".temp"),u=l.querySelector(".value"),d=l.querySelector(".units").querySelector(".celsius"),y=l.querySelector(".units").querySelector(".fahrenheit"),p=r.querySelector(".min-max"),q=p.querySelector(".min"),h=p.querySelector(".max");let S={},x="C";t.addEventListener("submit",(e=>{e.preventDefault(),f(n.value)})),d.addEventListener("click",(e=>{"C"!=x&&(x="C",C())})),y.addEventListener("click",(e=>{"F"!=x&&(x="F",C())}));const C=()=>{"C"===x&&(d.classList.add("selected"),y.classList.remove("selected")),"F"===x&&(y.classList.add("selected"),d.classList.remove("selected")),u.textContent=S["temp"+x],q.textContent=S["tempMin"+x]+"°",h.textContent=S["tempMax"+x]+"°"},f=async(t="Barcelona")=>{try{S=await e.getData(t),"404"===S.cod?o.textContent="Location not found":o.textContent="",c.textContent=S.city+", "+S.country,m.src="http://openweathermap.org/img/wn/"+S.icon+"@2x.png",s.textContent=S.description,C()}catch(e){console.log(e)}};return{load:f}})().load()})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWF0aGVyYXBwLy4vc3JjL3dlYXRoZXJTZXJ2aWNlLmpzIiwid2VicGFjazovL3dlYXRoZXJhcHAvLi9zcmMvaW5kZXguanMiXSwibmFtZXMiOlsid2VhdGhlciIsImNlbHNpdXNUb0ZhaHJlbmhlaXQiLCJjZWxzaXVzIiwiTWF0aCIsInJvdW5kIiwiZ2V0RGF0YSIsImFzeW5jIiwiY2l0eSIsInJlc3BvbnNlIiwiZmV0Y2giLCJtb2RlIiwiZGF0YSIsImpzb24iLCJjb2QiLCJuYW1lIiwiY291bnRyeSIsInN5cyIsInRlbXBDIiwibWFpbiIsInRlbXAiLCJ0ZW1wTWF4QyIsInRlbXBfbWF4IiwidGVtcE1pbkMiLCJ0ZW1wX21pbiIsInRlbXBGIiwidGVtcE1heEYiLCJ0ZW1wTWluRiIsImRlc2NyaXB0aW9uIiwiaWNvbiIsImVycm9yIiwiY29uc29sZSIsImxvZyIsImZvcm0iLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJjaXR5TmFtZSIsImdldEVsZW1lbnRCeUlkIiwiZXJyb3JNZXNzYWdlcyIsImxvY2F0aW9uIiwibWFpbkluZm8iLCJpbWFnZSIsInRlbXBWYWx1ZSIsImZhaHJlbmhlaXQiLCJtaW5NYXgiLCJtaW5WYWx1ZSIsIm1heFZhbHVlIiwid2VhdGhlckRhdGEiLCJ1bml0cyIsImFkZEV2ZW50TGlzdGVuZXIiLCJlIiwicHJldmVudERlZmF1bHQiLCJsb2FkIiwidmFsdWUiLCJyZW5kZXJUZW1wIiwiY2xhc3NMaXN0IiwiYWRkIiwicmVtb3ZlIiwidGV4dENvbnRlbnQiLCJzcmMiXSwibWFwcGluZ3MiOiJtQkFBQSxNQW9DQSxFQXBDdUIsTUFFbkIsSUFBSUEsRUFBVSxHQUVkLE1BeUJNQyxFQUF1QkMsR0FDbEJDLEtBQUtDLE1BQWlCLEVBQVZGLEVBQWMsRUFBSyxJQUcxQyxNQUFPLENBQUVHLFFBN0JPQyxNQUFPQyxJQUNuQixJQUNJLE1BQU1DLFFBQWlCQyxNQUxuQix5R0FLK0JGLEVBQU0sQ0FBRUcsS0FBTSxTQUMzQ0MsUUFBYUgsRUFBU0ksT0FFWCxNQUFiRCxFQUFLRSxNQUNMYixFQUFRTyxLQUFPSSxFQUFLRyxLQUNwQmQsRUFBUWUsUUFBVUosRUFBS0ssSUFBSUQsUUFDM0JmLEVBQVFpQixNQUFRZCxLQUFLQyxNQUFNTyxFQUFLTyxLQUFLQyxNQUNyQ25CLEVBQVFvQixTQUFXakIsS0FBS0MsTUFBTU8sRUFBS08sS0FBS0csVUFDeENyQixFQUFRc0IsU0FBV25CLEtBQUtDLE1BQU1PLEVBQUtPLEtBQUtLLFVBQ3hDdkIsRUFBUXdCLE1BQVF2QixFQUFvQlUsRUFBS08sS0FBS0MsTUFDOUNuQixFQUFReUIsU0FBV3hCLEVBQW9CVSxFQUFLTyxLQUFLRyxVQUNqRHJCLEVBQVEwQixTQUFXekIsRUFBb0JVLEVBQUtPLEtBQUtLLFVBQ2pEdkIsRUFBUTJCLFlBQWNoQixFQUFLWCxRQUFRLEdBQUdrQixLQUN0Q2xCLEVBQVE0QixLQUFPakIsRUFBS1gsUUFBUSxHQUFHNEIsTUFHbkM1QixFQUFRYSxJQUFNRixFQUFLRSxJQUNyQixNQUFPZ0IsR0FDTEMsUUFBUUMsSUFBSUYsR0FFaEIsT0FBTzdCLEtBMUJRLEdDRVgsTUFDUixNQUFNZ0MsRUFBT0MsU0FBU0MsY0FBYyxRQUM5QkMsRUFBV0YsU0FBU0csZUFBZSxhQUNuQ0MsRUFBZ0JMLEVBQUtFLGNBQWMsbUJBQ25DbEMsRUFBVWlDLFNBQVNDLGNBQWMsWUFDakNJLEVBQVd0QyxFQUFRa0MsY0FBYyxhQUNqQ0ssRUFBV3ZDLEVBQVFrQyxjQUFjLGNBQ2pDTixFQUFPVyxFQUFTTCxjQUFjLFNBQzlCTSxFQUFRWixFQUFLTSxjQUFjLE9BQzNCUCxFQUFjQyxFQUFLTSxjQUFjLGdCQUNqQ2YsRUFBT29CLEVBQVNMLGNBQWMsU0FDOUJPLEVBQVl0QixFQUFLZSxjQUFjLFVBQy9CaEMsRUFBVWlCLEVBQUtlLGNBQWMsVUFBVUEsY0FBYyxZQUNyRFEsRUFBYXZCLEVBQUtlLGNBQWMsVUFBVUEsY0FBYyxlQUN4RFMsRUFBUzNDLEVBQVFrQyxjQUFjLFlBQy9CVSxFQUFXRCxFQUFPVCxjQUFjLFFBQ2hDVyxFQUFXRixFQUFPVCxjQUFjLFFBQ3RDLElBQUlZLEVBQWMsR0FDZEMsRUFBUSxJQUVaZixFQUFLZ0IsaUJBQWlCLFVBQVdDLElBQzdCQSxFQUFFQyxpQkFDRkMsRUFBS2hCLEVBQVNpQixVQUdsQmxELEVBQVE4QyxpQkFBaUIsU0FBVUMsSUFDbkIsS0FBVEYsSUFDQ0EsRUFBUSxJQUNSTSxRQUlSWCxFQUFXTSxpQkFBaUIsU0FBVUMsSUFDdEIsS0FBVEYsSUFDQ0EsRUFBUSxJQUNSTSxRQUlSLE1BT01BLEVBQWEsS0FDRixNQUFWTixJQUNDN0MsRUFBUW9ELFVBQVVDLElBQUksWUFDdEJiLEVBQVdZLFVBQVVFLE9BQU8sYUFFbkIsTUFBVlQsSUFDQ0wsRUFBV1ksVUFBVUMsSUFBSSxZQUN6QnJELEVBQVFvRCxVQUFVRSxPQUFPLGFBRTdCZixFQUFVZ0IsWUFBY1gsRUFBWSxPQUFTQyxHQUM3Q0gsRUFBU2EsWUFBY1gsRUFBWSxVQUFZQyxHQUFTLElBQ3hERixFQUFTWSxZQUFjWCxFQUFZLFVBQVlDLEdBQVMsS0FHdERJLEVBQU83QyxNQUFPQyxFQUFPLGVBQ3ZCLElBQ0l1QyxRQUFvQixVQUF1QnZDLEdBQ3BCLFFBQXBCdUMsRUFBWWpDLElBQ1h3QixFQUFjb0IsWUFBYyxxQkFFNUJwQixFQUFjb0IsWUFBYyxHQTFCcENuQixFQUFTbUIsWUFBY1gsRUFBWXZDLEtBQU8sS0FBT3VDLEVBQVkvQixRQUM3RHlCLEVBQU1rQixJQUFNLG9DQUFzQ1osRUFBWWxCLEtBQU8sVUFDckVELEVBQVk4QixZQUFjWCxFQUFZbkIsWUFDdEMwQixJQTBCRSxNQUFNeEIsR0FDSkMsUUFBUUMsSUFBSUYsS0FJcEIsTUFBTyxDQUFFc0IsU0ExRUQsR0E2RVJBLFEiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IFdlYXRoZXJTZXJ2aWNlID0gKCgpID0+IHtcbiAgICBjb25zdCB1cmwgPSAnaHR0cHM6Ly9hcGkub3BlbndlYXRoZXJtYXAub3JnL2RhdGEvMi41L3dlYXRoZXI/QVBQSUQ9MzM3NGYwN2YzNGY2NTRiNWIwY2RjMWZhY2E3ZjVkYjAmdW5pdHM9bWV0cmljJnE9JztcbiAgICBsZXQgd2VhdGhlciA9IHt9O1xuXG4gICAgY29uc3QgZ2V0RGF0YSA9IGFzeW5jIChjaXR5KSA9PiB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKHVybCArIGNpdHksIHsgbW9kZTogJ2NvcnMnIH0pO1xuICAgICAgICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcblxuICAgICAgICAgICAgaWYgKGRhdGEuY29kID09PSAyMDApIHtcbiAgICAgICAgICAgICAgICB3ZWF0aGVyLmNpdHkgPSBkYXRhLm5hbWU7XG4gICAgICAgICAgICAgICAgd2VhdGhlci5jb3VudHJ5ID0gZGF0YS5zeXMuY291bnRyeTtcbiAgICAgICAgICAgICAgICB3ZWF0aGVyLnRlbXBDID0gTWF0aC5yb3VuZChkYXRhLm1haW4udGVtcCk7XG4gICAgICAgICAgICAgICAgd2VhdGhlci50ZW1wTWF4QyA9IE1hdGgucm91bmQoZGF0YS5tYWluLnRlbXBfbWF4KTtcbiAgICAgICAgICAgICAgICB3ZWF0aGVyLnRlbXBNaW5DID0gTWF0aC5yb3VuZChkYXRhLm1haW4udGVtcF9taW4pO1xuICAgICAgICAgICAgICAgIHdlYXRoZXIudGVtcEYgPSBjZWxzaXVzVG9GYWhyZW5oZWl0KGRhdGEubWFpbi50ZW1wKTtcbiAgICAgICAgICAgICAgICB3ZWF0aGVyLnRlbXBNYXhGID0gY2Vsc2l1c1RvRmFocmVuaGVpdChkYXRhLm1haW4udGVtcF9tYXgpO1xuICAgICAgICAgICAgICAgIHdlYXRoZXIudGVtcE1pbkYgPSBjZWxzaXVzVG9GYWhyZW5oZWl0KGRhdGEubWFpbi50ZW1wX21pbik7XG4gICAgICAgICAgICAgICAgd2VhdGhlci5kZXNjcmlwdGlvbiA9IGRhdGEud2VhdGhlclswXS5tYWluO1xuICAgICAgICAgICAgICAgIHdlYXRoZXIuaWNvbiA9IGRhdGEud2VhdGhlclswXS5pY29uO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB3ZWF0aGVyLmNvZCA9IGRhdGEuY29kO1xuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB3ZWF0aGVyO1xuICAgIH07XG5cbiAgICBjb25zdCBjZWxzaXVzVG9GYWhyZW5oZWl0ID0gKGNlbHNpdXMpID0+IHtcbiAgICAgICAgcmV0dXJuIE1hdGgucm91bmQoKGNlbHNpdXMgKiA5IC8gNSkgKyAzMilcbiAgICB9O1xuXG4gICAgcmV0dXJuIHsgZ2V0RGF0YSB9XG59KSgpO1xuXG5leHBvcnQgZGVmYXVsdCBXZWF0aGVyU2VydmljZTsiLCJpbXBvcnQgV2VhdGhlclNlcnZpY2UgZnJvbSAnLi93ZWF0aGVyU2VydmljZSc7XG5cbmNvbnN0IEFwcCA9ICgoKSA9PiB7XG4gICAgY29uc3QgZm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2Zvcm0nKTtcbiAgICBjb25zdCBjaXR5TmFtZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjaXR5LW5hbWUnKTtcbiAgICBjb25zdCBlcnJvck1lc3NhZ2VzID0gZm9ybS5xdWVyeVNlbGVjdG9yKCcuZXJyb3ItbWVzc2FnZXMnKTtcbiAgICBjb25zdCB3ZWF0aGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLndlYXRoZXInKTtcbiAgICBjb25zdCBsb2NhdGlvbiA9IHdlYXRoZXIucXVlcnlTZWxlY3RvcignLmxvY2F0aW9uJyk7XG4gICAgY29uc3QgbWFpbkluZm8gPSB3ZWF0aGVyLnF1ZXJ5U2VsZWN0b3IoJy5tYWluLWluZm8nKTtcbiAgICBjb25zdCBpY29uID0gbWFpbkluZm8ucXVlcnlTZWxlY3RvcignLmljb24nKTtcbiAgICBjb25zdCBpbWFnZSA9IGljb24ucXVlcnlTZWxlY3RvcignaW1nJyk7XG4gICAgY29uc3QgZGVzY3JpcHRpb24gPSBpY29uLnF1ZXJ5U2VsZWN0b3IoJy5kZXNjcmlwdGlvbicpO1xuICAgIGNvbnN0IHRlbXAgPSBtYWluSW5mby5xdWVyeVNlbGVjdG9yKCcudGVtcCcpO1xuICAgIGNvbnN0IHRlbXBWYWx1ZSA9IHRlbXAucXVlcnlTZWxlY3RvcignLnZhbHVlJyk7XG4gICAgY29uc3QgY2Vsc2l1cyA9IHRlbXAucXVlcnlTZWxlY3RvcignLnVuaXRzJykucXVlcnlTZWxlY3RvcignLmNlbHNpdXMnKTtcbiAgICBjb25zdCBmYWhyZW5oZWl0ID0gdGVtcC5xdWVyeVNlbGVjdG9yKCcudW5pdHMnKS5xdWVyeVNlbGVjdG9yKCcuZmFocmVuaGVpdCcpO1xuICAgIGNvbnN0IG1pbk1heCA9IHdlYXRoZXIucXVlcnlTZWxlY3RvcignLm1pbi1tYXgnKTtcbiAgICBjb25zdCBtaW5WYWx1ZSA9IG1pbk1heC5xdWVyeVNlbGVjdG9yKCcubWluJyk7XG4gICAgY29uc3QgbWF4VmFsdWUgPSBtaW5NYXgucXVlcnlTZWxlY3RvcignLm1heCcpO1xuICAgIGxldCB3ZWF0aGVyRGF0YSA9IHt9O1xuICAgIGxldCB1bml0cyA9ICdDJztcblxuICAgIGZvcm0uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgKGUpID0+IHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBsb2FkKGNpdHlOYW1lLnZhbHVlKTtcbiAgICB9KTtcblxuICAgIGNlbHNpdXMuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgICBpZih1bml0cyAhPSAnQycpIHtcbiAgICAgICAgICAgIHVuaXRzID0gJ0MnO1xuICAgICAgICAgICAgcmVuZGVyVGVtcCgpO1xuICAgICAgICB9XG4gICAgfSk7XG5cbiAgICBmYWhyZW5oZWl0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgICAgaWYodW5pdHMgIT0gJ0YnKSB7XG4gICAgICAgICAgICB1bml0cyA9ICdGJztcbiAgICAgICAgICAgIHJlbmRlclRlbXAoKTtcbiAgICAgICAgfVxuICAgIH0pO1xuXG4gICAgY29uc3QgcmVuZGVyRGF0YSA9ICgpID0+IHtcbiAgICAgICAgbG9jYXRpb24udGV4dENvbnRlbnQgPSB3ZWF0aGVyRGF0YS5jaXR5ICsgJywgJyArIHdlYXRoZXJEYXRhLmNvdW50cnk7XG4gICAgICAgIGltYWdlLnNyYyA9ICdodHRwOi8vb3BlbndlYXRoZXJtYXAub3JnL2ltZy93bi8nICsgd2VhdGhlckRhdGEuaWNvbiArICdAMngucG5nJztcbiAgICAgICAgZGVzY3JpcHRpb24udGV4dENvbnRlbnQgPSB3ZWF0aGVyRGF0YS5kZXNjcmlwdGlvbjtcbiAgICAgICAgcmVuZGVyVGVtcCgpO1xuICAgIH07XG5cbiAgICBjb25zdCByZW5kZXJUZW1wID0gKCkgPT4ge1xuICAgICAgICBpZih1bml0cyA9PT0gJ0MnKSB7XG4gICAgICAgICAgICBjZWxzaXVzLmNsYXNzTGlzdC5hZGQoJ3NlbGVjdGVkJyk7XG4gICAgICAgICAgICBmYWhyZW5oZWl0LmNsYXNzTGlzdC5yZW1vdmUoJ3NlbGVjdGVkJyk7XG4gICAgICAgIH1cbiAgICAgICAgaWYodW5pdHMgPT09ICdGJykge1xuICAgICAgICAgICAgZmFocmVuaGVpdC5jbGFzc0xpc3QuYWRkKCdzZWxlY3RlZCcpO1xuICAgICAgICAgICAgY2Vsc2l1cy5jbGFzc0xpc3QucmVtb3ZlKCdzZWxlY3RlZCcpO1xuICAgICAgICB9XG4gICAgICAgIHRlbXBWYWx1ZS50ZXh0Q29udGVudCA9IHdlYXRoZXJEYXRhWyd0ZW1wJyArIHVuaXRzXTtcbiAgICAgICAgbWluVmFsdWUudGV4dENvbnRlbnQgPSB3ZWF0aGVyRGF0YVsndGVtcE1pbicgKyB1bml0c10gKyAnwrAnO1xuICAgICAgICBtYXhWYWx1ZS50ZXh0Q29udGVudCA9IHdlYXRoZXJEYXRhWyd0ZW1wTWF4JyArIHVuaXRzXSArICfCsCc7XG4gICAgfTtcblxuICAgIGNvbnN0IGxvYWQgPSBhc3luYyAoY2l0eSA9ICdCYXJjZWxvbmEnKSA9PiB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICB3ZWF0aGVyRGF0YSA9IGF3YWl0IFdlYXRoZXJTZXJ2aWNlLmdldERhdGEoY2l0eSk7XG4gICAgICAgICAgICBpZih3ZWF0aGVyRGF0YS5jb2QgPT09ICc0MDQnKSB7XG4gICAgICAgICAgICAgICAgZXJyb3JNZXNzYWdlcy50ZXh0Q29udGVudCA9ICdMb2NhdGlvbiBub3QgZm91bmQnO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBlcnJvck1lc3NhZ2VzLnRleHRDb250ZW50ID0gJyc7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZW5kZXJEYXRhKCk7XG4gICAgICAgIH0gY2F0Y2goZXJyb3IpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICByZXR1cm4geyBsb2FkIH1cbn0pKCk7XG5cbkFwcC5sb2FkKCk7Il0sInNvdXJjZVJvb3QiOiIifQ==