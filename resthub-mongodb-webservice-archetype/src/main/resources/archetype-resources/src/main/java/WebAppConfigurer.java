#set( $symbol_pound = '#' )
#set( $symbol_dollar = '$' )
#set( $symbol_escape = '\' )
package ${package};

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.ImportResource;
import org.springframework.data.mongodb.repository.config.EnableMongoRepositories;

@Configuration
@EnableMongoRepositories("${package}.repository")
@ImportResource({"classpath*:resthubContext.xml", "classpath*:applicationContext.xml"})
public class WebAppConfigurer {

    /*
    * Instead of declaring beans with <bean> tags in an applicationContext.xml file,
    * you can implement methods (annotated @Bean) returning the actual java bean.
    */
    /*
    @Bean(name="helloBean")
    public HelloWorld helloWorld() {
        return new HelloWorldImpl();
    }
    */

}