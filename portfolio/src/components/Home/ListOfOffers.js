import React from "react";


export default function ListOfOffers() {

  return (

             <div className="content px-20  ">
            
              <div className="grid mt-8  gap-8 grid-cols-1 md:grid-cols-2 xl:grid-cols-2">
                <div className="flex flex-col ">
                  <div className="bg-white shadow-md  rounded-3xl p-4">
                    <div className="flex-none lg:flex">
                      <div className=" h-full w-full lg:h-48 lg:w-48   lg:mb-0 mb-3">
                        <img className=" w-full  object-scale-down lg:object-cover  lg:h-32 rounded-2xl" src="data:image/svg+xml;base64,PHN2ZyBpZD0iTGF5ZXJfMSIgZW5hYmxlLWJhY2tncm91bmQ9Im5ldyAwIDAgMTI4IDEyOCIgaGVpZ2h0PSI1MTIiIHZpZXdCb3g9IjAgMCAxMjggMTI4IiB3aWR0aD0iNTEyIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxnPjxwYXRoIGQ9Im0xMTkuMzM4IDIyLjM4MmgtNTcuOTc4Yy0xLjc2OSAwLTMuNDI2LS44NjgtNC40MzMtMi4zMjJsLTIuNTc4LTMuNzI1Yy0xLjM4LTEuOTkzLTMuNjUxLTMuMTg0LTYuMDc3LTMuMTg0aC0zNS42MWMtMi43NTcgMC01IDIuMjQzLTUgNXY5NS42OThjMCAyLjc1NyAyLjI0MyA1IDUgNWgxMDYuNjc2YzIuNzU3IDAgNS0yLjI0MyA1LTV2LTg2LjQ2N2MwLTIuNzU3LTIuMjQzLTUtNS01eiIgZmlsbD0iI2U2ZTdlOCIvPjxnPjxwYXRoIGQ9Im0xMTkuMzM3IDM0LjE2M2gtMTE0LjY3NXY3NS42ODdjMCAyLjIwOSAxLjc5MSA0IDQgNGgxMDYuNjc1YzIuMjA5IDAgNC0xLjc5MSA0LTR6IiBmaWxsPSIjZDRmYmZmIi8+PHBhdGggZD0ibTYyIDExMy44NWg1My4zMzdjMi4yMDkgMCA0LTEuNzkxIDQtNHYtNzUuNjg3aC01Ny4zMzd6IiBmaWxsPSIjZmZkN2U1Ii8+PGcgZmlsbD0iI2ZhNzU5ZSI+PGc+PHBhdGggZD0ibTQyLjgyIDY1LjVoLTYuODA5Yy0uNTUyIDAtMS0uNDQ3LTEtMXMuNDQ4LTEgMS0xaDYuODA5Yy41NTIgMCAxIC40NDcgMSAxcy0uNDQ3IDEtMSAxeiIvPjxwYXRoIGQ9Im0zMC4wMTIgNjUuNWgtMTYuODMzYy0uNTUyIDAtMS0uNDQ3LTEtMXMuNDQ4LTEgMS0xaDE2LjgzM2MuNTUyIDAgMSAuNDQ3IDEgMXMtLjQ0OCAxLTEgMXoiLz48cGF0aCBkPSJtNDIuODIgODYuNWgtMTAuMzA4Yy0uNTUyIDAtMS0uNDQ3LTEtMXMuNDQ4LTEgMS0xaDEwLjMwOGMuNTUyIDAgMSAuNDQ3IDEgMXMtLjQ0NyAxLTEgMXoiLz48cGF0aCBkPSJtMjguNTEyIDg2LjVoLTE1LjMzM2MtLjU1MiAwLTEtLjQ0Ny0xLTFzLjQ0OC0xIDEtMWgxNS4zMzNjLjU1MiAwIDEgLjQ0NyAxIDFzLS40NDggMS0xIDF6Ii8+PC9nPjxnPjxwYXRoIGQ9Im00Mi44MiAxMDcuNWgtMTAuMzA4Yy0uNTUyIDAtMS0uNDQ3LTEtMXMuNDQ4LTEgMS0xaDEwLjMwOGMuNTUyIDAgMSAuNDQ3IDEgMXMtLjQ0NyAxLTEgMXoiLz48cGF0aCBkPSJtMjguNTEyIDEwNy41aC0xNS4zMzNjLS41NTIgMC0xLS40NDctMS0xcy40NDgtMSAxLTFoMTUuMzMzYy41NTIgMCAxIC40NDcgMSAxcy0uNDQ4IDEtMSAxeiIvPjwvZz48L2c+PGc+PHBhdGggZD0ibTY5LjAyNCA1NS45Njh2LTEzLjZjMC0xLjEwNS44OTUtMiAyLTJoMzcuOTUzYzEuMTA1IDAgMiAuODk1IDIgMnYxMy42YzAgMS4xMDUtLjg5NSAyLTIgMmgtMzcuOTUzYy0xLjEwNSAwLTItLjg5NS0yLTJ6IiBmaWxsPSIjZmE3NTllIi8+PHBhdGggZD0ibTY5LjAyNCA5MS4yMTF2LTI0LjgxOGMwLTEuMTA1Ljg5NS0yIDItMmgzNy45NTNjMS4xMDUgMCAyIC44OTUgMiAydjI0LjgxN2MwIDEuMTA1LS44OTUgMi0yIDJoLTM3Ljk1M2MtMS4xMDUuMDAxLTItLjg5NS0yLTEuOTk5eiIgZmlsbD0iIzAwODllZiIvPjwvZz48cGF0aCBkPSJtMTE1LjMzNyAxMTAuODVoLTEwNi42NzVjLTIuMjA5IDAtNC0xLjc5MS00LTR2M2MwIDIuMjA5IDEuNzkxIDQgNCA0aDEwNi42NzVjMi4yMDkgMCA0LTEuNzkxIDQtNHYtM2MwIDIuMjA5LTEuNzkxIDQtNCA0eiIgZmlsbD0iI2ZmZiIvPjxwYXRoIGQ9Im01Mi4xMDYgMTYuNjI5LTIuNTc5LTMuNzI1Yy0xLjE5NC0xLjcyNC0zLjE1Ny0yLjc1My01LjI1NC0yLjc1M2gtMzUuNjExYy0yLjIwOSAwLTQgMS43OTEtNCA0djIwLjAxMmgxMTQuNjc1di0xMC43ODFjMC0yLjIwOS0xLjc5MS00LTQtNGgtNTcuOTc3Yy0yLjA5NyAwLTQuMDYxLTEuMDI5LTUuMjU0LTIuNzUzeiIgZmlsbD0iIzAwODllZiIvPjxnPjxjaXJjbGUgY3g9IjM2Ljk3MiIgY3k9IjE4Ljc5MSIgZmlsbD0iI2ZmZiIgcj0iMi43MjciLz48Y2lyY2xlIGN4PSIyNy4wNjUiIGN5PSIxOC43OTEiIGZpbGw9IiNkNGZiZmYiIHI9IjIuNzI3Ii8+PGNpcmNsZSBjeD0iMTcuMTU4IiBjeT0iMTguNzkxIiBmaWxsPSIjZmE3NTllIiByPSIyLjcyNyIvPjxwYXRoIGQ9Im0xMDkuNTY5IDI5LjI5MWgtOTMuNzVjLS44MjkgMC0xLjUtLjY3Mi0xLjUtMS41cy42NzEtMS41IDEuNS0xLjVoOTMuNzVjLjgyOCAwIDEuNS42NzIgMS41IDEuNXMtLjY3MSAxLjUtMS41IDEuNXoiIGZpbGw9IiM2ZGM5ZjciLz48L2c+PGcgZmlsbD0iIzNhMmM2MCI+PHBhdGggZD0ibTQ1LjM0NSA3MC41aC0yNS4xNjZjLS41NTIgMC0xIC40NDctMSAxcy40NDggMSAxIDFoMjUuMTY2Yy41NTIgMCAxLS40NDcgMS0xcy0uNDQ4LTEtMS0xeiIvPjxwYXRoIGQ9Im0yMC4xNzkgOTMuNWgxNS4xNjZjLjU1MiAwIDEtLjQ0NyAxLTFzLS40NDgtMS0xLTFoLTE1LjE2NmMtLjU1MiAwLTEgLjQ0Ny0xIDFzLjQ0OCAxIDEgMXoiLz48cGF0aCBkPSJtMTkuMTc5IDk5LjVjMCAuNTUzLjQ0OCAxIDEgMWgyMi4zMzNjLjU1MiAwIDEtLjQ0NyAxLTFzLS40NDgtMS0xLTFoLTIyLjMzM2MtLjU1MiAwLTEgLjQ0Ny0xIDF6Ii8+PHBhdGggZD0ibTEzLjI3OSA1MS45MTEgOC40NzIgMy40NTZjLjI0LjA5Ni40NjQuMTQ0LjY3Mi4xNDQuMzY4IDAgLjY3Ni0uMTI0LjkyNC0uMzcycy4zNzItLjU2NC4zNzItLjk0OGMwLS4yMjQtLjA2LS40MjgtLjE4LS42MTJzLS4yOTItLjMyNC0uNTE2LS40MmwtNy44NDktMy4xNDQgNy44NDktMy4xNDRjLjQ2NC0uMjA4LjY5NS0uNTUyLjY5NS0xLjAzMiAwLS4zODQtLjEyLS42OTYtLjM1OS0uOTM2LS4yNC0uMjQtLjU0NC0uMzYtLjkxMi0uMzYtLjIyNSAwLS40NTYuMDQ4LS42OTYuMTQ0bC04LjQ3MiAzLjQ1NmMtLjQuMTYtLjcxMi40MDgtLjkzNy43NDQtLjIyNC4zMzYtLjMzNi43MTItLjMzNiAxLjEyOCAwIC40MzIuMTEyLjgxMi4zMzYgMS4xNC4yMjUuMzI5LjUzNy41ODEuOTM3Ljc1NnoiLz48cGF0aCBkPSJtMjYuMjYzIDU4LjcwM2MuMzA0IDAgLjU3OS0uMDg0LjgyOC0uMjUyLjI0Ny0uMTY4LjQyLS40Mi41MTYtLjc1Nmw1LjUyMS0xNy4yOGMuMDQ4LS4xNzYuMDcxLS4zNDQuMDcxLS41MDQgMC0uMzg0LS4xNDQtLjctLjQzMi0uOTQ4cy0uNjI0LS4zNzItMS4wMDgtLjM3MmMtLjI4OCAwLS41NTcuMDg0LS44MDUuMjUycy0uNDI4LjQyLS41NC43NTZsLTUuNDk1IDE3LjI4Yy0uMDQ5LjE3Ni0uMDcyLjM0NC0uMDcyLjUwNCAwIC4zODQuMTQ0LjcuNDMyLjk0OC4yODcuMjQ4LjYxNS4zNzIuOTg0LjM3MnoiLz48cGF0aCBkPSJtMzQuNTMxIDUzLjU3OWMtLjEyLjE4NS0uMTgxLjM4OC0uMTgxLjYxMiAwIC4zODQuMTI0LjcuMzcyLjk0OC4yNDguMjQ5LjU1Ni4zNzIuOTI0LjM3Mi4yMDggMCAuNDMzLS4wNDguNjcyLS4xNDRsOC40NzMtMy40NTZjLjM5OS0uMTc2LjcxMi0uNDI4LjkzNi0uNzU2LjIyNS0uMzI4LjMzNi0uNzA4LjMzNi0xLjE0IDAtLjQxNi0uMTExLS43OTItLjMzNi0xLjEyOC0uMjI0LS4zMzYtLjUzNi0uNTg0LS45MzYtLjc0NGwtOC40NzMtMy40NTZjLS4yMzktLjA5Ni0uNDcyLS4xNDQtLjY5NS0uMTQ0LS4zNjggMC0uNjcyLjEyLS45MTIuMzZzLS4zNi41NTItLjM2LjkzNmMwIC40OC4yMzIuODI0LjY5NiAxLjAzMmw3Ljg0OCAzLjE0NC03Ljg0OCAzLjE0NGMtLjIyNS4wOTctLjM5Ny4yMzctLjUxNi40MnoiLz48cGF0aCBkPSJtMTExLjk3NyA0Mi4zNjhjMC0xLjY1NC0xLjM0Ni0zLTMtM2gtMzcuOTUzYy0xLjY1NCAwLTMgMS4zNDYtMyAzdjEzLjZjMCAxLjY1NCAxLjM0NiAzIDMgM2gzNy45NTNjMS42NTQgMCAzLTEuMzQ2IDMtM3ptLTIgMTMuNmMwIC41NTItLjQ0OCAxLTEgMWgtMzcuOTUzYy0uNTUyIDAtMS0uNDQ4LTEtMXYtMTMuNmMwLS41NTIuNDQ4LTEgMS0xaDM3Ljk1M2MuNTUyIDAgMSAuNDQ4IDEgMXoiLz48cGF0aCBkPSJtMTExLjk3NyA5MS4yMXYtMjQuODE3YzAtMS42NTQtMS4zNDYtMy0zLTNoLTM3Ljk1M2MtMS42NTQgMC0zIDEuMzQ2LTMgM3YyNC44MTdjMCAxLjY1NCAxLjM0NiAzIDMgM2gzNy45NTNjMS42NTQgMCAzLTEuMzQ2IDMtM3ptLTQwLjk1My0yNS44MTdoMzcuOTUzYy41NTIgMCAxIC40NDggMSAxdjE1LjMyN2wtNS4zOTQtMy44NjVjLS4zNjUtLjI2Mi0uODYxLS4yNDctMS4yMTMuMDM2bC01LjU2NSA0LjUxMi0xNC4wNDUtMTAuMzc0Yy0uMzU3LS4yNjMtLjg0OC0uMjYtMS4yMDIuMDExbC0xMi41MzQgOS42MDJ2LTE1LjI0OWMwLS41NTIuNDQ4LTEgMS0xem0zNy45NTMgMjYuODE3aC0zNy45NTNjLS41NTIgMC0xLS40NDgtMS0xdi03LjA0OWwxMy4xNTMtMTAuMDc3IDE0LjA2MiAxMC4zODhjLjM2Ni4yNjkuODY4LjI1OSAxLjIyNC0uMDI4bDUuNTc0LTQuNTIgNS45MzkgNC4yNTd2Ny4wMjljLjAwMS41NTItLjQ0OCAxLS45OTkgMXoiLz48cGF0aCBkPSJtOTcuMjUgNzYuNTgzYzIuNDgxIDAgNC41LTIuMDE5IDQuNS00LjVzLTIuMDE5LTQuNS00LjUtNC41LTQuNSAyLjAxOS00LjUgNC41IDIuMDE5IDQuNSA0LjUgNC41em0wLTdjMS4zNzkgMCAyLjUgMS4xMjEgMi41IDIuNXMtMS4xMjEgMi41LTIuNSAyLjUtMi41LTEuMTIxLTIuNS0yLjUgMS4xMjEtMi41IDIuNS0yLjV6Ii8+PHBhdGggZD0ibTEwOS4yOSA5OC41aC0zOC41OGMtLjU1MyAwLTEgLjQ0Ny0xIDFzLjQ0NyAxIDEgMWgzOC41OGMuNTUzIDAgMS0uNDQ3IDEtMXMtLjQ0Ny0xLTEtMXoiLz48cGF0aCBkPSJtMTA5LjI5IDEwNS41aC0zOC41OGMtLjU1MyAwLTEgLjQ0Ny0xIDFzLjQ0NyAxIDEgMWgzOC41OGMuNTUzIDAgMS0uNDQ3IDEtMXMtLjQ0Ny0xLTEtMXoiLz48cGF0aCBkPSJtMTE5LjMzNyA4Mi4yNWMtLjU1MyAwLTEgLjQ0Ny0xIDF2OS40MzhjMCAuNTUzLjQ0NyAxIDEgMXMxLS40NDcgMS0xdi05LjQzOGMwLS41NTMtLjQ0Ny0xLTEtMXoiLz48cGF0aCBkPSJtMTE1LjMzNyAxOC4zODJoLTU3Ljk3N2MtMS43NjggMC0zLjQyNS0uODY4LTQuNDMyLTIuMzIybC0yLjU3OS0zLjcyNmMtMS4zOC0xLjk5My0zLjY1Mi0zLjE4NC02LjA3Ny0zLjE4NGgtMzUuNjA5Yy0yLjc1NyAwLTUgMi4yNDMtNSA1djk1LjY5OWMwIDIuNzU3IDIuMjQzIDUgNSA1aDEwNi42NzVjMi43NTcgMCA1LTIuMjQzIDUtNXYtMTMuMTgyYzAtLjU1My0uNDQ3LTEtMS0xcy0xIC40NDctMSAxdjEzLjE4M2MwIDEuNjU0LTEuMzQ2IDMtMyAzaC01Mi4zMzh2LTc3LjY4N2g1NS4zMzd2NDQuMDg3YzAgLjU1My40NDcgMSAxIDFzMS0uNDQ3IDEtMXYtNTUuODY4YzAtMi43NTctMi4yNDMtNS01LTV6bS0xMDkuNjc0LTQuMjMxYzAtMS42NTQgMS4zNDYtMyAzLTNoMzUuNjFjMS43NjkgMCAzLjQyNS44NjggNC40MzIgMi4zMjJsMi41NzkgMy43MjZjMS4zODEgMS45OTMgMy42NTIgMy4xODQgNi4wNzcgMy4xODRoNTcuOTc3YzEuNjU0IDAgMyAxLjM0NiAzIDN2OS43ODFoLTExMi42NzV6bTU1LjMzNyA1Ni4zNDloLTkuNDljLS41NTIgMC0xIC40NDctMSAxcy40NDggMSAxIDFoOS40OXY1aC00MC44MjFjLS41NTIgMC0xIC40NDctMSAxcy40NDggMSAxIDFoNDAuODIxdjEyaC0xOS40OWMtLjU1MiAwLTEgLjQ0Ny0xIDFzLjQ0OCAxIDEgMWgxOS40OXY1aC0xMy40MDFjLS41NTIgMC0xIC40NDctMSAxcy40NDggMSAxIDFoMTMuNDAxdjEyLjM1aC01Mi4zMzhjLTEuNjU0IDAtMy0xLjM0Ni0zLTN2LTc0LjY4N2g1NS4zMzh6Ii8+PC9nPjwvZz48L2c+PC9zdmc+" />
                      </div>
                      <div className="flex-auto ml-3 justify-evenly py-2">
                        <div className="flex flex-wrap ">
                          <h2 className="flex-auto text-lg font-medium">Frontend Development</h2>
                        </div>
                        <p className="mt-3" />
                        <div className="flex py-4  text-sm text-gray-600">
                          <div className="flex-1 inline-flex items-center">
                            <p>I can built a beautiful and scalable SPA using HTML,CSS and React.js</p>
                          </div>
                    
                        </div>
                        <div className="flex p-4 pb-2 border-t border-gray-200 " />
                        <div className="flex space-x-3 text-sm font-medium">
                          <div className="flex-auto flex space-x-3">
                          </div>
                          <button className="mb-2 md:mb-0 bg-gray-900 px-5 py-2 shadow-sm tracking-wider text-white rounded-full hover:bg-gray-800" type="button" aria-label="like">Detail</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col ">
                  <div className="bg-white shadow-md  rounded-3xl p-4">
                    <div className="flex-none lg:flex">
                    <div className=" h-full w-full lg:h-48 lg:w-48   lg:mb-0 mb-3">
                         <img className=" w-full  object-scale-down lg:object-cover  lg:h-32 rounded-2xl" src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDIxLjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJDYXBhXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4Ig0KCSB2aWV3Qm94PSIwIDAgNTg3LjY5NyA1ODcuNjk3IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA1ODcuNjk3IDU4Ny42OTc7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4NCjxnPg0KCTxnPg0KCQk8ZyBpZD0iZmxhdF8xM18iPg0KCQkJPHBhdGggc3R5bGU9ImZpbGw6IzQzOThEMTsiIGQ9Ik0zMC4zOTgsMjAuMjY1aDQ0NS44MzljMTYuNzksMCwzMC4zOTgsMTMuNjA4LDMwLjM5OCwzMC4zOTh2NDA1LjMwOA0KCQkJCWMwLDE2Ljc5LTEzLjYwOCwzMC4zOTgtMzAuMzk4LDMwLjM5OEgzMC4zOThDMTMuNjA4LDQ4Ni4zNywwLDQ3Mi43NjEsMCw0NTUuOTcxVjUwLjY2M0MwLDMzLjg3NCwxMy42MDgsMjAuMjY1LDMwLjM5OCwyMC4yNjV6Ig0KCQkJCS8+DQoJCQk8cmVjdCB4PSIzMC4zOTgiIHk9IjUwLjY2MyIgc3R5bGU9ImZpbGw6IzNFOENDNzsiIHdpZHRoPSIyMC4yNjUiIGhlaWdodD0iMjAuMjY1Ii8+DQoJCQk8cmVjdCB4PSI3MC45MjkiIHk9IjUwLjY2MyIgc3R5bGU9ImZpbGw6IzNFOENDNzsiIHdpZHRoPSIyMC4yNjUiIGhlaWdodD0iMjAuMjY1Ii8+DQoJCQk8cmVjdCB4PSIxMTEuNDYiIHk9IjUwLjY2MyIgc3R5bGU9ImZpbGw6IzNFOENDNzsiIHdpZHRoPSIyMC4yNjUiIGhlaWdodD0iMjAuMjY1Ii8+DQoJCQk8cGF0aCBzdHlsZT0iZmlsbDojODdDRUQ5OyIgZD0iTTExMS40NiwxMDEuMzI3aDQ0NS44MzljMTYuNzksMCwzMC4zOTgsMTMuNjA4LDMwLjM5OCwzMC4zOTh2NDA1LjMwOA0KCQkJCWMwLDE2Ljc5LTEzLjYwOCwzMC4zOTgtMzAuMzk4LDMwLjM5OEgxMTEuNDZjLTE2Ljc5LDAtMzAuMzk4LTEzLjYwOC0zMC4zOTgtMzAuMzk4VjEzMS43MjUNCgkJCQlDODEuMDYyLDExNC45MzUsOTQuNjcsMTAxLjMyNywxMTEuNDYsMTAxLjMyN3oiLz4NCgkJCTxwYXRoIHN0eWxlPSJmaWxsOiM3MUM0RDE7IiBkPSJNNTU3LjI5OCwxMDEuMzI3aC0yMC4yNjVMODUuNTgxLDU1Mi43NzljNS40NjIsOS4wNzksMTUuMjgsMTQuNjQyLDI1Ljg3OSwxNC42NTJoNDQ1LjgzOQ0KCQkJCWMxNi43OSwwLDMwLjM5OC0xMy42MDgsMzAuMzk4LTMwLjM5OGwwLDBWMTMxLjcyNUM1ODcuNjk3LDExNC45MzUsNTc0LjA4OCwxMDEuMzI3LDU1Ny4yOTgsMTAxLjMyN3oiLz4NCgkJCTxyZWN0IHg9IjExMS40NiIgeT0iMTMxLjcyNSIgc3R5bGU9ImZpbGw6IzVFQjNEMTsiIHdpZHRoPSIyMC4yNjUiIGhlaWdodD0iMjAuMjY1Ii8+DQoJCQk8cmVjdCB4PSIxNTEuOTkiIHk9IjEzMS43MjUiIHN0eWxlPSJmaWxsOiM1RUIzRDE7IiB3aWR0aD0iMjAuMjY1IiBoZWlnaHQ9IjIwLjI2NSIvPg0KCQkJPHJlY3QgeD0iMTkyLjUyMSIgeT0iMTMxLjcyNSIgc3R5bGU9ImZpbGw6IzVFQjNEMTsiIHdpZHRoPSIyMC4yNjUiIGhlaWdodD0iMjAuMjY1Ii8+DQoJCQk8cmVjdCB4PSIxMTEuNDYiIHk9IjE3Mi4yNTYiIHN0eWxlPSJmaWxsOiM1RUIzRDE7IiB3aWR0aD0iNDQ1LjgzOSIgaGVpZ2h0PSIyMC4yNjUiLz4NCgkJCTxyZWN0IHg9IjExMS40NiIgeT0iMjIyLjkxOSIgc3R5bGU9ImZpbGw6IzVFQjNEMTsiIHdpZHRoPSI4MS4wNjIiIGhlaWdodD0iMjAuMjY1Ii8+DQoJCQk8cmVjdCB4PSIxMTEuNDYiIHk9IjI2My40NSIgc3R5bGU9ImZpbGw6IzVFQjNEMTsiIHdpZHRoPSI2MC43OTYiIGhlaWdodD0iMjAuMjY1Ii8+DQoJCQk8cGF0aCBzdHlsZT0iZmlsbDojRTM0Qjg3OyIgZD0iTTQ4Ni4zNyw0MDUuMzA4di02MC43OTZoLTM0LjM4Yy0yLjgyNy0xMC45ODQtNy4xODQtMjEuNTAyLTEyLjk1LTMxLjI3bDI0LjMxOC0yNC4zMTgNCgkJCQlsLTQyLjk5My00Mi45OTNsLTI0LjMxOCwyNC4zMThjLTkuNzY4LTUuNzY2LTIwLjI4Ni0xMC4xMjMtMzEuMjctMTIuOTV2LTM0LjM4aC02MC43OTZ2MzQuMzgNCgkJCQljLTEwLjk4NCwyLjgyNy0yMS41MDIsNy4xODQtMzEuMjcsMTIuOTVsLTI0LjMxOC0yNC4zMThMMjA1LjQsMjg4LjkyNGwyNC4zMTgsMjQuMzE4Yy01Ljc2Niw5Ljc1OC0xMC4xMjMsMjAuMjg2LTEyLjk1LDMxLjI3DQoJCQkJaC0zNC4zOHY2MC43OTZoMzQuMzhjMi44MjcsMTAuOTg0LDcuMTg0LDIxLjUwMiwxMi45NSwzMS4yN0wyMDUuNCw0NjAuODk2bDQyLjk5Myw0Mi45OTNsMjQuMzE4LTI0LjMxOA0KCQkJCWM5Ljc2OCw1Ljc2NiwyMC4yODYsMTAuMTIzLDMxLjI3LDEyLjk1djM0LjM4aDYwLjc5NnYtMzQuMzhjMTAuOTg0LTIuODI3LDIxLjUwMi03LjE4NCwzMS4yNy0xMi45NWwyNC4zMTgsMjQuMzE4bDQyLjk5My00Mi45OTMNCgkJCQlsLTI0LjMxOC0yNC4zMThjNS43NjYtOS43NjgsMTAuMTIzLTIwLjI4NiwxMi45NS0zMS4yN0g0ODYuMzd6IE0zMzQuMzc5LDQzNS43MDZjLTMzLjU4LDAtNjAuNzk2LTI3LjIxNi02MC43OTYtNjAuNzk2DQoJCQkJczI3LjIxNi02MC43OTYsNjAuNzk2LTYwLjc5NnM2MC43OTYsMjcuMjE2LDYwLjc5Niw2MC43OTZTMzY3Ljk1OSw0MzUuNzA2LDMzNC4zNzksNDM1LjcwNnoiLz4NCgkJCTxyZWN0IHg9IjQ5Ni41MDIiIHk9IjUxNi43NjgiIHN0eWxlPSJmaWxsOiM1RUIzRDE7IiB3aWR0aD0iNjAuNzk2IiBoZWlnaHQ9IjIwLjI2NSIvPg0KCQkJPHBhdGggc3R5bGU9ImZpbGw6I0Q5NDg4MTsiIGQ9Ik00MzkuMDQsMzEzLjI0MmwyNC4zMTgtMjQuMzE4bC0xOS45NjEtMTkuOTcyYy0xNy42MjEsMjUuNTI0LTM3LjE0Niw0OS42ODEtNTguNDA1LDcyLjI2Ng0KCQkJCWMxOC41NTMsMjcuOTg3LDEwLjg5Myw2NS43MTEtMTcuMDk0LDg0LjI2NGMtMjIuNTA1LDE0LjkxNS01Mi4xNjMsMTMuMjAzLTcyLjc5My00LjIxNQ0KCQkJCWMtMjQuOTQ3LDE4LjY0NC01MC45ODgsMzUuNzg5LTc3Ljk3MSw1MS4zMzJsMzEuMjgsMzEuMjhsMjQuMzE4LTI0LjMxOGM5Ljc1OCw1Ljc2NiwyMC4yNzYsMTAuMTMzLDMxLjI0OSwxMi45NnYzNC4zOGg2MC43OTYNCgkJCQl2LTM0LjM4YzEwLjk4NC0yLjgyNywyMS41MDItNy4xODQsMzEuMjctMTIuOTVsMjQuMzE4LDI0LjMxOGw0Mi45OTMtNDIuOTkzbC0yNC4zMTgtMjQuMzE4DQoJCQkJYzUuNzY2LTkuNzY4LDEwLjEyMy0yMC4yODYsMTIuOTUtMzEuMjdoMzQuMzh2LTYwLjc5NmgtMzQuMzhDNDQ5LjE2MiwzMzMuNTI4LDQ0NC44MDUsMzIzLjAxLDQzOS4wNCwzMTMuMjQyeiIvPg0KCQkJPHBhdGggc3R5bGU9ImZpbGw6IzNFOENDNzsiIGQ9Ik04MS4wNjIsMTMxLjcyNUw4MS4wNjIsMTMxLjcyNUw4MS4wNjIsMTMxLjcyNVY0ODYuMzdsMCwwSDUwLjY2M2wwLDBWMTYyLjEyMw0KCQkJCUM1MC42NjMsMTQ1LjMzMyw2NC4yNzIsMTMxLjcyNSw4MS4wNjIsMTMxLjcyNXoiLz4NCgkJPC9nPg0KCTwvZz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjwvc3ZnPg0K" />
                       

                      </div>
                      <div className="flex-auto ml-3 justify-evenly py-2">
                        <div className="flex flex-wrap ">
                          <h2 className="flex-auto text-lg font-medium">Backend Development</h2>
                        </div>
                        <p className="mt-3" />
                        <div className="flex py-4  text-sm text-gray-600">
                          <div className="flex-1 inline-flex items-center">
                            <p >handle database, server, api using django and SQLlite</p>
                          </div>
                         
                        </div>
                        <div className="flex p-4 pb-2 border-t border-gray-200 " />
                        <div className="flex space-x-3 text-sm font-medium">
                          <div className="flex-auto flex space-x-3">
                          </div>
                          <button className="mb-2 md:mb-0 bg-gray-900 px-5 py-2 shadow-sm tracking-wider text-white rounded-full hover:bg-gray-800" type="button" aria-label="like">Detail</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </div>

         
      
  );
}