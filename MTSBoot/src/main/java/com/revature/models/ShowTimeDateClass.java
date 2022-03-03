package com.revature.models;

import javax.persistence.*;
import java.util.Date;

@Entity
    @Table(name ="showtime_dates")
    public class ShowTimeDateClass {

        @Id
        @GeneratedValue(strategy = GenerationType.IDENTITY)
        @Column(name="show_date_id")
        private int showDateId;

        @Column(name="show_date")
        private Date showDate;

    public int getShowDateId() {
        return showDateId;
    }

    public void setShowDateId(int showDateId) {
        this.showDateId = showDateId;
    }

    public Date getShowDate() {
        return showDate;
    }

    public void setShowDate(Date showDate) {
        this.showDate = showDate;
    }
}
