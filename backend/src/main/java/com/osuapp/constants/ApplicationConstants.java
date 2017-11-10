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
	public static String GET_USER_END_POINT = "/osu/api/getUser/";
	public static String GET_ALL_USERS = "/osu/api/getAllUsers";
	public static String GET_USER = "/osu/api/getUser/{email:.+}";
	public static String ADD_USER = "/osu/api/addUser";
	public static String GET_TUTOR = "/osu/api/getTutor/{subjectName}";
	public static String UPDATE_USER = "/osu/api/updateUser";
	public static String GET_ALL_COURSES_BY_DEPTARTMENT = "/osu/api/{departmentName}/getAllCourses";
	
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
	public static String EXPECTED_TEST_RESULT_LOCATION = "/osu/api/getUser/rockc@oregonstate.edu";
	public static String GENERIC_TUTOR_URL = "/osu/api/getUser/rockc@oregonstate.edu";
	public static String GENERIC_TUTOR_FINDER_URL = "/osu/api/getTutor/CS540 DBMS";
	public static String GENERIC_GET_ALL_COURSES_URL = "/osu/api/CS/getAllCourses";
	public static String GENERIC_PASSWORD = "1234567";

}
