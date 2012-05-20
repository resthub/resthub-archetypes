#set( $symbol_pound = '#' )
#set( $symbol_dollar = '$' )
#set( $symbol_escape = '\' )
package ${package}.service;

import javax.inject.Inject;
import javax.inject.Named;

import org.resthub.common.util.PostInitialize;

import ${package}.model.Sample;
import ${package}.repository.SampleRepository;

@Named("sampleInitializer")
public class SampleInitializer {

    @Inject
    @Named("sampleRepository")
    private SampleRepository sampleRepository;

    @PostInitialize
    public void init() {
        Sample sample = new Sample("testSample");
        sampleRepository.save(sample);
    }
}
