package main

import (
  "fmt"

  "github.com/leaanthony/mewn"
  "github.com/wailsapp/wails"

)


func server() {
  fmt.Println("App is Running")  
}

func main() {

  js := mewn.String("./frontend/dist/app.js")
  css := mewn.String("./frontend/dist/app.css")

  app := wails.CreateApp(&wails.AppConfig{
    Width:  800,
    Height: 500,
    Title:  "chat-go-wails-vue",
    JS:     js,
    CSS:    css,
    Colour: "#131313",
  })
  app.Bind(server)
  app.Run()
}
