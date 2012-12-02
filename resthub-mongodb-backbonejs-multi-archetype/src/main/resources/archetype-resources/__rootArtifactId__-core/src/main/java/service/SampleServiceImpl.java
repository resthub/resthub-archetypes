#set( $symbol_pound = '#' )
#set( $symbol_dollar = '$' )
#set( $symbol_escape = '\' )
package ${package}.service;

import org.resthub.common.service.CrudService;
import org.resthub.common.service.CrudServiceImpl;
import ${package}.model.Sample;
import ${package}.repository.SampleRepository;

import javax.inject.Inject;
import javax.inject.Named;

/**
 * This SampleService implementation could be a RPC based service.
 */
@Named("sampleService")
public class SampleServiceImpl extends CrudServiceImpl<Sample, String, SampleRepository> implements SampleService {

    @Inject
    @Override
    public void setRepository(SampleRepository repository) {
        this.repository = repository;
    }

}
