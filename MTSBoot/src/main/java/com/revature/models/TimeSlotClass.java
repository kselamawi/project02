package com.revature.models;


import javax.persistence.*;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@Entity
@Table(name ="timeslots")
public class TimeSlotClass {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="timeslot_id")
    private String slotId;

    @Column(name="timeslot")
    private String timeslot;

    public String getSlotId() {
        return slotId;
    }

    public void setSlotId(String slotId) {
        this.slotId = slotId;
    }

    public String getTimeslot() {
        return timeslot;
    }

    public void setTimeslot(String timeslot) {
        this.timeslot = timeslot;
    }
}
