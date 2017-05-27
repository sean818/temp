package com.example.guardtours.guardtours;

public class Message {
    public String sender;
    public String recipient;
    public String timestamp;
    public String text;

    // Basic constructor, may be replaced or modified based on needs
    public Message(String sender, String recipient, String timestamp, String text) {
        this.sender = sender;
        this.recipient = recipient;
        this.timestamp = timestamp;
        this.text = text;
    }
}