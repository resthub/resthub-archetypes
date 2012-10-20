#set( $symbol_pound = '#' )
#set( $symbol_dollar = '$' )
#set( $symbol_escape = '\' )
package ${package}.repository;

import org.springframework.data.mongodb.repository.MongoRepository;

import ${package}.model.Sample;

public interface SampleRepository extends MongoRepository<Sample, String> {

}
