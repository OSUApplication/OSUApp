package com.osuapp.constants;

public class ApplicationConstants {

	//MongoDB Connection Constants 
	public static String LOCALHOST = "localhost";
	public static int PORT = 27017;
	public static String DATABASE_NAME = "osuapp";
	
	//MongoDB Query Constants 
	public static String FIELD_EMAIL = "email";
	public static String FIELD_NAME = "name";
	public static String FIELD_COURSE_OFFERING = "course_offering";
	
	//API Address Constants 
	public static String GET_USER_END_POINT = "/api/getUser/";
	public static String GET_ALL_USERS = "/api/getAllUsers";
	public static String GET_USER = "/api/getUser/{email:.+}";
	public static String ADD_USER = "/api/addUser";
	public static String GET_TUTOR = "/api/getTutor/{subjectName}";
	public static String UPDATE_USER = "/api/updateUser";
	public static String GET_ALL_COURSES_BY_DEPTARTMENT = "/api/{departmentName}/getAllCourses";
	
	//Front-End localhost constant
	public static String FRONT_END_LOCALHOST = "http://localhost:8084";
	
	//constants for the unit test cases
	public static String GENERIC_USERNAME = "Chris Rock";
	public static String GENERIC_EMAIL = "rockc@oregonstate.edu";
	public static String GENERIC_COURSE_OFFERING = "CS540 DBMS";
	public static String GENERIC_DEPARTMENT_NAME = "CS";
	public static String POST_CONTENT = "{\"name\":\"Chris Rock\"}";
	public static String EXPECTED_TEST_RESULT_LIST = "[{\"name\":\"Chris Rock\"}]";
	public static String EXPECTED_TEST_RESULT_OBJECT = "{\"name\":\"Chris Rock\",\"email\":\"rockc@oregonstate.edu\"}";
	public static String EXPECTED_TEST_COURSE_RESULT = "{\"departmentName\":\"CS\",\"courseList\":[\"CS540 DBMS\"]}";
	public static String EXPECTED_TEST_RESULT_LOCATION = "/api/getUser/rockc@oregonstate.edu";
	public static String GENERIC_TUTOR_URL = "/api/getUser/rockc@oregonstate.edu";
	public static String GENERIC_TUTOR_FINDER_URL = "/api/getTutor/CS540 DBMS";
	public static String GENERIC_GET_ALL_COURSES_URL = "/api/CS/getAllCourses";
	public static String GENERIC_PASSWORD = "1234567";
	public static String GENERIC_GET_TIMESLOT_URL = "/api/schedule/timeslot/getTimeSlots/1000";
	public static String GENERIC_GET_TIMESLOT_RESULT = "[{\"StudentId\":\"1000\",\"TutorId\":\"1000\",\"Date\":\"2-11-2012\",\"startTime\":\"5pm\",\"endTime\":\"7pm\",\"confirmed\":false}]";
	public static String GENERIC_TIMESLOT_DATE = "2-11-2012";
	public static String GENERIC_TIMESLOT_STDUENTID = "1000";
	public static String GENERIC_TIMESLOT_TUTORID = "1000";
	public static String GENERIC_TIMESLOT_STARTTIME = "5pm";
	public static String GENERIC_TIMESLOT_ENDTIME = "7pm";



	
}
