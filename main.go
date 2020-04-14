package main

import (
  "log"

  "github.com/leaanthony/mewn"
  "github.com/wailsapp/wails"
  "github.com/gen2brain/beeep"
)


func main() {

  js := mewn.String("./frontend/dist/app.js")
  css := mewn.String("./frontend/dist/app.css")

  notify, err := NewNotify()
  if err != nil {
    log.Fatal(err)
  }

  app := wails.CreateApp(&wails.AppConfig{
    Width:  800,
    Height: 500,
    Title:  "chat-go-wails-vue",
    JS:     js,
    CSS:    css,
    Colour: "#131313",
  })
  app.Bind(notify)
  app.Run()
}
