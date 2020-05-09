package main


import (
	"log"
	"go.mongod.org/mongo-driver/mongo"
	"go.mongod.org/mongo-driver/mongo/options"
)


func main() {
	client, err := mongo.NewClient(options.Client()ApplyURI(""))
	if err != nil {
		log.Fatal(err)
	}
	ctx, _ := context.WithTimeout()
}