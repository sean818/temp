package com.example.guardtours.guardtours;

import android.location.Location;
import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;

import java.util.ArrayList;

public class MainActivity extends AppCompatActivity {
    private User user;
    private ArrayList<Building> route;
    private ArrayList<Message> messages;
    private ArrayList<Notification> notifications;
    private Location myLastLocation;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
    }

    private void initateLoginScreen() {

    }

    private void fetchUpdates() {

    }

    private void updareLocations() {

    }

    private void initiateRouteScreen() {

    }

    private void initiateMessageScreen() {

    }
}
