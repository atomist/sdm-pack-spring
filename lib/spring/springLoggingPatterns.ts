
/**
 * Successs patterns when Spring Boot starts on Tomcat
 * @type {RegExp}
 */
export const SpringBootSuccessPatterns = [
    /Tomcat started on port/,
    /Tomcat initialized with port/,
    /Started [A-Za-z0-9_$]+ in [0-9]+.[0-9]+ seconds/,
];
