#set( $symbol_pound = '#' )
#set( $symbol_dollar = '$' )
#set( $symbol_escape = '\' )
package ${package}.repository;

import ${package}.model.Sample;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface SampleRepository extends MongoRepository<Sample, String> {

}
