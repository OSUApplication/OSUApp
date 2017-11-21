package com.osuapp.model;

import java.util.ArrayList;
import java.util.Collection;
import java.util.List;

import org.mongodb.morphia.annotations.Entity;
import org.mongodb.morphia.annotations.Id;
import org.mongodb.morphia.annotations.Property;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

@Entity("tutor")
public class User implements UserDetails {
	
	@Id
	public String id;
	
	public String getId() {
		return id;
	}

	public void setId(String id) {
		this.id = id;
	}

	@Property("name")
	public String name; 
	
	@Property("department")
	public String department;

	@Property("password")
	public String password;
	
	@Property("email")
	public String email;
	
	@Property("student_as")
	public boolean studentAs;
	
	@Property("tutor_as")
	public boolean tutorAs;
	
	@Property("course_seeking")
	public List<String> courseSeeking;
	
	@Property("course_offering")
	public List<String> courseOffering;
	
	@Property("timeSlots")
	public List<String> timeSlots;

	public String getName() {
		return name;
	}

	public List<String> getTimeSlots() {
		return timeSlots;
	}

	public void setTimeSlots(List<String> timeSlots) {
		this.timeSlots = timeSlots;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getDepartment() {
		return department;
	}

	public void setDepartment(String department) {
		this.department = department;
	}

	public String getPass() {
		return password;
	}

	public void setPass(String password) {
		this.password = password;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public boolean isStudentAs() {
		return studentAs;
	}

	public void setStudentAs(boolean studentAs) {
		this.studentAs = studentAs;
	}

	public boolean isTutorAs() {
		return tutorAs;
	}

	public void setTutorAs(boolean tutorAs) {
		this.tutorAs = tutorAs;
	}

	public List<String> getCourseSeeking() {
		return courseSeeking;
	}

	public void setCourseSeeking(List<String> courseSeeking) {
		this.courseSeeking = courseSeeking;
	}

	public List<String> getCourseOffering() {
		return courseOffering;
	}

	public void setCourseOffering(List<String> courseOffering) {
		this.courseOffering = courseOffering;
	}


    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        List<GrantedAuthority> authorities = new ArrayList<GrantedAuthority>();

        return authorities;
    }

    @Override
    public String getPassword() {
        return password;
    }

    @Override
    public String getUsername() {
        return email;
    }

    @Override
    public boolean isAccountNonExpired() {
        return true;
    }

    @Override
    public boolean isAccountNonLocked() {
        return true;
    }

    @Override
    public boolean isCredentialsNonExpired() {
        return true;
    }

    @Override
    public boolean isEnabled() {
        return true;
    }
}
