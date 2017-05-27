package com.example.guardtours.guardtours;

public class Notification {
    public String sender;
    public String timestamp;
    public String text;

    // Basic constructor, may be replaced or modified based on needs
    public Notification(String sender, String timestamp, String text) {
        this.sender = sender;
        this.timestamp = timestamp;
        this.text = text;
    }
}
